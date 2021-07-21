function solution(nums) {
  // 분석
  // 결과가 홀수인 경우에 대해서 소수여부를 체크해 줄 수 있는 함수를 만들어 걸러주면 된다.
  // 즉, true일 때 경우의 수 카운트
  // 탐색은 반복문 3개 겹치면 가능하다.

  
  // 풀이
  // 우선 소수 체킹하는 함수부 구현
  const isPrime = (num) => {
      // 1은 소수가 아니고, 2는 소수이며, 짝수로 나누어떨어지면 소수가 아니다.
      // 정석대로 라면 모두 고려해주는 게 맞지만, nums 배열이 최소 3개라 어차피 1,2는 나올 수가 없다.
      // if (num === 2) return true;
      // if (num === 1 || num % 2 === 0) return false;
      
      // 즉, 짝수 체크만 남긴다.
      if (num % 2 === 0) return false;

      // 이제 그냥 3부터 num-1까지 속한 홀수들로 나누어 떨어지는지 여부를 보면되는데
      // 제곱근을 활용하면 num에 제곱근 씌운 값까지만 체크해도 소수인지 아닌지가 판명 가능하다.
      let sqrtVal = parseInt(Math.sqrt(num));
      for (let i = 3; i <= sqrtVal; i = i + 2) {
          if (num % i === 0) return false;
      }

      return true;
  }
  
  // 카운트 선언
  let primeCount = 0;
  // 3란성 쌍둥이 반복문을 소환한다.
  for (let i = 0; i < nums.length; ++i) {
      for (let j = i + 1; j < nums.length; ++j) {
          for (let k = j + 1; k < nums.length; ++k) {
              if (isPrime(nums[i] + nums[j] + nums[k])) {
                  ++primeCount;
              }
          }
      }
  }
  
  return primeCount;
}