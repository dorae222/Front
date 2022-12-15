function showDetail(){
    document.querySelector("#desc").style.display="block";
    document.querySelector("#open").style.display="none";
}

function hideDetail(){
    document.querySelector("#desc").style.display="none";
    document.querySelector("#open").style.display="block";
}

function onImage(){//element(s) 복수 -> 배열의 형태를 가짐
    document.getElementsByTagName("img")[0].style.width="700px";
    document.getElementsByTagName("img")[0].style.border = "5px red solid"
    alert("마우스를 사진에 올리셨네요?")
}

var image_modify = document.getElementsByTagName("img")[0];

image_modify.onmouseover = function(){
    document.getElementsByTagName("img")[0].style.width="700px";
    document.getElementsByTagName("img")[0].style.border = "5px red solid";
    alert("마우스를 사진에 올리셨네요?");
}

image_modify.onmouseout = function(){
    document.getElementsByTagName("img")[0].style.width="";
    document.getElementsByTagName("img")[0].style.border = "";
    alert("사진을 벗어나셨네요.");
}

//마우스를 올렸을때는 mouseover, 마우스를 뺏을 때는 mouseout
// display: none, block, inline-block;