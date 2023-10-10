cursr=document.querySelector("#cursor")
bigCursr=document.querySelector("#cursorBlur")
document.addEventListener("mousemove",function(dets){
    cursr.style.left=dets.x+"px"
    cursr.style.top=dets.y+"px"
    bigCursr.style.left=dets.x-200+"px"
    bigCursr.style.top=dets.y+-200+"px"

})



// document.addEventListener("mousemove",function(dets){
//     // console.log(dets)
//     cursr.style.top=dets.y-150+"px"
//     cursr.style.left=dets.x-150+"px"

// })

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }


})

gsap.to("#main",{
    backgroundColor:"#000",
    // duration:0.5,
    // height:"110px",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }


})  
