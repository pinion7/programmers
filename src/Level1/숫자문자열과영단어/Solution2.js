function solution(str) {
  // 풀이 2 - join을 응용한 풀이
  // 인덱스 번호에 맞게 해당 숫자 문자열들을 배치한 배열을 만듦
  // 반복문으로 이 배열의 요소들 순회하면서, str에 split을 적용
  // str에 해당 요소가 있으면 해당 문자열이 빈문자열로 배열화됨
  // 그때 다시 join을 하되 괄호에 특정값을 주면 빈문자열 부분이 그 값으로 변환되어 문자열화됨
  // 즉, 이런 메카니즘을 활용하여 인덱스번호를 join의 뒤에 넣는것
  // 배열의 인덱스와 요소는 일치하므로, 사라진 문자열이 그대로 숫자로 대체된다고 보면됨
  // 위 과정을 반복하는 데, 만약 str에 요소가 존재하지 않으면 그냥 문자열이 그대로 유지되고
  // 존재하면 숫자로 전부 변환이 되기 때문에, 그걸 넘버타입화 시켜 반환하면 끝.
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for(let i = 0; i < numbers.length; ++i) {
      let arr = str.split(numbers[i]);
      str = arr.join(i);
  }
  return Number(str);
}