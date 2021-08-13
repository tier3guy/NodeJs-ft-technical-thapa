
// build-in modules - comes with node.js installation
const { log } = require('console');
const fs = require('fs');

// creating a file and writing into it
fs.writeFileSync('read.txt',"welcome to a node js tutorial");

// updating that file
fs.writeFileSync('read.txt','The tutorial is made by thapa');

// updating file keeping old date in it
fs.appendFileSync('read.txt',' Thank you');

// reading data from that file.
const buf_data = fs.readFileSync('read.txt');

// in node.js we have aditional data type called Buffer used to store binary data while reading from a file or recieving packets over a network. 
log(buf_data);
log(buf_data.toString());

// renaming a file
fs.renameSync('read.txt','read_write.txt');