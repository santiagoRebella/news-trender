"use strict"

const React = require('react');
const rc = React.createElement;
const External = require('./external');
const styles = require('../styles');

class Footer extends React.Component {

    render() {
      return rc("footer", {style: styles.footer},
        rc(External, {tagsString: this.props.tagsString})
      );
    }
}

Footer.propTypes = {
  tagsString: React.PropTypes.string.isRequired
};

module.exports = Footer;
