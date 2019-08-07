#### Vendor Prefix

------

> CSS3 표준으로 확정되기 이전 또는 브라우저 개발사가 실험적으로 제공하는 기능을 사용하기 위해서는 벤더 프리픽스를 사용하여야 한다.
>
> `caniuse.com`에서 제공하는 브라우저별 CSS 지원 정보를 확인하면 텍스트와 요소의 선택을 방지하는 user-select 프로퍼티는 모든 브라우저에 벤더 프리픽스를 사용하여야 한다. 브라우저의 버전이 올라감에 따라 벤더 프리픽스를 사용하지 않아도 될 수 있다. 그러나 오래된 버전의 브라우저를 지원하기 위하여 벤더 프리픽스를 사용하여야 할 필요가 있다.
>
> 벤더 프리픽스의 사용 예시는 다음과 같다.

```css
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}
```



##### 브라우저 별 벤더 프리픽스

> ##### -webkit-
>
> Chrome, iOS Safari, Android Browser, Chrome for Android

> ##### -ms-
>
> Internet Explorer, IE Edge

> ##### -moz-
>
> Firefox

> ##### -o-
>
> Opera



##### Prefix Free 라이브러리

> 많은 브라우저를 위한 벤더 프리픽스를 사용하는 것은 코드의 양을 늘게한다는 단점이 있다. 게다가 브라우저는 매달 업데이트가 이루어지므로 불필요한 벤더 프리픽스를 사용할 가능성이 크다. 사용하지 않아도 되는 벤더 프리픽스를 사용하는 것은 성능에도 영향을 주므로 Prefix Free 라이브러리를 사용하는 것이 유용하다.
>
> Prefix Free 사이트에서 라이브러리를 다운로드하고 include 하여 간단하게 사용할 수 있다. include하면 벤더 프리픽스 없이 모든 CSS의 사용이 가능하다. 사용 예시는 다음과 같다.

```html
<script src="prefixfree.min.js"></script>
```

