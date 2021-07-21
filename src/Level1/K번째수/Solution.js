function solution(array, commands) {
  // 분석
  // 배열 속의 배열의 요소에 접근해야 한다.
  // 배열속배열의 길이는 무조건 3
  // map으로 한방에 해결 가능하다.
  
  // 풀이
  // 문제 설명에 나와있는 그대로 수행하면 된다.
  // 1. 첫 포인트는 commands에 맵을 쓰고, 인덱스를 부여해 2차원 배열의 요소에 접근해야 한다는 점이다.
  // 2. 두 번째 포인트는 splice를 사옹하여 어떻게 하면 원하는 인덱스의 값을 추출해낼 수 있는지 이다.
  // 3. 세 번째 포인트는 commands는 2차원배열의 형태이기 때문에 1차원 배열의 형태로 바꾸는 방법은 무엇인가 이다.(flat()은 하나의 방법일 뿐)
  return commands.map(el => {
      return array.slice(el[0] - 1, el[1]).sort((a, b) => a - b).splice(el[2] - 1, 1);
  }).flat()
}