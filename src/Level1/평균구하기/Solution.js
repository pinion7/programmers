function solution(arr) {
  // 분석
  // 더해서 길이로 나누면 된다.
  
  // 풀이
  // 리듀스로 합산하고 길이로 나눈다.
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum / arr.length;
}