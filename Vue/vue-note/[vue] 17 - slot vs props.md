##### slot을 활용한 디자인과 props를 활용한 디자인의 비교

> 컴포넌트를 디자인 할 경우 slot을 사용하여 다음과 같이 각 컴포넌트에 데이터를 전달할 수 있다.

```vue
<!-- App.vue -->

<template>
  <div>
    <ul>
      <slot-item v-for="dog in dogs">{{ dog }}</slot-item>
    </ul>
  </div>
</template>

<script>
import SlotItem from './components/SlotItem';

export default {
  data() {
    return {
      dogs: ['말라뮤트', '웰시코기', '사모예드', '리트리버', '보더콜리']
    }
  },  
  components: {
    SlotItem,
  },
}
</script>
```

```vue
<!-- SlotItem.vue -->

<template>
  <li>
    <slot>
      <!-- 등록하는 곳에서 정의할 영역 -->
    </slot>
  </li>
</template>
```



> 위의 코드는 props를 사용하여 다음과 같이 디자인해도 화면에 같은 결과가 출력될 것이다.

```vue
<!-- App.vue -->

<template>
  <div>
    <ul>
      <slot-item v-for="dog in dogs" :dog="dog"></slot-item>
    </ul>
  </div>
</template>

<script>
import SlotItem from './components/SlotItem';

export default {
  data() {
    return {
      dogs: ['말라뮤트', '웰시코기', '사모예드', '리트리버', '보더콜리']
    }
  },
  components: {
    SlotItem,
  },
}
</script>
```

```vue
<!-- SlotItem.vue -->

<template>
  <li>
    {{ dog }}
  </li>
</template>

<script>
export default {
  props: ['dog']
}
</script>
```



##### slot의 마크업 확장 기능이 주는 장점

> props로도 같은 결과를 출력하도록 디자인 할 수 있다면 slot의 기능이 왜 필요할까라는 의문이 들 수 있다. 그러나 slot은 보다 강력한 기능을 제공하는데, 바로 컴포넌트에 마크업 확장성을 부여한다는 점이다. 
>
> 만약 특정 강아지에만 다른 마크업을 부여하려는 상황이면 어떻게 될까? 다음의 예시를 보자.

```vue
<template>
  <div>
    <ul>
      <slot-item v-for="dog in dogs">
        {{ dog }}
        <button v-if="dog === '사모예드'">Click</button>
      </slot-item>
    </ul>
  </div>
</template>

<script>
import SlotItem from './components/SlotItem';

export default {
  data() {
    return {
      dogs: ['말라뮤트', '웰시코기', '사모예드', '리트리버', '보더콜리']
    }
  },
  components: {
    SlotItem,
  },
}
</script>
```

> 위의 예시에서는 사모예드 견종에 한해서 버튼을 출력하도록 디자인하였다. 물론 이는 간단한 로직이므로 props로 디자인한 코드에서도 v-if를 통해 같은 방식으로 분기처리하여 구현하는 것이 쉽게 가능할 것이다.
>
> 그러나 만약 다르게 구현해야 할 부분이 여러 개의 부분이라면 이야기가 달라질 것이다. slot의 장점은 하나의 컴포넌트에도 여러개의 slot을 등록할 수 있다는 점이다. 게다가 마크업의 확장이 자유롭다는 점에서 slot은 편리하다. 만약 버튼 하나가 아니라 복잡한 마크업이면 어땠을까? slot을 활용하면 props로 디자인한 코드보다 훨씬 직관적이므로 코드를 파악하기가 쉽다.
>
> 그 외에 slot으로 디자인을 하면 하위 컴포넌트의 상위 컴포넌트에 대한 데이터 종속성을 줄일 수 있다. 데이터를 전달할 필요 없이 상위 컴포넌트에서 데이터를 관리하면 되는 것이다.