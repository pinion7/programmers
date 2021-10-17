function solution(clothes) {
  // 분석
  // 종류가 같은 옷끼리 묶어서 개수를 세고
  // 각 종류별로 1종류씩 2종류씩 3종류씩부터 ... n종류씩까지 곱한 경우의 수를
  // 전부 합산하면 결과 값이 나올 것이다
  
  // 풀이
  // clothes의 1번 인덱스를 키로하고, 속성값으론 같은 종류의 옷을 카운팅
  const dressRoom = {};
  clothes.forEach(el => {
      if (dressRoom[el[1]] === undefined) dressRoom[el[1]] = 1;
      else ++dressRoom[el[1]];
  })
  
  // dressRoom에 쌓인 옷종류별 카운팅 개수를 배열에 푸쉬
  const closet = [...Object.values(dressRoom)];

  // 같은 종류의 옷으로 분류하여 경우를 담았음에도 
  // closet의 길이가 최대 30개에 도달한다는 건
  // 전부 다른 종류의 옷이 각각 하나씩 있다는 뜻이므로, 
  // 그냥 해당 경우의 수를 곧장 리턴해준다.
  // 2의 n승 -1을 하면 n개로 만들 수 있는 모든 조합의 경우의 수를 알 수 있다.
  if (closet.length === 30) return Math.pow(2, 30) - 1;
  
  // 멱집합 함수 구현
  // 임시 배열에 멱집합 공식으로 closet의 조합을 전부 담기 위함
  let temp = [];
  const getSubsets = (idx, arr) => {
      temp.push(arr);
      for (let i = idx; i < closet.length; ++i) {
          getSubsets(i + 1, arr.concat(closet[i]));
      }
  }
  // 멱집합 실행
  getSubsets(0, []);
  // 최초엔 []이기에 쉬프트해서 버림
  temp.shift();
  
  // 리듀스를 사용하여 각 조합을 곱함으로써 옷종류별 모든 경우의 수 합산하기
  // 뎁스 1 리듀스는 합하기, 뎁스 2 리듀스는 곱하기임
  const result = temp.reduce((acc, curr) => {
      acc += curr.reduce((acc2, curr2) => acc2 * curr2);
      return acc;
  }, 0)
  
  // 결과 반환
  return result;
}