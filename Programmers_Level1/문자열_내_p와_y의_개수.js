function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    
    let sl = s.toLowerCase().split("");
    
    for(let i=0;i<sl.length;i++){
        if(sl[i] === 'p') pCount++;    
        if(sl[i] === "y") yCount++;
    }
    
    if(pCount === yCount){
        return answer;
    }else{
        return false;
    }
    
    
    return answer;
}