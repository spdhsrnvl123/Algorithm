# ๐ Array Method(forEach,map,reduce,filter)

## ๐**forEach**

**for๋ฌธ ๋๋ฆฌ๋๊ฑฐ๋ ๊ฐ์ ๊ฐ๋.**<br />
<u>MDN - Array.prototype.forEach</u><br/>
<span style="color:skyblue">**Array.prototype(callback[, thisArg])**</span><br />
<span style="color:yellow">callback : function(currentValue[, index[, originalArray]])</span>

- <span style="color:green">currentValue : ํ์ฌ๊ฐ</span>
- <span style="color:green">index : ํ์ฌ ์ธ๋ฑ์ค</span>
- <span style="color:green">originalArray : ์๋ณธ๋ฐฐ์ด</span>

<span style="color:yellow">thisArg : this์ ํ ๋นํ  ๋์. ์๋ต์ global๊ฐ์ฒด</span>

```js
const a = [1, 2, 3];
a.forEach(
  function (v, i, arr) {
    console.log(v, i, arr, this);
  },
  [10, 11, 12]
);
/*
1 0ย [1, 2, 3]ย [10, 11, 12]
2 1ย [1, 2, 3]ย [10, 11, 12]
3 2ย [1, 2, 3]ย [10, 11, 12]
*/
```

forEach()ํจ์๋ฅผ ์ฌ์ฉํ  ๋ ์ฝ๋ฐฑํจ์๋ก ์ผ๋ฐ ํจ์๋ฅผ ์ ์ธํ๋ ๊ฒ๊ณผ ES6์ ์ถ๊ฐ๋ ํ์ดํ ํจ์๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์๋ ํฐ ์ฐจ์ด์ ์ด ์๋ค.

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
Windowย {window: Window, self: Window, document: document, name: '', location: Location,ย โฆ}
c++
Windowย {window: Window, self: Window, document: document, name: '', location: Location,ย โฆ}
javascript
Windowย {window: Window, self: Window, document: document, name: '', location: Location,ย โฆ}
*/
```

์์ ์ฝ๋์์ languagesPrint()์ this๋ ํ์ฌ ๊ฐ์ฒด์ธ fun1์ ๊ฐ๋ฆฌํค์ง๋ง, forEach์ ์ธ์๋ก ๋ค์ด๊ฐ ์ฝ๋ฐฑํจ์๋ ๊ทธ๋ ์ง ์๊ธฐ ๋๋ฌธ์ window๊ฐ์ฒด๊ฐ ๋์ค๊ฒ ๋๋ค. ์ด๋ฐ ํ์์ ํด๊ฒฐ ํ  ์ ์๋ ๋ฐฉ๋ฒ์ ๋ค์๊ณผ ๊ฐ๋ค.

```js
//arrow function -> forEach ๋ด๋ถ ํจ์๊ฐ์ ์๋ this๊ณ ์ .
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

๋ค์๊ณผ ๊ฐ์ด ์ฝ๋ฐฑํจ์๋ฅผ arrow function์ผ๋ก ์ ์ธํด์ฃผ๋ฉด, forEach()๋ฅผ ํธ์ถํ๋ this์ ์ฝ๋ฐฑํจ์ ๋ด์ this๋ ๊ฐ๊ฒ ๋๋ฏ๋ก, ๊ฐ์ฒด ๋ณ์๋ฅผ ์ฐธ์กฐํ  ์ ์๊ฒ ๋๋ค.
<br />
โป this๋ฐ์ธ๋ฉ

- ์ ์ญ๊ณต๊ฐ์์ : window / global
- ํจ์ ํธ์ถ์ : window /global
- ๋ฉ์๋ ํธ์ถ์ : ๋ฉ์๋ ํธ์ถ ์ฃผ์ฒด(๋ฉ์๋๋ช ์)
- callback ํธ์ถ์ : ๊ธฐ๋ณธ์ ์ผ๋ก๋ ํจ์๋ด๋ถ์์์ ๋์ผ
- ์์ฑ์ํจ์ ํธ์ถ์ : ์ธ์คํด์ค

## ๐**map**

for๋ฌธ์ ๋๋ ค์ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋๋ ๋ชฉ์ . returnํ์.

[[MDN - Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`Array.prototype.map(callback[, thisArg])`

- `callback`: `function (currentValue[, index[, originalArray]])`
  - `currentValue`: ํ์ฌ๊ฐ
  - `index`: ํ์ฌ ์ธ๋ฑ์ค
  - `originalArray`: ์๋ณธ ๋ฐฐ์ด
- `thisArg`: this์ ํ ๋นํ  ๋์. ์๋ต์ global๊ฐ์ฒด,window๊ฐ์ฒด

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

โป mapํจ์๋ก ์์ฑ๋ ๋ฐฐ์ด์ ๊ธฐ์กด ๋ฐฐ์ด์ด ์๋ ์๋ก์ด ๋ฐฐ์ด์ด๋ค.

```js
const a = [1, 2, 3];
const b = a.map((v) => {
  return v;
});

console.log(a === b); //false
```

## ๐**reduce**

for๋ฌธ์ ๋๋ ค์ ์ต์ข์ ์ผ๋ก ๋ค๋ฅธ ๋ฌด์ธ๊ฐ๋ฅผ ๋ง๋๋ ๋ชฉ์ . returnํ์

`Array.prototype.reduce(callback[, initialValue])`

- `initialValue`: ์ด๊ธฐ๊ฐ. ์๋ต์ ์ฒซ๋ฒ์งธ ์ธ์๊ฐ ์๋ ์ง์ ๋๋ฉฐ, ๋น ๋ฐฐ์ด์์ ์ด๊ธฐ๊ฐ ์์ด reduce()๋ฅผ ํธ์ถํ๋ฉด ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค.
- `callback`: `function (accumulator, currentValue[, currentIndex[, originalArray]])`
  - `accumulator`: ๋์ฐ๊ธฐ๋ ์ฝ๋ฐฑ์ ๋ฐํ๊ฐ์ ๋์ ํ๋ค. ์ฝ๋ฐฑ์ ์ด์  ๋ฐํ๊ฐ ๋๋, ์ฝ๋ฐฑ์ ์ฒซ๋ฒ์งธ ํธ์ถ์ด๋ฉด์ **initialValue**๋ฅผ ์ ๊ณตํ ๊ฒฝ์ฐ์๋ **initialValue**์ ๊ฐ์ด๋ค.
  - `currentValue`: ํ์ฌ๊ฐ.
  - `currentIndex`: ํ์ฌ ์ธ๋ฑ์ค, **initialValue**๋ฅผ ์ ๊ณตํ ๊ฒฝ์ฐ 0, ์๋๋ฉด 1๋ถํฐ ์์.
  - `originalArray`: **reduce()** ๋ฅผ ํธ์ถํ ๋ฐฐ์ด.

```js
const arr = [1, 2, 3];
const res = arr.reduce(function (p, c, i, arr) {
  console.log(p, c, i, arr, this);
  return p + c;
}, 10);

/*
10 1 0ย [1, 2, 3] window
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
}, ""); //''์๋ต์ด 1์ด ์ถ๋ ฅ.
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

**return ์๋ต**

```jsx
const arr = [10, 20, 30, 40, 50];
const r = arr.reduce((p, c) => p + c);
console.log(r); //150
```

### **reduce๋ฅผ ์ฌ์ฉํ๋ฉด ์ข์์ **

**for๋ฌธ์ผ๋ก ๋๋ฆด ๊ฒฝ์ฐ**

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;
for (let b = 0; b < a.length; b++) {
  res += a[b];
}
//55
```

**reduce๋ฌธ์ผ๋ก ๋๋ฆด ๊ฒฝ์ฐ**

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = a.reduce(function (a, c) {
  return a + c;
});
console.log(res); //55
```
