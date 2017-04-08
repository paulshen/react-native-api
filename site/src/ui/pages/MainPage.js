import React from 'react';
import { Link } from 'react-router-dom';

import Data from '../../Data';
import ComponentPage from './ComponentPage';

const DataKeys = Object.keys(Data);

export default class MainPage extends React.Component {
  props: {
    match: Object,
  };

  constructor(props) {
    super();
    this.state = this._processParams(props.match.params.componentName);
  }

  _processParams = (componentName) => {
    let filteredComponents = DataKeys;
    let query = '';
    if (componentName) {
      let index = DataKeys.indexOf(componentName.toLowerCase());
      if (index !== -1) {
        filteredComponents = [DataKeys[index]];
        query = componentName;
      }
    }
    return { filteredComponents, query };
  };

  componentWillReceiveProps(nextProps) {
    // TODO
    if (nextProps.match.params.componentName !== this.props.match.params.componentName) {
      this.setState(this._processParams(nextProps.match.params.componentName));
    }
  }

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

    if (filteredComponents.length === 1) {
      this.props.history.replace(`/${Data[filteredComponents[0]].componentName}`);
    } else {
      this.props.history.replace('/');
    }
  };

  _onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({
        query: '',
        filteredComponents: DataKeys,
      });
      this.props.history.replace('/');
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
                  <Link to={`/${Data[componentName].componentName}`} replace={true}>{componentName}</Link>
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
