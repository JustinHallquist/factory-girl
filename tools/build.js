/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const browserify = require('browserify');
const pkg = require('../package.json');

const babelPath = path.resolve(`${__dirname}/../.babelrc`);
const babelConf = fs.readFileSync(babelPath, 'utf8');
const babelJson = JSON.parse(babelConf);

let promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del(['dist/*']));

// Compile source code into a distributable format with Babel
for (const format of ['esm', 'cjs', 'umd']) {
  promise.then(() => rollup
    .rollup({
      input: 'src/index.js',
      external: Object.keys(pkg.dependencies),
      plugins: [
        babel(
          Object.assign(babelJson, {
            babelrc: true,
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            presets: babelJson.presets.map(
              x => (x === 'es2015' ? 'es2015-rollup' : x),
            ),
          }),
        ),
      ],
    })).then(bundle => {
    const file = `./dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`;

    const output = {
      file,
      format,
      sourceMap: true,
      moduleName: format === 'umd' ? 'Factory' : undefined,
    };

    if (format === 'umd') output.name = 'umd';
    bundle.write(output);
  });
}

promise = promise.then(() => {
  browserify('src/index.js', { standalone: 'FactoryGirl' })
    .transform('babelify', { presets: ['@babel/env'] })
    .bundle()
    .pipe(fs.createWriteStream('dist/browser.js'));
});

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync(
    'dist/package.json',
    JSON.stringify(pkg, null, '  '),
    'utf-8',
  );
  fs.writeFileSync(
    'dist/LICENSE.txt',
    fs.readFileSync('LICENSE.txt', 'utf-8'),
    'utf-8',
  );
  fs.writeFileSync(
    'dist/README.md',
    fs.readFileSync('README.md', 'utf-8'),
    'utf-8',
  );
});

// eslint-disable-next-line no-console
promise.catch(err => console.error(err.stack));
