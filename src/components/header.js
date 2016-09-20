"use strict"

const React= require('react');
const rc = React.createElement;
const styles = require('./styles');
const Ad = require('./ad');

class Header extends React.Component {
  render() {
    const trendString = this.props.trendRank ? `trend number ${this.props.trendRank + 1}` : "";

    return rc("header", {style: styles.header},
      rc("h1", {style: styles.h1}, this.props.title,
        rc("small", {style: styles.rank}, trendString)
      ),
      rc(Ad, {adString: this.props.adString})
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  trendRank: React.PropTypes.number,
  adString: React.PropTypes.string.isRequired
};

module.exports = Header;
