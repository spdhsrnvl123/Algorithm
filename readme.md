# π ceil() , floor() , round()

## ceil()

μμμ μ μ¬λ¦Όνμ¬ μ μλ₯Ό λ°ννλ ν¨μ.<br />
ceil()ν¨μλ₯Ό μ¬μ©ν λλ Mathκ°μ²΄λ₯Ό μ¬μ©νλ©° Mathκ°μ²΄μκ²λ λ€μν ν¨μλ€μ΄ μ‘΄μ¬νλ©° κ·Έμ€μ ceil()λ₯Ό μ¬μ©νκ² λλ©΄ μμμ μ μ¬λ € μ μλ₯Όλ°ννκ² λλ€.

```js
//Maht.ceil([λ³ν μμμ κ°])
console.log(Math.ceil(8.99)); //9μΆλ ₯
```

## floor()

μμμ μ λ²λ¦Όνμ¬ μ μλ₯Ό λ°ννλ ν¨μ.<br />
floor()ν¨μλ₯Ό μ¬μ©ν  λλ Mathκ°μ²΄λ₯Ό μ¬μ©νλ©° floor()ν¨μλ₯Ό μ¬μ©νκ² λλ©΄ μμμ  μ΄νλ₯Ό λ²λ € λλ¨Έμ§ μ μλ₯Ό λ°ννκ² λλ€.

```js
//Math.floor([λ³ν μμμ κ°])
console.log(Math.floor(8.99)); //8μΆλ ₯
```

## round()

μμμ μ λ°μ¬λ¦Όνμ¬ μ μλ₯Ό λ°ννλ ν¨μ.<br />

```js
//Math.round([λ³ν μμμ κ°])
console.log(Math.round(8.99)); //9μΆλ ₯
console.log(Math.round(8.44)); //8μΆλ ₯
```

# βΆ Number.MAX_SAFE_INTEGER

μ΄ μμλ JavaScriptμμ μμ ν μ΅λ μ μκ°μ λνλΈλ€.

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

# βΆ Number.MIN_SAFE_INTEGER

`Number.MIN_SAFE_INTEGER`μμλ JavaScriptμμ μμ ν μ΅μ μ μκ°μ λνλΈλ€.

```js
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(x); // -9007199254740992

console.log(x === y); //true
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER

## **filter**

`filter()`λ©μλλ μ£Όμ΄μ§ ν¨μμ νμ€νΈλ₯Ό ν΅κ³Όνμ¬ λͺ¨λ  μμλ₯Ό λͺ¨μ μλ‘μ΄ λ°°μ΄λ‘ λ°ννλ€.

### νΉμ§

- κ°μ΄ μ‘΄μ¬νλ μΈλ±μ€μ λν΄μλ§ νΈμΆ.
- μ­μ  λλ κ°μ΄ μλ λ°°μ΄μ filter ν¨μκ° μ€νλμ§ μλλ€.
- κΈ°μ‘΄ λ°°μ΄μ κ°μ λ³κ²½νμ§ μλλ€.π
- μ²λ¦¬λλ λ²μλ callbackμ μ²« νΈμΆ μ μ μ€μ . callback νΈμΆ ν κΈ°μ‘΄ λ°°μ΄μ μΆκ°ν΄λ μΆκ°λ μμλ filter ν¨μμμ λ°μλμ§ μλλ€.

### κ΅¬λ¬Έ

```
arr.filter(callback(element[, index[, array]])[, thisArg])
```

### λ§€κ°λ³μ

- `callback`<br />
  κ° μμλ₯Ό νμ€νΈ ν  ν¨μ.
  - element : `true`λ₯Ό λ°ννλ©΄ μμλ₯Ό μ μ§νκ³ ,`false`λ₯Ό λ°ννλ©΄ λ²λ¦°λ€. λ€μ μΈ κ°μ§ λ§€κ°λ³μλ₯Ό λ°λλ€. μ²λ¦¬ν  νμ¬ μμ.
  - index(Optional) : μ²λ¦¬ν  νμ¬ μμμ μΈλ±μ€.
  - array(Optional) : `filter`λ₯Ό νΈμΆν λ°°μ΄.
- `thisArg(Optional)` callbackμ μ€νν  λ `this`λ‘ μ¬μ©νλ κ°.

### λ°ν κ°

νμ€νΈλ₯Ό ν΅κ³Όν μμλ‘ μ΄λ£¨μ΄μ§ μλ‘μ΄ λ°°μ΄. μ΄λ€ μμλ νμ€νΈλ₯Ό ν΅κ³Όνμ§ λͺ»νμΌλ©΄ λΉ λ°°μ΄μ λ°ννλ€.

κΈΈμ΄κ° 6μ΄μμΈ λ¨μ΄ νν°λ§

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result); // ['exuberant', 'destruction', 'present']
```

λ°°μ΄ μμμμ 5μ λ°°μμΈ μμλ§ λ°ν

```js
var arr = [1, 5, 8, 10, 12, 15, 16, 20];

var newArr = arr.filter((data) => {
  return data % 5 === 0 ? true : false;
});

console.log(newArr); //[5,10,15,20]
```

μ°Έκ³  : https://developer-talk.tistory.com/2

### λ°°μ΄ λ΄μ© κ²μ

```js
let movies = ["avengers", "Thor", "spiderman", "Ironman", "antman"];

const filterMovie = (query) => {
  return movies.filter((value) => {
    return value.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};

console.log(filterMovie("man"));
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

# βΆ replace

String νμμ replace()ν¨μλ₯Ό μ κ³΅νλ©° μ΄κ²μ μ΄μ©νμ¬ λ¬Έμμ΄μ νΉμ  λ¬Έμμ΄μ λ€λ₯Έ λ¬Έμμ΄λ‘ λ³νν  μ μλ€.<br />
replace()λ λ¨Όμ  κ²μλλ 1κ°μ λ¬Έμμ΄λ§ λ°ννλλ°, μ¬λ¬ λ¬Έμμ΄μ λ³νν  λλ μ κ· ννμμ μ΄μ©νμ¬ μΌμΉνλ λͺ¨λ  λ¬Έμμ΄μ λ³νν  μ μλ€.

## **1)replace()λ‘ λ¬Έμμ΄ μΉν**

```js
let str = "Hello world, Java";
str = str.replace("Java", "JavaScript");
console.log(str); //Hello world, JavaScript
```

λ°κΎΈλ €λ λ¬Έμμ΄μ΄ μ¬λ¬κ° μμ΄λ, μ²μ μ°Ύμ λ¬Έμμ΄ 1κ°λ§ λ³ν.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace("Java", "JavaScript");
console.log(str); //Hello world, JavaScript, Java, Java
```

## **2) μ κ·μμ μ΄μ©νμ¬ λͺ¨λ  λ¬Έμμ΄μΉν**

λ¬Έμμ΄ μμ λ³κ²½νλ €λ λ¬Έμμ΄μ μ¬λ¬κ° μκ³  λͺ¨λ  λ¬Έμμ΄μ λ°κΎΈκ³  μΆμλ, μ κ·μμ μ΄μ©νμ¬ λͺ¨λ  λ¬Έμμ΄μ λ³κ²½ν  μ μλ€.<br />
replace(/[old str]/g,'[new str]')λ λ¬Έμμ΄μ μλ λͺ¨λ  old stringμ new stringμΌλ‘ λ³ννλ€. μλ μμ μμ /Java/gκ° μ κ·ννμμΈλ°, μ κ·ννμμ /Pattern/flagμ²λΌ ν¨ν΄κ³Ό νλκ·Έλ‘ κ΅¬μ±λλ€.<br/>
κ·Έλ¦¬κ³  μ£Όμν  μ μ μ°ΎμΌλ €λ λ¬Έμμ΄μ λ°μ΄νλ₯Ό μλ ₯νμ§ μμμΌ νλ€.

μλ μμ λ λ¬Έμμ΄μ μλ Javaλ₯Ό λͺ¨λ JavaScriptλ‘ λ³ννλ μμ μ΄λ€. νλκ·Έ gλ λͺ¨λ  λ¬Έμμ΄μ λ³ννλΌλ μλ―Έμ΄λ€.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace(/Java/g, "JavaScript");
console.log(str); //Hello world, JavaScript, JavaScript, JavaScript
```

## **3) λμλ¬Έμ κ΅¬λΆνμ§ μκ³  λ¬Έμμ΄ μΉν**

λμλ¬Έμλ₯Ό κ΅¬λΆνμ§ μκ³  λ³κ²½νλ €λ©΄ μλμ²λΌ νλκ·Έμ iλ₯Ό μΆκ°νμλ©΄ λλ€. κ²°κ³Όλ₯Ό λ³΄λ©΄ λͺ¨λ  λ¬Έμμ΄μ΄ λ³νλ κ²μ νμΈν  μ μλ€.

```js
let str = "Hello world, Java, Java, Java";

str = str.replace(/Java/gi, "JavaScript");
console.log(str); //Hello world, JavaScript, JavaScript, JavaScript
```

https://codechacha.com/ko/javascript-replace-in-string/

# βΆ toString()

λ¬ΈμνμμΌλ‘ λ³νν¨.

```js
let test = 12345;
test = test.toString();

console.log(test); //'12345'
```

toString()μ μ¬μ©νμ§ μκ³  λ°μ΄νλ₯Ό μΆκ°νλ λ°©λ²

```js
let test = 12345;
test = test + ""; //λλ μλμ²λΌ λ°μ΄νλ₯Ό μμ μμΉ
```

# βΆ Object.assign()

Javascriptμ Object.assign() ν¨μλ μ¬λ¬ κ°μ λ§€κ°λ³μ κ°μ²΄ μ€ target λ§€κ°λ³μ κ°μ²΄μ λλ¨Έμ§ κ°μ²΄λ₯Ό λ³ν©νλ ν¨μμ΄λ€. μ¬λ¬ κ°μ²΄μ νλ‘νΌν°λ₯Ό λ³΅μ¬νμ¬ μ²« λ²μ§Έ κ°μ²΄μ νλ‘νΌν°μ μΆκ°ν λ€μ κ·Έ κ°μ²΄λ₯Ό λ°ννλ ν¨μμ΄λ€.<br />
javascriptμ Object.assign()ν¨μλ₯Ό μ¬μ©νκΈ° μν΄μλ κΌ­ target κ°μ²΄λ₯Ό μ ν΄μΌ νλ€.

```js
//Object.assign() ν¨μ μ¬μ©λ°©λ²
Object.assign([target κ°μ²΄],[μ¬λ¬κ°μ κ°μ²΄])
```

```js
var object1 = { a: 111 };
var object2 = { b: 222 };
var object3 = { c: 333 };
var newObject = Object.assign({}, object1, object2, object3);

console.log(newObject); //{a:111,b:222,c:333}
```

# βΆ μ¬κ·ν¨μ

ν¨μκ° μμ μ λ€μ νΈμΆνλ κ΅¬μ‘°λ‘ λ§λ€μ΄μ§ ν¨μμ΄λ€. μ¬κ·ν¨μλ μ’λ£μ‘°κ±΄μ΄ μμ΄μΌ νλ©°, μ’λ£μ‘°κ±΄μ μ±μ ν΄μ£Όμ§ μμΌλ©΄ λ¬΄ν λ°λ³΅μ νκ²λλ€. μ¬κ·ν¨μλ‘ μμ±μ΄ λλ μ½λλ λ°λ³΅λ¬ΈμΌλ‘λ μμ±ν  μ μλ€.
https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98

# βΆ splice()

`Array.prototype.splice()`λ©μλλ λ°°μ΄μ κΈ°μ‘΄ μμλ₯Ό μ­μ  λλ κ΅μ²΄νκ±°λ μ μμλ₯Ό μΆκ°νμ¬ λ°°μ΄μ λ΄μ© λ³κ²½νλ€.<br />

νλ§λλ‘ splice() λ©μλλ₯Ό κ°μ§κ³  <span style="color:skyblue">push/pop/unshift/shift</span>μ­ν μ λ€ ν  μ μλ€κ³  μκ°νλ©΄ λλ€.

## κ΅¬λ¬Έ

> ### array.splice(start[, deleteCount[,item1[, item2], ...]])

- **strat** : λ°°μ΄μ λ³κ²½μ μμν μΈλ±μ€
- **deleteCount** : λ°°μ΄μμ μ κ±°ν  μμμ μ
- **item** : λ°°μ΄μ μΆκ°ν  μμ.(λ°°μ΄ μμλ₯Ό μ­μ ν  λλ μλ΅)

### 1) λ°°μ΄ μμ μΆκ°

```js
var mine = [0, 1, 2, 3];

//λ°°μ΄ 2λ²μ§Έ μμΉν κ³³μ μ«μ 5λ₯Ό μΆκ°νλ€.
mine.splice(2, 0, 5); //[0,1,5,2,3]

//λ°°μ΄ 2λ²μ§Έ μμΉν κ³³μ μ«μ 5,7μ μΆκ°νλ€.
mine.spice(2, 0, 5, 7); //[0,1,5,7,5,2,3]
```

### 2) λ°°μ΄ μμ μ κ±°

```js
var mine = [0, 1, 2, 3];

//λ°°μ΄ 1λ²μ§Έ λΆν° 1κ°λ₯Ό μ κ±°νλ€.
mine.splice(1, 1); //[0,2,3]

//λ°°μ΄ 1λ²μ§Έ λΆν° 2κ°λ₯Ό μ κ±°νλ€.
mine.splice(1, 2); //[0,3]
```

### 3) λ°°μ΄ μμ κ΅μ²΄

```js
var mine = [0, 1, 2, 3];

//λ°°μ΄ 1λ²μ§ΈλΆν° 1κ°λ₯Ό μ κ±°νκ³  μ«μ 5κ°λ₯Ό μΆκ°νλ€.
mine.splice(1, 1, 5); // [0,5,2,3]

//λ°°μ΄ 1λ²μ§ΈλΆν° 2κ°λ₯Ό μ κ±°νκ³  μ«μ 5λ‘ μΆκ°νλ€.
mine.splice(1, 2, 5); //[0,5,3]
```

### λ°°μ΄ μμ μΆμΆνκΈ°

```js
var mine = [0, 1, 2, 3];

//λ°°μ΄ 1λ²μ§Έ λΆν° 1κ°λ₯Ό μ κ±°νλ€.
var remove = mine.splice(1, 1); // [1]

//λ°°μ΄ 1λ²μ§Έ λΆν° 2κ°λ₯Ό μ κ±°νλ€.
var remove = mine.splice(1, 2); // [1,2]
```

https://mine-it-record.tistory.com/352

# βΆ split()

λ¬Έμμ΄μ μΌμ ν κ΅¬λΆμλ‘ μλΌμ λ°°μ΄λ‘ μ μ₯

> string.split(separator,limit)

- split()ν¨μλ, λ¬Έμμ΄μ 'separator'λ‘ μλΌμ 'limit' ν¬κΈ° μ΄νμ λ°°μ΄μ μλΌμ§ λ¬Έμμ΄μ μ μ₯νμ¬ λ¦¬ν΄.
- separator
  - νμ μλ
  - λ¬Έμμ΄μ μλΌ μ€ κ΅¬λΆμ(λ¬Έμμ΄ λλ μ κ·μ)
  - κ°μ΄ μλ ₯λμ§ μμΌλ©΄ λ¬Έμμ΄ μ μ²΄λ₯Ό λ°°μ΄μ λ΄μμ λ¦¬ν΄.
- limit
  - νμ μλ
  - μ΅λ λΆν  κ°―μ

### νλΌλ―Έν°λ₯Ό μλ ₯νμ§ μμ κ²½μ°

```js
const str = "apple banana orange";
const arr = str.split();

console.log(arr); //['apple banana orange']

console.log(arr.length); //1

//νλ¦¬λ―Έν°λ‘ μλ¬΄κ²λ μ λ¬νμ§ μμΌλ©΄ λ¬Έμμ΄ μ μ²΄λ₯Ό length 1μΈ λ°°μ΄μ λ΄μμ λ¦¬ν΄.
```

### λ¨μ΄λ³λ‘(separator=" ")μλΌμ λ°°μ΄μ λ΄κΈ°

```js
const str = "apple banana orange";
const arr = str.split(" ");

console.log(arr); //['apple', 'banana', 'orange']

console.log(arr.length); //3

// separatorλ‘ " "(μ€νμ΄μ€)λ₯Ό μ§μ νλ©΄, λ¬Έμμ΄μ κ΅¬λΆμλ‘ μλΌμ κ°κ°μ μλΌμ§ μ‘°κ°λ€μ λ°°μ΄μ μ μ₯νμ¬ λ¦¬ν΄.
```

### κΈμλ³λ‘(separator="") μλΌμ λ°°μ΄μ λ΄κΈ°

```js
const str = "a b c";

const arr = str.split("");

console.log(arr); //['a', ' ', 'b', ' ', 'c']

console.log(arr.length); //5
//separatorλ‘ ""(lengthκ° 0μΈ λ¬Έμμ΄)μ μ λ¬νλ©΄, λ¬Έμμ΄μ κ°κ°μ λ¬Έμλ³λ‘ μλΌμ, ν κΈμμ©(κ³΅λ°± ν¬ν¨) λ°°μ΄μ μ μ₯νμ¬ λ¦¬ν΄.
```

### νΉμ  κ΅¬λΆμλ‘ μλΌμ λ°°μ΄μ λ΄κΈ°

```js
const str = "apple,banana,orange";

const arr = str.split(",");

console.log(arr); // ['apple', 'banana', 'orange']

console.log(arr.length); //3

//separator(μ¬κΈ°μλ ',')λ₯Ό μ§μ νμ¬,λ¬Έμμ΄μ separatorλ‘ μλΌμ λ§λ€μ΄μ§ μ‘°κ°λ€μ λ°°μ΄μ λ΄μμ λ¦¬ν΄.
```

### limit κ° μ§μ νκΈ°

```js
const str = "apple,banana,orange";

const arr = str.split(",", 2);

console.log(arr); //['apple', 'banana']

console.log(arr.length); //2

//λλ²μ§Έ νλΌλ―Έν°μΈ limitκ°μ μ§μ 
//μμ μμ μμ λ¬Έμμ΄μ ','λ‘ μλ₯΄λ©΄ μ΄ 3κ°μ λ°°μ΄μ΄ λ§λ€μ΄μ§μ§λ§
```

https://hianna.tistory.com/377

# βΆ charCodeAt() , fromCharCode()

## μμ€ν€μ½λ

λλ¬Έμ μμ€ν€λλ² : 65(A) ~ 90(Z) , μλ¬Έμ μμ€ν€λλ² : 97(a) ~ 122(z)

### charCodeAt()

- λ¬Έμλ₯Ό μμ€ν€μ½λ λλ²λ‘ λ³ν.

### fromCharCode()

- μμ€ν€μ½λλ₯Ό λ¬Έμλ‘ λ³ν.

β» μ°Έκ³ 

```js
let str = "KoreaTimeGood";
str.toUpperCase();
// str κΈ°λ³Έ κ°μ΄ λλ¬Έμλ‘ λ³νλμ§λ μλλ€.
```

# βΆ find()

> νλ³ ν¨μλ₯Ό λ§μ‘±νλ μ²« μμλ₯Ό λ°ν

```js
arr.find(callback[, thisArg])
```

- λ°ν νμμ μ°Ύμ μμμ νμ, μλ€λ©΄ undefinded
- `callback(element,index,array)`<br />
  μ½λ°± ν¨μκ° λ°λ μΈμ(κ° μΈμλ find λ©μλλ₯Ό νΈμΆν λ°°μ΄μμ λ°μμ΄)
  - element : μ½λ°±ν¨μμμ μ²λ¦¬ν  νμ¬ μμ.
  - index(optional) : μ½λ°±ν¨μμμ μ²λ¦¬ν  νμ¬ μμμ μΈλ±μ€.
  - array(optional) : `find`ν¨μλ₯Ό νΈμΆν λ°°μ΄.
- `thisArg`<br />
  μ ν ν­λͺ©. μ½λ°±μ΄ νΈμΆλ  λ `this`λ‘ μ¬μ©ν  κ°μ²΄.

- **μνλ μμ μ°ΎκΈ°**<br />
  μνλ μμλ₯Ό μ°Ύμλ§μ λ©μλλ₯Ό μ’λ£ν¨(λ€μͺ½ μμλ κ΄μ¬μ‘°μ°¨ μ£Όμ§λ μλλ€)

```js
const arr = [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3];

const find1 = arr.find((element, index, array) => {
  //μΈλ±μ€ 2μΈ μμλ₯Ό μ°Ύμ λ κΉμ§ λ°λ³΅
  console.log("μ½λ°±ν¨μλ₯Ό μ€νν λ°°μ΄μ? ", array);
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
μ½λ°±ν¨μλ₯Ό μ€νν λ°°μ΄μ?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
μ½λ°±ν¨μλ₯Ό μ€νν λ°°μ΄μ?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
μ½λ°±ν¨μλ₯Ό μ€νν λ°°μ΄μ?  [5, 6, 9, 1, 6, 3, 2, 1, 2, 7, 9, 4, 3]
find1: 9
find2: 3
find3: 9
find4: undefined
*/
```

https://bbaktaeho-95.tistory.com/40

# βΆ slice()

> arr.slice([begin[, end]]) <br />

!["slice"](/images/slice.png)
slice ν¨μλ μλΌλΌ λ°°μ΄μ μμ indexμ end indexλ₯Ό νλΌλ―Έν°λ‘ λ°μμ, κ·Έ μ¬μ΄μ μμλ€μ μλ‘μ΄ λ°°μ΄λ‘ λ§λ€μ΄μ λ¦¬ν΄νλ€.<br />
<span style="color:red">μλ³Έλ°°μ΄μ λ³κ²½λμ§ μλλ€.</span>

### `νλΌλ―Έν°`

_begin_
μλΌλΌ λ°°μ΄μ μμ index

_end_
μλΌλΌ λ°°μ΄μ μ’λ£ index<br />
end indexμ κ°μ μλΌλΌ λ°°μ΄μ ν¬ν¨λμ§ μμ΅λλ€.<br />
end indexκ° μλ΅λλ©΄, begin indexλΆν° λ°°μ΄μ λκΉμ§λ₯Ό μλΌλΈλ€.

### `λ¦¬ν΄κ°`

μλΌλΈ μμλ€λ‘ λ§λ  μλ‘μ΄ λ°°μ΄μ λ¦¬ν΄νλ€.

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

substring() λ©μλλ string κ°μ²΄μ μμ μΈλ±μ€λ‘ λΆν° μΈλ±μ€ μ  κΉμ§ λ¬Έμμ΄μ λΆλΆ λ¬Έμμ΄μ λ°ννλ€.

> str.substring(indexStart[, indexEnd])

- indexStart<br />
  λ°νλ¬Έμμ΄μ μμ μΈλ±μ€
- indexEnd<br />
  μ΅μ. λ°νλ¬Έμμ΄μ λ§μ§λ§ μΈλ±μ€(ν¬ν¨λμ§ μμ.)

```js
const str = "Mozilla";

console.log(str.substring(1, 3)); //"oz"
console.log(str.substring(2)); //"zilla"
```

# indexOf()

λ¬Έμμ΄(string)μμ νΉμ  λ¬Έμμ΄(searchvalue)μ μ°Ύκ³ , κ²μλ λ¬Έμμ΄μ΄ 'μ²«λ²μ§Έ'λ‘ λνλλ μμΉ indexλ₯Ό λ¦¬ν΄νλ€.

> string.indexOf(searchvalue,position)

- searchvalue : μ°Ύμ λ¬Έμμ΄,νμ μλ ₯κ°
- position : κΈ°λ³Έκ°μ 0, stringμμ seachvalueλ₯Ό μ°ΎκΈ° μμν  μμΉ,optional
- μ°Ύλ λ¬Έμμ΄μ΄ μμΌλ©΄ -1 λ¦¬ν΄
- λμλ¬Έμλ₯Ό κ΅¬λΆ

```js
const str = "abab";

console.log(str.indexOf("ab")); //0
console.log(str.indexOf("ba")); //1
console.log(str.indexOf("abc")); //-1
console.log(str.indexOf("AB")); //-1
```

1. λ¬Έμμ΄ 'abab'μμ 'ab'κ° μ²μμΌλ‘ λνλλ μμΉμ μΈλ±μ€ κ°μ λ¦¬ν΄.
2. λ¬Έμμ΄ 'abab'μλ 'ba'κ° μ²μμΌλ‘ λνλλ μμΉμ μΈλ±μ€ κ°μ λ¦¬ν΄.
3. λ¬Έμμ΄ 'abab'μλ 'abc'λΌλ λ¬Έμμ΄μ΄ μμΌλ―λ‘ μ«μ -1μ λ¦¬ν΄.
4. λ¬Έμμ΄ 'abab'μλ λλ¬Έμ 'AB'λ μμΌλ―λ‘ μ«μ -1μ λ¦¬ν΄(λμλ¬Έμ κ΅¬λΆ)

```js
const str = "abab";

console.log(str.indexOf("ab")); //9
console.log(str.indexOf("ab", 1)); //2
```

1. indexOfν¨μμ λλ²μ§Έ νλΌλ―Έν°μΈ positionκ°μ΄ μλ ₯λμ§ μμΌλ©΄, positionμ κ°μ 0μΌλ‘ μ²λ¦¬λλ€.
   <br />μ μμ μμλ 'abab'λ¬Έμμ΄μ 0λ²μ§Έ indexλΆν° 'ab'λ¬Έμμ΄μ μ°Ύκ³ , 0λ²μ§Έ indexμμ λ¬Έμμ΄ 'ab'λ₯Ό λ°κ²¬νμμΌλ―λ‘, 0μ λ¦¬ν΄νλ€.
2. positionκ°μ '1'λ‘ μλ ₯νμλ€.<br />
   μ μμ μμλ 'abab'λ¬Έμμ΄μ 1λ²μ§Έ indexλΆν° 'ab'λ¬Έμμ΄μ κ²μνλ―λ‘ index 0μ μλ 'ab'λ λ¬΄μνλ€.

### β» indexOf()λ‘λ μ°Ύκ³ μ νλ λ¬Έμμ΄μ΄ λνλ 'μ²«λ²μ§Έ' μμΉλ§ μ°Ύμ μ μλ€. νμ§λ§ μ½κ°μ νλ‘κ·Έλλ°μ ν΅ν΄ λ¬Έμμ΄μ μλ λͺ¨λ  searchvalueμ μμΉλ₯Ό μ°Ύμ μ μλ€.

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
//0 3 6 μΆλ ₯
```

λ°λ³΅λ¬Έ μμμ searchvalueλ₯Ό μ°Ύκ³  λμ positionrκ°μ foundPosμ λ€μ indexκ°μΌλ‘ λ³κ²½ν΄ μ€λ€. λ§μ§λ§μΌλ‘ λ μ΄μ λ¬Έμμ΄μ μ°Ύμ§ λͺ»νλ©΄ λ°λ³΅λ¬Έμ μ’λ£νλ€.
