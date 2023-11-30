# This script should kinda replace the init.ts script.

echo "> Compiling contracts"
make compile

echo "> Drop postgress db"
cargo sqlx database drop -y

echo "> Setup postgres db"
cd core/lib/dal
DATABASE_URL="postgres://postgres@localhost/zksync_local"

echo "Using localhost databese:"
echo $DATABASE_URL
cargo sqlx database create
cargo sqlx migrate run
cargo sqlx prepare --check -- --tests || cargo sqlx prepare -- --tests

echo "> Clean rocksdb"
rm -rf db
echo "Successfully removed db/"

echo "> Clean backups"
rm -rf backups
echo "Successfully removed backups/"
