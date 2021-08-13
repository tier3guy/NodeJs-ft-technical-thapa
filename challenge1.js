const fs = require('fs');

//fs.mkdirSync('Thapa'); - creating a folder in node.js

// creating a file in a folder and writing it.
// fs.writeFileSync('Thapa/bio.txt','my name is challenge 1');

// appending new data
// fs.appendFileSync('Thapa/bio.txt',' this string is appended');

// reading a data without buffering (UTF-8) - file encoding
/*
What is UTF-8?
Ans. UTF-8 is capable of encoding all 1,112,064 valid character code points in Unicode using one to four one-byte (8-bit) code units. Code points with lower numerical values, which tend to occur more frequently, are encoded using fewer bytes. It was designed for backward compatibility with ASCII: the first 128 characters of Unicode, which correspond one-to-one with ASCII, are encoded using a single byte with the same binary value as ASCII, so that valid ASCII text is valid UTF-8-encoded Unicode as well.
*/
// const data = fs.readFileSync('Thapa/bio.txt','utf-8');
// console.log(data);

// fs.renameSync('Thapa/bio.txt','Thapa/Avinash.txt');

fs.unlinkSync('Thapa/bio.txt');

fs.rmdirSync('Thapa');