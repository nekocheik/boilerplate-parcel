
<<<<<<< HEAD


//Color generation:
function colorize() {
  return Math.floor(Math.random() * 200 + 20);
}

function colorSet() {
  var html = "rgb(";
  var blue = colorize();
  var green = colorize();
  var red = colorize();
  if (blue + green + red < 100 || blue + green + red > 700) {
    colorSet();
  } else {
    return (html += red + "," + green + "," + blue + ")");
  }
}

const body = document.querySelector('main');

for (let i = 0; i < 100 ; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = `${colorSet()}`;
  body.append(div)
}


require('./scrollToPluging');
const gsap = require('gsap');
const TweenMax = gsap.TweenMax;


class scrollControlled {
  constructor( scrollSpeed , pageLength , parent = document.querySelector('body').children[0] ){
    this.scrollSpeed = scrollSpeed;
    this.canWheel = true;
    this.index = 1;
    this.pageLength = pageLength ;
    this.newPosition  = pageLength;
    TweenMax.set( window ,{scrollTo: 0});
    this.newPosition = null;
    this.parent = parent ;
    this.view();
  }
  
  view(){

    this.parent.addEventListener('mousewheel' , (e)=>{
      this.scroll( Math.sign(e.deltaY) )
      e.preventDefault(); 
    });

   }
    
  
  scroll( direction ){

    if( !this.canWheel || ( ( this.index <= 1 ) && !direction ) ){ return };
    if ( direction > 0 ) {
      this.index++;
      this.newPosition += this.pageLength  ;
    }else{
      this.index--;
      this.newPosition -= this.pageLength ; 
    }
    // console.log( this.newPosition , this.scrollSpeed  )
    this.canWheel = false;
    setTimeout(()=>{ this.canWheel = true },1000);
    TweenMax.to( window , this.scrollSpeed ,{ scrollTo: this.newPosition , ease: Power3.easeOut});
  }
}


new scrollControlled( 0.2  , window.innerHeight , document.querySelector('main') )





//CHANGE SCROLL SPEED
// let scrollSpeed = 1.2;

// function scroll(){
//   let index = 0;
//   let canWheel = true;

//   TweenMax.set(window,{scrollTo: 0});

//   let nbPage = document.querySelectorAll("section").length;

//   function setIndex(newIndex){

//     if(canWheel){
//       if(newIndex >= 0 && newIndex < nbPage){
//         index = newIndex;
//       }else{
//         return;
//       }

//       canWheel = false;
//       setTimeout(()=>{ canWheel = true },1000);

//       let tween = TweenMax.to(window, scrollSpeed ,{scrollTo: index * window.innerHeight, ease: Power3.easeOut});
//       tween.eventCallback("onStart",function(){
//         animation(index);
//       });
//     }

//   }

//   //SCROLL
//   window.onwheel = function(e){
//     e.preventDefault();
//     console.log('ok')
//     // setIndex(index + Math.sign(e.deltaY));
//   }

//   setIndex(0);
// }

// // export { draw } ;
=======
>>>>>>> cdece75dfabac0aa41a063270c0ecafd53a329c4
