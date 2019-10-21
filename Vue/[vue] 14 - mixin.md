#### Mixin

------

> 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법이다. 믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션이다.
>
> 사용 예시는 다음과 같다. 우선 src 디렉토리에 mixins라는 디렉토리를 생성하고, 그 밑에 mixin으로 사용할 js 파일을 생성한다. 생성한 파일에 다음과 같이 입력한다.



```javascript
// 컴포넌트 로직에 필요한 레퍼런스
import { mapActions } from 'vuex';
import { setTimeout } from 'timers';

import LoaderBus from '../utils/loader';
import ListItem from '../components/ListItem';


export default {
  // 재사용할 컴포넌트 옵션, 로직
  methods: {
    ...mapActions([
      'FETCH_LIST'
    ])
  },
  components: {
    ListItem,
  },
  created() {
    LoaderBus.$emit('start:loader');
    setTimeout(() => {
      this.FETCH_LIST(this.$route.name)
      .then(data => {
        LoaderBus.$emit('end:loader');
        console.log('fetched');
      })
      .catch(error => {
        console.log(error);
      })
    }, 3000);
  },
}
```

> 재사용할 컴포넌트 옵션 로직을 export 부분에 구현한다. import를 통해 해당 로직 구현에 필요한 레퍼런스를 참조할 수 있도록 한다. export부분에는 methods, data와 같은 컴포넌트 옵션을 정의한다.
>
> 믹스인에 사용할 옵션을 정의하였으니, 이제 믹스인을 사용할 컴포넌트에서 다음과 같이 믹스인을 등록하면 된다.

```vue
<script>
import ListMixin from '../mixins/ListMixin';

export default {
  mixins: [ ListMixin ]
}
</script>
```

> mixin에 사용할 로직을 import한 후에, 해당 로직을 mixins 옵션에 등록하면 된다.



##### Mixin과 HOC의 비교

> Mixin과 HOC 모두 컴포넌트에서 반복되어 사용되는 로직의 재사용성을 증가시키고, 코드의 양을 줄인다는 장점이 있다. 또한 Mixin은 HOC에 비해 컴포넌트 트리 구조가 깊어지지 않으며, 사용하기 쉽다는 장점이 있다.