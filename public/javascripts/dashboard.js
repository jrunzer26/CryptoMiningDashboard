window.onload = function() {
}

function dashboard() {
	$("#dashboard").show();
	$("#mining").hide();
	$("#portfolio").hide();
}

function mining() {
	$("#dashboard").hide();
	$("#mining").show();
	$("#portfolio").hide();
}

function portfolio() {
	$("#dashboard").hide();
	$("#mining").hide();
	$("#portfolio").show();
}
