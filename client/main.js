Meteor.subscribe('cases');

getCurrentUserEmail = function (){
    var user = Meteor.user();
    if (user && user.emails)
        return user.emails[0].address;
}

Template.registerHelper('currentUserEmail', getCurrentUserEmail);