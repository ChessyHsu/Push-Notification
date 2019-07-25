// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBw5Pm5B9I9KugX0011E1RVPyicNb2b1PM",
    authDomain: "push-415cd.firebaseapp.com",
   	databaseURL: "https://push-415cd.firebaseio.com",
    projectId: "push-415cd",
    storageBucket: "",
    messagingSenderId: "960247599964",
    appId: "1:960247599964:web:99c377b710c49dc1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// messaging.usePublicVapidKey('BGxzgTpDKQrERyodvuQkSRE2ygR_60SO_iqg-TL6sR2Cx6HMsMDnYp0XlY-f0wuyUytktfLEI-OOira_tDC6z4I');
const messaging=firebase.messaging()
// messaging.useServiceWorker('../firebase-messaging-sw.js');
messaging.requestPermission()
.then(function(){
	console.log('Have permission');
	return messaging.getToken();
})
.then(function(token){
	console.log(token);
})
.catch(function(err){
	console.log('Error occured');
})
console.log(Notification.permission);
console.log(Notification.permission);

messaging.onMessage(function(payload){
	const title='有訊息喔٩(^ᴗ^)۶';
	const options={
	    body: payload.data.status,
	    icon: 'firebase-logo.png',
    	click_action: "http://localhost:1234"
  	};
	var notification = new Notification(title,options);
    notification.onclick = function(event) {
    	event.preventDefault(); // prevent the browser from focusing the Notification's tab
    	window.open(payload.notification.click_action , '_blank');
    	notification.close();
    }
    // if(Notification.permission==='denied'){
    // 	console.log("!!!!!!!!!!")
    // 	document.body.append("<div>hi</div>");
    // }
});
/*
function show_alert(type='info', $message) {
  var notification = $('hi');

  $('.notifications-area').append(notification);

  // setTimeout(function(){
  //   notification.addClass('closed');
  // }, 4000);

  setTimeout(function(){
    notification.remove();
  }, 8000);
}
*/