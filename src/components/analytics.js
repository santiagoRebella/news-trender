"use strict"

const React= require('react');
const rc = React.createElement;

class Analytics extends React.Component {
    render() {
      const getAnalyticsScriptString = () => {
        return this.props.scriptString;
      };
      return rc("script", {
        dangerouslySetInnerHTML: {__html: getAnalyticsScriptString()}
      });
    }
}

Analytics.propTypes = {
  scriptString: React.PropTypes.string.isRequired
};

module.exports = Analytics;
