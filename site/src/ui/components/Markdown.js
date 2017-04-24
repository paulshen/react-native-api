import React from 'react';
import marked from 'marked';

import Config from '../../Config';

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  if (href.indexOf('http') !== 0) {
    href = `${Config.OfficialDocsUrl}${href}`;
  }
  return `<a href="${href}"${title ? ` title="${title}"` : ''}>${text}</a>`;
};

export default class Markdown extends React.Component {
  componentDidMount() {
    if (this.props.children) {
      this._root.innerHTML = marked(this.props.children, { renderer });
    }
  }

  render() {
    return <div ref={c => this._root = c} />;
  }
}
