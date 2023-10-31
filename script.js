gsap.to("#nav",{
    backgroundColor:"rgba(10, 211, 229)",
    duration:10,
    height:"18vh",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#intro #pic img",{
    position:"fixed",
    top:"0",
    right:"0",
    scale:0.4,
    // borderRadius:"5%",
    clipPath: "circle(50%)",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})