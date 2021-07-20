function solution(new_id) {
  // 분석 
  // 문제는 간단한데 할 게 많긴 하다.
  // 그리고 단계별로 수행해야 한다. 안그럼 오류 생길 것
  
  // 풀이 
  // 1. 풀이과정 설명은 생략. 문제 설명에 나온 그대로 스탭에 맞춰 수행하면 된다.

  // 1단계
  let new_idArr = new_id.toLowerCase().split('');
  
  // 2단계
  let restrictedVal = "~!@#$%^&*()=+[{]}:?,<>/";
  new_idArr = new_idArr.filter(el => restrictedVal.indexOf(el) === -1);
  
  // 3단계
  for (let i = 0; i < new_idArr.length; ++i) {
      if (new_idArr[i] === '.' && new_idArr[i + 1] === '.') {
          new_idArr.splice(i, 1);
          --i;
      }
  }
  
  // 4단계
  if (new_idArr[0] === '.') new_idArr.shift();
  if (new_idArr[new_idArr.length - 1] === '.') new_idArr.pop();
  
  // 5단계
  if (new_idArr.length === 0) new_idArr.push('a');
  
  // 6단계    
  if (new_idArr.length >= 16) new_idArr = new_idArr.slice(0, 15);
  if (new_idArr[new_idArr.length - 1] === '.') new_idArr.pop();
  
  // 7단계
  while (new_idArr.length <= 2) {
    new_idArr.push(new_idArr[new_idArr.length - 1]);
  }    

  return new_idArr.join('');
}