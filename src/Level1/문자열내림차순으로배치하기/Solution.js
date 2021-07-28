function solution(str) {  
  // 풀이
  // 1. 우선 배열화를 한다.
  // 2. 원하는 리턴값이 알파벳 거꾸로 순이고 대문자가 와야하므로 sort하고 reverse를 적용한다.
  // 3. 마지막엔 다시 문자열화 시켜서 반환한다.
  return str.split('').sort().reverse().join('');
  
  // 리버스를 몰라도 아래처럼 풀 수도 있다.
  // return str.split('').sort((a, b) => {
  //     if (a > b) return -1;
  //     else if (a < b) return 1;
  // }).join('');
}