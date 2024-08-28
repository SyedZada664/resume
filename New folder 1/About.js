let tl = gsap.timeline();

gsap.from(".hero .right",{
    opacity:0,
    y:90,
    duration:1,
    delay:0.4
})

gsap.from(".sec1-left",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".sec1-left",
        scroll:"body",
        markers:true,
        start:"top 60%",
    }
})

