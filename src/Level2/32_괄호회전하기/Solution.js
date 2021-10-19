function solution(str) {
  // 분석
  // 이동시키고 스택돌리고 이동시키고 스택돌리는 식으로하면 될 것 같다.
  // 스택돌리는 것을 함수로 구현해주고, 참일때 카운트 거짓을때는 카운트하지 않는다.
  
  // 풀이
  // 올바른 괄호 문자열 체크하는 함수부터 구현한다.
  const isValid = (arr) => {
      const bracket = [ '[]', '()', '{}'];
      const stack = [];
      for (let el of arr) {
          stack.push(el);
          let len = stack.length;
          if (bracket.includes(stack[len - 2] + stack[len - 1])) {
              stack.pop();
              stack.pop();
          }
      }
      if (stack.length === 0) return true;
      return false;
  }
  
  // 카운트 변수 선언, 문자열을 배열화시킨다.
  let count = 0;
  let newArr = str.split('');
  // 길이만큼 반복시키면 문자열 전체가 한바퀴 순회를 할 수 있다.
  // true일 때만 카운트++
  for (let i = 0; i < newArr.length; ++i) {
      if (isValid(newArr)) ++count;
      newArr.push(newArr.shift());
  }
  
  return count;
}