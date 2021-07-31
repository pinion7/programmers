function solution(num) {
  // 분석
  // 반목문으로 약수를 체크하면서 동시에 합쳐주면 된다.
  
  // 풀이 1
  // 1. 제곱근 값을 구하면 절반까지만 체크하고 몫과 나눠준 수를 약수로 구할 수 있다.
  // 2. 반복문으로 몫과 나눈 값을 모두 합산해준다.
  // 3. 제곱근 num이 정수면 이중으로 합산 됐을 것이므로 차감해준다.  

  let sum = 0;
  let sqrtNum = Math.ceil(Math.sqrt(num));
  
  for (let i = num; i >= sqrtNum; --i) {
      if (num % i === 0) {
          sum += i;
          sum += num / i;
      }
  }

  if (sqrtNum === Math.sqrt(num)) {
      sum -= sqrtNum;
  }
  return sum;


  // 풀이 2
  // 처음부터 끝가지 다 체크하는 방식이다. 
  // 코드는 간단해보이지만 숫자가 커질수록 효율성이 떨어진다.
  // let sum = 0;
  // for (let i = num; i > 0; --i) {
  //     if (num % i === 0) sum += i;
  // }
  // return sum;
}