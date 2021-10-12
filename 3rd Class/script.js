// ....................................Primitive Data type.................................











// .................................Non-Primitive Data Type...................................

// ...................................Array and Object..............................................

let array1=[2,4,5,6];


// array ek reference type hai array apan space nahi leta memory me but is ka address allot ho jata hai

// ager hum isko alag variable me assign karean to dono me change hoga kun k dono ka address same hai


let array2=array1;
console.log("array1:",array1)
console.log("array2:",array2)

array2.push(10);
array2.push(12);

console.log("array1:",array1)
console.log("array2:",array2)




// array ki copy krne k tareeke

let array3=[].concat(array2);
array3.push(18);
console.log('array3',array3)

let array4=[...array2];
array4.push(20);
console.log('array4',array4);
// ---------------------------------------------------------

let obj1={
    name:"waqar",
    age:20,
    profession:'developer',
    consition:true
}

let obj2=obj1

console.log("obj1:",obj1);
console.log("obj2:",obj2);

obj1.name="imran";
console.log("obj1:",obj1);
console.log("obj2:",obj2);

// object ki copy kr k value me changing krne ka tareeka

let obj3=Object.assign({},obj1);
obj3.name="shahrukh"
console.log('obj3:',obj3)

let obj4={...obj1};
obj4.name='billgates'
console.log('obj4:',obj4)
let obj5={...obj4}
// object me add krne k do tareeke
obj5["newvalue"]=false;
// or
obj5.keyvalue="new value"
console.log('obj5: ',obj5);

// falsy value ====>    false , NaN , undefined , "", 0, [] , {}
// agr in value k ilawa koi bhe value daal do wo true hoga if else condition me


// let sum = false?"go":("condition"&&false)?"condition run":"falsy";

// console.log(sum);

for(let i=1;i<=10;++i){
    console.log("2 X",i,"=",(i*2));
}
let a=10;
for (a = 0; a < 6; a++) {
    for (let j = 0; j < a; j++) {
        console.log("*");
    }
    console.log("");
}
