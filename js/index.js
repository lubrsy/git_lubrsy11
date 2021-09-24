window.onload = function(){
	var box1 = document.getElementById("box1");
	box1.onmousedown = function(event){
		event = event || window.event;
		var ol = event.clientX - box1.offsetLeft;
		var ot = event.clientY - box1.offsetTop;
		document.onmousemove = function(event){
			event = event || window.event;
			var left = event.clientX;
			var top = event.clientY;
			var st = document.body.scrollTop || document.documentElement.scrollTop; 
			var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
			box1.style.left = ( left + sl - ol) + "px";
			box1.style.top = ( top + st - ot) + "px";
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		};
		return false;
	};
};