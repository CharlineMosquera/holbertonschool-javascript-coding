#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log('code: ', response.statusCode);
  }
});
