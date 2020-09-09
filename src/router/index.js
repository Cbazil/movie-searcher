import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
// import Movie from "../components/Movie.Vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
    // {
    //   path: "/movie/:id",
    //   name: "Movie",
    //   component: Movie
    // }
  ],
  mode: "history"
});
