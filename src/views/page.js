"use strict"

const React = require('react');
const rc = React.createElement;
const styles = require('../components/styles');
const Header = require('../components/header');
const Ad = require('../components/ad');
const Footer = require('../components/footer');
const Analytics = require('../components/analytics');
const constants = require('../constants');

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

class Page extends React.Component {

  render() {
    let title = this.props.data[0].term.val;
    let trendRank = this.props.data[0].term.index;

    let related = this.props.data.map((item, ind) => {
      item.titles = unique(item.titles);
      let title = item.titles.map((t, index)=> {
        return rc("h2", {key: t + "" + index}, t
        );
      });
      let p = item.p.map((par, index) => {
        return rc("p", {key: "par" + index}, par);
      });

      return rc("div", {
          style: styles.nav,
          key: "rel" + ind
        },
        title,
        p,
        rc("a", {href: "http://"+ item.url.host + "/" + item.url.path}, item.url.host)
      );
    });

    /*let related = {
      url: item.url,
      term: item.term,
      titles: [],
      p: [],
      divs: [],
      keywords: []
    };
*/
    return rc("html", {},
      rc("head", {},
        rc("meta", { charSet: "utf-8"}),
        rc("meta", {
          name:"viewport",
          content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, minimal-ui"
        }),
        rc("meta", { name: "keywords", content: title}),
        rc("meta", { name: "robots", content: "index,follow"}),
        rc("meta", { name: "description", content: "latest news about " + title}),
        rc("title", {}, title)
      ),
      rc("body", {style: styles.body},
        rc("div", { style: styles.container },
          rc("section", {},
            rc(Header, { title: title, trendRank, adString: constants.topBanner })
          ),
          rc("section", {style: {float: "left"}},
            rc(Ad, {adString: constants.sideBannerBig})
          ),
          rc("section", {style: {display: "inline-block", width: 424, padding: 10}},
            related
          ),
          rc("section", {style: {float: "right"}},
            rc(Ad, {adString: constants.sideBannerBig})
          ),
          rc("section", {},
            rc(Footer, {adString: constants.footerBannerBig})
          ),
          rc("section", {},
            rc(Analytics, {scriptString: constants.analytics})
          )
        )
      )
    );
  }
}

Page.propTypes = {
  data: React.PropTypes.array.isRequired
};

module.exports = Page;
