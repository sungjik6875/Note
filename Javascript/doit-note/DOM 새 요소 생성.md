##### index.html

```html
<body>
  <h1>요소 생성하기</h1>
  <div id="content">
    <p class="element">이것과 똑같은 요소를 만들어보자.</p>
  </div>

  <script src="./js/action.js"></script>
</body>
```

> index 설명



##### style.css

```css

```

> css 설명



##### action.js

```javascript
const content = document.querySelector('#content');

const newElem = document.createElement('p');
newElem.innerText = "똑같은 요소를 만들어 보았다.";
newElem.setAttribute('class', 'element');

content.appendChild(newElem);
```

> action 설명