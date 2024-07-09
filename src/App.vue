<template>
  <div class="headerStyle" :style="{ backgroundColor: Colors.header }">
    <div class="headerLeft">
      <img src="./assets/batman.png" class="logoStyle" />
      <h2 class="logoLabelStyle">Movie App</h2>
    </div>
    <div class="headerLeft">
      <input class="searchTextStyle" placeholder="Search Movie name" type="text" v-model="searchInput" />
      <ul class="menuListStyle">
        <li @click="changeTab('Home')">
          <RouterLink to="/" class="menuStyle" :style="{ color: currentRouteName == 'Home' ? 'wheat' : 'gray' }">Home
          </RouterLink>
        </li>
        <li @click="changeTab('4k')">
          <RouterLink to="/4k" class="menuStyle" :style="{ color: currentRouteName == '4k' ? 'wheat' : 'gray' }">4k
          </RouterLink>
        </li>
        <li @click="changeTab('Browse Movie')">
          <RouterLink to="/browse" class="menuStyle"
            :style="{ color: currentRouteName == 'Browse Movie' ? 'wheat' : 'gray' }">
            Browse Movie</RouterLink>
        </li>
        <li @click="changeTab('Trending')">
          <RouterLink to="/trending" class="menuStyle"
            :style="{ color: currentRouteName == 'Trending' ? 'wheat' : 'gray' }">
            Trending</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <RouterView />
</template>

<script>
import Colors from './utils/colors';

export default {
  name: 'App',
  data() {
    return {
      Colors,
      searchInput: "",
      activeTab: "Home"
    }
  },

  methods: {
    changeTab(name) {
      this.activeTab = name;
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  mounted() {

  }

}
</script>

<style scoped>
.headerStyle {

  /* height: 30px; */
  position: sticky;
  flex-wrap: wrap;
  display: flex;
  /* justify-content: space-between; */
  padding: 10px 10px;
  top: 0px;
  justify-content: space-around;
  /* border-bottom-color: gray;
  border-bottom-width: 1px; */

}

.headerLeft {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  flex-basis: 50%;

  text-align: center;
  position: relative;

}

.logoStyle {
  width: 90px;
  height: 60px;
}

.logoLabelStyle {
  color: white;
  margin-left: 16px;
}

input {
  background-color: transparent;
  border: 2px solid gray;
  border-radius: 10px;
}

.searchTextStyle {
  height: 30px;
  width: 300px;
  text-align: center;
  color: wheat;

}

input :hover {
  border: 2px solid gray;
}

.menuListStyle {

  display: flex;
  list-style-type: none;
}

.menuStyle {
  padding: 0px 10px;
  text-decoration: none;
  color: gray;
  font-size: 18px;
  text-align: center;

}

@media screen and (max-width: 640px) {
  .headerLeft {
    flex-basis: 100%;
    align-items: center;
    justify-content: center;
  }

}

@media screen and (max-width: 1370px) {
  .headerLeft {

    flex-basis: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
  }

}
</style>
