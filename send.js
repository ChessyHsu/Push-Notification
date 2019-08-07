var admin = require("firebase-admin");
var serviceAccount = require("./push-415cd-firebase-adminsdk-1jfo5-6e421696e1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://push-415cd.firebaseio.com"
});
// This registration token comes from the client FCM SDKs.
var registrationToken = 'cVUAvaBESsU:APA91bG3_ePmn2EePz4OLYl_jFRWQSRnV4_VCSIr0WOai__CHNj3aZT9XHsqIKLmLvggWUaxel8L19XNvBznjUDNGrzGh_Q8FyYhrxP0edqcMuw_eDwJ6Ttwr4hwpIAlggE72e5LDHBF';
// var registrationToken= 'dS4sWzT_BD8:APA91bHvT92yEU8bB9CpiniSL5VcRfQQJSqAzrNvqsJVnDUPOzaktfKqy9JbrVjoND1oLx09-TKmMiVkCZ7cxv4GZiNcbFKs1pwgNFGjgALMsvccye-XXdT8W52NMpCngxuc0hGDB7e7'
// These registration tokens come from the client FCM SDKs.
var registrationTokens = [
  'cVUAvaBESsU:APA91bG3_ePmn2EePz4OLYl_jFRWQSRnV4_VCSIr0WOai__CHNj3aZT9XHsqIKLmLvggWUaxel8L19XNvBznjUDNGrzGh_Q8FyYhrxP0edqcMuw_eDwJ6Ttwr4hwpIAlggE72e5LDHBF',
  'dS4sWzT_BD8:APA91bHvT92yEU8bB9CpiniSL5VcRfQQJSqAzrNvqsJVnDUPOzaktfKqy9JbrVjoND1oLx09-TKmMiVkCZ7cxv4GZiNcbFKs1pwgNFGjgALMsvccye-XXdT8W52NMpCngxuc0hGDB7e7'
];

// // simple example
// admin.messaging().sendToDevice(tokens, payload)
// .then(resp => {//發送成功
// }).catch(err => {/*處理錯誤*/});

var topic = 'reviewers';
// Subscribe the devices corresponding to the registration tokens to 
// the topic.
// admin.messaging().subscribeToTopic(registrationTokens, topic)
//   .then(function(response) {
//     // See the MessagingTopicManagementResponse reference documentation
//     // for the contents of response.
//     console.log('Successfully subscribed to topic:', response);
//   })
//   .catch(function(error) {
//     console.log('Error subscribing to topic:', error);
//   });

// // Unsubscribe the devices corresponding to the registration tokens from
// // the topic.
// admin.messaging().unsubscribeFromTopic(registrationTokens, topic)
//   .then(function(response) {
//     // See the MessagingTopicManagementResponse reference documentation
//     // for the contents of response.
//     console.log('Successfully unsubscribed from topic:', response);
//   })
//   .catch(function(error) {
//     console.log('Error unsubscribing from topic:', error);
//   });

var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  topic: topic
};
var payload={
  data: {
    score: '850',
    time: '2:45'
  }
}
// Send a message to the device corresponding to the provided
// registration token.
// admin.messaging().send(message)
//   .then((response) => {
//     // Response is a message ID string.
//     console.log('Successfully sent message:', response);
//   })
//   .catch((error) => {
//     console.log('Error sending message:', error);
//   });
function send(tokens, msg){
  admin.messaging().sendToDevice(tokens, msg)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}
send(registrationTokens, payload)