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
  
  // Example usage: Generate a random password of length 12
  const passwordLength = 8;
  const generatePass = randomPassword(passwordLength);
//   console.log(generatePass);
  