"use strict"

const React= require('react');
const rc = React.createElement;

class External extends React.Component {
    render() {
      const getRawScriptString = () => {
        return this.props.tagsString
      }
      return rc("aside", {
        dangerouslySetInnerHTML: {__html: getRawScriptString()}
      });
    }
}

External.propTypes = {
  tagsString: React.PropTypes.string.isRequired
};

module.exports = External;
