hotkeys('ctrl+enter', function() {
	var ele = document.getElementById('aiterm');
	var svg = document.getElementById('aisvg');
	if (ele.style.display == 'none') {
		ele.style.display = 'block'; 
		svg.style.display = 'none'; 
		ele.focus();
	} else {
		ele.style.display = 'none';
		svg.style.display = 'block'; 
		svg.focus();
	}
});

