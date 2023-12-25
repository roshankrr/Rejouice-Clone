function cursoreffect(){
    const cursor=document.querySelector("#cursor");
const body=document.querySelector('#page1-content');

body.addEventListener('mousemove',function(dets){

    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
})
body.addEventListener('mouseenter',function(dets){
    
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
body.addEventListener('mouseleave',function(dets){

    gsap.to(cursor,{
        scale:0,
        opactiy:0
    })
})


}
cursoreffect();

function anime0(){
    // var page1h1=document.querySelector("#loader h2");
    // const text=new SplitType('#loader h2');
    gsap.from("#loader h2",{
        x:100,
        opacity:0,
        stagger:2,
        // delay:4,
        duration:5,

    })
    gsap.to("#loader h2",{
        x:-100,
        opacity:0,
        // stagger:2,
        // delay:3,
        // duration:2,

    })
    gsap.to("#loader",{
        x:-100,
        delay:4,
        opacity:0,
        // stagger:2,
        // delay:0.6,
        // duration:2,

    })

}
anime0();


function page1anime(){
    var page1h1=document.querySelector("#page1-content h1");
    const text=new SplitType('#page1-content h1');
    gsap.from(".char",{
        y:100,
        opacity:0,
        stagger:0.09,
        delay:5,
        // duration:.1,

    })
    // alert("chlra hu ")
}
page1anime();


function smoothscroll(){
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
smoothscroll();

function page2anime(){
    gsap.from("hr",{
        x:-3000,
        // stagger:0.25,
        opacity:0,
        // delay:2,
        // duration:3,
        scrollTrigger:{
            trigger:'#page2',
            start:'top 90%',
            end:'top 60%',
            scrub:3,
            // markers:true
        }
    })
    gsap.from("#anim2",{
        y:150,
        stagger:0.25,
        opacity:0,
        // delay:1,
        // duration:4,
        scrollTrigger:{
            trigger:'#page2',
            start:'top 90%',
            end:'top center',
            scrub:3,
            // markers:true
        }
    })

    // alert("chlra hu ")
}
page2anime();


function anim3(){
    gsap.from("#anim3",{
        y:150,
        stagger:0.25,
        opacity:0,
        // delay:1,
        // duration:4,
        scrollTrigger:{
            trigger:'#page3',
            start:'top 90%',
            end:'top center',
            scrub:2,
            // markers:true
        }
    })
}
anim3();
function anim5(){
    gsap.from("#anim5",{
        y:150,
        stagger:0.25,
        opacity:0,
        // delay:1,
        // duration:4,
        scrollTrigger:{
            trigger:'#page5',
            start:'top 90%',
            end:'top center',
            scrub:2,
            // markers:true
        }
    })
}
anim5();
function anim6(){
    gsap.from("#anim6",{
        x:150,
        stagger:0.3,
        opacity:0,
        // delay:1,
        // duration:4,
        scrollTrigger:{
            trigger:'#page6',
            start:'top 40%',
            end:'top center',
            scrub:6,
            // markers:true
        }
    })
}
anim6();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });

//   function end(){
//     gsap.from("#last",{
//         y:-100,
//         opacity:0,
//         stagger:1,
//         delay:0.3,
//         scrollTrigger:{
//             trigger:'#content',
//             start:'top 10%',
//             end:'end 60%',
//             scrub:true,
//             markers:true
//         }
//         // duration:.1,

//     })
//     // alert("chlra hu ")
// }
// end();


function animend(){
    gsap.from("#animend .last",{
        y:-100,
        opacity:0,
        stagger:0.09,
        delay:0.3,
            scrollTrigger:{
            trigger:'#content',
            start:'top 20%',
            end:'end 50%',
            scrub:3,
            // markers:true
        }
        // duration:.1,

    })
    // alert("chlra hu ")
}
animend();
function cursoreffect2(){
    const cursor=document.querySelector("#cursor2");
const body=document.querySelector('#page5-content');

body.addEventListener('mousemove',function(dets){

    gsap.to(cursor,{
        x:dets.x-600,
        y:dets.y-300,
    })
})
body.addEventListener('mouseenter',function(dets){
    
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
body.addEventListener('mouseleave',function(dets){

    gsap.to(cursor,{
        scale:0,
        opactiy:0
    })
})


}
cursoreffect2();