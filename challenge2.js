const { log } = require('console');
const fs = require('fs');

/*fs.mkdir('challenge2',(err) => {
  if(err) log(err);
  else log('folder created');
});*/

fs.writeFile('challenge2/ch2.txt','this challenege no. 2', ()=>{
  log('file created');
});

fs.appendFile('challenge2/ch2.txt',' further file is updated', () => {
  log('file updated')
})