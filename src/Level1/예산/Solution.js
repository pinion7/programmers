function solution(d, budget) {
  // 풀이
  // 1. 오름차순으로 정렬한다. 그리고 첫 요소부터, 하나씩 요소를 가산해가면서 예산이랑 비교한다.
  // 2. 작으면 계속 다음 요소를 합산해가며 예산과 비교하고, 카운트도++
  // 3. 예산보다 커지는 순간 끊고 카운트를 리턴한다.
  
  let sum = 0;
  let count = 0;
  
  d.sort((a, b) => a - b);
  
  for (let el of d) {
      if (sum + el <= budget) {
          sum += el;
          ++count;
      }
      else break;
  }
  
  return count;
}