// (CC-NC-BY) 박종인 2019
// Tab Change
function tabchange(evt, content) {
    // 기존 Content 안보이게 하기
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" show active", "");
    }
    // 기존 Link 안보이게 하기
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Link 및 Content 보이게 하기
    document.getElementById(content).className += " show active";
    document.getElementById(content + "-link").className += " active";
}