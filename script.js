var tl=gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"38% 50%",
    end:"100% 40%",
    scrub:2,
    pin:true,
    // markers:true
}});
tl
.to(".text",{
    top:"-7%",

},'a')
tl
.to("#card-one",{
    top:"35%",

},'a')
tl.to
("#card-two",{
    top:"130%",

},'a')
tl.to("#card-two",{
    top:"42%",
},'b')
tl.to
("#card-one",{
    width: "65%",
    height: "65vh"
},'b')

tl.to
("#card-three",{
    top:"130%"
},'b')

tl.to
("#card-three",{
    top:"50%"
},'c')
tl.to
("#card-two",{
    width: "70%",
    height: "70vh"
},'c')


tl.to
("#card-three",{
    width: "75%",
    height: "75vh"
},'d')
tl.to
("#card-four",{
    top:"65%"
},'d')