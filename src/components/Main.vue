<template>
    <main>
        <div class="container main-container">
            <Album v-for="(item, index) in discs" :key='index'
            :poster='item.poster'
            :title='item.title'
            :author='item.author'
            :genre='item.genre'
            :year='item.year'
        />
        </div>
    </main>
</template>

<script>

import Album from './Album.vue'

export default {
  name: 'Main',
  props: {
      discs: Array
  },
  components: {
      Album
  }
  
}
</script>

<style lang="scss">
    .main-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>
