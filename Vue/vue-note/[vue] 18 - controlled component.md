#### Controlled Component

------

> 어떤 컴포넌트들은 결합력이 너무 높아서 디자인 시에 다음과 같은 문제점이 발견되기도 한다. checkbox 인풋을 컴포넌트로 구현한 예시를 보자. 

```vue
<!-- App.vue -->

<template>
	<check-box :checked="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox';
    
export default {
    data() {
        return {
            checked: false
        }
    },
    components: {
        CheckBox
    }
}
</script>
```

```vue
<!-- CheckBox.vue -->

<template>
	<input type="checkbox" v-model="checked">
</template>

<script>
export default {
    props: ['checked']
}
</script>
```

> 위의 예시에서는 App.vue에서 checked의 값을 props로 내린 후 이를 하위 컴포넌트인 체크박스 인풋에서 받아 v-model 디렉티브로 쌍방향 바인딩을 한 상태이다.
>
> 이러한 디자인 방식은 컴포넌트 간의 기본 트랜지션 규칙에 어긋나므로 (기본적으로 데이터의 전달은 상위에서 하위 컴포넌트 만으로 진행되어야 하므로) 문제가 있는 디자인 방식이다.
>
> 이런 경우에도 반드시 데이터의 관리는 상위 컴포넌트에서 하도록 하고, 데이터를 바꾸고자 할 때에는 emit을 통해 상위 컴포넌트로 이벤트와 인자를 전달하는 방식을 사용하여 기본 트랜지션 규칙을 준수해야 한다.
>
> 다음의 예시를 보자.

```vue
<!-- App.vue -->

<template>
	<check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox';

export default {
    components: {
        CheckBox
    },
    data() {
        return {
            checked: false,
        }
    }
}
</script>
```

```vue
<!-- CheckBox.vue -->

<template>
	<input 
    	type="checkbox" 
    	:value="value"
        @click="toggleCheckBox"
    >
</template>

<script>
export default {
    props: ['value'],
    methods: {
        toggleCheckBox() {
            this.$emit('input', !this.value);
        }
    }
}
</script>
```

> 이제 체크박스의 값을 바꿀 때에는 클릭을 통해 emit이 발생하게 되고 emit을 통해 상위 컴포넌트로 이벤트와 인자를 전달한다. 상위 컴포넌트에서 이벤트가 전달되어 값이 바뀌게 되면, 바뀐 값을 다시 props로 내려받아 값을 갱신한다. 
>
> 이렇게 디자인을 하면 기존의 트랜지션 규칙을 준수하였으므로 에러 메시지가 콘솔에 출력되지 않는 것을 확인할 수 있다.
>
> 추가로 상위 컴포넌트에서 'input'에 대해 메소드로 받지 않아도 잘 작동하는 것을 확인할 수 있다. 
