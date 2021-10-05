function solution(m, musicinfos) {
  // 분석
  // 반복문에 음악정보 배열을 순회하는데
  // shift로 뽑아서 사용을 하되, 요소는 정규식이나 스플릿해서 가공해야만 한다.
  // 시간에 맞게 악보길이를 만들어주고, 거기에 m이 포함되었는지 비교
  // 만약 정규식에 대해 이해가 가지 않는다면, 본 블로그 내에서 검색하여
  // '12. 파일명 정렬' 문제 최하단의 정규식 설명만 간단히 보고오는걸 추천한다.
  
  // 풀이
  // 1. 멜로디가 일치하는 뮤직을 담을 리스트를 선언하고, while문으로 시작한다.
  const musicList = [];
  while (musicinfos.length > 0) {
      
      // 2. musicinfos를 shift로 뽑고 정규식, split 등으로 가공
      const currInfo = musicinfos.shift();
      const numbers = currInfo.match(/[0-9]+/g);
      const strings = currInfo.split(',').slice(2);
      
      // 3. 재생시간 구하기 ('시'는 '분'으로 변환해주기)
      let playHour = numbers[2] - numbers[0];
      let playTime = numbers[3] - numbers[1];
      if (playHour !== 0) playTime += playHour * 60;
      
      // 3. 재생시간에 맞춘 악보구하기 (정규식으로 2차 가공. 추후 체킹이 편하도록)
      let sheet = strings[1].replace(/[A-Z]#/g, char => {
          return char[0].toLowerCase();
      });
      let share = parseInt(playTime / sheet.length);
      let rest = playTime % sheet.length;
      sheet = sheet.repeat(share) + sheet.slice(0, rest);
      
      // 4. 악보에 m이 포함되어 있는 지를 체크하고 푸쉬 (m도 역시 정규식으로 가공)
      let newM = m.replace(/[A-Z]#/g, char => {
          return char[0].toLowerCase();
      });
      if (sheet.includes(newM)) {
          musicList.push([playTime, strings[0]]);
      }
  } 
  
  // 6. 탈출 직후, musicList를 체크하고, 일치하는 게 하나도 없었다면 아래처럼 처리
  if (musicList.length === 0) return '(None)';
  
  // 7. 재생시간이 긴 것을 0번 인덱스로 가져오기 (시간이 같으면 앞선 배열이 선순위로 옴)
  const result = musicList.sort((a, b) => b[0] - a[0]);
  
  // 8. 결과로 반환해야할 것은 곡의 제목
  return result[0][1];
}