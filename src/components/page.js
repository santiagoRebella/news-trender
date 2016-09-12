"use strict"

const React = require('react');
const rc = React.createElement;

class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      let title = this.props.data[0].term.val;
      let trendRank = this.props.data[0].term.index;

      let related = this.props.data.map((item, ind) => {
        let title = item.titles.map((t, index)=> {
          return rc("h2", {key: t + "" + index}, t);
        });
        let p = item.p.map((par, index) => {
          return rc("p", {key: "par" + index}, par);
        });

        return rc("div", {className:"related", key: "rel" + ind},

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
          rc("meta", { name: "keywords", content: ""}),
          rc("meta", { name: "robots", content: "index,follow"}),
          rc("meta", { name: "description", content: ""}),
          rc("title", {}, title)
        ),
        rc("body", {},
          rc("h1", {}, title, trendRank),
          related
        )
      );
    }
}

Page.propTypes = {
  data: React.propTypes.object.isRequired
};

module.exports = Page;
