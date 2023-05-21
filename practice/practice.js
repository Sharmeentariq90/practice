// arrays:
// let months=["january","feb","march","april","may","june","july"];
// // months.push("august");
// // console.log(months);
// // months.pop();
// // console.log(months);
// // months.unshift(1);
// // console.log(months);
// // months.shift(1);
// // console.log(months);
// // months.splice(5,2,"JUNE","JULY");
// // console.log(months);
// // console.log(months.slice(0,4));
// var newmonths=(months.slice(0,4));
// console.log(newmonths)
// Table of 2:
// for (let i =1;i <=10;i++)
// {console.log("2 X "+i +"="+(2*i));
// }
// TAble of desire number:
// let table=prompt("write a number you want to print");
// for (let i=1;i<=10;i++){
//     console.log(table+" x "+ i + "= "+(table*i));
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let randomNumder = Math.random();
// randomNumder *=10;
// randomNumder=Math.round(randomNumder);

// console.log(randomNumder);
// let guess=prompt("write any number b/w 1-10");
// if (randomNumder===guess){
//     alert("congratz u win!!!!!");

// }
// else{
//     alert("sorry try next time");
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// let favNum=+prompt("type ur favourite number");
// let random=Math.round(Math.random()*10);
// if (favNum===random){
//     alert("congrats u win "+ favNum);

// }
// else{
//     alert("try next time " + random);
// }
// let t =new Date();
// // document.write(t);
// let h=t.getHours();
// let m=t.getMinutes();
// let s=t.getSeconds();
// document.write(h + " : " + m + " : "+ s);
// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("Current time: "+ theHr + ":" + theMin);
// }
// console.log("Funtion");
// tellTime();
// console.log("Funtion");
// function add(){
//     let a=10;
//     let b=15;
//     let sum=a+b;
//     console.log(sum);
// }
// add();
// function greetUser(user) {
//      alert("Hello,"+user);
//     }
//     greetUser("sharmeen");
//     console.log("....................................");
//     console.log("....................................");
//     console.log("....................................");
//     console.log("....................................");
//     greetUser("Tariq");
//     console.log("....................................");
//     console.log("....................................");
//     console.log("....................................");
//     console.log("....................................");
//     greetUser("Arham");
// let t =new Date();
// // document.write(t);
// let h=t.getHours();
// let m=t.getMinutes();
// let s=t.getSeconds();
// document.write(h + " : " + m + " : "+ s);
// function add(a,b){
//     let val=a+b
//     console.log(a+b)
//     return val
// }
// let vel=add(1,2)
// console.log(add(12,7))
// add(8,7); 
// add(5.6,5);
// XXXXXXXXXX-------------------------------------------XXXXXXXXXXXXXXXXXXXXXXX
// *******************SIMPLE CALCULATOR**************************
// const Operator = prompt("Enter operator,Either +,-,*,/");
// let firstN = parseFloat(prompt("enter 1st number"));
// let secondN = parseFloat(prompt("enter 2nd number"));
// function sum() {
//     let a = (firstN + secondN)
//     return a

// }
// function sub() {
//     let b = (firstN - secondN)
//     return b

// }
// function mul() {
//     let c = (firstN * secondN)
//     return c

// }
// function div() {
//     let d = (firstN / secondN)
//     return d

// }

// if (Operator == "+") {
//     console.log(sum(firstN,secondN))
// }
// else if
//     (Operator == "-") {
//     console.log(sub(firstN,secondN))
// }
// else if
//     (Operator == "*") {
//     console.log(mul(firstN,secondN))
// }
// else if
//     (Operator == "/") {
//     console.log(div(firstN,secondN))
// }
// else{console.log("Invalid Operator")}
// XXXXXXXXXXXXXXXXXXXX--------------------------------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// ***********************************clock***********************************************************
// let clock=new Date();
// console.log(clock);
// const hoursEle=document.getElementById("hours");
// const minutesEle=document.getElementById("minutes");
// const secondEle=document.getElementById("second");
// setInterval(function() {
//     let date=new Date()
// hoursEle.innerText=date.getHours()
// minutesEle.innerText=date.getMinutes()
// secondEle.innerText=date.getSeconds()
    
// }, 1000);
// xxxxxxxxxxxxx-------------------------------------xxxxxxxxxxxxxxxxxxxxxxx

















