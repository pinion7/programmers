function solution(n, lost, reserve) {
  // 분석
  // 여분의 체육복이 있는 학생이면서 도난을 당한 학생부터 필터해줌 (두 배열에서 모두 제거하면 됨)
  // 그리고 나서, 전체 학생 수에서 체육복을 잃어버린 학생 수를 빼면 기본적으로 체육복이 있는 학생 수가 도출됨
  // 체육복 빌려줄 수 있는지 여부를 체킹할 수 있는 함수를 만들어주고, 
  // 일치하면 함수로부터 해당 인덱스를 반환받아 reserve배열에서 제거하고, 빌려준 갯수 카운트++
  // 일치 하는 게 없으면 아무것도 수행되지 않게끔 패스 한다.
  // 최종적으로 기본 갯수 + 여분으로 보충한 카운트를 더해서 반환
  
  // 풀이
  // 1. 우선 필터로 배열 간의 중복 값 제거
  const newLost = lost.filter(el => !reserve.includes(el))
  const newReserve = reserve.filter(el => !lost.includes(el))
  
  // 2. 여분 체육복 빌려준 카운트를 위한 함수 구현
  const isRent = (lostEl, newReserve) => {
      for (let i = 0; i < newReserve.length; ++i) {
          if (lostEl - 1 === newReserve[i]) return i;
          else if (lostEl + 1 === newReserve[i]) return i;
      }
      return -1;
  }
  
  // 3. 체육복 있는 학생 수
  let defaultVal = n - newLost.length;
  
  // 4. 빌려줄 수 있는 체육복 수 체킹
  let rentCount = 0;
  for (let i = 0; i < lost.length; ++i) {
      const result = isRent (newLost[i], newReserve);
      if (result !== -1) {
          ++rentCount;
          newReserve.splice(result, 1)
      }
  }

  // 5. 기본 체육복 + 빌려줄 수 있는 체육복 수 반환
  return defaultVal + rentCount;
}