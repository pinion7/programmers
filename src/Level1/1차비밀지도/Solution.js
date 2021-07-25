function solution(n, arr1, arr2) {
  // 분석
  // 비트 or연산으로 풀면 쉽게 해결될 것이다.
  // 배열과 배열 간 같은 인덱스의 요소끼리 비트연산을 하여 2진수로 바꾼다.
  // 그리고 바꾼 2진수 값들의 자리마다 1은 #, 0은 빈공백을 넣은 배열로 변환하여 결과를 리턴한다
  
  // 풀이
  // 1. 결과를 담을 배열을 우선 선언한다.
  // 2. map을 사용하여 이진수로 변환된 배열을 만든다.
  // 3. 변환된 배열을 훑으면서 비밀지도 해독코드를 추출한다.
  let resultArr = [];

  arr1.map((el, idx) => {
      // 비트연산 및 진법변환, 문자열 반복 실행
      return (el | arr2[idx]).toString(2).padStart(n, 0);
  }).forEach(el => {
      let str = '';
      for (let i = 0; i < el.length; ++i) {
          if (el[i] === '1') str += '#';
          else str += ' ';
      }
      resultArr.push(str);
  })
  
  return resultArr;
}