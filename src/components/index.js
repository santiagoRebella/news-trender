"use strict"

const React = require('react');
const rc = React.createElement;
const styles = require('./styles');
const Header = require('./header');
const Ad = require('./ad');
const Footer = require('./footer');

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

      let keys = Object.keys(this.props.data);
      let links = keys.map((item, index) => {
        return rc("a", {
            href: "/" + keys[index],
            key: "page " + index,
            style: styles.a
          },
          this.props.data[keys[index]][0].term.val,
          this.props.data[keys[index]][0].term.index
        );
      });

      return rc("html", {},
        rc("head", {},
          rc("meta", { charSet: "utf-8"}),
          rc("meta", {
            name:"viewport",
            content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, minimal-ui"
          }),
          rc("meta", { name: "keywords", content: ""}),
          rc("meta", { name: "robots", content: "index,follow"}),
          rc("meta", { name: "description", content: ""}),
          rc("title", {}, "News Trender")
        ),
        rc("body", { style: styles.body },
          rc("section", {style: styles.header},
            rc(Header, { title: "News Trender"})
          ),
          rc("section", {style: styles.aside},
            rc(Ad, {})
          ),
          rc("section", {style: styles.nav},
            rc("nav", {},
              links
            )
          ),
          rc("section", {style: styles.aside},
            rc(Ad, {})
          ),
          rc("section", {style: styles.footer},
            rc("footer", {},
              rc(Footer, {})
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
