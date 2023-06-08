// Code your solutions in this file

function writeCards(name, event) {
  const message = [];
  for (let i = 0; i < name.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}

function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count--);
  }
}
