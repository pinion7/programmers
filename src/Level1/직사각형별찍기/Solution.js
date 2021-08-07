process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    // 풀이
    // repeat을 활용하여 a만큼 반복시키고 매번 줄바꿈을 적용해준 문자열을 만든다.
    // 출력시 만들어진 문자열을 b만큼 다시 반복하되 마지막 줄바꿈은 잘라서 반환한다.
    let star = '*'.repeat(a) + '\n';
    console.log(star.repeat(b).slice(0, -1));
});