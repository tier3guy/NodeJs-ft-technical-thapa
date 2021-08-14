const { log } = require('console');
const fs = require('fs');

fs.writeFile('test.txt','this is a test file', (err) => {
  if (err) console.log(err);
  else console.log('file created');
})

fs.unlink('test.text',(err) => {
  log('file deleted');
})

fs.readFile('test.txt','utf-8',(err,data) => {
  log(data);
})

// call function -> function passed as an argument.