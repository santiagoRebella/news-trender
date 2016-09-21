"use strict";

const colors = {
  yellow: '#FFD800',
  green: '#587058',
  blue: '#587498',
  red: '#E86850'
};

module.exports = {
  body: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'Verdana, Arial'
  },
  container: {
    maxWidth: 1045,
    margin: '0 auto'
  },
  nav: {
    minHeight: 60,
    display: 'inline-block'
  },
  header: {
    width: '100%',
    textAlign: 'center'
  },
  h1: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  footer: {
    width: '100%',
    textAlign: 'center'
  },
  rank: {
    fontWeight: 'bold',
    margin: 10
  },
  a: {
    textDecoration: 'none',
    display: 'inline-block',
    marginLeft: 15

  },
  linkRow : {
    display: 'block',
    padding: 10,
    margin: '10px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    textDecoration: 'none',
    maxWidth: 250,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  trendRelated: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid black',
    borderRadius: 5,
    padding: 5,
    margin: 5
  },

  indexSpan: {

  }
};
