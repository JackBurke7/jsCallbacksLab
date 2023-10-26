// Exercise 1
function writeDing() {
    console.log('Ding!');
  }
  
  let timerId = setTimeout(writeDing, 3000);
  
// Exercise 2
const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];
  
function compareWords(a, b) {
  return a.length - b.length;
}
  
  words.sort(compareWords);
  
  console.log(words); 

// Exercise 3
const longWords = words.filter(word => word.length >= 7);
  
  console.log(longWords); 

  // Exercise 4
function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
  
const colors = ['red', 'green', 'blue', 'purple'];
  
function log(elem, idx) {
    console.log(`Index: ${idx} / Element Value: ${elem}`);
}
  
forEach(colors, log);
  
  // Exercise 5
function step1(cb) {
  setTimeout(function () {
  console.log('STEP 1 COMPLETE');
    cb(step2);
  }, 750);
}
  
function step2(cb) {
    setTimeout(function () {
    console.log('STEP 2 COMPLETE');
      cb(step3);
    }, 500);
}
  
function step3(cb) {
    setTimeout(function () {
    console.log('STEP 3 COMPLETE');
      cb(finish);
    }, 250);
}
  
function finish() {
    console.log('FINISHED');
}
  
  step1(step2);
  
  // Bonus
function countdown(seconds) {
  for (let i = seconds; i >= 0; i--) {
    setTimeout(function () {
    console.log(`Count: ${i}`);
    }, (seconds - i) * 1000);
  }
}
  
  countdown(3);
  