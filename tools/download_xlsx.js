var fs = require('fs');
var google = require('googleapis');
var request = require('request');
var untildify = require('untildify');

var drive = google.drive('v2');

var authClient = new google.auth.JWT(
  '747517571192-cdkvrk1qh2sbv49o6ps6d714vgsift8p@developer.gserviceaccount.com',
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


  drive.files.get({auth: authClient, fileId: '1o6kxwWQGsvhTPG7-LcQl3ZxkLcfq21JHHY8y92Mjm2Y'}, function(err, response) {
    if (err) {
      console.log(err);
      return;
    }

    downloadFile(response.exportLinks['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], authClient);
  });
});
