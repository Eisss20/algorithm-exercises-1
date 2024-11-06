function runningSum(arr) {
  let result = [];

  arr.reduce((acc, cur) => {
    acc += cur;
    result.push(acc);
    return acc;
  }, 0);

  return result;
}
// ------------------------ //
//รอบแรก 1+0 = 1
//รอบสอง 1+2 = 3
//รอบสาม 3+3 = 6
//รอบสาม 6+4 = 10
// ------------------------ //

let result1 = runningSum([1, 2, 3, 4]);
let result2 = runningSum([3, 1, 2, 10, 1]);

console.log(result1); // [1, 3, 6, 10]
// ผลลัพธ์ข้างต้นเกิดจาก [1, 1+2, 1+2+3, 1+2+3+4]

console.log(result2); // [3, 4, 6, 16, 17]
// ผลลัพธ์ข้างต้นเกิดจาก [3, 3+1, 3+1+2, 3+1+2+10, 3+1+2+10+1]
