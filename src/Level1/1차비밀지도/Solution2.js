function solution(n, arr1, arr2) {
  // 풀이2 (정규표현식 사용) - 속도는 풀이1 이 빠름
  // 1. map을 사용하여 이진수로 변환시키고, padStart로 부족한 자리수를 채워넣고
  // 2. replace로 1, 0을 각각 '#', ' '로 변환시킨다
  // 3. 단, 정규 표현식을 사용해야 한다. 본래 replace는 가장 앞쪽 인덱스 하나만 바꿔주기 때문
  // 4. '/값/gi'를 사용하면 전체 문자열에 해당하는 값을 원하는 것으로 대체할 수 있다. 
  return arr1.map((el, idx) => {
      return (el | arr2[idx]).toString(2).padStart(n, 0).replace(/1/gi, '#').replace(/0/gi, ' ');
  })
}