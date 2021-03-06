> Vuex는 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리이다. Vuex는 React의 Flux 패턴에서 기인하였다. Flux 패턴에 대해 소개하기 이전에, Flux 패턴이 등장하게 된 배경을 먼저 알아보자. 이 배경에 대해 알기 위해서는 MVC 패턴에 대해 먼저 알아야 한다.





#### MVC 패턴

------

```
Controller -> Model <=> View
```

> 위의 그림은 앱이 단순한 경우의 MVC 패턴이다. MVC 패턴은 앱의 규모가 커질 경우 문제점이 잘 드러난다.
>
> 앱이 복잡해지면서 Model과 View가 많아지면 하나의 Controller가 여러개의 Model에 영향을 준다. 이 Model과 View들은 서로 간의 쌍방향 데이터 흐름이 가능하다. 따라서 여러 개의 Model과 View들이 상호작용 하에 서로 뒤얽히게 된다. 이렇게 되면 데이터의 흐름을 예측하기 어렵고, 추적하기도 어렵다. 따라서 기능 추가 및 변경에 따라 생기게 될 문제점을 예측하기 어렵다는 문제점이 있다.
>
> 이렇게 복잡한 데이터 흐름을 제어하기 위해 단방향으로 데이터의 흐름을 제어하는 패턴인 Flux 패턴이 등장한다.





#### Flux 패턴

------

> MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴(단방향 데이터 흐름, Unidirectional data flow)이다. 데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리한다. 데이터 흐름은 아래와 같다.

```
(View ->)Action -> Dispatcher -> Model -> View
```

> 위 모델에서 각 단계는 다음을 의미한다.

- action : 화면에서 발생하는 이벤트 또는 사용자의 입력
- dispatcher : 데이터를 변경하는 방법, 메서드
- model : 화면에 표시할 데이터
- view : 사용자게에 보여지는 화면