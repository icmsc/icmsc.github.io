import { app } from './general.js?v=856e817c8dc7465a844fcf28fa2fcd1e';
import { hash } from './hash.js?v=856e817c8dc7465a844fcf28fa2fcd1e';

$(document).ready(()=>{

	app();

	hash();

	$(".banner_image").click(function(){
		window.location.assign($(this).attr("src"));
	});

});

