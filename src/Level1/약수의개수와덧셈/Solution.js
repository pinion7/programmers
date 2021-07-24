function solution(left, right) {
  // 분석
  // 제곱근 함수를 쓰면 그냥 단번에 끝낼 수도 있다.
  // 제곱근을 씌웠을 때 정수로 딱 떨어진다는 얘기는, 약수의 개수가 홀수개란 얘기다.
  // 이유는 보통 숫자 n의 구할 때, 대부분은 서로 다른 두 개의 숫자를 곱했을 때 => n을 만족하면 두 수를 약수로 판정하곤 한다.
  // 그래서 대부분의 약수의 개수는 짝수이다. 헌데 가끔 자기 자신을 제곱해서 n이 되는 약수도 있다. 
  // 그런 경우, 숫자 n은 홀수개의 약수를 가질 수밖에 없다.
  // 결국 정리하자면, 제곱근 함수는 약수개가 홀수인지를 즉각적으로 판정해줄 수 있는 함수인 것이다.
  
  // 풀이
  // 1. 값을 합산할 변수 선언 후, 곧바로 반복문을 실행한다.
  // 제곱근 함수만 적용한 값 vs. 제곱근 함수 + 정수화까지 적용한 값이 같은지를 체크하면 된다.
  let sum = 0;
  for (let i = left; i <= right; ++i) {
      if (Math.sqrt(i) === parseInt(Math.sqrt(i))) sum -= i;
      else sum += i;
  }
  return sum;
}