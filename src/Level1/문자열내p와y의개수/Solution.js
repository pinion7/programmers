function solution(s) {
  // 분석
  // 대문자나 소문자로 변환해서 진행할 필요가 있고
  // 문제 설명 그대로 개수를 각각 체킹해서 같으면 참, 아니면 거짓을 반환하면 된다.
  
  // 풀이 1
  // 1. 변환 진행. 배열의 형태로 만들어 내장메소드를 사용한다
  let arr = s.toUpperCase().split('')
  
  // 2. 필터로 남긴 p배열과 y배열의 길이가 같으면 true, 아니면 false를 반환한다.
  return arr.filter(el => el === 'P').length === arr.filter(el => el === 'Y').length;
  
  
  // 참고 풀이
  // 직접 푼 방식은 아닌데, 상당히 영리한 풀이 방식이라 참고할만해서 가져왔다.
  // 풀이 1에서 한단계 발전한 생각이 들어간 방식이라 보면 된다.
  // return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}