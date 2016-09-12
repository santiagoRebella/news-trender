"use strict"

const React= require('react');
const rc = React.createElement;

class Ad extends React.Component {

    render() {

      return rc("aside", {},
        'ad'
      );
    }
}

Ad.propTypes = {
  title: React.PropTypes.string.isRequired
};

module.exports = Ad;
