"use strict";

const http = require('http');
const parseLinks = require('./parse-google-links');

module.exports = (rawData) => {

  let linksCollection = parseLinks(rawData);

  let itemsRequests = [];

  let counter = {
    reqs: 0,
    fullfilled: 0
  }

  let pages = new Promise( function (resolve, reject) {

    linksCollection.forEach((item) => {

      item.urls.forEach((url) => {

        let promi = new Promise( function (resol, reje) {

          let cleaned = url.replace(/http:\/\//g, '');
          cleaned = cleaned.replace(/https:\/\//g, '');

          const host = cleaned.split('/')[0];
          let path = url.split('.com/')[1];
          if (path) {
            path = path.split('&sa')[0];
            path = path.split('%3Flang%3Den')[0];
          }

          counter.reqs = counter.reqs + 1;

          http.get({ host: host, path: '/' + path }, (res) => {
            let bodyChunks = [];
            res.on('data', function(chunk) { bodyChunks.push(chunk); })
              .on('end', () => {
                let body = Buffer.concat(bodyChunks);
                counter.fullfilled = counter.fullfilled + 1;

                console.log(counter);

                resol({url: {host: host, path: path}, term: item.term, data: body});
              });
          }).on('error', (e) => {
            reje(e.message)
          });

        });

        itemsRequests.push(promi);

      });

    });

    Promise.all(itemsRequests)
      .then(values => { resolve(values); })
      .catch(data => { reject(data)});

  });

  return pages;


}
