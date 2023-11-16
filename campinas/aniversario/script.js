// arrays
const semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function numberChars(num) {
	return num.toString().padStart(2, '0')
}

const htmlContent = document.querySelector("#content");

for (var i = 0; i < meses.length; i++) {
	htmlContent.insertAdjacentHTML('beforeend', '<div class="monthbox" id="month'+numberChars(i+1).toString()+'"> <div class="month">'+meses[i]+'</div> <div id="daybox'+numberChars(i+1).toString()+'"> </div> </div>');
}

const datahoje = new Date();

for (var i = 0; i < names.length; i++) {
	let mes = names[i].mes;
	let dia = names[i].dia;
	let nome = names[i].nome;
	let fone = names[i].fone ? names[i].fone : "";
	let diaAnalise = names[i].dia;
	if (names[i].dia[0] == "0") { diaAnalise = names[i].dia.slice(1); }
	let mesAnalise = names[i].mes;
	if (names[i].mes[0] == "0") { mesAnalise = names[i].mes.slice(1); }
	let todayClass = "";
	if (diaAnalise == datahoje.getDate() && mesAnalise == datahoje.getMonth()+1) { todayClass = "today"; }
	let htmlDay = document.querySelector("#daybox"+mes);
	if (fone && fone!="") {
		htmlDay.insertAdjacentHTML('beforeend', '<div class="day '+todayClass+'" data-name="'+nome.replace(/ .*/,'')+'" data-fone="'+fone+'"> <div class="daynumber">'+dia+'/'+mes+'</div> <div class="dayname">'+nome.toUpperCase()+'</div> <div class="dayphoneicon">&#128222;</div> </div>');
	} else {
		htmlDay.insertAdjacentHTML('beforeend', '<div class="day '+todayClass+'" data-name="'+nome.replace(/ .*/,'')+'"> <div class="daynumber">'+dia+'/'+mes+'</div> <div class="dayname">'+nome.toUpperCase()+'</div> </div>');
	}
	if (dia == datahoje.getDate() && mes == (datahoje.getMonth()+1)) {
		if (document.getElementById("shareNiverName").innerHTML == "") {
			document.getElementById("shareNiverName").innerHTML = nome.replace(/ .*/,'');
			document.getElementById("sharenumber").innerHTML = fone;
		} else {
			let nomes = document.getElementById("shareNiverName").innerHTML +" e "+ nome.replace(/ .*/,'');
			document.getElementById("shareNiverName").innerHTML = nomes;
			let numeros = document.getElementById("sharenumber").innerHTML +" e "+ fone.replace(/ .*/,'');
			document.getElementById("sharenumber").innerHTML = numeros;
		}
		
	}
}

function shareNiver() {
	let nome = document.getElementById("shareNiverName").innerHTML;
	let fone = document.getElementById("sharenumber").innerHTML;
	let nomes = nome.split(" e ");
	let fones = fone.split(" e ");
	if (nomes.length == 1) {
		if (fone != "") {
			window.open("https://api.whatsapp.com/send?text=A Paz do Senhor Jesus, irmãos!%0A%0AHoje nosso(a) irmão(ã) *"+nome+"* está completando mais um ano de vida.%0A%0AClique abaixo para dar os parabéns!%0Ahttps%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B55"+fone);
		} else {
			window.open("https://api.whatsapp.com/send?text=A Paz do Senhor Jesus, irmãos!%0A%0AHoje nosso(a) irmão(ã) *"+nome+"* está completando mais um ano de vida.%0A%0ASegue contato para quem desejar dar os parabéns!");
		}
	} else {
		let msgNiver = "https://api.whatsapp.com/send?text=A Paz do Senhor Jesus, irmãos!%0A%0A*Hoje temos "+nomes.length+" aniversariantes!*%0A%0A%0A";
		for (var i = 0; i < nomes.length; i++) {
			if (fones[i] != "") {
				msgNiver += "Nosso(a) irmão(ã) *"+nomes[i]+"* está completando mais um ano de vida.%0AClique abaixo para dar os parabéns!%0Ahttps%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B55"+fones[i];
			} else {
				msgNiver += "Nosso(a) irmão(ã) *"+nomes[i]+"* está completando mais um ano de vida.%0ASegue contato para quem desejar dar os parabéns!";
			}
			if (i < nomes.length-1) { msgNiver += "%0A%0A%0A"; }
		}
		window.open(msgNiver);
	}
}

function checkExistNiver() {
	if (document.getElementById("shareNiverName").innerHTML == "") {
		document.getElementById("share").style.display = "none";
	}
}
checkExistNiver()