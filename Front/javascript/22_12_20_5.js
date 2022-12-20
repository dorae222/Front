var newP = document.createElement("p"); //<p></p>
var newText = document.createTextNode("안녕하십니까??") //<p>안녕하십니까?</p>
var test = newP.appendChild(newText);
document.body.appendChild(test);

// 속성 노드 추가
// 속성 - class, id, style, etc...
var attr = document.createAttribute("class");
attr.value = "accent" //<p class="accent"></p>
newP.setAttributeNode(attr)