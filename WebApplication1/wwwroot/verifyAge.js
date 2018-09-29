// JavaScript source code
function verify() {
    var x = document.getElementById("type");
    var drink = x.options[x.selectedIndex].value;
    var y = document.getElementById("hidden");
    if (drink === "Beer" || drink === "Wine") {
        y.hidden = false;
        document.getElementById("order").hidden = true;
    }
    else {
        y.hidden = true;
    }
}

var dict = {
    Coffee: 2.0,
    Tea: 1.5,
    Beer: 43.0,
    Wine: 800.0
};
function order() {
    document.getElementById("receipt").hidden = false;
    document.getElementById("1").innerHTML = "Customer: " + document.getElementById('name').value;
    document.getElementById("2").innerHTML = "" + document.getElementById('amount').value + " " + document.getElementById('type').value + " @ $" + dict[document.getElementById('type').value];
    document.getElementById("3").innerHTML = "TOTAL: $" + document.getElementById('amount').value * dict[document.getElementById('type').value];
}