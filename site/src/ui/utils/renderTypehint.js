// https://github.com/facebook/react-native/blob/3d3cd86/website/layout/AutodocsLayout.js
import React from 'react';

var slugify = require('slugify');

const styleReferencePattern = /^[^.]+\.propTypes\.style$/;

function renderEnumValue(value) {
  // Use single quote strings even when we are given double quotes
  if (value.match(/^"(.+)"$/)) {
    return "'" + value.slice(1, -1) + "'";
  }
  return value;
}

function renderType(type) {
  const baseType = renderBaseType(type);
  return type.nullable ? <span>?{baseType}</span> : baseType;
}

function spanJoinMapper(elements, callback, separator) {
  return <span>{elements.map((rawElement, ii) => {
    const el = callback(rawElement);
    return (ii + 1 < elements.length) ? <span>{el}{separator}</span> : el;
  })}</span>;
}

function renderBaseType(type) {
  if (type.name === 'enum') {
    if (typeof type.value === 'string') {
      return type.value;
    }
    return 'enum(' + type.value.map((v) => renderEnumValue(v.value)).join(', ') + ')';
  }

  if (type.name === '$Enum') {
    if (type.elements[0].signature.properties) {
      return type.elements[0].signature.properties.map(p => `'${p.key}'`).join(' | ');
    }
    return type.name;
  }

  if (type.name === 'shape') {
    return <span>{'{'}{spanJoinMapper(
      Object.keys(type.value),
      (key) => <span>{key + ': '}{renderType(type.value[key])}</span>,
      ', '
    )}{'}'}</span>;
  }

  if (type.name === 'union') {
    if (type.value) {
      return spanJoinMapper(type.value, renderType, ', ');
    }
    return spanJoinMapper(type.elements, renderType, ' | ');
  }

  if (type.name === 'arrayOf') {
    return <span>[{renderType(type.value)}]</span>;
  }

  if (type.name === 'instanceOf') {
    return type.value;
  }

  if (type.name === 'custom') {
    if (styleReferencePattern.test(type.raw)) {
      var name = type.raw.substring(0, type.raw.indexOf('.'));
      return <a href={'docs/' + slugify(name) + '.html#style'}>{name}#style</a>;
    }
    if (type.raw === 'ColorPropType') {
      return <a href={'docs/colors.html'}>color</a>;
    }
    if (type.raw === 'EdgeInsetsPropType') {
      return '{top: number, left: number, bottom: number, right: number}';
    }
    return type.raw;
  }

  if (type.name === 'stylesheet') {
    return 'style';
  }

  if (type.name === 'func') {
    return 'function';
  }

  if (type.name === 'signature') {
    return type.raw;
  }

  return type.raw || type.name;
}

function renderTypeNameLink(typeName, docPath, namedTypes) {
  const ignoreTypes = [
    'string',
    'number',
    'boolean',
    'object',
    'function',
    'array',
  ];
  const typeNameLower = typeName.toLowerCase();
  if (ignoreTypes.indexOf(typeNameLower) !== -1 || !namedTypes[typeNameLower]) {
    return typeName;
  }
  return <a href={docPath + '#' + typeNameLower}>{typeName}</a>;
}

function renderTypeWithLinks(type, docTitle, namedTypes) {
  if (!type || !type.names) {
    return null;
  }

  const docPath = docTitle ? 'docs/' + docTitle.toLowerCase() + '.html' : 'docs/';
  return (
    <div>
      {
        type.names.map((typeName, index, array) => {
          const separator = index < array.length - 1 && ' | ';
          return (
            <span key={index}>
              {renderTypeNameLink(typeName, docPath, namedTypes)}
              {separator}
            </span>
          );
        })
      }
    </div>
  );
}

function renderTypehintRec(typehint) {
  if (typehint.type === 'simple') {
    return typehint.value;
  }

  if (typehint.type === 'generic') {
    return renderTypehintRec(typehint.value[0]) + '<' + renderTypehintRec(typehint.value[1]) + '>';
  }

  return JSON.stringify(typehint);
}

export default function renderTypehint(typehint) {
  if (typeof typehint === 'object' && typehint.name) {
    return renderType(typehint);
  }
  try {
    typehint = JSON.parse(typehint);
  } catch (e) {
    return typehint;
  }

  return renderTypehintRec(typehint);
}
