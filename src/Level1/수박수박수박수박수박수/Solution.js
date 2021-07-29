function solution(n) {
  // 풀이
  // 그냥 홀수면 '수'를 더하고, 짝수때는 '박'을 더해주면 된다.
  let result = '';
  for (let i = 1; i <= n; ++i) {
      if (i % 2 !== 0) result += '수';
      else result += '박';
  }
  return result;
}