var count = 0;
var btn1 = document.getElementById('btn');
console.log(btn1)
btn1.addEventListener('click', grater)

function grater() {
    var number1 = document.getElementById('num1').value;
    var color = document.getElementById('color').value;
    for (var i = 0; i < number1; i++) {
        count++;
        var btn = document.createElement("button");
        btn.className = "btn1";
        btn.innerHTML = "new Button " + count;
        btn.style = "background-color:" + (color) + ";";
        document.body.appendChild(btn);
    }
}