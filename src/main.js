import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt, faEnvelope, faHome, faInfo, fas, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, faGithub, faTwitter, faDiscord, faInfo, faSignInAlt, faEnvelope, faHome, faYoutube, faAt)

var app = createApp(App)
app.component('fa', FontAwesomeIcon).component("fa-layer", FontAwesomeLayers).component("fa-layer-text", FontAwesomeLayersText).use(router).mount('#app')