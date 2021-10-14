function solution(m, n, board) {
  // 분석
  // 새로운 보드판을 만들고, 원본 보드를 순회하면서 2*2블록를 체크하되
  // 해당되는 좌표값은 새로운 보드판에 0으로 표시를 한다.
  // 그리고 0을 전부 제거하여 위에 있던 문자열들을 끌어당기고, 
  // 빈공간을 다시 0으로 채운 보드판으로 원본보드판을 바꾼뒤 다시 탐색을 이어간다.
  // 위와 같은 과정을 반복하고, 더이상 2*2블록이 발견되지 않는 순간 반복문을 끝낸다.
  
  // 풀이
  // 새로운 보드판을 만드는데 행열을 전환해서 만든다.
  let newBoard = [];
  for (let i = 0; i < n; ++i) {
      newBoard.push([]);
  }
  
  // 즉, 보드판을 시계방향으로 90도 회전시키는 형태로 다시 만들어준다.
  // 이는 블록이 깨졌을 때 당기는 것을 쉽게 하기 위함이다.(열은 자동 당김이 가능)
  for (let i = 0; i < board.length; ++i) {
      for (let j = 0; j < board[0].length; ++j) {
          newBoard[j].unshift(board[i][j]);
      }
  }
  
  // 2*2 체크 함수를 구현한다.
  const blockCheck = (arr, i, j) => {
      if (!arr[i][j]) return false;
      if (arr[i][j] !== arr[i][j + 1]) return false;
      if (arr[i][j] !== arr[i + 1][j]) return false;
      if (arr[i][j] !== arr[i + 1][j + 1]) return false;
      return true;
  }
  
  // 2*2 범위가 모두 같은 문자열이면 그 기준좌표를 투입하는 변수를 선언
  let coordinates;
  // do while문으로 반복을 시작한다.
  // coordinates에 좌표가 하나도 담기지 않는 순간 탈출한다.
  do {
      // while문이 시작될 땐 항상 좌표배열을 초기화
      coordinates = [];
      // 2*2블록 체킹이 true면 좌표를 투입
      // 행의 끝과 열의 끝은 어차피 2*2 블록 체킹이 불가능하므로(범위를 벗어나니까) 
      // 바로 직전 행과 열까지만 순회를 한다.
      for (let i = 0; i < newBoard.length - 1; ++i) {
          for (let j = 0; j < newBoard[0].length - 1; ++j) {
              if (blockCheck(newBoard, i, j)) {
                  coordinates.push([i, j]);
              }
          }
      }
      
      // 투입된 좌표를 바탕으로 해당 2*2블록을 모두 0으로 바꾼다.
      coordinates.forEach(([row, col]) => {
          newBoard[row][col] = 0;
          newBoard[row][col + 1] = 0;
          newBoard[row + 1][col] = 0;
          newBoard[row + 1][col + 1] = 0;
      });
      
      // 0인 값들을 제거(4블록 터트리기)해서 문자를 당기고, 
      // 다시 그만큼 비어진 공간을 바깥에서부터 0으로 채워준다.
      newBoard = newBoard.map(row => {
          const temp = row.filter(col => col !== 0);
          while (temp.length !== m) temp.push(0);
          return temp;
      });
  // 탈출 조건
  } while (coordinates.length > 0)
  
  // 리듀스로 모든 0값들을 합산해서 반환한다. 
  // (모든 0의 개수 === 깨진 블록의 총개수)
  return newBoard.reduce((acc, curr) => {
      return acc += curr.filter(col => !col).length;
  }, 0)
};