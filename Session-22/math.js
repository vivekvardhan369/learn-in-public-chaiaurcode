const { log } = require("console")

const add =function add(x,y){
    return x+y
}

const sub= function sub(a,b){
    return a-b
}

const mul = function mul(a,b){
    return a*b
}
const substract = sub
module.exports = {
    adding: add,
    subtracting: sub,
    substract,
    multiplying: mul
};