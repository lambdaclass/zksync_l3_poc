.PHONY: setup compile deploy setup-node update-node run-node tx-output-local

# Main Commands

setup: setup-node
	yarn install

compile:
	yarn hardhat compile

deploy: deploy-verifier
	yarn hardhat deploy-zksync --script deploy/deploy-all.ts

# Node Commands

setup-node:
	[ -d "./era-test-node" ] || git clone --depth 1 git@github.com:matter-labs/era-test-node.git && \
	cd era-test-node && cargo install --path .

update-node:
	cd era-test-node && git pull && cargo install --path .

run-node:
	era_test_node --show-calls=all --resolve-hashes run

deploy-verifier:
	yarn hardhat deploy-zksync --script deploy/deploy-verifier.ts
