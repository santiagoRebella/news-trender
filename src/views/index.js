"use strict"

const React = require('react');
const rc = React.createElement;
const Header = require('../components/header');
const External = require('../components/external');
const LinksBox = require('../components/links-box');
const Footer = require('../components/footer');
const constants = require('../constants');
const styles = require('../styles');

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
              tagsString: constants.topBanner
            })
          ),
          rc("section", {style: {float: "left"}},
            rc(External, {tagsString: constants.sideBannerBig})
          ),
          rc("section", {style: {display: "inline-block", padding: 10}},
            rc(LinksBox, {data: this.props.data})
          ),
          rc("section", {style: {float: "right"}},
            rc(External, {tagsString: constants.sideBannerBig})
          ),
          rc("section", {},
            rc(Footer, {tagsString: constants.footerBannerBig})
          ),
          rc("section", {},
            rc(External, {tagsString: constants.analytics})
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
