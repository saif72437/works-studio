function firstAnimation() {
    var tl = gsap.timeline();
tl.to(".yellow1", {
    y: "-100%",
    duration: 0.5,
    delay: 3,
    ease: "expo.out"
})
tl.to(".loader video", {
    y: "-100%",
    duration: 1,
    ease: "expo.out"

})
tl.to(".loader .yellow2", {
    opacity: 0,
    delay:0.2,
    ease: "expo.out"

})
tl.to(".loader", {
    opacity:0,
    
})
tl.to(".loader", {
    display:"none",

})
}

firstAnimation();


// document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
// });

let part2 = document.querySelector(".part2")
let elem = document.querySelectorAll(".elem")

elem.forEach(element => {
    element.addEventListener("mouseover", ()=>{
        let img = element.getAttribute("data-img");
       part2.style.backgroundImage = `url(${img})`
    })
});


let backtotop = document.querySelectorAll(".backtotop")
backtotop.forEach((e) =>{
    e.addEventListener("click", ()=>{
        console.log("hello");
        scroll.scrollTo(0)
    })
})
