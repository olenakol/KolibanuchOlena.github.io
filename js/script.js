/* Tabs */ 
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

document.getElementById("defaultOpen").click();


/* Progress bar */
let scrollTop = window.scrollY;
let viewportHeight = document.body.clientHeight - window.innerHeight;
let scrollPercent = (scrollTop / viewportHeight) * 100;
let progressBar = document.querySelector('#js-progressbar');

progressBar.setAttribute('value', scrollPercent);

window.addEventListener('scroll', function() {
  scrollTop = window.scrollY;
  viewportHeight = document.body.clientHeight - window.innerHeight;
  scrollPercent = (scrollTop / viewportHeight) * 100;
  progressBar.setAttribute('value', scrollPercent);
});



