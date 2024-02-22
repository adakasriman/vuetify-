
<template>
  <div class="home">
    <h2>Home Page</h2>
    <p class="red white--text">
      <!-- colors in vuetify website -->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nemo iste
      distinctio quos temporibus alias fuga? Aperiam itaque nobis unde deserunt
      dicta, saepe quod sit, vel sapiente provident soluta deleniti?
    </p>
    <p class="pink lighten-5 red--text text--darken-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nemo iste
      distinctio quos temporibus alias fuga? Aperiam itaque nobis unde deserunt
      dicta, saepe quod sit, vel sapiente provident soluta deleniti?
    </p>
    <h3 class="display-4">Sriman</h3>
    <!-- last 4 -->
    <h4 class="display-1">Small display</h4>
    <!-- start 1 -->

    <p class="headline">This is a headline</p>
    <p class="subheading">This is a sub heading</p>
    <p class="caption">THis is caption</p>
    <!-- 
      text:
      https://vuetifyjs.com/en/styles/text-and-typography/#typography
     -->

    <h3 class="display-3">Button</h3>
    <v-btn class="pink white--text">Click btn</v-btn>
    <v-btn depressed color="pink">Click me Agian</v-btn>

    <v-btn text color="pink">Click ME</v-btn>
    <!-- 

      text: remove box show and background transparent -->

    <v-btn depressed small class="pink white--text">
      <v-icon left>mdi-email</v-icon> Email Me
      <!-- 
        small : this prop set the button text sizes and button sizes to small
        more : 
        left : this prop set icon left of the text
       -->
    </v-btn>

    <v-btn depressed large class="pink white--text">
      Email Me
      <v-icon left>mdi-email</v-icon>
      <!-- 
        large : this prop set the button text sizes and button sizes to small
        left : this prop set icon left of the text
       -->
    </v-btn>

    <v-btn depressed small color="purple white--text">
      <v-icon left>mdi-email</v-icon>
      Email Me
    </v-btn>

    <v-btn fab depressed small dark color="green red--text">
      <!-- 
        fab : this prop add border radius circle for button icon and text
       -->
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn fab depressed small dark color="green red--text"> </v-btn>

    <h3 class="display-3">
      Break Points
      <!-- 
      Screen Sizes
     -->
    </h3>

    <!-- <v-btn class="hidden-md-and-down">Clickg</v-btn> -->
    <!-- <v-btn class="hidden-md-and-up">Click</v-btn> -->
    <v-btn class="hidden-sm-only">Click</v-btn>

    <h3 class="display-3">
      ToolBars
    </h3>

  </div>
</template>

<script>
export default {
  name: "HomeView", // Updated component name
  // Your component options go here
};
</script>

<style>
/* Your component styles go here */
</style>

<!--
   text and colors  : 

-->
