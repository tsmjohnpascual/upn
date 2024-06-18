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


// Task 4: Filter an array to have all values above a given number removed
function removeGreater(arr, limit) {
  return arr.filter((num) => num <= limit);
}

// Task 5: Determine the winner of a card game
function cardGameWinner(player1, hand1, player2, hand2) {
  // Return an array containing only duplicate numbers
  function findDuplicates(hand) {
    let duplicates = [];
    for (let i = 0; i < hand.length; i++) {
      let count = 0;
      for (let j = 0; j < hand.length; j++) {
        if (hand[i] == hand[j]) {
          count++;
        }
      }
      if (count >= 2) {
        duplicates.push(hand[i]);
      }
    }
    return duplicates;
  }

  function handRank(hand) {
    let duplicateArray = findDuplicates(hand).sort((a, b) => a - b);

    // Four of a kind
    if (duplicateArray.length === 4) {
      if (duplicateArray[0] === duplicateArray[duplicateArray.length - 1]) {
        return 1;
      }
    }

    // Full house
    if (duplicateArray.length === 5) {
      if (duplicateArray[duplicateArray.length - 1] - duplicateArray[0] !== 4) {
        return 2;
      }
    }

    // Straight
    if (duplicateArray.length === 5) {
      if (duplicateArray[duplicateArray.length - 1] - duplicateArray[0] === 4) {
        return 3;
      }
    }

    // Three of a kind
    if (duplicateArray.length === 3) {
      return 4;
    }

    // Two pair
    if (duplicateArray.length === 4) {
      if (duplicateArray[0] !== duplicateArray[duplicateArray.length - 1]) {
        return 5;
      }
    }

    // One pair
    if (duplicateArray.length === 2) {
      return 6;
    }
  }

  const player1Rank = handRank(hand1);
  const player2Rank = handRank(hand2);

  if (player1Rank < player2Rank) {
    return player1;
  } else if (player1Rank > player2Rank) {
    return player2;
  } else {
    return "draw";
  }
}

console.log(cardGameWinner("John", [3, 3, 3, 5, 5], "Marion", [3, 3, 3, 3, 6])); // Marion