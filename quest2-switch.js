function addTraditional(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

console.log(add(5, 3)); 

const double = x => x * 2;

console.log(double(4)); 

const greet = name => {
  const message = `Hello, ${name}!`;
  return message;
};

console.log(greet('Alex'));  

function square(num) {
  return num * num;
}

const squareArrow = num => num * num;

console.log(squareArrow(5)); 
