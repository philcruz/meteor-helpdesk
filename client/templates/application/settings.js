Template.settings.events({
    'click #back-button': function (){
        Router.go('casesList');
    },
    
    'click #sign-out-button': function () {
        Meteor.logout();
        Router.go('signin');
    }
});
    
   