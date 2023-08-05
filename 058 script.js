const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'useg');

function calcOrDoubl(number, basis = 5) {
    console.log(number * basis);
}

calcOrDoubl(5);