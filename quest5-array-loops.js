for (let i = 0; i < 5; i++) {
  console.log('Count: ' + i);
}

const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => {
  console.log(fruit);
});

const names = ['Alex', 'Jordan', 'Taylor', 'Chris', 'Sam'];

for (let i = 0; i < names.length; i++) {
  console.log('Hello, ' + names[i] + '!');
}

names.forEach(name => {
  console.log(`Hello, ${name}!`);
});
