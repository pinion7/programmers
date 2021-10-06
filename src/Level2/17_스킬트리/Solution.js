function solution(skill, skill_trees) {
  // 분석
  // skill에 없는 trees의 문자열을 제거하고,
  // skill을 하나하나 뽑아내면서 수정된 trees의 요소들을 탐색한다.
  // 순서가 어긋나면 false, 어긋난 적이 없다면 true를 반환하도록 필터를 하고,
  // 남은 배열의 길이를 반환하면 된다.
  
  // 풀이
  // skill에 포함되는 문자열들만 남은 요소들을 만들기 위해
  // map과 filter를 함께 적용해준다.
  const valid_Skills = skill_trees.map(trees => {
      return trees.split('').filter(str => skill.includes(str));
  })
  
  // 필터를 통해 남은 배열들만 유효하게끔 걸러준다.
  const result = valid_Skills.filter(trees => {
      // 큐에 모두 넣어서 while문을 돌린다.
      const queue = skill.split('');
      // 우선 요소들 중에 길이가 0인것은 아예 skill에 해당하는 기술이 없었다는 뜻이고
      // 그렇다면 어떤 순서든 상관이 없기 때문에 true를 반환한다.
      // queue의 길이가 0이 된다는 건 
      // skill이 모두 존재함과 동시에 정상적인 순서로 진행됐는 것이고
      // treed의 길이가 먼저 0이 된다는 건 skill이 끝까지 존재하진 않지만, 
      // 정상순서로 진행은 됐다는 뜻이다.
      while (trees.length > 0 && queue.length > 0) {
          let currStr = queue.shift();
          // 만약 순서가 어긋낫다면 곧장 false를 반환하는 조건문이다.
          if (trees[0] !== currStr) return false;
          // while문을 순회할 때마다 항상 tree의 길이를 하나씩 잘라주면서 비교해준다.
          trees = trees.slice(1);
      }
      // 무사히 탈출하면 true다.
      return true;
  })
  
  // 결과 배열의 길이가 곧 올바른 스킬트리의 개수이다.
  return result.length;
}