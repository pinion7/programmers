function solution(numbers) {
  // 분석
  // for문을 중첩하면 쉽게 해결될 문제이다.
  // 전체를 순회하며 두 수의 합을 구해서 빈 배열에 넣는다.
  // 조건을 만들어 이미 있는 수는 추가하지 않도록 하면 된다.
  
  // 풀이
  // 1. 결과 배열을 만들고 바로 반복문을 돌리며 값이 존재하지 않을 때 푸쉬한다.
  // 2. 오름차순 정렬하고 반환한다.
  const result = [];
  numbers.forEach((el, idx) => {
    for (let i = idx + 1; i < numbers.length; ++i) {
      if (result.indexOf(el + numbers[i]) === -1) {
        result.push(el + numbers[i]);
      } 
    }
  })
  
  return result.sort((a, b) => a - b);
}