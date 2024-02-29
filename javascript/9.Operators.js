/* Operators
        -assignment operators
            =(value assigned )


        -arthematic operators
            +
            -
            * - multiply
            / - divide
            % - modulos -- returns remainder

          -comparision operators
            <
            >  
            <=
            >= 
            ==   //equality operator

         -logical operators   
            - And - each and every condition must be true &&
            - OR  - andy one of the condition can be true ||
            - NOT !
 
 */

            let services = [
                {                
                    index:0,
                    title: "web",
                    image: " ",
                },
                {
                    index: 1,
                    title: "software development",
                    image: "",
                }
            ]
            
            console.log(0%2); //0
            console.log(1%2); //1
            console.log(2%2); //0
            console.log(3%2); //1
            
            let count = 100
            // count = 101
            // count = count + 1
            // count += 10;         //This is more preferable
            // count++              //post increment
            // ++count              //pre increment
            
            
            // console.log(count++);
            // console.log(++count);
            
            // console.log({"count":count});
            // console.log({count});
            
            function double(input){
                return input *2;
            }
                console.log(double(11));
            
            // console.log(double(count++)); //double(100)    
            // console.log(double(++count)); //double(101)    
            
            
            console.log(10<5);
            console.log(10<10);
            console.log(10<=10);
            console.log(5<=10);
            
            if(5<10){
                console.log("true statement");
            }
            
            console.log("ram"== "ram");  //true
            console.log("ram"== "Ram");  //false
            console.log("ram"== "Ram "); //false
            
            let dbuser = {
                username: "ram",
                password:"12345678",
                
            }
            
            let inputusername = "ram"
            let inputPassword = "12345"
            
            
            //Ram can login 
            
              /*First way (Nested loop used)*/
            
            if(inputusername==dbuser.username){
               if(inputPassword==dbuser.password){
                  console.log("Ram can login");
               }else{
                  console.log("Ram Cannot login");
               }
            }else{
               console.log("Ram cannot login");
            }
            
            
            /* More Precise way (Using Operatros) */
            
            if (inputPassword == dbuser.password && inputusername == dbuser.username){
                console.log("Ram can login");
            
            
            }else{
                console.log("Ram cannot login");
            }
             
             