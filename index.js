// This is a simple module for Node.js made with the included Math functions of Node.js. Usage is simple and an example has been included
module.exports = (min, max, nums) => {
  max = max + 1;
  var arr1 = [];
  if (nums === undefined) {
    var loopfor = 1;
  } else {
    var loopfor = nums;
  }
  for (i = 0; i < loopfor; i++) {
    var randomnumtmp = Math.floor((Math.random() * (max - min)) + min);
      arr1.push(randomnumtmp);
  }
  return arr1;
};
