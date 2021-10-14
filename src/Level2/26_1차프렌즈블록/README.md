### 1차 프렌즈 4블록

---

###### 문제 설명

문제 설명에 이미지가 많아 공식 링크로 대체
https://programmers.co.kr/learn/courses/30/lessons/17679

##### 입력 형식

- 입력으로 판의 높이 m, 폭 n과 판의 배치 정보 board가 들어온다.
  2 ≦ n, m ≦ 30
  board는 길이 n인 문자열 m개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.

##### 출력 형식

- 입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.

##### 입출력 예

let output = solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
console.log(output); // 14

output = solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);
console.log(output); // 15

##### 입출력 예 설명

입출력 예제 1의 경우, 첫 번째에는 A 블록 6개가 지워지고, 두 번째에는 B 블록 4개와 C 블록 4개가 지워져, 모두 14개의 블록이 지워진다.
입출력 예제 2는 본문 설명에 있는 그림을 옮긴 것이다. 11개와 4개의 블록이 차례로 지워지며, 모두 15개의 블록이 지워진다.
