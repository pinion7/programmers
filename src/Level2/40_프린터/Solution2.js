function solution(priorities, location) {
  // 풀이 2
  // 다시보니 객체를 활용하여 풀면 더 편하게 location을 체크할 수도 있다.

  // 우선 배열의 요소들을 전부 객체화 시켜준다.
  // 그리고 인덱스를 주어 최초의 인덱스를 기억하게 한다.
  const newArr = priorities.map((el, idx) => {
    return { priority: el, index: idx };
  });
  // 큐를 선언하고 초기값은 허수로 준다.(초기값이 없으면 location 탐색에서 에러가 뜸)
  const queue = [{ pirority: -1, index: -1 }];

  // 그리고 while문으로 훑으며 진행해보자.
  while (true) {
    // 이번엔 최대값을 구하기가 까다롭기 때문에 최대값이 아닌 경우로 탐색해주자.
    // 항상 반복문의 시작점에선 처음 요소의 값을 받아 둔다.
    let firstEl = newArr.shift();
    // filter가 익숙하겠지만 some을 소개할겸 써보겠다.
    // some은 조건에 만족하는 게 하나라도 있으면 바로 true를 반환해주고,
    // 아닐 때만 전부 훑기 때문에 유용하다. 이 문제에선 filter보다 효율이 더 좋다.
    let temp = newArr.some((el) => el.priority > firstEl.priority);

    // 만약 첫 요소 값이 최대값이라면 아무것도 담기지 않으므로, 큐에 넘겨주면 된다.
    if (!temp) queue.push(firstEl);
    // 그게 아니라면 firstEl을 다시 newArr의 뒤에 푸쉬해준다.
    else newArr.push(firstEl);

    // location이 들어왔는지 체크한다.
    if (queue[queue.length - 1].index === location) {
      // 초기값으로 허수를 넣어뒀기 때문에, 큐의 길이 -1을 반환해야 한다.
      return queue.length - 1;
    }
  }
}
