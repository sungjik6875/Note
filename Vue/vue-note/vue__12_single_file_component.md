> html 파일에서 지금까지 배운 방식으로 뷰의 코드를 작성하는 데에는 한계가 있다. 실제 웹 앱에서는 사용하는 컴포넌트가 많다. 그런데 뷰 컴포넌트를 몇 개만 작성하고, 그 컴포넌트의 template이 조금만 복잡하더라도 코드를 읽기 힘들다는 것을 알 수 있다.
>
> 코드의 가독성이 떨어지는 이유 중 하나는 template에서 지정할 태그가 작성하기도 불편할 뿐더러, 어떤 구분 표시도 되지않아 구조를 파악하기 어렵기 때문이다.
>
> 이를 개선하기 위한 방법이 싱글 파일 컴포넌트 체계이다. 싱글파일 컴포넌트 체계에서는 `.vue`파일로 프로젝트 구조가 구성된다. 이때 하나의 `.vue`파일은 하나의 컴포넌트를 구성하게 된다.
>
> `.vue`파이른 아래와 같은 기본 구조를 갖는다.

```html
<template>
HTML 태그 내용을 정의한다. 화면에 표시할 요소를 정의하는 영역이다. html 태그와 바인딩된 뷰 데이터가 정의된다.
</template>

<script>
    export default {
        자바스크립트 내용을 정의한다. 뷰 컴포넌트의 내용이 정의된다. template, data, methods 등이 정의된다.
    }
</script>

<style>
	CSS 스타일 내용을 정의한다. HTML태그의 CSS 스타일을 정의한다.
</style>
```



> 컴포넌트를 정의한 예시는 다음과 같다.

```vue
<template>
  <div>
    <span>
      <button>{{ message }}</button>
    </span>
  </div>
</template>

<script>
export default {
  data: {
    message: 'click this button'
  }
}
</script>

<style>
span: {
  font-size: 1.2em;
}
</style>
```

