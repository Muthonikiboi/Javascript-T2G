
// const {isPalindrome} = require('./script');
const { reverseString, areAnagrams ,isPalindrome ,removeDuplicates , isCaseInsensitiveParindrome} = require('./script');

//1.isParindrome
test('Parindrome Test',()=>{
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    expect(isPalindrome('Hello, world!')).toBe(false);
})

//2. Reverse String
test('Reverse String Test', () => {
    expect(reverseString('Hi my name is Joy')).toBe('yoJ si eman ym iH');
})

//4. Anagram Check
test('Anagram Test', () => {
    expect(areAnagrams("listen", "silent")).toBe(true);
    expect(areAnagrams("hello", "world")).toBe(false);
});

//5.Remove duplicate characters
test('Remove Duplicate Characters', () =>{
    expect(removeDuplicates('programming')).toBe('progamin')
    expect(removeDuplicates('hello world')).toBe('helowrd')
    expect(removeDuplicates('aaaaa')).toBe('a')
    expect(removeDuplicates('abcd')).toBe('abcd')
    expect(removeDuplicates('aabbcc')).toBe('abc')
})

//8.Case Insensitive Prindrome
test('Case Insensitive Parindrome Test', () =>{
    expect(isCaseInsensitiveParindrome('Aba')).toBe(true);
    expect(isCaseInsensitiveParindrome('Racecar')).toBe(true);
    expect(isCaseInsensitiveParindrome('Palindrome')).toBe(false);
    expect(isCaseInsensitiveParindrome('Madam')).toBe(true);
    expect(isCaseInsensitiveParindrome('Hello')).toBe(false);
})
