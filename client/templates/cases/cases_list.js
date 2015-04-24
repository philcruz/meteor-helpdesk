

Template.casesList.helpers({
    
    cases: function (){
        var controller = Iron.controller();
        var assignedTo = controller.getParams().query.assignedTo;
        if (assignedTo)
            return Cases.find({assignedTo:assignedTo});
        else
            return Cases.find();
    }
    
});

Template.layout.events({
    'click #new-case-button': function(){
        console.log('new button clicked!');
        Router.go('newcase');
    }
});