import { app } from './general.js?v=ca1b8ba3e11a6fdf7f85518b12de7b84';
import { hash } from './hash.js?v=ca1b8ba3e11a6fdf7f85518b12de7b84';

$(document).ready(()=>{

	app();

	hash();

	$(".banner_image").click(function(){
		window.location.assign($(this).attr("src"));
	});

});

