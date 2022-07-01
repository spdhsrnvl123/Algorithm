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

# ▶ forEach,map,reduce,filter

## forEach

**for문 돌리는거랑 같은 개념.**<br />
<u>MDN - Array.prototype.forEach</u><br/>
<span style="color:skyblue">**Array.prototype(callback[, thisArg])**</span><br />
<span style="color:yellow">callback : function(currentValue[, index[, originalArray]])</span>

- <span style="color:green">currentValue : 현재값</span>
- <span style="color:green">index : 현재 인덱스</span>
- <span style="color:green">originalArray : 원본배열</span>

<span style="color:yellow">thisArg : this에 할당할 대상. 생략시 global객체</span>

```js
const a = [1,2,3]
a.forEach(function(v,i,arr){
    console.log(v,i,arr,this)
},[10,11,12])
/*
1 0 [1, 2, 3] [10, 11, 12]
2 1 [1, 2, 3] [10, 11, 12]
3 2 [1, 2, 3] [10, 11, 12]
*/
```

forEach()함수를 사용할 때 콜백함수로 일반 함수를 선언하는 것과 ES6에 추가된 화살표 함수를 사용하는 것에는 큰 차이점이 있다.

```js
const fun1 = {
    name : 'pyh'
    languages : ['java','c++','javascript'],
    languagesPrint : function(){
        console.log(this.name);
        this.languages.forEach(function(language){
            console.log(language);
            console.log(this);
        });
    }
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
