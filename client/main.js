Meteor.subscribe('cases');

getCurrentUserEmail = function (){
    var user = Meteor.user();
    if (user && user.emails)
        return user.emails[0].address;
};

getUsersName = function () {
    var user = Meteor.user();
    if (user && user.profile)
        return user.profile; 
}; 

Template.registerHelper('currentUserEmail', getCurrentUserEmail);
Template.registerHelper('usersProfileName', getUsersName); 