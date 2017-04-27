import React from 'react';
import Radium from 'radium';

import Config from '../../Config';
import Markdown from '../components/Markdown';
import renderTypehint from '../utils/renderTypehint';
import removeCommentsFromDocblock from '../utils/removeCommentsFromDocblock';

function extractPlatformFromDescription(description) {
  let platforms = description.match(/\@platform (.+)/);
  platforms = platforms && platforms[1].replace(/ /g, '').split(',');
  description = description.replace(/\@platform (.+)/, '');

  return { description, platforms };
}

function PlatformToken({ platform }) {
  return (
    <div style={Styles.PlatformToken}>
      {platform}
    </div>
  );
}
PlatformToken = Radium(PlatformToken);

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

    let { description, platforms } = extractPlatformFromDescription(
      prop.description || ''
    );

    return (
      <div style={Styles.PropRow} key={propName}>
        <div style={Styles.PropLeft}>
          <span style={Styles.PropName} onClick={this._expand}>{propName}</span>
          {platforms &&
            platforms.map(platform => (
              <PlatformToken key={platform} platform={platform} />
            ))}
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
              {description}
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
    let {
      description: processedDescription,
      platforms,
    } = extractPlatformFromDescription(
      description || (docblock && removeCommentsFromDocblock(docblock)) || ''
    );

    return (
      <div style={Styles.PropRow} key={name}>
        <div style={Styles.PropLeft}>
          <span style={Styles.PropName} onClick={this._expand}>{name}</span>
          {platforms &&
            platforms.map(platform => (
              <PlatformToken key={platform} platform={platform} />
            ))}
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
            <Markdown>{processedDescription}</Markdown>
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
    paddingBottom: 16,
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
  PlatformToken: {
    backgroundColor: '#999999',
    borderRadius: 2,
    color: '#ffffff',
    display: 'inline-block',
    fontSize: 9,
    fontWeight: 400,
    letterSpacing: 0.4,
    marginLeft: 6,
    opacity: 0.4,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    position: 'relative',
    textTransform: 'uppercase',
    top: -2,
    ':hover': {
      opacity: 1,
    },
  },
};
