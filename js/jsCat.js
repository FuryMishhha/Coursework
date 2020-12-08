function images2 (){
	document.querySelector(".text2").style.display="block";
}
function images3 (){
	document.querySelector(".text3").style.display="block";
}
function images4 (){
	document.querySelector(".text4").style.display="block";
}
function images5 (){
	document.querySelector(".text5").style.display="block";
}
function images6 (){
	document.querySelector(".text6").style.display="block";
}
function images7 (){
	document.querySelector(".text7").style.display="block";
}
function images8 (){
	document.querySelector(".text8").style.display="block";
}
function images9 (){
	document.querySelector(".text9").style.display="block";
}
function images10 (){
	document.querySelector(".text10").style.display="block";
}
function images11 (){
	document.querySelector(".text11").style.display="block";
}
for (let i=2;i<=11;i++){
	$(document).mouseup(function (e) {
    var container = $(".text"+i);
	if (container.has(e.target).length === 0){
    	container.hide();
	}	
});
}