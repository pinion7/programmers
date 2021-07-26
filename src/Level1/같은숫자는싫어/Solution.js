function solution(arr) { 
  // 풀이 1
  // 큐를 만들어 하나씩 넣으면서 체크하면 된다.
  const queue = [];
  
  arr.forEach(el => {
      if (queue[queue.length - 1] !== el) queue.push(el);
  })
  return queue;
}