function solution(nums) {
  // 풀이
  // 1. reduce를 사용하는 것이 효과적이다.
  // 2. 빈 배열에, 중복되지 않은 nums의 요소값만 담는다
  // 3. 기존 nums 배열의 길이를 2로 나눈 값이 새로운 배열의 길이보다 크면, 새로운 배열의 길이를 리턴한다.
  // 4. 반대로 작으면, nums 배열이 길이를 2로 나눈 값을 리턴한다.

  const newNums = nums.reduce((acc, curr) => {
      if (acc.indexOf(curr) === -1) acc.push(curr)
      return acc;
  }, []);
  
  if (nums.length / 2 < newNums.length) {
      return nums.length / 2;
  }
  return newNums.length;
}