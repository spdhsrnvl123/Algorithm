function solution(phone_number) {
    var answer = '';
    const result = phone_number.split("");
    for(let i=0;i<result.length-4;i++){
        result[i] = "*"
    }
    for(let i=0;i<result.length;i++){
        answer += result[i]
    }
    return answer;
}