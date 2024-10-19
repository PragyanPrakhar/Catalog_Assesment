const lagrangeInterpolation = (points, k) => {
    let secret = 0;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        let term = yi;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                term *= (0 - xj) / (xi - xj); 
            }
        }

        secret += term;
    }

    return Math.round(secret); 
};

module.exports = { lagrangeInterpolation };
