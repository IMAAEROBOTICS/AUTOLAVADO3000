let yellowBtn = document.getElementById("yellow");
let blackBtn = document.getElementById("black");
let blueBtn = document.getElementById("blue");
let grayBtn = document.getElementById("gray");
let imgchange = document.getElementById("imgchange");

yellowBtn.onclick = function() {

    imgchange.src = "./image/JABON.PNG";
}

blackBtn.onclick = function() {
    imgchange.src = "./image/CEPILLO.PNG";
}

blueBtn.onclick = function() {
    imgchange.src = "./image/ENJUAGE.PNG";
}

grayBtn.onclick = function() {
    imgchange.src = "./image/SECADO.PNG";
}

