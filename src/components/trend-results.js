"use strict"

const React = require('react');
const rc = React.createElement;
const styles = require('../styles');

class TrendResults extends React.Component {
  render() {
    let related = this.props.data.map((item, ind) => {
      let title = item.titles.map((t, index) => {
        return rc("h2", { key: t + "" + index, style: styles.trendRelatedTitle }, t
        );
      });
      let p = item.p.map((par, index) => {
        return rc("p", { key: "par" + index }, par);
      });

      return rc("div", {
        style: styles.trendRelated,
        key: "rel" + ind
      },
        title,
        p,
        rc("a", { href: `http://${item.url.host}/${item.url.path}` }, item.url.host)
      );
    });

    return rc("div", {},
      related
    );

    /*let related = {
      url: item.url,
      term: item.term,
      titles: [],
      p: [],
      divs: [],
      keywords: []
    };
  */
  }
}

TrendResults.propTypes = {
  data: React.PropTypes.array.isRequired
};

module.exports = TrendResults;
