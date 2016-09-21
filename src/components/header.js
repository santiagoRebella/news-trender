"use strict"

const React= require('react');
const rc = React.createElement;
const styles = require('../styles');
const External = require('../components/external');

class Header extends React.Component {
  render() {
    const trendNumber = this.props.trendRank || this.props.trendRank === 0 ? rc("small", {style: styles.rank}, `${this.props.trendRank + 1}`) : "";

    return rc("header", {style: styles.header},
      rc("h1", {style: styles.h1}, this.props.title,
        trendNumber
      ),
      rc(External, {tagsString: this.props.tagsString})
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  trendRank: React.PropTypes.number,
  tagsString: React.PropTypes.string.isRequired
};

module.exports = Header;
