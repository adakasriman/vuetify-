import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    // We can create our own colors using theme
    theme: {
        primary: "#ff8080",
        sucess: "",
        info: "",
        error: ""
    }
});
