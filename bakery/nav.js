let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
	navigation.classList.toggle('expand');
	header.classList.toggle('expand');
}

menuIcon.addEventListener('click', toggleNav);