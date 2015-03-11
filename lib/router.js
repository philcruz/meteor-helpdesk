Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'casesList'} );
Router.route('/about', {name: 'about', layoutTemplate: 'simpleLayout'} );
Router.route('/signup', {name: 'signup', layoutTemplate: 'signupLayout'} );
Router.route('/signin', {name: 'signin', layoutTemplate: 'signupLayout'} );
Router.route('/settings', {name: 'settings', layoutTemplate: ''} );
Router.route('/newcase', {name: 'newcase', layoutTemplate: ''} );

Router.onBeforeAction(function (){
        if (!Meteor.userId()) {            
            this.render('signin');
        } else {
            this.next();
        }
    }, {
    except: ['signin']
});