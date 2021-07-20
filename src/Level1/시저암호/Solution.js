function solution(str, num) {
  // 풀이
  // 1. 우선 대소문자를 구분하여 각 변수에 담아준다.
  // 2. 반복문으로 훑으며 일단 빈 공백이면 그대로 넣어준다. 
  // 3. 다음엔 대문자 vs 소문자 체크 후, num만큼 인덱스 이동된 문자열을 결과변수에 더해간다.

  const bigStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const smallStr = 'abcdefghijklmnopqrstuvwxyz';
  
  let result = '';

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ' ') result += ' ';
    else if (bigStr.includes(str[i])) {
        let temp = bigStr.indexOf(str[i]) + num;
        result += bigStr[temp % bigStr.length];
    }
    else {
        let temp = smallStr.indexOf(str[i]) + num;
        result += smallStr[temp % smallStr.length];
    }
  }
  
  return result;
}