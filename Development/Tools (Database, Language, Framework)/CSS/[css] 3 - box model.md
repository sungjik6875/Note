#### Box-model

------

> 모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 이 영역은 Margin, Border, Padding, Content의 4개의 영역으로 구분된다. 각 영역의 설명은 아래와 같다.

##### content

> 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역이다. width, height 프로퍼티를 갖는다.

##### padding

> border 안쪽에 위치하는 요소의 내부 여백 영역이다. padding 프로퍼티의 값은 패딩 영역의 두께를 의미한다. 색상의 기본값은 투명(transparent)으로 요소에 적용된 background 요소는 패딩 영역까지 적용된다.

##### border

> 테두리 영역으로 padding과 margin을 구분한다.

##### margin

> border의 바깥에 위치하는 요소의 외부 여백 영역이다. 기본적으로 투명하며, background 요소에 적용받지 않는다.





#### width, height 프로퍼티

------

> width와 height의 프로퍼티는 요소의 너비와 높이를 지정하기 위해 사용된다. 이 때 지정되는 요소의 너비와 높이는 content 영역을 대상으로 한다. 이 말은 padding과 border 영역은 너비와 높이의 적용 대상이 아니라는 의미이다.



##### ※ box-sizing

> 만약 padding과 border도 너비와 높이의 적용 대상으로 지정하고 싶다면 `box-sizing: border-box;`를 지정하면 된다. box-sizing의 기본값은 `content-box`이므로 이를 바꿔주면 된다.



##### ※ overflow

> 만약 width와 height으로 설정한 content 영역보다 컨텐츠가 차지하는 공간이 크다면 컨텐츠가 영역 바깥쪽으로 흘러 넘치게 된다. 이 경우 다양한 해결법이 있으나 일반적으로는 overflow 속성을 사용하여 해결한다. `overflow: hidden;`을 지정하면 흘러넘친 컨텐츠를 감출 수 있다.



##### 요소의 전체 크기계산

> 기본적으로 width와 height 프로퍼티는 컨텐츠 영역을 대상으로 요소의 너비와 높이를 지정하므로 전체 크기는 다음과 같이 계산할 수 있다.

```
전체 너비 
: width + padding(l, r) + border(l, r) + margin(l, r)

전체 높이
: height + padding(t, b) + border(t, b) + margin(t, b)
```



##### width, height의 값

> width와 height의 초기값은 `auto`로 이것은 브라우저가 상황에 따라 적당한 width와 height의 값을 계산할 것을 의미한다. 예를 들어 block 요소의 경우, width는 부모 요소의 100%, height는 콘텐츠 높이(+ 약간의 여분)으로 지정된다.



##### max-, min-

> width와 height 앞에 max나 min의 prefix를 붙여 너비와 높이의 최대값과 최소값을 지정할 수 있다.





#### margin, padding 프로퍼티

------



##### margin / padding

> content의 4개 방향에 대하여 개별적으로 지정이 가능하다. 지정 방법은 다음과 같다.

```css
div {
    margin-top: 40px;
    margin-right: 30px;
    margin-bottom: 20px;
    margin-left: 10px;

    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```



##### shorthand expression

> 그러나 다음과 같이 margin, padding의 1개의 프로퍼티 만으로도 상하좌우 4방향의 프로퍼티를 한번에 지정할 수 있다.

```
margin: 20px 50px 20px 20px;
```

> 4개의 값을 지정할 때에는 top에서부터 시작하여 right, bottom, left순의 시계방향으로 진행하여 적용한다.

```
padding: 25px 50px 20px;
```

> 3개의 값을 지정할 때에는 top에서부터 시작하여 horizontal, bottom의 아래 방향으로 적용한다.

```
margin: 25px 50px;
```

> 2개의 값을 지정할 때에는 vertical, horizontal의 상하, 좌우 순으로 적용한다.

```
padding: 25px;
```

> 1개의 값을 지정하면 상하 좌우가 모두 동일한 값으로 적용된다.

```
margin: auto;
```

> margin에 대해 auto를 설정하면 해당 요소를 브라우저 중앙에 위치 시킬 수 있다.





#### border 프로퍼티

------



##### border-style / border-width / border-color

> border-style은 테두리 선의 스타일을 지정한다. 값으로 dotted, dashed, solid, double 등의 속성을 지정할 수 있다.
>
> border-width는 테두리의 두께를 지정한다. border-style과 함께 사용하여야 적용이 되므로 반드시 border-style을 먼저 지정해야 한다.
>
> border-color는 테두리의 색상을 지정한다. 마찬가지로 border-style과 함께 사용하여야 적용이 된다.
>
> 이 3가지 프로퍼티들은 상하좌우 4개 방향에 대해 지정이 가능하다. 기술 방법과 방향 적용 순서는 위에서 설명한 margin, padding의 shorthand expression과 같다.



##### border

> border-width, border-style, border-color를 한번에 지정하기 위한 shorthand 프로퍼티이다. 예시는 다음과 같다.

```css
p {
  /* border-width border-style border-color */
  border: 5px solid red;
}
```



##### border-radius

> 테두리의 모서리를 둥글게 표현하도록 지정한다. 값으로는 크기 단위를 사용한다. 4개의 모서리에 개별적으로 지정할 수도 있고 shorthand expression으로 한번에 지정할 수도 있다.
>
> 둥근 모서리는 원형으로도, 타원형으로도 설정할 수 있지만 타원형 기술은 생략하고 원형으로 기술하는 방법만 소개한다.
>
> 원형 둥근 모서리의 기본적인 기술 방법은 다음과 같다.

```
border-top-left-radius:     20px;
border-top-right-radius:    20px;
border-bottom-right-radius: 20px;
border-bottom-left-radius:  20px;
```

> shorthand expression을 사용하여 다음과 같은 방법으로도 기술할 수 있다.

```
border-radius: 10px 40px 40px 10px;
```

> 4개의 값을 지정하면 top-left부터 시작하여 top-right, bottom-right, bottom-left의 시계방향으로 적용한다.

```
border-radius: 10px 40px;
```

> 2개의 값을 지정하면 top-left와 bottom-right가 동일한 값으로 적용되고, 이후 top-right와 bottom-left가 동일한 값으로 적용된다. x자 모양의 두 대각선 방향을 연상하면 된다.

```
border-radius: 20px;
```

> 1개의 값을 지정하면 4개 모서리가 모두 동일한 값으로 적용된다.





#### box-sizing 프로퍼티

------

> width와 height 프로퍼티의 대상 영역을 설정할 수 있다. 기본값인 content-box는 대상 영역이 content 영역에 한정된다. 그러나 border-box로 설정하면 padding, border도 대상 영역에 포함시킬 수 있다.
>
> box-sizing 프로퍼티는 상속되지 않으므로 이를 사용하도록 초기화 하려면 아래와 같이 정의해야 한다.

```css
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
```

