import { prefixer } from './common.js?v=270bbe9527a39e577f420809f9329c83';
import { structure } from './structure.js?v=270bbe9527a39e577f420809f9329c83';
const linksPages = structure.general;
const linksChurchs = structure.churchs;

export function hash() {

	function getURL() {
		return window.location.href;
	}

	function changeTitlePage(name) {
		$('title').text($('title').text()+" | "+name);
	}

	function checkPage(urlOff) {
		let primary = urlOff.split("/")[0];
		let found = null;
		for (var i = 0; i < linksPages.length; i++) {
			if (linksPages[i].link != "" && linksPages[i].link == primary) {
				found = linksPages[i].name;
			}
		}
		if (found == null) {
			for (var i = 0; i < linksChurchs.length; i++) {
				if (linksChurchs[i].link == primary) {
					found = linksChurchs[i].name+" - "+linksChurchs[i].city;
				}
			}
		}
		if (found != null) {
			changeTitlePage(found);
		}
	}

	function checkURL() {
		let url = getURL();
		let urlOffprefixer = url.split(prefixer);
		if (urlOffprefixer[1] != "") {
			checkPage(urlOffprefixer[1]);
		}
	}

	// execute
	$(document).ready(()=>{

		checkURL();

	});

}
