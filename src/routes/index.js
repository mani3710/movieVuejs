import { createRouter,createWebHistory } from "vue-router";
const HomeView = ()=> import('../components/home.vue');
const FourKView = ()=> import('../components/4k.vue');
const BrowseMovie = ()=> import('../components/browserMovie.vue');
const TrendingPage = ()=> import('../components/tendingPage.vue');
const MovieDetails = ()=> import('../components/movieDetails.vue');
const routes =[
   {path:"/",component:HomeView,name:"Home"},
   {path:"/4k",component:FourKView,name:"4k"},
   {path:"/trending",component:TrendingPage,name:"Trending"},
   {path:"/browse",component:BrowseMovie,name:"Browse Movie"},
   { path: '/movie/:id', component: MovieDetails,name:"Movie Details" },
]

export default createRouter({
   history:createWebHistory(),
   routes
});