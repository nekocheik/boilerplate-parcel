


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

const body = document.querySelector('body');

for (let i = 0; i < 100 ; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = `${colorSet()}`;
  body.append(div)
}







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