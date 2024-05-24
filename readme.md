# Documentation

[The latest webdocs](https://innomotics.github.io/brand-experience/)

# Development

After cloning the repo
1. run npm install in the root directory
3. build with lerna run build (might need to install lerna package globally)
4. publish with lerna publish --no-private


Notes:
Every folder under the "packages" folder means a Lerna package. The package name in that folders package.json's name property.

Create components under stencil-lib/src/components

You can build any package in the package folder by npm run build

You can run the test apps in their folder by
- npm run dev (Vue and React)
- npm run start (Angular to clear cache before serve)
- npm start (Stencil)

You can start docusaurus in the webdocs package
- npx docusaurus start

You can upgrade npm packages using lernawizard
- npx lernaupdate
