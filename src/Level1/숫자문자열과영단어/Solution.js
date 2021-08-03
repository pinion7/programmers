function solution(str) {
  // 분석
  // 문자열을 훑으면서, 숫자가 나오면 곧바로 result에 푸쉬
  // 문자가 나오면 객체에 있는 키인지 체크
  // 키가 아니면 다음 문자열과 합쳐서 계속 체크
  // 키와 일치하는 순간 해당 값을 result에 푸쉬하면 된다.
  
  // 풀이 - 객체를 활용한 풀이
  // 1. 우선 문자와 숫자를 키, 값으로 하는 객체를 만든다.
  let objNum = {
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9'
  }
  
  // 2. 결과 변수, 임시조합 변수, 객체의 vaule값을 담은 배열을 선언한다.
  let result = '';
  let temp = '';
  const nums = Object.values(objNum);
  
  // 3. 반복문으로 탐색한다.
  // 숫자가 있으면 바로 투입
  // 없으면 임시 변수에 지속적으로 합쳐주기
  // 객체 내의 키로 존재하는지 체크
  // 존재하면 결과변수에 속성값을 넣고, 초기화
  for (let el of str) {
      if (nums.includes(el)) result += el;
      else temp += el;
      if (temp in objNum) {
          result += objNum[temp];
          temp = '';
      }
  }
  return result * 1;
}