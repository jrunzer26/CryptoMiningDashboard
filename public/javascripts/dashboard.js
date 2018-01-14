window.onload = function() {
}

function dashboard() {
	$("#dashboard").show();
	$("#mining").hide();
	$("#portfolio").hide();
	$("#status").hide();
}

function mining() {
	$("#dashboard").hide();
	$("#mining").show();
	$("#portfolio").hide();
	$("#status").hide();
}

function portfolio() {
	$("#dashboard").hide();
	$("#mining").hide();
	$("#portfolio").show();
	$("#status").hide();
}

function status() {
	$("#dashboard").hide();
	$("#mining").hide();
	$("#portfolio").hide();
	$("#status").show();
	$.ajax({
		type: 'GET',
		url: '/dashboard/status',
		contentType: "application/json; charset=utf-8",
		success: function(data) {
			console.log(data);
			data.data.forEach(function(item){
					var lines = item.split("\n"),
					output = [],
					i;
					for (i = 0; i < lines.length; i++)
					output.push("<tr><td>"
					+ lines[i].slice(0,-1).split(",").join("</td><td>")
					+ "</td></tr>");
					output = "<table class=\"ui celled padded table\"><tr>"+
					"<td>Time</td>"+
					"<td>Card</td>"+
					"<td>Temp</td>"+
					"<td>Utilization</td></tr>"+
					 output.join("") + "</table>";         
					$("#health").append(output);
				});
		},
		error: function(err) {
			alert(err);
		}
	});
}
