function createAccordion() {
	var ul = document.querySelectorAll("nav> ul >li >ul");
	var accordion = "<div class='accordion'>\n\t<span></span>\n\t<span></span>\n</div>";
	for(i of ul) {
		/*i.parentNode.classList.add("accordion");*/
		i.parentNode.innerHTML += accordion;
	}
}
function resizeBG() {
	var bg = document.querySelectorAll(".background");
	for(i of bg){
		i.style.height = window.innerHeight+"px";
	}	
	document.querySelector("header > nav> ul").style.maxHeight = (window.innerHeight-55)+"px";
	
}
function mobileNav() {
	document.querySelector(".mobile-nav").onclick = function() {
		this.parentNode.classList.toggle("open");
		accordionClose();
	}
}
function accordionClose() {
	var acc = document.querySelectorAll(".accordion");
	for(var i = 0;i<acc.length;i++){
		if(acc[i].parentNode.classList.contains("open")){
			acc[i].parentNode.classList.remove("open");
		}		
	}
}
function accordionOpener() {
	var acc = document.querySelectorAll(".accordion");
	for(var i = 0;i<acc.length;i++){
		acc[i].onclick = function() {
		this.parentNode.classList.toggle("open");
		} 
	}
}
function mobileList() {
	if(window.innerWidth < 769 && document.querySelector("header > nav > ul")) {
		document.querySelector("header > nav > ul").style.width = window.innerWidth+'px';
	}
}
window.onload = function() {
	resizeBG();
	createAccordion();
	mobileNav();
	accordionOpener();
	mobileList();
	
}
window.onresize = function() {
	resizeBG();
	mobileList();
}








