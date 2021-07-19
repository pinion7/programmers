function solution(participant, completion) {
  // 풀이
  // 1. sort를 사용하여 참여자 배열과 완주자 배열의 요소들을 모두 알파벳 순서대로 정렬한다.
  // 2. 0번 인덱스 부터 비교를 시작하고, 일치하지 않는 순간 참여자 배열의 해당 인덱스의 요소를 리턴한다.

  participant.sort();
  completion.sort();
  
  for (let i = 0; i < participant.length; ++i) {
      if (participant[i] !== completion[i]) {
          return participant[i];
      }
  }
}