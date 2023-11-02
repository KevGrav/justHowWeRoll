/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6 = document.querySelector('#d6-roll')
const doubleD6 = document.querySelectorAll('.double.d6.roll')
const d12 = document.querySelector('#d12-roll')
const d20 = document.querySelector('#d20-roll')





/*******************
 * EVENT LISTENERS *
 *******************/
d6.addEventListener('click', () =>{
  let counter = 0;
  let random;
  const num = setInterval(() => {
    random = getRandomNumber(6)
    d6.src = `./images/d6/${random}.png`
    counter++
    if (counter >= 10){
      clearInterval(num)
      sixes.push(random)
      document.querySelector('#d6-rolls-mode').innerText = findMode(sixes)
    }
  }, 30)

})

const roll6s = () =>
{
  let roll1 = getRandomNumber(6)
  let roll2 = getRandomNumber(6)
  let roll = roll1 + roll2
  doubleSixes.push(roll)
  doubleD6[0].src = `./images/d6/${roll1}.png`
  doubleD6[1].src = `./images/d6/${roll2}.png`
}
 doubleD6.forEach((die) => {
  die.addEventListener('click', roll6s)
})

d12.addEventListener('click', () =>{
  const random = getRandomNumber(12)
  d12.src = `./images/numbers/${random}.png`
  twelves.push(random)
})

d20.addEventListener('click', () =>{
  const random = getRandomNumber(20)
  d20.src = `./images/numbers/${random}.png`
  twenties.push(random)
})


/******************
 * RESET FUNCTION *
 ******************/
document.querySelector('#reset-button').addEventListener('click', reset)

function reset(){
  console.log('called')
  d6.src = './images/start/d6.png'
  doubleD6.forEach((die) => die.src = './images/start/d6.png')
  d12.src = './images/start/d12.jpeg'
  d20.src = './images/start/d20.jpg'
  while(sixes.length > 0){
    sixes.pop()
  }
  while(doubleSixes.length > 0){
    doubleSixes.pop()
  }
  while(twelves.length > 0){
    twelves.pop()
  }
  while(twenties.length > 0){
    twenties.pop()
  }
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
