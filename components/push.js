// Push.create(':))))')
// console.log(Push.Permission.has())
let Push = require('push.js');
let PushFCM = require('push-fcm-plugin');
Push.extend(PushFCM);

var config = {
    apiKey: "AIzaSyBw5Pm5B9I9KugX0011E1RVPyicNb2b1PM",
    authDomain: "push-415cd.firebaseapp.com",
   	databaseURL: "https://push-415cd.firebaseio.com",
    projectId: "push-415cd",
    storageBucket: "",
    messagingSenderId: "960247599964",
    appId: "1:960247599964:web:99c377b710c49dc1"
};
Push.config({
    FCM: config
});

// Push.FCM();

Push.FCM().then(function(FCM) {
    FCM.getToken().then(function(token) {
        console.log("Initialized with token " + token);
    }).catch(function(tokenError) {
       throw tokenError; 
    });
}).catch(function(initError) {
   throw initError; 
});