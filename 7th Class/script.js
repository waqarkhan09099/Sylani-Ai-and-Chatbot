// _______________Function____________________
// 1st way to make Function
// hoisting ====> yes
// console.log(myfunciton(2,6))
// function myFunction(input1,input2){
//     return (input1+input2)
// }
// console.log(myfunciton(2,6))

// 2nd way to make Function
// hoisting ====> yes


// Function for adding two Matrix

const addFunction=()=>{
    for(let i=0;i<9;i++){
        document.getElementById(`resultindex${i}`).value=Number(document.getElementById(`matrix1index${i}`).value)+Number(document.getElementById(`matrix2index${i}`).value)
    }
    
}
// Function for subtract two Matrix

const subFunction=()=>{
    for(let i=0;i<9;i++){
        document.getElementById(`resultindex${i}`).value=Number(document.getElementById(`matrix1index${i}`).value)-Number(document.getElementById(`matrix2index${i}`).value)
    }
    
}
// Function for Multiply two Matrix

const multiFunction=()=>{
    for(let i=0;i<9;i++){
        document.getElementById(`resultindex${i}`).value=Number(document.getElementById(`matrix1index${i}`).value)*Number(document.getElementById(`matrix2index${i}`).value)
    }
    
}
// Function for Divide two Matrix

const divideFunction=()=>{
    for(let i=0;i<9;i++){
        document.getElementById(`resultindex${i}`).value=Number(document.getElementById(`matrix1index${i}`).value)/Number(document.getElementById(`matrix2index${i}`).value)
    }
    
}


