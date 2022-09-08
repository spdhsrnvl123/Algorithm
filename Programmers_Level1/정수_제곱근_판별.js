function solution(n) {
    var answer = 0;
    
    let sqrt = Math.sqrt(n)
    if(sqrt % 1 !== 0){
        return answer = -1
    }
    answer = (sqrt+1)**2
    return answer;
}