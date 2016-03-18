Template.signup.events({
    'submit #signup': function(event,template){
        var email = template.find('#email').value;
        var password = template.find('#password').value;
        var name = template.find('#name').value;
        event.preventDefault();
        var newUser = Accounts.createUser({
                email: email,
                password: password,
                profile: name
            },
            function (error){
                if (error) 
                    document.querySelector('#signupToast').show();
                else
                    Router.go('casesList');
            }                                          
        );        
    }
});