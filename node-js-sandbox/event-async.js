const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter;

eventEmitter.on('start', ()=> {
    console.log('Started\n')
})

eventEmitter.emit('start');

/*read file blocking*/

const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt)
console.log('----------ASAP#1----------')

/*read file non-blocking*/

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt) //<--- log when finish reading from file
});

console.log('----------ASAP#2----------')

const myModule = require('./my-module')

console.log(myModule);
