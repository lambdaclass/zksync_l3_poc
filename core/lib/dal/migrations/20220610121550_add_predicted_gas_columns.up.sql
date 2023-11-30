ALTER TABLE blocks ADD COLUMN IF NOT EXISTS predicted_commit_gas_cost BIGINT NOT NULL DEFAULT 0;
ALTER TABLE blocks ADD COLUMN IF NOT EXISTS predicted_prove_gas_cost BIGINT NOT NULL DEFAULT 0;
ALTER TABLE blocks ADD COLUMN IF NOT EXISTS predicted_execute_gas_cost BIGINT NOT NULL DEFAULT 0;

ALTER TABLE eth_txs ADD COLUMN IF NOT EXISTS predicted_gas_cost BIGINT NOT NULL DEFAULT 0;
