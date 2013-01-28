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


/*
http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html

bandwidth of type double, readonly
The user agent must set the value of the bandwidth attribute to:
    0 if the user is currently offline;
    Infinity if the bandwidth is unknown;
    an estimation of the current bandwidth in MB/s (Megabytes per seconds) available for communication with the browsing context active document's domain.
*/