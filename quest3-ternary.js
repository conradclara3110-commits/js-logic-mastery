const age = 18;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('Too young to vote.');
}

const score = 85;

if (score >= 90) {
  console.log('A grade');
} else if (score >= 80) {
  console.log('B grade');
} else if (score >= 70) {
  console.log('C grade');
} else {
  console.log('Keep studying!');
}

function checkNumber(num) {
  if (num > 0) {
    return 'Positive number';
  } else if (num < 0) {
    return 'Negative number';
  } else {
    return 'Zero';
  }
}

console.log(checkNumber(10)); 
console.log(checkNumber(-5)); 
console.log(checkNumber(0)); 
