let hamburger=document.querySelector(".hamburger")
let nav_list=document.querySelector(".nav-list")
hamburger.addEventListener("click",()=>{
    if(hamburger.classList.contains("fa-bars")){
        nav_list.style.right="0px"
        hamburger.classList.remove("fa-bars")
        hamburger.classList.add("fa-x")}


        else{
            nav_list.style.right="-300px"
            hamburger.classList.remove("fa-x")
            hamburger.classList.add("fa-bars")
        }
    })
 
