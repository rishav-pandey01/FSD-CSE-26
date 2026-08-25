const bookdata=[{
    image:"https://th.bing.com/th/id/OIP.uHg9sCIUCaJEYqLdIJBmEQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",price:465},
    {image:"https://th.bing.com/th/id/OIP.uHg9sCIUCaJEYqLdIJBmEQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",price:500},
    {image:"https://th.bing.com/th/id/OIP.uHg9sCIUCaJEYqLdIJBmEQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",price:600},
    {image:"https://th.bing.com/th/id/OIP.uHg9sCIUCaJEYqLdIJBmEQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",price:600}
];
function Book(data){
const div=document.createElement("div");
div.setAttribute("class","book");
const image=document.createElement("img");
image.setAttribute("src",data.image);
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const heading=document.createElement("h2");
heading.innerText="Price:"+data.price+"₹";
const bt=document.createElement("button");
bt.innerText="Add to Cart";
div.appendChild(image);
div.appendChild(heading);
div.appendChild(bt);
return div;
}

 const bookstore=bookdata.map((i)=>(
Book(i)
))
const parent=document.getElementById("root");
for(b of bookstore){
parent.appendChild(b);

}


