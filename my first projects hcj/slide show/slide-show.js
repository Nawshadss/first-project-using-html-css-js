const slideshowElements=document.querySelectorAll(".slideshow_element");

let countelement=1


setInterval( ()=>{
    countelement++;
    let current= document.querySelector(".current");

    current.classList.remove("current");
    if(countelement>slideshowElements.length){
        slideshowElements[0].classList.add("current")
        countelement=1
    }else{
        current.nextElementSibling.classList.add("current");
    }
    
     

},1500)