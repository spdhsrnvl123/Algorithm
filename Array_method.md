# 📖 Array Method(forEach,map,reduce,filter)

## 📌**forEach**

**for문 돌리는거랑 같은 개념.**<br />
<u>MDN - Array.prototype.forEach</u><br/>
<span style="color:skyblue">**Array.prototype(callback[, thisArg])**</span><br />
<span style="color:yellow">callback : function(currentValue[, index[, originalArray]])</span>

- <span style="color:green">currentValue : 현재값</span>
- <span style="color:green">index : 현재 인덱스</span>
- <span style="color:green">originalArray : 원본배열</span>

<span style="color:yellow">thisArg : this에 할당할 대상. 생략시 global객체</span>

```js
const a = [1, 2, 3];
a.forEach(
  function (v, i, arr) {
    console.log(v, i, arr, this);
  },
  [10, 11, 12]
);
/*
1 0 [1, 2, 3] [10, 11, 12]
2 1 [1, 2, 3] [10, 11, 12]
3 2 [1, 2, 3] [10, 11, 12]
*/
```

forEach()함수를 사용할 때 콜백함수로 일반 함수를 선언하는 것과 ES6에 추가된 화살표 함수를 사용하는 것에는 큰 차이점이 있다.

```js
const fun1 = {
  name: "pyh",
  languages: ["java", "c++", "javascript"],
  languagesPrint: function () {
    console.log(this.name);
    this.languages.forEach(function (language) {
      console.log(language);
      console.log(this);
    });
  },
};
fun1.languagesPrint();
/*
pyh
java
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
c++
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
javascript
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/
```

위의 코드에서 languagesPrint()의 this는 현재 객체인 fun1을 가리키지만, forEach의 인자로 들어간 콜백함수는 그렇지 않기 때문에 window객체가 나오게 된다. 이런 현상을 해결 할 수 있는 방법은 다음과 같다.

```js
//arrow function -> forEach 내부 함수값에 있는 this고정.
const fun1 = {
  name: "pyh",
  languages: ["java", "c++", "javascript"],
  languagesPrint: function () {
    console.log(this.name);
    this.languages.forEach((language) => {
      console.log(this.name, language);
    });
  },
};
fun1.languagesPrint();
/*
pyh
pyh java
pyh c++
pyh javascript
*/
```

다음과 같이 콜백함수를 arrow function으로 선언해주면, forEach()를 호출하는 this와 콜백함수 내의 this는 같게 되므로, 객체 변수를 참조할 수 있게 된다.
<br />
※ this바인딩

- 전역공간에서 : window / global
- 함수 호출시 : window /global
- 메서드 호출시 : 메서드 호출 주체(메서드명 앞)
- callback 호출시 : 기본적으로는 함수내부에서와 동일
- 생성자함수 호출시 : 인스턴스

## 📌**map**

for문을 돌려서 새로운 배열을 만드는 목적. return필수.

[[MDN - Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`Array.prototype.map(callback[, thisArg])`

- `callback`: `function (currentValue[, index[, originalArray]])`
  - `currentValue`: 현재값
  - `index`: 현재 인덱스
  - `originalArray`: 원본 배열
- `thisArg`: this에 할당할 대상. 생략시 global객체,window객체

```js
const a = [1, 2, 3];
const b = a.map(
  function (v, i, arr) {
    console.log(v, i, arr, this);
    return this[0] + v;
  },
  [10]
);
/*
1 0 [1, 2, 3] [10]
2 1 [1, 2, 3] [10]
3 2 [1, 2, 3] [10]
*/
console.log(b); // [11,12,13]
```

※ map함수로 생성된 배열은 기존 배열이 아닌 새로운 배열이다.

```js
const a = [1, 2, 3];
const b = a.map((v) => {
  return v;
});

console.log(a === b); //false
```

## 📌**reduce**

for문을 돌려서 최종적으로 다른 무언가를 만드는 목적. return필수

`Array.prototype.reduce(callback[, initialValue])`

- `initialValue`: 초기값. 생략시 첫번째 인자가 자동 지정되며, 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.
- `callback`: `function (accumulator, currentValue[, currentIndex[, originalArray]])`
  - `accumulator`: 누산기는 콜백의 반환값을 누적한다. 콜백의 이전 반환값 또는, 콜백의 첫번째 호출이면서 **initialValue**를 제공한 경우에는 **initialValue**의 값이다.
  - `currentValue`: 현재값.
  - `currentIndex`: 현재 인덱스, **initialValue**를 제공한 경우 0, 아니면 1부터 시작.
  - `originalArray`: **reduce()** 를 호출한 배열.

```js
const arr = [1, 2, 3];
const res = arr.reduce(function (p, c, i, arr) {
  console.log(p, c, i, arr, this);
  return p + c;
}, 10);

/*
10 1 0 [1, 2, 3] window
11 2 1 [1, 2, 3] window
13 3 2 [1, 2, 3] window
console.log(res) //16
*/
```

```js
const arr = ["a", "b", "c", "d"];
const str = arr.reduce(function (res, item, index, array) {
  res[item] = item;
  return res;
}, {});
console.log(str); //{a: 'a', b: 'b', c: 'c', d: 'd'}
```

```js
const arr = [1, 2, 3, 4];
const str = arr.reduce(function (res, item, index, array) {
  return res + item;
}, ""); //''생략이 1이 출력.
console.log(str); //1234
```

```js
const arr = ["a", "b", "c", "d"];
const str = arr.reduce(function (res, item, index, array) {
  return res + item;
});
console.log(str); //abcd
```

```js
const arr = [10, 20, 30, 40, 50];
const r = arr.reduce(function (p, c) {
  return p + c;
});
console.log(r); //150
```

**return 생략**

```jsx
const arr = [10, 20, 30, 40, 50];
const r = arr.reduce((p, c) => p + c);
console.log(r); //150
```

### **reduce를 사용하면 좋은점**

**for문으로 돌릴 경우**

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;
for (let b = 0; b < a.length; b++) {
  res += a[b];
}
//55
```

**reduce문으로 돌릴 경우**

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = a.reduce(function (a, c) {
  return a + c;
});
console.log(res); //55
```
