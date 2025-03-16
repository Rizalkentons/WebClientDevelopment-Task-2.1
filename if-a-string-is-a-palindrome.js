// 5. Check if a string is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(`'madam' → palindrome: ${isPalindrome('madam')}`);
