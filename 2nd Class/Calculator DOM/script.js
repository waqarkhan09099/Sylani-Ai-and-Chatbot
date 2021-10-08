function addFunction(){
    let num1=Number(document.getElementById('number1').value)
    let num2=Number(document.getElementById('number2').value)
    let result =num1+num2;
    document.getElementById('result').innerText=result;
}
subFunction=()=>{
    let num1=Number(document.getElementById('number1').value)
    let num2=Number(document.getElementById('number2').value)

    let result =num1-num2;
    document.getElementById('result').innerText=result;
}
multiplyFunction=()=>{
    let num1=Number(document.getElementById('number1').value)
    let num2=Number(document.getElementById('number2').value)

    let result =num1*num2;
    document.getElementById('result').innerText=result;
}
divideFunction=()=>{
    let num1=Number(document.getElementById('number1').value)
    let num2=Number(document.getElementById('number2').value)

    let result =num1/num2;
    document.getElementById('result').innerText=result;
}
reminderFunction=()=>{
    let num1=Number(document.getElementById('number1').value)
    let num2=Number(document.getElementById('number2').value)

    let result =num1%num2;
    document.getElementById('result').innerText=result;
}