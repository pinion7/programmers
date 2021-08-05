function solution(x) {
  // 분석
  // 숫자를 나누려면 문자열화시켜야 된다는 점만 알면 된다.
  
  // 풀이
  // 문자열화 시키고 배열화 시켜서 전부 합산한 y라는 값을 추출한다.
  let y = x.toString().split('').reduce((acc, curr) =>{
      return acc * 1 + curr * 1;
  });
  
  if (x % y === 0) return true;
  return false;
}