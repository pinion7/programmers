function solution(numbers, hand) {
  // 풀이
  // 1. 인접리스트 객체를 만들고, 만들어진 객체에 각각의 키패드번호에 대한 키와 속성값을 만들어준다.
  // 2. 모든 키패드 번호를 하나하나 key로 만들고, 각각의 key에 할당될 속성값에는 상하좌우로 인접한 번호를 배열의 형태로 모두 담는다.
  // 3. 0,2,5,8의 경우 배열 속의 배열로 넣어 거리를 구분해준다.
  // 4. 0,2,5,8의 배열 속의 배열을 해석해보자면, [0][0]은 거리 0, [0][1]은 거리 1, [0][2]는 거리 2 ... 를 나타낸다고 할수있다.
  // 5. 결과를 담아줄 변수와 왼손 오른손의 상태를 나타내줄 변수를 만든다.
  // 6. 반복문을 돌리며 문제 조건에 맞게 손가락의 이동을 체크함으로써, result변수에 합산해간다.

  const adjList = {
      0: [[0], [8, '*', '#'], [5, 7, 9], [2, 4, 6], [1, 3]],
      1: [1, 2, 4],
      2: [[2], [1, 3, 5], [4, 6, 8], [0, 7, 9], ['*', '#']],
      3: [2, 3, 6],
      4: [1, 4, 5, 7],
      5: [[5], [2, 4, 6, 8], [0, 1, 3, 7, 9], ['*', '#']],
      6: [3, 5, 6, 9],
      7: [4, 7, 8, '*'],
      8: [[8], [0, 5, 7, 9], [2, 4, 6, '*', '#'], [1, 3]],
      9: [6, 8, 9, '#'],   
      '*': [0, 7, '*'],
      '#': [0, 9, '#']
  };
  
  let result = '';
  let leftStatus = '*';
  let rightStatus = '#';
  
  for (let el of numbers) {
      if (el === 1 || el === 4 || el === 7) {
          result += 'L';
          leftStatus = el;
      }
      else if (el === 3 || el === 6 || el === 9) {
          result += 'R';
          rightStatus = el;
      }
      else if (el === 2 || el === 5 || el === 8 || el === 0) {
          for (let i = 0; i < adjList[el].length; ++i) {
              if (adjList[el][i].includes(leftStatus) && adjList[el][i].includes(rightStatus)) {
                  result += hand[0].toUpperCase();
                  if (hand[0] === 'r') rightStatus = el;
                  else leftStatus = el;
                  break;
              }
              else if (adjList[el][i].includes(leftStatus)) {
                  result += 'L';
                  leftStatus = el;
                  break;
              }
              else if (adjList[el][i].includes(rightStatus)) {
                  result += 'R';
                  rightStatus = el;
                  break;
              }
          }
      }
  }
  return result;
}