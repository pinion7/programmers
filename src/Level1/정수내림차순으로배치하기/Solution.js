function solution(num) {
  // 분석
  // 문자열화 시킨 후 sort로 내림차순 정렬해주면 된다.
    
  // 풀이
  return num.toString().split('')
      .sort((a, b) => b * 1 - a * 1).join('') * 1;
}