export function helloJS() {
  console.log("hello Javascript");
}

// https://www.hackerrank.com/challenges/compare-the-triplets/problem

export function compareTriplets(a, b) {
  var aPoint = 0;
  var bPoint = 0;
  var result = [];
  for (var i = 0; i <= a.length; i++) {
    if (a[i] === b[i]) {
      aPoint += 0;
      bPoint += 0;
    } else if (a[i] > b[i]) {
      aPoint += 1;
      bPoint += 0;
    } else {
      aPoint += 0;
      bPoint += 1;
    }
  }
  result.push(aPoint);
  result.push(bPoint);
  return result;
}

// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  let shoePairs = [];
  let count = 0;
  for (var i = 0; i <= n; i++) {
    if (!shoePairs.includes(ar[i])) {
      shoePairs.push(ar[i]);
    } else {
      count++;
      shoePairs = shoePairs.filter((x) => x !== ar[i]);
    }
  }
  return count;
}

//www.hackerrank.com/challenges/counting-valleys/problem

export function countingValleys(steps, path) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "U") {
      count += 1;
      if (count == 0) {
        result += 1;
      }
    } else {
      count -= 1;
    }
  }
  return result;
}

// https://www.hackerrank.com/challenges/repeated-string/problem

export function repeatedString(s, n) {
  var result = 0;
  var rA = 0;
  var times = Math.floor(n / s.length);
  var remainder = n % s.length;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "a") {
      result++;
      if (i < remainder) {
        rA++;
      }
    }
  }
  return result * times + rA;
}

// https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let splits = s.split("");
  let vowelsArr = splits.filter((x) => vowels.includes(x));
  let consonantsArr = splits.filter((x) => !vowels.includes(x));
  let vowelsAndConsonant = vowelsArr.concat(consonantsArr);
  for (let i = 0; i < vowelsAndConsonant.length; i++) {
    console.log(vowelsAndConsonant[i]);
  }
}

// function vowelsAndConsonants(s) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let splits = s.split("");
//   let n = splits.length;
//   let index = 0;
//   for (let i = 0; i < n; i++) {
//     if (vowels.includes(splits[i])) {
//       [splits[index], splits[i]] = [splits[i], splits[index]];
//       index += 1;
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     console.log(splits[i]);
//   }
// }
