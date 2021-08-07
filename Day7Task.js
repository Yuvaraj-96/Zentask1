
// shadowing
var  fun=()=> {
    let shadow = '1456';      
    if (1==1) {
        let shadow = 'GeeksforGeeks'; 
        console.log(shadow); 
    }     
    console.log(shadow); 
}
fun();

var shadow1 = '1456'; 
var  fun1=()=> {
         
    if (1==1) {
        var shadow1 = 'GeeksforGeeks'; 
        console.log(shadow1); 
    }     
    console.log(shadow1); 
}
fun1();

var  fun2=()=> {
    const shadow = '1456';      
    if (1==1) {
        const shadow = 'GeeksforGeeks'; 
        console.log(shadow); 
    }     
    console.log(shadow); 
}
fun2();

//Dead zone

let add = val1 + 8;        
console.log(add)      // this will be death zone    
let val1 = 3;

// hosting

//Actual code
console.log(num); 
var num = 6;


//step1
var num; // All variable will be declared at the top code
console.log(num); 
num= 6;



