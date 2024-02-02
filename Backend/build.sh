# build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

echo "Instalando dependências..."
npm install

echo "Construindo o projeto..."
npm run build

echo "Aplicando migrações..."
npm run typeorm-ts-node-esm migration:run -- -d dist/data-source.js