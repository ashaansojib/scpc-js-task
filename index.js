// Task 1 : 
function reversedStr(data){
    let reverse = "";
    for(let i = data.length - 1; i >= 0; i--){
        reverse+=data[i]
    }
    return reverse;
}
const taskOne = reversedStr("Admin");
// console.log(taskOne)

// Task 2 :
function totalNum(data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i] > 0){
            sum+= data[i]
        }
    }
    return sum;
}
const numbers = [10, 20, 30, 8, -12, -10]
const taskTwo = totalNum(numbers);
// console.log(taskTwo)

// Task : 6
function randomPassword(data) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=[]{}|:;"<>,.?/';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';
  
    for (let i = 0; i < data; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  const passwordLength = 8;
  const generatePass = randomPassword(passwordLength);
//   console.log(generatePass);
  
// Task 7 :
function romanToInteger(data) {
    const romanToInte = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < data.length; i++) {
      const currentNumeral = romanToInte[data[i]];
      const nextNumeralValue = romanToInte[data[i + 1]];
  
      if (nextNumeralValue > currentNumeral) {
        result += nextNumeralValue - currentNumeral;
        i++;
      } else {
        result += currentNumeral;
      }
    }
  
    return result;
  }
  
  const romanInput = "III";
  const result = romanToInteger(romanInput);
//   console.log(result);
  
// Task 8
function findSecondSmallest(data) {

    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] < smallest) {
        secondSmallest = smallest;
        smallest = data[i];
      } else if (data[i] < secondSmallest && data[i] !== smallest) {
        secondSmallest = data[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest number in the array.";
    }
  
    return secondSmallest;
  }
  
  const inputArray = [3, 1, 5, 4];
  const taskEight = findSecondSmallest(inputArray);
//   console.log(taskEight);
  