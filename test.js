console.log("hlo world")
 let a=10;
 let b=-3;
 let c= 'hii';
 total=a+b+" "+c;
 console.log(total);

 let x=4;
 let y=5;
 const multiply=x*y;
 console.log(multiply);

 let d=1;
 let e=(10+4)*d;
 console.log(e);

 const square=x**y;
 console.log(square);

 const subtract=x-y;
 console.log(subtract);

 const divide=x/y;
 console.log(divide);

let _a=5;
let _b=5;
let _c= _b;
console.log(_a+_c);

let _x=5;
_x+=10;
console.log(_x);

let text="hello ";
text+='world';
console.log(text);

let logicalOperator = true;
let logicalandassignment= logicalOperator &&= 7;
console.log(logicalandassignment);

let x1 = false;
let y1 = x1 ||= 25;
console.log(y1);

let text1 = "12345";
let min = Math.min(...text1);
let max = Math.max(...text1);
console.log(min,max);


let a1=8;
let b1= a1==8;
console.log(b1);

let a2=8;
let b2= a2==="8";
console.log(b2);

let greater=8;
let greater1= greater> 5;
console.log(greater1);

let lessthan=8;
let lessthan1= lessthan< 5;
console.log(lessthan1);

let text3 = "a";
let text2 = "B";
let result = text3 >= text2;
console.log(result);

function sayHlo(){
    return 'hlo';
 }
 let greeting= sayHlo();
 console.log(greeting);


let array=['hii', 1.2, 1 ];
console.log(array);
let array1=array[0]+ " " +array[1];
console.log(array1);

let age1=18;
let vote="not eligible";
if (age1>=18){
    vote='eligible';
}
console.log(vote);

let age = 17;
let drive=""
if (age >= 18) {
  drive = "You can drive"; 
}else{
    drive="You can Not drive";
}
console.log(drive);
let Age = 16;
let country = "USA";
let texted = "You can Not drive!";

if (country == "USA") {
  if (Age >= 16) {
    texted = "You can drive!";
  }
}
console.log(texted);

let age2=16;
let country1 ="USA";
let dirve1='You Can Not Drive';
if( country=="USA" && age>=18){
     dirve1='You Can drive';
  }
console.log(dirve1);

let time=18;
let greeting1;

if(time<11){
  greeting1="good morning"; 
}
else if (time<17){
  greeting1="good afternoon";
}
else{
  greeting1='good evening';
}

console.log(greeting1)

let n=50;
for (let i=1;i<=n;i++){
  if(i%2==0){
    console.log(i)
  }
}