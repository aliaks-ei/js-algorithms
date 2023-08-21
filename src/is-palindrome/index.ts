function isPalindrome(string: string): boolean {
  const validChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const charsArr = string.toLowerCase().split("");
  const lettersArr: string[] = [];

  charsArr.forEach((char) => {
    if (validChars.includes(char)) {
      lettersArr.push(char);
    }
  });

  const initialString = lettersArr.join("");
  const reverseString = lettersArr.reverse().join("");

  return initialString === reverseString;
}

export default isPalindrome;
