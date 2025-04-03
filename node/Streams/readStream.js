const fs = require('fs')
const readStream =  fs.createReadStream('./abin.txt','utf-8')
readStream.on('data', (chunk) => {
    console.log(chunk);
});
 
