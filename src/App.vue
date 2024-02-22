<template>
  <v-app>
    <nav-bar></nav-bar>
    <!-- v-app : vuetify components only inside of v-app component -->
    <v-main class="mx-4"> 
      <!-- M-5 last -->
      <!-- Vue content loads here -->
      <router-view />
    </v-main>
  </v-app>
</template> 

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

      <!-- // dark:it is a prop that have style properties, we can add class atttibute and css propertits  -->
