let day = document.getElementById('day')
let time = document.getElementById('time')
let date = document.getElementById('date')
let triangle = document.getElementById('triangle')
let rotate = document.getElementById('rotate')
let leap = document.getElementById('year')
let sundayfinder = document.getElementById('sundayfinder')
let placeNumber = document.getElementById('randomNumber')
let dateObj = new Date()
const week = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let word = ['S', 'a', 'y', 'l', 'a', 'n', 'i']

setInterval(() => {
    time.innerText = new Date().toLocaleTimeString()
}, 1000)

day.innerText = week[dateObj.getDay()]

date.innerText = dateObj.toLocaleDateString()

let s = (5 + 6 + 7) / 2;

let area = Math.sqrt(s * ((s - 5) * (s - 6) * (s - 7)));
triangle.innerText = area.toFixed(2)

let reverseWord = '';
let pop;
for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
}

let pullchar = reverseWord.substr(-1)

rotate.innerHTML = `
        <h4>${reverseWord}======><h4>
        <h4>   last Character:-   ${pullchar}<h4>
`

const leapYear = (year) => {
    for (j = 1947; j !== year; j++) {
        if (j / 1000 === 2) {
            leap.innerText = j
            break
        }

    }

}

leapYear(Number(dateObj.getUTCFullYear()))

// const januarysundayfinder=(num)=>{
//     for(){

//     }
// }

let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let chance = 10
const randomClickFunc = () => {
    let userNumber = Number(document.getElementById('userNumber').value)

    if (randomNumber === userNumber) {
        placeNumber.innerText = "you guess Right Number You Won!"
    }
    else {
        placeNumber.innerText = "you guess wrong Number You Lose!"

    }
}

function GFG_Fun() {
    var y1 = Number(document
        .getElementById('year1').value);

    var y2 = Number(document
        .getElementById('year2').value);

    var res = " ";

    for (let year = y1; year <= y2; ++year) {
        const c_year = new Date(year, 0, 1);
        if (c_year.getDay() === 0) {
            console.log(c_year.getDay())
            res += year + " ,";
        }
    }

    if (y1 > y2) {
        document.getElementById('gfg').innerHTML
            = "Year2 must be greater than Year1";
    } else {
        if (res === " ") {
            document.getElementById('gfg')
                .innerHTML = `<p>No Year Exist</p>`;
        } else {
            document.getElementById('gfg')
                .innerHTML = `<p> Year having 
                    Sunday on 1st January are :${res}</p>`;
        }
    }
}

let currentYear=Number(document.getElementById('year').value)

const days=0;
const calAug=()=>{
    let current= new Date(currentYear,7,14)
        for (let z=currentYear;z<=2022;z++){
            if(dateObj!==current){
                days+=1
            }
        }
}

document.getElementById('result').innerText=days