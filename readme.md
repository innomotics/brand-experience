
After cloning the repo
1. run npm init in the root directory
2. build with lerna run build
3. publish with lerna publish --no-private


Notes:
Every folder under the "packages" folder means a Lerna package. The package name in that folders package.json's name property.

Create components under stencil-lib/src/components

You can build any package in the package folder by npm run build

You can run the test apps in their folder by
- npm run dev (Vue and React)
- ng serve (Angular)
