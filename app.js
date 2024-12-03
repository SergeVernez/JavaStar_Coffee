const toto = document.querySelector(".scrollTop");

toto.addEventListener('click', () => {
	
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
