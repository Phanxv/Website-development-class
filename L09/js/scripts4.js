OddNumbers = {};
OddNumbers[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            if(n%2 == 0){
                n+=1;
            }else{
                n+=2;
            }
            if(n>=100){done = true}
            return{value: n, done: done};
        }
    };
}
let myFunc = function () {
    let text = "";
    for(const num of OddNumbers){
        text += num + "<br>";
    }
    document.getElementById("oddnumber").innerHTML = text;
}
