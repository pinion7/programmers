function solution(strings, n) {    
  // 풀이 2 
  // sort가 아닌 문자열 정렬하는 함수를 쓰는 방법도 있다.
  // sort는 배열의 형태에만 적용가능하지만, localeCompare는 문자열에 적용가능하니 알아두면 나쁠 건 없을 것이다.
  // 앞문자열과 뒷문자열을 비교 후 앞문자열이 알파벳상 순서가 빠르면 음수를 반환하고
  // 반대면 양수를 반환하는 식의 함수이다
  // 시간효율은 풀이1에 비해 안좋긴 하다. 아무래도 문자열을 훑는 자체가 배열 탐색보단 느릴 수밖에 없다.
  // 배열은 그만큼 가장 빠른 자료구조에 속하기 때문일 것이다.
  return strings.sort((a, b) => {
      if (a[n] === b[n]) return a.localeCompare(b);
      else return a[n].localeCompare(b[n]);
  })
  
  // * 번외 풀이 아래처럼 조건문 대신 삼항연산자를 사용할 수도 있다.
  // return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}