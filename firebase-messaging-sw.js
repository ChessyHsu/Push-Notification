importScripts("https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/6.3.0/firebase-messaging.js")
var firebaseConfig = {
    apiKey: "AIzaSyBw5Pm5B9I9KugX0011E1RVPyicNb2b1PM",
   	authDomain: "push-415cd.firebaseapp.com",
   	databaseURL: "https://push-415cd.firebaseio.com",
   	projectId: "push-415cd",
   	storageBucket: "",
   	messagingSenderId: "960247599964",
   	appId: "1:960247599964:web:99c377b710c49dc1"
};
firebase.initializeApp(firebaseConfig);

const messaging=firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
  const title='點開我好嗎(◔ д◔)';
	const options={
    body: payload.data.status,
    icon: 'firebase-logo.png',
    click_action: "http://localhost:1234"
  };
	return self.registration.showNotification(title, options);
});
