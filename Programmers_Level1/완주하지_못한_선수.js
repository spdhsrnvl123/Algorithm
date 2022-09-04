function solution(participant, completion) {
    var answer = '';
    const a = participant.sort();
    const b = completion.sort();
        
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return answer += a[i]
    }
    
    return answer;
}