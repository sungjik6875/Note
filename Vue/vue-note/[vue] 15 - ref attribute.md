> ref 속성은 vue에서 DOM을 접근할 때 사용한다. 자바스크립트에서 DOM 요소에 접근하는 것과 비교해보자.

```html
<div id="app">Hello<div>
```



> 자바스크립트로 위의 요소에 접근하기 위해서는 다음과 같이 querySelector나 getElementById와 같은 내장 메소드를 사용한다.

```js
var appElem = document.querySelector('#app');
var appEldm = document.getElementById('app')
```



> 위의 예시를 Vue의 문법으로 바꾸면 다음과 같다. 다음과 같이 $refs의 속성을 이용하여 DOM에 접근할 수 있다.

```html
<div ref="app">Hello<div>
```

```js
var appElem = this.$refs.app;
```



> 두 방법의 차이는 무엇일까? 자바스크립트의 querySelector나 getElementById 등으로 접근하는 방식은 다른 컴포넌트의 요소에도 접근할 수 있어 의도와는 다르게 구현될 수 있다는 잠재적인 문제가 있다. 반면 $refs 방식의 장점은 컴포넌트로 앱을 빌드하는 Vue에서 이름 충돌의 문제를 사전에 방지한다는 점이다. 