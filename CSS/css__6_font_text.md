#### font 관련 프로퍼티

------



##### font-size

> 폰트의 크기를 정의한다. px, em, % 등의 단위를 사용하여 크기를 지정하거나 large와 같은 키워드를 지정할 수 있다.

```css
.font-size-40 { 
    font-size: 40px; 
}

.font-size-150ps { 
    font-size: 150%; 
}

.font-size-large { 
    font-size: large; 
}
```



##### font-family

> 폰트를 지정한다. 컴퓨터에 해당 폰트가 설치되어 있지 않다면 적용되지 않는다. 이런 경우를 위해 폰트는 여러 개를 동시에 지정할 수 있으며 첫번째 지정한 폰트가 클라이언트 컴퓨터에 설치되어 있지 않은 경우, 다음에 지정된 폰트를 적용한다. 따라서 마지막에 지정하는 폰트는 대부분의 OS에 기본적으로 설치되어 있는 폰트를(serif, sans-serif, monospace 등) 지정하는 것이 일반적이다.
>
> 폰트명이 여러 개의 단어로 구성된 경우 따옴표로 묶어준다. 하나의 단어의 경우에는 묶어주지 않아도 된다.

```css
.serif {
	font-family: "Times New Roman", Times, serif;
}

.sans-serif {
	font-family: Arial, Helvetica, sans-serif;
}

.monospace {
	font-family: "Courier New", Courier, monospace;
}
```



##### font-style

> 이탤릭과 같은 스타일을 지정할 때 사용한다.

```css
.italic {
	font-style: italic;
}
```



##### font-weight

> 폰트의 굵기를 지정할 때 사용한다. `100 ~ 900`의 정수값을 사용하여 지정하거나, `normal / bold / lighter / bolder`의 키워드를 값으로 지정한다.



##### font

> shorthand expression을 사용하여 font의 여러 프로퍼티를 한번에 적용할 수 있다. 순서와 형식은 다음과 같다.

```
font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)
```





#### text 관련 프로퍼티

------



##### line-height

> 텍스트의 높이를 지정한다. 텍스트 수직 정렬에도 응용하여 사용한다.

```css
.small {
    line-height: 70%; /* 16px * 70% */
}

.big {
    line-height: 1.2; /* 16px * 1.2 */
}

.lh-3x {
    line-height: 3.0; /* 16px * 3 */
}
```



##### letter-spacing

> 글자 사이의 간격을 지정한다.

```css
.loose {
	letter-spacing: 2px;
}
.tight {
	letter-spacing: -1px;
}
```



##### text-align

> 텍스트의 수평 정렬을 정의한다. center, left, right, justify의 키워드를 사용하여 지정한다. 

```css
h1 { 
    text-align: center; 
}

h3 { 
    text-align: right; 
}
```



##### text-decoration

> none으로 값을 지정하여 a 링크 태그의 underline을 제거할 수 있다. 또는 텍스트에 underline, overline, line-through 등을 설정할 수도 있다.

```css
a {
    text-decoration: none;
}
```



##### white-space

> white space는 공백(space), 들여쓰기(tab), 줄바꿈(line-break)을 의미한다. html은 기본적으로 연속된 공백(space), 들여쓰기(tab)는 1번만 실행되며, 줄바꿈은(line-break) 무시된다. 또한 텍스트는 부모의 가로 영역을 벗어나지 않고 자동 줄바꿈된다.
>
> white-space 프로퍼티는 이러한 기본 동작을 제어하기 위한 프로퍼티이다. 프로퍼티의 값과 특징은 다음과 같다.

| 프로퍼티 | line break | space / tab | wrapping(자동 줄바꿈) |
| -------- | ---------- | ----------- | --------------------- |
| normal   | 무시       | 1번만 반영  | 적용                  |
| nowrap   | 무시       | 1번만 반영  | 미적용                |
| pre      | 반영       | 반영        | 미적용                |
| pre-wrap | 반영       | 반영        | 적용                  |
| pre-line | 반영       | 1번만 반영  | 적용                  |



##### text-overflow

> 부모 영역을 벗어나서 wrapping 되지 않은 텍스트의 처리 방법을 정의한다. 이 프로퍼티를 사용하기 위해서는 아래의 조건이 필요하다.

* width가 지정되어 있어야 한다. 이를 위해 필요에 따라 block 레벨 요소로 변경하여야 한다.
* wrapping 되지 않은 상태를 전제하기 때문에 `white-space: nowrap;`으로 설정되어야 한다.
* overflow 프로퍼티에 `visible` 이외의 값이 지정되어야 한다.

> text-overflow 프로퍼티에 설정할 수 있는 값은 `clip, ellipsis`가 있다. clip은 영역을 벗어난 텍스트를 표시하지 않으며, ellipsis는 영역을 벗어난 텍스트를 `...`로 처리한다.

```css
.truncate {
  /* width가 지정되어 있어야 한다. */  
  width: 150px;    
  /* 자동 줄바꿈을 방지 */  
  white-space: nowrap;
  /* 반드시 "visible" 이외의 값이 지정되어 있어야 한다. */  
  overflow: hidden;   
    
  text-overflow: ellipsis;
}
```



##### word-wrap / word-break

> 두 속성 모두다 한 단어의 길이가 길어서 부모의 영역을 벗어난 텍스트의 처리 방법을 정의한다. 
>
> `word-wrap` 프로퍼티는 단어를 어느 정도 고려하여 개행하지만 `word-break: break-all;`는 단어를 고려하지 않고 개행한다.

```css
/* 단어에 맞추어 단어를 구분할 수 있도록 개행한다. */
.word-wrap  { 
    word-wrap: break-word; 
}

/* 단어를 고려하지 않고 부모 영역의 너비에만 맞추어 개행한다. */
.word-break { 
    word-break: break-all; 
}
```

