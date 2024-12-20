// function CounterLetter(text, letter) {
//   return text.split(letter).length - 1;
// }

function CounterLetter(text, letter) {
  let count = 0;
  for (let e of text) {
    if (e === letter) {
      count++;
    }
  }
  return count;
}

console.log(CounterLetter('sadfgfgsdfghfgfdghfdsghghshfghhsfdghhghshdfghhghds', 'h'));

export default CounterLetter


let array = [10, 20, 30, 40, 50];

for (let number of array) {
  console.log(number);   // خروجی: 10, 20, 30, 40, 50
}

let person = { name: "Hamid", age: 21, city: "Herat" };

for (let key in person) {
  console.log(key, person[key]);    // خروجی: name Hamid, age 21, city Herat
}
