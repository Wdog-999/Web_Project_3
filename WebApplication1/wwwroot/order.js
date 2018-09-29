// JavaScript source code
var dict = {
    coffee: 2.0,
    tea: 1.5,
    beer: 43.0,
    wine: 800.0
};
let myBtn = document.querySelector('#order');
myBtn.onclick = function () {
    document.getElementById("receipt").hidden = false;
    document.getElementById("1").innerHTML = "Customer: " + document.getElementById('name').value;
    document.getElementById("2").innerHTML = `Hello, `;
    document.getElementById("3").innerHTML = `Hello, `;
};