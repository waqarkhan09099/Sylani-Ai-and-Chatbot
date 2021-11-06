const form = document.getElementById("form")
const form2 = document.getElementById("form2")
const infoContainer = document.getElementById('listData')
const userContainer = document.getElementById('userData')

//  Post Data Submit Section
form.addEventListener('submit', submitHandler = (e) => {
    e.preventDefault()
    let name=document.getElementById('name').value
    let lastName=document.getElementById('last_name').value
    let userEmail=document.getElementById('email').value
    document.getElementById('name').classList=name.trim().length==''?"invalid":"isvalid"
    document.getElementById('last_name').classList=lastName.trim().length==''?"invalid":"isvalid"
    document.getElementById('email').classList=userEmail.trim().length==''?"invalid":"isvalid"
    // let newUser = {
    //     first_name: name,
    //     last_name: lastName,
    //     email: userEmail
    // }

    axios.post('https://waqarkhan-server-12982.herokuapp.com/api/student', {
        "first_name": name,
        "last_name": lastName,
        "email": userEmail
    })
    .catch(error=> {
        alert(error)
    })
    getData();
    name=''
    lastName=''
    userEmail=''
    alert("Your Information Are Submitted")
})
let fetchIdInfo=[]
const getData = () => {
    console.log("clicked")
    let studentgetid=Number(document.getElementById('studentgetID').value)
    
    if(!studentgetid==""){

        infoContainer.innerHTML=''
        axios.get(`https://waqarkhan-server-12982.herokuapp.com/api/student/${studentgetid}`).then(res=>{
            console.log(res)
            
            fetchIdInfo.push(res.data)    
            infoContainer.innerHTML=fetchIdInfo.map((e,index) => `
            <div class="studentInfo">
                <div class="list-header id-class">
                    <h3>${index===0?'1':index+1}</h3>
                </div>
                <div class="list-header id-class">
                    <h3>${e.id}</h3>
                </div>
                <div class="list-header">
                    <h3>${e.first_name}</h3>
                </div>
                <div class="list-header">
                    <h3>${e.last_name}</h3>
                </div>
                <div class="list-header email">
                    <h3>${e.email}</h3>
                </div>
            </div>
    
            `)
        })

        return 
    }else{
        axios.get('https://waqarkhan-server-12982.herokuapp.com/api/student').then(res => {
        console.log(res.data)
    
        infoContainer.innerHTML=res.data.map((e,index) => `
        <div class="studentInfo">
            <div class="list-header id-class">
                <h3>${index===0?'1':index+1}</h3>
            </div>
            <div class="list-header id-class">
                <h3>${e.id}</h3>
            </div>
            <div class="list-header">
                <h3>${e.first_name}</h3>
            </div>
            <div class="list-header">
                <h3>${e.last_name}</h3>
            </div>
            <div class="list-header email">
                <h3>${e.email}</h3>
            </div>
        </div>

        `)

    }).catch(error=>alert(error))

        
    }
    
    
}
// const  getData=()=> {
//     console.log("clicked")
//     axios.get('https://swapi.dev/api/people').then(res=>console.log(res))
// }
//  Put Data Submit Section
form2.addEventListener('submit', submitHandler = (e) => {
    e.preventDefault()
    let firstName=document.getElementById('putname').value
    let lastName=document.getElementById('putlastname').value
    let userEmail=document.getElementById('putemail').value
    document.getElementById('putname').classList=firstName.trim().length==''?"invalid":"isvalid"
    document.getElementById('putlastname').classList=lastName.trim().length==''?"invalid":"isvalid"
    document.getElementById('putemail').classList=userEmail.trim().length==''?"invalid":"isvalid"
    // let newUser = {
    //     first_name: name,
    //     last_name: lastName,
    //     email: userEmail
    // }
    let studentId=Number(document.getElementById('putid').value)
    axios.put(`https://waqarkhan-server-12982.herokuapp.com/api/student/${studentId}`, {
        "first_name": firstName,
        "last_name": lastName,
        "email": userEmail
    })
    .catch(error=> {
        alert(error)
    })
    firstName=''
    lastName=''
    userEmail=''
    getData()
    alert(`Student ${studentId} Information Are Changed`)

})

// Delete Function 

function deleteData(){
    let studentgetid=Number(document.getElementById('studentgetID').value)
    axios.delete(`https://waqarkhan-server-12982.herokuapp.com/api/student/${studentgetid}`).catch(res=>alert(res))
    getData()
}