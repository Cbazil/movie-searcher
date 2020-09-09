<template>
  <div>
    <input type="text" v-model="search_input" />
    <button @click="searchMovie">Search</button>
    <div v-for="item in movies" :key="item.id">
      <h2>{{ item }}</h2>
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
      page: "&page=3"
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
        this.page;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.movies = data;
        })
        .catch(err => {
          alart(err);
        });
    }
  }
};
</script>

<style scoped></style>
