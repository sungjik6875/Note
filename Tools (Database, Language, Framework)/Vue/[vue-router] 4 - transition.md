> Vue에서는 어떤 항목이 DOM에 삽입, 갱신, 또는 제거될 때 트랜지션 효과를 적용하는 다양한 방법을 제공한다. 주로 라우터와 결합하여 사용되는데, 사용 예시는 다음과 같다.

```vue
<transition name='page'>
	<router-view></router-view>
</transition>
```



> transition 효과를 적용하고 싶은 부분을 `<transition>`으로 감싼다. name은 자유롭게 설정이 가능하며 Vue에서 지원하는 CSS 클래스 선택자의 prefix로 쓰인다.

```css
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to 
/* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```

