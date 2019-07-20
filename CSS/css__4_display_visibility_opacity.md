#### display

------

> display 프로퍼티는 layout 정의에 사용되는 아주 중요한 프로퍼티이다. 해당 요소를 화면에 어떤 특성을 갖는 요소로 표현할 것인지 지정할때 사용한다. 모든 html 요소는 display 옵션을 적용하지 않아도 기본적으로 브라우저에 표현되는 기본 display 값이 있다. 이 기본값은 block 또는 inline이다.
>
> display의 값으로는 block, inline, inline-block, none이 있다. 



##### block

> block 특성을 가지는 요소는 아래와 같은 특징을 갖는다.

* 항상 새로운 라인에서 시작한다.
* 화면 크기 전체의 가로폭을 차지한다. (width: 100%)
* width, height, margin, padding 프로퍼티 지정이 가능하다.
* block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다.

> 블록 레벨 요소로는 다음 태그들이 있다.

```
1. div태그와 제목, p태그
: div, h1~h6, p

2. 리스트 태그
: ol, ul, li

3. 표, 입력 form 태그
: table, form

4. 수평선 태그
: hr
```



##### inline

> inline 특성을 갖는 요소는 아래와 같은 특징을 갖는다.

* 새로운 라인에서 시작하지 않으며 문장의 중간에 들어갈 수 있다. 줄을 바꾸지 않으므로 다른 요소와 함께 하나의 행에 위치한다.
* content의 너비만큼 가로폭을 차지한다.
* width, height, margin-top, margin-bottom의 프로퍼티를 지정할 수 없다. 대신 line-height로 상하 여백을 지정한다.
* inline 레벨 요소 뒤에 공백(enter, space 등)이 있는 경우, 정의하지 않은 space(4px)가 자동으로 지정된다.
* inline 레벨 요소 내에 block 레벨 요소를 포함할 수 없다. 반대로 block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있으며, 일반적으로 이렇게 사용한다.

> inline 레벨 요소로는 다음과 같은 태그들이 있다.

```
1. span, a, strong, br 태그
: span, a, strong

2. 사옹자 입력과 관련된 태그
: input, select, textarea, button

3. img 태그
: img
```



##### inline-block

> block과 inline 레벨 요소의 특성을 적절히 결합하여 아래와 같은 특징을 갖는다.

* inline 레벨 요소와 흡사하게 줄을 바꾸지 않고 다른 요소와 함께 하나의 행에 위치시킬 수 있다.
* block 레벨 요소처럼 width, height, margin, padding 프로퍼티를 모두 정의할 수 있다. 상, 하 여백을 margin과 line-height의 두 가지 프로퍼티를 통해 제어할 수 있다.
* content의 너비만큼 가로폭을 차지한다.
* inline-block 레벨 요소 뒤에 공백이 있는 경우 정의하지 않은 space(4px)가 자동으로 지정된다. 회피 방법은 다음을 참고한다.

> 참고 : <https://css-tricks.com/fighting-the-space-between-inline-block-elements/>



##### none

> 해당 요소를 화면에 표시하지 않는다. 해당 요소를 위한 공간도 할당되지 않는다.





#### visibility

------

> 요소를 보이게 할 것인지의 여부를 결정한다. 즉, 요소의 렌더링 여부를 결정한다. 값으로는 visible, hidden, collapse, none이 있다.



##### visible

> 기본 값으로, 해당 요소를 보이게한다. 

##### hidden

> 해당 요소를 보이지 않게 한다. `display: none;`과 비교하여 해당 요소를 위한 공간은 할당된다는 점이 다르다.

##### collapse

> table 요소에 사용한다. 행과 열을 보이지 않도록 설정한다.

##### none

> table 요소의 row나 column을 보이지 않게 한다. IE, 파이어폭스에서만 동작한다. 크롬에서는 hidden과 동일하게 동작한다.





#### opacity

------

> 요소의 투명도를 결정한다. 0.0 ~ 1.0의 값을 입력하며 0.0은 투명, 1.0은 불투명을 의미한다.

