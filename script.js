const Table = document.getElementById("Table")
const two_hundred = document.getElementById("two_hundred")
const five_hundred = document.getElementById("five_hundred")

const one = document.getElementById("one")
const ten = document.getElementById("ten")
const twenty = document.getElementById("twenty")

const greenyellow = document.getElementById("greenyellow")
const blue = document.getElementById("blue")
const purple = document.getElementById("purple")
const blanchedalmond = document.getElementById("blanchedalmond")

const reset = document.getElementById("reset")

const prve = document.getElementById("prve")
const next = document.getElementById("next")
const number = document.getElementById("number");
const Img = document.getElementById("Img");
const imges = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]

two_hundred.addEventListener("click", ()=>{
    Table.style.width = "200px"
})
five_hundred.addEventListener("click", ()=>{
    Table.style.width = "500px"
})

one.addEventListener("click", ()=>{
    Table.style.padding = "1px"
    Table.style.borderSpacing = "1px";
})
ten.addEventListener("click", ()=>{
    Table.style.padding = "10px"
    Table.style.borderSpacing = "10px";
})
twenty.addEventListener("click", ()=>{
    Table.style.padding = "20px"
    Table.style.borderSpacing = "20px";
})

greenyellow.addEventListener("click", ()=>{
    Table.style.backgroundColor = "greenyellow"
})
blue.addEventListener("click", ()=>{
    Table.style.backgroundColor = "blue"
})
purple.addEventListener("click", ()=>{
    Table.style.backgroundColor = "purple"
})
blanchedalmond.addEventListener("click", ()=>{
    Table.style.backgroundColor = "blanchedalmond"
})

reset.addEventListener("click", ()=>{
    Table.removeAttribute("style")
})


let picture = 0;

prve.addEventListener("click", ()=>{
    if (picture == 0) {
        picture = 4;
    }else{
        picture -= 1;
    }
        number.textContent = `Image ${picture + 1} of 5`;
        Img.src = imges[picture]
})
next.addEventListener("click", ()=>{
    if (picture == 4) {
        picture = 0;
    }else{
        picture += 1;
    }
        number.textContent = `Image ${picture +1} of 5`;
        Img.src = imges[picture]
})