//Router.configure({
    //layoutTemplate: 'layout'
//});

Router.route('/', {name: 'casesList', layoutTemplate: 'layout'} );
Router.route('/about', {name: 'about', layoutTemplate: 'simpleLayout'} );
Router.route('/signup', {name: 'signup', layoutTemplate: 'accountLayout', data:{title:'Sign Up'}} );
Router.route('/signin', {name: 'signin', layoutTemplate: 'accountLayout', data:{title:'Sign In'}} );
Router.route('/settings', {name: 'settings', layoutTemplate: ''} );
Router.route('/newcase', {name: 'newcase', layoutTemplate: ''} );

Router.onBeforeAction(function (){
        if (!Meteor.userId()  && ! Meteor.loggingIn()) {
            Router.go('signin');
        } else {
            this.next();
        }
    }, {
    except: ['signin', 'signup']
});