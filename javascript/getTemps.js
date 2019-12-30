var phpFileDomainName = '4b657637';

function call_temps(data) {
	//temps = data;
	var rpi3_1 = data.indexOf("a")+1;
	var rpi3_2 = data.indexOf("b");
	console.log("rpi3_1: "+rpi3_1);
	if (rpi3_1 != 0) {
		var rpi3 = data.slice(rpi3_1, rpi3_2);
		console.log("1");
	}

	var rpi0W_1 = data.indexOf("c")+1;
	var rpi0W_2 = data.indexOf("d");
	console.log("rpi0W_1: "+rpi0W_1);
	if (rpi0W_1 != 0) {
		var rpi0W = data.slice(rpi0W_1, rpi0W_2);
		console.log("1");
	}

	var pcServer_1 = data.indexOf("e")+1;
	var pcServer_2 = data.indexOf("f");
	console.log("pcServer_1: "+pcServer_1);
	if (pcServer_1 != 0) {
		var pcServer = data.slice(pcServer_1, pcServer_2);
		console.log("1");
	}

	var cputemps_data = "";

	


	if (rpi3 == "" || rpi3.charAt(0) == " " || rpi3_1 == 0) {
		cputemps_data = "Server is down for maintenance. ";
	}

	if (rpi3_1 != "0") {
		cputemps_data = "PI 3 CPU: "+rpi3+" F ";
	}
	


	if (rpi0W_1 == 0) {
		cputemps_data = cputemps_data + "\nPI0W CPU: (Node is down for maintenance.) ";
	}

	if (rpi0W_1 != "0") {
		cputemps_data = cputemps_data + "\nPI0W CPU: "+rpi0W+" F ";
	}



	if (pcServer_1 == 0) {
		cputemps_data = cputemps_data + "\nTFD-PC CPU: (Node is down for maintenance.) ";
	}

	if (pcServer_1 != "0") {
		cputemps_data = cputemps_data + "\nTFD-PC CPU: "+pcServer+" F ";
	}

	document.getElementById("cputemps").innerHTML = cputemps_data;
}

function get_temps() {
	$.get('https://'+phpFileDomainName+'.ngrok.io/getTemp.php', call_temps);
}

setInterval('get_temps()', 2000)