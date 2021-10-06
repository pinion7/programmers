function solution(arr) {
  // 분석
  // 재귀적으로 접근해야 함
  
  // 풀이 1 - 잘라진 인덱스를 재귀시켜서 마지막에 요소값 하나에만 접근하는 풀이
  // 시간복잡도가 좋다. 인덱스만 잘라서 보내고 마지막에 접근하기 때문에
  // 중복 탐색할 우려가 없기 때문이다.
  
  // 1. 재귀적인 함수를 구현한다.
  const comp = (rowS, rowE, colS, colE, arr) => {
      
      // 2. 탈출조건을 만든다.
      // 행이나 열의 시작인덱스와 끝인덱스가 같다는 건 최소단위까지 재귀한 것
      if (rowS === rowE) {
          if (arr[rowS][colS]) return [0, 1];
          return [1, 0];
      };
      
      // 3. 각 행열 인덱스의 중간값을 만든다.
      let rowM = parseInt((rowS + rowE) / 2);
      let colM = parseInt((colS + colE) / 2);
      
      // 4. 주어진 배열을 인덱스값으로 4등분해서 재귀. 좌상 우상 좌하 우하
      const leftU = comp(rowS, rowM, colS, colM, arr);
      const rightU = comp(rowS, rowM, colM + 1, colE, arr);
      const leftD = comp(rowM + 1, rowE, colS, colM, arr);
      const rightD = comp(rowM + 1, rowE, colM + 1, colE, arr);

      // 5. 0은 0끼리 카운트 합산, 1은 1끼리 카운트 합산
      let zero = leftU[0] + rightU[0] + leftD[0] + rightD[0];
      let one = leftU[1] + rightU[1] + leftD[1] + rightD[1];

      // 6. 카운트 된 결과를 다시 압축가능한지 체크하여 반환 
      // 하나가 4고, 다른 하나가 0이라는 건 또 압축이 가능하다는 뜻. 
      // 그러므로 4인 것만 1로 변환해서 리턴
      // 그 외엔 압축이 불가능한 것이므로 그대로 카운트 된 값을 리턴
      if (zero === 4 && one === 0) return [1, one];
      else if (zero === 0 && one === 4) return [zero, 1];
      else return [zero, one];
  };
  
  // 7. 함수를 실행한다.
  return comp(0, arr.length - 1, 0, arr.length - 1, arr);
};