<template >
  <div v-if="$store.state.movie.selectedMovieLoader" class="loaderStyle"> Loader...</div>
    <div 
    v-else
    class="backgroundImageStyle"
    :style="{backgroundImage:'url('+$store.state.movie?.selectedMovieDetails.background_image_original+')'}">
        <div class="outterContainerStyle">
          <div class="titleLeftContainerStyle">
            
            <img 
            
            class="bannerImageStyle" :src="$store.state.movie?.selectedMovieDetails?.large_cover_image" />
            <button class="downloadButtonStyle">Download</button>
            <button class="watchNowButtonStyle">Watch Now</button>
          </div>
          <div class="titleMiddleContainerStyle">
            <label class="movieTitleStyle">{{ $store.state.movie?.selectedMovieDetails?.title_english }}</label>
            <label class="movieSubtitleStyle" :style="{paddingTop:20}">{{ $store.state.movie?.selectedMovieDetails?.year }}</label>

            <label v-for="genre in $store.state.movie?.selectedMovieDetails?.genres" :key="genre" class="movieGenresStyle"  >{{ genre }} / </label>
            <label class="availableStyle">Available in:</label>
            <label v-for="torrent in $store.state.movie?.selectedMovieDetails?.torrents" :key="torrent" class="availableQualityStyle">{{ torrent?.quality }}</label>
           
          
          </div>
          <div class="titleRightContainerStyle">
            <div>
              <label class="similarLabelMovieStyle">Similar Movie</label> </div>
              <div class="similarInnerContainer">

                <img 
                  v-for="suggestion in $store.state.movie?.suggestionMovieList"
                  :key="suggestion"
                 class="suggestionImageStyle" 
                 :src="suggestion.medium_cover_image"
                 @click="movetoMoveiDetails(suggestion.id)"
                  />
                 
              </div>
            
            
           
          </div>
          
        </div>
      </div>
</template>
<script>
export default {
    name:"MovieDetails",
    mounted(){
      this.$store.dispatch("getSpecificMovieDetails",this.$route.params.id)
      //  console.log("kk",this.$route.params.id);
    },
    methods:{
      movetoMoveiDetails(id){
        // const router = useRouter();
       // router.push(`/movie/${id}`);
       this.$forceUpdate() 
        this.$router.push({ path: `/movie/${id}` })
      }
    }
}
</script>
<style scoped>
  .dummy{
    color: blue;
  }
  .backgroundImageStyle{
    position: relative;
    width: 100%;
     
    background-color: #171618;
    background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: 100% 100%;
  }
  .outterContainerStyle{
    /* margin-right: auto;
    max-width: auto; */
    display: flex;
    flex-wrap: wrap;
     justify-content: center;
     

  }
  .bannerImageStyle{
     height: 300px;
    width: 200px;
    border: 5px solid wheat;
    
  }
  .downloadButtonStyle{
    background-color: #6AC045;
    color: white;
    width: 200px;
    height: 50px;
    display: block;
    margin-top: 20px;
    border-radius: 5px;
    border-width: 0px;
  }
  .watchNowButtonStyle{
    background-color: #26AF9F;
    color: white;
    width: 200px;
    height: 50px;
    display: block;
    margin-top: 20px;
    border-radius: 5px;
    border-width: 0px;
  }
  .titleMiddleContainerStyle{
    margin-top: 20px;
    padding-top: 20px;
    flex-basis: 40%;
    /* background-color: red; */
    background-color: rgba(29, 29, 29, 0.6);
    padding-left: 16px;
    margin-bottom: 20px;
    
  }
  .titleLeftContainerStyle{
    margin: 0px 20px;
    padding-top: 20px;
    padding-bottom:20px;
   
  }
  .movieTitleStyle{
     font-size: 24px;
     font-weight: bolder;
     color: wheat;
     display: block;
  }
  .movieSubtitleStyle{
     font-size: 18px;
     font-weight: 700;
     color: wheat;
     display: block;
  }
  .movieGenresStyle{
     font-size: 18px;
     font-weight: 700;
     color: wheat;
  
  }
  .availableStyle{
     font-size: 18px;
     font-weight: 700;
     color: wheat;
   
  }
  .availableQualityStyle{
     border: 2px solid wheat;
     color: wheat;
     font-size: 14px;
     font-weight: 400;
     padding-left: 10px;
     padding-right: 10px;
     border-radius: 5px;
     margin-top: 16px;
     margin-left: 5px;
  }
  .titleRightContainerStyle{
    margin: 0px 20px;
    padding-top: 20px;
    padding-bottom:20px;
   
  }
  .suggestionImageStyle{
     height: 150px;
     width: 100px;
    border: 3px solid wheat; 
    margin: 5px;
  }
  .similarLabelMovieStyle{
    font-size: 14px;
     font-weight: 300;
     color: wheat;
  }
  .similarInnerContainer{
     width: 250px;
    
     display: flex;
     flex-wrap: wrap;
  }
  .loaderStyle{
    color: wheat;
  text-align: center;
  margin-bottom: 50px;
  background-color: transparent;
  }
  
  
</style>