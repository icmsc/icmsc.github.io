import { app } from './general.js?v=2437c084a5754c23b85cc6ee6042d263';
import { hash } from './hash.js?v=2437c084a5754c23b85cc6ee6042d263';

$(document).ready(()=>{

	app();

	hash();

	$(".banner_image").click(function(){
		window.location.assign($(this).attr("src"));
	});

});

