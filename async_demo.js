function register(){
    setTimeout(()=>{
           console.log("register here");
    },10000)
}
function login(){
     setTimeout(()=>{
 console.log("login here");
},5000)  
}
function getData(){
     setTimeout(()=>{
console.log("fetch data from DB");
     },4000)
}
// }      #asynchonous programming 
function displayData(){
    setTimeout(()=>{
     console.log("view user Data");
     },6000)
    
}

register();
login();
getData();
displayData();
console.log("call another application");
