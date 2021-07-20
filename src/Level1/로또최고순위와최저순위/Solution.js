function solution(lottos, win_nums) {
  // 분석
  // 우선 배열 간의 동일한 숫자가 몇개인지 파악한다.
  // 그리고 나서 lottos안에 0이 몇개인지 파악한다.
  // 동일한 숫자 개수에 0의 개수만큼 가산하면 최고 순위가 되고
  // 0의 개수를 가산하진 않으면 최저 순위가 된다.
  
  // 풀이
  // 1. 반복문을 돌려 win_nums에 lottos 각 요소값이 포함되어 있는지 여부를 체크한다.
  // 2. 1회 체크 될 때마다 카운트를 올린다.
  // 3. lottos에 0이 몇 개 존재하는지도 별도로 카운트 한다.
  // 4. 당첨번호개수별 순위를 담은 객체를 생성한다.
  // 5. 결과배열 선언하고 반복문 돌려서 결과값 담아낸다.
  // 6. 단, winCount가 0이고, winCount + zeroCount도 0이면 반복문에서 6이 하나만 들어오므로 [6, 6]을 반환해준다. 


  let zeroCount = 0;
  let winCount = 0;
  
  for (let el of lottos) {
      if (win_nums.indexOf(el) !== -1) ++winCount;
      if (el === 0) ++zeroCount;
  }
  
  const rankObj = {
      1: 6,
      2: 5,
      3: 4,
      4: 3,
      5: 2,
      6: 1
  };
  
  if (winCount === 0 && winCount + zeroCount === 0) return [6, 6];

  let result = [];
  for (let key in rankObj) {
      if (winCount + zeroCount === rankObj[key]) {
          result.push(Number(key));
      }
      if (winCount === rankObj[key]) {
          result.push(Number(key));
      }
      else if (key === '6' && winCount === 0) {
          result.push(6);
      }
  }

  return result;    
}