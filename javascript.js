function navdetails(){
    let tf = gsap.timeline();

    // tf.from(".logo", {
    //     duration: 0.5,
    //     opacity:0,
    //     x:-100,
    // },0);

    // tf.from(".contact-button", {
    //     duration: 1,
    //     opacity:0,
    //     x:100,
    // },0);

    // tf.from(".nav-links", {
    //     duration: 0.5,
    //     opacity:0,
    //     y:-100,
    // });

    tf.from(".navbar", {
        duration: 1,
        opacity: 0,
        y:-100,
    });


    tf.from(".mydetails h4", {
        duration: 0.8,
        opacity: 0,
        x:-100,
        color: "#2ECC71",
    });

    tf.from(".mydetails p", {
        duration: 0.8,
        opacity:0,
        x:-100,
    },"w");
    tf.from(".mydetailsimg img", {
        duration: 2.4,
        opacity:0,
    },"w");

}
navdetails();

gsap.to(".box h3", {
    x: "-50%", // Animates the horizontal translation
    scrollTrigger: {
        trigger: ".box",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 10,
        pin: true,
    },
});


let cursor = document.querySelector('#cursor');
let main = document.querySelector('#main');


main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x: dets.clientX, // Use `clientX` for viewport-relative coordinates
        y: dets.clientY-80, // Use `clientY` for viewport-relative coordinates
    })
})
