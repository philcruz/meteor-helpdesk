Template.settings.events({
    'click #back-button': function (){
        Router.go('casesList');
    },
    
    'click #sign-out-button': function () {
        Meteor.logout();
        Router.go('signin');
    }
});

Template.settings.helpers({
    currentUserEmail: function (){
        var user = Meteor.user();
        if (user && user.emails)
            return user.emails[0].address;
    }
});    
    
   