export default function sortProperties(character, sortArray) {
  let result = sortArray;
  const remains = [];

  for (const key in character) {
    if (!sortArray.includes(key)) {
      remains.push(key);
    }
  }

  remains.sort();
  result = [...sortArray, ...remains].map((key) => ({ key, value: character[key] }));

  return result;
}
