# 📖 Math객체

## 📌 Math.ceil

소수점을 올림하여 정수를 반환하는 함수.<br />
ceil()함수를 사용할때는 Math객체를 사용하며 Math객체에게는 다양한 함수들이 존재하며 그중에 ceil()를 사용하게 되면 소수점을 올려 정수를반환하게 된다.

```js
//Maht.ceil([변환 소수점값])
console.log(Math.ceil(8.99)); //9출력
```

## 📌 Math.floor

소수점을 버림하여 정수를 반환하는 함수.<br />
floor()함수를 사용할 때는 Math객체를 사용하며 floor()함수를 사용하게 되면 소수점 이하를 버려 나머지 정수를 반환하게 된다.

```js
//Math.floor([변환 소수점값])
console.log(Math.floor(8.99)); //8출력
```

## 📌 Math.round

소수점을 반올림하여 정수를 반환하는 함수.<br />

```js
//Math.round([변환 소수점값])
console.log(Math.round(8.99)); //9출력
console.log(Math.round(8.44)); //8출력
```

## 📌 Math.sqrt
`Math.sqrt()` 함수는 숫자의 제곱근을 반환한다.

### 문법
```
Math.sqrt(x)
```
x는 숫자이다.

```js
Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
```

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

## 📌 Math.pow
Math.pow 함수는 승수를 계산한 결과를 반환한다.

### 문법
```
Math.pow(값,지수)
```

```js
// 2의 3승(2^3)을 구하고 싶다면

Math.pow(2,3) //결과 : 8
Math.pow(0,1) //결과 : 0
Math.pow(1,10) //결과 : 1
Math.pow(3,3)  //결과 : 27
Math.pow(-3,3) //결과 : -27
```
참고 : https://tagilog.tistory.com/1098

## 📌 Math.min
Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환한다.

### 문법
```
Math.min(value[, value2],...])
```

```js
Math.min(10,20) //결과 : 10
Math.min(200,10) // 결과 : 10
```
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min

💥Math.abs & Math.max 정리하기