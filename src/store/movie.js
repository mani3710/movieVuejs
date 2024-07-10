import API from '../server';
const MoviesStore = {
    state: {
      name:"Kandan",
      pageSize:15,
      currentPage:1,
      recentMovieList:[],
      loader:false,
      selectedMovieDetails:{},
      selectedMovieLoader:false,
      suggestionMovieList:[]
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
        },
        setSelectedMovieLoader(state,action){
          state.selectedMovieLoader = action;
        },
        setSelectedMovieDetails(state,action){
          state.selectedMovieDetails = action.movie;
        },
        setSuggestionMovieList(state,action){
          state.suggestionMovieList = action.movies;
        },

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
        },
        async getSpecificMovieDetails(store,action){
          
          store.commit('setSelectedMovieLoader',true);
           console.log(action, "aassa")
          const res = await API.get(`/movie_details.json?movie_id=${action}`);
           console.log("setSelectedMovieDetails res",res.data?.data);
           store.commit("setSelectedMovieDetails",  res.data?.data );
           const resSuggestion = await API.get(`/movie_suggestions.json?movie_id=${action}`);
           store.commit("setSuggestionMovieList",  resSuggestion.data?.data );
           console.log("resSuggestion res",resSuggestion.data?.data);
           store.commit('setSelectedMovieLoader',false);
      }
     },
    getters: {  }
  }


  export default MoviesStore;