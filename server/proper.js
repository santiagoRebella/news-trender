"use strict";

module.exports = (data) => {

  let totals = {};

  data.forEach(item => {
    let key = item.term.val.replace(/ /g, '');
    totals[key] = [];
  });

  data.forEach(item => {
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
    }

    if (item.p) {
      item.p.forEach(p => {
        if (p.indexOf(item.term.val) !== -1) { related.p.push(p); }
      });
    }

    if (item.divs) {
      item.divs.forEach(div => {
        if (div.indexOf(item.term.val) !== -1) { related.divs.push(div); }
      });
    }

    if (item.metas) {
      item.metas.forEach(meta => {
        if (meta.includes(item.term.val)) { related.keywords.push(meta); }
      });
    }

    totals[key].push(related);

  });

  return totals;

};




