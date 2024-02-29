var person = "sony"
let greetings = "hi"
let age = 20


console.log(greetings,person);

/* variable declaration and initialization */

let course
course = "web"
course = "mern"
console.log(course);

var color = "white"
var color = "red"   //can be re-decalarized 

let size = "sm"
//let size = "sm" //cannot be re-declarate
size = "md"      //but can be re-initialized.
size = "lg"

const PI = 3.145   // using const if it can never be changed.
 const EARTH_ROTATION = "w-e"

//  let count;          //value not initialized so we ge udefined output.
//  console.log(count);

 /* Data Types
    Primitive data types
        1.string text
        2.number 
            -integer //whole number
            -float / dobule //decimal
        3.boolean
            -true
            -false  
        4. undefined // javascript specific.
        5. null // empty      
    non-primitive (collections)
        -array (collection of multiple values)
        -usually it is collection of similar data-types.
        -always starts with 0th index

        syntax
            let <variableName>= [<element>,<element>...]
*/

let data = null

let topic1 = "html" 
let topic2 = "css"
let topic3 = "recat"

// let topics = "html, css, js ,react"

let topics =  ["html","css","js","react"]
//let topics =[0th,     1th,  2nd, 3rd  ]
console.log(topics);

let ages = [10, 20, "thirty"]

console.log(ages);
console.log("2nd index", ages[2]);

/*change "thirty by 30" */
ages[2]= 30

console.log("2nd index:after:", ages[2]);
console.log("3rd index:after:", ages[3]);








