import { prefixer } from './common.js';
import { structure } from './structure.js';
const mainPages = structure.general;
const socialLinks = structure.social;
const churchsLinks = structure.churchs;

export function app() {

	// renderizar os links padrão
	function renderLinksMain() {
		$.each(mainPages, function (index, element) {
			if (element.view == 1) {
				$("#navbar").append(`<a class="navbar-item" href="${prefixer+element.link}">${element.name}</a>`)
			}
		});
	}

	// renderizar os social links
	function renderLinksSocialLoadSVG(svgFile) {
		return fetch(svgFile)
		.then(response => response.text())
		.then(svgContent => {
			var lines = svgContent.split('\n');
			lines.shift();
			var modifiedSVG = lines.join('\n');
			return modifiedSVG;
		})
		.catch(error => {
			console.error('Erro ao carregar o arquivo SVG:', error);
		});
	}
	function renderLinksSocial() {
		$.each(socialLinks, function (index, element) {
			if (element.view == 1) {
				renderLinksSocialLoadSVG(prefixer+element.icon)
				.then(function(svgContent) {
					$("#social").append(`<a class="social-item" target="_blank" href="${element.link}" title="${element.name}">${svgContent}</a>`);
				});
			}
		});
	}

	// rederizar os links de igrejas
	function renderLinksChurchs() {
		$.each(churchsLinks, function (index, element) {
			if (element.view == 1) {
				$("#subnavbar").append(`<li class="subnavbar-item ${element.link}"><a class="subnavbar-item-link" href="${prefixer+element.link}">${element.name+' - '+element.city}</a></li>`);
			}
			if (element.services.length > 1) {
				$("#subnavbar").find(`.subnavbar-item.${element.link}`).append(`<div class="subnavbar-menu ${element.link}"></div>`);
				let elementSubnavItem = $("#subnavbar .subnavbar-item."+element.link+" .subnavbar-menu."+element.link);
				$.each(element.services, function (index2, element2) {
					if (element2.view == 1) {
						$(elementSubnavItem).append(`<a class="subnavbar-menu-item" href="${prefixer+element.link+'/'+element2.link}">${element2.name}</a>`);
					}
				});
			}
		});
	}

	// execute
	$(document).ready(()=>{

		$("#logo").attr("onclick",`window.location.assign('${prefixer}')`);

		renderLinksMain();

		renderLinksSocial();

		renderLinksChurchs();

	});

}
