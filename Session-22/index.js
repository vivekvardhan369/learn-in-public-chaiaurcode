const fs= require('fs');
const {adding}= require('./math');

fs.writeFile('./test.txt','Hello world',()=>{})
console.log(adding(2,3));


// console.log({__filename,__dirname});
// console.log(math.add(2,3));
function __require(id){
    // ... agar id . se shuru hota hai toh user ki dir mei code ko dhundo
    // .. kudh ke internal module mei dhundo
    // .. Agar toh mil gya toh well and good
    // .. nahi mila toh node_modules mei dhundo
    // .. nahi mila toh error throw karo

}
