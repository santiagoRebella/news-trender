"use strict"

const React = require('react');
const rc = React.createElement;
const Header = require('../components/header');
const Footer = require('../components/footer');
const External = require('../components/external');
const TrendResults = require('../components/trend-results');
const constants = require('../constants');
const styles = require('../styles');

class Page extends React.Component {

  render() {
    let title = this.props.data[0].term.val;
    let trendRank = this.props.data[0].term.index;

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
        rc("section", {},
          rc(Header, {
            title: title,
            trendRank,
            tagsString: constants.topBanner
          })
        ),
        rc("section", { style: styles.container },
          rc("section", {style: styles.sectionLeftAd},
            rc(External, {tagsString: constants.sideBannerBig})
          ),
          rc("section", {style: styles.sectionContent},
            rc(TrendResults, {data: this.props.data})
          ),
          rc("section", {style: styles.sectionRightAd},
            rc(External, {tagsString: constants.sideBannerBig})
          )
        ),
        rc("section", {},
          rc(Footer, {tagsString: constants.footerBannerBig})
        ),
        rc("section", {},
          rc(External, {tagsString: constants.analytics})
        )
      )
    );
  }
}

Page.propTypes = {
  data: React.PropTypes.array.isRequired
};

module.exports = Page;
