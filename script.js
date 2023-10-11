let inputs = document.getElementById("task");
console.log(inputs)
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please enter a task")
    }
    else{
        let newTask = document.createElement("ul");
        newTask.innerHTML = `${inputs.value} <i class="fa-solid fa-delete-left"></i>`;
        text.appendChild(newTask);
        inputs.value = "";
        newTask.querySelector("i").addEventListener("click",remove);
        function remove() {
            newTask.remove()
        }

    }
}
