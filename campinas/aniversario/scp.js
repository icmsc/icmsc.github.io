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
	let sexo = names[i].sexo;
	let classe = names[i].classe;
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
			document.getElementById("sharedescription").innerHTML = sexo+'-'+classe;
		} else {
			let nomes = document.getElementById("shareNiverName").innerHTML +" e "+ nome.replace(/ .*/,'');
			document.getElementById("shareNiverName").innerHTML = nomes;
			let numeros = document.getElementById("sharenumber").innerHTML +" e "+ fone.replace(/ .*/,'');
			document.getElementById("sharenumber").innerHTML = numeros;
			let descricao = document.getElementById("sharedescription").innerHTML +" e "+ (sexo+'-'+classe).replace(/ .*/,'');
			document.getElementById("sharedescription").innerHTML = descricao;
		}
		
	}
}

function getCategory(description) {
	const categorias = {
		'FB': 'bebê',
		'MB': 'bebê',
		'FC': 'criança',
		'MC': 'criança',
		'FI': 'intermediário',
		'MI': 'intermediário',
		'FA': 'adolescente',
		'MA': 'adolescente',
		'FJ': 'jovem',
		'MJ': 'jovem',
		'FT': 'irmã',
		'MT': 'irmão',
		'D': 'diácono',
		'P': 'pastor',
	};
	let tipo = description.split("-");
	let sexo = tipo[0];
	let classe = tipo[1];
	let prefixo = "";
	if (classe == "D" || classe == "P") {
		return 'Nosso '+categorias[classe];
	} else {
		if (sexo == "F") {
			prefixo = "Nossa";
		} else if (sexo == "M") {
			prefixo = "Nosso";
		}
		return prefixo+' '+categorias[sexo+classe];
	}
}

function shareNiver() {
	let nome = document.getElementById("shareNiverName").innerHTML;
	let fone = document.getElementById("sharenumber").innerHTML;
	let descricao = document.getElementById("sharedescription").innerHTML;
	let nomes = nome.split(" e ");
	let fones = fone.split(" e ");
	let descricoes = descricao.split(" e ");
	if (nomes.length == 1) {
		if (fone != "") {
			window.open("https://api.whatsapp.com/send?text=A Paz do Senhor Jesus, irmãos!%0A%0A*Hoje temos 1 aniversariante!*%0A%0A"+getCategory(descricao)+" *"+nome+"* está completando mais um ano de vida.%0A%0AClique abaixo para dar os parabéns!%0Ahttps%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B55"+fone);
		} else {
			window.open("https://api.whatsapp.com/send?text=A Paz do Senhor Jesus, irmãos!%0A%0A*Hoje temos 1 aniversariante!*%0A%0A"+getCategory(descricao)+" *"+nome+"* está completando mais um ano de vida.%0A%0AClique abaixo para dar os parabéns!");
		}
	} else {
		let msgNiver = "https://api.whatsapp.com/send?text=A Paz do Senhor Jesus, irmãos!%0A%0A*Hoje temos "+nomes.length+" aniversariantes!*%0A%0A%0A";
		for (var i = 0; i < nomes.length; i++) {
			if (fones[i] != "") {
				msgNiver += getCategory(descricoes[i])+" *"+nomes[i]+"* está completando mais um ano de vida.%0AClique abaixo para dar os parabéns!%0Ahttps%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B55"+fones[i];
			} else {
				msgNiver += getCategory(descricoes[i])+" *"+nomes[i]+"* está completando mais um ano de vida.%0ASegue contato para quem desejar dar os parabéns!";
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