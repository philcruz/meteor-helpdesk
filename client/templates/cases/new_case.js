function newCaseFromForm(form){
    var fromEmail = $(form).find('[name=fromEmail]').val();
    var title = $(form).find('[name=title]').val();
    var question = $(form).find('[name=question]').val();
    var fromName = "";
    var assignedTo = document.querySelector('#assignedTo').selectedItemLabel;
    var dateCreated = new Date();
    return {title: title, question: question, fromName: fromName, fromEmail: fromEmail, assignedTo: assignedTo, dateCreated: dateCreated};
}

Template.newcase.events({
    'click #cancel-button': function(){
        var selectedItem = document.querySelector('#assignedTo').selectedItemLabel;        
        //console.log(selectedItem);
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