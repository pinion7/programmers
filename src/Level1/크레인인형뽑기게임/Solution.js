function solution(board, moves) {    
  // 분석
  // 스택으로 push, pop을 이용해 풀면 된다.
  // moves 배열을 기준으로 순회하며 board의 해당되는 인덱스에 찾아가는 식으로 한다
  // 0이 아닌 행 중 가장 인덱스 번호가 낮은 행의 값과 비교한다.
  // 적절한 조건문으로 경우를 나눠 다른 작업을 해주고, pop할때(인형이 터지는 순간) 카운트+2
  // moves 배열 전체를 훑으면서 위 과정을 진행하고, 최종 카운트를 반환하면 끝난다.
  
  // 풀이
  // 1. 우선 stack 배열, 카운트 변수를 선언한다.
  const stack = [];
  let count = 0;
  
  // 2. moves를 훑으면서 동시에 board도 순회한다.
  moves.forEach(mvEl => {
    // 3. 인형이 뽑혀서 옮겨지면 반드시 해당 요소의 값을 0으로 바꿔준다.
    // 4. 단, 순서를 잘못 설정하면 값을 푸쉬하기 전에 0이 되기 때문에, 값을 stack에 먼저 넣는다.
    // 5. 인형이 들어간 순간 break로 탈출하여 곧장 다음 요소 탐색으로 넘어간다.
    for (let bdEl of board) {
      if (bdEl[mvEl - 1] === stack[stack.length - 1]) {
          stack.pop();
          bdEl[mvEl - 1] = 0;
          count = count + 2;
          break;                
      }
      else if (bdEl[mvEl - 1] !== 0) {
          stack.push(bdEl[mvEl - 1]);
          bdEl[mvEl - 1] = 0;
          break;
      }
    }
  })

  return count;
}