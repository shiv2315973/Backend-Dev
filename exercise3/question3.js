
// this is question 3
 const fs = require('fs');

 function update(date, type, data) {
    const log = `${date} | ${type} | ${data}\n`;
    fs.writeFileSync('first.txt', log, {flag:'a'}); // append
}

setInterval(() => {
    update(new Date(), 'error', 'This is opopo');
    console.log('File updated');
}, 5000);
module.exports={update};