function solution(numbers) {
    var answer = [];
    
    //4
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<i;j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    
    //[5,0,2,7] 디버깅
    //1) - 0 실행안됨
    //2) - 1 0 = 0 + 5 = 5
    //3) - 2 0 = 2 + 5 = 7
    //4) - 2 1 = 2 + 0 = 2
    //5) - 3 0 = 7 + 5 = 12
    //6) - 3 1 = 7 + 0 = 7
    //7) - 3 2 = 7 + 2 = 9
    
    return [...new Set(answer)].sort((a,b)=>a-b);
}