import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './components/router'

import OktaAuth from '@okta/okta-auth-js';
import OktaVue from '@okta/okta-vue';

const oktaAuth = new OktaAuth({
    issuer: 'https://fclam-admin.oktapreview.com/oauth2/default',
    clientId: '0oa1ydtko42BcK0GC0h8',
    redirectUri: window.location.origin + '/my-test-app-main/login/callback',
    scopes: ['openid', 'profile', 'email'],
    
});

const app = createApp({
    render: () => h(App)
});

app.use(router);
app.use(OktaVue, { oktaAuth });
app.mount('#app');

//createApp(App).use(router).mount('#app')
