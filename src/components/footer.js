"use strict"

const React = require('react');
const rc = React.createElement;
const Ad = require('./ad');
const styles = require('./styles');

class Footer extends React.Component {

    render() {
      return rc("footer", {style: styles.footer},
        rc(Ad, {adString: this.props.adString})
      );
    }
}

Footer.propTypes = {
  adString: React.PropTypes.string.isRequired
};

module.exports = Footer;
