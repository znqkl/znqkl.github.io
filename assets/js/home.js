document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
});

function ctrlShiftKey(e, keyCode) {
	return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e) => {
	if (event.keyCode === 123 || ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || ctrlShiftKey(e, 'C') || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) return false;
};

function isDevToolsOpened() {
	if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
		return true;
	} else {
		return false;
	}
}
window.addEventListener('resize', function() {
	if (isDevToolsOpened()) {
		var destinationURL = 'p/1/RjxCFTkEpr5mtaPnf7zZ4V/jeydsqAaHvBprPVTM9NDJt/nah';
		window.location.href = destinationURL;
	}
});
if (isDevToolsOpened()) {
	var destinationURL = 'p/1/RjxCFTkEpr5mtaPnf7zZ4V/jeydsqAaHvBprPVTM9NDJt/nah';
	window.location.href = destinationURL;
}
