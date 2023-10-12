# 프로그래머스 코딩테스트 Lv1

## 1. 평균구하기
```js
function solution(arr) {
    var answer = 0;
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result += arr[i];
        answer = result/arr.length
    }
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12944)

## 2.약수의 합
```js
function solution(n) {
    var answer = 0;
    for(let i =1;i <= n; i++){
        if(n % i === 0){
            answer += i
        }
    }
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12928)


## 3. 짝수와 홀수
```js
function solution(num) {
    var answer = '';
    if(num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12937)

## 4. 나머지가 1이 되는 수 찾기
```js
function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87389)

## 5. 자연수 뒤집어 배열로 만들기
```js

function solution(n) {
    var answer = [];
    return  n.toString().split('').reverse().map((v)=> parseInt(v));
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12932)

## 6. 자릿수 더하기
```js
function solution(n)
{
    var answer = 0;    
    n.toString().split("").map((v)=>{
        answer+= parseInt(v);
        return answer;
    });
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12931)

## 7. 문자열을 정수로 바꾸기
```js
function solution(s) {
    var answer = 0;
    answer = Number(s)
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12925)

## 8. 문자열 내 p와 y의 개수
```js
function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    
    let sl = s.toLowerCase().split("");
    
    for(let i=0;i<sl.length;i++){
        if(sl[i] === "p"){
            pCount++;    
        }else if(sl[i] === "y"){
            yCount++;
        }
    }
    if(pCount === yCount){
        return answer;
    }else{
        return false
    }
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12916)

## 9. 정수 제곱근 판별
```js
function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n)
    if(sqrt % 1 !== 0){
        return answer = -1
    }
    answer = (sqrt+1)**2
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12934)

## 10. 정수 내림차순으로 배치하기
```js
function solution(n) {
    return parseInt(n.toString().split('').sort((a,b)=>b-a).join('')) 
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12933)

## 11. 하샤드 수
```js
function solution(x) {
    var answer = true;
    console.log(x);
    const arr = x.toString().split("")
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result += Number(arr[i]);
    }
    return x % result === 0 ? true : false;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12947)

## 12. 두 정수 사이의 합
```js
function solution(a, b) {
    var answer = 0;
    if(a < b){
        for(let i=a;i<=b;i++){
        answer += i
      }
    }else{
        for(let i=a;i>=b;i--){
        answer += i
        }
    }
    return answer;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12912)

## 13. 콜라츠 추측
```js
function solution(num) {
    var answer = 0;
    
    while(num !== 1){
        if(num % 2 === 0){
            num /= 2
        }else{
            num = (num*3)+1
        }
        answer +=1;
    }
    
    if(answer >= 500){
        return -1;
    }else{
        return answer;
    }
}
```

[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12943)

## 14. 서울에서 김서방 찾기
```js
function solution(seoul) {
    var answer = '';
    let result = seoul.findIndex((element)=> element === 'Kim');

    return `김서방은 ${result}에 있다`;
}
```
[프로그래머스 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12919)

> 1번 ~ 14번 - 2023.10.12
