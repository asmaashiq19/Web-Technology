//variables
var items=["CSE", "ECE", "EEE", "MECH", "CIVIL"];
console.log(items);
items.splice(1,1,"mango");
console.log(items);
items.splice(-2);
var new1=items.splice(1,2);
console.log(new1);
console.log(items);
//functions
function myf(a,b){
    return (a+b);
}
console.log(myf(10,20));
