
function fun(){
 
    let num1=parseInt(prompt("Enter the 1st number:","Num1"));
    let num2=parseInt(prompt("Enter the 1st number:","Num2"));
    let res=num1+num2;
    alert("The sum is "+res);
    document.getElementById('p1').innerText="The sum of two numbers is:"+res;
}

