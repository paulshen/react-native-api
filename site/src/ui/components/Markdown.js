import React from 'react';
import marked from 'marked';

export default class Markdown extends React.Component {
  componentDidMount() {
    if (this.props.children) {
      this._root.innerHTML = marked(this.props.children);
    }
  }

  render() {
    return <div ref={c => this._root = c} />;
  }
}
