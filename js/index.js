//Toggle NavItems section on clicking menu button
const menu = document.querySelector("button.menu");
const rightNav = document.querySelector("ul.right");
if(menu && rightNav)
menu.addEventListener("click",()=>{
rightNav.classList.toggle("show");
})

//Toggle filter section on clicking filter button
const filterButton = document.querySelector(".filter-btn");
const sidebar = document.querySelector("aside.sidebar");
if(filterButton && sidebar)
filterButton.addEventListener("click",()=>{
sidebar.classList.toggle("show");
})
