function solution(absolutes, signs) {
  // 풀이
  // 두 개의 배열을 훑으면서 특정 인덱스가 true면, absolutes 배열의 같은 인덱스 번호의 값을 양수로 하고
  // 아니면 음수로 변경하면서, 변경과 동시에 연산을 해주고 탐색이 끝나면 그 결과값을 리턴하면 된다.
  // reduce를 잘만쓰면 한방에 해결할 수 있다.
 return absolutes.reduce((acc, curr, idx) => {
      if (signs[idx]) return acc += curr;
      else return acc += -1 * curr;
  }, 0)
}