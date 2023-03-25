let containerDiv = document.querySelector(".container");
let btn = document.createElement("button");
btn.className = "button";
btn.innerText = "+";
containerDiv.appendChild(btn);

let input = document.createElement("input");
input.className = "values";
input.type = "text";
input.value = "0";
containerDiv.appendChild(input);

let btn1 = document.createElement("button");
btn1.className = "button";
btn1.innerText = "-";
containerDiv.appendChild(btn1);

btn.addEventListener("click", increment);
function increment() {
    let count = document.querySelector(".values").value;
    count++;
    console.log(count);
    document.querySelector(".values").value = count;
}

btn1.addEventListener("click", decrement);
function decrement() {
    let count = document.querySelector(".values").value;
    if (count > 0) {
        count--;
    }
    console.log(count);
    document.querySelector(".values").value = count;
}