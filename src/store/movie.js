import API from '../server';
const MoviesStore = {
    state: {
      name:"Kandan",
      pageSize:15,
      currentPage:1,
      recentMovieList:[],
      loader:false
    },
    mutations: { 
        setRecentMovieList(state,action){
            state.recentMovieList = action.movies;
            state.currentPage  = 2;
        },
        appendRecentList(state,action){
            state.currentPage  = state.currentPage+1;
            state.recentMovieList = [...state.recentMovieList,...action.movies];
        },
        setLoader(state,action){
          state.loader = action;
        }

    }, 
    actions: { 
        async getMovieList(store,action){
          
            store.commit('setLoader',true);
            console.log(action, "aassa")
            const res = await API.get(`/list_movies.json?page=${action.page}&limit=${action.size}`);
            console.log("getMovieList res",res.data?.data);
             store.commit("setRecentMovieList",  res.data?.data );
             store.commit('setLoader',false);
        },
        async getMovieListPagination(store,action){
          
            store.commit('setLoader',true);
            console.log(action, "aassa")
            const res = await API.get(`/list_movies.json?page=${action.page}&limit=${action.size}`);
            console.log("appendRecentList res",res.data?.data);
             store.commit("appendRecentList",  res.data?.data );
             store.commit('setLoader',false);
        }
     },
    getters: {  }
  }


  export default MoviesStore;