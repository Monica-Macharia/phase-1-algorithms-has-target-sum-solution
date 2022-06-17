function hasTargetSum(array, target) {
  const storageUnit = new Set(); 
  for (const item of array) {
    const targetNumber = target - item;

        if (storageUnit.has(targetNumber)) return true;

        storageUnit.add(item);
  }
  return false;
}

/* 
  this is a linear time and space complexity
*/

/* 
  create a set to accomadate items from the for loop
  if the number stored in the loop is equal to the targetnumber return true
*/

/*
  targetNumber is target - item in array.
  for comparison purposes, store it in the new set.
  return true if targetNumber is in the set, and add a new item if not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
