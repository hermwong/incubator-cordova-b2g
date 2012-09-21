function showCurrentPosition(resultHandler) {

	navigator.geolocation.getCurrentPosition(showPosition, geoError, { enableHighAccuracy: true, timeout: 2000 } );

	function showPosition(position) {
		var strCurrentPosition = "";
	  	strCurrentPosition += "latitude: ";
	  	strCurrentPosition += position.coords.latitude;
	  	strCurrentPosition += ", longitude: ";
	  	strCurrentPosition += position.coords.longitude;

	  	resultHandler(strCurrentPosition);		
	}

	function geoError(error) {
		var geoErrorPrompt = "Geolocation Error: ";
		switch(error.code) {
			case error.TIMEOUT:
				resultHandler(geoErrorPrompt + 'Timeout');
				break;
			case error.POSITION_UNAVAILABLE:
				resultHandler(geoErrorPrompt + 'Position unavailable');
				break;
			case error.PERMISSION_DENIED:
				resultHandler(geoErrorPrompt + 'Permission denied');
				break;
			case error.UNKNOWN_ERROR:
				resultHandler(geoErrorPrompt + 'Unknown error');
				break;
		}		
	}

}