let store = document.getElementById("store");
let pc = document.getElementById("pc");
let consol = document.getElementById("console");
let mobile = document.getElementById("mobile");
let furniture =document.getElementById("furniture");
let gold = document.getElementById("gold");
let comunity = document.getElementById("comunity");
let support =document.getElementById("support");
let submenu = document.getElementById("sub");
let textvie = document.getElementById("text");
let handler = document.getElementById("handler");
let menu = document.getElementById("menu");
function click(local){
 
    submenu.style.height='400px';


}

function setheight(){


}
function changeheight(){
        submenu.style.height='0px';

}
handler.addEventListener("mouseenter",function(event){
    setheight();
})
menu.addEventListener("mouseleave",function(event){
changeheight()})
store.addEventListener('mouseenter',function(event){
    click(store)
})
pc.addEventListener('mouseenter',function(event){
    click(pc)
})
consol.addEventListener('mouseenter',function(event){
    click(consol)
})
mobile.addEventListener('mouseenter',function(event){
    click(mobile)
})
furniture.addEventListener('mouseenter',function(event){
    click(furniture)
})
gold.addEventListener('mouseenter',function(event){
    click(gold)
})
comunity.addEventListener('mouseenter',function(event){
    click(comunity)
})
support.addEventListener('mouseenter',function(event){
    click(support)
})

function reportWindowSize() {
    console.log(window.innerWidth);
}

window.onresize = reportWindowSize;