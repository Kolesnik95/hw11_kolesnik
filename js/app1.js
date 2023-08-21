   
function sumDigit(){
    let sum = 0;
    return function(value){
        return sum += value;
    }
}
let newDigit = sumDigit();
console.log(newDigit(3));
console.log(newDigit(5));
console.log(newDigit(20));