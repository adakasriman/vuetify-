<template>
  <div class="project">
    <h1 class="subheading gary--text">This is an Projects page</h1>
    <v-container class="my-5">
      <!-- 
    <v-container fluid class="my-5">

       -->
      <v-layout row wrap>
        <v-flex xs12 sm5 md4 lg3 v-for="member in team" :key="member.member">
          <v-card text class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="50" class="grey">
                <v-img :src="member.avator"></v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ member.name }}
              </div>
              <div class="subheading">
                {{ member.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon left small>mdi-message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-expansion-panels dark variant="accordion" class="mt-4">
        <v-expansion-panel v-for="i in 3" :key="i">
          <v-expansion-panel-header>
            <div class="headline">Item</div>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <div class="text-center">
      <v-btn color="primary" @click="dialog = !dialog">
        Open Dialog

        <v-dialog v-model="dialog" activator="parent" width="600">
          <v-card>
            <v-card-text>
              <v-form class="pt-5" ref="form">
                <v-text-field
                  label="User Name"
                  v-model="form.user_name"
                  :rules="inputRules"
                ></v-text-field>
                <v-textarea
                  label="Information"
                  :rules="inputRules"
                  v-model="form.content"
                >
                </v-textarea>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="selectedDate"
                      label="Select a date"
                      readonly
                      v-on="on"
                      v-bind="attrs"
                      :rules="inputRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="selectedDate"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-layout row wrap class="pa-3">
                <v-flex xs12 md6>
                  <v-btn color="primary" block @click="dialog = false"
                    >Close</v-btn
                  >
                </v-flex>
                <v-flex xs12 md6>
                  <v-btn color="success" block @click="submitHandulr"
                    >Save</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectsView", // Updated component name
  // Your component options go here
  data() {
    return {
      team: [
        {
          name: "phani",
          role: "frontend developer",
          avator:
            "https://imgs.search.brave.com/cIbwKjDMj9q3jhtd1OukCYhlZGdRRlYdxiBdjTbzKsw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw",
        },
        {
          name: "mahesh",
          role: "frontend developer",
          avator:
            "https://imgs.search.brave.com/cIbwKjDMj9q3jhtd1OukCYhlZGdRRlYdxiBdjTbzKsw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw",
        },
        {
          name: "sriman",
          role: "frontend developer",
          avator:
            "https://imgs.search.brave.com/cIbwKjDMj9q3jhtd1OukCYhlZGdRRlYdxiBdjTbzKsw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw",
        },
        {
          name: "shiva",
          role: "frontend developer",
          avator:
            "https://imgs.search.brave.com/cIbwKjDMj9q3jhtd1OukCYhlZGdRRlYdxiBdjTbzKsw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXIyLnBuZw",
        },
      ],
      dialog: false,
      form: {
        user_name: "",
        content: "",
        due_date: null,
      },
      inputRules: [
        (v) => !!v || "Field is required",
        (v) => (v && v.length >= 3) || "Minimum length is 3 characters",
      ],
      menu: false,
      selectedDate: null,
    };
  },
  methods: {
    submitHandulr() {
      if (this.$refs.form.validate()) {
        console.log(this.form);
      } else {
        console.log("fill th form");
      }
    },
  },
};
</script>
