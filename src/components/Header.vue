<template>
    <header>
        <img class="logo" src="../assets/spotify-logo.png" alt="Spotify Logo">
    </header>
</template>

<script>

export default {
  name: 'Header',
  components: {
    
  },
  
}
</script>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        height: 60px;
        .logo {
            width: 5%;
        }
    }
</style>
