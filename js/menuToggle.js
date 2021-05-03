function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

let x = document = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


// Fixed Nav
 
// var scrollBefore = 0;
// window.addEventListener('scroll', function(e){
//    const scrolled = window.scrollY;
//    if(scrollBefore > scrolled){
//        console.log("ScrollUP");
//        scrollBefore = scrolled;
//        document.getElementById("navbar").className =document.getElementById("navbar").className.replace(/(?:^|\s)fixed-nav(?!\S)/g , '');
//    }else{
//        scrollBefore = scrolled;
//        console.log("ScrollDOWN");
//        document.getElementById("navbar").className += " fixed-nav";
//    }
//}) 


