function solution(info, query) {
  // 분석
  // 정확성과 효율성을 둘다 잡으려면 info를 잘 조작해줘야 한다.
  // info는 기본 데이터라고 할 수 있는데, 이를 조작함으로써
  // 쿼리를 가져다 비교하기 아주 쉬울정도로 적절한 상태로 변환시켜줘야 한다.

  // 풀이
  // 우선은 부분집합 구현 함수를 만든다. info의 수정을 위함이고
  // 이를 객체 형태로 만들 것이기 때문에 구현내부의 디테일이 중요하다.
  const newInfo = {};
  const getCombination = (arr, num, idx) => {
    if (newInfo[arr.join(" ")]) {
      newInfo[arr.join(" ")].push(num);
    } else newInfo[arr.join(" ")] = [num];

    for (let i = idx; i < arr.length; ++i) {
      let temp = arr.slice(0);
      temp[i] = "-";
      getCombination(temp, num, i + 1);
    }
  };

  info.forEach((el) => {
    let newArr = el.split(" ");
    let score = newArr.pop() * 1;
    getCombination(newArr, score, 0);
  });

  for (let key in newInfo) {
    newInfo[key].sort((a, b) => a - b);
  }

  const scores = [];
  const newQuery = query.map((el) => {
    return el.split(" ").filter((el2) => el2 !== "and");
  });

  const result = [];
  newQuery.forEach((el, idx) => {
    scores.push(el.pop() * 1);
    let infoScores = newInfo[el.join(" ")];
    if (infoScores) {
      let left = 0;
      let right = infoScores.length - 1;

      while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (scores[idx] <= infoScores[mid]) right = mid - 1;
        else left = mid + 1;
      }
      result.push(infoScores.length - left);
    } else result.push(0);
  });

  return result;
}
