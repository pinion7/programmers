function solution(relation) {
  // 분석
  // 비트 연산자를 쓰면 편하다.
  // 비트 연산자를 활용하면 모든 부분집합을 구할 수 있다.
  
  // 풀이
  // 1. 후보키가 가능한 경우를 담을 배열을 만든다.
  const candidateKey = [];
  
  // 2. 유일성 체크 함수를 만든다.
  // j만큼 비트를 이동시켰을 때, 
  // key와 And비트연산을 하여 1인게 하나라도 있는지를 찾는 것이다.
  // 있으면 부분집합이기 때문에 해당하는 relation의 요소를 문자열에 합쳐주게 된다.
  // 그리고 i값에 대해 j를 한번순회할 때마다, 
  // 만들어둔 Set에 값이 있는지를 확인해준다.
  // 있다는 건 유일성을 만족하지 않는다는 것이므로 곧장 false를 리턴하고, 
  // 없으면 해당 문자열을 Set에 추가해준다.
  // 모든 반복문을 순회했음에도 중복값이 Set에 없었다면, 
  // true를 리턴한다.(유일성을 만족)
  const isOnlyOne = (key) => {
      const keyStrSet = new Set();
      for (let i = 0; i < relation.length; ++i) {
          let keyStr = '';
          for (let j = 0; j < relation[0].length; ++j) {
              if (key & (1 << j)) keyStr += relation[i][j];
          }
          if (keyStrSet.has(keyStr)) return false;
          keyStrSet.add(keyStr);
      }
      return true;
  }
  
  // 3. 최소성 체크 함수를 만든다.
  // 매개변수 key와 후보키에 담아둔 요소를 And비트연산한 결과가, 
  // 연산하지않은 요소와 같다는 건 key의 비트 값에 불필요하게 1이 많다는 것이다.
  // (el의 비트가 1인 부분을 포함하고도 다른 부분에 1이 있다는 것)
  // 이말인 즉슨, 최소성을 만족하지 못한다는 뜻이므로 
  // inNotMinimum함수의 결과로 곧장 true를 반환한다.
  // 모든 후보키를 탐색하고도 위와 같이 초과1비트가 발견되지 않는다면 
  // false를 반환한다.(최소성 만족)
  const isNotMinimum = (key) => {
      for (let el of candidateKey) {
          if ((key & el) === el) return true;
      }
      return false;
  }
  
  // 4. 생성해둔 1~3을 활용하여 후보키가 가능한 조합을 전부 탐색해본다.
  // relation의 모든 가능한 부분집합을 비트 연산자로 치환하여 탐색하는 것이다.
  for (let i = 1; i < (1 << relation[0].length); ++i) {
      // 유일성 체크가 거짓이면, 유일성이 만족하지 않으므로 continue
      if (!isOnlyOne(i)) continue;
      // 최소성 체크가 참이면, 최소성이 만족하지 않으므로 역시 continue
      if (isNotMinimum(i)) continue;
      // 유일성과 최소성을 만족하면 후보키에 투입
      candidateKey.push(i);
  }
  
  // 모든 후보키를 반환하면 끝
  return candidateKey.length;
}