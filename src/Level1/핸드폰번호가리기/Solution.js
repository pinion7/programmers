function solution(phone_number) {
  // 분석
  // 문자열을 배열화 시켜서 변환한 뒤 문자열로 반환하는 방법이 있고
  // 아니면 문자열만으로 해결하는 방법이 있다.
  
  // 풀이 1
  // 배열화 시킨 후, 마지막 네 자리를 제외하고는 '*' 바꿔준다.
  // 조인으로 다시 문자열화 시킨 후 반환한다.
  return phone_number.split('').map((str, idx) => {
      if (idx < phone_number.length - 4) return '*';
      return str;
  }).join('');
}