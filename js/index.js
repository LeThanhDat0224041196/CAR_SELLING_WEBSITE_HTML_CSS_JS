let menu = document.querySelector("#menu-button");
let navbar = document.querySelector('.navbar');

// Bật tắt Nav-menu Responsive
menu.onclick = ()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active")
};

document.querySelector('#login-button').onclick = ()=>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = ()=>{
    document.querySelector('.login-form-container').classList.remove('active');
}


window.onscroll = ()=>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add("active");
    }else{
        document.querySelector('.header').classList.remove("active")
    };
};

window.onload = ()=>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add("active");
    }else{
        document.querySelector('.header').classList.remove("active")
    };
};


// Di chuyển Carousel theo hướng chuột
document.querySelector(".home").onmousemove = (e)=>{
    document.querySelectorAll(".home-parallax").forEach(elm => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed)/90;
        let y = (window.innerWidth - e.pageY * speed)/90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
};

// Dừng chuyển Carousel khi rời chuột khỏi màn Carousel
document.querySelector(".home").onmouseleave = ()=>{
    document.querySelectorAll(".home-parallax").forEach(elm => {
        elm.style.transform = `translateX(0px) translateY(0px)`
    })
};
