const names = [
	{"mes":"01", "dia":"04", "sexo":"M", "classe":"B", "nome":"JOAQUIM HECK PSCHEIDT", "fone":"48999161995"},
	{"mes":"01", "dia":"10", "sexo":"M", "classe":"C", "nome":"LORENZO SANTOS", "fone":"48998044074"},
	{"mes":"01", "dia":"17", "sexo":"F", "classe":"T", "nome":"KAYT LINN CRUZ SANTOS", "fone":"48984638270"},
	{"mes":"01", "dia":"17", "sexo":"F", "classe":"T", "nome":"SUELI TEREZINHA NAZARIO", "fone":"48999625563"},
	{"mes":"01", "dia":"19", "sexo":"F", "classe":"T", "nome":"ELENICE CRISTIANI HINGHAUS PSCHEIDT", "fone":"48999136842"},
	{"mes":"01", "dia":"20", "sexo":"F", "classe":"T", "nome":"DANIELLE ABRAHÃO BARROS DA SILVA", "fone":"48999515459"},
	{"mes":"01", "dia":"22", "sexo":"F", "classe":"J", "nome":"ISABELA ESCOBAR CORRÊA", "fone":"48998082718"},
	{"mes":"01", "dia":"22", "sexo":"F", "classe":"T", "nome":"ELIZIANA DA SILVA PEREIRA LENTZ", "fone":"48999120724"},
	{"mes":"01", "dia":"25", "sexo":"F", "classe":"T", "nome":"VALDIMARA DOS SANTOS", "fone":"48991666885"},
	{"mes":"01", "dia":"27", "sexo":"M", "classe":"A", "nome":"DANIEL DOS SANTOS PEREIRA", "fone":"48991278507"},
	{"mes":"01", "dia":"28", "sexo":"M", "classe":"I", "nome":"PEDRO DE AQUINO SILVEIRA", "fone":""},
	{"mes":"01", "dia":"31", "sexo":"M", "classe":"T", "nome":"RICARDO LENTZ", "fone":"48984076616"},

	{"mes":"02", "dia":"03", "sexo":"M", "classe":"I", "nome":"DAVI DA ROSA", "fone":"48998436192"},
	{"mes":"02", "dia":"03", "sexo":"F", "classe":"T", "nome":"THAÍS DA SILVA BUENO DE CAMARGO", "fone":"48991599492"},
	{"mes":"02", "dia":"03", "sexo":"M", "classe":"J", "nome":"ZANDONAITY SOARES TEIXEIRA DE ASSIS", "fone":"48996860801"},
	{"mes":"02", "dia":"11", "sexo":"F", "classe":"I", "nome":"SOFIA LOPES GARCIA", "fone":"27995832694"},
	{"mes":"02", "dia":"13", "sexo":"F", "classe":"A", "nome":"SOFIA ESPÍNDOLA ROSA", "fone":"48991946705"},
	{"mes":"02", "dia":"14", "sexo":"F", "classe":"I", "nome":"VITÓRIA ABRAHÃO DA SILVA", "fone":"48999515459"},
	{"mes":"02", "dia":"14", "sexo":"F", "classe":"T", "nome":"RAYSSA BRAGA RODRIGUES", "fone":"48999652163"},
	{"mes":"02", "dia":"16", "sexo":"M", "classe":"T", "nome":"DANIEL BARBI DA SILVA", "fone":"48999974386"},
	{"mes":"02", "dia":"20", "sexo":"M", "classe":"T", "nome":"EDUARDO SEEFELD FERREIRA", "fone":"48984538971"},
	{"mes":"02", "dia":"22", "sexo":"F", "classe":"T", "nome":"ADRIANA LUIZA DOS SANTOS", "fone":""},
	{"mes":"02", "dia":"28", "sexo":"F", "classe":"T", "nome":"ELISANGELA FRANCISCA DA SILVA REZENDE", "fone":"48984787385"},

	{"mes":"03", "dia":"05", "sexo":"M", "classe":"T", "nome":"ERICKSEN DOUGLAS PSCHEIDT", "fone":"48996518098"},
	{"mes":"03", "dia":"05", "sexo":"F", "classe":"T", "nome":"LAINARA TEODÓSIO BARBI", "fone":"48996690181"},
	{"mes":"03", "dia":"08", "sexo":"M", "classe":"I", "nome":"BRYAN BUENO DE CAMARGO", "fone":"48991599492"},
	{"mes":"03", "dia":"08", "sexo":"F", "classe":"I", "nome":"THAYNÁ BUENO DE CAMARGO", "fone":"48991599492"},
	{"mes":"03", "dia":"09", "sexo":"F", "classe":"T", "nome":"TANIA GUIRALDELLI", "fone":""},
	{"mes":"03", "dia":"17", "sexo":"M", "classe":"T", "nome":"MARCO ANTÔNIO SALDANHA FEIJÓ", "fone":"48999412863"},
	// {"mes":"03", "dia":"18", "sexo":"F", "classe":"T", "nome":"MÁRCIA DOS SANTOS RIBEIRO VELTER", "fone":"48984855851"},
	// {"mes":"03", "dia":"18", "sexo":"M", "classe":"J", "nome":"NICOLAS RODRIGUES", "fone":""},
	{"mes":"03", "dia":"19", "sexo":"F", "classe":"I", "nome":"ELISA BARBI", "fone":"48996690181"},
	{"mes":"03", "dia":"22", "sexo":"F", "classe":"A", "nome":"VALENTINA DA ROSA", "fone":"48998436192"},
	{"mes":"03", "dia":"22", "sexo":"F", "classe":"T", "nome":"VIVIANNE LEAL", "fone":"48999387646"},
	{"mes":"03", "dia":"23", "sexo":"M", "classe":"D", "nome":"JOVANE BARBI DA SILVA", "fone":"48999834987"},
	{"mes":"03", "dia":"25", "sexo":"F", "classe":"T", "nome":"MUNNIQUE DOS SANTOS PEREIRA", "fone":"48991278507"},
	{"mes":"03", "dia":"25", "sexo":"F", "classe":"T", "nome":"MARISTELA MORAES", "fone":"48998248132"},
	{"mes":"03", "dia":"26", "sexo":"M", "classe":"T", "nome":"GILSON MORAES", "fone":"48996036370"},

	{"mes":"04", "dia":"01", "sexo":"M", "classe":"D", "nome":"EDUARDO APARECIDO DE PAULA SOUZA", "fone":"48988308882"},
	{"mes":"04", "dia":"07", "sexo":"M", "classe":"J", "nome":"DEIVIDE CAIQUE MENEZES VIANA", "fone":"7199933496"},
	{"mes":"04", "dia":"08", "sexo":"F", "classe":"T", "nome":"FERNANDA HECK PSCHEIDT", "fone":"48999161995"},
	{"mes":"04", "dia":"13", "sexo":"M", "classe":"D", "nome":"RODRIGO INÁCIO FERREIRA", "fone":"48984248774"},
	{"mes":"04", "dia":"16", "sexo":"F", "classe":"J", "nome":"REBECA RODRIGUES DE SOUZA", "fone":"48984534446"},
	{"mes":"04", "dia":"16", "sexo":"F", "classe":"T", "nome":"MARIONICE PSCHEIDT", "fone":"48996969688"},
	{"mes":"04", "dia":"18", "sexo":"F", "classe":"J", "nome":"ALICE PIONTKOVSKY FERREIRA", "fone":"27998096350"},
	{"mes":"04", "dia":"19", "sexo":"F", "classe":"B", "nome":"HELENA LOPES CONSOLINE", "fone":"48999358042"},
	{"mes":"04", "dia":"19", "sexo":"M", "classe":"J", "nome":"SAMUEL SILVA DE REZENDE", "fone":"48992256892"},
	{"mes":"04", "dia":"20", "sexo":"F", "classe":"T", "nome":"JOANA DARC DOS SANTOS BREZEZINSKI", "fone":"48991522580"},
	{"mes":"04", "dia":"21", "sexo":"F", "classe":"T", "nome":"OTILIA LOPES DE ABREU", "fone":"48988070249"},
	{"mes":"04", "dia":"22", "sexo":"F", "classe":"T", "nome":"ELVIRA DE AQUINO DA SILVEIRA", "fone":"48988610543"},
	{"mes":"04", "dia":"22", "sexo":"F", "classe":"T", "nome":"ROSEVALDA CORREIA", "fone":"48999893138"},
	{"mes":"04", "dia":"26", "sexo":"M", "classe":"T", "nome":"JORGE ALMEIDA", "fone":"48996621919"},
	{"mes":"04", "dia":"27", "sexo":"M", "classe":"J", "nome":"LEONARDO ALEXANDRE SOUSA", "fone":"48988186913"},
	{"mes":"04", "dia":"30", "sexo":"F", "classe":"A", "nome":"LUIZA BORGES VEIGA", "fone":"48988049762"},

	{"mes":"05", "dia":"01", "sexo":"M", "classe":"T", "nome":"FÁBIO DE MOURA ROSA", "fone":"48991338324"},
	{"mes":"05", "dia":"01", "sexo":"M", "classe":"T", "nome":"JUNIO", "fone":"48984467768"},
	{"mes":"05", "dia":"04", "sexo":"F", "classe":"T", "nome":"ELUSIA DE SOUZA", "fone":""},
	{"mes":"05", "dia":"06", "sexo":"M", "classe":"T", "nome":"JOAO VIEIRA AMBROZINI", "fone":"48984331636"},
	{"mes":"05", "dia":"08", "sexo":"M", "classe":"T", "nome":"MAICON MARCELO MORAES", "fone":"48984581351"},
	{"mes":"05", "dia":"09", "sexo":"F", "classe":"T", "nome":"PAOLA PALONI DA SILVA PEREIRA", "fone":"48999759653"},
	{"mes":"05", "dia":"15", "sexo":"F", "classe":"T", "nome":"TANGRIANE PEREIRA TEIXEIRA MORAES", "fone":"48984496290"},
	{"mes":"05", "dia":"20", "sexo":"M", "classe":"T", "nome":"RONNY REINALDO DA SILVA", "fone":"48998458249"},
	{"mes":"05", "dia":"22", "sexo":"M", "classe":"T", "nome":"VALMIR DOS SANTOS", "fone":""},
	{"mes":"05", "dia":"22", "sexo":"F", "classe":"T", "nome":"VANILDA ADRIANA DA SILVA CASTANHEIRO", "fone":""},
	{"mes":"05", "dia":"23", "sexo":"M", "classe":"A", "nome":"PEDRO HENRIQUE DA SILVA BREZEZINSK", "fone":""},
	{"mes":"05", "dia":"30", "sexo":"F", "classe":"T", "nome":"POLIANA PEREIRA TEIXEIRA", "fone":"48996402981"},
	// {"mes":"05", "dia":"30", "sexo":"M", "classe":"J", "nome":"DOUGLAS ALEXANDRE SOUSA", "fone":"48999237664"},

	{"mes":"06", "dia":"08", "sexo":"F", "classe":"T", "nome":"CRISTIANE BONATELLI FELIPE", "fone":"48999320498"},
	{"mes":"06", "dia":"08", "sexo":"M", "classe":"T", "nome":"FABIANO SALÉSIO DA SILVA", "fone":"48999464595"},
	{"mes":"06", "dia":"09", "sexo":"F", "classe":"J", "nome":"ANA BEATRIZ DE OLIVEIRA", "fone":"48988628606"},
	{"mes":"06", "dia":"13", "sexo":"F", "classe":"T", "nome":"ELIZABETE ELZA DA SILVA EBERLE", "fone":"48996561825"},
	{"mes":"06", "dia":"14", "sexo":"M", "classe":"T", "nome":"MACIEL FRAGA MACEDO", "fone":"48988629516"},
	{"mes":"06", "dia":"15", "sexo":"F", "classe":"C", "nome":"MARIA ALICE SANTOS", "fone":"48998044074"},
	{"mes":"06", "dia":"15", "sexo":"F", "classe":"J", "nome":"SOPHIA PIMENTEL RODRIGUES", "fone":"28988096616"},
	{"mes":"06", "dia":"16", "sexo":"F", "classe":"T", "nome":"MARIA GENECI DE MORAES", "fone":"51985100399"},
	{"mes":"06", "dia":"23", "sexo":"F", "classe":"J", "nome":"KAUANE CHARLENE ANTUNES DA SILVA", "fone":"48991910675"},
	{"mes":"06", "dia":"26", "sexo":"M", "classe":"C", "nome":"BERNARDO PAIVA COSTA", "fone":"62982235695"},
	{"mes":"06", "dia":"27", "sexo":"M", "classe":"J", "nome":"JULIANO ESCOBAR ETGES", "fone":"48996624495"},
	{"mes":"06", "dia":"27", "sexo":"F", "classe":"T", "nome":"VALDELI IZABEL DA SILVA", "fone":"48991912106"},
	{"mes":"06", "dia":"30", "sexo":"F", "classe":"T", "nome":"LUCIANAURA MARIA ALVES TEODÓSIO", "fone":"48996538955"},

	{"mes":"07", "dia":"03", "sexo":"F", "classe":"T", "nome":"CRISTINA MARIA MENDES DA SILVA", "fone":"48991249710"},
	{"mes":"07", "dia":"04", "sexo":"M", "classe":"C", "nome":"PEDRO DE REZENDE GUCHERT", "fone":"48999854451"},
	{"mes":"07", "dia":"06", "sexo":"F", "classe":"T", "nome":"MARILZA VIEIRA AMBROZINI", "fone":"48996446923"},
	{"mes":"07", "dia":"08", "sexo":"F", "classe":"T", "nome":"MARCIA MARIA BRUCH", "fone":"48984190607"},
	{"mes":"07", "dia":"08", "sexo":"F", "classe":"T", "nome":"MARLIZA MARIA BRUCH", "fone":"48984333160"},
	{"mes":"07", "dia":"08", "sexo":"M", "classe":"I", "nome":"PEDRO HENRIQUE TRAMONTINI DE SOUZA", "fone":"48988690880"},
	{"mes":"07", "dia":"12", "sexo":"F", "classe":"T", "nome":"BRUNA DE LIMA CONSOLINE FERREIRA", "fone":"48999358042"},
	{"mes":"07", "dia":"12", "sexo":"F", "classe":"T", "nome":"JOANA CELIA FERREIRA LOBO", "fone":"98989007900"},
	{"mes":"07", "dia":"12", "sexo":"F", "classe":"T", "nome":"NATÁLIA DE MEDEIROS BORGES", "fone":"48988049762"},
	{"mes":"07", "dia":"16", "sexo":"F", "classe":"T", "nome":"SUE LANA SEEFELD FERREIRA", "fone":"48984538971"},
	{"mes":"07", "dia":"23", "sexo":"M", "classe":"P", "nome":"DANIEL RONALD RICARDO", "fone":"48996685959"},
	{"mes":"07", "dia":"29", "sexo":"F", "classe":"I", "nome":"SUSANA IAHN RICARDO", "fone":"48996628848"},

	{"mes":"08", "dia":"01", "sexo":"F", "classe":"T", "nome":"CRISTINA LÚCIA LOBATO HIRAKAWA", "fone":"48996678267"},
	{"mes":"08", "dia":"05", "sexo":"F", "classe":"T", "nome":"CLÁUDIA ANTUNES SOARES", "fone":"48999866052"},
	{"mes":"08", "dia":"07", "sexo":"F", "classe":"T", "nome":"JANAINA VASCONCELLOS PEREIRA", "fone":"5185682871"},
	{"mes":"08", "dia":"10", "sexo":"M", "classe":"T", "nome":"DANIEL FRANCISCO RIBEIRO", "fone":""},
	{"mes":"08", "dia":"11", "sexo":"F", "classe":"T", "nome":"CAROLINA DA COSTA ESPÍNDOLA ROSA", "fone":"48991946705"},
	{"mes":"08", "dia":"11", "sexo":"F", "classe":"T", "nome":"SERLE MARIA ROCHA DE MEDEIROS", "fone":"48996111480"},
	{"mes":"08", "dia":"15", "sexo":"F", "classe":"J", "nome":"ANITA NATUS FRANCO", "fone":"48991578966"},
	{"mes":"08", "dia":"15", "sexo":"F", "classe":"T", "nome":"ISABEL", "fone":"48984123572"},
	{"mes":"08", "dia":"17", "sexo":"F", "classe":"T", "nome":"MYRIAM AMBROZINI LEAL", "fone":"48984306322"},
	{"mes":"08", "dia":"19", "sexo":"M", "classe":"T", "nome":"VINICIUS SOUZA DE CAMARGO", "fone":"48992077615"},
	{"mes":"08", "dia":"20", "sexo":"M", "classe":"T", "nome":"ELISEU DE OLIVEIRA RODRIGUES", "fone":"48984411032"},
	{"mes":"08", "dia":"20", "sexo":"M", "classe":"T", "nome":"RODRIGO BUENO DE CAMARGO", "fone":"48996351831"},
	{"mes":"08", "dia":"28", "sexo":"M", "classe":"T", "nome":"MADSON TCHAICK RIBEIRO", "fone":"48996373912"},
	{"mes":"08", "dia":"29", "sexo":"F", "classe":"T", "nome":"FABIOLA CRISTINA DA SILVA", "fone":"48984091045"},
	{"mes":"08", "dia":"31", "sexo":"F", "classe":"J", "nome":"MARIA EDUARDA TRAMONTINI DE PAULA SOUZA", "fone":"48988690880"},
	{"mes":"08", "dia":"31", "sexo":"M", "classe":"T", "nome":"VILSON SOARES DA SILVA", "fone":"48984701920"},

	{"mes":"09", "dia":"06", "sexo":"F", "classe":"T", "nome":"PRISCILA SOUZA", "fone":"48984637051"},
	{"mes":"09", "dia":"07", "sexo":"F", "classe":"T", "nome":"SANDRA REGINA MAGNUS", "fone":"48991188830"},
	{"mes":"09", "dia":"07", "sexo":"F", "classe":"A", "nome":"SARAH IAHN RICARDO", "fone":"48996628848"},
	{"mes":"09", "dia":"15", "sexo":"F", "classe":"C", "nome":"VALENTINA ANTUNES SOARES", "fone":"48999866052"},
	{"mes":"09", "dia":"15", "sexo":"F", "classe":"J", "nome":"BEATRIZ", "fone":"48984296798"},
	{"mes":"09", "dia":"15", "sexo":"F", "classe":"T", "nome":"LIDIA LEDVINA BRUCH", "fone":"48984333160"},
	{"mes":"09", "dia":"20", "sexo":"F", "classe":"T", "nome":"MIRELA IZABEL DE SOUZA FEIJÓ", "fone":"48999366737"},
	{"mes":"09", "dia":"22", "sexo":"F", "classe":"J", "nome":"JULIA FABIANE VASCONCELLOS PEREIRA", "fone":"51995689306"},
	{"mes":"09", "dia":"23", "sexo":"F", "classe":"T", "nome":"ALICE MARTINS DE PAIVA ALVES", "fone":"62982235695"},
	{"mes":"09", "dia":"23", "sexo":"M", "classe":"P", "nome":"IVAN OLDAIR PSCHEIDT", "fone":"48996290095"},
	{"mes":"09", "dia":"25", "sexo":"F", "classe":"T", "nome":"ADELIR COSTA TCHAICK", "fone":"48999162595"},
	{"mes":"09", "dia":"25", "sexo":"F", "classe":"T", "nome":"EDI MARIA MOLIM BASCO", "fone":"48999757243"},
	{"mes":"09", "dia":"25", "sexo":"M", "classe":"T", "nome":"LUCIANO DA MOTTA CORREA", "fone":"48999110637"},
	{"mes":"09", "dia":"25", "sexo":"F", "classe":"T", "nome":"MARIANA VIEIRA AMBROZINI", "fone":"48991258442"},

	{"mes":"10", "dia":"07", "sexo":"M", "classe":"T", "nome":"RODRIGO LOPES FERREIRA", "fone":"21980066919"},
	{"mes":"10", "dia":"12", "sexo":"F", "classe":"T", "nome":"JACQUELINE LOPES DE OLIVEIRA SOUZA", "fone":"48988690880"},
	{"mes":"10", "dia":"14", "sexo":"F", "classe":"T", "nome":"FRANCISCA NOELY PSCHEIDT", "fone":"41997078855"},
	{"mes":"10", "dia":"16", "sexo":"F", "classe":"T", "nome":"LIANE CRISTINA ALMEIDA ESCOBAR CORRÊA", "fone":"48996350133"},
	{"mes":"10", "dia":"27", "sexo":"F", "classe":"T", "nome":"MARI CRISTIANE GABRIEL BARBI", "fone":"48996965730"},
	{"mes":"10", "dia":"29", "sexo":"M", "classe":"T", "nome":"GABRIEL JUNIOR GOETTEN", "fone":"48991871104"},

	{"mes":"11", "dia":"02", "sexo":"F", "classe":"T", "nome":"NILCE DOS SANTOS FERREIRA", "fone":"48998179231"},
	{"mes":"11", "dia":"03", "sexo":"M", "classe":"T", "nome":"DIOGO RODRIGUES FEIJÓ", "fone":"48991920311"},
	{"mes":"11", "dia":"06", "sexo":"M", "classe":"A", "nome":"THÉO GUCHERT", "fone":"48999854451"},
	{"mes":"11", "dia":"07", "sexo":"M", "classe":"T", "nome":"LUCIANO RODRIGUES VEIGA", "fone":"48984034444"},
	{"mes":"11", "dia":"12", "sexo":"M", "classe":"T", "nome":"MARCOS PAULO GUCHERT", "fone":"48988041900"},
	{"mes":"11", "dia":"12", "sexo":"F", "classe":"A", "nome":"ANA LUIZA MAGNUS ARAUJO", "fone":"48991188830"},
	{"mes":"11", "dia":"15", "sexo":"M", "classe":"D", "nome":"ALIEL COSTA SILVA", "fone":"62992894572"},
	{"mes":"11", "dia":"18", "sexo":"M", "classe":"T", "nome":"GABRIEL FILIPE IAHN", "fone":"48999571354"},
	{"mes":"11", "dia":"18", "sexo":"F", "classe":"T", "nome":"MABEL BARROS BRAGA RODRIGUES", "fone":"48999904353"},
	{"mes":"11", "dia":"19", "sexo":"M", "classe":"T", "nome":"MAURÍCIO EGÍDIO FELIPE", "fone":"48988614682"},
	{"mes":"11", "dia":"21", "sexo":"F", "classe":"T", "nome":"ALDA DOS ANJOS BARBI", "fone":""},
	{"mes":"11", "dia":"21", "sexo":"M", "classe":"J", "nome":"LUCA BORGES VEIGA", "fone":"48988049762"},
	{"mes":"11", "dia":"22", "sexo":"F", "classe":"T", "nome":"DEBORA IAHN RICARDO", "fone":"48996628848"},
	{"mes":"11", "dia":"26", "sexo":"F", "classe":"T", "nome":"ALINE ISOLINA DE REZENDE DA SILVA GUCHERT", "fone":"48999854451"},

	{"mes":"12", "dia":"05", "sexo":"F", "classe":"T", "nome":"GERUSA GRAZIELA DE MORAES NATUS DE MENEZES", "fone":"48991971280"},
	{"mes":"12", "dia":"08", "sexo":"M", "classe":"J", "nome":"LUCAS GUCKERT", "fone":"48991638181"},
	{"mes":"12", "dia":"12", "sexo":"M", "classe":"C", "nome":"ESTEVÃO JORGE LOPES GARCIA", "fone":"27995832694"},
	{"mes":"12", "dia":"20", "sexo":"M", "classe":"D", "nome":"JOSE RICARDO TEIXEIRA DA ROSA", "fone":"48998436192"},
	{"mes":"12", "dia":"22", "sexo":"F", "classe":"T", "nome":"KARINA LOPES GARCIA", "fone":"27995832694"},
	{"mes":"12", "dia":"24", "sexo":"F", "classe":"T", "nome":"NANCY DE LOURDES GRANETO", "fone":"48999762550"},
	{"mes":"12", "dia":"26", "sexo":"F", "classe":"T", "nome":"KELLY MARINE DE SOUZA IAHN", "fone":"48984659693"},
	{"mes":"12", "dia":"26", "sexo":"F", "classe":"J", "nome":"LERIANE DE SOUZA FLORIANO", "fone":"48999197865"},
	{"mes":"12", "dia":"31", "sexo":"M", "classe":"T", "nome":"JORGE LUIZ AMADOR GARCIA JUNIOR", "fone":"94991959493"},
];
