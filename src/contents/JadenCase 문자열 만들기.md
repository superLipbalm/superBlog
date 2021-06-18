---
date: '2021-06-18'
title: '프로그래머스[Level2] 튜플'
categories: ['프로그래머스', '알고리즘', '코딩테스트']
summary: '프로그래머스 코딩테스트 연습, JadenCase 문자열 만들기.'
thumbnail: '../images/programmers_level2.png'
---

## 문제

> 출처: 프로그래머스 코딩테스트 연습, JadenCase 문자열 만들기<br> > https://programmers.co.kr/learn/courses/30/lessons/12951

### 문제 설명

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건

- s는 길이 1 이상인 문자열입니다.
- s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
- 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )

### 입출력 예

| s                       | return                  |
| ----------------------- | ----------------------- |
| "3people unFollowed me" | "3people Unfollowed Me" |
| "for the last week"     | "For The Last Week"     |

## 코드

```
function solution(s) {
    return s.toLowerCase()
        .split(' ')
        .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
```

## 풀이

- 첫 문자를 제외하고는 모두 소문자여야 하므로, 우선 문자열을 toLowerCase() 메서드로 문자열을 소문자로 변환한다.
- 그 후 문자열을 공백으로 구분하여 각 단어를 파싱한다.
- 각 단어의 첫문자를 대문자로 변환한 결과를 모은 배열을 join 메서드를 이용해 하나의 문자열로 합친다.
