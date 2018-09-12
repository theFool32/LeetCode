// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
//
// Example 1:
//
//
// Input: 11
// Output: 3
// Explanation: Integer 11 has binary representation 00000000000000000000000000001011 
//
//
// Example 2:
//
//
// Input: 128
// Output: 1
// Explanation: Integer 128 has binary representation 00000000000000000000000010000000
//
//


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if (n === 0) return 0;
    var c = 0;
    while (n !== 0) {
        ++c;
        n &= (n-1);
    }
    return c;
};
