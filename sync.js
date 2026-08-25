function register(){
    waitfofdelay(10000);

    console.log("register here");
}
function login(){
     waitfofdelay(5000); 
    console.log("login here");
}
function getData(){
     waitfofdelay(4000);
    console.log("fetch data from DB");
}
function displayData(){
     waitfofdelay(6000);
    console.log("view user Data");
}
function waitfofdelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){


    }

}
register();
login();
getData();
displayData();
console.log("call another application");
