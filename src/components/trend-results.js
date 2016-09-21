"use strict"

const React = require('react');
const rc = React.createElement;
const styles = require('../styles');

function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}


class TrendResults extends React.Component {
  render() {
    let related = this.props.data.map((item, ind) => {
      item.titles = unique(item.titles);
      let title = item.titles.map((t, index) => {
        return rc("h2", { key: t + "" + index }, t
        );
      });
      let p = item.p.map((par, index) => {
        return rc("p", { key: "par" + index }, par);
      });

      return rc("div", {
        style: styles.nav,
        key: "rel" + ind
      },
        title,
        p,
        rc("a", { href: "http://" + item.url.host + "/" + item.url.path }, item.url.host)
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
