import Data from '../../Data';

export default function formatComponentName(componentName) {
  let name = Data[componentName].componentName;
  if (Data[componentName].type === 'component') {
    return `<${name}>`;
  }
  return name;
}
