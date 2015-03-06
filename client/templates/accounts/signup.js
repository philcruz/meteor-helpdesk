Template.signup.events({
    'submit #signup': function(event,template){
        var emailVar = template.find('#email').value;
        var passwordVar = template.find('#password').value;
        console.log("email: " + emailVar);
        console.log("Form submitted.");
        event.preventDefault();
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
});