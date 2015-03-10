Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'casesList'} );
Router.route('/about', {name: 'about', layoutTemplate: 'simpleLayout'} );
Router.route('/signup', {name: 'signup', layoutTemplate: 'signupLayout'} );
Router.route('/signin', {name: 'signin', layoutTemplate: 'signupLayout'} );
Router.route('/settings', {name: 'settings', layoutTemplate: ''} );