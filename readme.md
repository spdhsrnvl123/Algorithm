# 🎉알고리즘 연습

# 📌 ceil() , floor() , round()

## ceil()

소수점을 올림하여 정수를 반환하는 함수.<br />
ceil()함수를 사용할때는 Math객체를 사용하며 Math객체에게는 다양한 함수들이 존재하며 그중에 ceil()를 사용하게 되면 소수점을 올려 정수를반환하게 된다.

```js
//Maht.ceil([변환 소수점값])
console.log(Math.ceil(8.99)); //9출력
```🎉

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

# indexOf()

문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴한다.

> string.indexOf(searchvalue,position)

- searchvalue : 찾을 문자열,필수 입력값
- position : 기본값은 0, string에서 seachvalue를 찾기 시작할 위치,optional
- 찾는 문자열이 없으면 -1 리턴
- 대소문자를 구분

```js
const str = "abab";

console.log(str.indexOf("ab")); //0
console.log(str.indexOf("ba")); //1
console.log(str.indexOf("abc")); //-1
console.log(str.indexOf("AB")); //-1
```

1. 문자열 'abab'에서 'ab'가 처음으로 나타나는 위치의 인덱스 값을 리턴.
2. 문자열 'abab'에는 'ba'가 처음으로 나타나는 위치의 인덱스 값을 리턴.
3. 문자열 'abab'에는 'abc'라는 문자열이 없으므로 숫자 -1을 리턴.
4. 문자열 'abab'에는 대문자 'AB'는 없으므로 숫자 -1을 리턴(대소문자 구분)

```js
const str = "abab";

console.log(str.indexOf("ab")); //9
console.log(str.indexOf("ab", 1)); //2
```

1. indexOf함수의 두번째 파라미터인 position값이 입력되지 않으면, position의 값은 0으로 처리된다.
   <br />위 예제에서는 'abab'문자열의 0번째 index부터 'ab'문자열을 찾고, 0번째 index에서 문자열 'ab'를 발견하였으므로, 0을 리턴한다.
2. position값을 '1'로 입력하였다.<br />
   위 예제에서는 'abab'문자열의 1번째 index부터 'ab'문자열을 검색하므로 index 0에 있는 'ab'는 무시한다.

### ※ indexOf()로는 찾고자 하는 문자열이 나타난 '첫번째' 위치만 찾을 수 있다. 하지만 약간의 프로그래밍을 통해 문자열에 있는 모든 searchvalue의 위치를 찾을 수 있다.

```js
let str = "abcabcabc";
let searchvalue = "ab";
let pos = 0;

while (true) {
  let foundPos = str.indexOf(searchvalue, pos);
  if (foundPos === -1) break;

  console.log(foundPos);
  pos = foundPos + 1;
}
//0 3 6 출력
```

반복문 안에서 searchvalue를 찾고 나서 positionr값을 foundPos의 다음 index값으로 변경해 준다. 마지막으로 더 이상 문자열을 찾지 못하면 반복문을 종료한다.

# ▶ toFixed()

숫자를 고정 소수점 표기법(fixed-point-notation)으로 표시한다.

### 구문

```
numObj.toFixed([digits])
```

### 매개변수

`digits(optional)`
소수점 뒤에 나타날 자릿수. 0 이상 20 이하의 값을 사용할 수 있으며, 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있다. 값을 지정하지 않으면 0을 사용한다.

### 반환 값

고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값.

