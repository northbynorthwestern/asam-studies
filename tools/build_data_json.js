var fs = require('fs');
var marked = require('marked');
var XLSX = require('xlsx');

marked.setOptions({
  smartypants: true
});

var SHEETS = [
  'META',
  'BAND',
  'FIELD',
  'GAME',
  'PARENTS',
  'PRESS',
  'PARENTSTAILGATE',
  'STUDENTTAILGATE',
  'SUPERFAN',
  'TEAM',
  'STAFF',
  'SID'
];

var DATA = {};

DATA.SHEETS = {
  list: []
};

var workbook = XLSX.readFile('data.xlsx');

SHEETS.forEach(function(sheet) {
  'use strict';

  var worksheet = workbook.Sheets[sheet];

  var temp = {};

  for (var cell in worksheet) {
    if (cell[0] === '!') { continue; }
    if (cell[0] === 'A') {
      var aCell = worksheet[cell];
      aCell = aCell ? aCell.v : '';

      var cellNumber = cell.match(/\d+/)[0];

      var bCell = worksheet['B' + cellNumber];
      bCell = bCell ? bCell.v : '';

      var cCell = worksheet['C' + cellNumber];
      cCell = cCell ? cCell.v : '';

      if (cCell === 'markdown') {
        bCell = marked(bCell);
      }

      if (temp[aCell]) {
        if (Array.isArray(temp[aCell]) && temp[aCell].length > 1) {
          temp[aCell].push(bCell);
        } else {
          temp[aCell] = [temp[aCell], bCell];
        }
      } else {
        temp[aCell] = bCell;
      }
    }
  }

  DATA[sheet] = temp;
  temp.sheet = sheet;
  DATA.SHEETS.list.push(temp);
});

fs.writeFileSync('data.json', JSON.stringify(DATA, null, 2));
