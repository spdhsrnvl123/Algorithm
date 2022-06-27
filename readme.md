# ▶ ceil() , floor() , round() 함수

## ceil()

소수점을 올림하여 정수를 반환하는 함수.<br />
ceil()함수를 사용할때는 Math객체를 사용하며 Math객체에게는 다양한 함수들이 존재하며 그중에 ceil()를 사용하게 되면 소수점을 올려 정수를반환하게 된다.

```js
//Maht.ceil([변환 소수점값])
console.log(Math.ceil(8.99)); //9출력
```

## floor()

소수점을 버림하여 정수를 반환하는 함수.<br />
floor()함수를 사용할 때는 Math객체를 사용하며 floor()함수를 사용하게 되면 소수점 이하를 버려 나머지 정수를 반환하게 된다.

```js
//Math.floor([변환 소수점값])
console.log(Math.floor(8.99)); //8출력
```

## round()

소수점을 반올림하여 정수를 반환하는 함수.<br />

```js
//Math.round([변환 소수점값])
console.log(Math.round(8.99)); //9출력
console.log(Math.round(8.44)); //8출력
```

# ▶ Number.MAX_SAFE_INTEGER

이 상수는 JavaScript에서 안전한 최대 정수값을 나타낸다.

```js
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
//expected output : 9007199254740991

console.log(x);
// expected output: 9007199254740992
console.log(x === y);
// expected output : true
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
