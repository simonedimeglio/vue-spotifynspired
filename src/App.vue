<template>
  <div id="app">
    {{discs}}
    <Header />
    <Main :discs="discs"/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return{
      discs: []
    }
  },
  created() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((result) => {this.discs = result.data.response})
  }
}
</script>

<style lang="scss">
</style>
