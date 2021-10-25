function solution(numbers) {
  // 분석
  // 순열과 조합에 대한 이해가 무조건 필요하다.
  // 조합은 순서가 상관 없지만, 순열은 순서를 필요로 한다.
  // 때문에 경우의 수가 어마무시하게 차이날 수밖에 없다.
  // 이 문제는 완전탐색을 요구하는 문제이기 때문에 모든 것을 고려해야 한다.
  // 그리고 모든 경우의 수에 대해 소수인지를 체크할 수 있어야 한다.
  // 그렇게 해서 나온 소수의 개수를 리턴하면 문제가 해결될 수 있다.

  // 풀이
  // 1. 우선 배열화시키고, 순열을 담을 배열을 선언해준다.
  const arrNumbers = numbers.split("");
  const permutations = [];

  // 2. 순열 함수를 구현한다.
  const getPermutations = (arr, bucket, len) => {
    if (bucket.length === len) {
      permutations.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; ++i) {
      const temp = arr.slice();
      temp.splice(i, 1);
      getPermutations(temp, bucket.concat(arr[i]), len);
    }
  };

  // 3. 소수체크 함수도 만들어주자
  const isPrime = (num) => {
    // 2는 소수이다
    if (num === 2) return true;
    // 1이거나 2를 제외한 짝수면 소수가 아니다.
    if (num === 1 || num % 2 === 0) return false;

    // 위에서 걸러지지 않는 수에 대해 제곱근을 씌워 체크를 하면 효율적이다.
    // 이에 대한 설명은 1레벨 소수체크 문제를 참고하길 바란다.
    let sqrtNum = Math.floor(Math.sqrt(num));

    // 어차피 짝수는 다 걸러진 상태이기 때문에 홀수만 체크해준다.
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 4. 이제 가능한 길이의 순열 숫자를 모두 구해본다.
  for (let i = 1; i <= numbers.length; ++i) {
    getPermutations(arrNumbers, [], i);
  }

  // 5. 모든 순열에 대해 소수체킹을 하고, 중복값인지도 체크하여 배열에 넣어준다.
  const result = [];
  permutations.forEach((el) => {
    let num = el.join("") * 1;
    if (!result.includes(num) && isPrime(num)) result.push(num);
  });

  // 6. 배열의 길이가 곧 가능한 소수의 개수이다.
  return result.length;
}
