/******* EFECTO LUPA *************/

var blurArea = document.getElementById("blur-area");
const searchButton = document.getElementById("button-search");

searchButton.addEventListener('click',()=>{
	searchButton.classList.remove('animation-tilting')
	document.onmousemove = (e)=>{
		blurArea.style.transform = `translate(${e.pageX}px,${e.pageY}px)`;
	}
});
