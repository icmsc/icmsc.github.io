document.getElementById("header_logo").addEventListener("click", function() {
	window.location.assign("https://icmsc.github.io");
});

// Cookie creation/modify
function setCookie(name, value, days) {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure";
}
// Cookie read
function getCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
// Cookie delete
function eraseCookie(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}

// Theme apply
function applyTheme(theme) {
	let bodyElement = document.body;
	if (theme == "dark") {
		bodyElement.classList.add("dark");
	} else {
		bodyElement.classList.remove("dark");
	}
	setCookie('icmsc-theme', theme, 7);
}
// Theme load from cookie
function loadTheme() {
	const savedTheme = getCookie('icmsc-theme');
	if (savedTheme) {
		applyTheme(savedTheme);
	} else {
		applyTheme('light');
	}
}
// Theme controller
document.getElementById("header_theme").addEventListener("click", function() {
	if (document.body.classList.contains("dark")) {
		applyTheme("light");
	} else {
		applyTheme("dark");
	}
});

// load Theme and UUIDs
window.onload = function() {
	loadTheme();
};