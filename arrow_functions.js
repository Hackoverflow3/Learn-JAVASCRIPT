


const check_value = (...stringg) =>{
    let check = 0 ; 
    for(let i = 0 ; i<stringg.length; i++)
        { 
            if(stringg[i] === "A");
                check +=1  ; 
        }
        return check; 

 }
 const stringg = "ABHISEK";
 const MM  = check_value(stringg);
 console.log(MM);
 

 // in arrow functions there is hoisting that means it cannot be used before declaration 
 // when we use this keyword in arrow function it basically refers to the whole window rather than referring to the same object. 
 // i dont think this is useful lol.
 