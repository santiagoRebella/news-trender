"use strict";

const React= require('react');
const ReactDOMServer = require('react-dom/server');

const searcher= require('./searcher');
const trender = require('./trender');
const scrapper = require('./scrapper');
const parsePages = require('./parse-pages');
const proper = require('./proper');

const Page = require('../src/components/page');
const Index= require('../src/components/index');

let AI = {};

AI.trends = [];
AI.properData = [];

AI.searcher = (data, server) => {
  searcher(data)
    .then(results => AI.scrapper(results, server))
    .catch(err => console.error('error on searcher -->', err));
};

AI.scrapper = (results, server) => {
  scrapper(results)
    .then(data => {
      AI.properData = parsePages(data);
      AI.render(proper(parsePages(data)), server);
    })
    .catch(err => console.error('error on scrapper -->', err));
};

AI.init = (server) => {
  trender()
    .then((data) => {
      AI.trends = data;
      AI.searcher(data, server);
    })
    .catch((data) => { console.error('error on trender -->', data); });

};

AI.render = (data, server) => {

  server.get('/:key', function (req, res) {
    if (data[req.params.key]) {
      const page = React.createElement(Page, {data: data[req.params.key]});
      res.send(ReactDOMServer.renderToStaticMarkup(page));
    }
  });
  server.get('/', function (req, res) {
    const index = React.createElement(Index, {data: data});
    res.send(ReactDOMServer.renderToStaticMarkup(index));
  });

};


module.exports = AI;



