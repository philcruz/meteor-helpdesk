Template.caseItem.events({
    'swipeable-card-swipe-away swipeable-card': function(e){
        //alert('wooho');
        e.target.parentNode.removeChild(e.target);
        var id = $(e.target).find('[name=id]').val();
        console.log(id);
        Cases.remove(id);
    },
    
    'click swipeable-card': function(e){
        //alert('clicked swipeable-card');
        var id = $(e.target).find('[name=id]').val();
        console.log(id);
        Router.go('viewcase', {_id:id});
    }
});


Template.caseItem.helpers({
    dateCreatedFromNow: function() { 
        if (this.dateCreated)
            return moment(this.dateCreated).fromNow();
        else
            return "a while ago";
    }
});