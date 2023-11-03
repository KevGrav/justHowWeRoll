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
      document.querySelector('#d6-rolls-mean').innerText = findMean(sixes)
      document.querySelector('#d6-rolls-median').innerText = findMedian(sixes)
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
  document.querySelector('#double-d6-rolls-mean').innerText = findMean(doubleSixes)
  document.querySelector('#double-d6-rolls-median').innerText = findMedian(doubleSixes)
  document.querySelector('#double-d6-rolls-mode').innerText = findMode(doubleSixes)
}
 doubleD6.forEach((die) => {
  die.addEventListener('click', roll6s)
})

d12.addEventListener('click', () =>{
  const random = getRandomNumber(12)
  d12.src = `./images/numbers/${random}.png`
  twelves.push(random)
  document.querySelector('#d12-rolls-mean').innerText = findMean(twelves)
  document.querySelector('#d12-rolls-median').innerText = findMedian(twelves)
  document.querySelector('#d12-rolls-mode').innerText = findMode(twelves)
})

d20.addEventListener('click', () =>{
  const random = getRandomNumber(20)
  d20.src = `./images/numbers/${random}.png`
  twenties.push(random)
  document.querySelector('#d20-rolls-mean').innerText = findMean(twenties)
  document.querySelector('#d20-rolls-median').innerText = findMedian(twenties)
  document.querySelector('#d20-rolls-mode').innerText = findMode(twenties)
})


/******************
 * RESET FUNCTION *
 ******************/
//reset button should have a click listener to reset all data and the whole interface.
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
  document.querySelector('#d6-rolls-mean').innerText = NA
  document.querySelector('#d6-rolls-median').innerText = NA
  document.querySelector('#d6-rolls-mode').innerText = NA

  while(doubleSixes.length > 0){
    doubleSixes.pop()
  }
  document.querySelector('#double-d6-rolls-mean').innerText = 'NA'
  document.querySelector('#double-d6-rolls-median').innerText = NA
  document.querySelector('#double-d6-rolls-mode').innerText = NA

  while(twelves.length > 0){
    twelves.pop()
  }
  document.querySelector('#d12-rolls-mean').innerText = NA
  document.querySelector('#d12-rolls-median').innerText = NA
  document.querySelector('#d12-rolls-mode').innerText = NA
  
  while(twenties.length > 0){
    twenties.pop()
  }
  document.querySelector('#d20-rolls-mean').innerText = NA
  document.querySelector('#d20-rolls-median').innerText = NA
  document.querySelector('#d20-rolls-mode').innerText = NA
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
//mean = total sum of rolls / number of rolls
function findMean(arr){
  let sum = arr.reduce((a,b) => a + b, 0);
  return sum/arr.length;
}

//median = mid point of low to high string
function findMedian(arr){
  const arrSorted = arr.sort((a,b) => a - b);
  return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 -1] + arrSorted[arrSorted.length/2]) /2 : arrSorted[Math.floor(arrSorted.length/2)];
}

//mode = most frequent roll
function findMode(arr){
  let countObj = {};
  for(let roll of arr){
    if(countObj[roll]){
      countObj[roll]++
    }else{
      countObj[roll] = 1;
    }
  }
  let mode = [];
  let highestQuantity = 0;
  for(let key in countObj){
    if(countObj[key] > highestQuantity){
      highestQuantity = countObj[key];
      mode = [key];
    }else if(countObj[key] === highestQuantity){
      mode.push(key)
    }
  }
  console.log(countObj, highestQuantity)
  return mode
}
reset();

