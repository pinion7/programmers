function solution(files) {
  // 분석
  // 들어온 문자열을 주어진 우선순위에 맞게 정렬하면 된다.
  // 사전식 정렬을 우선으로 하고, 같다면 숫자순으로 정렬을 진행하기 때문에
  // 문자열을 적절하게 꼼꼼히 가공하는 것이 중요할 것이다.
  
  // 풀이
  // 1. map으로 가공을 하여 각 요소를 객체 형태의 파일 모음으로 변환시킨다.
  // 정규표현식과 match를 사용하면 문자열을 가공하기가 편하다.
  // 각 객체는 원본파일, 문자열파트, 숫자파트를 각각 키와 속성값으로 가진다.
  const newFiles = files.map(file => {
      let str = file.match(/[^0-9]+/)[0].toUpperCase();
      let num = file.match(/[0-9]+/)[0];
      return { file, str, num };
  });
  
  // 2. 가공된 파일을 정렬해준다. 
  // 우선 str을 기준으로 정렬을 하고, str이 같다면 num 기준으로 정렬한다.
  const result = newFiles.sort((a, b) => {
      if (a.str < b.str) return -1;
      else if (a.str > b.str) return 1;
      else if (a.str === b.str) return a.num - b.num;
  });
  
  // 3. 정렬이 완료되었다면 map으로 원본 파일만 뽑아내서 반환한다.
  return result.map(obj => obj.file);
}