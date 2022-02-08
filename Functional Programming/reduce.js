import fs from 'fs'

let output=fs.readFileSync('data.txt','utf8')
console.log('output',output)