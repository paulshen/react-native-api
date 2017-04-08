import React from 'react';
import marked from 'marked';

export default class Markdown extends React.Component {
  componentDidMount() {
    this._root.innerHTML = marked(this.props.children);
  }

  should
  render() {
    return <div ref={c => this._root = c} />;
  }
}
