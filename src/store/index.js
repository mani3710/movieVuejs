import { createStore } from "vuex";
import MoviesStore from './movie';
export default createStore({
    // state:{
    //   name:"Mani",
    //   recentUpload:[]
    // },
    // mutations:{

    // },
    // actions:{

    // },
    // getters:{

    // },
    modules:{
      movie:MoviesStore
    }
})