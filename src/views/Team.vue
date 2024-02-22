<template>
  <div class="team">
    <h1>This is an Team page</h1>
    <v-container class="my-5">
      <!-- <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outlined block class="">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block class="">2</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-5">
        <v-flex xs4 md3>
          <v-btn outlined block class="sucess">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outlined block class="sucess">2</v-btn>
        </v-flex>
      </v-layout> -->
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project name</span>
            </v-btn>
          </template>
          <span>sort project names by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text color="grey" @click="sortBy('start_data')" v-on="on">
              <v-icon left small>mdi-calendar</v-icon>
              <span class="caption text-lowercase">By Date</span>
            </v-btn>
           
          </template>
          <span>sort Date</span>
        </v-tooltip>
      </v-layout>
      <v-card text class="" v-for="lang in languages" :key="lang.title">
        <v-layout wrap class="pa-3">
          <v-flex xs12 md6>
            <div class="caption gray--text">Title</div>
            <div>{{ lang.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption gray--text">Start Date</div>
            <div>{{ lang.start_data }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption gray--text">End Date</div>
            <div>{{ lang.end_data }}</div>
          </v-flex>
          <!-- <v-flex xs2 sm4 md2>
            <div class="caption gray--text">Status</div>
            <div>{{ lang.status }}</div>
          </v-flex> -->
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${lang.status} caption`">{{
                lang.status
              }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.pending {
  background: yellow !important;
  color: black;
}
.Done {
  background: green !important;
  color: white;
}
</style>
  <script>
export default {
  name: "TeamView", // Updated component name
  // Your component options go here
  data() {
    return {
      languages: [
        {
          title: "Nodejs",
          desc: "Backend",
          start_data: "12-12-23",
          end_data: "12-12-23",
          status: "pending",
        },
        {
          title: "JS",
          desc: "language",
          start_data: "12-12-23",
          end_data: "12-12-23",
          status: "Done",
        },
        {
          title: "React js",
          desc: "frontend Library",
          start_data: "12-12-23",
          end_data: "12-12-23",
          status: "Done",
        },
        {
          title: "vue js",
          desc: "frontend Library",
          start_data: "12-12-23",
          end_data: "12-12-23",
          status: "Done",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.languages.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>
  