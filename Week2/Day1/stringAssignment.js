
function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    let lastWord = words[words.length - 1];
    return lastWord.length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to the moon "));


function isAnagram(first, second) {
    let word1 = first.toLowerCase().replaceAll(" ", "").split("").sort().join("");
    let word2 = second.toLowerCase().replaceAll(" ", "").split("").sort().join("");

    return word1 === word2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));