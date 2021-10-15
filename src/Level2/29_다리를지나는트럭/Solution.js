function solution(bridge_length, weight, truck_weights) {
  // 분석
  // 큐를 만들되, bridge_length길이만큼 숫자 0을 넣어서 배열을 만들어줘야 한다.
  // 그래서 최대 트럭이 올라설 수 있는 범위를 제한한다
  // 그리고 동시에 무게를 항상 체킹하면서 트럭을 진입시켜준다.
  // 중요한 건 시간은 항상 멈추지 않고 흐른다는 부분이다.
  // 그렇기에 반목문의 끝에는 count가 항상 ++되어야 하며
  // 즉, 트럭이 진입을 하든 못하든, 계속 큐배열은 푸쉬와와 쉬프트가 일어나야 한다.
  
  // 풀이
  // 우선 큐를 선언하고, 숫자 0으로 채워보자. (+ 시간카운트도 선언)
  let queue = new Array(bridge_length).fill(0);
  let count = 0;
  
  // 배열의 합을 구하는 함수를 구현해보자.
  const sum = (arr) => {
      return arr.reduce((acc, curr) => acc + curr)
  }
  
  // 큐와 짝꿍인 while문을 만든다.
  // 큐 배열이 모두 비어버리면 반복문을 끝낸다.
  while (queue.length > 0) {
      // 다리 위에 있는 트럭의 무게와 진입을 준비하고 있는 트럭의 무게가
      // weight이하일 때 진입허용해주는 조건문을 우선 만든다.
      if (sum(queue) + truck_weights[0] <= weight) {
          queue.shift();
          queue.push(truck_weights.shift());
      }
      // 그 다음에 반대 조건문도 만들어주는데, 주의해야할 점은
      // 조건에 만족하면 진입과 배출이 동시에 일어날 수 있기 때문에
      // queue[0]을 쉬프트하고 나서는 진입이 가능한지도 한번 더 체크해줘야한다.
      else if (sum(queue) + truck_weights[0] > weight) {
          queue.shift();
          // 가능하다면 트럭을 푸쉬해주고
          if (sum(queue) + truck_weights[0] <= weight) {
              queue.push(truck_weights.shift());
          }
          // 아니면 0을 푸쉬한다.
          else queue.push(0);
      }
      // 그리고 마지막으로 트럭의 배열이 0이 되더라도, 
      // 큐배열에 있는 트럭이 다 배출되는 시간까지 체크해야 하므로
      // 큐에 더이상 0을 넣지 않는다.
      else if (sum(queue) !== 0 && truck_weights.length === 0) {
          queue.shift();
      }
      // 시간은 항상 1초씩 흐른다.
      ++count;
  }
  return count;
}