import React from 'react';

import Data from '../../Data';
import ComponentPage from './ComponentPage';

const DataKeys = Object.keys(Data);

export default class MainPage extends React.Component {
  state = {
    filteredComponents: DataKeys,
    query: '',
  };

  _onChangeQuery = e => {
    let query = e.target.value;
    let [componentQuery] = query.split('.');
    let regex = new RegExp(componentQuery.split('').join('.*'), 'i');
    let filteredComponents = DataKeys.filter(
      componentName => regex.exec(componentName)
    );
    this.setState({
      filteredComponents,
      query,
    });
  };

  _onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({
        query: '',
        filteredComponents: DataKeys,
      });
    }
  };

  render() {
    let { filteredComponents } = this.state;

    return (
      <div style={Styles.Page}>
        <div>
          <input
            type="text"
            value={this.state.query}
            onChange={this._onChangeQuery}
            onKeyDown={this._onKeyDown}
          />
        </div>
        {filteredComponents.length <= 2
          ? <div>
              {filteredComponents.map(componentName => (
                <ComponentPage
                  componentName={componentName}
                  propQuery={this.state.query.split('.')[1]}
                  key={componentName}
                />
              ))}
            </div>
          : <div style={Styles.ComponentList}>
              {filteredComponents.map(componentName => (
                <div style={Styles.ComponentListEntry} key={componentName}>
                  {componentName}
                </div>
              ))}
            </div>}
      </div>
    );
  }
}

const Styles = {
  Page: {
    margin: '0 auto',
    maxWidth: 1200,
    paddingTop: 100,
  },
  ComponentList: {
    WebkitColumnCount: 4,
  },
  ComponentListEntry: {},
};
