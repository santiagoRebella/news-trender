"use strict";

const http = require('http');
const cheerio = require("cheerio");
var Promise = require('promise');
const options = {
    host: 'www.google.com',
    path: '/trends/hottrends/atom/hourly'
  };

module.exports = () => {

  let promise = new Promise( function (resolve, reject) {

    const req = http.get(options, (res) => { //  console.log('STATUS: ' + res.statusCode, 'HEADERS: ' + JSON.stringify(res.headers));

      let bodyChunks = [];
      res.on('data', (chunk) => bodyChunks.push(chunk));

      res.on('end', () => {

        if (res.statusCode >= 200 && res.statusCode < 300) {
          let body = Buffer.concat(bodyChunks);
          let $raw = cheerio.load(body, {
            xmlMode: true,
            lowerCaseTagNames: false,
            withDomLvl1: true,
            normalizeWhitespace: false,
            decodeEntities: true
          });
          let cdata = $raw('content').html();
          let cleaned = cdata.replace(/<!\[CDATA\[([^\]]+)]\]>/ig, "$1");
          let $ = cheerio.load(cleaned);
          let trends = [];

          $("span.new a").each((index, item) => {
            trends.push({index, val: item.children[0].data});
          });

          resolve(trends);
        } else {
          reject(res.statusText);
        }
      });

    });

    req.on('error', (e) => {
      console.log('ERROR: ' + e.message);
    });

  });

  return promise;

};
