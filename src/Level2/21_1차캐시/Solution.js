function solution(cacheSize, cities) {
  // 분석
  // 사이즈에 맞는 크기의 배열을 만들고
  // 그 배열에 속해있는 값이 아니면 캐시미스로써 +5
  // 그 배열에 속해 있으면 캐시 히트로 +1
  // 항상 순회할때마다 캐시사이즈로 만든 배열은 쉬프트 푸쉬를 반복해줌
  // 즉, 캐시 히트든, 미스든 지속적으로 업데이틑 해줘야 함.
  // LRU방식이기 때문
  
  // 풀이
  // 우선 map으로 모든 문자를 대문자로 통일시킨다.
  const newCities = cities.map(el => el.toUpperCase());
  
  // 시간을 체크할 변수와, 큐배열을 캐시사이즈의 크기로 선언
  let time = 0;
  const queue = new Array(cacheSize).fill(0);
  // 캐시사이즈가 0이면 그냥 모두 미스이기 때문에 
  // 반복문을 들어갈 필요 없이 실행시간을 반환한다.
  if (queue.length === 0) return cities.length * 5;
  
  // 반복문으로 순회하며 실행시간을 체크한다.
  for (let i = 0; i < newCities.length; ++i) {
      let hitIdx = queue.indexOf(newCities[i]);
       // 인덱스가 -1이면(캐시 미스면), 
       // 가장 오래전에 사용된 것을 교체(즉, shift, push)
      if (hitIdx === -1) {
          time += 5;
          queue.shift();
          queue.push(newCities[i]);
      }
      // 인덱스가 -1이 아니면(즉 캐시 히트면), 
      // 히트된 것을 최신으로 땡겨야 하므로(splice, push)
      else {
          ++time;
          queue.splice(hitIdx, 1);
          queue.push(newCities[i]);
      }
  }
  
  // 더 이상 체크할 도시가 없으면 탈출하여 결과 반환
  return time;
}