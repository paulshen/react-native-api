import React from 'react';

import Data from '../../Data';
import renderTypehint from '../utils/renderTypehint';

export default class ModulePage extends React.Component {
  render() {
    let { moduleName } = this.props;
    let module = Data[moduleName.toLowerCase()];
    return (
      <div style={Styles.Root}>
        <div style={Styles.Columns}>
          <div style={Styles.LeftColumn}>
            <div style={Styles.ModuleName}>{module.componentName}</div>
            <div style={Styles.BodyText}>
              A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.
            </div>
          </div>
          <div style={Styles.RightColumn}>
            {module.props &&
              <div style={Styles.Section}>
                <div style={Styles.SectionHeader}>PROPS</div>
                <div>
                  {Object.keys(module.props).map(propName => {
                    let prop = module.props[propName];
                    return (
                      <div style={Styles.PropRow} key={propName}>
                        <div style={Styles.PropName}>{propName}</div>
                        <div style={Styles.PropType}>{prop.type.name}</div>
                        <div style={Styles.PropMeta}>{prop.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>}
            {module.methods && module.methods.length > 0 &&
              <div style={Styles.Section}>
                <div style={Styles.SectionHeader}>METHODS</div>
                <div>
                  {module.methods.map(method => {
                    let { name, params, returns, description } = method;
                    return (
                      <div style={Styles.PropRow} key={name}>
                        <div style={Styles.PropName}>{name}</div>
                        <div style={Styles.PropType}>
                          ({(params && length && params.map(param => {
                                let res = param.name;
                                res += param.optional ? '?' : '';
                                param.type &&
                                  param.type.names &&
                                  (res += `: ${param.type.names.join(', ')}`);
                                return res;
                              })
                              .join(', ')) ||
                            ''})
                          {returns && `: ${renderTypehint(returns.type)}`}
                        </div>
                        <div style={Styles.PropMeta}>{description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            }
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
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  RightColumn: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
  },

  ModuleName: {
    fontFamily: 'Inconsolata',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 30,
  },
  BodyText: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 1.5,
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
  PropName: {
    fontFamily: 'Inconsolata',
    width: '25%',
    wordBreak: 'break-word',
  },
  PropType: {
    fontFamily: 'Inconsolata',
    fontWeight: 700,
    width: '15%',
  },
  PropMeta: {
    color: '#CCCCCC',
    fontSize: 12,
    width: '60%',
  },
  PropEnumValues: {
    color: '#000000',
    fontFamily: 'Inconsolata',
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
  },
};
