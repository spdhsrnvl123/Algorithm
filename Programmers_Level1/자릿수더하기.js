function solution(n)
{
    var answer = 0;    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    let result = (n+'').split("")
    
    for(let i=0;i<result.length;i++){
        answer += Number(result[i])
    }

    return answer;
}