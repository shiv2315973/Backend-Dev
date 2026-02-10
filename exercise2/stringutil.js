// Function to capitalize the first letter of a string
function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// Function to reverse a string
function reverse(str) {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
}

// Function to count vowels in a string
function countVowels(str) {
    if (typeof str !== 'string') return 0;
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// Export all functions
module.exports = {
    capitalize,
    reverse,
    countVowels
};