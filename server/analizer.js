"use strict";

const cheerio = require("cheerio");

const cleanFromTrash = (string) => {
  string = string.replace(/\r/g, '');
  string = string.replace(/\n/g, '');
  string = string.replace(/\t/g, '');
  string = string.replace(/\s\s+/g, '');

  return string;
};

function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

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
      if (item.attribs) {
        partial.metas.push(item.attribs);
        partial.metas.push(item.attribs.description);
      }
    });

    totals.push(partial);

  });

  let cleanTotals = {};

  totals.forEach(item => {
    let key = item.term.val.replace(/ /g, '');
    cleanTotals[key] = [];
  });

  totals.forEach(item => {
    let key = item.term.val.replace(/ /g, '');

    let related = {
      url: item.url,
      term: item.term,
      titles: [],
      p: [],
      divs: [],
      keywords: []
    };

    if (item.titles) {
      item.titles.forEach(title => {
        if (title.indexOf(item.term.val) !== -1) { related.titles.push(title); }
      });
      related.titles = unique(related.titles);
    }

    if (item.p) {
      item.p.forEach(p => {
        if (p.indexOf(item.term.val) !== -1) { related.p.push(p); }
      });
      related.p = unique(related.p);
    }

    if (item.divs) {
      item.divs.forEach(div => {
        if (div.indexOf(item.term.val) !== -1) { related.divs.push(div); }
      });
      item.divs = unique(item.divs);
    }

    if (item.metas) {
      item.metas.forEach(meta => {
        if (meta.includes(item.term.val)) { related.keywords.push(meta); }
      });
    }

    cleanTotals[key].push(related);

  });

  return cleanTotals;

};
