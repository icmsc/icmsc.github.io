import { app } from './general.js?v=270bbe9527a39e577f420809f9329c83';
import { hash } from './hash.js?v=270bbe9527a39e577f420809f9329c83';

$(document).ready(()=>{

	app();

	hash();

	$(".banner_image").click(function(){
		window.location.assign($(this).attr("src"));
	});

});

