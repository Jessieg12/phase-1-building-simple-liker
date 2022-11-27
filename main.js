// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// document.addEventListener('DOMContentLoaded', (e) => {
//   e.preventDefault()

  const hidden = document.querySelector("#modal").className = 'hidden'
  

  const clickHeart = document.querySelectorAll('.like-glyph')
  for(const empHeart of clickHeart)
  empHeart.addEventListener('click', clickEvent)



  
  function clickEvent(e){
    const clickedTarget = e.target
    mimicServerCall()
    .then((data)=> {
      if(clickedTarget.innerText === EMPTY_HEART){
        clickedTarget.innerText = FULL_HEART
        clickedTarget.className = "activated-heart"
    } else {
        (clickedTarget.innerText === FULL_HEART)
        clickedTarget.innerText = EMPTY_HEART
        clickedTarget.className = "like-glyph"
        }
    })
    .catch((error)=> {
      hidden.className = ' '
      hidden.innerHTML = error
      setTimeout(() => hidden.className = 'hidden', 3000)
    })
  }



  // clickHeart.addEventListener('click', 
  //   mimicServerCall('urlRequest')
  //   .then(() => {
  //     if (clickHeart.innerText === EMPTY_HEART)
  //       clickHeart.innerText = FULL_HEART
  //       clickHeart.class = 'activated-heart'
  //   })
  //   .catch((error)=> {


  //   })
  // )




























//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// })
