function solution(n, computers) {
  // 분석
  // 방문행렬을 만들고 DFS를 시행한다.
  // 방문이 안된 행을 기준으로 DFS를 돌리고, 연결된 행의 값은 0으로 바꾼 뒤 방문체크 후 다시 DFS를 진행한다.
  // 방문이 다되서 더이상 갈곳이 없으면 DFS가 끝나고 카운트 1하는 방식으로 체크한다.
  let count = 0;
  const visited = new Array(computers.length).fill(0);
  const DFS = (idx) => {
    for (let i = 0; i < computers.length; ++i) {
      if (computers[idx][i]) {
        computers[idx][i] = 0;
        visited[i] = 1;
        DFS(i);
      }
    }
  };

  for (let i = 0; i < computers.length; ++i) {
    if (!visited[i]) {
      DFS(i);
      ++count;
    }
  }

  return count;
}
