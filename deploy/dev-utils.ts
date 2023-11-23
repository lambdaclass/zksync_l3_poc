import { BigNumberish, BytesLike, ethers, ContractInterface } from "ethers";
import { EIP712Signer, Provider } from "zksync-web3";
import { Address, EthereumSignature, Signature, TransactionReceipt } from "zksync-web3/build/src/types";
import { Interface } from "@ethersproject/abi";

// export const ZKSYNC_MAIN_ABI = require("../abi/IZkSync.json").abi as Interface;
// export const CONTRACT_DEPLOYER = require("../abi/ContractDeployer.json").abi as Interface;
// export const L1_MESSENGER = require("../abi/IL1Messenger.json").abi as Interface;
// export const IERC20 = require("../abi/IERC20.json").abi as Interface;
// export const IERC1271 = require("../abi/IERC1271.json").abi as Interface;
// export const L1_BRIDGE_ABI = require("../abi/IL1Bridge.json").abi as Interface;
// export const L2_BRIDGE_ABI = require("../abi/IL2Bridge.json").abi as Interface;
// export const NONCE_HOLDER_ABI = require("../abi/INonceHolder.json").abi as Interface;
// export const PAYMASTER_FLOW_ABI = require("../abi/IPaymasterFlow.json").abi as Interface;

export const ETH_ADDRESS = "0x0000000000000000000000000000000000000000";
export const BOOTLOADER_FORMAL_ADDRESS = "0x0000000000000000000000000000000000008001";
export const CONTRACT_DEPLOYER_ADDRESS = "0x0000000000000000000000000000000000008006";
export const L1_MESSENGER_ADDRESS = "0x0000000000000000000000000000000000008008";
export const L2_ETH_TOKEN_ADDRESS = "0x000000000000000000000000000000000000800a";
export const NONCE_HOLDER_ADDRESS = "0x0000000000000000000000000000000000008003";

export const L1_TO_L2_ALIAS_OFFSET = "0x1111000000000000000000000000000000001111";

export const EIP1271_MAGIC_VALUE = "0x1626ba7e";

export const EIP712_TX_TYPE = 0x71;
export const PRIORITY_OPERATION_L2_TX_TYPE = 0xff;

export const MAX_BYTECODE_LEN_BYTES = ((1 << 16) - 1) * 32;

// Currently, for some reason the SDK may return slightly smaller L1 gas limit than required for initiating L1->L2
// transaction. We use a coefficient to ensure that the transaction will be accepted.
export const L1_FEE_ESTIMATION_COEF_NUMERATOR = 12;
export const L1_FEE_ESTIMATION_COEF_DENOMINATOR = 10;

// This gas limit will be used for displaying the error messages when the users do not have enough fee.
export const L1_RECOMMENDED_MIN_ERC20_DEPOSIT_GAS_LIMIT = 400_000;
export const L1_RECOMMENDED_MIN_ETH_DEPOSIT_GAS_LIMIT = 200_000;

// The large L2 gas per pubdata to sign. This gas is enough to ensure that
// any reasonable limit will be accepted. Note, that the operator is NOT required to
// use the honest value of gas per pubdata, and it can use any value up to the one signed by the user.
// In the future releases, we will provide a way to estimate the current gasPerPubdata.
export const DEFAULT_GAS_PER_PUBDATA_LIMIT = 50_000;

// It is possible to provide practically any gasPerPubdataByte for L1->L2 transactions, since
// the cost per gas will be adjusted respectively. We will use 800 as a relatively optimal value for now.
export const REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT = 800;

export function isETH(token: Address) {
    return token.toLowerCase() == ETH_ADDRESS || token.toLowerCase() == L2_ETH_TOKEN_ADDRESS;
}

export function sleep(millis: number) {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

export function create2Address(
    sender: Address,
    bytecodeHash: BytesLike,
    salt: BytesLike,
    input: BytesLike = "",
): string {
    const prefix = ethers.utils.keccak256(ethers.utils.arrayify("zksyncCreate2"));
    const inputHash = ethers.utils.keccak256(input);
    const addressBytes = ethers
        .utils
        .keccak256(
            ethers.utils.concat([prefix, ethers.utils.zeroPad(sender, 32), salt, bytecodeHash, inputHash]),
        )
        .slice(26);
    return ethers.utils.getAddress(addressBytes);
}

export function createAddress(sender: Address, senderNonce: BigNumberish) {
    const prefix = ethers.utils.keccak256(ethers.utils.arrayify("zksyncCreate"));
    const addressBytes = ethers
        .utils
        .keccak256(
            ethers.utils.concat([
                prefix,
                ethers.utils.zeroPad(sender, 32),
                ethers.utils.zeroPad(ethers.utils.hexlify(senderNonce), 32),
            ]),
        )
        .slice(26);

    return ethers.utils.getAddress(addressBytes);
}

export async function checkBaseCost(
    baseCost: ethers.BigNumberish,
    value: ethers.BigNumberish | Promise<ethers.BigNumberish>,
): Promise<void> {
    if (baseCost > (await value)) {
        throw new Error(
            `The base cost of performing the priority operation is higher than the provided value parameter ` +
                `for the transaction: baseCost: ${baseCost}, provided value: ${value}`,
        );
    }
}

// export function hashBytecode(bytecode: ethers.BytesLike): Uint8Array {

//     if (bytecode.length % 32 != 0) {
//         throw new Error("The bytecode length in bytes must be divisible by 32");
//     }

//     if (bytecode.length > MAX_BYTECODE_LEN_BYTES) {
//         throw new Error(`Bytecode can not be longer than ${MAX_BYTECODE_LEN_BYTES} bytes`);
//     }

//     const hashStr = ethers.utils.sha256(bytecode);
//     const hash = ethers.utils.arrayify(hashStr);

//     // Note that the length of the bytecode
//     // should be provided in 32-byte words.
//     const bytecodeLengthInWords = bytecode.length / 32;
//     if (bytecodeLengthInWords % 2 == 0) {
//         throw new Error("Bytecode length in 32-byte words must be odd");
//     }

//     const bytecodeLength = ethers.utils.arrayify(bytecodeLengthInWords);

//     // The bytecode should always take the first 2 bytes of the bytecode hash,
//     // so we pad it from the left in case the length is smaller than 2 bytes.
//     const bytecodeLengthPadded = ethers.utils.arrayify(ethers.utils.zeroPad(bytecodeLength, 2));

//     const codeHashVersion = new Uint8Array([1, 0]);
//     hash.set(codeHashVersion, 0);
//     hash.set(bytecodeLengthPadded, 2);

//     return hash;
// }

export function hashBytecode(bytecode: ethers.BytesLike): Uint8Array {
    // For getting the consistent length we first convert the bytecode to UInt8Array
    const bytecodeAsArray = ethers.utils.arrayify(bytecode);
  
    if (bytecodeAsArray.length % 32 != 0) {
      throw new Error("The bytecode length in bytes must be divisible by 32");
    }
  
    const hashStr = ethers.utils.sha256(bytecodeAsArray);
    const hash = ethers.utils.arrayify(hashStr);
  
    // Note that the length of the bytecode
    // should be provided in 32-byte words.
    const bytecodeLengthInWords = bytecodeAsArray.length / 32;
    if (bytecodeLengthInWords % 2 == 0) {
      throw new Error("Bytecode length in 32-byte words must be odd");
    }
    const bytecodeLength = ethers.utils.arrayify(bytecodeAsArray.length / 32);
    if (bytecodeLength.length > 2) {
      throw new Error("Bytecode length must be less than 2^16 bytes");
    }
    // The bytecode should always take the first 2 bytes of the bytecode hash,
    // so we pad it from the left in case the length is smaller than 2 bytes.
    const bytecodeLengthPadded = ethers.utils.zeroPad(bytecodeLength, 2);
  
    const codeHashVersion = new Uint8Array([1, 0]);
    hash.set(codeHashVersion, 0);
    hash.set(bytecodeLengthPadded, 2);
  
    return hash;
}

function getSignature(transaction: any, ethSignature?: EthereumSignature): Uint8Array {
    if (transaction?.customData?.customSignature && transaction.customData.customSignature.length) {
        return ethers.utils.arrayify(transaction.customData.customSignature);
    }

    if (!ethSignature) {
        throw new Error("No signature provided");
    }

    const r = ethers.utils.arrayify(ethers.utils.zeroPad(ethSignature.r, 32));
    const s = ethers.utils.arrayify(ethers.utils.zeroPad(ethSignature.s, 32));
    const v = ethSignature.v;

    return new Uint8Array([...r, ...s, v]);
}

export function eip712TxHash(transaction: any, ethSignature?: EthereumSignature) {
    const signedDigest = EIP712Signer.getSignedDigest(transaction);
    const hashedSignature = ethers.utils.keccak256(getSignature(transaction, ethSignature));

    return ethers.utils.keccak256(ethers.utils.concat([signedDigest, hashedSignature]));
}

const ADDRESS_MODULO = 2n ** 160n;

export function applyL1ToL2Alias(address: string): string {
    return ethers.utils.hexlify(
        ethers.utils.hexValue((BigInt(address) + BigInt(L1_TO_L2_ALIAS_OFFSET)) % ADDRESS_MODULO),
    );
}

export function undoL1ToL2Alias(address: string): string {
    let result = BigInt(address) - BigInt(L1_TO_L2_ALIAS_OFFSET);
    if (result < 0n) {
        result += ADDRESS_MODULO;
    }
    return ethers.utils.hexlify(ethers.utils.hexValue(result));
}

// /// Getters data used to correctly initialize the L1 token counterpart on L2
// export async function getERC20DefaultBridgeData(
//     l1TokenAddress: string,
//     provider: Provider,
// ): Promise<string> {
//     const token = IERC20__factory.connect(l1TokenAddress, provider);

//     const name = await token.name();
//     const symbol = await token.symbol();
//     const decimals = await token.decimals();

//     const coder = new AbiCoder();

//     const nameBytes = coder.encode(["string"], [name]);
//     const symbolBytes = coder.encode(["string"], [symbol]);
//     const decimalsBytes = coder.encode(["uint256"], [decimals]);

//     return coder.encode(["bytes", "bytes", "bytes"], [nameBytes, symbolBytes, decimalsBytes]);
// }

// /// The method that returns the calldata that will be sent by an L1 ERC20 bridge to its L2 counterpart
// /// during bridging of a token.
// export async function getERC20BridgeCalldata(
//     l1TokenAddress: string,
//     l1Sender: string,
//     l2Receiver: string,
//     amount: BigNumberish,
//     bridgeData: BytesLike,
// ): Promise<string> {
//     return L2_BRIDGE_ABI.encodeFunctionData("finalizeDeposit", [
//         l1Sender,
//         l2Receiver,
//         l1TokenAddress,
//         amount,
//         bridgeData,
//     ]);
// }

// The method with similar functionality is already available in ethers.js,
// the only difference is that we provide additional `try { } catch { }`
// for error-resilience.
//
// It will also pave the road for allowing future EIP-1271 signature verification, by
// letting our SDK have functionality to verify signatures.
function isECDSASignatureCorrect(address: string, msgHash: string, signature: Signature): boolean {
    try {
        return address == ethers.utils.recoverAddress(msgHash, signature);
    } catch {
        // In case ECDSA signature verification has thrown an error,
        // we simply consider the signature as incorrect.
        return false;
    }
}

// async function isEIP1271SignatureCorrect(
//     provider: Provider,
//     address: string,
//     msgHash: string,
//     signature: Signature,
// ): Promise<boolean> {
//     const accountContract = new ethers.Contract(address, IERC1271.fragments, provider);

//     // This line may throw an exception if the contract does not implement the EIP1271 correctly.
//     // But it may also throw an exception in case the internet connection is lost.
//     // It is the caller's responsibility to handle the exception.
//     const result = await accountContract.isValidSignature(msgHash, signature);

//     return result == EIP1271_MAGIC_VALUE;
// }

// async function isSignatureCorrect(
//     provider: Provider,
//     address: string,
//     msgHash: string,
//     signature: Signature,
// ): Promise<boolean> {
//     let isContractAccount = false;

//     const code = await provider.getCode(address);
//     isContractAccount = ethers.utils.arrayify(code).length != 0;

//     if (!isContractAccount) {
//         return isECDSASignatureCorrect(address, msgHash, signature);
//     } else {
//         return await isEIP1271SignatureCorrect(provider, address, msgHash, signature);
//     }
// }

// // Returns `true` or `false` depending on whether the account abstraction's
// // signature is correct. Note, that while currently it does not do any `async` actions.
// // in the future it will. That's why the `Promise<boolean>` is returned.
// export async function isMessageSignatureCorrect(
//     provider: Provider,
//     address: string,
//     message: Uint8Array | string,
//     signature: Signature,
// ): Promise<boolean> {
//     const msgHash = ethers.utils.hashMessage(message);
//     return await isSignatureCorrect(provider, address, msgHash, signature);
// }

// export async function estimateDefaultBridgeDepositL2Gas(
//     providerL1: Provider,
//     providerL2: Provider,
//     token: Address,
//     amount: BigNumberish,
//     to: Address,
//     from?: Address,
//     gasPerPubdataByte?: BigNumberish,
// ): Promise<bigint> {
//     // If the `from` address is not provided, we use a random address, because
//     // due to storage slot aggregation, the gas estimation will depend on the address
//     // and so estimation for the zero address may be smaller than for the sender.
//     from ??= ethers.Wallet.createRandom().address;

//     if (token == ETH_ADDRESS) {
//         return await providerL2.estimateL1ToL2Execute({
//             contractAddress: to,
//             gasPerPubdataByte: gasPerPubdataByte,
//             caller: from,
//             calldata: "0x",
//             l2Value: amount,
//         });
//     } else {
//         const l1ERC20BridgeAddresses = (await providerL2.getDefaultBridgeAddresses()).erc20L1 as string;
//         const erc20BridgeAddress = (await providerL2.getDefaultBridgeAddresses()).erc20L2 as string;
//         const bridgeData = await getERC20DefaultBridgeData(token, providerL1);
//         return await estimateCustomBridgeDepositL2Gas(
//             providerL2,
//             l1ERC20BridgeAddresses,
//             erc20BridgeAddress,
//             token,
//             amount,
//             to,
//             bridgeData,
//             from,
//             gasPerPubdataByte,
//         );
//     }
// }

export function scaleGasLimit(gasLimit: bigint): bigint {
    return (
        (gasLimit * BigInt(L1_FEE_ESTIMATION_COEF_NUMERATOR)) /
        BigInt(L1_FEE_ESTIMATION_COEF_DENOMINATOR)
    );
}

// export async function estimateCustomBridgeDepositL2Gas(
//     providerL2: Provider,
//     l1BridgeAddress: Address,
//     l2BridgeAddress: Address,
//     token: Address,
//     amount: BigNumberish,
//     to: Address,
//     bridgeData: BytesLike,
//     from: Address,
//     gasPerPubdataByte?: BigNumberish,
// ): Promise<bigint> {
//     const calldata = await getERC20BridgeCalldata(token, from, to, amount, bridgeData);
//     return await providerL2.estimateL1ToL2Execute({
//         caller: applyL1ToL2Alias(l1BridgeAddress),
//         contractAddress: l2BridgeAddress,
//         gasPerPubdataByte: gasPerPubdataByte,
//         calldata: calldata,
//     });
// }
