Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'casesList'} );
Router.route('/about', {name: 'about'} );