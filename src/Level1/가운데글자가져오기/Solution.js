function solution(s) {
  // 풀이
  // 1. 문자열의 길이가 2로 나누어 떨어지지 않으면, 2로 나눈 몫을 내림한 값을 인덱스로 활용하여 리턴하고
  // 2. 나누어 떨어지면 몫-1 + 몫을 각각 인덱스로 활용하여 두개의 문자열을 더한 값을 리턴한다.
  if (s.length % 2 !== 0) return s[parseInt(s.length / 2)];
  return s[s.length / 2 - 1] + s[s.length / 2]
}