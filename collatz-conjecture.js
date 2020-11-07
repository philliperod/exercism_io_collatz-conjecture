export const steps = (given) => {
  // previous iteration before refactoring
  //   if (given <= 0) {
  //     throw new Error('Only positive numbers are allowed');
  //   }

  //   let count = 0;
  //   let result = given;

  //   while (result !== 1) {
  //     if (result % 2 === 0) {
  //       result = result / 2;
  //     } else {
  //       result = result * 3 + 1;
  //     }
  //     count++;
  //   }

  //   return count;
  // };

  let count = 0;
  let result = given;

  if (given <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  while (result !== 1) {
    result % 2 === 0 ? (result /= 2) : (result *= 3 + 1);
    count++;
  }

  return count;
};

// alternate shorter solution with ternary operator; saw another solution implemented like this

// first, we need to check if the given number is either a negative number or zero then throw an error for it
// need a counter that starts at zero which will increase by one in the while loop
// need a variable that will hold the input and do math with
// in the while loop, we want to check if the result equals to one, first; if so then stop because that is the result we want
// if result is divisible by 2, divide by 2 and store it into result; after if statement, increase the count by 1 and repeat the process
// if result is not divisible by 2 then it must be divisible by 3; multiple the result by 3 then add 1, store it into result; after if statement, increase count by 1 and repeat the process
// outside the loop, return the count
