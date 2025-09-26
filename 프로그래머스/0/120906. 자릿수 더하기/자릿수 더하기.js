function solution(n) {
    let answer = 0;
    answer = String(n).split("").reduce((a,b)=> a+Number(b),0);
    return answer;
}