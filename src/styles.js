"use strict";

const colors = {
  yellow: '#FFD800',
  green: '#587058',
  blue: '#587498',
  red: '#E86850'
};

module.exports = {
  html: {
    width: '100%',
    height: '100%',
    fontSize: '62.5%'
  },
  body: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'Verdana, Arial',
    fontSize: '1.2rem',
    backgroundColor: 'rgba(0, 120, 120, 0.3)'
  },
  h1: {
    backgroundColor: 'rgba(120, 0, 0, 0.1)',
    borderBottom: '2px solid black',
    fontSize: '1.2rem',
    fontWeight: 'normal'
  },
  a: {
    textDecoration: 'none',
    display: 'inline-block',
    marginLeft: 15
  },
  container: {
    maxWidth: 1024,
    margin: '0 auto'
  },
  sectionLeftAd: {
    display: 'inline-block',
    verticalAlign: 'top'
  },
  sectionRightAd: {
    display: 'inline-block',
    verticalAlign: 'top'
  },
  sectionContent: {
    display: 'inline-block',
    maxWidth: 424
  },
  header: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  footer: {
    width: '100%',
    textAlign: 'center'
  },
  rank: {
    display: 'inline-block',
    fontWeight: 'normal',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    margin: 10,
    width: 20,
    padding: 1,
    fontSize: '0.8rem'
  },
  linkRow : {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    margin: 5,
    textDecoration: 'none',
    maxWidth: 250,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  trendRelated: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    margin: 5
  },
  trendRelatedTitle: {
    fontSize: '1.1rem',
    marginTop: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  indexSpan: {
    color: 'black'
  }
};
