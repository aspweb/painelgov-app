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
ln -sf /home/dniel/code/painelgov/vuejs/aspec-toolkit/store/firebase /home/dniel/code/painelgov/vuejs/store/firebase
ln -sf /home/dniel/code/painelgov/vuejs/aspec-toolkit/store/ui /home/dniel/code/painelgov/vuejs/store/ui
ln -sf /home/dniel/code/painelgov/vuejs/aspec-toolkit/store/integration/govtrans /home/dniel/code/painelgov/vuejs/store/integration/govtrans

# run
yarn install
yarn dev
