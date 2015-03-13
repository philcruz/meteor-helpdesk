function newCaseFromForm(form){
    var title = $(form).find('[name=title]').val();
    var question = $(form).find('[name=question]').val();
    var fromName = "John Doe";
    var fromEmail = "john.doe@gmail.com";
    return {title: title, question: question, fromName: fromName, fromEmail: fromEmail};
}

Template.newcase.events({
    'click #cancel-button': function(){
        Router.go('casesList');
    },
    
    'click #save-button': function(event){
        console.log('clicked done...');
        console.log(event);
        var form = $.find('#newform');
        //console.log(form);
        var newCase = newCaseFromForm(form);
        newCase._id = Cases.insert(newCase);    
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