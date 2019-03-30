// let myHeading = document.querySelector("h1");
// myHeading.textContent = "hello world";
// let myVariable;
// myvariable = "lilei";
// let myvaribale = "lilei";
// myvaribale;
// let myvariable = 'lilei';
// myvaribale = 'hanmeimei';
// let iceCream = "chocolate";
// if(iceCream === "chocolate") {
//     alert("shiwo ");
// } else {
//     alert("bushiwo ");
// }
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }
let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/2.jpg") {
        myImage.setAttribute("src", "images/firefox2.png");
    }else {
        myImage.setAttribute("src", "images/2.jpg");
    }
}

//切换用户欢迎信息，
function setHeading(name) {
    let myHeading = document.querySelector("h1");
    myHeading.textContent = "mozilla 酷毙了， " + name + "! ";
}
function setUserName() {
    let myName = prompt("请输入你的名字：");
    localStorage.setItem("name", myName);
    setHeading(myName);
}
 let storeName = localStorage.getItem("name");
 if(!storeName) {
     setUserName();
 }else {
     setHeading(storeName);
 }

 let myButton = document.querySelector("button");
 myButton.onclick = setUserName;