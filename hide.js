//init
Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
	// Do stuff here
	el.style.visibility = "hidden";
});
		
//update

const cb2 = document.querySelector('#accept2');
const cb = document.querySelector('#accept');

const btn = document.querySelector('#btn');
btn.onclick = () => {
	if(!cb.checked){
		Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
			// Do stuff here
			el.style.visibility = "hidden";			
		});
	}
	else {
		Array.prototype.forEach.call(document.getElementsByClassName("mature"), function(el) {
			// Do stuff here
			el.style.visibility = "visible";
		});
	}
	if(!cb2.checked){
		Array.prototype.forEach.call(document.getElementsByClassName("explicit"), function(el) {
			// Do stuff here
			el.style.visibility = "hidden";
		});
	}
	else {
		Array.prototype.forEach.call(document.getElementsByClassName("explicit"), function(el) {
			// Do stuff here
			el.style.visibility = "visible";
		});
	}
	
	
	
	//document.getElementById("mature").style.visibility = "visible";
};