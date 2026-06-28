
function fun(){
let choice=parseInt(prompt("Enter your choice"));
let day;
switch(choice){
    case 1: day="Sunday";
    break;
    case 2: day="Monday";
    break;
    default: day="invalid choice";
}
document.getElementById('p1').innerHTML=day;
}
