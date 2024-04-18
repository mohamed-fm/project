const activePage = window.location.pathname;
if(activePage === "/home/"){
    document.querySelector(".home").classList.add("activee");
}
if(activePage === "/our-mission/"){
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


    switcher.forEach((li)=>{
        li.addEventListener("click",CAT);
    });

function CAT(){
    switcher.forEach((li)=>{
        li.addEventListener("click",removeactive);
        li.addEventListener("click",imgmanage);
    });
}
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
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display="flex";
    });
}

var swiper = new Swiper('.swiper',{
    // Optional parameters
    slidesPerView:2,
    spaceBetween: 30,
  
    // If we need pagination
   
    pagination: {
        el: '.swiper-pagination',
      },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
      }
  });


window.addEventListener("resize", function(event) {
    console.log(document.body.clientWidth)
    if (document.body.clientWidth < 800) {
        const swiper = new Swiper('.swiper',{
            // Optional parameters
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });   
        document.querySelector(".fe-small").style.margin = '0'     
    }
});