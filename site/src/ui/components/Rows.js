import React from 'react';
import Radium from 'radium';

import Config from '../../Config';
import Markdown from '../components/Markdown';
import renderTypehint from '../utils/renderTypehint';
import removeCommentsFromDocblock from '../utils/removeCommentsFromDocblock';

class PropRowImpl extends React.Component {
  state = {
    collapsed: true,
  };

  _toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  _expand = () => {
    this.setState({
      collapsed: false,
    });
  };

  render() {
    let { prop, propName, forceExpand } = this.props;
    let { collapsed } = this.state;
    return (
      <div style={Styles.PropRow} key={propName}>
        <div style={Styles.PropLeft}>
          <div style={Styles.PropName} onClick={this._expand}>{propName}</div>
        </div>
        <div style={Styles.PropRight}>
          <div style={Styles.PropType}>
            {(prop.type || prop.flowType) &&
              renderTypehint(prop.flowType || prop.type)}
            {' '}
            {!forceExpand &&
              prop.description &&
              <button onClick={this._toggle} style={Styles.ToggleButton}>
                {collapsed ? 'EXPAND' : 'COLLAPSE'}
              </button>}
          </div>
          <div
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
export const PropRow = Radium(PropRowImpl);

class MethodRowImpl extends React.Component {
  state = {
    collapsed: true,
  };

  _toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  _expand = () => {
    this.setState({
      collapsed: false,
    });
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
          <div style={Styles.PropName} onClick={this._expand}>{name}</div>
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
                {collapsed ? 'EXPAND' : 'COLLAPSE'}
              </button>}
          </div>
          <div
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
export const MethodRow = Radium(MethodRowImpl);

const Styles = {
  PropRow: {
    alignItems: 'baseline',
    display: 'flex',
    paddingBottom: 16,
    paddingTop: 16,
    '@media (max-width: 420px)': {
      display: 'block',
    },
  },
  PropLeft: {
    boxSizing: 'border-box',
    paddingRight: 20,
    width: '36%',
    '@media (max-width: 420px)': {
      width: 'auto',
    },
  },
  PropName: {
    fontFamily: 'Inconsolata',
    wordBreak: 'break-word',
  },
  PropRight: {
    width: '64%',
    '@media (max-width: 420px)': {
      paddingLeft: 50,
      paddingTop: 10,
      width: 'auto',
    },
  },
  PropType: {
    fontFamily: 'Inconsolata',
    fontWeight: 700,
  },
  PropMeta: {
    fontSize: 12,
    lineHeight: 1.4,
    overflow: 'hidden',
  },
  PropMetaCollapsed: {
    display: 'none',
  },
  ToggleButton: {
    border: 0,
    backgroundColor: 'transparent',
    fontSize: 10,
    opacity: 0.3,
    outline: 'none',
    padding: 0,
    textTransform: 'uppercase',
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: 0.5,
    },
  },
};
