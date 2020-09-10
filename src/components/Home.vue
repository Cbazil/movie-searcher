<template>
  <div>
    <h1 id="app-name">TheMovieDB</h1>
    <div id="search-bar">
      <input id="search-txt" type="text" v-model="search_input" />
      <button id="search-btn" @click="searchMovie">
        <i class="fas fa-search" style="color: #424242; font-size: 18px"></i>
      </button>
    </div>
    <div id="movie-div">
      <div class="movie-case" v-for="item in movies" :key="item.id">
        <router-link :to="'/movie/' + item.id">
          <img :src="`https://image.tmdb.org/t/p/w154/${item.poster_path}`" />
          <h4 id="m-title">{{ item.title }}</h4>
        </router-link>
      </div>
    </div>
    <div id="pagination">
      <button
        class="pagination-btn"
        v-for="page in pages"
        @click="selectPage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_input: "",
      movies: [],
      apiKey: "6ac722593e5dba1c8e10c2f8dda07f65",
      baseURL: "https://api.themoviedb.org/3/",
      page: 1,
      pages: []
    };
  },
  methods: {
    searchMovie() {
      var url =
        this.baseURL +
        "search/movie?api_key=" +
        this.apiKey +
        "&query=" +
        this.search_input +
        "&page=" +
        this.page;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.movies = data.results;
          let pagesArr = [];
          for (let i = 1, count = 0; count < data.total_pages; count++, i++) {
            pagesArr.push(i);
          }
          this.pages = pagesArr;
        })
        .catch(err => {
          alart(err);
        });
    },
    selectPage(id) {
      this.page = id;
      this.searchMovie();
    }
  }
};
</script>

<style scoped>
#app-name {
  font-size: 60px;
  font-family: "Comic Neue", cursive;
  color: #fff;
}
#search-bar {
  margin: 0 15%;
  display: grid;
  height: 5vh;
  grid-template-columns: 11fr 1fr;
  background-color: white;
}
#search-txt {
  border: none;
  background-color: inherit;
  height: inherit;
  padding: 0 2%;
  font-size: 20px;
  font-family: "Comic Neue", cursive;
}
#search-btn {
  border: none;
  background-color: inherit;
  height: 99.8%;
  width: 100%;
}
#movie-div {
  display: grid;
  margin: 0 15%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  grid-gap: 0.5em;
}
.movie-case {
  width: 100%;
  height: fit-content;
  border: 1px solid #fff;
  color: #222222;
  background-color: #fff;
  cursor: pointer;
}
.movie-case > img {
  width: 190px;
  height: 260px;
}
.movie-case > h4 {
  font-size: 14px;
  margin: 0;
  overflow-y: hidden;
}
#pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination-btn {
  background-color: dodgerblue;
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border: 1px solid dodgerblue;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}
</style>
