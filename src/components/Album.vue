<template>
    <div class="album-container">
        <img class="album-img" :src="poster" :alt="'Album cover of ' + title + ' by ' + author">
        <div class="album-txt">
            <div class="album-title">{{title}}</div>
            <div class="album-author">{{author}}</div>
            <div class="album-year">{{year}}</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Album',
  props: {
      poster: String,
      title: String,
      author: String,
      genre: String,
      year: String
  }
  
}
</script>

<style lang="scss">

    .album-container {
        background-color: rgba(46,58,70,255);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: calc(100% / 5 - 30px);
        padding: 12px;
        margin: 12px;
            .album-img {
                width: 100%;
                margin-bottom: 12px;
            }
            .album-txt {
                .album-title {
                    color: white;
                    font-weight: bold;
                }
                .album-author {
                    margin-top: 6px;
                    font-size: 14px;
                    color: gray;
                }
                .album-year {
                    font-size: 12px;
                    color: gray;
                }
            }
    }

</style>
