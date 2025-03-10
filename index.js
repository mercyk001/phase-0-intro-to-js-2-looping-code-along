function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(cards);



function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}