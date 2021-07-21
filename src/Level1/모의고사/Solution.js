function solution(answers) {
  // 분석
  // 뽑기계의 김병만들을 위한 배열을 각각 만들어줘야할 것 같다
  // 반복문으로 각각 배열을 훑으면서 카운트를 해주면 될 것 같다.
  // 물론 병만족들은 배열은 여러 사이클을 돌려야할 수 있기 때문에 사이클이 돌때마다 초기화해줄 필요가 있다.
  // 결국 카운트가 제일 높은 사람을 배열의 형태로 반환하되, 같은 사람이 있을 경우엔 오름차순 정렬로 반환해준다.
  
  // 풀이
  // 우선 병만족들을 위해 변수를 만들어드리자
  const godOfDraw = [1, 2, 3, 4, 5]
  const kingOfDraw = [2, 1, 2, 3, 2, 4, 2, 5]
  const masterOfDraw = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  
  // 엄연히 서열은 존재해야 한다.
  let godIsNo1 = 0;
  let kingIsNo2 = 0;
  let masterIsNo3 = 0;
  
  // 미천한 반복문으로 병만족의 발자취를 쫒아가보자
  for (let i = 0; i < answers.length; ++i) {        
      if (answers[i] === godOfDraw[i % godOfDraw.length]) ++godIsNo1;
      if (answers[i] === kingOfDraw[i % kingOfDraw.length]) ++kingIsNo2;
      if (answers[i] === masterOfDraw[i % masterOfDraw.length]) ++masterIsNo3;
  }
  
  // 결과값으로 활용할 배열을 만들고
  const resultArr = [godIsNo1, kingIsNo2, masterIsNo3]
  
  // 감히 생존한 병만족을 찾아본다
  return resultArr.map((el, idx) => {
      if (el === Math.max(...resultArr)) return idx + 1;
      else return 0;
  }).filter(el => el !== 0).sort((a, b) => a - b)
}