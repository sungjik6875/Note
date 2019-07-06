> Vue animation은 뷰에서 지원하는 애니메이션 기능으로 데이터 추가, 변경, 삭제에 대해 페이드 인, 페이드 아웃 등의 여러가지 애니메이션 효과를 지원한다. 간단한 데이터부터 목록 아이템까지 모두 지원할 뿐만 아니라 기타 자바스크립트 애니메이션 라이브러리나 CSS 애니메이션 라이브러리도 같이 사용할 수 있다.



##### transition-group

> 목록에 애니메이션을 추가할 때 사용되는 태그이다. tag 속성에는 애니메이션이 들어갈 html 태그 이름을 지정한다.  name 속성은 이후 추가할 css 클래스와 연관이 있다.

```vue
<transition-group name="list" tag="ul">
  <li v-for="(todoItem, index) in propsdata" :key="todoItem">
    ...
  </li>
</transition-group>
```



##### ※ :key (v-bind:key)

> 위의 예시에서는 목록에 애니메이션을 추가하기 위해 반드시 :key 속성을 지정해야 한다. 이 :key 속성에는 각 목록의 아이템을 유일하게 구분하기 위한 값을 넣어야 한다.
>
> 목록 애니메이션 외에도 이 속성은 v-for 디렉티브를 사용할 때 꼭 지정해주는 것이 좋다. 뷰는 목록의 특정 아이템이 삭제되거나 추가되었을 때, 돔에서 나머지 아이템의 순서를 다시 조정하지 않고 프레임워크 내부적으로 전체 아이템의 순서를 제어한다. 이렇게 프레임워크에서 목록 아이템의 순서를 제어해야 하는 이유는 브라우저가 돔을 조작하는데 소요되는 시간들을 최소화하기 위함이다.
>
> 예를 들어보자. 가령 목록에 아이템이 1000개가 있다 가정하자. 두 번째 목록 아이템을 지울 경우 나머지 998개의 아이템이 한 번 씩 이동을 해야 한다. 화면을 다시 그려야 하는 브라우저 입장에서는 목록 아이템이 많을 수록 렌더링의 부담이 크다. 그러나 뷰 프레임워크에서 순서를 제어하는 경우에는 두 번째 아이템을 삭제해도 나머지 목록 아이템을 움직이지 않고, 내부적으로 아이템의 순서만 재조정하여 돔이동을 최소화한다. 따라서 브라우저에서 화면을 더 빠릴 그릴 수 있다.



##### css 클래스 속성 추가

> 위의 예시에서 지정한 name 속성의 값인 list뒤에 동작과 연관된 css를 붙인다. list는 접두사로 활용된다. 

```css
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
```

> 위의 예시에서 짐작할 수 있겠지만, enter, leave-to, enter-active, leave-active 등은 데이터가 들어오고 나가는 동작을 정의하는 CSS이다.
>
> 이 클래스 규칙과 체계는 뷰 프레임워크 내부적으로 정의되어 있다. 사용방법에 대해 자세히 알고 싶다면 뷰 애니메이션 클래스 공식 문서를 참고하면 된다.
>
> 참고 : <https://kr.vuejs.org/v2/guide/transitions.html> / 
>
> ​	