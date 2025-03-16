// 4. Remove first occurrence of a given "search string"
function removeFirstOccurrence(str, searchStr) {
  return str.replace(searchStr, '');
}
console.log(
  `"Hello world" without "ell" → "${removeFirstOccurrence(
    'Hello world',
    'ell'
  )}"`
);
