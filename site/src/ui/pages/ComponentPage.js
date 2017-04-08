import React from 'react';

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

export default class ComponentPage extends React.Component {
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

    return (
      <div style={Styles.Root}>
        <div style={Styles.Columns}>
          <div style={Styles.LeftColumn}>
            <div style={Styles.ComponentName}>{component.componentName}</div>
            <div style={Styles.ComponentLinks}>
              <div>
                <a
                  href={
                    `https://facebook.github.io/react-native/docs/${componentName.toLowerCase()}.html`
                  }>
                  Official Docs
                </a>
              </div>
              <div>
                <a
                  href={
                    `https://github.com/facebook/react-native/tree/master/${component.filepath}`
                  }>
                  Source
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
          <div style={Styles.RightColumn}>
            {component.props &&
              <div style={Styles.Section}>
                <div style={Styles.SectionHeader}>PROPS</div>
                <div>
                  {this._filterNames(
                    Object.keys(component.props)
                  ).map(propName => {
                    let prop = component.props[propName];
                    return (
                      <div style={Styles.PropRow} key={propName}>
                        <div style={Styles.PropLeft}>
                          <div style={Styles.PropName}>{propName}</div>
                        </div>
                        <div style={Styles.PropRight}>
                          <div style={Styles.PropType}>
                            {(prop.type || prop.flowType) &&
                              renderTypehint(prop.flowType || prop.type)}
                          </div>
                          <div style={Styles.PropMeta}>
                            <Markdown>
                              {prop.description}
                            </Markdown>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>}
            {component.methods &&
              component.methods.length > 0 &&
              <div style={Styles.Section}>
                <div style={Styles.SectionHeader}>METHODS</div>
                <div>
                  {component.methods.map(method => {
                    let {
                      name,
                      params,
                      returns,
                      description,
                      docblock,
                    } = method;
                    if (
                      propQuery &&
                      !new RegExp(propQuery.split('').join('.*'), 'i').exec(
                        name
                      )
                    ) {
                      return null;
                    }

                    return (
                      <div style={Styles.PropRow} key={name}>
                        <div style={Styles.PropLeft}>
                          <div style={Styles.PropName}>{name}</div>
                        </div>
                        <div style={Styles.PropRight}>
                          <div style={Styles.PropType}>
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
                          </div>
                          <div style={Styles.PropMeta}>
                            <Markdown>
                              {description ||
                                (docblock &&
                                  removeCommentsFromDocblock(docblock))}
                            </Markdown>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

const Styles = {
  Root: {
    paddingTop: 100,
  },
  Columns: {
    display: 'flex',
  },
  LeftColumn: {
    paddingLeft: 30,
    paddingRight: 30,
    width: '30%',
  },
  RightColumn: {
    paddingLeft: 30,
    paddingRight: 30,
    width: '70%',
  },

  ComponentName: {
    fontFamily: 'Inconsolata',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 30,
  },
  ComponentLinks: {
    fontSize: 14,
    marginBottom: 8,
  },
  ComponentDescription: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 1.5,
    overflow: 'scroll',
  },
  Section: {
    marginBottom: 50,
  },
  SectionHeader: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.6,
    marginBottom: 30,
  },
  PropRow: {
    alignItems: 'baseline',
    display: 'flex',
    paddingBottom: 16,
    paddingTop: 16,
  },
  PropLeft: {
    width: '25%',
  },
  PropName: {
    fontFamily: 'Inconsolata',
    wordBreak: 'break-word',
  },
  PropRight: {
    width: '75%',
  },
  PropType: {
    fontFamily: 'Inconsolata',
    fontWeight: 700,
  },
  PropMeta: {
    color: '#CCCCCC',
    fontSize: 12,
  },
  PropEnumValues: {
    color: '#000000',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
  },
};
