var item_list = new Array();
var add_button = document.querySelector('#add');
add_button.onclick = function () {
    var item = document.querySelector('#item').value;
    item_list.push(item);
    document.querySelector('#item').value = '';
    show();
}
function show() {
    var tag = "<ul>";
    for(let i = 0; i < item_list.length; i++) { // <li> 태그 반복 </li>
        tag = tag + "<li>" + item_list[i] +
        "<span class='close' id=" + i + "> X </span></li>";
    }
    tag = tag + "</ul>";
    document.querySelector('#itemList').innerHTML = tag;
    var remove_items = document.querySelectorAll('.close');
    for (let i = 0; i < remove_items.length; i++) {
        remove_items[i].onclick = remove();
    }
}
function remove() {
    var id = this.getAttribute("id");
    item_list.splice(id, 1);
    show();
}