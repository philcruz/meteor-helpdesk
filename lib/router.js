Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'casesList'} );
Router.route('/about', {name: 'about', layoutTemplate: 'simpleLayout'} );
Router.route('/signup', {name: 'signup', layoutTemplate: 'signupLayout'} );