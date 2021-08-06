function solution(arr1, arr2) {
  // 분석
  // 맵으로 합산해주면 된다.
  
  // 풀이
  // map을 중첩하고, 외부, 내부 배열 인덱스를 모두 인자로 활용해야한다.
  // 그래야 arr2 각각의 값에 접근이 가능하다.
  return arr1.map((el, idx1) => {
      return el.map((el2, idx2) => el2 + arr2[idx1][idx2]);
  })
}