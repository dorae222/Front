var button = document.getElementsByTagName("button");
button[0].onclick = dom_function;

function dom_function() {
    var newP = document.createElement("p");
    var userName = document.querySelector('#userName');
    var newName = document.createTextNode(userName.value);
    newP.appendChild(newName); // <p>도형준</p>
    var nameList = document.getElementById('nameList');
    nameList.appendChild(newP);
    userName.value = "";
}