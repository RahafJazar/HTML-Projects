//BDD (Pow function Spec) =>description

describe("pow", function () {
    describe("raises x to power 3 ", function () {
        function makeTest(x) {
            //let's test power 3 
            let expectedRes = x * x * x;
            it(`${x} raises to 3 is ${expectedRes}`, function () {
                assert.equal(pow(x, 3), expectedRes);
            })
        }
        for (let x = 1; x < 10; x++) {
            makeTest(x);
        }
    })
    describe("raises x to power 5 ", function () {
        before(() => { console.log("Testing started - before all tests ") })
        after(() => { console.log("Tesing finished - after all tests ") })
        beforeEach(() => { console.log("Before a test – enter a test ") })
        afterEach(() => { console.log("After a test – enter a test") })
        function makeTest(x) {
            //let's test power 5
            let expectedRes = x * x * x * x * x;

            it(`${x} raises to 5 is ${expectedRes}`, function () {
                assert.equal(pow(x, 5), expectedRes);
            })
        }
        for (let x = 1; x < 4; x++) {

            makeTest(x);
        }
    })

    describe("Non-Integer exponent ", function () {

        it("for the negative n the result is NaN ", function () {
            assert.isNaN(pow(2, -3));
        })
        it("for the Non-integer n the result is NaN ", function () {
            assert.isNaN(pow(2, 2.3));
        })
    })
})
