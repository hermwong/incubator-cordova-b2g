function onorientationchange(evt) {
	//alert("Screen orientation state is " + screen.orientation);
	alert("Screen orientation state is " + evt.orientation);
}

screen.addEventListener("orientationchange", onorientationchange, false);
