var drink = prompt("관심 세션을 선택, 1. 콜라-1000원, 2.사이다-1500원, 3.환타-2000원");
var count = prompt("몇 개의 음료를 고르시겠습니까?")
var money = prompt("보유금액을 입력해주세요")
var insert = document.querySelector("#result")

switch(drink){
    case "1":
        if (money>1000*count){
            insert.innerHTML = `콜라는 ${count}개 살 수 있어요. 거스름돈은 ${money-1000*count}입니다`
        }
        else{
            insert.innerHTML = `돈이 부족해서 콜라를 ${count}개 살 수 없어요. 부족한 금액은 ${1000*count-money}원입니다.`
        };
        break;
    case "2":
        if (money>1500*count){
            insert.innerHTML = `사이다는 ${count}개 살 수 있어요. 거스름돈은 ${money-1500*count}입니다`
        }
        else{
            insert.innerHTML = `돈이 부족해서 사이다를 ${count}개 살 수 없어요. 부족한 금액은 ${1500*count-money}원입니다.`
        };
        break;
    case "3":
        if (money>2000*count){
            insert.innerHTML = `환타는 ${count}개 살 수 있어요. 거스름돈은 ${money-2000*count}입니다`
        }
        else{
            insert.innerHTML = `돈이 부족해서 환타를 ${count}개 살 수 없어요. 부족한 금액은 ${2000*count-money}원입니다.`
        };
        break;
        default: alert("올바른 값을 입력해주십시오.");
}