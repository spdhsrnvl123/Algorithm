function solution(numbers) {
    var answer = 0;
    
    for(i=0;i<=9;i++){
        if(!numbers.includes(i)){
          answer = answer + i  
        } 
    }
    console.log(answer)
    return answer;
}