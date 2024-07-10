<template>
  <div @scroll="onScroll" :style="{ backgroundColor: Colors.header, marginTop: 0 }">

    <h1 :style="{ backgroundColor: Colors.header }">Recent Upload</h1>
    
    <!-- <YouTube 
         class="youtubeStyle"
        src="https://www.youtube.com/embed/3jBFwltrxJw?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3" 
        @ready="onReady"
       
        ref="youtube" /> -->

    <div @click="onScroll" @scroll="onScroll" class="ContainerStyle">
      <div
      class="ContainerInnerStyle"
      v-for="movie in $store.state.movie.recentMovieList" :key="movie.id">

        <img class="movieImgStyle" :src="movie.large_cover_image" />

        <label class="movieTitleStyle">{{ movie.title_long }}</label>
        <div class="img__description">
          <div class="movieDetailsInnerContainer">
            <label class="movieDetailTitleStyle">Rating</label>
           <label class="ratingLabelStyle">{{movie.rating}} / 10</label>
          </div>
          
          <div class="movieDetailsInnerContainer">
           <label  v-for="genre in movie.genres" :key="genre" class="genre">{{genre}}</label>
           </div>
           <div class="movieDetailsInnerContainer">
              <button
              @click="movetoMoveiDetails(movie.id)"
              class="viewMoveDetailsStyle">View Details</button>
           </div>
        </div>
      </div>

    </div>
    <div v-if="$store.state.movie.loader" class="loaderStyle">
      <label :style="{marginBottom:30}"> Loading...</label>
    </div>
    <div v-else class="bottomContainer">
      <button @click="nextPage" class="nextButtonStyle">Next Page</button>

    </div>



  </div>
</template>
<script>
import Colors from '../utils/colors';
// import { useRouter } from 'vue-router'

export default {
  name: "HomeProfile",
  
  methods: {
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      console.log("sdsd")
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Loader...")
      }
    },
    nextPage() {
      this.$store.dispatch('getMovieListPagination', {
        page: this.$store.state.movie.currentPage,
        size: this.$store.state.movie.pageSize
      })
    },
    onReady() {
      console.log("manidnnnnn")
            this.$refs.youtube.playVideo()
        },
      movetoMoveiDetails(id){
        // const router = useRouter();
       // router.push(`/movie/${id}`);
        this.$router.push({ path: `/movie/${id}` })
      }

  },
  components: {
   
  },
  data() {
    return {
      Colors

    }
  },
  created() {
    this.$store.dispatch('getMovieList', {
      page: this.$store.state.movie.currentPage,
      size: this.$store.state.movie.pageSize
    })

  }
}
</script>
<style scoped>
* {
  background-color: #1D1D1D;
}

.dummy {
  color: blue;
}

.imageStyle {
  width: 100px;
  height: 150px;
}

.ContainerStyle {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 25%;
 
  justify-content: space-around;
  /* width: 200px; */
  justify-content: center;

} 

h1 {
  text-align: center;
  color: wheat;
}

.ContainerInnerStyle {
  flex-basis: 25%;
  color: white;
  padding: 10px;
  flex-basis: 20%;
  /* flex-grow: 1; */
 

  /* margin: 5px; */

  justify-content: center;
  text-align: center;
  position: relative;
}

.movieImgStyle {
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  border: wheat solid 5px;
  /* width: 50%; */
}

.loaderStyle {
  color: wheat;
  text-align: center;
  margin-bottom: 50px;
  background-color: transparent;

}

.nextButtonStyle {
  color: wheat;
  background-color: #171618;
  width: 100px;
  height: 50px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 50px;
   border: 5px solid wheat;
}

.bottomContainer {
  display: flex;
  justify-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-basis: 100%;
}
.movieTitleStyle{
  color: wheat;
  font-size: 13px;
  
  /* position: relative; */
  /* padding-top: 16px; */
  
}

.img__wrap {
  position: relative;
  height: 200px;
  width: 257px;
}
.img__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(245, 222, 179,0.72);
  color: black;
  visibility: hidden;
  opacity: 0;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.ContainerInnerStyle:hover .img__description {
  visibility: visible;
  opacity: 1;
}

.ratingLabelStyle{
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  display: block;
  /* margin-top: 1px; */
}
.movieDetailTitleStyle{
  display: block;
  background-color: transparent;
 
  /* flex-basis: 100%; */
  font-size: 12px;
   
}
.genre{
  font-size: 13px;
  font-weight: bold;
  background-color: transparent;
  display: block;
  /* flex-basis: 100%; */
 
  /* margin-top: 1px; */
}
.movieDetailsInnerContainer{
   flex-basis: 100%;
   background-color: transparent;
}
.viewMoveDetailsStyle{
  background-color: white;
  color: black;
  font-size: 13px;
  border-width: 0px;
  font-size: 15px;
  font-weight: bolder;
  padding: 5px 15px;
}
.youtubeStyle{
  width: 100px;
  height: 100px;
}


</style>