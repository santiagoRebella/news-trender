"use strict";

const cheerio = require("cheerio");

const cleanFromTrash = (string) => {
  string = string.replace(/\r/g, '');
  string = string.replace(/\n/g, '');
  string = string.replace(/\t/g, '');
  string = string.replace(/\s\s+/g, '');

  return string;
};

module.exports = (pages) => {

  let totals = [];

  pages.forEach(result => {
    const $ = cheerio.load(result.data);
    $('script, style').remove();
    const titles = $('h1, h2, h3, h4, h5, h6, .title, .titles, .h1, .h2, .h3, .h4');
    const ps = $('p');
    const metas = $('meta');
    const divs = $('div');
    let partial = {
      term: result.term,
      url: result.url,
      p: [],
      divs: [],
      titles: [],
      metas: []
    };

    titles.each(function(index, item) {
      partial.titles.push(cleanFromTrash($(this).text()));
    });
    ps.each(function(index, item) {
      partial.p.push(cleanFromTrash($(this).text()));
    });
    divs.each(function(index, item) {
      partial.divs.push(cleanFromTrash($(this).text()));
    });
    metas.each(function(index, item) {
      console.log('metas each', item, item.attribs, item.attribs.keywords);
      if (item.attribs.keywords) {
        partial.metas.push(item.attribs.keywords);
        partial.metas.push(item.attribs.description);
      }
    });

    totals.push(partial);

  });

  return totals;


};
