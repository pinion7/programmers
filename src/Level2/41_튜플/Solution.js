function solution(str) {
  // 풀이
  // 1. replace를 문자열 전체에 적용하기 위해 정규표현식 //g 를 사용한다.
  // 2. { 혹은 }면 ''로 대체 하고, ','에 따라 배열화 시킨다.
  // 3. 일단 하나의 객체 형태로 갯수별 카운팅을 한다. 반복문을 돌려 숫자가 없으면 1, 있으면 ++;
  // 4. num, val을 키로 하여, 숫자하나에 값 하나를 가지는 객체 형태로 분리 생성해준다. 
  // 5. 동시에 위의 결과를 새로운 배열에 투입한다.
  // 6. 해당 배열을 sort로 정렬하고, map으로 타입 변환하여 반환한다.

  const arr = str.replace(/{|}/g, '').split(',');
  
  const obj = {};

  arr.forEach(el => {
      if (obj[el] === undefined) obj[el] = 1;
      else ++obj[el];
  })
  
  const newArr = [];
  
  for (let key in obj) {
      newArr.push({ num: key, val: obj[key] })
  }
  
  return newArr.sort((a, b) => b.val - a.val).map(el => el.num * 1);
}