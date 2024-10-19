const { processTestCase } = require("./testCaseProcess");
const fs = require("fs");
const main = () => {
    const input = JSON.parse(fs.readFileSync("data.json", "utf8"));

    input.testCases.forEach((testCase, index) => {
        const secret = processTestCase(testCase);
        console.log(`Secret for Test Case ${index + 1}: ${secret}`);
    });
};

main();
