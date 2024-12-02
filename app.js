const btn = document.querySelector(".scrollTop");
btn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
