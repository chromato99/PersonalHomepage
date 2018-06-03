function head_nav(n) 
{
    if(n=='m') {
        document.getElementById('main_frame').src="main.html";
    }
    else if(n=='p') {
        document.getElementById('main_frame').src="profile_main.html";
    }
    else if(n=='c') {
        document.getElementById('main_frame').src="cPro_main.html";
    }
    else if(n=='w') {
        document.getElementById('main_frame').src="web_main.html";
    }
    else if(n=='v') {
        document.getElementById('main_frame').src="vr_main.html";
    }
    else if(n=='i') {
        document.getElementById('main_frame').src="interest_main.html";
    }
}