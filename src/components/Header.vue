<template>
    <header>
        <img class="logo" src="../assets/spotify-logo.png" alt="Spotify Logo">
        <div class="select-bar">
            <span>Search by genre</span>
            <SelectList @selectFilter="getSelected" :filters="getGenres" :filter-name="'genre'"/>
        </div>
    </header>
</template>

<script>

import SelectList from './SelectList.vue';
import axios from 'axios';

export default {
  name: 'Header',
  components: {
    SelectList
  },
  data() {
      return {
          filter: '',
          albums: [],
          genres: []
      }
  },
  methods: {
      getSelected (select) {
          this.filter = select;
      }
  },
  computed: {
      getGenres() {
          const genres = [];
          this.albums.forEach ((album) => {
              if (!genres.includes(album.genre)) {
                  genres.push(album.genre);
                  this.genres.push(album.genre);
                  console.log(genres);
              }
          });
          return genres;
      },
      filteredAlbums() {
          let filtered = [];
          if (this.filter == '') {
              filtered = this.albums; 
          } else if (this.genres.includes(this.filter)){
              filtered = this.albums.filter((album) => album.genre == this.filter);
          } 
          return filtered;
      }
  },
  created() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                this.albums = res.data.response;
                this.loaded = true;
            });
    }
  
}
</script>

<style lang="scss">
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        .logo {
            width: 5%;
        }
        .select-bar {
            display: flex;
            span {
                color: white;
                margin-right: 10px;
            }
            margin-right: 15px;
        }
    }
</style>
