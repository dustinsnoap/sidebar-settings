window.onload = function () {
    // hide_sidebar();
    show_sidebar();
    //set up listeners
    startListeners();
}
function hide_sidebar() {
    let sidebar = document.getElementById("sidebar");
    let sidebar_width = sidebar.offsetWidth;
    sidebar.style.right = -sidebar_width;
}
function show_sidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.right = 0;
}
function startListeners() {
    document.getElementById("sidebar_show").addEventListener("click",show_sidebar);
    document.getElementById("main").addEventListener("click",hide_sidebar);
    document.getElementById("main").addEventListener("keyup",function(el){
        if(el.keyCode == 27) hide_sidebar();
    });
    document.getElementById("sidebar-transparency").addEventListener("input", update_sidebar_transparency);
    document.getElementById("sidebar-animation").addEventListener("click",update_sidebar_animation);
}
// Display Settings
function update_sidebar_transparency() {
    let val = document.getElementById("sidebar-transparency").value;
    let sidebar = document.getElementById("sidebar");
    sidebar.style.backgroundColor = "rgba(0,0,0," + val/100 + ")";
}
function update_sidebar_animation() {
    let on = document.getElementById("sidebar-animation").checked;
    let sidebar = document.getElementById("sidebar");
    on ? sidebar.style.transition = ".42s" : sidebar.style.transition = "0s";
}