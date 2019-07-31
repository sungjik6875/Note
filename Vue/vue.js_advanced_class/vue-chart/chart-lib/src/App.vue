<template>
  <div>
    <h1>FetchData</h1>
    <fetch-data url='https://jsonplaceholder.typicode.com/users/1'>
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          <div>
            name : {{ response.name }}
          </div>
          <div>
            email : {{ response.email }}
          </div>  
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
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

<style>

</style>
