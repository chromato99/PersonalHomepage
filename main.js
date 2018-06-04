function head_nav(n) 
{
    if(n=='m') {
        $("#main_frame").load("main.html");
        document.getElementById('main_frame').style.backgroundColor="#191919";
        document.getElementById('main_frame').style.color="#efefef";
        document.getElementById('left_nav').src="dummy.html";
    }
    else if(n=='p') {
        $("#main_frame").load("profile_main.html");
        document.getElementById('main_frame').style.backgroundColor="#efefef";
        document.getElementById('main_frame').style.color="#191919";
        document.getElementById('left_nav').src="profile_nav.html";
    }
    else if(n=='c') {
        $("#main_frame").load("cPro_main.html");
        document.getElementById('main_frame').style.backgroundColor="#efefef";
        document.getElementById('main_frame').style.color="#191919";
        document.getElementById('left_nav').src="cPro_nav.html";
    }
    else if(n=='w') {
        $("#main_frame").load("web_main.html");
        document.getElementById('main_frame').style.backgroundColor="#efefef";
        document.getElementById('main_frame').style.color="#191919";
        document.getElementById('left_nav').src="web_nav.html";
    }
    else if(n=='v') {
        $("#main_frame").load("vr_main.html");
        document.getElementById('main_frame').style.backgroundColor="#efefef";
        document.getElementById('main_frame').style.color="#191919";
        document.getElementById('left_nav').src="vr_nav.html";
    }
    else if(n=='i') {
        $("#main_frame").load("interest_main.html");
        document.getElementById('main_frame').style.backgroundColor="#efefef";
        document.getElementById('main_frame').style.color="#191919";
        document.getElementById('left_nav').src="interest_nav.html";
    }
}