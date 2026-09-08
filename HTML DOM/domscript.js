function addParagraph() {
    const para = document.createElement("p");
    para.innerHTML = "<u>This is a new paragraph added to the document.</u>";
    para.style.color = "blue";
    const parent=document.getElementById("para");
    parent.appendChild(para);
    
}

function removeParagraph() {
    const parent=document.getElementById("para");
    const child=document.querySelector("p");
     parent.removeChild(child);

}

function removeAllParagraph() {
    const parent=document.getElementById("para");
    const child=document.querySelectorAll("p");
    for (let i of child) {
        parent.removeChild(i);
    }
}

