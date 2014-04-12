# browserify-shim-nvd3


An isolated example of issues using browserify-shim with nvd3

## Installation
### Get the repo
* `git clone https://github.com/jfsiii/browserify-shim-nvd3.git`
* `cd browserify-shim-nvd3/`

### Show that nvd3 can be shimmed if a single file is used
* `git checkout tags/single-file-works`
* `npm install && npm test`

### Show that nvd3 is not shimmed when used as external with multiple bundles
* `git checkout tags/common-plus-page-not-ok`
* `npm install && npm test`

### Show that external bundles aren't the issue because jQuery and d3 work as expected
* ~~`git checkout tags/jquery-and-d3-are-shimmed-but-not-nvd3`~~
* `git checkout -b uses-build-script-two-working-externals-and-one-broken`
* `npm install && npm test`
