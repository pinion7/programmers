function solution(numbers) {
  // 분석
  // 보통 짝수 일때는 숫자가 1커질때마다 하나씩만 변화한다.
  // 짝수면 비트의 일의자리가 0이기 때문에, 
  // +1을 해주면 일의자리 하나만 변화하기 때문이다.
  // 홀수면 비트가 0이 처음으로 나오는 자리수의 0을 1로 바꿔주고, 
  // 그전값은 1일테니 그걸 0으로 바꿔주면,
  // 2개이하만 변화한 최소값을 구할 수 있다.

  // 풀이 1
  return numbers.map(num => {
      // 우선 짝수의 경우엔 1을 더한 값을 리턴해주면 된다.
      if (num % 2 === 0) return num + 1;
      // 홀수면 우선 2진수로 변화시키고 값 변화를 위해 배열화 시킨다.
      // 만약 '1'로만 이루어진 숫자라면 앞에 '0'을 넣는다.
      const binaryNum = num.toString(2).split('');
      if (!binaryNum.includes('0')) binaryNum.unshift('0');
      
      // 반복문을 돌려 1의 자리수부터 탐색함으로써 
      // 0이 처음으로 나오면 1로 바꿔주고
      // 그 전 수는 0으로 바꿔준다.
      for (let i = binaryNum.length - 1; i >= 0; --i) {
          if (binaryNum[i] === '0') {
              binaryNum[i] = '1';
              binaryNum[i + 1] = '0';
              break;
          }
      }
      
      // 바뀐 결과를 문자열화하고, parseInt로 10진수화시켜 반환한다.
      return parseInt(binaryNum.join(''), 2);
  })
}