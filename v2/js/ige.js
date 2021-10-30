var regiVaszonra = "asd"
elozo = "ige1"
const szovegIge = [];
const vaszonra = [];
var mostIge = "asd"

function vaszonraKiir(sor) {
	if (vaszon == undefined) {
		vaszonLetrehoz();
	}
	document.getElementById(elozo).style.backgroundColor = "white";
	document.getElementById(sor).style.backgroundColor = "lightblue";
	elozo = sor;
	if (mostIge != document.getElementById("ihely_kiir").innerHTML) {
		mostIge = document.getElementById("ihely_kiir").innerHTML
		vaszon.document.body.innerHTML = "";
		//vaszon.document.write("<ige style='position:fixed; top:0px;width:100%;background-color:black;height:auto;z-index: 100;'>" + document.getElementById("igehely").innerText + "</ige>");
		for (let $i = 0; $i < vaszonra.length; $i++) {
			vaszon.document.write(vaszonra[$i].replace("<br>", "") + "<br>");
		}
		vaszon.document.body.innerHTML = vaszon.document.body.innerHTML + "<div id='vege' style='width:20px; height:" + vaszon.innerHeight + "'></div>";
	}
	vaszon.document.body.style.fontSize = "5vw"
	menj(sor)
}

let konyvek

function vizsgald() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://szentiras.hu/api/books/RUF", true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			konyvek = JSON.parse(this.responseText);
			
			for (let book = 0; book < konyvek.books.length; book++) {
				ige = document.getElementById("igeText").value.toLowerCase().trim().replaceAll(/\s/g,'');
				keresd = konyvek.books[book].abbrev.toLowerCase()
				if (ige.search(keresd) != -1) {
					for (let i = 0; i <= ige.length; i++) {
						if (ige.endsWith(keresd, i) == true) {
							var konyv = ige.slice(0, i)
						}
					}
					ige = ige.split(keresd)
					if (ige[1] == "") {
						ige[1] = "1,1-"
					}
					if (ige[1].search(",") == -1) {
						ige[1] = ige[1] + ",1-180"
					}
					ige = ige[1].split(",")
					resz = ige[0]
					if (ige[1].search("-") == -1) {
						verstol = ige[1]
						versig = ige[1]
					}
					else { 
						ige = ige[1].split("-")
						verstol = ige[0]
						versig = ige[1]
					}
					hiba = 0;
					
					if (versig == 0) {
						versig = 180;
					}
					
					xhttp.open("GET", "https://szentiras.hu/api/idezet/" + konyv + "," + resz + "," + verstol + "-" + versig + "/" + "RUF", true);
					xhttp.send();

					xhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							$idezet = JSON.parse(this.responseText);
							document.getElementById("ihely_kiir").innerHTML = "";
							for (let $i = 1; $i < $idezet["valasz"]["versek"].length; $i++) {
								a =  $idezet["valasz"]["versek"][$i]["hely"]["szep"].split(",");
							}
							//document.getElementById("igehely").innerHTML = "<ige>" + konyv.charAt(0).toUpperCase() + konyv.slice(1) + " " + resz + "," + verstol + "-" + a[1] + "</ige>\n";
							for (let $i = 0; $i < $idezet["valasz"]["versek"].length; $i++) {
								szovegIge[$i] = "<ige id='ige" + $i + "' onclick=\"vaszonraKiir('ige" + $i + "')\">" + (parseInt($i)+parseInt(verstol)) + " " + $idezet["valasz"]["versek"][$i]["szoveg"] + "</ige>\n"; 
								vaszonra[$i] = "<ige id='ige" + $i + "'>" + (parseInt($i)+parseInt(verstol)) + " " + $idezet["valasz"]["versek"][$i]["szoveg"] + "</ige>\n";
							}
							for (let $i = 0; $i < $idezet["valasz"]["versek"].length; $i++) {
								document.getElementById("ihely_kiir").innerHTML = document.getElementById("ihely_kiir").innerHTML + szovegIge[$i].replace("<br>", "") + "<br>";
							}
						}
					};
					
					regiSzoveg = "asd"
					break
				}
			}
		}
	};
}

function datalistLetrehoz() {
	document.getElementById("igeKereses").innerHTML += "<datalist id='konyvekRovidtitese'>"
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://szentiras.hu/api/books/RUF", true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			konyvek = JSON.parse(this.responseText);
			
			for (let book = 0; book < konyvek.books.length; book++) {
				document.getElementById("konyvekRovidtitese").innerHTML = document.getElementById("konyvekRovidtitese").innerHTML + "<option value='" + konyvek.books[book].abbrev + "'>"
			}
		}
	};
	document.getElementById("igeKereses").innerHTML += "</datalist>"
}
setTimeout(datalistLetrehoz, 100)