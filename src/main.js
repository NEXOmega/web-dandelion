import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt, faEnvelope, faFileArchive, faHome, faInfo, faLink, fas, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faJava, faTwitter, faWindows, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, faGithub, faTwitter, faDiscord, faInfo, faSignInAlt, faEnvelope, faHome, faYoutube, faAt, faJava, faWindows, faLink, faFileArchive)

var app = createApp(App)
app.use(VueAxios, axios)
app.component('fa', FontAwesomeIcon).component("fa-layer", FontAwesomeLayers).component("fa-layer-text", FontAwesomeLayersText).use(router).mount('#app')