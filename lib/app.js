if (Meteor.isClient){
     Meteor.startup(function () {
        console.log("Starting client...");
    });
}

Meteor.methods({
  'sendEmail': function (subject, text) {
    if (Meteor.isServer)
      sendEmail(subject, text);
  }
});