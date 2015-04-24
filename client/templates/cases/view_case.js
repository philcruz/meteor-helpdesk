Template.viewcase.events({
    'click #cancel-button': function(){
        Router.go('casesList');
    },
    
    'click #save-button': function(event){
        console.log('clicked to save case...');
        console.log(event);
        var form = $.find('#caseform');
        //console.log(form);
        //var newCase = newCaseFromForm(form);
        //newCase._id = Cases.insert(newCase);    
        //Router.go('casesList');
        
        
        var caseID = this._id;
        var caseProperties = {            
            title: $(form).find('[name=title]').val(),
            question: $(form).find('[name=question]').val(),
            answer: $(form).find('[name=answer]').val(),
            assignedTo: document.querySelector('#assignedTo').selectedItemLabel
        };
        
        Cases.update( caseID, {$set: caseProperties}, function (error){} );
        Router.go('casesList');
    },
    
    'submit form': function(e){
        e.preventDefault();
        console.log('form submitted...');
        var title = $(e.target).find('[name=title]').val();
        var question = $(e.target).find('[name=question]').val();
        console.log(title);
        console.log(question);
    }
});