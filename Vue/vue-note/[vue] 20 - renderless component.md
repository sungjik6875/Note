#### renderless component

------

> 템플릿 부분이 없이, 데이터 처리만을 담당하는 컴포넌트들을 렌더리스 컴포넌트라고 한다. 사용 예시는 다음과 같다.
>
> 먼저 다음과 같이 App.vue에 작성한다.

```vue
<!-- App.vue -->

<template>
  <div>
    <h1>FetchData</h1>
    <fetch-data 		           url='https://jsonplaceholder.typicode.com/users/1'> 
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData';

export default {
  components: {
    FetchData,
  },
}
</script>
```

> 컴포넌트로 등록한 FetchData가 데이터 처리만 담당하는 렌더리스 컴포넌트의 예시이다. FetchData에는 다음과 같이 입력한다. template 부분이 없다는 것에 주목하자.

```vue
<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then(response => {
        this.response = response.data;
        this.loading = false;
      })
      .catch(error => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  }
}
</script>
```

> 위 코드의 핵심은 렌더 함수 부분이다. 렌더 함수의 return문을 통해 상위 컴포넌트로 데이터의 접근을 허용할 수 있다. 그러나 이번에는 렌더링을 하지 않기 때문에 createElement 함수를 리턴하지는 않는다. 
>
> `$scopedSlots`는 상위 컴포넌트로부터 데이터 접근을 허용하기 위해 사용한다. response와 loading의 값을 상위 컴포넌트에서 접근할 수 있다. 그러나 콘솔에서 `$scopedSlots.default`라는 함수를 인식할 수 없다는 에러 메시지가 출력될 것이다. 이를 함수로 인식시켜 데이터의 접근을 허용하려면 App.vue에서 `slot-scope` 속성을 활용해야 한다. 다음과 같이 입력해보자.

```html
<fetch-data url='https://jsonplaceholder.typicode.com/users/1'>
    <div slot-scope="{ response, loading }">
        <div v-if="!loading">
        	{{ response }}
        </div>
        <div v-else>
        	Loading...
        </div>
    </div>
</fetch-data>
```

> slot-scope 속성을 등록한 태그 내에서는 위의 예시와 같이 $scopedSlots에 등록한 데이터인 response와 loading에 접근할 수 있다.



##### renderless component의 활용

> 렌더리스 컴포넌트를 활용하면 데이터를 불러오는 로직을 별도의 컴포넌트로 분리하는 것이 가능하다. 이를 통해 더욱 모듈화된 코드를 작성하여 코드의 유지보수가 편리해진다.