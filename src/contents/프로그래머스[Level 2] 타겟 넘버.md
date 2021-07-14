---
date: '2021-06-28'
title: '타겟 넘버'
categories: ['프로그래머스', 'JavaScript', '알고리즘', '코딩테스트']
summary: '프로그래머스 코딩테스트 연습, 타겟 넘버.'
thumbnail: '../images/programmers_level2.png'
---

## 문제

---

> 출처: 프로그래머스 코딩테스트 연습, 타겟 넘버<br>https://programmers.co.kr/learn/courses/30/lessons/43165

### 문제 설명

n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

```
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
```

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
- 각 숫자는 1 이상 50 이하인 자연수입니다.
- 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

### 입출력 예

| numbers         | target | return |
| --------------- | ------ | ------ |
| [1, 1, 1, 1, 1] | 3      | 5      |

#### 입출력 예 설명

문제에 나온 예와 같습니다.

## 코드

```
function solution(numbers, target) {
    let answer = 0;

    findAnswer(0, 0);

    return answer;

    function findAnswer(count, sum) {
        // leaf node에 도달시 target과 일치하는지 확인
        if(count === numbers.length){
            if(sum === target){
                answer++;
            }

            return;
        }

        // +
        findAnswer(count + 1, sum + numbers[count]);
        // -
        findAnswer(count + 1, sum - numbers[count]);
    }
}
```

## 풀이

- 수들을 더하거나 빼는 방법들은 0에서 시작해 numbers의 다음 숫자를 두개의 자식노드(+항, -항)로 가지는 이진트리 형태로 나타낼 수 있음.
- leaf node에 도달할때까지 이진트리를 따라 내려가며 더하고 뺏을 때 합이 타겟 넘버와 같다면 answer를 하나 더해줌.
