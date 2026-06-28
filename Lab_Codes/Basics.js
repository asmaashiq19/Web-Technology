//variables
/*var items=["CSE", "ECE", "EEE", "MECH", "CIVIL"];
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
//Arrow Function
const mfunc=(a,b)=>a**b;
console.log(mfunc(2,4));

var number=10;
console.log(--number);

var number=20;
console.log(++number);*/

function fun(){
    let message;
    let username=prompt("What is your name?");
    if(username == null || username=="")
    {
        message="The user has given a null value or cancelled the prompt";
    }
    else{
        message="Hello "+username+","+"Welcome to the course";
    }
    document.getElementById('p1').innerHTML=message;
  
      }
     {
        if(confirm("Give your choice"))
            {
            alert("You pressed it!");
        }
    else{
        alert("You pressed cancel");
    }
     }

