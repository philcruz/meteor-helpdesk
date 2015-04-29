function caseFromForm(form){
    var title = $(form).find('[name=title]').val();
    var question = $(form).find('[name=question]').val();
    var answer = $(form).find('[name=answer]').val();    
    var assignedTo = document.querySelector('#assignedTo').selectedItemLabel;
    return {title: title, question: question, answer: answer, assignedTo: assignedTo};
}


Template.viewcase.events({
    'click #cancel-button': function(){
        Router.go('casesList');
    },
    
    'click #save-button': function(event){
        console.log('clicked to save case...');        
        
        var form = $.find('#caseform');
        var caseID = this._id;        
        var thisCase = caseFromForm(form);
        //var thisCase = {            
        //    title: $(form).find('[name=title]').val(),
        //    question: $(form).find('[name=question]').val(),
        //    answer: $(form).find('[name=answer]').val(),
        //    assignedTo: document.querySelector('#assignedTo').selectedItemLabel
        //};
        Cases.update( caseID, {$set: thisCase}, function (error){} );        
        Router.go('casesList');
    },
    
    'click #send-button': function(event){   
        console.log("clicked send button...");
        
        //update the case
        var form = $.find('#caseform');
        var caseID = this._id;        
        var thisCase = caseFromForm(form);
        Cases.update( caseID, {$set: thisCase}, function (error){} );  
        
        //send the email
        var questionLines = thisCase.question.split("\n");        
        var emailBody = thisCase.answer + "\n";
        for(var i = 0;i < questionLines.length;i++){
            emailBody = emailBody + ">" + questionLines[i] + "\n";
        }
        Meteor.call('sendEmail', "RE:"+ thisCase.title , emailBody );        
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