function showPrice(){
    var orginPrice = document.querySelector("#oPrice").value;
    var rate = document.querySelector("#rate").value;
    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은" +
    orginPrice + "원이고, 할인율은" + rate+ "%입니다." +
    "할인 받은 가격은" + (orginPrice*(1-rate/100)) +"원 입니다"
}