let numbers=[1,2,3,4,5,6,7,8];
let z=numbers.reduce(
    function(acc,curr){
        return acc+curr;
    },0
);
console.log(numbers);
console.log(z);
