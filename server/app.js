
Meteor.startup(function () {
    console.log("app.js:startup...");
    process.env.MAIL_URL = Meteor.settings.mailUrl;
});

sendEmail = function (subject, text) {
  Email.send({
    from: Meteor.settings.fromEmail,
    to: "phil@philcruz.com",    
    subject: subject,
    text: text
  });
};