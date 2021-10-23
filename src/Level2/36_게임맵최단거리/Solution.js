function solution(maps) {
  // 분석
  // 가능한 모든 경우의 수를 체크하되, 최단 거리를 요구하기 때문에
  // 반복문 수행시 카운트를 한번씩만 줌으로써 가장 빠른 거리가 리턴되도록 하면 된다.
  // 그리고 방문리스트도 만들어줘야 하는데, 이 문제에선 좌표값들이 0, 1로만 이루어져있기 때문에
  // 따로 사용하지 않아도, 값을 바꿔가면서 방문여부를 체크가 가능하다.
  // bfs가 아니면 풀 수 없다. dfs는 동시에 카운팅이 불가능하다.

  // 풀이
  // 우선 큐, 카운트 변수, 목적지 좌표 등을 선언한다.
  // 큐엔 초기값으로 시작좌표를 넣어준다.
  const queue = [[0, 0]];
  let count = 0;
  let targetRow = maps.length - 1;
  let targetCol = maps[maps.length - 1].length - 1;

  // 큐의 짝꿍 반복문을 소환해주자
  while (queue.length > 0) {
    // 한 차례 탐색이 완료됐을 땐 카운트 값을 올려준다.
    ++count;
    // 큐의 현재 길이를 보관해주고, 큐에 들어 있는 요소만큼 반복문을 돌린다.
    let currLen = queue.length;

    for (let i = 1; i <= currLen; ++i) {
      // 구조분해 할당으로 좌표를 받고,
      let [row, col] = queue.shift();
      // 이미 방문한 지점이면, 곧장 위로 올라가 다음 요소를 탐색한다.
      if (!maps[row][col]) continue;
      // 목적지에 도달했다면 카운트 값을 반환한다.
      if (row === targetRow && col === targetCol) return count;
      // 그렇지 않다면 해당 좌표의 값을 0으로 바꿔줘서, 방문된 것으로 한다.
      maps[row][col] = 0;

      // 그리고 이동을 계속한다.
      // 해당 좌표에서 갈 수 있는 4방향을 전부 탐색해주면 된다.
      // 이동좌표가 maps 행렬의 범위를 벗어나면 안된다는 점에 주의해준다.
      if (row + 1 <= targetRow && maps[row + 1][col]) {
        queue.push([row + 1, col]);
      }
      if (col + 1 <= targetCol && maps[row][col + 1]) {
        queue.push([row, col + 1]);
      }
      if (row - 1 >= 0 && maps[row - 1][col]) {
        queue.push([row - 1, col]);
      }
      if (col - 1 >= 0 && maps[row][col - 1]) {
        queue.push([row, col - 1]);
      }
    }
  }

  // 모든 경우의 수를 체크했음에도 길이 없으면 반복문을 빠져나와 -1을 리턴한다.
  return -1;
}
