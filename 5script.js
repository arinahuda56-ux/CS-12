
function countVowels(str) {
    const vowels = 'аеіоуюяиAEIOUYaeiouy';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

function showVowels() {
    const input = document.getElementById('vowelInput').value;
    document.getElementById('vowelResult').innerText = `Голосні: ${countVowels(input)}`;
}


function secondLargest(arr) {
    const uniqueArr = [...new Set(arr)]; 
    uniqueArr.sort((a,b) => b - a);
    return uniqueArr[1] !== undefined ? uniqueArr[1] : null;
}

function showSecondLargest() {
    const input = document.getElementById('secondLargestInput').value;
    const arr = input.split(',').map(Number);
    document.getElementById('secondLargestResult').innerText = `Друге найбільше число: ${secondLargest(arr)}`;
}

function isAnagram(str1, str2) {
    const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

function showAnagram() {
    const str1 = document.getElementById('anagramInput1').value;
    const str2 = document.getElementById('anagramInput2').value;
    document.getElementById('anagramResult').innerText = isAnagram(str1, str2) ? 'Так, анаграми' : 'Ні, не анаграми';
}

function twoSum(arr, target) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[arr[i]] = i;
    }
    return null;
}

function showTwoSum() {
    const arr = document.getElementById('twoSumArray').value.split(',').map(Number);
    const target = Number(document.getElementById('twoSumTarget').value);
    const result = twoSum(arr, target);
    document.getElementById('twoSumResult').innerText = result ? `Індекси: [${result}]` : 'Немає пари';
}

function isPalindrome(str) {
    const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return clean === clean.split('').reverse().join('');
}

function showPalindrome() {
    const str = document.getElementById('palindromeInput').value;
    document.getElementById('palindromeResult').innerText = isPalindrome(str) ? 'Це паліндром' : 'Не паліндром';
}

