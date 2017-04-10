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
    let filteredComponents = this._processParams(
      props.match.params.componentName
    );
    this.state = {
      filteredComponents,
      query: filteredComponents.length === 1
        ? Data[filteredComponents[0]].componentName
        : '',
    };
  }

  _processParams = (componentName, query) => {
    let filteredComponents = DataKeys;
    if (componentName) {
      let index = DataKeys.indexOf(componentName.toLowerCase());
      if (index !== -1) {
        filteredComponents = [DataKeys[index]];
      }
    }
    if (query) {
      filteredComponents = this._filterListWithQuery(
        filteredComponents,
        this.state.query
      );
    }
    return filteredComponents;
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.componentName !==
      this.props.match.params.componentName
    ) {
      this.setState({
        filteredComponents: this._processParams(
          nextProps.match.params.componentName,
          this.state.query
        ),
      });
    }
  }

  _filterListWithQuery = (list, query) => {
    let regex = new RegExp(query.split('').join('.*'), 'i');
    return list.filter(componentName => regex.exec(componentName));
  };

  _onChangeQuery = e => {
    let query = e.target.value;
    let [componentQuery] = query.split('.');
    let filteredComponents = this._filterListWithQuery(
      DataKeys,
      componentQuery
    );
    this.setState(
      {
        filteredComponents,
        query,
      },
      () => {
        if (filteredComponents.length === 1) {
          this.props.history.replace(
            `/${Data[filteredComponents[0]].componentName}`
          );
        } else {
          this.props.history.replace('/');
        }
      }
    );
  };

  _onKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState(
        {
          query: '',
          filteredComponents: DataKeys,
        },
        () => this.props.history.replace('/')
      );
    }
  };

  _onClickComponent = e => {
    this.setState({
      query: e.target.innerText,
    });
    this.props.history.replace(e.target.getAttribute('href'));
    e.preventDefault();
  };

  render() {
    let { filteredComponents } = this.state;

    return (
      <div style={Styles.Page}>
        <div>
          <input
            type="text"
            value={this.state.query}
            placeholder="Start typing a component or API name..."
            onChange={this._onChangeQuery}
            onKeyDown={this._onKeyDown}
            style={Styles.Input}
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
                  <a
                    href={`/${Data[componentName].componentName}`}
                    onClick={this._onClickComponent}
                    style={Styles.ComponentLink}>
                    {componentName}
                  </a>
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
  Input: {
    border: 0,
    display: 'block',
    fontSize: 24,
    marginBottom: 40,
    paddingBottom: 4,
    paddingTop: 4,
    width: '100%',
  },
  ComponentList: {
    WebkitColumnCount: 4,
  },
  ComponentListEntry: {},
  ComponentLink: {
    color: '#333333',
    fontSize: 12,
    textDecoration: 'none',
  },
};
