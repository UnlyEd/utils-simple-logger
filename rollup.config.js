import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs';

const files = fs.readdirSync('./src', { withFileTypes: true });
const filesToKeep = files.filter((fileName) => !/^\w*..test.js$/.test(fileName));

const plugins = [
  babel(),
  resolve(),
  commonjs(),
];

const watch = {
  exclude: 'node_modules/**',
  include: 'src/**',
};

const filesConfiguration = (arrayOfFiles) => arrayOfFiles.map((file) => {
  console.log(file)
  return {
    input: `./src/${file.name}`,
    output:
      {
        file: `./lib/${file.name}`,
        format: 'cjs',
        exports: 'named',
      },
    plugins,
    watch,
  };
});

export default filesConfiguration(filesToKeep);
