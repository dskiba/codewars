#! /usr/bin/env node

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

(async () => {
  let name = process.argv[2];

  if (!name) {
    const { answer } = await inquirer.prompt({
      type: 'input',
      name: 'answer',
      message: 'What is the name of the new function?',
    });

    name = answer;
  }

  generateMethodFile(name);
  generateTestFile(name);
})();

function generateMethodFile(name) {
  const filename = path.resolve(__dirname, `../src/${name}.js`);
  const content = `\
export const ${name} = () => {
  // TO IMPLEMENT IN ANOTHER PR
};\n`;

  fs.writeFile(filename, content, function(err) {
    if (err) {
      return console.log(`Could not create the "${name}.js" file!`);
    }

    console.log(`Successfully created the "${name}.js" file!`);
  });
}

function generateTestFile(name) {
  const filename = path.resolve(__dirname, `../src/${name}.test.js`);
  const content = `\
import { ${name} } from './${name}';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(${name}()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(${name}()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(${name}()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(${name}()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { ${name}(); }).toThrow();
 */

describe('${name}', () => {
  it('${name} does this thing...', () => {
    // TODO Your own assertion here
  });

  it('${name} does that other thing...', () => {
    // TODO Your own assertion here
  });

  it('${name} does a very cool thing...', () => {
    // TODO Your own assertion here
  });
});\n`;

  fs.writeFile(filename, content, function(err) {
    if (err) {
      return console.log(`Could not create the "${name}.test.js" file!`);
    }

    console.log(`Successfully created the "${name}.test.js" file!`);
  });
}
