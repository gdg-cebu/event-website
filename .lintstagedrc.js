const path = require('path');

const buildEslintCommand = (filenames) => {
  const files = filenames.map((filename) => `--file ${path.relative(process.cwd(), filename)}`).join(' ');
  return `next lint --fix ${files}}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  '*.{html,css,json,yaml,svg}': ['prettier --write'],
};
