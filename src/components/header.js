"use strict"

const React= require('react');
const rc = React.createElement;

class Header extends React.Component {

    render() {

        return rc("header", {},
          rc("h1", {}, this.props.title)
        );
    }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

module.exports = Header;
