
// function switchOn() {
//     let body = document.getElementById("body");
//     let card = document.querySelector(".card");
//     let bulb = document.querySelector(".w-100");
//     let text = document.querySelector(".text-center");

// const { event } = require("jquery");

//     body.style.background = "white";
//     card.style.background = "white";
//     bulb.src = "../assets/img/on.jpg";
//     text.style.color = "black";
//     text.textContent = "Bulb ON"
// }

// function switchOff() {
//     let body = document.getElementById("body");
//     let card = document.querySelector(".card");
//     let bulb = document.querySelector(".w-100");
//     let text = document.querySelector(".text-center");

//     body.style.background = "black";
//     card.style.background = "black";
//     bulb.src = "../assets/img/off.jpg";
//     text.style.color = "white";
//     text.textContent = "Bulb Off";

// }







function yoqibochrish() {
    let bulb = document.querySelector(".w-100");

    if(bulb.src.match("./assets/img/on.jpg")){
        bulb.src = "./assets/img/off.jpg";
    }else{
        bulb.src = "./assets/img/on.jpg"
    }
}



// let sigara = prompt("bizda qancha sigara bor");

// sigara = Number(sigara);

// if (sigara <= 39){
//     alert("mufoqatsizlik");
// } else{
//     alert("bizda yetarlik")
// }