function solution(s) {
  // 분석
  // 1레벨로 강등당해야할 문제이다.
  
  // 풀이
  // 메소드를 잘쓰면 끝이다.
  const arr = s.split(' ');
  return Math.min(...arr) + ' ' + Math.max(...arr);
}