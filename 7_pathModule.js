const path = require('path');

// console.log(path.sep);

const filePath = path.join('/content', 'subfolder','vikas.pdf');

// console.log(filePath);
const base = path.basename(filePath);

// console.log(base);


// console.log(path);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'vikas.pdf');

console.log(absolutePath);
