function solution(str) {
  // 풀이 1
  // 걍 반복문으로 각 요소 순회하면서 체크하기
  if (str.length !== 4 && str.length !== 6) return false;
  for (let el of str) {
      if (isNaN(el)) return false;
  }
  return true;
}