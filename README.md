# zkSync L3 Proof of Concept

Proof of Concept of what a zkSync Era's L3 would look like

# Running the project

1. Setup the project
    ```
    make setup
    ```
2. Run `era-test-node`
    ```
    make run-node
    ```
3. Compile the contracts
    ```
    make compile
    ```
4. Deploy the contracts
    ```
    make deploy
    ```

# Roadmap

> Latest update: December 12th, 2023.

## Glossary

L1: Ethereum node.

L2: `era-test-node` for Setup and Isolated System milestones, `zksync_server` for the MVP.

L3: `zksync_server`.

## Milestones

| Milestone | Status |
| --- | --- |
| Setup | 🏗️ |
| Isolated System | ❌ |
| MVP: Full System | ❌ |

### 1. Setup

The idea here is to set up an L2 (`zksync_server`) as a base layer for an L3 (`zksync_server`) which has to be set up to recognize the L2 as an L1.

**Tasks**

- Deploy L1 contracts on L2.
- Verify deployed L1 contracts on L2.
- Initialize deployed L1 contracts on L2.
- Run an L3 connected to the L2.
- Deploy L2 contracts on L3.
- Verify deployed L1 contracts on L2.

### 2. Isolated System

Having the hole flow working for an isolated version of the system. This means, having an interoperable L2 and L3. A user should be able to run an L2 and an L3 and deposit, transfer, and withdraw from one to another.

**Tasks**

- **Deposit** from an L2 account to an L3 account.
- **Transfers** between L3 accounts.
- **Withdraw** from an L3 account to an L2 account.
- Script to initialize an L3.
- Example running 2 L3s.
- Example running an L4.

### 3. MVP: Full System

L1, L2, and L3 running successfully. A user should be able to run an L1 and an L2 as they normally do in `zksync-era`, plus running an L3.

**Tasks (WIP)**

- Cleanup `zksync_server`
