// component.tsx
exports.component = (name) => `import React from 'react';
import './${name}.scss';

const ${name} = () => {
  return <div>${name}</div>;
};

export default ${name};
`;
