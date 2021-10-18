function solution(N, road, K) {
  // 분석
  // 다익스트라 알고리즘을 활용해보자.
  // 다익스트라는 최단경로를 계속해서 갱신한다.
  // 출발지를 기준으로 인접 마을의 최단 시간을 저장한다.
  // 그리고 인접 마을 중 아직 방문하지 않은 곳 중에서 가장 시간이 짧은 마을을 선택한다.
  // 해당 마을 거쳐갈 수 있는 경로 중에서 최단 시간이 있으면 전체를 또 갱신해준다.
  // 그리고 다시 첫 출발지로부터 인접마을 중 방문하지 않은 곳이 있으면 그곳을 선택해서
  // 갱신을 하고, 첫 출발지로부터 인접마을에 다 방문을 했다면, 다음 인접 마을을 기준으로
  // 다시 방문하지 않은 곳을 찾는 식으로, 계속 반복적으로 최단 시간을 갱신해간다.
  
  // 풀이
  // 다익스트라 배열과, 인접리스트 객체를 선언하여 진행하는 게 적절할 것 같다.
  // 방문하지 않은 요소엔 처음에 최대시간인 500,000을 줘보자
  const dijkstra = [];
  const adjList = [];
  for (let i = 0; i <= N + 1; ++i) {
      dijkstra.push(500000);
      adjList.push({});
  }
  
  road.forEach(el => {
      if (adjList[el[0]][el[1]] === undefined) {
          adjList[el[0]][el[1]] = el[2];
          adjList[el[1]][el[0]] = el[2];
      }
      else if (adjList[el[0]][el[1]] > el[2]) {
          adjList[el[0]][el[1]] = el[2];
          adjList[el[1]][el[0]] = el[2];
      }
  })
      
  const queue = [1];
  dijkstra[1] = 0;
  
  while (queue.length > 0) {
      let index = queue.shift();
      let temp = adjList[index];
      
      for (let key in temp) {
          if (dijkstra[key] > dijkstra[index] + temp[key]) {
              dijkstra[key] = dijkstra[index] + temp[key];
              queue.push(key)
          }
      }
  }
  
  return dijkstra.filter(el => el <= K).length;
}