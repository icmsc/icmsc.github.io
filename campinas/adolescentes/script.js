function data90DiasAposHoje() {
	const hoje = new Date();
	const data90DiasDepois = new Date();
	data90DiasDepois.setDate(hoje.getDate() + 90);
	const dia = data90DiasDepois.getDate();
	const mes = data90DiasDepois.getMonth() + 1;
	const ano = data90DiasDepois.getFullYear();
	const dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
	return dataFormatada;
}

function calcularDiferencaDias(dataInicial, dataFinal) {
	const dataInicialParts = dataInicial.split('/');
	const dataFinalParts = dataFinal.split('/');
	const dataInicialObj = new Date(dataInicialParts[2], dataInicialParts[1] - 1, dataInicialParts[0]);
	const dataFinalObj = new Date(dataFinalParts[2], dataFinalParts[1] - 1, dataFinalParts[0]);
	const diferencaMilissegundos = dataFinalObj - dataInicialObj;
	const diferencaDias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));
	return diferencaDias;
}

function calcularProximoDiaDeGrupo(dataBase, grupoAtual) {
	const proximoDia = new Date(dataBase);
	let diasParaAdicionar = 1;
	while (true) {
		proximoDia.setDate(proximoDia.getDate() + diasParaAdicionar);
		if (diasDaSemana.includes(proximoDia.getDay())) {
			return { data: proximoDia, grupo: grupos[(grupoAtual + 1) % grupos.length] };
		}
	}
}

function listarProximosTresMeses() {
	const result = [];
	let dataAtual = dataBase;
	let grupoAtual = grupoBase;
	// for (let i = 0; i < 90; i++) {
	for (let i = 0; i < calcularDiferencaDias(dataBaseString, data90DiasAposHoje()); i++) {
		const proximoDiaDeGrupo = calcularProximoDiaDeGrupo(dataAtual, grupoAtual);
		result.push({
			data: proximoDiaDeGrupo.data.toLocaleDateString(),
			diaDaSemana: proximoDiaDeGrupo.data.getDay(),
			grupoResponsavel: proximoDiaDeGrupo.grupo,
		});
		dataAtual = proximoDiaDeGrupo.data;
		grupoAtual = (grupoAtual + 1) % grupos.length;
	}
	return result;
}

function obterMesesProximos() {
	const dataAtual = new Date();
	let meses = [];
	for (let i = 0; i < 2; i++) {
		var ano = dataAtual.getFullYear();
		var mes = dataAtual.getMonth() + i;
		if (mes >= 12) {
			ano++;
			mes -= 12;
		}
		meses.push({ mes: mes + 1, ano });
	}
	return meses;
}

function dataEstaNoArray(data, arrayDeMeses) {
	const partesDaData = data.split("/");
	const dia = parseInt(partesDaData[0]);
	const mes = parseInt(partesDaData[1]);
	const ano = parseInt(partesDaData[2]);
	for (const item of arrayDeMeses) {
		if (ano === item.ano && mes === item.mes) {
			return true;
		}
	}
	return false;
}

function dataEhHojeOuAmanha(dataString) {
	const partesData = dataString.split('/');
	if (partesData.length !== 3) {
		return false;
	}
	const dia = parseInt(partesData[0], 10);
	const mes = parseInt(partesData[1] - 1, 10);
	const ano = parseInt(partesData[2], 10);
	const dataFornecida = new Date(ano, mes, dia);
	const hoje = new Date();
	const amanha = new Date();
	amanha.setDate(amanha.getDate() + 1);
	if (dataFornecida.toDateString() === hoje.toDateString()) {
		return 'today';
	} else if (dataFornecida.toDateString() === amanha.toDateString()) {
		return 'tomorrow';
	} else {
		return '';
	}
}

function extrairMesAno(dataString) {
	const partesData = dataString.split('/');
	if (partesData.length !== 3) return null;
	const [dia, mes, ano] = partesData.map(Number);
	if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return null;
	return `${String(mes).padStart(2, '0')}/${ano}`;
}

function extrairDiaMes(dataString) {
	const partesData = dataString.split('/');
	if (partesData.length !== 3) return null;
	const [dia, mes] = partesData.slice(0, 2).map(Number);
	if (isNaN(dia) || isNaN(mes)) return null;
	return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}`;
}

function extrairAno(dataString) {
	const ano = parseInt(dataString.split('/')[2], 10);
	return isNaN(ano) ? null : ano;
}

function extrairNomeDoMes(dataString, meses) {
	const partesData = dataString.split('/');
	if (partesData.length !== 3) return null;
	const mes = parseInt(partesData[1], 10);
	if (isNaN(mes) || mes < 1 || mes > 12) return null;
	return meses[mes - 1];
}

const semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const dataBase = new Date(2025, 11, 28); // yyyy, mm (real -1), dd
const dataBaseString = "28/12/2025"; // dd/mm/yyyy
const grupoBase = 2;
const diasDaSemana = [0];
const grupos = ["Cristiane", "Elenice", "Jacqueline"];

const listaDeGrupo = listarProximosTresMeses();
const mesesProximos = obterMesesProximos();

const element = document.querySelector("#group");
var mesImpressao = null;

for (var i = 0; i < listaDeGrupo.length; i++) {
	if (dataEstaNoArray(listaDeGrupo[i].data, mesesProximos)) {
		if (mesImpressao == null || mesImpressao != extrairMesAno(listaDeGrupo[i].data)) {
			element.insertAdjacentHTML('beforeend', '<div class="month">'+extrairNomeDoMes(listaDeGrupo[i].data, meses)+' '+extrairAno(listaDeGrupo[i].data)+'</div>');
			mesImpressao = extrairMesAno(listaDeGrupo[i].data);
		}
		element.insertAdjacentHTML('beforeend', '<div class="days '+dataEhHojeOuAmanha(listaDeGrupo[i].data)+'"> <div class="daysitem daynumber">'+extrairDiaMes(listaDeGrupo[i].data)+' - '+semana[listaDeGrupo[i].diaDaSemana]+'</div> <div class="daysitem daygroup">'+listaDeGrupo[i].grupoResponsavel+'</div> </div>');
	}
}
