function loginCallBack(error){
    if( ! error ){
        Router.go('casesList');
    } else {
        //$('#signinToast').show(); //doesn't work, because of shadow DOM?
        document.querySelector('#signinToast').show();
    }
}

Template.signin.events({
    'submit #signin': function(event,template){
        var email = template.find('#email').value;
        var password = template.find('#password').value;
        event.preventDefault();
        Meteor.loginWithPassword(email, password, loginCallBack);        
    }
});