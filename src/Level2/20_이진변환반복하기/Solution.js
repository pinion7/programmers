function solution(str) {
  // 분석
  // 주어진 설명을 그대로 따라하면 될 것으로 보인다.
  
  // 풀이
  // 1. 필터로 1만 남기고, 기존 길이에서 남은 길이를 뺀 것을 축적한다(0개수 축적)
  // 2. 남은 길이를 바탕으로 2진변환을 한다.
  // 3. 위 두 과정을 진행하고 나면 변환횟수도 +1 카운팅한다.
  // 4. 사이클을 반복하고, 값이 1이되면 탈출해서 result를 반환한다.
  
  // 변환회차 및 0개수를 카운트할 변수 선언
  let binCount = 0;
  let zeroCount = 0;
  
  // 반복문으로 str이 1이될때까지 진행
  while (str !== '1') {
      // 원본길이 저장하고, 배열화하여 0이 아닌 것을 필터해주고
      // 배열의 길이를 2진법적용하여 다음 반복문에 사용할 새로운 문자열 생성한다.
      let orgLen = str.length;
      const arr = str.split('').filter(el => el !== '0');
      str = arr.length.toString(2);
      // 0의 개수는 원본길이에서 0이 아닌 것만 남긴 길이를 제외하면 구할 수 있고
      // 변환 회차는 항상 반복문 1사이클마다 +1씩 상승한다.
      zeroCount += orgLen - arr.length;
      ++binCount;
  }
  
  return [binCount, zeroCount];
}