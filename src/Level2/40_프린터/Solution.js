function solution(priorities, location) {
  // 분석
  // 큐와 while을 활용하면 될 것 같은데
  // 세부작업이 중요하다.
  // 그냥 규칙 자체는 우선순위보다 낮으면 뒤에 넣어주고
  // 아니면 인쇄한 뒤 카운트하는 식으로 진행하면 되는데, 목표값이 위치가 변동되는 게 어려운 부분이다.
  // 이럴 때는 어쩔 수없이 배열이 바뀔때마다 location을 그에 맞춰 다시 설정해주는 수밖에 없다.ㅌ

  // 풀이
  // 우선 카운트 변수 생성
  let count = 0;
  // 외부 반복문은 while문으로 만들어보자.
  while (true) {
    // 매번 최초엔, 최대값(우선순위값)을 구해준다.
    let maxVal = priorities.find((el, idx, org) => {
      return Math.max(...org) === el;
    });

    for (let i = 0; i < priorities.length; ++i) {
      // location이 0번 인덱스가 되어 우선순위값과 비교시, 작으면 뒤로 보낸다.
      if (location === 0 && priorities[0] < maxVal) {
        priorities.push(priorities.shift());
        location = priorities.length - 1;
      }
      // 같으면 카운트를 마지막으로 높여주고 결과를 반환한다.
      else if (location === 0 && priorities[0] === maxVal) {
        return ++count;
      }
      // 0번인덱스 값이 우선순위값보다 작으면 뒤로 보내고, 동시에 location조정
      else if (priorities[0] < maxVal) {
        priorities.push(priorities.shift());
        --location;
      }
      // 0번인덱스 값이 최대값이면, 뽑아서 버리고, location조정 및 반복문 탈출
      else if (priorities[0] === maxVal) {
        priorities.shift();
        --location;
        ++count;
        break;
      }
    }
  }
}
