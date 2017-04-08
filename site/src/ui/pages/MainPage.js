import React from 'react';

import Data from '../../Data';
import ModulePage from './ModulePage';

const DataKeys = Object.keys(Data);

export default class MainPage extends React.Component {
  state = {
    filteredModules: DataKeys,
    query: '',
  };

  _onChangeQuery = e => {
    let query = e.target.value;
    let filteredModules = DataKeys.filter(
      moduleName => moduleName.indexOf(query.toLowerCase()) === 0
    );
    this.setState({
      filteredModules,
      query,
    });
  };

  _onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({
        query: '',
        filteredModules: DataKeys,
      });
    }
  };

  render() {
    let { filteredModules } = this.state;

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
        {filteredModules.length === 1
          ? <ModulePage moduleName={filteredModules[0]} />
          : <div style={Styles.ModuleList}>
              {filteredModules.map(moduleName => (
                <div style={Styles.ModuleListEntry} key={moduleName}>
                  {moduleName}
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
    maxWidth: 1000,
    paddingTop: 100,
  },
  ModuleList: {
    WebkitColumnCount: 4,
  },
  ModuleListEntry: {},
};
