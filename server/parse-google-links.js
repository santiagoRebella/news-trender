"use strict";

const cheerio = require("cheerio");

module.exports = (data) => {
  let linksCollection = [];

  data.forEach(result => {
    const $ = cheerio.load(result.data);
    const anchorCollection = $('h3 a');
    let links = [];

    anchorCollection.each((index, anchor) => {
      const href = anchor.attribs.href;
      const isUrl = href.slice(0, 4) === '/url' ? true : false;

      if (isUrl) {
        links.push(href.replace(/\/url\?q\=/g, ''))
      }

    });

    linksCollection.push({term: result.term, urls: links});

  });

  return linksCollection;
};
