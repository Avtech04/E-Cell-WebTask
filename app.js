//for hamburger menu
const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


//count downer for contest 1

  var countDownDate = new Date("Oct 5, 2022 15:37:25").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
   var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDown").innerHTML = "EXPIRED";
    }
  }, 1000);


  //count downer for contest2
  var countDownDate1 = new Date("Oct 6, 2022 15:37:25").getTime();

  var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate1 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countDown1").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDown1").innerHTML = "EXPIRED";
    }
  }, 1000);



//for carousel

!(function(pic){
   
    var itemClassName = "carouselPhoto";
      items =pic.getElementsByClassName(itemClassName),
      totalItems = items.length,
      slide = 0,
      moving = true;
     
  function setInitialClasses() {
    
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }
 
  function setEventListeners() {
    var next = pic.getElementsByClassName('carousel__button--next')[0],
        prev =pic.getElementsByClassName('carousel__button--prev')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }
 
  function moveNext() {

    if (!moving) {
     
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }
     
      moveCarouselTo(slide);
    }
  }
  
  function movePrev() {
    
    if (!moving) {
        if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }
            
      
      moveCarouselTo(slide);
    }
  }
  function disableInteraction() {
 
    moving = true;
      setTimeout(function(){
      moving = false
    }, 500);
  }
  function moveCarouselTo(slide) {
    if(!moving) {
        disableInteraction();
       var newPrevious = slide - 1,
          newNext = slide + 1,
          oldPrevious = slide - 2,
          oldNext = slide + 2;
         if ((totalItems - 1) > 3) {
         if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)){
          oldNext = 0;
        }
       
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (slide + 1);
        } else if (slide === (totalItems -1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }

        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
       
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }
  function initCarousel() {
    setInitialClasses();
    setEventListeners();
     moving = false;
  }
  

  initCarousel();
  }(document));