window.onload = function() {
    let btn1 = document.querySelectorAll('button')[0];
    let btn2 = document.querySelectorAll('button')[1];
    let btn3 = document.querySelectorAll('button')[2];
    let btn4 = document.querySelectorAll('button')[3];
    let btn5 = document.querySelectorAll('button')[4];
    let btn6 = document.querySelectorAll('button')[5];
    let btn7 = document.querySelectorAll('button')[6];
    let btn8 = document.querySelectorAll('button')[7];
    let radioA = document.querySelector('#radio-a');
    let radioB = document.querySelector('#radio-b');
    let numA = document.querySelector('#num-a').value;
    let numB = document.querySelector('#num-b').value;
    let p = document.querySelector('#result');
    function check(obj) {
        if(obj.checked){
            return true
        }else{
            return false
        }
    }
    btn1.onclick = function() {
        if(check(radioA)){
            if(isNaN(numA) === false && numA !== ''){
                p.innerHTML = '数字A是数字'
            }else{
                p.innerHTML = '数字A不是数字'
            }
        }
        if(check(radioB)){
            if(isNaN(numA) === false && numB !== ''){
                p.innerHTML = '数字B是数字'
            }else{
                p.innerHTML = '数字B不是数字'
            }
        }
    }   
}