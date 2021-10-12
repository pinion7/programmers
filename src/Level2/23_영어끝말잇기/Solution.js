function solution(n, words) {
  // 분석
  // 배열을 선언하고 반복문을 돌리면서 이미 말했던 단어들을 담아둔다.
  // 같은 단어가 나오는 순간 해당사람은 패배하며, 
  // 몇번째 사람인지와 몇번째 턴인지를 리턴해야한다.
  // 몇번째 사람인지는 항상 인덱스 나누기 n을 한 결과에 +1을 하면 알 수 있다.
  // 몇 번째 턴인지는 매 반복문이 돌때마다 count를 올려주면서 체크해주면 된다.
  
  // 풀이
  // 1. 중복단어체크 배열 및 멤버별 턴체크 배열 선언 (각각 초기값도 주고 시작)
  const checkWord = [words[0]];
  const turnCheck = new Array(n).fill(0);
  turnCheck[0] = 1;
  
  // 2. 반복문이 시작되자마자 턴을 올려준다.
  // 3. 전 단어의 끝문자와 현 단어의 첫문자를 비교하여 다르면 결과 리턴
  // 4. 중복 문자가 존재하면 역시 결과 리턴 (존재하지 않으면 푸쉬)
  // 결과배열의 경우, 몇 번째 사람인지를 알려면 인덱스에 + 1을 해줘야 함
  // 반면 턴체크의 경우, 순서대로 인덱스를 줘서 체크하는 셈이라 
  // 그대로 저장된 카운트 수를 반환해주면 됨
  for (let i = 1; i < words.length; ++i) {
      turnCheck[i % n]++;
      
      if (words[i - 1].slice(-1) !== words[i][0]) {
          return [i % n + 1, turnCheck[i % n]]
      }
      
      if (checkWord.includes(words[i])) {
          return [i % n + 1, turnCheck[i % n]];
      }
      checkWord.push(words[i]);
  }
  
  // 5. 반복문이 끝날 때까지 조건에 걸리지 않으면 실수한 사람이 없는 것
  return [0, 0];
}