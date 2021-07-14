---
date: '2021-06-19'
title: '이중우선순위큐'
categories: ['프로그래머스', 'JavaScript', '알고리즘', '코딩테스트']
summary: '프로그래머스 코딩테스트 연습, 이중우선순위큐'
thumbnail: '../images/programmers_level3.png'
---

## 문제

---

> 출처: 프로그래머스 코딩테스트 연습, 이중우선순위큐.
> <br>https://programmers.co.kr/learn/courses/30/lessons/42628

### 문제 설명

이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

| 명령어 | 수신 탑(높이)                       |
| ------ | ----------------------------------- |
| I      | 숫자 큐에 주어진 숫자를 삽입합니다. |
| D 1    | 큐에서 최댓값을 삭제합니다.         |
| D -1   | 큐에서 최솟값을 삭제합니다.         |

이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

### 제한사항

- operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
- operations의 원소는 큐가 수행할 연산을 나타냅니다.
  - 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
- 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

### 입출력 예

| operations                  | return |
| --------------------------- | ------ |
| ["I 16","D 1"]              | [0,0]  |
| ["I 7","I 5","I -5","D -1"] | [7,5]  |

#### 입출력 예 설명

16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.
7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.

## 코드

```
function solution(operations) {
    const queue = [];

    operations = operations.map(operation => operation.split(' '));

    operations.forEach(operation => {
        const operator = operation[0];
        const number = +operation[1];

        switch(operator) {
            case 'I':
                queue.push(number);
                break;
            case 'D':
                number === 1 ?
                    queue.splice(queue.indexOf(Math.max(...queue)), 1) :
                    queue.splice(queue.indexOf(Math.min(...queue)), 1);
                break;
        }
    });

    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
```

## 풀이

- Operations 배열의 문자열들에서 명령어와 숫자를 split 메서드를 이용하여 나눈다.
- Swtich Case 문을 이용해 명령어에 따라 정해진 명령을 수행하도록 한다.
- 모든 Operation을 수행하였다면, queue의 길이를 확인하여 queue가 비어있다면 [0, 0]를 아니라면 queque의 최댓값, 최솟값을 담은 배열을 반환한다.
