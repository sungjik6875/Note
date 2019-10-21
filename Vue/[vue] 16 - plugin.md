#### 라이브러리 플러그인화의 필요성과 장점

------

> 다음은 두 개의 차트를 컴포넌트 화하여 App.vue에 등록한 예시이다.

```vue
<!-- App.vue -->

<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

export default {
  components: {
    BarChart,
    LineChart,
  },
}
</script>
```



> App.vue에 등록된 차트 컴포넌트인 BarChart, LineChart는 다음과 같다.

```vue
<!-- BarChart.vue -->

...

<script>
import Chart from 'chart.js';

export default {
  mounted() {
    var ctx = this.$refs.barChart;
    var myChart = new Chart(ctx, {
    ...
    
</script>
```

```vue
<!-- LineChart.vue -->

...

<script>
import Chart from 'chart.js';

export default {
  mounted() {
    var ctx = this.$refs.lineChart;
    var myChart = new Chart(ctx, {
    ...
        
</script>
```

> 위의 코드로도 구현에는 문제는 없지만 컴포넌트마다 chart.js라는 라이브러리를 import하는 것은 효율적이지 못하다. 라이브러리의 import를 한 번만 하여도, 각 컴포넌트에서 해당 라이브러리를 참조할 수 있다면 더욱 효율적일 것이다. 이를 가능하게 하는 것이 라이브러리를 플러그인화 하는 것이다.
>
> Vue에서 가장 자주 사용되는 라이브러리인 vue-router와 vuex의 경우 import를 하지 않아도 각각 $route와 $store로 접근할 수 있었다. chart.js도 플러그인화 하면 이렇게 접근하는 것이 가능하다.





#### 라이브러리의 플러그인화

------

> plugin과 관련된 파일을 별도로 분리하기 위해 src 디렉토리 밑에 plugins 디렉토리를 생성한 후, 해당 디렉토리 내에 파일을 생성한다.

```
src
ㄴ plugins
	ㄴ chart.js
```



> 해당 파일에 다음과 같이 작성한다.

```js
import Chart from 'chart.js';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  }
}
```

> chart.js 라이브러리를 로딩해야 하므로 import한다.  install이라는 내장 API에 Vue를 인자로 등록하고, prototype 속성에 `$_Chart`를 chart.js 라이브러리와 연결한다. `$_Chart`는 Vue 공식 가이드에서 권장하는 네이밍이다.



> 위와 같이 작성하여 플러그인으로 등록한 후, 플러그인 설치를 위해 main.js에서 다음과 같이 입력한다.

```js
import Vue from 'vue'
import App from './App.vue'
import Chart from './plugins/chart';

Vue.config.productionTip = false

Vue.use(Chart);

new Vue({
  render: h => h(App),
}).$mount('#app')
```

> chart.js 라이브러리를 플러그인으로 등록했던 js 파일인 chart.js(주의: chart.js 라이브러리가 아니다.)를 import한다. 이를 Vue.use의 인자로 넣어주면 export된 install API 메소드가 실행되며 chart.js 라이브러리가 플러그인으로 등록된다.



> 이제 BarChart, LineChart에서 chart.js를 import하지 않아도 다음과 같이 접근하는 것이 가능하다. 플러그인으로 등록했기 때문에 import후 new Chart에서 Chart 대신 this.$_Chart로 바로 접근할 수 있다.

```vue
<!-- BarChart.vue -->

...

<script>
export default {
  mounted() {
    var ctx = this.$refs.barChart;
    var myChart = new this.$_Chart(ctx, {
    ...
    
</script>
```

```vue
<!-- LineChart.vue -->

...

<script>
import Chart from 'chart.js';

export default {
  mounted() {
    var ctx = this.$refs.lineChart;
    var myChart = new this.$_Chart(ctx, {
    ...
        
</script>
```

