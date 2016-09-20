"use strict"

const React= require('react');
const rc = React.createElement;
const styles = require('./styles');

class Ad extends React.Component {
    render() {
      const getRawAdString = () => {
        return this.props.adString
      }
      return rc("aside", {
        dangerouslySetInnerHTML: {__html: getRawAdString()},
        style: styles.aside
      });
    }
}

Ad.propTypes = {
  adString: React.PropTypes.string.isRequired
};

module.exports = Ad;
