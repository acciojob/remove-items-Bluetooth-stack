//your JS code here. If required.

const drop = document.querySelector("#colorSelect");
const button = document.querySelector("#btn");

button.addEventListener("click",()=>{
	if(drop.hasChildNodes()){
		let child = drop.lastElementChild;
		drop.removeChild(child);
	}
})
