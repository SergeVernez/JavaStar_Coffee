document.addEventListener("DOMContentLoaded", () => {
	const toto = document.querySelector(".scrollTop");

	// affiche la flèche au scroll a 200px
	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			//.scrollY (y maj) foncton liée au js
			toto.classList.add("visible"); //.classList fonction liée au js
		} else {
			toto.classList.remove("visible");
		}
	});

	// retour en haut de page
	toto.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});
});
