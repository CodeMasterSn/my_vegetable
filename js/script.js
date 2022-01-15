/* sticky navbar */

window.addEventListener('scroll', function () {
    let stickyNav = document.querySelector('nav');
    stickyNav.classList.toggle('sticky-nav', window.scrollY > 0)
})

/* button to scroll the top */

let ButtonScrool = document.getElementById("btnScroll");

/* when the user scroll down 20px from the top of the document, show the button */

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        ButtonScrool.style.display = "block";
    }else{
        ButtonScrool.style.display = "none"
    }
}

/* now when the user clicks on the button, scroll to the top document */
function topFunction (){
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, IE and Opera
}