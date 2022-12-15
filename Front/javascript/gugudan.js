document.write("<h1>구구단</h1>")

for (var i = 2; i<10; i++){
    document.write("<div>")
    document.write(`<h3>${i}단</h3>`)
    for(var k = 1; k<10; k++){
        document.write(`${i}X${k}=${k*i}<br>`)
    }
    document.write("</div>")
}