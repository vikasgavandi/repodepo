console.log("start");

const {
    readFile,
    writeFile,
    read,
    readFileSync
} = require('fs');
// const first = readFileSync('./content/first.pdf', 'utf8');
// const second  = readFileSync('./content/second.pdf', 'utf8');

readFile('./content/first.pdf', 'utf8', (err, result) => {
    if (err) {
        console.log("err", err)
        return;
    }
    const first = result;
    readFile('./content/second.pdf', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {

                console.log("err", err)
                return;
            }
            console.log({
                result: "done with this task"
            })
        })
    })
})

console.log("starting next task");