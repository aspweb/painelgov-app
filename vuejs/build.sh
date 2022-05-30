#!/bin/bash
git pull

# lib folders
rm -rf dist
rm -rf node_modules
rm -rf .nuxt
rm -rf .eslintcache

# maintenance screen
rm -rf ../public
cp -r ../maintenance ../public

# aspec toolkit
rm -rf store/integration
rm -rf store/firebase
rm -rf store/ui
mkdir store/integration
cp -r aspec-toolkit/store/integration/govtrans store/integration/govtrans
cp -r aspec-toolkit/store/firebase store/firebase
cp -r aspec-toolkit/store/ui store/ui

# vuejs deploy
yarn install
yarn build
yarn generate

# finish
cp dist/index.html dist/index.php
rm -rf ../public
cp -r dist ../public
