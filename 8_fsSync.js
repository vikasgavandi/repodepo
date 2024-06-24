const fs = require('fs');

console.log("start")
const {
    readFileSync,
    writeFileSync,
    write,
    fstat
} = require('fs');
const path = require('path');



// const filePath = path.join('./content','vikas.pdf');
console.log();
const first = readFileSync('./content/first.pdf', 'utf8');
const second = readFileSync('./content/second.pdf', 'utf8');

// console.log(first, '\n', second);


writeFileSync(
    './content/result.txt', `Here is the main resulted file called ${first}, ${second}, '\n'`, {
        flag: 'a' , 
    }
)


console.log("done with this task")
console.log("starting the next one")


// const filename = '122_photos';
// const filePath = `./content/subfolder/${filename}.pdf`;
// const content = "Your file has been created successfully";


// try {
//     if (!fs.existsSync(filePath)) {
//         writeFileSync(filePath, content, 'utf8', {flag:'a'});
//         console.log("File created successfully",);
//     }  
// else {
//     console.log('file already exists');
// }
// } catch (error) {
//     console.error('Error while writing', error);
// }