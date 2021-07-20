function solution(record) {
  // 분석
  // 1. record 요소의 첫 단어에는 진입, 퇴장, 닉네임변경이 있는데,
  // 실질적으로 결과 배열에 요소를 만들어내는 것은 진입, 퇴장 뿐이다.
  // 닉네임변경은 업데이트에 불과하다. (+결과값 멘트에도 영향을 준다)
  // 2. 아이디는 닉네임을 결정짓는 중요한 부분인데, 
  // 진입, 퇴장, 닉네임변경 모두에 영향을 받는다는 점을 주의해야 한다.
  // 3. 닉네임은 실제 출력결과로 드러나는 비주얼 결과값이며,
  // 무엇보다 아이디에 따라 좌지우지 되는 부분임을 명심해야 한다.
  
  // 풀이
  // 1. 객체를 만들고, key에는 id를 담고 속성값은 닉네임을 담는다.
  // 2. 반복문을 처음부터 끝까지 돌리면서 닉네임을 계속업데이트 해주며, 해당 id가 가질 최후의 닉네임을 찾는다.
  // 3. 결과 배열 선언 후, Enter랑 Leave일 때만 고려하여, 이미 업데이트 완료된 닉네임을 넣어준다.

  const obj = {};
  
  record.forEach(el => {
      if (el.split(' ')[2] !== undefined) {
          obj[el.split(' ')[1]] = el.split(' ')[2];
      }
  })
  
  const result = [];
  
  record.forEach(el => {
      if (el.split(' ')[0] === 'Enter') {
          result.push(`${obj[el.split(' ')[1]]}님이 들어왔습니다.`);
      }
      else if (el.split(' ')[0] === 'Leave') {
          result.push(`${obj[el.split(' ')[1]]}님이 나갔습니다.`);
      }
  })
  
  return result;
}