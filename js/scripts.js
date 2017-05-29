function createAccordion() {
	var ul = document.querySelectorAll("nav> ul >li >ul");
	var accordion = "<div class='accordion'>\n\t<span></span>\n\t<span></span>\n</div>";
	for(i of ul) {
		/*i.parentNode.classList.add("accordion");*/
		i.parentNode.innerHTML += accordion;
	}
}
function resizeBG() {
	var inner = document.createElement("style");
	var style = "#fooldal { height: "+window.innerHeight+"px;}";
	inner.innerHTML = (style);
	document.appendChild(inner);
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
	var acc = document.querySelectorAll("header > nav > ul li > .accordion");
	for(i of acc){
		i.onclick = function() {
			var accOpen = document.querySelector("header > nav > ul li.open");
			if(accOpen && accOpen !== this.parentNode) {
				accOpen.classList.remove("open");
			}
			this.parentNode.classList.toggle("open");
		} 
	}
}
function mobileList() {
	if(window.innerWidth < 769 && document.querySelector("header > nav > ul")) {
		document.querySelector("header > nav > ul").style.width = window.innerWidth+'px';
	}
}
function changePage(e) {
	var current = e.href.split("#")[1];
	if(current){
		document.querySelector(".background.active").classList.remove("active");
		setTimeout(function() {
			document.getElementById(current).classList.add("active");
		}, 50);
	}
}
function hideNavBar(z){	
	for(i of z){
		i.onclick = function() {
			setTimeout(function() {
				document.querySelector(".mobile-nav").parentNode.classList.remove("open");
				accordionClose();
			}, 10);
		}
	}
}
function fixHeader() {
	var header = document.querySelector('body > header');
	if(window.scrollY > 30) {
		header.classList.add("scroll");
	}
	else {
		header.classList.remove("scroll");
	}
}
window.onload = function() {
	//resizeBG();
	createAccordion();
	mobileNav();
	accordionOpener();
	mobileList();
	var li = document.querySelectorAll('header > nav > ul li>a');
	var title = document.querySelectorAll('header > h1.title >a');
	hideNavBar(li);
	hideNavBar(title);
	
	
}
window.onresize = function() {
	//resizeBG();
	mobileList();
}
window.onscroll = function() {
	fixHeader();
}
window.onhashchange = function() {
    changePage(location);
}








