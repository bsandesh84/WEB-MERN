// function double(input){

//     //console.log('double of ${input} id ${input * 2});
//     return input*2;
// }


// function sum(input1 , input2){
//     let result = input1 + input2;
//     return result
// }

// console.log("double fo 2 ", double(2));

/*
   conditional statements
   if -else

 */


/*
let willRain = false
let hasProbablity = false
let isVerySunny = true

if(willRain){
   console.log("take umbrella")

}else if(isVerySunny){
   console.log("Take umbrella");

}else if(hasProbablity){
   console.log("you may need to take umbrella");
   
}else{
   console.log("no need to take umbrella");
}
*/



/*
let todos = [
   {
      title : "html",
      status:true
   },
   {
      title: "react",
      status:false
   },
   {
      title:"express",
      status:false
   }
]

if (todos[0].status){
   console.log(`${todos[0].title} is completed`)
} 
else{
   console.log(`${todos[0].title} is pending`);
}


if(todos[1].status){
   console.log(`${todos[1].tile} is completed`);
}
else{
   console.log(`${todos[1].title} is pending`);
}


if(todos[2].status){
   console.log(`${todos[2].tile} is completed`);
}
else{
   console.log(`${todos[2].title} is pending`);
}

function checkTodoStatus() {

   

}
*/

let students = [
    {
    name: "ram",
    hasPaid:false,
    hasScholorship:true,
 },
 
 {
    name: "shyam",
    hasPaid:false,
    hasScholorship:true,
 },
 
 {
    name: "hari",
    hasPaid:false,
    hasScholorship:true,
 }
 ]
 
 
 
 
 function checkStudentAvailability(students){
 
    if(students.hasPaid){
       console.log(`${students.name} has not paid`);
    }
    
    else if(students.hasScholorship){
       console.log(`${students.name} has scholorship`);
    
    }
    
    else{
       console.log(`${students.name} has paid`);
    }
    
 
 }
 
 checkStudentAvailability(students[0]);
 checkStudentAvailability(students[1]);
 checkStudentAvailability(students[2]);
 
 
 