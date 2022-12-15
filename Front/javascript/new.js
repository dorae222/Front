function Family(relation, name, age){
    this.relation = relation;
    this.name = name;
    this.age = age;
}

var Family_1 = new Family("아버지","도현우",52);
var Family_2 = new Family("어머니","김수미",48);
var Family_3 = new Family("누나","도효주",25);

var arr = [Family_1, Family_2,Family_3];

document.write("<h1>샘플 정답</h1>")

for (let i = 0; i < arr.length; i++) {
    document.write(`저희 ${arr[i].relation}의 성함은 '${arr[i].name}'이시고, 연세는 ${arr[i].age}세 입니다.<br>`)
}