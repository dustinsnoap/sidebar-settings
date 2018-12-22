window.onload = function () {
    hide_sidebar();
    //set up listeners
    startListeners();
}

function hide_sidebar() {
    let sidebar = document.getElementById("sidebar");
    let sidebar_width = sidebar.offsetWidth;
    sidebar.setAttribute("style", "right: " + -sidebar_width);
}
function show_sidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.setAttribute("style", "right: 0");
}

function startListeners() {
    document.getElementById("sidebar_show").addEventListener("click",show_sidebar);
    document.getElementById("sidebar_hide").addEventListener("click",hide_sidebar);
}