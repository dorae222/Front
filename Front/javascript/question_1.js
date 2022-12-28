var count = 0;
var randomNumber = Math.floor(Math.random() * 100) + 1;   

document.querySelector("#try").onkeypress = function(e) {
  if (e.keyCode == 13 || e.which == 13) {  
    finding(); 
    return false;  
}       

function finding() {                                    
  var userNumber = document.querySelector("#try").value;    

  if ( userNumber >=1 && userNumber <= 100)  {          
    if (randomNumber > userNumber) {                           
      document.querySelector("#display").innerHTML = " 더 높은 숫자를 입력!";}
    else if (randomNumber < userNumber) {
      document.querySelector("#display").innerHTML = "더 낮은 숫자를 입력!"; 
    }
    else {
      document.querySelector("#display").innerHTML = "<span style='color:blue'>맞혔습니다!</span>";  // #display 영역에 맞혔다고 표시. 글자색 지정하는 태그 사용
    }     
       
    document.querySelector("#try").value="";
    count++;
    document.querySelector("#counter").innerHTML = "시도 횟수 : " +  count + "회";   
  }
  else 
    alert("1과 100 사이의 숫자를 입력하세요.");
    }
}