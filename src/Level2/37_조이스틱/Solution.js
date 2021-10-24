function solution(name) {
  // 분석
  // name을 역으로 AAA로 바꿔가면서 조작횟수를 체크해야 한다.
  // 각 문자열의 알파벳이 어느 쪽으로 갔을 때 A와 가까운지를 체크해야 한다.
  // A가 있으면 변할 필요가 없으므로 신경쓰지 않는다.
  // 문자열 자체에서 제거하는 게 횟수카운팅에 헷갈리지 않을 것 같다.
  // 우선 최소값 구하는 방법으로 접근을 해보되,
  // 쉽지않으면 모든 경우의 수를 체크하여 최소값만 찾아 합산해주자.

  // 풀이
  // 1. 커서 이동 횟수를 카운트 해보자.
  // 배열화시키고, 이동 횟수를 누적할 변수와 커서무빙값의 초기값을 설정해준다.
  let arr = name.split("");
  let moveCount = 0;
  let cursorMove = arr.length - 1;

  // reduce를 사용하여 결과 값을 moveCount에 더해준다.
  // reduce에는 인덱스와 원본배열까지 전부 받아서 진행한다.
  moveCount += arr.reduce((acc, curr, idx, org) => {
    // 현재 요소가 'A'라면
    if (curr === "A") {
      // 우선 현재 인덱스에서 1을 뺀 값이 문자열의 좌측
      let left = idx - 1;
      // 다음 인덱스부터 A가 아닌 최초의 인덱스를 찾고,
      let notAIdx = org.slice(idx + 1).findIndex((el) => el !== "A");
      // 원본 배열의 길이에서, 처음으로 A가 아닌 인덱스 값을 빼주면 문자열의 우측
      let right = org.length - (notAIdx + idx + 1);
      // left가 right보다 크면 acc와 이동거리가 동일하다.
      // 반면 right가 더 크다면 오른쪽으로 가다가 왼쪽으로 돌아가는게 최소거리이다.
      // 때문에 left 영역을 두번 거치게 되서 곱하기 2를 해주는 것이다.
      // 두 경우 중 최소값을 다시 할당해준다.
      acc = Math.min(acc, right + left * 2);
    }
    // 변환된 값을 리턴한다. 물론 curr이 A가 아니라면 그대로 리턴한다.
    return acc;
  }, cursorMove);

  // 2. 문자열 이동 카운트를 해보자.
  // 일단 대문자 알파벳을 담은 문자열을 선언해준다.
  let baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  arr.forEach((el) => {
    // arr[i]의 인덱스 번호를 val1에 넣고
    let val1 = baseStr.indexOf(el);
    // val2에는 전체 길이에서 val1을 빼준 값을 넣는다.
    let val2 = baseStr.length - val1;
    // 둘 중 더 작은 값이 해당 요소의 최소 변경 횟수이다.
    moveCount += Math.min(val1, val2);
  });

  return moveCount;
}
