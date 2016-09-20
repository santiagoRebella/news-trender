"use strict"

const React = require('react');
const rc = React.createElement;
const styles = require('./styles');

class LinksBox extends React.Component {

    render() {
      let keys = Object.keys(this.props.data);
      let links = keys.map((item, index) => {
        return rc("div", {key: "page " + index, style: styles.linkRow},
          rc("span", {style: styles.indexSpan},
            this.props.data[keys[index]][0].term.index + 1
          ),
          rc("a", {
              href: "/" + keys[index],
              style: styles.a
            },
            this.props.data[keys[index]][0].term.val
          )
        )
      });

      return rc("nav", {},
        links
      );
    }
}

LinksBox.propTypes = {
  data: React.PropTypes.object.isRequired
};

module.exports = LinksBox;
