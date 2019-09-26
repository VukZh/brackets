module.exports = function check(str, bracketsConfig) {
    const strArr = str.split("");
    const bracketsArr = [...bracketsConfig].filter(el => el[0] != el[1]);
    const bracketsArrIn = [];
    const bracketsArrOut = [];
    bracketsArr.map(el => {
        bracketsArrIn.push(el[0]);
        bracketsArrOut.push(el[1]);
    });
    const bracketsArrEqual = [];
    [...bracketsConfig]
        .filter(el => el[0] === el[1])
        .map(el => bracketsArrEqual.push(el[0]));
    // console.log("str " + strArr);
    // bracketsArrIn.map(el => console.log("in- " + el));
    // bracketsArrOut.map(el => console.log("out- " + el));
    // bracketsArrEqual.map(el => console.log("== " + el));
    const stackBrackets = [];
    let res = true;
    strArr.map(el => {
        // console.log("el " + el);
        if (bracketsArrIn.includes(el)) {
            stackBrackets.push(el);
            // console.log("push " + el);
        } else if (bracketsArrOut.includes(el)) {
            if (stackBrackets.length <= 0) {
                res = false;
                // console.log("false " + el);
                return;
            }
            const thisBrackets = stackBrackets.pop();
            if (
                bracketsArrIn.indexOf(thisBrackets) !=
                bracketsArrOut.indexOf(el)
            ) {
                res = false;
                // console.log("false " + el);
                return;
            }
        } else if (bracketsArrEqual.includes(el)) {
            // console.log(" Eq >>> " + el + "  " + stackBrackets.length + " = " + stackBrackets[length]);
            if (stackBrackets[stackBrackets.length - 1] === el) {
                // console.log("pop Eq " + el);
                stackBrackets.pop();
            } else {
                stackBrackets.push(el);
                // console.log("push Eq " + el);
            }
        }
    });
    if (stackBrackets.length > 0) {
        // console.log("stackBrackets.length " + stackBrackets.length);
        res = false;
    }
    // console.log("res " + res + " " + stackBrackets.length);
    return res;
};
