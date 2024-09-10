//1.check if a string is a palindrome
console.log('1.******Check if a string is a palindrome******');
function isPalidrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let string=cleanedStr.split('').reverse().join('');

    if (string === cleanedStr) {
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalidrome('A man, a plan, a canal: Panama'));
console.log(isPalidrome('Was it a car or a cat I saw?'));
console.log(isPalidrome('Hello, world!'));

//2.Reverse a string
console.log('2.******reverse a string*******')
function reverseString(str) {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr;
}
console.log(reverseString('Hi my name is Joy'));

// //3.Find the longest word in a string

// function longestPandromicSubstring(str){
//     let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let string=cleanedStr.split('');
//     console.log(string);

// }

// console.log(longestPandromicSubstring('babad'));

//4.Check if a string is a Anagram
console.log("4.******Anagram Check on string*******");
function areAnagrams(str1, str2) {
    let cleanedstr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    let cleanedstr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    let sorted1 = cleanedstr1.split('').sort().join('');
    let sorted2 = cleanedstr2.split('').sort().join('');

    if (sorted1 === sorted2) {
        return true;
    }else{
        return false;
    }

}
console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('hello', 'world'));

//5.Remove duplicate characters from a string
console.log("5.******Remove duplicate characters from a string******");
function removeDuplicates(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let uniqueStr = cleanedStr.split('').filter((char, pos, self) => self.indexOf(char) === pos).join('');
    return uniqueStr;
}
console.log(removeDuplicates('programming'));
console.log(removeDuplicates('hello world'));
console.log(removeDuplicates('aaaaa'));
console.log(removeDuplicates('abcd'));
console.log(removeDuplicates('aabbcc'));


//6.Count Palindromes in a string
// console.log("6.******Count Palindromes in a string******");
// function countPalidromesString(str){

// }
// console.log(countPalidromesString('ababa'));
// console.log(countPalidromesString('racecar'));
// console.log(countPalidromesString('aabb'));
// console.log(countPalidromesString('a'))
// console.log(countPalidromesString('abc'))

//7.Longest common Prefix
console.log('******Longest Common Prefix******');
function longestCommonPrefix(str){

}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix([]))

//8.Case insensitive parindrome
console.log("8.******Case Insensitive Parindrome******");
function isCaseInsensitiveParindrome(str){
    let cleanedStr=str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let string=cleanedStr.split('').reverse().join('');

    if (string === cleanedStr) {
        return true;
    }else{
        return false;
    }
}
console.log(isCaseInsensitiveParindrome('Aba'));
console.log(isCaseInsensitiveParindrome('Racecar'));
console.log(isCaseInsensitiveParindrome('Palindrome'));
console.log(isCaseInsensitiveParindrome('Madam'));
console.log(isCaseInsensitiveParindrome('Hello'));