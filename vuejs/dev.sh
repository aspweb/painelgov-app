rm -rf node_modules
rm -rf .nuxt
rm -rf .eslintcache
rm -rf store/firebase
rm -rf store/ui
cp -r aspec-toolkit/store/firebase store/firebase
cp -r aspec-toolkit/store/ui store/ui
yarn install
yarn dev