function solution(arr) {
  // 분석
  // 최소공배수는 두 수의 곱을 최대공약수로 나누면 구할 수 있다.
  // 각 요소들에 대해 위와 같은 과정을 지속적으로 수행하면 된다.
  
  // 풀이
  // 우선 최대공약수를 구하는 함수를 구현한다.
  const getMaxDivisor = (a, b) => {
      // 탈출부
      if (b === 0) return a;
      // 재귀부
      if (a < b) return getMaxDivisor(a, b % a);
      else return getMaxDivisor(b, a % b);
  };
  
  // reduce를 사용하면 쉽게 마무리 할 수 있다.
  return arr.reduce((acc, curr) => {
      return (acc * curr) / getMaxDivisor(acc, curr);
  });
};