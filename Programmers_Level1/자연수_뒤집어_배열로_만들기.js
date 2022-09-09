function solution(n) {
    var answer = [];
    
    const transition = String(n).split("")
    
    for(let i = transition.length-1;i >= 0;i--){
        answer.push(Number(transition[i]))
    }
    
    return answer;
}