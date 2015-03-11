Template.caseItem.events({
    'swipeable-card-swipe-away swipeable-card': function(e){
        //alert('wooho');
        e.target.parentNode.removeChild(e.target);
    }
});