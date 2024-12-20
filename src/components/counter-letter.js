function CounterLetter(text, letter) {
  // return text.split(letter).length - 1;

  let count = 0;

  for (let e of text) {
    if (e === letter) count++;
  }

  return count;
}

console.log(CounterLetter('hhhhhhhdddd', 'h'));

export default CounterLetter;
