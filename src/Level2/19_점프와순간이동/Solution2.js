function solution(n) {
  let binaryN = n.toString(2).split('');
  return binaryN.filter(bit => bit * 1).length;
}