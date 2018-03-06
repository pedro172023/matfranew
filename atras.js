$(".trasera").click(function () {
	$(this).children("h3").slideToggle();
})

$("h3").click(function(p) {
	p.stopPropagation();
})