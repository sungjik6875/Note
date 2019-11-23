#### Hash Function

------

> Hash는 내부적으로 배열을 사용하여 데이터를 저장하므로 빠른 검색속도를 갖는다. 특정한 값을 Search하는데 데이터 고유의 인덱스로 접근하게 되므로 average case에 대하여 Time Complexity가 O(1)이 된다.
>
> 항상 O(1)이 아니고 average case에 대해 O(1)인 이유는 해쉬 충돌 때문이다. 하지만 문제는 인덱스로 저장되는 키 값이 불규칙하기 때문이다.