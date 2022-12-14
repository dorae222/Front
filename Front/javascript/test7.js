const money = prompt("금액을 입력하세요");
const option = prompt("음료 선택: (1) 콜라 1000원 (2) 사이다 1500원 (3) 환타 2000원 ");
const num = prompt("개수를 입력하세요");
const coke = {name: "콜라", price: 1000};
const cider = {name: "사이다", price: 1500};
const whanta = {name: "환타", price: 2000};
function calc(drink) {
    let total = drink['price'] * num;
    if ( money >= total) {
        document.querySelector("#result").innerHTML = `${drink['name']} ${num}개를 살 수 있습니다. 거스름돈은 ${money-total}원입니다.`;
    } else {
        document.querySelector("#result").innerHTML = `돈이 부족해서 ${drink['name']} ${num}개를 살 수 없습니다. 부족한 금액은 ${total-money}원입니다.`;
    }
}
switch (option) {
    case "1":
        calc(coke);
        break;
    case "2":
        calc(cider);
        break;
    case "3":
        calc(whanta);
        break;
    default:
        document.querySelector("#result").innerHTML = "제품번호를 정확히 입력해주세요."
}