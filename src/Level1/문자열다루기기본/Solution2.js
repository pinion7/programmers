function solution(str) {
  // 풀이 2
  // 리듀스 쓰기 (어차피 입력 문자열의 길이가 짧아서 효율성 차이 없음)
  return str.split('').reduce((acc, curr) => {
      if (isNaN(curr)) return acc = false;
      return acc;
  }, true) && str.length === 4 || str.length === 6
}