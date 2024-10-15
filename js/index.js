function blog_list_open() {
	var b = document.querySelectorAll("li.blog-list-all");
	var index = 0, length = b.length;
	for ( ; index < length; index++) {
		if (b[index].style.display == 'none') {
			b[index].style.display = 'block'; 
		} else {
			b[index].style.display = 'none';
		}
	}
}

function replace() {
	const link = document.getElementById('planet');
	const date = new Date();
	const durl = 'https://card.syui.ai/planet';
	let url;
	let u = date.getSeconds().toString().substr(-1);
	console.log(u);
	switch (u) {
		case '0':
			url = durl + "?g=sun";
			break;
		case '1':
			url = durl + "?g=galaxy";
			break;
		case '2':
			url = durl + "?g=neutron";
			break;
		case '3':
			url = durl + "?g=earth";
			break;
		default:
			url = durl + "?g=moon";
	}
	link.setAttribute('src', url);
}
replace();
