// JavaScript source code
function verify() {
    var x = document.getElementById("type");
    var drink = x.options[x.selectedIndex].value;
    if (drink == "beer" || drink == "wine") {
        var y = document.getElementById("hidden");
        y.hidden = false;
    }
    if (drink != "beer" && drink != "wine") {
        var y = document.getElementById("hidden");
        y.hidden = true;
    }
}