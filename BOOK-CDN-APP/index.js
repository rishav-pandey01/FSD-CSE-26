function Book(){
    const image=React.createElement("img",{src:"",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{color:"red"},"Title: ReactJS");
    const price=React.createElement("h2",{color:"Green"},"Price:465/-");
    const btn=React.createElement("button",{color:"blue"},"Add to Cart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(Book());
