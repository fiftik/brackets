module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) return false;

    var brackets = [];

    [...str].forEach(function (strBracket, i, [...str]) {
        bracketsConfig.forEach(function (bracketRegex, j, bracketsConfig) {
            if (bracketRegex[0] !== bracketRegex[1] && bracketRegex[0] === strBracket) {
                brackets.push(j);
            } else if (bracketRegex[1] === strBracket && brackets[brackets.length - 1] === j) {
                brackets.pop();
            } else if (bracketRegex[0] === bracketRegex[1] && bracketRegex[0] === strBracket) {
                brackets.push(j);
            }
        });
    });

    if (brackets.length >= 1) {
        return false;
    }
    
    if (brackets.length == 0) {
        return true;
    }
   
}
