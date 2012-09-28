function ondevicelight(evt) {
	alert("handle onDeviceLight");
}

function addDeviceLightListener() {
	window.addEventListener("devicelight", ondevicelight, true);
}

function removeDeviceLightListener() {
	window.removeEventListener("devicelight", ondevicelight, true);
}