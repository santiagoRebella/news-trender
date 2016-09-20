"use strict"

const React = require('react');
const rc = React.createElement;
const styles = require('../components/styles');
const Header = require('../components/header');
const Ad = require('../components/ad');
const LinksBox = require('../components/links-box');
const Footer = require('../components/footer');
const Analytics = require('../components/analytics');
const constants = require('../constants');

class Index extends React.Component {

  render() {

    let keys = Object.keys(this.props.data);

    return rc("html", {},
      rc("head", {},
        rc("meta", { charSet: "utf-8"}),
        rc("meta", {
          name:"viewport",
          content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, minimal-ui"
        }),
        rc("meta", { name: "keywords", content: ""}),
        rc("meta", { name: "robots", content: "index,follow"}),
        rc("meta", { name: "description", content: "latest trends about" + keys.join(", ")}),
        rc("title", {}, "News Trender")
      ),
      rc("body", { style: styles.body },
        rc("div", { style: styles.container },
          rc("section", {},
            rc(Header, {
              title: "News Trender",
              adString: constants.topBanner
            })
          ),
          rc("section", {style: {float: "left"}},
            rc(Ad, {adString: constants.sideBannerBig})
          ),
          rc("section", {style: {display: "inline-block", padding: 10}},
            rc(LinksBox, {data: this.props.data})
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

Index.propTypes = {
  data: React.PropTypes.object.isRequired
};

module.exports = Index;
