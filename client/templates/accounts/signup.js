Template.signup.events({
    'submit #signup': function(event,template){
        var emailVar = template.find('#email').value;
        var passwordVar = template.find('#password').value;
        console.log("email: " + emailVar);
        console.log("Form submitted.");
        event.preventDefault();
        var newUser = Accounts.createUser({
            email: emailVar,
            password: passwordVar
            },
            function (error){
                if (error) 
                    console.log(error);
                else
                    console.log('no problem...');
            }                                          
        );
        console.log(newUser);
    }
});