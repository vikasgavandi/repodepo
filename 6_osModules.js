const { LOADIPHLPAPI } = require('dns');
const os = require('os');

//info about current user 
const user = os.userInfo();

// method returns the systum uptime in seconds 

console.log(`The system uptime is ${os.uptime} in seconds` );


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);