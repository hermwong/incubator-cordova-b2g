function onorientationchange(evt) {
	//alert("Screen orientation state is " + screen.orientation);
	alert("Screen orientation state is " + window.screen.orientation);
}

window.addEventListener("orientationchange", onorientationchange, true);
