var biblia = biblia_acf;

const livrosQuantidade = biblia.length;

const livrosChaves = {"gn": 0, "ex": 1, "lv": 2, "nm": 3, "dt": 4, "js": 5, "jz": 6, "rt": 7, "1sm": 8, "2sm": 9, "1rs": 10, "2rs": 11, "1cr": 12, "2cr": 13, "ed": 14, "ne": 15, "et": 16, "jó": 17, "sl": 18, "pv": 19, "ec": 20, "ct": 21, "is": 22, "jr": 23, "lm": 24, "ez": 25, "dn": 26, "os": 27, "jl": 28, "am": 29, "ob": 30, "jn": 31, "mq": 32, "na": 33, "hc": 34, "sf": 35, "ag": 36, "zc": 37, "ml": 38, "mt": 39, "mc": 40, "lc": 41, "jo": 42, "atos": 43, "rm": 44, "1co": 45, "2co": 46, "gl": 47, "ef": 48, "fp": 49, "cl": 50, "1ts": 51, "2ts": 52, "1tm": 53, "2tm": 54, "tt": 55, "fm": 56, "hb": 57, "tg": 58, "1pe": 59, "2pe": 60, "1jo": 61, "2jo": 62, "3jo": 63, "jd": 64, "ap": 65};

function infoLeitura(livro,capitulo) {
	$("#bi_livrocapitulo").text(livro+" "+capitulo);
}

function readCapitulos(livro) {
	$("#bi_capitulos").empty();
	$("#bi_capitulo_texto").empty();
	for (var i = 0; i < biblia[livro]['chapters'].length; i++) {
		$("#bi_capitulos").append('<option value="'+i+'">'+(i+1)+'</option>');
	}
	readVersiculos(livro,0);
	infoLeitura(biblia[livro]['name'], 1);
}

function readVersiculos(livro,capitulo) {
	$("#bi_capitulo_texto").empty();
	for (var i = 0; i < biblia[livro]['chapters'][capitulo].length; i++) {
		$("#bi_capitulo_texto").append('<div class="bi_versiculo"><span class="bi_versiculo_numero">'+(i+1)+'</span> '+biblia[livro]['chapters'][capitulo][i]+'</div>');
	}
	infoLeitura(biblia[livro]['name'], parseInt(capitulo)+1);
}

$(document).ready(function(){
	readCapitulos(livrosChaves["gn"]);
});

$("#bi_livros").change(function(){
	readCapitulos(livrosChaves[$(this).val()]);
});

$("#bi_capitulos").on("change",function(){
	readVersiculos(livrosChaves[$("#bi_livros").val()],$(this).val());
});

$("#bi_versoes").on("change", function(){
	if ($(this).val() == "aa") {
		biblia = biblia_aa;
	}
	if ($(this).val() == "acf") {
		biblia = biblia_acf;
	}
	if ($(this).val() == "nvi") {
		biblia = biblia_nvi;
	}

	let livroSelecionado = $("#bi_livros").val();

	let capituloSelecionado = $("#bi_capitulos").val();

	if (livroSelecionado in livrosChaves) {
		readCapitulos(livrosChaves[livroSelecionado]);
		readVersiculos(livrosChaves[livroSelecionado], capituloSelecionado);
		$("#bi_capitulos").val(capituloSelecionado);
	}
});

$("#bi_capitulo_texto").on("click", ".bi_versiculo", function(){
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
	} else {
		$(this).addClass("selected");
	}
	copiarVersiculosSelecionados();
});

function copiarVersiculosSelecionados() {
	let conteudo = '';
	$(".bi_versiculo.selected").each(function() {
		conteudo += $(this).text() + '\n';
	});
	if ($(".bi_versiculo.selected").length > 0) {
		conteudo += '\n' + $("#bi_livrocapitulo").text();
	}
	if (conteudo) {
		let tempInput = $("<textarea>");
		$("body").append(tempInput);
		tempInput.val(conteudo).select();
		document.execCommand("copy");
		tempInput.remove();
	}
}
