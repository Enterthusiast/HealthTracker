"use strict";

var app = app || {};

// TODO: Check that every field of the form has content
// before executing the create command
// TODO: Clean the forms after adding the content
// TODO: Wait for success before adding the content
// to the page shown to the user
// TODO: Handle error with a message and no content update on page

// Backbone view for the contents collection
app.TrackedItemsView = Backbone.View.extend({

    // // DOM element
    // el: $('.contents-view'),

    // DOM events
    events: {

        // // Click the add-content-button to add a new Content
        // // to the article
        // 'click .add-content-button': 'crtContent'

    },

    initialize: function() {

        // // Saving jquery requests for later
        // this.$contentsList = this.$('.contents-list');

        // // Listening to Backbone events
        // this.listenTo(this.collection, 'add', this.addContentsView);

    }

});