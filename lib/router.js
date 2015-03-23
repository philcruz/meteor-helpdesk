//Router.configure({
    //layoutTemplate: 'layout'
//});

Router.route('/', {name: 'casesList', layoutTemplate: 'layout'} );
Router.route('/about',  {name: 'about', layoutTemplate: 'simpleLayout', data:{title:'About'} } );
Router.route('/settings', {name: 'settings', layoutTemplate: 'simpleLayout', data:{title:'Settings'} } );
Router.route('/signup', {name: 'signup', layoutTemplate: 'accountLayout', data:{title:'Sign Up'}} );
Router.route('/signin', {name: 'signin', layoutTemplate: 'accountLayout', data:{title:'Sign In'}} );
Router.route('/newcase', {name: 'newcase', layoutTemplate: ''} );
Router.route('/viewcase/:_id', {name: 'viewcase', data: function(){ return Cases.findOne(this.params._id); } });

Router.onBeforeAction(function (){
        if (!Meteor.userId()  && ! Meteor.loggingIn()) {
            Router.go('signin');
        } else {
            this.next();
        }
    }, {
    except: ['signin', 'signup']
});