function openCity(evt, chapter) {
    var i, sectioChapter, navBtn;
    sectioChapter = document.getElementsByClassName("section-chapter");
    for (i = 0; i < sectioChapter.length; i++) {
        sectioChapter[i].style.display = "none";
    }
    navBtn = document.getElementsByClassName("nav-btn");
    for (i = 0; i < navBtn.length; i++) {
        navBtn[i].className = navBtn[i].className.replace(" active", "");
    }
    document.getElementById(chapter).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();