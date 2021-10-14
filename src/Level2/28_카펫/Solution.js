function solution(brown, yellow) {
  // 분석
  // 규칙 찾아보기
  // 예시 yellow 4:
  // yellow로 세로 가로 길이 구하는 법
  // yellow가 4개라면 공약수를 구하고(1,2,4) 
  // -> 즉, 우선 1*4방식이나 2*2 방식이 가능하다는걸 파악한다.
  // 4*1방식이라면 => 가로 길이는 4+2이고, 세로 길이는 1+2이다. 
  // 테두리 박스 값은 6*2 + 3*2 - 4(모서리)
  // 2*2방식이라면 => 가로 길이는 2+2이고, 세로 길이도 2+2이다. 
  // 테두리 박스 값은 4*2 + 4*2 - 4(모서리)
  // 이런 식으로 약수를 토대로 모든 경우의 수를 훑고 
  // 브라운의 값을 만족하는 가로 세로의 길이를 리턴하면 된다.
  
  // 풀이
  // 1. yellow의 약수를 구해보자
  // 제곱근 함수를 사용하여 구하면 더 빠르다.
  const divisors = [];
  let sqrtNum = parseInt(Math.sqrt(yellow));
  
  for (let i = 1; i <= sqrtNum; ++i) {
      if (yellow % i === 0) {
          divisors.push(i);
          divisors.push(yellow / i);
      }
  }
  
  // 2. 오름차순 정렬을 해준다.
  divisors.sort((a, b) => a - b);
  
  
  // 3. 약수를 바탕으로 가로 세로 길이를 구하고, 
  // 사이클마다 테두리 박스의 개수를 지속적으로 구한다.
  while (true) {
      let width = divisors.pop() + 2;
      let height = divisors.shift() + 2;
      
      let boxNum = width * height - 4;
      
      // 4. 3에서 구한 박스개수랑 브라운을 체크해서 같아지는 순간에, 
      // 해당 가로 세로 길이를 리턴한다.
      if (boxNum === brown) {
          return [width, height];
      }
  }        
}