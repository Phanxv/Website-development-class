// Importing the module 'url' 
const url = require('url');  
// URL address 
const address = 'https://www.tni.ac.th/home?month=Jan&year=2567'; 
// Call parse() method using url module 
let urlObject = url.parse(address, true);  
// Returns an URL Object 
console.log(urlObject) 