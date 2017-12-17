window.onload = function() {
	
}

function login() {
	window.location.href = '/login';
}

function aboutPage() {
	$("#download").hide();
	$("#preview").hide();
	$("#about").show();
}

function downloadPage() {
	$("#download").show();
	$("#preview").hide();
	$("#about").hide();
}

function previewPage() {
	$("#download").hide();
	$("#preview").show();
	$("#about").hide();
}
