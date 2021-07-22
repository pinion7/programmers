function solution(a, b) {
  // 풀이
  // 1. 리듀스로 a와 b의 같은 인덱스를 곱해주고 누적값에 가산해준다.
  // 2. 그대로 리턴한다.
  return a.reduce((acc, curr, idx) => {
      return acc += curr * b[idx]
  }, 0)
}