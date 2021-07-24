function solution(numbers) {    
	// 풀이 2
  // new Set() 활용
  const newArr = [];
  numbers.forEach((el, idx) => {
    for (let i = idx + 1; i < numbers.length; ++i) {
      newArr.push(el + numbers[i])
    }
  })
    
  // Set에 넣는 것 만으로 중복된 값은 하나만 남는다.
  return [...new Set(newArr)].sort((a, b) => a - b); 
  
  
    /* 이 외에도 Set로 선언된 변수는 has, add, delete 등으로 확인, 추가, 삭제 등을 할 수도 있고
    아래 예시같은 교집합이나
    var intersection = new Set([...set1].filter(el => set2.has(el)));
    차집합도 흉내낼 수 있다.
    var difference = new Set([...set1].filter(el => !set2.has(el))); */
}