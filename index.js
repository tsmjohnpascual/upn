// Task 1: halve a number
function halveNumber(num) {
  return num / 2;
}

// Task 2: multiply and add 3
function multiplyAndAdd3(num1, num2) {
  return (num1 * num2) + 3;
}

// Task 3: Calculate how many times 1000 needs to be halved to be less than 10
function halvingToLimit(num, limit) {
  let count = 0;
  while (num >= limit) {
    num = halveNumber(num);
    count++;
  }
  return count;
}


// Task 4

// Task 5