// 마우스를 올렸을 때 동그랗게 변환 --> borderRadius
// 마우스를 올렸을 때 도형 색상이 파란색으로 변환 --> backgroundColor
// 마우스를 올렸다가 빼면, 원상 복구

var nemo = document.getElementById('nemo');
nemo.onmouseover = function(){
    nemo.style.borderRadius = "500px";
    nemo.style.backgroundColor ="blue";
    nemo.style.borderColor ="blue";
}

nemo.onmouseout = function(){
    nemo.style.borderRadius = "";
    nemo.style.backgroundColor ="";
}