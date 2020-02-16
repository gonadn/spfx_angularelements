const concat = require('concat');

(async function build() {
  const files = [
    './dist/SPFXAngularElements/runtime.js',
    './dist/SPFXAngularElements/polyfills.js',
    './dist/SPFXAngularElements/scripts.js',
    './dist/SPFXAngularElements/main.js'
  ];
  await concat(files, './dist/SPFXAngularElements/bundle.js');
  await concat(files, './plainHTML/bundle.js');
})();
