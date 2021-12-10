function solution(genres, plays) {
  // 객체로 두 배열을 재정리하고 결과를 구해본다.
  // 장르를 키로 두고, 해당 장르에 속하는 재생횟수와 인덱스 번호를 2차원 배열의 형태로 배열 안에 저장한다.
  // 또한 장르별 재생횟수 총합을 저장할 객체도 만들어서 카운팅한다.
  // 우선순위 장르를 산출하고, 이를 바탕으로 재생횟수가 높은 값부터 내림차순 정렬한다.
  // 앞에서부터 정렬된 결과의 인덱스 번호에 접근하여 최대 2개씩 푸쉬하여 마무리한다.

  const genresObj = {};
  const genresScore = {};

  genres.forEach((genre, idx) => {
    if (genresObj[genre] === undefined && genresScore[genre] === undefined) {
      genresObj[genre] = [[plays[idx], idx]];
      genresScore[genre] = plays[idx];
    } else {
      genresObj[genre].push([plays[idx], idx]);
      genresScore[genre] += plays[idx];
    }
  });

  const genresOrder = Object.entries(genresScore)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);

  const result = [];
  for (let priority of genresOrder) {
    const temp = genresObj[priority].sort((a, b) => b[0] - a[0]);
    result.push(temp[0][1]);
    if (temp[1]) {
      result.push(temp[1][1]);
    }
  }

  return result;
}
