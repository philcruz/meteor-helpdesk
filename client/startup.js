Router.configure({
  autoRender: false,
  autoStart: false
});

$(window).on('polymer-ready', function () {
  return Session.set('polymer-ready', true);
});

Meteor.startup(function () {
  $('body').append("<div fit layout vertical iron-router></div>");
  Tracker.autorun(function () {
    if (Session.get('polymer-ready')) {
      Router.insert({
        el: "[iron-router]"
      });
      return Router.start();
    }
  });
});