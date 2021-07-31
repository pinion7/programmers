function solution(str) {
  // 분석
  // 인덱스 번호를 기준으로 짝수면 대문자
  // 홀수면 소문자로 변환한다.
  // 단, 문자별 인덱스라는 거에 주의해야 한다.
    
  // 풀이
  // 1. 우선 공백 기준으로 배열화시켜주자
  const arr = str.split(' ');
  // 2. map과 반복문으로 변환시키고, join으로 문자열 처리해주자.
  const newArr = arr.map(str => {
    let result = '';
    for (let i = 0; i < str.length; ++i) {
      // 3. i가 짝수면 대문자화, 아니면 소문자화
      if (i % 2 === 0) result += str[i].toUpperCase();
      else result += str[i].toLowerCase();
    }
    // 4. 공백붙여 반환
    return result + ' ';
  }).join('')
  
  // 5. 마지막 인덱스를 제거한 문자열을 리턴한다.
  return newArr.slice(0, newArr.length - 1);
}