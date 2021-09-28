document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '32') loves();
    if (e.keyCode == '38') felNyil();
    if (e.keyCode == '40') leNyil();
    if (e.keyCode == '37') balraNyil();
    if (e.keyCode == '39') jobbraNyil();
}

function felNyil() {
    fok = irany("tankTest") % 360
    fok = 180 - fok
    document.getElementById("tankTest").style.left = document.getElementById("tankTest").offsetLeft - Math.cos(Math.PI / 180 * fok) * 5 + "px";
    document.getElementById("tankTest").style.top = document.getElementById("tankTest").offsetTop + Math.sin(Math.PI / 180 * fok) * 5 + "px";
}

function leNyil() {
    fok = irany("tankTest") % 360
    fok = 180 - fok
    document.getElementById("tankTest").style.left = document.getElementById("tankTest").offsetLeft + Math.cos(Math.PI / 180 * fok) * 5 + "px";
    document.getElementById("tankTest").style.top = document.getElementById("tankTest").offsetTop - Math.sin(Math.PI / 180 * fok) * 5 + "px";
}

function jobbraNyil() {
    document.getElementById("tankTest").style.transform = "rotate(" + (irany("tankTest") + 5) + "deg)"
}

function balraNyil() {
    document.getElementById("tankTest").style.transform = "rotate(" + (irany("tankTest") - 5) + "deg)"
}

function irany(id) {
    helyzet = document.getElementById(id).style.transform
    helyzet = helyzet.slice(7)
    helyzet = helyzet.slice(0, -4)
    return parseInt(helyzet)
}

function loves() {
    document.getElementById("lovedek").style.transform = document.getElementById("tankTest").style.transform
    document.getElementById("lovedek").style.top = document.getElementById("tankTest").offsetTop + "px"
    document.getElementById("lovedek").style.left = document.getElementById("tankTest").offsetLeft + "px"
    document.getElementById("lovedek").style.display = "block"
    lovesAnimacio()
}

function lovesAnimacio() {
    ell();
    fok = irany("lovedek") % 360
    fok = 180 - fok
    document.getElementById("lovedek").style.left = document.getElementById("lovedek").offsetLeft - Math.cos(Math.PI / 180 * fok) * 5 + "px";
    document.getElementById("lovedek").style.top = document.getElementById("lovedek").offsetTop + Math.sin(Math.PI / 180 * fok) * 5 + "px";
    if (document.getElementById("lovedek").offsetLeft > 0 && document.getElementById("lovedek").offsetLeft < window.innerWidth && document.getElementById("lovedek").offsetTop > 0 && document.getElementById("lovedek").offsetTop < window.innerHeight) {
        setTimeout(lovesAnimacio, 20)
    }
    else {
        document.getElementById("lovedek").style.display = "none"
    }
}

function randomSzin() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

function randomSzam(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function akadalyElhelyezes() {
    document.getElementById("akadaly").style.width = randomSzam(20, 100) + "px"
    document.getElementById("akadaly").style.height = randomSzam(20, 100) + "px"
    document.getElementById("akadaly").style.top = randomSzam(20, window.innerHeight - 50) + "px"
    document.getElementById("akadaly").style.left = randomSzam(20, window.innerWidth - 50) + "px"
}

var pontok = 0;

function ell() {
    if (document.getElementById("akadaly").offsetLeft <= document.getElementById("lovedek").offsetLeft && 
        document.getElementById("akadaly").offsetLeft + document.getElementById("akadaly").offsetWidth >= document.getElementById("lovedek").offsetLeft &&
        document.getElementById("akadaly").offsetTop <= document.getElementById("lovedek").offsetTop && 
        document.getElementById("akadaly").offsetTop + document.getElementById("akadaly").offsetHeight >= document.getElementById("lovedek").offsetTop) {
            document.getElementById("lovedek").style.display = "none"
            akadalyElhelyezes()
            pontok++
            document.getElementById("pontok").innerHTML = "Pontok: " + pontok.toString();
    }
}