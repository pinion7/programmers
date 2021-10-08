function solution(people, limit) {
  // 분석
  // 최대무게와 최소무게를 지속적으로 체킹하고 넣어주는 방식을 활용하면 된다.
  // 오름차순 정렬을 한 다음, 앞, 뒤에서 하나씩 빼서 진행하면 되며
  // 두 개의 합이 제한무게를 만족하지 않으면, 
  // 뒤에서 뺀값은 절대 함께 넣을 수 없다는 뜻이므로 카운트를 1올려주고, 
  // 다시 두번째로 큰값과 최소무게값을 합산하여 체크해간다.
  // 두개의 합이 제한 무게를 만족하면 카운트 2를 하고, 다음 두개를 탐색하면 된다.
  
  // 풀이
  // 1. 오름차순 정렬 한다.
  people.sort((a, b) => a - b);
  
  // 2. 카운트 변수 및 최소, 최대 초기값 설정
  let count = 0;
  
  // while문으로 people을 줄여가며 진행한다.
  while (people.length > 0) {
      if (people[0] + people[people.length - 1] <= limit) {
          people.shift();
          people.pop();
          ++count;
      }
      else if (people[0] + people[people.length - 1] > limit) {
          people.pop();
          ++count;
      }
  }
  
  return count;
}