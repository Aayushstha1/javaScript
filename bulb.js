const bulbSwitch = document.querySelector("#bulbswitch");
const bulb = document.querySelector("#bulb");
bulbSwitch.addEventListener("click",function () {
console.log(bulb.src)
if(bulb.src.match("off")){
    bulb.src = "./on.jpg"
}else{
    bulb.src = "./OFF.jpg"
    bulbSwitch.innerHTML= "Trun off"
}
})