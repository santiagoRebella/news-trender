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
  aside: {
    width: '20%',
    height: 60,
    display: 'inline-block',
    verticalAlign: 'top'
  },
  nav: {
    width: '60%',
    minHeight: 60,
    display: 'inline-block'
  },
  header: {
    width: '100%',
    height: 30
  },
  footer: {
    width: '100%',
    height: 30
  },
  h1: {
    textAlign: 'center'
  },
  a: {
    display: 'block',
    padding: 10,
    margin: '10px 0',
    backgroundColor: 'gray',
    textDecoration: 'none',
    maxWidth: 250,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};
