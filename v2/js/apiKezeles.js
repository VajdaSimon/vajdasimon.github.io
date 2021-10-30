var i = 0;
function kereses()  {
	document.getElementById("talalatok").innerHTML = "";
	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "api.php?kereses=" + document.getElementById('kereses').value, true);
	xhttp.send();
	
	szam = 0;
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$idezet = JSON.parse(this.responseText);
			const talalatok= Object.getOwnPropertyNames($idezet.talalat);
			for (let $i = 0; $i < talalatok.length - 1; $i++) {
				if (szam % 2) {
					document.getElementById("talalatok").innerHTML +=  "<talalat onclick=\"dalKiir('" + $idezet.talalat[$i].id + "')\">" + $idezet.talalat[$i].cim + "</talalat><br>\n";
				}
				else {
					document.getElementById("talalatok").innerHTML +=  "<talalat style=\"background-color:b3b3b3;;\" onclick=\"dalKiir('" + $idezet.talalat[$i].id + "')\">" + $idezet.talalat[$i].cim + "</talalat><br>\n";
				}
				szam++;
			}
		}
	};
}

function dalKiir(id) {
	document.getElementById("szoveg").innerHTML = "";
	var xhttp = new XMLHttpRequest();

	xhttp.open("GET", "api.php?dal=" + id, true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$dal = JSON.parse(this.responseText);
			szoveg =  $dal.szoveg;					
			szoveg = szoveg.split("\n");
			
			document.getElementById("szoveg").innerHTML = document.getElementById("szoveg").innerHTML + "<b>" + $dal.cim + "</b><br><br>";
			
			for (i = 0; i <= szoveg.length - 1; i++) {
				if (szoveg[i] == "") {
					document.getElementById("szoveg").innerHTML = document.getElementById("szoveg").innerHTML + "<div class='ures' onclick=ugras(\"sor" + i + "\") id=\"sor" + i + "\" style='width:300px; height: 25px;'></div>";
				}
				else {
					document.getElementById("szoveg").innerHTML = document.getElementById("szoveg").innerHTML + "<span id=\"sor" + i + "\" onclick=ugras(\"sor" + i + "\") style='white-space:nowrap;'>" + szoveg[i] + "</span><br>"
				}
			}
			document.getElementById("szerkesztes").src = "szerkesztes.php?dal=" + $dal.id
		}
	};
}

dalKiir("utolso")