/**
 * @param {string[]} result
 * @param {string} currentStr
 * @param {number} left    the count of '{'
 * @param {number} index   from 1
 * @param {number} n
 */
var procedure = function(result,currentStr,left,index,n) {
    if (left >= n / 2) {
        for (var i = index;i <= n;++i) {
            currentStr += ')';
        }
        currentStr && result.push(currentStr);
        return;
    }
    procedure(result,currentStr+'(',left+1,index+1,n);
    if (index <= left * 2) {
        procedure(result,currentStr+')',left,index+1,n);
    }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    procedure(result,'',0,1,n*2);
    return result;
};
var procedure = function(result,currentStr,left,index,n) {
    if (index > n) {
        currentStr && result.push(currentStr);
        return;
    }
    if (left >= n / 2) {
        for (var i = index;i <= n;++i) {
            currentStr += ')';
        }
        currentStr && result.push(currentStr);
        return;
    }
    procedure(result,currentStr+'(',left+1,index+1,n);
    if (index <= left * 2) {
        procedure(result,currentStr+')',left,index+1,n);
    }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    procedure(result,'',0,1,n*2);
    return result;
};
var procedure = function(result,currentStr,left,index,n) {
    if (left >= n / 2) {
        for (var i = index;i <= n;++i) {
            currentStr += ')';
        }
        currentStr && result.push(currentStr);
        return;
    }
    procedure(result,currentStr+'(',left+1,index+1,n);
    if (index <= left * 2) {
        procedure(result,currentStr+')',left,index+1,n);
    }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    procedure(result,'',0,1,n*2);
    return result;
};
