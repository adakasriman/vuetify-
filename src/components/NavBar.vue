<script >
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "mdi-view-dashboard",
          text: "Dashboard",
          route: "/",
        },
        {
          icon: "mdi-folder",
          text: "Project",
          route: "/projects",
        },
        {
          icon: "mdi-account",
          text: "Team",
          route: "/team",
        },
      ],
    };
  },
  components: {},
};
</script>

<template>
  <nav>
    <v-toolbar text>
      <!-- <v-toolbar-side-icon> </v-toolbar-side-icon> -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase gary--text">
        <span class="font-weight-light">Test</span><span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="primary" v-bind="attrs" v-on="on">Menu</v-btn>
        </template>
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :value="link.text"
              :to="link.route"
              router
            >
              <v-list-item-content>{{ link.text }}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-btn text color="gray">
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <!-- <v-layout>
        <v-flex class="mt-4">
          <v-avatar size="50" class="grey">
            <v-img :src="member.avator"></v-img>
          </v-avatar>
        </v-flex>
      </v-layout> -->

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.route"
          router
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ link.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<style  scoped>
</style>
