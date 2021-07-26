function solution(dartResult) {
  // 분석
  // 배열에 넣어가며 풀면 된다.
  // 숫자는 바로 배열에 삽입, 숫자와 문자는 반드시 한번은 붙어있기 때문에, 
  // 문자를 체킹했을 땐 직전에 배열에 삽입된 숫자에 제곱해서 값 변환
  // 만약 #이 나오면 직전 삽입 값에 곱하기 -1
  // 만약 *이 나오면 직전과 전전 값에 각각 곱하기 2
  // 그리고 반복문 순회 완료 후, 최종적으로 모두 합산해서 반환
  
  // 풀이
  // 1. 일단 배열화 시키고 1,0 => 10으로 합쳐준다.
  const newArr = dartResult.split('');
  newArr.forEach((el, idx, arr) => {
      if (el === '1' && arr[idx + 1] === '0') {
          arr.splice(idx, 2);
          arr.splice(idx, 0, 10);
      }
  })
  
  // 2. 숫자는 앞에서부터 넣어주고, 문자면 바로 앞에 넣어준 숫자에 작업을 해준다.
  // 3. '*'를 진행할 땐 세부조건을 잘 설정해준다. (참고로 S는 하나마나이기 때문에 연산은 필요 없다)
  const result = [];
  newArr.forEach(el => {
      if (el === 'D') result[0] = result[0] ** 2;
      else if (el === 'T') result[0] = Math.pow(result[0], 3);
      else if (el === '#') result[0] = result[0] * -1;
      else if (el === '*') {
          if (result[1] !== undefined) {
              result[0] = result[0] * 2;
              result[1] = result[1] * 2; 
          }
          else result[0] = result[0] * 2;
      }
      else if (el !== 'S') result.unshift(Number(el))
  })
      
  // 4. reduce로 합산하여 반환한다.
  return result.reduce((acc, curr) => acc + curr)
}