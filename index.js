var  inputBox = document.getElementById("input-box");
var listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toogle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showttask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showttask();