Template.signin.events({
    'submit #signin': function(event,template){
        var emailVar = template.find('#email').value;
        var passwordVar = template.find('#password').value;
        console.log("email: " + emailVar);
        console.log("Form submitted.");
        event.preventDefault();
        Meteor.loginWithPassword(emailVar, passwordVar);
        Router.go('casesList');
    }
});