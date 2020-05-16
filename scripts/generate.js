#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')


function generateDir(name) {
  fs.mkdir(`./src/${name}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
}

function generateMethodFile(name) {
  const filename = path.resolve(__dirname, `../src/${name}/${name}.js`)
  const content = `\
export const ${name} = () => {
  // TO IMPLEMENT IN ANOTHER PR
};\n`

  fs.writeFile(filename, content, (err) => {
    if (err) {
      return console.log(`Could not create the "${name}.js" file!`)
    }

    console.log(`Successfully created the "${name}.js" file!`)
  })
}

function generateTestFile(name) {
  const filename = path.resolve(__dirname, `../src/${name}/${name}.test.js`)
  const content = `\
import { ${name} } from './${name}';

describe('${name}', () => {
  it('${name} does this thing...', () => {
    const input = null
    const res = null
    expect(${name}(input)).toEqual(res)
  });
});\n`

  // eslint-disable-next-line consistent-return
  fs.writeFile(filename, content, (err) => {
    if (err) {
      return console.log(`Could not create the "${name}.test.js" file!`)
    }

    console.log(`Successfully created the "${name}.test.js" file!`)
  })
}

(async () => {
  let name = process.argv[2]
  if (!name) {
    const { answer } = await inquirer.prompt({
      type: 'input',
      name: 'answer',
      message: 'What is the name of the new function?',
    })
    name = answer
  }

  generateDir(name)
  generateMethodFile(name)
  generateTestFile(name)
})()
