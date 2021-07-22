function solution(n, lost, reserve) {
  // 분석
  // 여분의 체육복이 있는 학생이면서 도난을 당한 학생부터 필터해줌 (두 배열에서 모두 제거하면 됨)
  // 그리고 나서, 전체 학생 수에서 빌리지 못한 학생 수를 차감하면 결과값이 도출됨
  // 빌리지 못한 학생 수를 구하려면 도난 당한 학생 배열과 빌려줄 수 있는 학생 배열을 비교 한 후,
  // 일치하는 학생 번호는 제거하고, 일치 하지 않는 학생 번호만 남은 배열을 만듦
  // 전체 학생 수에서 해당 배열의 길이를 차감하면 결과가 나올 것
  
  // 풀이
  // 1. 우선 필터로 배열 간의 중복 값 제거
  // 2. filter 안에 findIndex 함수를 사용하여 일치하는 요소값의 인덱스를 구함
  // 3. 일치하지 않으면 true를 반환하여 해당 요소를 lost에 남기고
  // 4. 일치하면, 두번체킹 되지 않도록 newReserve에서 제거한 뒤 false를 반환하여 lost에서 제거
  // 5. 그렇게 만들어진 배열의 길이를 n으로 차감하면 결과값이 됨
  const newLost = lost.filter(el => !reserve.includes(el))
  const newReserve = reserve.filter(el => !lost.includes(el))

  return n - newLost.filter(el => {
      let checkNum = newReserve.findIndex(el2 => el - 1 === el2 || el + 1 === el2)
      if (checkNum !== -1) {
          newReserve.splice(checkNum, 1);
          return false;
      }
      else return true;
  }).length;
}