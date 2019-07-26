#### background

------

> 배경과 관련된 프로퍼티를 지정한다.



##### background-image

> 요소에 배경 이미지를 지정한다.

```css
body {
	background-image: url("http://poiemaweb.com/img/bg/dot.png");
}
```

 

##### background-repeat

> 배경 이미지의 반복을 지정한다. 기본값은 `repeat`으로 수평과 수직 방향 모두로 이미지가 반복되어 채워지도록 지정한다. `repeat-x, repeat-y`의 값으로 지정하여 수평 또는 수직 방향으로만 반복되도록 지정할 수 있다. 만약 반복을 설정하지 않으려면 `no-repeat`을 설정한다.
>
> 예시는 다음과 같다.



```css
body {
      background-image: url("http://poiemaweb.com/img/bg/dot.png"), url("http://poiemaweb.com/img/bg/paper.gif");
      background-repeat: no-repeat, repeat;
    }
```

> 예시에서는 두 이미지를 배경으로 설정하였다. 앞의 배경 이미지는 반복되지 않도록, 뒤의 이미지는 수평, 수직 방향 모두 반복되도록 설정하였다.



##### background-size

> 배경이미지의 사이즈를 지정한다. 배경이미지의 고유 비율을 유지하기 때문에 설정에 따라 이미지의 일부가 보이지 않을 수 있다.
>
> 값으로는 px, %, cover, contain 등의 값을 사용한다. 배경이미지의 width, height을 모두 설정할 수 있으며 width, height 순으로 설정한다. 만약 하나의 값을 지정한 경우, 지정한 값은 width로 설정되고 height은 auto로 지정된다.
>
> 예시는 다음과 같다.



> ##### px

```css
.bg {
  background-size: 700px 500px;
}
```

> 배경이미지 크기가 지정된 px값 그대로 설정된다. 두 개의 값을 지정하였으므로 width와 height이 지정된 값으로 설정된다.



> ##### %

```css
.bg {
  background-size: 100% 100%;
}
```

> px 대신 %값으로 지정할 수도 있다. 배경이미지 크기가 지정된 %값에 비례하여 설정된다. 두 개의 값을 지정하였으므로 width, height이 모두 설정된다. 화면의 크기를 줄이거나 늘릴 경우 배경이미지의 크기도 따라서 변경되어 찌그러지는 현상이 나타날 수 있다.



> ##### cover

```css
.bg {
  background-size: cover;
}
```

> 배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 width와 height중 큰 값을 기준으로 배경이미지를 맞춘다. 따라서 이미지의 일부가 보이지 않을 수 있다.



> ##### contain

```css
.bg {
  background-size: contain;
}
```

> 배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 영역에 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 이미지 크기를 조정한다.



> 하나의 배경이미지의 width,  height의 프로퍼티 값은 공백으로 구분한다. 만약 쉼표로 구분할 경우 다른 배경이미지의 너비를 지정하는 것으로 인식이 되므로 주의가 필요하다.
>
> 두 개의 배경이미지를 지정하는 아래의 예시를 참고하자.

```css
body {
  background-image: url("front.png"), url("back.png");
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%, 500px 300px;
}
```



##### background-attachment

> 일반적으로 화면을 스크롤하면 배경 이미지도 함께 스크롤된다. 화면이 스크롤되더라도 배경이미지는 스크롤되지 안혹 고정되어 있게 하려면 background-attachment 프로퍼티에 `fixed` 키워드를 지정한다.

```css
.parallax {
	background-image: url("http://poiemaweb.com/img/bg/stock-photo-125979219.jpg");
    /* parallax scrolling effect */
    background-attachment: fixed;
}
```



##### background-position

> 일반적으로 background-image는 좌상단부터 이미지를 출력한다.  이 때 background-position 프로퍼티를 사용하여 이미지의 좌표를 지정할 수 있다. 기본값은 `0% 0%;`로 배경이미지는 우측 상단에 위치하게 된다.
>
> 값으로는 `top, bottom, left, right, center`의 키워드 값과 px와 %로 x, y 좌표를 지정한 값이 있다.

```css
.example1 {
    background-position: right;
}

.example2 {
    background-position: 25% 75%;
}
```



##### background-color

> 배경 색상을 지정한다. 색상 표현 단위로 값을 지정하거나 transparent 키워드를 지정할 수 있다.

```css
.bg-col-white {
  background-color: rgb(255, 255, 255);
}

.bg-col-red {
  background-color: transparent;
}
```



##### background

> shorthand expression으로 위에서 소개한 프로퍼티를 한번에 정의할 수 있다. 순서는 color, image, repeat, attachment, position 순이다.

```css
div {
    /* background: color || image || repeat || attachment || position */
    background: #FFEE99 url("http://poiemaweb.com/img/bg/dot.png") no-repeat center;
    width: 50vw;
    height: 300px;
}
```

