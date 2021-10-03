function solution(s) {
  // 분석
  // 짝짓기 문제는 스택을 활용하면 편하다.
    
  // 풀이
  // 1. 우선 스택을 선언하고, 반복문을 돌린다.
  // 2. 반복문의 첫 줄에는 항상 s를 하나씩 푸쉬한다.
  // 3. 스택의 끝에서 두번째 요소와, 마지막 요소의 합이 올바른 괄호형태인지 체크한다.
  // 4. 조건에 부합한다면 완성된 괄호를 제거하고, 아니면 계속 반복문을 진행한다.
  // 5. 단, 탐색 중간에 한번이라도 역방향 괄호가 쌓이면 false를 반환해야 한다.
  // (5번은 효율성을 위해 추가된 것이다. 즉, 5번 조건이 없어도 정확성은 통과한다.)
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    stack.push(s[i]);
    let bracket = stack[stack.length - 2] + stack[stack.length - 1];
    if (bracket === '()') {
      stack.pop();
      stack.pop();
    }
    else if (bracket === ')(') return false;
  }
    
  // 6. 반복문이 끝났을 때 stack에 남아있는 게 없다면 전부 올바른 괄호였던 것이다.
  // 즉, 그렇다면 true를 반환하고, 하나라도 남아있다면 false를 반환한다.
  if (stack.length === 0) return true;
  return false;
}