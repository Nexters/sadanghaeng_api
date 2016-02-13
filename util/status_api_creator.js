"use strict";

var status = require('../lib/server/status')
  , _ = require('underscore')
  , path = require('path')
  , fs = require('fs')
  ;

var createStatusDoc = function () {
  var location = path.resolve(__dirname, '../lib/route');

  var filestream = fs.createWriteStream(path.resolve(location, 'status_api.js'), {
    flags: 'w',
    defaultEncoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  });

  var filestream2 = fs.createWriteStream(path.resolve(location, 'status_all.js'), {
    flags: 'w',
    defaultEncoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  });

  filestream.write('"use strict";\n\n');
  filestream2.write('"use strict";\n\n');

  filestream2.write('/**\n * @api {get} / Status Codes\n * @apiName StatusCodes\n * @apiGroup StatusCodes\n *\n');

  _.mapObject(status.codes, (val, key) => {
    if (key !== 'Success') {
      filestream.write('/**\n');
      filestream.write(' * @apiDefine ' + key +'\n');
      filestream.write(' * @apiError ' + key + ' (' + val.code + ') ' + val.summary + '\n');
      filestream.write(' */\n\n');

      filestream2.write(' * @apiUse ' + key + '\n');
    }
  });

  filestream2.end(' */\n');
  filestream.end('');
  filestream.on('finish', () => {
    console.error('all writes are now complete.');

    process.exit(0);
  });
};

createStatusDoc();