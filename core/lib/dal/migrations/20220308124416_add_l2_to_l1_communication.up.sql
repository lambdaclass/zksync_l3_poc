ALTER TABLE blocks ADD COLUMN l2_to_l1_logs BYTEA[] NOT NULL DEFAULT '{}';
ALTER TABLE blocks ADD COLUMN l2_to_l1_messages BYTEA[] NOT NULL DEFAULT '{}';
