var i = 0;

start_button = document.querySelector('#start')
start_button.onclick = function(){
    timer = setInterval(test,1000)
}

function test(){
    document.getElementById("message").innerHTML = `${i}번째 실행중 <br>`;
    i+=1;
}

stop_button = document.querySelector('#stop')
stop_button.onclick = function(){
    clearInterval(timer)
}