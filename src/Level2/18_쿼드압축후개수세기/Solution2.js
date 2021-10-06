function solution(arr) {
  // 풀이 2 - 배열을 4등분 해가면서 재귀하는 풀이
  // 시간복잡도는 좋은 편은 아니다. 
  // slice자체가 배열을 탐색하는 것인데, 결국 4등분할때마다 탐색이 중첩되기 때문
  // 그래도 재귀가 어려운 경우, 풀이1보다 직관적으로 이해되긴 좋아서 일단 올린다.
  
  // 1. 우선 배열의 길이를 절반으로 자른 값을 구함
  let len = arr.length / 2;
  
  // 2. 탈출 조건
  // len 1보다 작다는 건 가장 작은 정사각형까지 재귀됐다는 뜻
  // 0인지 1인지 구분하고 배열의 형태로 반환
  if (len < 1) {
      if (arr[0][0]) return [0, 1];
      return [1, 0];
  }
  
  // 3. 주어진 배열을 4등분함. 좌상 우상 좌하 우하
  const leftUp = arr.slice(0, len).map(el => el.slice(0, len));
  const rightUp = arr.slice(0, len).map(el => el.slice(len));
  const leftDown = arr.slice(len).map(el => el.slice(0, len));
  const rightDown = arr.slice(len).map(el => el.slice(len));
  
  // 4. 4등분한 배열을 각각 재귀 
  // [zero, one]의 형태로 카운트 된 리턴값이 돌아올 것임
  const leftU = solution(leftUp);
  const rightU = solution(rightUp);
  const leftD = solution(leftDown);
  const rightD = solution(rightDown);
  
  // 5. 0은 0끼리 카운트 합산, 1은 1끼리 카운트 합산
  let zero = leftU[0] + rightU[0] + leftD[0] + rightD[0];
  let one = leftU[1] + rightU[1] + leftD[1] + rightD[1];
  
  // 6. 카운트 된 결과, 하나가 4고, 다른 하나가 0이라는 건 또 압축이 가능하다는 뜻. 
  // 그러므로 4인 것만 1로 변환해서 리턴
  // 그 밖의 경우엔 그대로 카운트 된 값을 리턴
  if (zero === 4 && one === 0) return [1, one];
  else if (zero === 0 && one === 4) return [zero, 1];
  else return [zero, one];
};