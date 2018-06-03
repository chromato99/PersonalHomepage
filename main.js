function head_nav(n) 
{
    if(n=='m') {
        document.getElementById('main_frame').src="main.html";
    }
    else if(n=='p') {
        document.getElementById('main_frame').src="profile_form.html";
    }
    else if(n=='c') {
        document.getElementById('main_frame').src="cPro_form.html";
    }
    else if(n=='w') {
        document.getElementById('main_frame').src="web_form.html";
    }
    else if(n=='v') {
        document.getElementById('main_frame').src="vr_form.html";
    }
    else if(n=='i') {
        document.getElementById('main_frame').src="interest_form.html";
    }
}

function iframeAutoResize(h) {
    if(h==null) {
        return false;
    }

    h.height = "0px";
    var iframeHeight = h.contentWindow.document.body.scrollHeight;
    h.height = iframeHeight;
}