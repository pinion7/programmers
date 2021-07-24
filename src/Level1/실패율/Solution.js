function solution(N, stages) {
  // 분석
  // 일단 오름차순 정렬한다.
  // 1단계부터 시작한다고 가정했을 때, lastindexOf를 활용해 해당 숫자가 몇번째 인덱스까지 존재하는지 파악한다.
  // 해당 숫자의 개수 / 전체 배열의 길이를 하여 실패율을 구하여, 배열안에 객체로 담는다.(키에는 몇단계인지, 속성값엔 실패율)
  // 해당 인덱스까지 스플라이스로 제거하고, 다시 lastindexOf를 활용하여 위 과정을 반복한다.
  // 객체에 담긴 속성값을 기준으로 내림차순 정렬하고, 맵을 통해 키값을 추출하여 다시 배열의 형태로 반환한다.
  
  // 풀이
  // 1. 우선 stages를 오름차순 정렬한다.
  // 2. 빈 배열 선언하고, 실패율과 스테이지넘버를 담은 객체를 요소로 넣는다.
  // 3. 넣고 나서 더 이상 계산이 필요없는 스테이지 번호들은 제거하여 배열을 좁혀나간다.
  // 4. 마지막엔 실패율 순으로 내림차순 정렬해서 마무리 한다.

  stages.sort((a, b) => a - b)

  const newArr = [];
  for (let i = 1; i <= N; ++i) {
    newArr.push({ 
      failureRate: (stages.lastIndexOf(i) + 1) / stages.length,
      stageNum: i
    })
    stages.splice(0, stages.lastIndexOf(i) + 1)
  }
  
  return newArr.sort((a, b) => b.failureRate - a.failureRate).map(el => el.stageNum)
}