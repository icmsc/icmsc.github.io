import { app } from './general.js?v=4225986fddb944d47e2e51fa73d00dc5';
import { hash } from './hash.js?v=4225986fddb944d47e2e51fa73d00dc5';

$(document).ready(()=>{

	app();

	hash();

	$(".banner_image").click(function(){
		window.location.assign($(this).attr("src"));
	});

});

