import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDgYxb0npJfPWPOjzR0bifXS37iKwpGHas',
    authDomain: 'playback-e2045.firebaseapp.com',
    projectId: 'playback-e2045',
    storageBucket: 'playback-e2045.appspot.com',
    messagingSenderId: '640985667930',
    appId: '1:640985667930:web:324241f1424fc0588abb63',
    measurementId: 'G-49ZKGXCRV0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
