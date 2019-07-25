const Push = require('pushjs');
const PushFCM = require('pushjs-fcm');

Push.extend(PushFCM);
Push.FCM();

Push.FCM().then(function(FCM) {
    FCM.getToken().then(function(token) {
        console.log("Initialized with token " + token);
    }).catch(function(tokenError) {
       throw tokenError; 
    });
}).catch(function(initError) {
   throw initError; 
});
