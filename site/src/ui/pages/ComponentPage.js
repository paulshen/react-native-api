import React from 'react';
import Radium from 'radium';

import Data from '../../Data';
import Markdown from '../components/Markdown';
import renderTypehint from '../utils/renderTypehint';

function removeCommentsFromDocblock(docblock) {
  return docblock
    .trim('\n ')
    .replace(/^\/\*+/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map(line => line.trim().replace(/^\* ?/, ''))
    .join('\n');
}

class PropRow extends React.Component {
  state = {
    collapsed: true,
  };

  _toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  _onMouseOver = () => {
    if (this.state.collapsed) {
      this._mouseTimeout = setTimeout(
        () =>
          this.setState({
            collapsed: false,
          }),
        300
      );
    }
  };

  _onMouseOut = () => {
    clearTimeout(this._mouseTimeout);
  };

  render() {
    let { prop, propName, forceExpand } = this.props;
    let { collapsed } = this.state;
    return (
      <div style={Styles.PropRow} key={propName}>
        <div style={Styles.PropLeft}>
          <div style={Styles.PropName}>{propName}</div>
        </div>
        <div style={Styles.PropRight}>
          <div style={Styles.PropType}>
            {(prop.type || prop.flowType) &&
              renderTypehint(prop.flowType || prop.type)}
            {' '}
            {!forceExpand &&
              prop.description &&
              <button onClick={this._toggle} style={Styles.ToggleButton}>
                {collapsed ? '+' : '–'}
              </button>}
          </div>
          <div
            onMouseOver={this._onMouseOver}
            onMouseOut={this._onMouseOut}
            style={[
              Styles.PropMeta,
              collapsed && !forceExpand && Styles.PropMetaCollapsed,
            ]}>
            <Markdown>
              {prop.description}
            </Markdown>
          </div>
        </div>
      </div>
    );
  }
}
PropRow = Radium(PropRow);
class MethodRow extends React.Component {
  state = {
    collapsed: true,
  };
  _toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  _onMouseOver = () => {
    if (this.state.collapsed) {
      this._mouseTimeout = setTimeout(
        () =>
          this.setState({
            collapsed: false,
          }),
        300
      );
    }
  };
  _onMouseOut = () => {
    clearTimeout(this._mouseTimeout);
  };
  render() {
    let {
      method: {
        name,
        params,
        returns,
        description,
        docblock,
        modifiers,
      },
      forceExpand,
    } = this.props;
    let { collapsed } = this.state;
    return (
      <div style={Styles.PropRow} key={name}>
        <div style={Styles.PropLeft}>
          <div style={Styles.PropName}>{name}</div>
        </div>
        <div style={Styles.PropRight}>
          <div style={Styles.PropType}>
            {modifiers.length > 0 ? `${modifiers.join(' ')} ` : ''}
            ({(params &&
              params.length > 0 &&
              params
                .map(param => {
                  let res = param.name;
                  res += param.optional ? '?' : '';
                  if (param.type && param.type.names) {
                    res += `: ${param.type.names.join(', ')}`;
                  }
                  return res;
                })
                .join(', ')) ||
              ''})
            {returns && `: ${renderTypehint(returns.type)}`}
            {' '}
            {!forceExpand &&
              (description || docblock) &&
              <button onClick={this._toggle} style={Styles.ToggleButton}>
                {collapsed ? '+' : '–'}
              </button>}
          </div>
          <div
            onMouseOver={this._onMouseOver}
            onMouseOut={this._onMouseOut}
            style={[
              Styles.PropMeta,
              collapsed && !forceExpand && Styles.PropMetaCollapsed,
            ]}>
            <Markdown>
              {description ||
                (docblock && removeCommentsFromDocblock(docblock))}
            </Markdown>
          </div>
        </div>
      </div>
    );
  }
}
MethodRow = Radium(MethodRow);
class ComponentPage extends React.Component {
  _filterNames = names => {
    let { propQuery } = this.props;
    if (propQuery) {
      let regex = new RegExp(propQuery.split('').join('.*'), 'i');
      return names.filter(name => regex.exec(name));
    }
    return names;
  };
  render() {
    let { componentName, propQuery } = this.props;
    let component = Data[componentName.toLowerCase()];
    let filteredProps = component.props &&
      this._filterNames(Object.keys(component.props));
    let filteredMethods = component.methods &&
      this._filterNames(component.methods.map(m => m.name));
    return (
      <div style={Styles.Root}>
        <div style={Styles.Columns}>
          <div style={Styles.LeftColumn}>
            <div style={Styles.ColumnInner}>
              <div style={Styles.ComponentName}>{component.componentName}</div>
              <div style={Styles.ComponentLinks}>
                <div>
                  <a
                    href={
                      `https://facebook.github.io/react-native/docs/${componentName.toLowerCase()}.html`
                    }
                    style={Styles.Link}>
                    Official Docs &rarr;
                  </a>
                </div>
                <div>
                  <a
                    href={
                      `https://github.com/facebook/react-native/tree/master/${component.filepath}`
                    }
                    style={Styles.Link}>
                    Source &rarr;
                  </a>
                </div>
              </div>
              <div style={Styles.ComponentDescription}>
                <Markdown>
                  {component.description ||
                    (component.docblock &&
                      removeCommentsFromDocblock(component.docblock))}
                </Markdown>
              </div>
            </div>
          </div>
          <div style={Styles.RightColumn}>
            <div style={Styles.ColumnInner}>
              {filteredProps &&
                filteredProps.length > 0 &&
                <div style={Styles.Section}>
                  <div style={Styles.SectionHeader}>PROPS</div>
                  <div>
                    {filteredProps.map(propName => {
                      let prop = component.props[propName];
                      return (
                        <PropRow
                          prop={prop}
                          propName={propName}
                          forceExpand={filteredProps.length <= 3}
                          key={propName}
                        />
                      );
                    })}
                  </div>
                </div>}
              {filteredMethods &&
                filteredMethods.length > 0 &&
                <div style={Styles.Section}>
                  <div style={Styles.SectionHeader}>METHODS</div>
                  <div>
                    {filteredMethods.map(methodName => {
                      let method = component.methods.find(
                        m => m.name === methodName
                      );
                      return (
                        <MethodRow
                          method={method}
                          forceExpand={filteredMethods.length <= 3}
                          key={method.name}
                        />
                      );
                    })}
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Radium(ComponentPage);
const Styles = {
  Root: {
    paddingTop: 40,
  },
  Columns: {
    display: 'flex',
  },
  LeftColumn: {
    width: '35%',
  },
  RightColumn: {
    width: '65%',
  },
  ColumnInner: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  ComponentName: {
    fontFamily: 'Inconsolata',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 30,
  },
  ComponentLinks: {
    fontSize: 14,
    marginBottom: 30,
  },
  ComponentDescription: {
    fontSize: 12,
    lineHeight: 1.5,
    opacity: 0.5,
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: 1,
    },
  },
  Section: {
    marginBottom: 50,
  },
  SectionHeader: {
    color: '#0000FF',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 30,
  },
  PropRow: {
    alignItems: 'baseline',
    display: 'flex',
    paddingBottom: 16,
    paddingTop: 16,
  },
  PropLeft: {
    boxSizing: 'border-box',
    paddingRight: 20,
    width: '34%',
  },
  PropName: {
    fontFamily: 'Inconsolata',
    wordBreak: 'break-word',
  },
  PropRight: {
    width: '66%',
  },
  PropType: {
    fontFamily: 'Inconsolata',
    fontWeight: 700,
  },
  PropMeta: {
    fontSize: 12,
    lineHeight: 1.3,
    overflow: 'hidden',
  },
  PropMetaCollapsed: {
    maxHeight: 27,
    opacity: 0.3,
  },
  PropEnumValues: {
    color: '#000000',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
  },
  Link: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
    textDecoration: 'none',
  },
  ToggleButton: {
    border: 0,
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
  },
};
