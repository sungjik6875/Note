> Vue의 인스턴스는 라이프 사이클을 갖는다. 크게 인스턴스 생성, 인스턴스 부착, 인스턴스 내용 업데이트, 인스턴스 소멸의 4개의 과정이 있으며, 이 과정 사이에 라이프 사이클 속성에 로직을 담아 사용할 수 있다.
>
> 인스턴스의 라이프 사이클과, 라이프사이클 속성이 적용되는 순서는 다음과 같다.



##### 인스턴스 생성 (new Vue() 동작)

> 이벤트 및 라이프 사이클 초기화
>
> ##### beforeCreate : 생성 후 가장 처음 실행됨. data, methods 속성이 정의되어 있지 않아 접근 불가, 돔과 같은 화면 요소에도 접근 불가
>
> 화면에 반응성 주입
>
> ##### created : data, methods의 속성에 접근 가능. 그러나 인스턴스가 화면에 부착되지 않아 template속성에 정의된 돔 요소에는 불가
>
> el, template 속성 확인
>
> template 속성 내용을 render()로 변환
>
> ##### beforeMount : created단계 이후 template 속성에 지정한 마크업 속성을 render()함수로 변환한 후, el 속성에 지정한 화면 요소에 인스턴스를 부착하기 전에 호출되는 단계이다. render() 함수가 호출되기 직전의 로직을 추가하기 좋다.
>
> $el 생성 후 el속성 값을 대입
>
> ##### mounted : template 속성에 정의한 화면 요소에 접근할 수 있어 화면 요소를 제어하는 로직을 수행하기 좋은 단계다.

##### 인스턴스 부착

> 인스턴스 데이터 변경
>
> ##### beforeUpdate: 데이터 변경시 가상 돔으로 화면을 다시 그리기 전에 호출되는 단계이다. 변경 예정인 새 데이터에 접근할 수 잇어 변경 에정 데이터 값과 관련된 로직을 미리 넣을 수 있다. 그러나 값을 변경하는 로직을 넣어도 화면이 다시 그려지지는 않는다. 
>
> 화면 재 렌더링 및 데이터 갱신
>
> ##### updated : 데이터 변경으로 인해 가상 돔으로 화면을 다시 그리고 나면 실행된다. 데이터 변경 후 화면 요소 제어와 관련된 로직을 추가하기 좋다. 이 단계에서 데이터 값을 변경하면 무한 루프에 빠질 수 있으므로 값을 변경하려면 computed,watch와 같은 속성을 사용해야 한다. 따라서 데이터 값을 갱신하는 로직은 beforeUpdate에 추가하고, updated에서는 변경 데이터의 화면 요소와 관련된 로직을 추가하는 것이 좋다.

##### 인스턴스 내용 갱신

> 인스턴스 접근 가능
>
> ##### beforeDestroy : 뷰 인스턴스가 파괴되기 직전에 호출되는 단계이다. 아직 인스턴스에 접근할 수 있으므로 뷰 인스턴스의 데이터를 삭제하기 좋다.
>
> 컴포넌트, 인스턴스, 디렉티브 등이 모두 해제
>
> ##### destroyed: 뷰 인스턴스가 파괴되고 나서 호출되는 단계이다. 

##### 인스턴스 소멸





```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vue Instance LifeCycle</title>
</head>
<body>
    <div id="app">
        {{ message }}
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            new Vue({
                el: '#app',
                data: {
                    message: 'Hello Vue.js!'
                },
                beforeCreate: function() {
                    console.log("beforeCreate");
                },
                created: function() {
                    console.log("created");
                },
                mounted: function() {
                    console.log("mounted");
                },
                updated: function() {
                    console.log("updated");
                }
            });
        </script>
    </div>
</body>
</html>
```

> 위에서 updated를 제외한 모든 로직이 수행되는 것을 확인할 수 있다. updated는 데이터 변경시에만 호출이 되기 때문이다. 만약 mounted에 값을 변경하는 다음의 로직을 추가한다면, updated도 호출되는 것을 확인할 수 있다.

```javascript
mounted: function() {
	console.log("mounted");
	this.message = "Hello!"
},
```

