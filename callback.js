function register(cb){
    setTimeout(()=>{
           console.log("register here");
           cb();
    },10000)
}
function login(cb){
     setTimeout(()=>{
     console.log("login here");
     cb();
},5000)  
}
function getData(cb){
    setTimeout(()=>{
    console.log("fetch data from DB");
    cb();
     },4000)
}
// }      #asynchonous programming 
function displayData(){
    setTimeout(()=>{
     console.log("view user Data");
     },6000)
    
}
//callback hell problem
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        });
    });
});

console.log("call another application");


// solid principle interview question?