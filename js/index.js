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

