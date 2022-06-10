#!/bin/bash

# clear
rm -rf node_modules
rm -rf .nuxt
rm -rf .eslintcache
rm -rf store/firebase
rm -rf store/ui
rm -rf store/integration

# aliases
mkdir store/integration
ln -sf $PWD/aspec-toolkit/store/firebase $PWD/store/firebase
ln -sf $PWD/aspec-toolkit/store/ui $PWD/store/ui
ln -sf $PWD/aspec-toolkit/store/integration/govtrans $PWD/store/integration/govtrans

# run
yarn install
yarn dev
