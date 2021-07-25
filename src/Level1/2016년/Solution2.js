function solution(a, b) {
  // new Date() 쓰면 간단하게 끝낼 수도 있다.
  // 근데 시간복잡도는 좋지 않다. 
  // 테스트 케이스에 따라 수백 수천배의 처리 속도 차이를 보임 
  // ex) 풀이1 : 0.0001초 / 풀이2: 0.1초
  // 솔루션 1,2 중에 뭐가 더 적절한 방법일지는 잘 생각해봐야 할 것이다.
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}