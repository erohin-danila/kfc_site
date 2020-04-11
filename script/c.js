const open = document.querySelector(".jasa");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");



open.addEventListener("click", function(event) {
	modal.classList.add("open-is");
})

close.addEventListener("click", function(event) {
	modal.classList.remove("open-is");
})