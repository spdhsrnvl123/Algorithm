function solution(seoul) {
    var answer = '';
    
    const location = seoul.findIndex((element) => element === "Kim")
    answer += `김서방은 ${location}에 있다`
    
    return answer;
}