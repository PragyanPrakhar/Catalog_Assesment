const { lagrangeInterpolation } = require("./Lagrange");

const decodeValue = (base, value) => {
    //Here I am converting from base to integer
    return parseInt(value, base);
};
const processTestCase = (testCase) => {
    const keys = testCase.keys;
    const n = keys.n;
    const k = keys.k;

    // I am Collecting points from the test case
    let points = [];
    for (let i = 1; i <= n; i++) {
        const point = testCase[i.toString()];
        if (point) {
            const base = parseInt(point.base, 10);
            const value = point.value;
            const decodedY = decodeValue(base, value);
            points.push({ x: i, y: decodedY });
        }
    }

    if (points.length < k) {
        throw new Error("Not enough points for interpolation");
    }

    // I am Using Lagrange interpolation to find the constant term 'c'
    const secret = lagrangeInterpolation(points, k);
    return secret;
};
module.exports = { processTestCase };
