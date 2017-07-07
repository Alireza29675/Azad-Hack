const { exec } = require('child_process')
const fs = require('fs')
const tamper = require('./tamper.config')

const webpack = exec('webpack');
webpack.stdout.on('data', (data) => console.log(data));
webpack.stderr.on('data', (data) => console.log(data));

const before = `// ==UserScript==
// @name         ${tamper.name}
// @namespace    http://tampermonkey.net/
// @version      ${tamper.version}
// @description  ${tamper.description}
// @author       ${tamper.author}
// @match        ${tamper.match}
// @grant        none
// ==/UserScript==

(function() {`

const after = `})();`

fs.watchFile('./dist/script.js', () => {
    fs.readFile('./dist/script.js', (err, data) => {
        const content = before + data + after
        fs.writeFileSync('./dist/tampermonkey.js', content)
    })
})