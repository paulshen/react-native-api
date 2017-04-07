import React from 'react';

import Data from '../../Data';

export default class ModulePage extends React.Component {
  render() {
    return (
      <div style={Styles.Page}>
        <div style={Styles.Columns}>
          <div style={Styles.LeftColumn}>
            <div style={Styles.ModuleName}>{`<TextInput>`}</div>
            <div style={Styles.BodyText}>A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.</div>
          </div>
          <div style={Styles.RightColumn}>
            <div style={Styles.SectionHeader}>PROPS</div>
            <div>
              {Object.keys(Data.TextInput.props).map((propName) => {
                let prop = Data.TextInput.props[propName];
                return (
                  <div style={Styles.PropRow} key={propName}>
                    <div style={Styles.PropName}>{propName}</div>
                    <div style={Styles.PropType}>{prop.type.name}</div>
                    <div style={Styles.PropMeta}>{prop.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
