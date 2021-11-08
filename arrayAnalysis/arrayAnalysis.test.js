const arrayAnalyzed = require('./arrayAnalysis');

let myArrOne = [2,2,4,4,8];
let myArrTwo = [5,1,8,23,6,2];

let objOneShouldBe =  {
    length:5,
    min:2,
    max: 8,
    average: 4
};

let objTwoShouldBe = { 
    length:6,
    min:1,
    max: 23,
    average: 7.5}

test('does the objectOne contain the right properties',() => {
      expect(arrayAnalyzed(myArrOne)).toMatchObject(objOneShouldBe)
})

test('does the objectTwo has right properties',() => {
    expect(arrayAnalyzed(myArrTwo)).toMatchObject(objTwoShouldBe)
})