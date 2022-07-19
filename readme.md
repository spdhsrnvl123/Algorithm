# ▶ ceil() , floor() , round()

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

# ▶ Number.MIN_SAFE_INTEGER

`Number.MIN_SAFE_INTEGER`상수는 JavaScript에서 안전한 최소 정수값을 나타낸다.

```js
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(x); // -9007199254740992

console.log(x === y); //true
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER

# ▶ forEach,map,reduce,filter

## **forEach**

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

## **map**

for문을 돌려서 새로운 배열을 만드는 목적. return필수.

[MDN - Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

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

## 📘복습완료 20220719 <hr />

## **reduce**

for문을 돌려서 최종적으로 다른 무언가를 만드는 목적. return필수

[MDN - Array.prototype.reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`Array.prototype.reduce(callback[, initialValue])`

- `initialValue`: 초기값. 생략시 첫번째 인자가 자동 지정되며,
  이 경우 currentValue는 두번째 인자부터 배정된다.
- `callback`: `function (accumulator, currentValue[, currentIndex[, originalArray]])`
  - `accumulator`: 누적된 계산값
  - `currentValue`: 현재값
  - `currentIndex`: 현재 인덱스
  - `originalArray`: 원본 배열

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

```jsx
const arr = [10, 20, 30, 40, 50];
const r = arr.reduce((p, c) => p + c);
console.log(r); //150
```

**reduce를 사용하면 좋은점**

```js
//for문으로 돌릴 경우
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;
for (let b = 0; b < a.length; b++) {
  res += a[b];
}
//55
```

```js
//reduce문으로 돌릴 경우
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = a.reduce(function (a, c) {
  return a + c;
});
console.log(res); //55
```

# ▶ replace

String 타입은 replace()함수를 제공하며 이것을 이용하여 문자열의 특정 문자열을 다른 문자열로 변환할 수 있다.<br />
replace()는 먼저 검색되는 1개의 문자열만 반환하는데, 여러 문자열을 변환할 때는 정규 표현식을 이용하여 일치하는 모든 문자열을 변환할 수 있다.

## **1)replace()로 문자열 치환**

```js
let str = "Hello world, Java";
str = str.replace("Java", "JavaScript");
console.log(str); //Hello world, JavaScript
```

바꾸려는 문자열이 여러개 있어도, 처음 찾은 문자열 1개만 변환.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace("Java", "JavaScript");
console.log(str); //Hello world, JavaScript, Java, Java
```

## **2) 정규식을 이용하여 모든 문자열치환**

문자열 안에 변경하려는 문자열을 여러개 있고 모든 문자열을 바꾸고 싶을때, 정규식을 이용하여 모든 문자열을 변경할 수 있다.<br />
replace(/[old str]/g,'[new str]')는 문자열에 있는 모든 old string을 new string으로 변환한다. 아래 예제에서 /Java/g가 정규표현식인데, 정규표현식은 /Pattern/flag처럼 패턴과 플래그로 구성된다.<br/>
그리고 주의할 점은 찾으려는 문자열에 따옴표를 입력하지 않아야 한다.

아래 예제는 문자열에 있는 Java를 모두 JavaScript로 변환하는 예제이다. 플래그 g는 모든 문자열을 변환하라는 의미이다.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace(/Java/g, "JavaScript");
console.log(str); //Hello world, JavaScript, JavaScript, JavaScript
```

## **3) 대소문자 구분하지 않고 문자열 치환**

대소문자를 구분하지 않고 변경하려면 아래처럼 플래그에 i를 추가하시면 된다. 결과를 보면 모든 문자열이 변환된 것을 확인할 수 있다.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace(/Java/gi, "JavaScript");
console.log(str); //Hello world, JavaScript, JavaScript, JavaScript
```

https://codechacha.com/ko/javascript-replace-in-string/

# ▶ toString()

문자타입으로 변환함.

```js
let test = 12345;
test = test.toString();

console.log(test); //'12345'
```

toString()을 사용하지 않고 따옴표를 추가하는 방법

```js
let test = 12345;
test = test + ""; //또는 아래처럼 따옴표를 앞에 위치
```

# ▶ Object.assign()

Javascript의 Object.assign() 함수는 여러 개의 매개변수 객체 중 target 매개변수 객체에 나머지 객체를 병합하는 함수이다. 여러 객체의 프로퍼티를 복사하여 첫 번째 객체의 프로퍼티에 추가한 뒤에 그 객체를 반환하는 함수이다.<br />
javascript의 Object.assign()함수를 사용하기 위해서는 꼭 target 객체를 정해야 한다.

```js
//Object.assign() 함수 사용방법
Object.assign([target 객체],[여러개의 객체])
```

```js
var object1 = { a: 111 };
var object2 = { b: 222 };
var object3 = { c: 333 };
var newObject = Object.assign({}, object1, object2, object3);

console.log(newObject); //{a:111,b:222,c:333}
```

# ▶ 재귀함수

함수가 자신을 다시 호출하는 구조로 만들어진 함수이다. 재귀함수는 종료조건이 있어야 하며, 종료조건을 성정해주지 않으면 무한 반복을 하게된다. 재귀함수로 작성이 되는 코드는 반복문으로도 작성할 수 있다.
https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98

# ▶ splice()

`Array.prototype.splice()`메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용 변경한다.<br />

한마디로 splice() 메서드를 가지고 <span style="color:skyblue">push/pop/unshift/shift</span>역할을 다 할수 있다고 생각하면 된다.

## 구문

> ### array.splice(start[, deleteCount[,item1[, item2], ...]])

- **strat** : 배열의 변경을 시작한 인덱스
- **deleteCount** : 배열에서 제거할 요소의 수
- **item** : 배열에 추가할 요소.(배열 요소를 삭제할 때는 생략)

### 1) 배열 요소 추가

```js
var mine = [0, 1, 2, 3];

//배열 2번째 위치한 곳에 숫자 5를 추가한다.
mine.splice(2, 0, 5); //[0,1,5,2,3]

//배열 2번째 위치한 곳에 숫자 5,7을 추가한다.
mine.spice(2, 0, 5, 7); //[0,1,5,7,5,2,3]
```

### 2) 배열 요소 제거

```js
var mine = [0, 1, 2, 3];

//배열 1번째 부터 1개를 제거한다.
mine.splice(1, 1); //[0,2,3]

//배열 1번째 부터 2개를 제거한다.
mine.splice(1, 2); //[0,3]
```

### 3) 배열 요소 교체

```js
var mine = [0, 1, 2, 3];

//배열 1번째부터 1개를 제거하고 숫자 5개를 추가한다.
mine.splice(1, 1, 5); // [0,5,2,3]

//배열 1번째부터 2개를 제거하고 숫자 5로 추가한다.
mine.splice(1, 2, 5); //[0,5,3]
```

### 배열 요소 추출하기

```js
var mine = [0, 1, 2, 3];

//배열 1번째 부터 1개를 제거한다.
var remove = mine.splice(1, 1); // [1]

//배열 1번째 부터 2개를 제거한다.
var remove = mine.splice(1, 2); // [1,2]
```

https://mine-it-record.tistory.com/352

# ▶ split()

문자열을 일정한 구분자로 잘라서 배열로 저장

> string.split(separator,limit)

- split()함수는, 문자열을 'separator'로 잘라서 'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴.
- separator
  - 필수 아님
  - 문자열을 잘라 줄 구분자(문자열 또는 정규식)
  - 값이 입력되지 않으면 문자열 전체를 배열에 담아서 리턴.
- limit
  - 필수 아님
  - 최대 분할 갯수

### 파라미터를 입력하지 않을 경우

```js
const str = "apple banana orange";
const arr = str.split();

console.log(arr); //['apple banana orange']

console.log(arr.length); //1

//파리미터로 아무것도 전달하지 않으면 문자열 전체를 length 1인 배열에 담아서 리턴.
```

### 단어별로(separator=" ")잘라서 배열에 담기

```js
const str = "apple banana orange";
const arr = str.split(" ");

console.log(arr); //['apple', 'banana', 'orange']

console.log(arr.length); //3

// separator로 " "(스페이스)를 지정하면, 문자열을 구분자로 잘라서 각각의 잘라진 조각들을 배열에 저장하여 리턴.
```

### 글자별로(separator="") 잘라서 배열에 담기

```js
const str = "a b c";

const arr = str.split("");

console.log(arr); //['a', ' ', 'b', ' ', 'c']

console.log(arr.length); //5
//separator로 ""(length가 0인 문자열)을 전달하면, 문자열을 각각의 문자별로 잘라서, 한 글자씩(공백 포함) 배열에 저장하여 리턴.
```

### 특정 구분자로 잘라서 배열에 담기

```js
const str = "apple,banana,orange";

const arr = str.split(",");

console.log(arr); // ['apple', 'banana', 'orange']

console.log(arr.length); //3

//separator(여기서는 ',')를 지정하여,문자열을 separator로 잘라서 만들어진 조각들을 배열에 담아서 리턴.
```

### limit 값 지정하기

```js
const str = "apple,banana,orange";

const arr = str.split(",", 2);

console.log(arr); //['apple', 'banana']

console.log(arr.length); //2

//두번째 파라미터인 limit값을 지정
//위의 예제에서 문자열을 ','로 자르면 총 3개의 배열이 만들어지지만
```

https://hianna.tistory.com/377

# ▶ charCodeAt() , fromCharCode()

## 아스키코드

대문자 아스키넘버 : 65(A) ~ 90(Z) , 소문자 아스키넘버 : 97(a) ~ 122(z)

### charCodeAt()

- 문자를 아스키코드 넘버로 변환.

### fromCharCode()

- 아스키코드를 문자로 변환.

※ 참고

```js
let str = "KoreaTimeGood";
str.toUpperCase();
// str 기본 값이 대문자로 변환되지는 않는다.
```

# ▶ find()

> 판별 함수를 만족하는 첫 요소를 반환

```js
arr.find(callback[, thisArg])
```

- 반환 타입은 찾은 요소의 타입, 없다면 undefinded
- `callback(element,index,array)`<br />
  콜백 함수가 받는 인자(각 인자는 find 메서드를 호출한 배열에서 받아옴)
  - element : 콜백함수에서 처리할 현재 요소.
  - index(optional) : 콜백함수에서 처리할 현재 요소의 인덱스.
  - array(optional) : `find`함수를 호출한 배열.
- `thisArg`<br />
  선택 항목. 콜백이 호출될 때 `this`로 사용할 객체.

- **원하는 요소 찾기**<br />
  원하는 요소를 찾자마자 메서드를 종료함(뒤쪽 요소는 관심조차 주지도 않는다)

```js
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

const find1 = arr.find((element, index, array) => {
  //인덱스 2인 요소를 찾을 때 까지 반복
  console.log("콜백함수를 실행한 배열은? ", array);
  return index == 2;
});
const find2 = arr.find((element, index, arr) => element === 3);
const find3 = arr.find((e) => e > 8);
const find4 = arr.find((e) => e > 10);

console.log("find1:", find1);
console.log("find2:", find2);
console.log("find3:", find3);
console.log("find4:", find4);
```

```js
/*
콜백함수를 실행한 배열은?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
콜백함수를 실행한 배열은?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
콜백함수를 실행한 배열은?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
find1: 9
find2: 3
find3: 9
find4: undefined
*/
```

https://bbaktaeho-95.tistory.com/40

# ▶ slice()

> arr.slice([begin[, end]]) <br />

!["slice"](/images/slice.png)
slice 함수는 잘라낼 배열의 시작 index와 end index를 파라미터로 받아서, 그 사이의 원소들을 새로운 배열로 만들어서 리턴한다.<br />
<span style="color:red">원본배열은 변경되지 않는다.</span>

### `파라미터`

_begin_
잘라낼 배열의 시작 index

_end_
잘라낼 배열의 종료 index<br />
end index의 값은 잘라낼 배열에 포함되지 않습니다.<br />
end index가 생략되면, begin index부터 배열의 끝까지를 잘라낸다.

### `리턴값`

잘라낸 원소들로 만든 새로운 배열을 리턴한다.

```js
const arr = ["a", "b", "c", "d"];

const arr1 = arr.slice(1, 3);
const arr2 = arr.slice(1);
const arr3 = arr.slice(-3, -1);

console.log(arr1); // [ 'b', 'c' ]
console.log(arr2); // ['b', 'c', 'd']
console.log(arr3); // ['b', 'c']
```

# substring()

substring() 메소드는 string 객체의 시작 인덱스로 부터 인덱스 전 까지 문자열의 부분 문자열을 반환한다.

> str.substring(indexStart[, indexEnd])

- indexStart<br />
  반환문자열의 시작 인덱스
- indexEnd<br />
  옵션. 반환문자열의 마지막 인덱스(포함되지 않음.)

```js
const str = "Mozilla";

console.log(str.substring(1, 3)); //"oz"
console.log(str.substring(2)); //"zilla"
```

#
