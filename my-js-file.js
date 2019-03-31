var list = document.createElement("ul");
var info = document.createElement("p");
var html = document.querySelector("html");

info.textContent = "below is a dynamic list. ";

document.body.appendChild(info);
document.body.appendChild(list);
html.onclick = function() {
    var listItem = document.createElement("li");
    var listContent = prompt("what content do you want the list item to have ?");
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        var listContent = prompt("enter new content for you list item");
        if(listContent === "") {
            alert("zaijian");
        }else {
            this.textContent = listContent;
        }
    }
}