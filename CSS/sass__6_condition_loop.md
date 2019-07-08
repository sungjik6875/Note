#### Condition

------

> if의 사용법은 두 가지가 있다. 하나는 if()처럼 하나의 함수로 사용하는 것이다. 다른 하나는 @if와 @else를 사용하여 조건분기 로직으로 사용하는 것이다.



##### if()

> 조건을 판단하여 결과를 리턴한다. 사용 예시는 다음과 같다.

```scss
// if(condition, if_true, if_false)

$type: ocean;

p {
    color: if($type == ocean, blue, black); 	// color: blue;
}
```



##### @if / @else

> if()는 삼항연산자 처럼 사용되어 다양한 조건에 따라 분기시키는 것이 불가능했다. 그러나 @if와 @else를 사용하면 예시와 같이 다양한 조건에 따라 분기시킬 수 있다.

```scss
$type: monster;

p {
    @if $type == ocean {
        color: blue;
    } @else if $type == matador {
        color: red;
    } @else if $type == monster {
        color: green;
    } @else {
        color: black;
    }
}
```

> 컴파일 결과는 다음과 같다.

```css
p {
    color: green;
}
```





#### Loop

------

> @for, @each, @while를 사용하여 반복문의 로직을 구현할 수 있다.



##### @for

> 기본적인 활용은 아래와 같다.

```scss
@for $var from start through end {
    // 여기에 $var를 사용하여 기술한다.
}
```

> 활용 예시는 다음과 같다.

```scss
@for $i from 1 through 3 {
    .item-#{$i} { width: 2em * $i; }
}
```



##### @each

> list, map의 각 요소에 대해 순회하는 경우에 주로 사용한다.

```scss
// List
@each $animal in puma, sea-slug, egret, salamander {
    
    .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
	}
}


// Map
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
        font-size: $size;
    }
}
```

> 컴파일 결과는 아래와 같다.

```css
.puma-icon {
    background-image: url('/images/puma.png');
}

.sea-slug-icon {
  background-image: url("/images/sea-slug.png");
}

.egret-icon {
  background-image: url("/images/egret.png");
}

.salamander-icon {
  background-image: url("/images/salamander.png");
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}
```



##### @while

> 보통 횟수를 특정하기 어려운 경우에 대해 반복할 경우 사용한다.

```scss
$i : 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
```

> 컴파일 결과는 아래와 같다.

```css
.item-6 {
    width: 12em;
}

.item-4 {
    width: 8em;
}

.item-2 {
    width: 4em;
}
```

