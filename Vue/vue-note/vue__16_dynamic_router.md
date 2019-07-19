> 동적 라우팅의 경우 다음과 같이 동적으로 할당할 변수에 `:`를 붙여준다.

```javascript
{
	path: '/user/:id',
	component: UserView,
},
```



> 동적으로 할당하므로 반드시 router-link의 to 속성에도 ${}를 활용하여 동적으로 할당할 속성값을 지정해주면 된다.

```html
<router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
```

