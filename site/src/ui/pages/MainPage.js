import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

import Data from '../../Data';
import ComponentPage from './ComponentPage';
import formatComponentName from '../utils/formatComponentName';

const DataKeys = Object.keys(Data);

class MainPage extends React.Component {
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
      propQuery: '',
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onKeyDown);
    this.props.history.listen((location, action) => {
      if (action === 'POP' && location.pathname === '/') {
        this.setState({
          query: '',
          filteredComponents: DataKeys,
        });
      }
    });
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
      let filteredComponents = this._processParams(
        nextProps.match.params.componentName,
        this.state.query
      );
      this.setState({
        filteredComponents,
        propQuery: '',
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._onKeyDown);
  }

  _filterListWithQuery = (list, query) => {
    let regex = new RegExp(query.split('').join('.*'), 'i');
    return list.filter(componentName => regex.exec(componentName));
  };

  _onChangeQuery = e => {
    this._updateQuery(e.target.value);
  };

  _updateQuery = query => {
    let filteredComponents = this._filterListWithQuery(DataKeys, query);
    this.setState(
      {
        filteredComponents,
        query,
        propQuery: '',
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

  _onChangePropQuery = e => {
    this.setState({
      propQuery: e.target.value,
    });
  };

  _onKeyDown = e => {
    if (e.keyCode === 27) {
      if (this.state.propQuery) {
        this.setState({
          propQuery: '',
        });
      } else {
        this.setState(
          {
            query: '',
            filteredComponents: DataKeys,
          },
          () => this.props.history.replace('/')
        );
      }
    } else {
      if (
        document.activeElement.tagName !== 'INPUT' &&
        e.keyCode >= 65 &&
        e.keyCode <= 90
      ) {
        this._input.focus();
      }
    }
  };

  _onClickComponent = (e, componentName) => {
    this.setState({
      query: componentName,
    });
    this.props.history.push(e.target.getAttribute('href'));
    e.preventDefault();
  };

  render() {
    let { filteredComponents } = this.state;

    return (
      <div style={Styles.Page}>
        <div style={Styles.Header}>React Native 0.43 API</div>
        <div style={Styles.InputSection}>
          <div style={Styles.InputLeft}>
            <div style={Styles.InputWrapper}>
              <input
                type="text"
                value={this.state.query}
                placeholder="Start typing a component or API name..."
                onChange={this._onChangeQuery}
                ref={c => this._input = c}
                style={Styles.Input}
              />
              <div style={Styles.InputNote}>
                {this.state.query && !this.state.propQuery
                  ? 'Press ESC to clear'
                  : ''}
              </div>
            </div>
          </div>
          {filteredComponents.length <= 1 &&
            <div style={Styles.InputRight}>
              <div style={Styles.InputWrapper}>
                <input
                  type="text"
                  value={this.state.propQuery}
                  placeholder="Filter props and methods..."
                  onChange={this._onChangePropQuery}
                  style={Styles.Input}
                />
                <div style={Styles.InputNote}>
                  {this.state.propQuery ? 'Press ESC to clear' : ''}
                </div>
              </div>
            </div>}
        </div>
        {filteredComponents.length <= 1
          ? <div style={Styles.ComponentPageWrapper}>
              {filteredComponents.map(componentName => (
                <ComponentPage
                  componentName={componentName}
                  propQuery={this.state.propQuery}
                  key={componentName}
                />
              ))}
            </div>
          : <div style={Styles.ComponentList}>
              {filteredComponents.map(componentName => (
                <div style={Styles.ComponentListEntry} key={componentName}>
                  <a
                    href={`/${Data[componentName].componentName}`}
                    onClick={e => this._onClickComponent(e, componentName)}
                    key={componentName}
                    style={Styles.ComponentLink}>
                    {formatComponentName(componentName)}
                  </a>
                </div>
              ))}
            </div>}
        <div style={Styles.Footer}>
          API documentation is generated from React Native 0.43-stable
          {' '}
          <a
            href="https://github.com/facebook/react-native/tree/0.43-stable"
            key="footerlink3"
            target="_blank"
            style={Styles.FooterLink}>
            source code
          </a>
          , whose documentation is licensed under
          {' '}
          <a
            href="https://github.com/facebook/react-native/blob/master/LICENSE-docs"
            key="footerlink1"
            target="_blank"
            style={Styles.FooterLink}>
            CC BY 4.0
          </a>
          . A small project by
          {' '}
          <a
            href="http://bypaulshen.com"
            key="footerlink2"
            target="_blank"
            style={Styles.FooterLink}>
            paul shen
          </a>
          . I hope you find it useful.
        </div>
      </div>
    );
  }
}
export default Radium(MainPage);

const Styles = {
  Page: {
    margin: '0 auto',
    maxWidth: 1200,
    paddingBottom: 100,
    paddingTop: 60,
  },
  Header: {
    color: '#cccccc',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    letterSpacing: 0.3,
    marginBottom: 40,
    marginLeft: 30,
    marginRight: 30,
    textTransform: 'uppercase',
    '@media (max-width: 800px)': {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  Footer: {
    color: '#cccccc',
    fontSize: 12,
    lineHeight: 1.4,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 80,
    maxWidth: 520,
    '@media (max-width: 800px)': {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  FooterLink: {
    color: '#cccccc',
    ':hover': {
      color: '#999999',
    },
  },
  InputSection: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
  },
  InputLeft: {
    flex: 1,
  },
  InputRight: {
    width: '65%',
    '@media (max-width: 800px)': {
      display: 'none',
    },
  },
  InputWrapper: {
    marginLeft: 30,
    marginRight: 30,
    position: 'relative',
    '@media (max-width: 800px)': {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  Input: {
    borderColor: '#d0d0d0',
    borderStyle: 'dashed',
    borderWidth: '0 0 1px',
    display: 'block',
    flex: 1,
    fontSize: 24,
    outline: 'none',
    paddingBottom: 4,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 4,
    width: '100%',
    '@media (max-width: 420px)': {
      fontSize: 16,
    },
  },
  InputNote: {
    color: '#999999',
    fontSize: 12,
    left: 0,
    marginTop: 6,
    position: 'absolute',
    top: '100%',
  },
  ComponentPageWrapper: {
    minHeight: 380,
    '@media (max-width: 800px)': {
      minHeight: 200,
    },
  },
  ComponentList: {
    minHeight: 380,
    paddingLeft: 30,
    paddingRight: 30,
    WebkitColumnCount: '4',
    '@media (max-width: 800px)': {
      minHeight: 200,
      paddingLeft: 20,
      paddingRight: 20,
      WebkitColumnCount: '2',
    },
  },
  ComponentListEntry: {},
  ComponentLink: {
    color: '#333333',
    fontSize: 12,
    textDecoration: 'none',
    ':hover': {
      fontWeight: 700,
    },
  },
};
