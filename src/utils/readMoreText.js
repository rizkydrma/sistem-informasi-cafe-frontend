const readMoreText = (words, start, end) => {
  const buttonReadMore = <button className="button">readmore</button>;
  const newWords = words.split(' ');
  newWords.splice(1, 0, buttonReadMore);
  console.log(newWords);
};

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque numquam nostrum maiores excepturi fuga ab? Blanditiis, placeat nam suscipit illum ipsam accusantium quos nobis quasi, distinctio sequi velit harum.';

// console.log(readMoreText(string, 0, 52));
readMoreText(string);

const array = [1, 2, 3, 5];
array.splice(4, 0, 4);
console.log(array);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
