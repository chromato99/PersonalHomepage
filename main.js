function head_nav(n) 
{
    if(n=='m') {
        document.getElementById('main_frame').src="main.html";
        document.getElementById('main_frame').height="750px";
        document.getElementById('left_nav').src="";
    }
    else if(n=='p') {
        document.getElementById('main_frame').src="profile_main.html";
        document.getElementById('left_nav').src="profile_nav.html";
    }
    else if(n=='c') {
        document.getElementById('main_frame').src="cPro_main.html";
        document.getElementById('left_nav').src="cPro_nav.html";
    }
    else if(n=='w') {
        document.getElementById('main_frame').src="web_main.html";
        document.getElementById('left_nav').src="web_nav.html";
    }
    else if(n=='v') {
        document.getElementById('main_frame').src="vr_main.html";
        document.getElementById('left_nav').src="vr_nav.html";
    }
    else if(n=='i') {
        document.getElementById('main_frame').src="interest_main.html";
        document.getElementById('left_nav').src="interest_nav.html";
    }
}