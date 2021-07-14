---
date: '2021-07-06'
title: '행렬의 곱셈'
categories: ['프로그래머스', 'JavaScript', '알고리즘', '코딩테스트']
summary: '프로그래머스 코딩테스트 연습, 행렬의 곱셈.'
thumbnail: '../images/programmers_level2.png'
---

## 문제

> 출처: 프로그래머스 코딩테스트 연습, 행렬의 곱셈.
> <br>https://programmers.co.kr/learn/courses/30/lessons/12949

### 문제 설명

2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

### 제한 조건

- 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
- 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
- 곱할 수 있는 배열만 주어집니다.

### 입출력 예

| arr1                              | arr2                              | return                                     |
| --------------------------------- | --------------------------------- | ------------------------------------------ |
| [[1, 4], [3, 2], [4, 1]]          | [[3, 3], [3, 3]]                  | [[15, 15], [15, 15], [15, 15]]             |
| [[2, 3, 2], [4, 2, 4], [3, 1, 4]] | [[5, 4, 3], [2, 4, 1], [3, 1, 1]] | [[22, 22, 11], [36, 28, 18], [29, 20, 14]] |

## 코드

```
function solution(arr1, arr2) {
    let answer = [];
    const n = arr1[0].length;
    const m = arr1.length;
    const n2 = arr2[0].length;

    for(let i = 0;i < m;i++){
        const temp = Array(n2).fill(0);
        for(let j = 0;j < n;j++) {
            for(let k = 0;k < n2;k++){
                temp[k] += arr1[i][j] * arr2[j][k];
            }
        }

        answer.push([...temp]);
    }

    return answer;
}
```
