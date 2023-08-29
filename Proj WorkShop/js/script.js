/*
function func(){
    var menubtn= document.getElementById("menubtn");
    var ladonav=document.getElementById("ladonav");
    var menu= document.getElementById("menu");

    if (ladonav.style.right=="-250px") {
        ladonav.style.rigth="0";
    }else{
        ladonav.style.rigth="-250px";
    }
}
 */
var menuBtn= document.getElementById("menubtn");
var ladonav=document.getElementById("ladonav")
var menu=document.getElementById("menu")
ladonav.style.right="-250px"
menuBtn.onclick=function(){
    if (ladonav.style.right=="-250px") {
        ladonav.style.right="0";
        menu.src="img/close.png"
    } else {
        ladonav.style.right="-250px"
        menu.src="img/menu.png"
    }
}