

Template.casesList.helpers({
    cases: function (){return Cases.find();}
});

Template.layout.events({
    'click #new-case-button': function(){
        console.log('new button clicked!');
        Router.go('newcase');
    }
});