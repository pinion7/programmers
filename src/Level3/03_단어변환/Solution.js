function solution(begin, target, words) {
  // DFS를 바탕으로 진행하여, 문자열 중 하나만 다르면 DFS를 지속해서 전개하고
  // 답을 찾으면 count값을 result에 넣은 뒤, 깊이를 줄여가며 다른 경우의 수를 찾아본다.
  // 방문 배열을 만들어서 true/false를 바꿔주고, count도 +-를 주면서 DFS를 진행하면 될 것이다.

  if (!words.includes(target)) {
    return 0;
  }

  const visited = new Array(words.length).fill(0);
  const checked = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; ++i) {
      if (str1[i] !== str2[i]) {
        ++count;
      }
    }
    if (count === 1) return true;
    else return false;
  };

  let result = words.length;
  const DFS = (curr, count) => {
    if (curr === target) {
      result = Math.min(result, count);
      return;
    } else {
      for (let i = 0; i < words.length; ++i) {
        if (!visited[i] && checked(curr, words[i])) {
          visited[i] = 1;
          ++count;
          DFS(words[i], count);
          visited[i] = 0;
          --count;
        }
      }
    }
  };

  DFS(begin, 0);
  return result;
}
