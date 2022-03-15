function loginLink(){
    window.location.href = ""
}
var toggle = false;
function changeImg(){
    toggle = !toggle;
	if(toggle){
        document.querySelector(".img_check").src = "images/icon_check.png";
        document.querySelector(".change-TxtCorol").style.color = "#2f80ed";
    }else{
        document.querySelector(".img_check").src = "images/icon_check_empty.png";
        document.querySelector(".change-TxtCorol").style.color = "#a7a7a7";

        
    }
	
}