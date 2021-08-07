function solution(x, n) {
  // 풀이 1 - 일반 for문 활용
  // x의 배수를 빈 배열에 n번 푸쉬한다.
  const result = [];
  for (let i = 1; i <= n; ++i) {
      result.push(x * i);
  }
  return result;
  
  
  // 풀이 2 - 배열 및 맵과 인덱스 활용
  // 미리 배열을 만들고 x를 채워넣은 뒤, 맵으로 x의 배수를 만들어 반환한다.
  const temp = new Array(n).fill(x);
  return temp.map((x, idx) => x * (idx + 1));
}