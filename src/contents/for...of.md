---
date: '2021-08-19'
title: '이터러블과 이터레이터. for...of는 어떻게 동작할까?'
categories: ['JavaScript']
summary: 'for...of는 어떻게 동작할까?'
thumbnail: '../images/intro.jpg'
---

저기요! 인상이 참 선하신데...

혹시 이터레이터를 아십니까?

ES6이전의 자바스크립트에서 배열은 다음과 같은 방법으로 순회하였습니다.

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
console.log(arr[i]);
}

배열의 length 프로퍼티와 인덱스를 사용해서요.

그리고 ES6부터는 for ... of 명령문을 이용해 더 간결한 선언적 표현으로 배열을 순회 할 수 있게되었습니다.

const arr = [1, 2, 3];
for (const el of arr) {
console.log(el);
}

그런데 여기서 궁금증이 생깁니다. for ... of는 어떻게 동작하는 것일까요?

우리가 이전에 썻던 방법처럼 인덱스를 이용해 순회하는 것일까요?

우리는 for ... of를 이용해 배열처럼 숫자 인덱스로 요소에 접근할 수 없는 Map, Set 객체 등도 순회 할 수 있습니다.

const map = new Map([['a', 1], ['b', 1], ['c', 1]]);

for (const el of map) {
console.log(el);
}

const set = new Set([1, 2, 2, 3, 4]);

for (const el of set) {
console.log(el);
}

따라서 숫자 인덱스를 사용하는 방법은 아닙니다. 그렇다면 어떻게 순회하는 것일까요?

그 비밀은 iteration 프로토콜에 있습니다.

비밀에 대해 알아보기 위해 우선 iteration 프로토콜에 대해 알아봅시다.

iteration 프로토콜은 iterable 프로토콜과 iterator 프로토콜로 이루어져 있습니다.

iterable 프로토콜을 따르는 객체, 즉 iterable 객체는 @@iterator 메소드를 갖고 있습니다.

객체에 [Symbol.iterator] key에 iterator 객체를 반환하는 함수를 갖고 있는 것이죠.

그렇다면 iterator 객체는 무엇일까요?

iterator 객체는 iterator 프로토콜을 따르는 객체로 done과 value 두가지 속성을 갖는 객체를 반환하는 next()메소드를 갖고 있습니다.

done은 iterator의 작업이 모두 끝났는지를 나타내는 속성으로 작업이 남아 있다면 false, 모두 완료되었다면 true가 됩니다.

value는 iterator로 부터 반환되는 모든 자바스크립트 값입니다.

const arr = [1, 2, 3];
const iter = arr[Symbol.iterator]();

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }

이제 iterable과 iterator에 대해 알아보았으니, 다시 for ... of의 비밀에 대해 알아보도록 합시다.

for ... of를 통해 순회할 수 있는 객체의 공통점은 모두 iterable한 객체라는 겁니다.

Map, Set, Array 등은 모두 iterralbe 객체로 [Symbol.iterator] 속성에 iterator를 반환하는 함수를 갖고 있죠.

for ...of 반복문에서는 이러한 iterable 객체의 iterator를 이용해 순회를 합니다.

iterator의 next()를 계속 호출해 value를 변수에 할당하며 반복문을 실행하고, { done: true }가 반환되면 탈출하는 방법으로요!

신기하고 재미있는 iteration 프로토콜에 대한 자세한 내용들을 아래 링크에서 확인해보세요!

Iteration protocols - JavaScript | MDN (mozilla.org)
for...of - JavaScript | MDN (mozilla.org)
Array.prototype[@@iterator]() - JavaScript | MDN (mozilla.org)
반복기 및 생성기 - JavaScript | MDN (mozilla.org)
function\* - JavaScript | MDN (mozilla.org)

피드백은 언제나 환영합니다! 부족한 글 읽어주셔서 감사합니다!:man-bowing:
