var meret = 10;
var leghosszabbsorMeret = 0;
var leghosszabbsor = 0;
var eddig = 0;
var maxsor = 1;
var ittjar = 0;
var eredeti = 0;
var vaszon
var regiSzoveg = "asd"
var regiMeretY = 0
var regiMeretX = 0

function myFunction() {
	meret = 10;
	leghosszabbsorMeret = 0;
	leghosszabbsor = 0;
	
	if (vaszon == undefined) {
		vaszonLetrehoz();
	}
	
	if (regiSzoveg != szoveg || regiMeretY != vaszon.innerHeight || regiMeretX != vaszon.innerWidth) {
		regiMeretY = vaszon.innerHeight
		regiMeretX = vaszon.innerWidth
		regiSzoveg = szoveg
		vaszon.document.body.innerHTML = "";
		for (i = 0; i < szoveg.length; i++) {
			if (szoveg[i] == "") {
				vaszon.document.write("<div id=\"sor" + i + "\" style='width:20px'></div>");
			}
			else {
				vaszon.document.write("<span id=\"sor" + i + "\" style='white-space:nowrap;'>" + szoveg[i] + "</span><br>");
			}
		}

		for (i = 0; i <= szoveg.length - 1; i++) {
			if (vaszon.document.getElementById('sor' + i).offsetWidth > leghosszabbsorMeret) {
				leghosszabbsor = "sor" + i;
				leghosszabbsorMeret = vaszon.document.getElementById('sor' + i).offsetWidth;
			}
		}
		while (vaszon.document.getElementById(leghosszabbsor).offsetWidth < vaszon.innerWidth) {
			meret++;
			vaszon.document.getElementById(leghosszabbsor).style.fontSize = meret + "px";
		}
		meret -= 1.3

		for (i = 0; i <= szoveg.length - 1; i++) {
			vaszon.document.getElementById('sor' + i).style.fontSize = meret + "px";
		}
		for (i = 0; i <= szoveg.length - 1; i++) {
			vaszon.document.getElementById('sor' + i).style.height = vaszon.document.getElementById(leghosszabbsor).offsetHeight;
		}
		vaszon.document.body.innerHTML = vaszon.document.body.innerHTML + "<div id='vege' style='width:20px; height:" + vaszon.innerHeight + "'></div>"

		maxsor = vaszon.innerHeight / vaszon.document.getElementById(leghosszabbsor).offsetHeight
		if ((maxsor % 1) > 0.9) {
			maxsor = Math.round(maxsor);
		}
		else{
			maxsor = Math.floor(maxsor);
		}
	}
}

function ugras(ide) {
	myFunction()
	menj(ide);

	jelezd(ide.slice(3))
}

function jelezd(innentol) {
	ittjar = innentol;
	for (i = 0; i < szoveg.length; i++) {
		document.getElementById('sor' + i).style.backgroundColor = "white"
	}

	for (i = 0; i < maxsor; i++) {
		a = parseInt(i) + parseInt(innentol)
		if (szoveg.length > a) {
			document.getElementById('sor' + a).style.backgroundColor = "lightblue"
		}
	}
}

function lefele(){
	if (ittjar + 1 != szoveg.length) {
		for (let i = 0; i < szoveg.length; i++) {
			document.getElementById("sor" + i).style.backgroundColor = "white";
		}
		ittjar++;
		for (let i = ittjar; i < ittjar + maxsor; i++) {
			if (i < szoveg.length) {
				document.getElementById("sor" + i).style.backgroundColor = "lightblue";
			}
		}
		menj('sor' + ittjar)
	}
}

function felfele(){
	if (ittjar - 1 != -1) {
		for (let i = 0; i <	szoveg.length; i++) {
			document.getElementById("sor" + i).style.backgroundColor = "white";
		}
		ittjar--;
		for (let i = ittjar; i < ittjar + maxsor; i++) {
			if (i < szoveg.length) {
				document.getElementById("sor" + i).style.backgroundColor = "lightblue";
			}
		}
		menj('sor' + ittjar)
	}
}

/* function eredetiHely() {
	for (let i = 0; i < szoveg.length; i++) {
		document.getElementById("sor" + i).style.backgroundColor = "white";
	}
	ittjar = eredeti;
	for (let i = eredeti; i < eredeti + maxsor; i++) {
		if (i < eredeti + maxsor) {
			document.getElementById("sor" + i).style.backgroundColor = "lightblue";
		}
	}
}

function vaszonra() {
	eredeti = ittjar
	ugras("sor" + ittjar);
} */


function sotetites() {
	window.open("", "MsgWindow", "width=700,height=300");
	vaszon.document.getElementById('vege').scrollIntoView(true)
}

function vaszonLetrehoz() {
	vaszon = window.open("", "MsgWindow", "width=700,height=300");	
	setTimeout(vaszonBeallit, 25)
}

function vaszonBeallit() {
	vaszon.document.body.style.color = "white";
	vaszon.document.body.style.backgroundColor = "black";
	vaszon.document.body.style.overflow = "hidden";
	vaszon.document.body.style.userSelect = "none";
	vaszon.document.body.style.cursor = "none";
}

function versszakLe() {
	if (ittjar + 1 != szoveg.length) {
		for (let i = 0; i < szoveg.length; i++) {
			document.getElementById("sor" + i).style.backgroundColor = "white";
		}
		
		for (let i = ittjar; i < szoveg.length; i++) {
			if (document.getElementById("sor" + i).innerText == "") {
				ittjar = i + 1
				break
			}
		}
		
		for (let i = ittjar; i < ittjar + maxsor; i++) {
			if (i < szoveg.length) {
				document.getElementById("sor" + i).style.backgroundColor = "lightblue";
			}
		}
		menj('sor' + ittjar)
	}
}

function versszakFel() {
	if (ittjar + 1 != szoveg.length) {
		for (let i = 0; i < szoveg.length; i++) {
			document.getElementById("sor" + i).style.backgroundColor = "white";
		}
		
		siker = 0
		
		for (let i = ittjar - 2; i > 0; i--) {
			if (document.getElementById("sor" + i).innerText == "") {
				ittjar = i + 1
				siker = 1
				break
			}
		}
		
		if (siker == 0) {
			ittjar = 0
		}
		
		for (let i = ittjar; i < ittjar + maxsor; i++) {
			if (i < szoveg.length) {
				document.getElementById("sor" + i).style.backgroundColor = "lightblue";
			}
		}
		menj('sor' + ittjar)
	}
}