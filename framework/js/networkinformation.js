var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function showNetworkInfo(resultHandler) {
	var strNetworkInfo = "";

	strNetworkInfo += "Network Connection Properties";
	strNetworkInfo += "<br/><br/>";
	strNetworkInfo += "Bandwidth: ";
	strNetworkInfo += connection.bandwidth;
	strNetworkInfo += "<br/>";
	strNetworkInfo += "Metered: ";
	strNetworkInfo += connection.metered;

	resultHandler(strNetworkInfo);
}