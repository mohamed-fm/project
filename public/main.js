

const activePage = window.location.pathname;
console.group(activePage);
if(activePage === "/index"){
    document.querySelector(".home").classList.add("activee");
}
if(activePage === "/Our-mission/"){
    document.querySelector(".our").classList.add("activee");
}
if(activePage === "/artical/"){
    document.querySelector(".art").classList.add("activee");
}
if(activePage === "/join-us/"){
    document.querySelector(".join").classList.add("activee");
}


//category filter
let switcher = document.querySelectorAll(".ull li");
let posts = Array.from(document.querySelectorAll(".posts .post"));
let x = document.querySelector(".post");
console.log(x);
switcher.forEach((li)=>{
    li.addEventListener("click",removeactive);
    li.addEventListener("click",imgmanage);

});

function  removeactive() {
    switcher.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active");
        
    });
}



function imgmanage() {
    posts.forEach((x) =>{
        x.style.display="none";
    });
    console.log(document.querySelectorAll(this.dataset.cat));
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display="inherit";
    });
}

