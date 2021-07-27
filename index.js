const ffi = require('ffi-napi');

const oposLib = ffi.Library(__dirname + '/OposLib', {
  'Test': [ 'string', [] ],
  'OpenDrawer': [ 'string', [] ],
});

exports.doTest = function() {
    return oposLib.Test();
}

exports.openDrawer = function () {
    return oposLib.OpenDrawer();
}
