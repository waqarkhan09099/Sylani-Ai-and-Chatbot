const task9=()=>{
    const num1=prompt("Enter Number One")
    const num2=prompt("Enter Number Two")
    const result=Number(num1*num2)
    const multiconfirm=confirm(`your have multiply two number and result is ${result}`)
    const result2=Number(num1/num2)
    const divideconfirm=confirm(`your have multiply two number and result is ${result2}`)
}

const task10 = () => {
    const temp=Number(prompt("Enter Temperature"))
    const convertCelsius=((temp-23)*5)/9
    const convertFahrenheit=((temp+23)*9)/5
    confirm(`this is temperature in Celsius ${convertCelsius}`)
    confirm(`this is temperature in Fahrenheit ${convertFahrenheit}`)
}

const task11 = () => {
    const num3 = Number(prompt("Enter your First Number"))
    const num4 = Number(prompt("Enter your Second Number"))
    let result=0;
    if(num3===num4){

        result=Number(Math.pow(num3,num4))
        confirm(`Two Numbers are same then take second number as a power ===> ${result}`)
    }else{
        result=Number(num3+num4)
        confirm(`add Two Numbers ===> ${result}`)
    }
    console.log(result)
};

const task12 = () => {
    const userNumber=prompt('Enter your Number')
    if(true){
        const whether=(Math.abs(20-userNumber)<=20)||(Math.abs(100-userNumber)<=20) ||(Math.abs(400-userNumber)<=20);
        return  (
            confirm(`Whether is conditionaly  ${whether}`)
        )
    }
};

const task13 = () => {
    const num1=(Number(prompt("Enter First Number"))) 
    const num2=(Number(prompt("Enter Second Number"))) 
    const num3=(Number(prompt("Enter Third Number"))) 
    confirm(`This is the Largest Number ${Math.max(num1,num2,num3)}`)
};

const task14 = () => {
    const userString=(prompt("Enter your Name")) 
    confirm(`${(userString[0]).toLocaleUpperCase()}${userString.slice(1,userString.length)}`)
};

const task15 = () => {
    const days=Number(prompt('Enter your Days'))
    if(days){
        let hours=days*24
        let minutes=hours*60
        confirm(`Your Day is ---> ${days} and Hours is ---> ${hours} and calculated minutes is ---> ${minutes}`)
    }else{
        alert('Please Enter the Field')
    }
};


const task16= () => {
    let array1=[];
    array1.push(prompt('Enter your First Name'))
    array1.push(prompt('Enter Your Last Name'))
    array1.push(prompt('Enter Your Age Name'))
    let newarray=[]
    for(let i=array1.length;newarray.length<=3;i--){
        newarray.push(array1[i])
    }
    confirm(`Your Reverse Array ${newarray}`)
    console.log(array1.length)
};

const task17 = () => {
    let array1=[];
    array1.push(Number(prompt('Enter your first Number')))
    array1.push(Number(prompt('Enter Your Second Number')))
    array1.push(Number(prompt('Enter Your Third Number')))
    let newarray=Math.max(...array1)
    let secondarray=[]
    for(let i=0;i<array1.length;i++){
        if(array1[i]!==newarray){
            secondarray.push(array1[i])
        }
    }
    alert(`Maximum Number of Array ${newarray}`)
    alert(`remainning numbers ${secondarray}`)
};

const task18 = () => {
    let array1=[];
    array1.push(Number(prompt('Enter your first Number')))
    array1.push(Number(prompt('Enter Your Second Number')))
    array1.push(Number(prompt('Enter Your Third Number')))
    array1.push(Number(prompt('Enter Your Fourth Number')))
    array1.push(Number(prompt('Enter Your Five Number')))
    let newarray=Math.max(...array1)
    alert(`largest Number of kth is ${newarray}`)
}