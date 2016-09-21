"use strict";

const http = require('http');

const url = 'www.google.com';

module.exports = (trends) => {
  let promCollection = [];

  let results = new Promise( (resolve, reject) => {
    trends.forEach((item) => {
      let promi = new Promise( function (resol, reje) {
          http.get({ host: url, path: `/search?q=${item.val.replace(/ /g, '+')}&tbs=qdr:d`}, (res) => {
            let bodyChunks = [];
            res.on('data', function(chunk) { bodyChunks.push(chunk); })
              .on('end', () => {
                let body = Buffer.concat(bodyChunks);
                resol({term: item, data: body});
              });
          }).on('error', (e) => {
            reje(e.message)
          });
      });
      promCollection.push(promi);
    });
    Promise.all(promCollection)
      .then(values => {
        resolve(values);
      })
      .catch(data => { reject(data)});
  });
  return results;
}
