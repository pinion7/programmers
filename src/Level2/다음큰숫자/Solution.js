function solution(n) {
  // 분석
  // 정규표현식을 활용하면 쉽게 풀 수 있다.
  // 수를 키워가면서 개수를 세는 것이다.
  let m = n + 1;
  let newN = n.toString(2).match(/1/g).length;
  
  while (newN !== m.toString(2).match(/1/g).length) ++m;
  return m;
}