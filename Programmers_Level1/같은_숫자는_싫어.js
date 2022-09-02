//🌟앞에 인덱스와 뒤에 인덱스를 비교🌟

function solution(arr)
{
    var answer = [];
    
    for(i=0;i<arr.length;i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i])
        }
    }

    return answer;
}
