function solution(phone_number) {
  // 풀이 2
  // 문자열의 길이 및 repeat이나 padStart를 활용한다.
  // 1. repeat case
  let star = '*'.repeat(phone_number.length - 4);
  return star + phone_number.slice(-4);
  
  // 2. padStart case
  let lastFour = phone_number.slice(-4);
  return lastFour.padStart(phone_number.length, '*');
}