function solution(number, k) {
  // 분석
  // 스택을 활용해주면 된다.
  // number를 반복문으로 순회하며, 스택의 마지막인덱스 값과 비교해서
  // 작으면 그냥 푸쉬, 크면 마지막인덱스값을 pop하고 푸쉬
  // k는 pop될때마다 1씩차감해주고, k가 0이될 때 반복문을 탈출하고 결과반환하면 된다.
  
  // 풀이
  // 우선 배열화 및 숫자화 시켜주고, 스택 선언
  const newNum = number.split('').map(el => el * 1);
  const stack = [newNum.shift()];
  let restLen = newNum.length - k;
  
  // newNum을 순회하며 stack의 마지막 인덱스 값과 비교 체크
  // stack의 마지막 인덱스가 newNum 현재값보다 작으면 제거 및 k차감. 
  // 단 if가 아닌 while을 조건을 사용하여, 작으면 계속 pop
  // 그리고나서 stack에 현재 newNum값 푸쉬
  // 그게 아니라 stack의 값이 newNumd의 현재값보다 더 크면 그냥 푸쉬
  for (let i = 0; i < newNum.length; ++i) {
      while (k !== 0 && stack[stack.length - 1] < newNum[i]) {
          stack.pop();
          --k;
      }
      if (stack[stack.length - 1] >= newNum[i]) {
          stack.push(newNum[i]);
      }
      else stack.push(newNum[i]);
  }
  
  // 남은 k가 0이면 바로 문자열화 시켜서 리턴
  // 그게 아니면 k만큼 뒷 인덱스 제거 후 반환
  if (k === 0) return stack.join('');
  return stack.slice(0, stack.length - k).join('');
};