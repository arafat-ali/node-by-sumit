const fs = require('fs');

fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString())
});