Template.simpleLayout.events({
  'click #back-button': function () {
    Router.go('casesList');
  },

  'click #menu-item-signup': function () {
    Router.go('signup');
  }
});