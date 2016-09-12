"use strict"

const React = require('react');
const rc = React.createElement;

class Footer extends React.Component {

    render() {

      return rc("footer", {},
        "footer text"
      );
    }
}

/*Footer.propTypes = {
  data: React.PropTypes.object.isRequired
};*/

module.exports = Footer;
