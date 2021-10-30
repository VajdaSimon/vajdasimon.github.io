function menj(ide){
	vaszon.document.getElementById(ide).scrollIntoView({behavior: 'smooth' })
}

function tovabbiak() {
	if (document.getElementById("nyil").style.transform != 'rotate(180deg)') {
		document.getElementById("nyil").style.transform = 'rotate(180deg)';
		document.getElementById("elrejtett").style.display = "block"
	}
	else {
		document.getElementById("nyil").style.transform = 'rotate(0deg)'
		document.getElementById("elrejtett").style.display = "none"
	}
}

function nezet(mod) {
	if (mod == "ige" && document.getElementById("kereso").value == "Igekereső") {
		document.getElementById("dalKereses").style.display = "none";
		document.getElementById("igeKereses").style.display = "block";
		document.getElementById("szoveg").style.display = "none";
		document.getElementById("ige").style.display = "block";
		document.getElementById("kereso").value = "Dalkereső";
		document.getElementById("ujdal").style.display = "none";
		document.getElementById("szerkesztes").style.display = "none";
	}
	else if (mod == "ige" && document.getElementById("kereso").value == "Dalkereső") {
		document.getElementById("dalKereses").style.display = "block";
		document.getElementById("igeKereses").style.display = "none";
		document.getElementById("szoveg").style.display = "block";
		document.getElementById("ige").style.display = "none";
		document.getElementById("kereso").value = "Igekereső";
		document.getElementById("ujdal").style.display = "none";
		document.getElementById("szerkesztes").style.display = "none";
	}
	else if (mod == "ujdal") {
		document.getElementById("dalKereses").style.display = "block";
		document.getElementById("igeKereses").style.display = "none";
		document.getElementById("szoveg").style.display = "none";
		document.getElementById("ige").style.display = "none";
		document.getElementById("kereso").value = "Dalkereső";
		document.getElementById("ujdal").style.display = "block";
		document.getElementById("szerkesztes").style.display = "none";
	}
	else if (mod == "szerkesztes") {
		document.getElementById("dalKereses").style.display = "block";
		document.getElementById("igeKereses").style.display = "none";
		document.getElementById("szoveg").style.display = "none";
		document.getElementById("ige").style.display = "none";
		document.getElementById("kereso").value = "Dalkereső";
		document.getElementById("ujdal").style.display = "none";
		document.getElementById("szerkesztes").style.display = "block";
	}
	else {
		console.log("Hiba")
	}
}