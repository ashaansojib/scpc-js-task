// Task 1 : 
function reversedStr(data){
    let reverse = "";
    for(let i = data.length - 1; i >= 0; i--){
        reverse+=data[i]
    }
    return reverse;
}
const result = reversedStr("Admin");
// console.log(result)