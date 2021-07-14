---
date: '2021-06-28'
title: '단어 변환'
categories: ['프로그래머스', 'JavaScript', '알고리즘', '코딩테스트']
summary: '프로그래머스 코딩테스트 연습, 단어 변환.'
thumbnail: '../images/programmers_level3.png'
---

## 문제

> 출처: 프로그래머스 코딩테스트 연습, 단어 변환<br>https://programmers.co.kr/learn/courses/30/lessons/43163

### 문제 설명

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
- begin과 target은 같지 않습니다.
- 변환할 수 없는 경우에는 0를 return 합니다.

### 입출력 예

| begin | target | words                                      | return |
| ----- | ------ | ------------------------------------------ | ------ |
| "hit" | "cog"  | ["hot", "dot", "dog", "lot", "log", "cog"] | 4      |
| "hit" | "cog"  | ["hot", "dot", "dog", "lot", "log"]        | 0      |

#### 입출력 예 설명

예제 #1

문제에 나온 예와 같습니다.

예제 #2

target인 "cog"는 words 안에 없기 때문에 변환할 수 없습니다.

## 코드

```
function solution(begin, target, words) {
    let answer = 0;
    const visited = new Array(words.length).fill(false);

    findShortestProcess(begin, 0, visited);

    return answer;

    function findShortestProcess(start, count, visited) {
        if(!words.includes(target)) return;

        if(start === target){
            if(answer === 0) answer = count;
            else if(answer > count) answer = count;

            return;
        }

        words.forEach((word) => {
            if(visited[words.indexOf(word)] === false && checkOnlyOneDif(start, word)) {
                visited[words.indexOf(word)] = true;
                findShortestProcess(word, count + 1, visited);
                visited[words.indexOf(word)] = false;
            }
        });
    }

    function checkOnlyOneDif(word1, word2) {
        let count = 0;
        [...word1].forEach((char, idx) => {
            if(char !== word2[idx]) count += 1;
        })

        return count === 1 ? true : false;
    }
}
```
