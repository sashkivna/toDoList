function updateItemStatus() {
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_"+cbId);
    debugger;
        if(this.checked){

        toDoListArr[cbId -1].status = true;
        itemText.classList.toggle("checked");
        }
    else{
        toDoListArr[cbId -1].status = false;
        itemText.classList.toggle("checked");
    }
    localStorage.setItem("tasks", JSON.stringify(toDoListArr));
    console.log(toDoListArr);
}
function addNewItem(list, itemText) {
    for (var i = totalItems; i < toDoListArr.length; i++) {
        totalItems++;
        var listItem = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "cb_" + totalItems;
        checkBox.onclick = updateItemStatus;
        var span = document.createElement("span");
        span.id = "item_" + totalItems;
        span.innerText = toDoListArr[i].todo;
        listItem.appendChild(checkBox);
        listItem.appendChild(span);
        list.appendChild(listItem);
        continue;
    }
}
function addLocalStorItems(list) {
    if(localStorage.getItem("tasks")!== undefined){
        toDoListArr = JSON.parse(localStorage.getItem("tasks"));
    }
    for (var i = totalItems; i < toDoListArr.length; i++) {
        totalItems++;
        var listItem = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        checkBox.id = "cb_" + totalItems;
        checkBox.onclick = updateItemStatus;
        var span = document.createElement("span");
        span.id = "item_" + totalItems;
        span.innerText = toDoListArr[i].todo;
        if(toDoListArr[i].status == true){checkBox.checked = true;
            span.classList.add("checked");
        }
        else{
            checkBox.checked = false;
            span.classList.remove("checked");
        }
        listItem.appendChild(checkBox);
        listItem.appendChild(span);
        list.appendChild(listItem);
       // continue;
    }
    }
var toDoListArr = [];
totalItems = 0;
addLocalStorItems(document.getElementById("toDoList"));
var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function (event) {
    if(event.which === 13){
        var itemText = inItemText.value;
        var temp ={};
        temp.todo = itemText;
        temp.status = false;
        var i = toDoListArr.length;
        temp.number = i+1;
        toDoListArr[i] = temp;
        console.log(toDoListArr);
            if(itemText == "" || itemText == " "){
        return false;
        }
        addNewItem(document.getElementById("toDoList"), itemText);
        inItemText.focus();
        inItemText.select();
}
}