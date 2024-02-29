let dbuser = {
    username: "ram",
    password:"12345678",
    isActivated: false
}

let inputusername = "ram"
let inputPassword = "12345"

//ram can login 

if (inputPassword == dbuser.password && inputusername == dbuser.username && dbuser.isActivated  ){
    console.log("Ram can login");


}else{
    console.log("Ram cannot login");
}


let student  =[ 
    {
    name: "ram",
    hasPaid:false,
    hasScholorship:false,
    fullAttendence:true

 },
    {
    name: "hari",
    hasPaid:false,
    hasScholorship:false,
    fullAttendence:true

 },
    {
    name: "shyam",
    hasPaid:false,
    hasScholorship:false,
    fullAttendence:true

 }
]


 /* nested loop way */

 if(student.fullAttendence){
    if (student.hasPaid){
        console.log("ram can give exam");
    }else if(student.hasScholorship){
        console.log("Ram can give exam");
    }else{
        console.log("Ram cannot give exam");
    }

 }else{
    console.log("ram cannot give exam");
 }



 if ( (student.hasPaid || student.fullAttendence) && student.hasScholorship ){
    console.log("ram can give exam");
 }
 else{
    console.log("ram cannot give exam");
 }



 