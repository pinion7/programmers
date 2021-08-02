function solution(num) {
  // 분석
  // 루트를 씌웠을 때 정수인지 아닌지를 기준으로 판별하면 된다.
  // 정수면 +1한 것을 제곱하여 리턴하면 되고
  // 아니면 -1을 리턴한다.
  
  // 풀이
  // 제곱근함수를 씌운 값으로 원본 num을 나눴을 때 
  // 나누어 떨어지면 정수, 그렇지 않으면 실수인 것
  let sqrtNum = Math.sqrt(num);
  if (num % sqrtNum === 0) return (sqrtNum + 1) ** 2;
  else return -1;
}