function solution(a, b) {
    var answer = 0;
    // if(a < b){
    //     for(let i=a;i<=b;i++){
    //     answer += i
    //   }
    // }else{
    //     for(let i=a;i>=b;i--){
    //     answer += i
    //     }
    // }
    // console.log(answer);
    for(let i = Math.min(a,b);i<=Math.max(a,b);i++) answer+= i;    
    return answer;
}