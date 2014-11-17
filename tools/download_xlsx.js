var fs = require('fs');
var google = require('googleapis');
var request = require('request');
var untildify = require('untildify');

var drive = google.drive('v2');

var authClient = new google.auth.JWT(
  '1056949976797-1r1psc63aifjjllsbmreflq5vaqmgqm9@developer.gserviceaccount.com',
  './key.pem',
  null,
  ['https://www.googleapis.com/auth/drive']
);

function downloadFile(fileUrl, authClient) {
  'use strict';
  request({
    uri: fileUrl,
    headers: {
      authorization: 'Bearer ' + authClient.credentials.access_token
    }
  }).pipe(fs.createWriteStream('data.xlsx'));
}

authClient.authorize(function(err) {
  'use strict';

  if (err) {
    console.log(err);
    return;
  }


  drive.files.get({auth: authClient, fileId: '1ZeKPxN06rhi1r2IUJsoYiFlX3CV6zevmZRD3-VDhdLk'}, function(err, response) {
    if (err) {
      console.log(err);
      return;
    }

    downloadFile(response.exportLinks['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], authClient);
  });
});
