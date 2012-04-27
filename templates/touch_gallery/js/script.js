var myScroll;
function loaded() {
	window.scrollTo(0,1);
	setTimeout(function () {
		myScroll = new iScroll('wrapper',{
			snap     : true,
			vScroll  : false,
			momentum : false
		});
	}, 500);
}
function addHash(){
	window.location.hash = "active";
}
window.addEventListener('load', loaded, false);
window.addEventListener('touchstart', addHash, false);