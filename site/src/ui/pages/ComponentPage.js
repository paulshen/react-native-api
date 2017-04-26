import React from 'react';
import Radium from 'radium';

import Config from '../../Config';
import Data from '../../Data';
import Markdown from '../components/Markdown';
import formatComponentName from '../utils/formatComponentName';
import { PropRow, MethodRow } from '../components/Rows';
import removeCommentsFromDocblock from '../utils/removeCommentsFromDocblock';

function ExternalLinks({ componentName, component }) {
  let officialDocUrl = `${Config.OfficialDocsUrl}docs/${componentName.toLowerCase()}.html`;
  return (
    <div>
      <div>
        <a href={officialDocUrl} style={Styles.Link} target="_blank">
          Official Docs &rarr;
        </a>
      </div>
      <div>
        <a
          href={
            `https://github.com/facebook/react-native/tree/${Config.Branch}/${component.filepath}`
          }
          target="_blank"
          style={Styles.Link}>
          Source &rarr;
        </a>
      </div>
      {component.hasExamples &&
        <div>
          <a
            href={`${officialDocUrl}#examples`}
            target="_blank"
            style={Styles.Link}>
            Examples &rarr;
          </a>
        </div>}
    </div>
  );
}

function PropsSection({ component, filteredProps, filteredMethods }) {
  return (
    <div style={Styles.Section}>
      <div style={Styles.SectionHeader}>PROPS</div>
      <div>
        {filteredProps.map(propName => {
          let prop = component.props[propName];
          return (
            <PropRow
              prop={prop}
              propName={propName}
              forceExpand={
                filteredProps.length +
                  (filteredMethods ? filteredMethods.length : 0) <=
                  3
              }
              key={propName}
            />
          );
        })}
      </div>
    </div>
  );
}

function MethodsSection({ component, filteredProps, filteredMethods }) {
  return (
    <div style={Styles.Section}>
      <div style={Styles.SectionHeader}>METHODS</div>
      <div>
        {filteredMethods.map(methodName => {
          let method = component.methods.find(m => m.name === methodName);
          return (
            <MethodRow
              method={method}
              forceExpand={
                (filteredProps ? filteredProps.length : 0) +
                  filteredMethods.length <=
                  3
              }
              key={method.name}
            />
          );
        })}
      </div>
    </div>
  );
}

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
      this._filterNames(Object.keys(component.props).sort());
    let filteredMethods = component.methods &&
      this._filterNames(component.methods.map(m => m.name).sort());
    return (
      <div style={Styles.Root}>
        <div style={Styles.Columns}>
          <div style={Styles.LeftColumn}>
            <div style={Styles.ColumnInner}>
              <div style={Styles.ComponentName}>
                {formatComponentName(componentName)}
              </div>
              <div style={Styles.ComponentLinks}>
                <ExternalLinks
                  componentName={componentName}
                  component={component}
                />
              </div>
              <div style={Styles.ComponentDescription}>
                <Markdown>
                  {component.description ||
                    (component.class &&
                      component.class[0] &&
                      component.class[0].description) ||
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
                <PropsSection
                  component={component}
                  filteredProps={filteredProps}
                  filteredMethods={filteredMethods}
                />}
              {filteredMethods &&
                filteredMethods.length > 0 &&
                <MethodsSection
                  component={component}
                  filteredProps={filteredProps}
                  filteredMethods={filteredMethods}
                />}
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
    '@media (max-width: 800px)': {
      display: 'block',
    },
  },
  LeftColumn: {
    width: '35%',
    '@media (max-width: 800px)': {
      paddingBottom: 60,
      width: 'auto',
    },
  },
  RightColumn: {
    width: '65%',
    '@media (max-width: 800px)': {
      width: 'auto',
    },
  },
  ColumnInner: {
    paddingLeft: 30,
    paddingRight: 30,
    '@media (max-width: 800px)': {
      paddingLeft: 20,
      paddingRight: 20,
    },
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
    lineHeight: 1.4,
    opacity: 0.5,
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: 1,
    },
    '@media (max-width: 800px)': {
      display: 'none',
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
  Link: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 500,
    textDecoration: 'none',
  },
};
