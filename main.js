var toggle = document.getElementById("gt_toggle");
var showMenu = document.getElementById("gt_show-menu");
var iconClose = document.getElementById("gt_icon-close");
var buttonResults = document.getElementById("gt_button-results");
var bgOverlay = document.getElementsByTagName("body")[0];


toggle.onclick = function () {
    showMenu.classList.toggle("show");
    bgOverlay.classList.toggle("bg-overlay");
    toggle.classList.toggle("hide");
}

function closeNav(){
     showMenu.classList.remove("show");
     bgOverlay.classList.remove("bg-overlay");
     toggle.classList.remove("hide");
}

iconClose.onclick = function () {
    closeNav();
}

buttonResults.onclick = function () {
    closeNav();
}

document.onclick = function (e) {
if (e.target.tagName == 'HTML' || e.target.tagName == 'body') {
       closeNav();
    }
}