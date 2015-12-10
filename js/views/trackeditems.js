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
    el: $('.tracked'),

    // DOM events
    // events: {

    //     // // Click the add-content-button to add a new Content
    //     // // to the article
    //     // 'click .add-content-button': 'crtContent'

    // },

    trackedCalories: 0,

    initialize: function() {

        // Saving jquery requests for later
        this.$trackedItems = this.$('.tracked-items');
        this.$trackedCalories = this.$('.tracked-calories');

        // Listening to Backbone events
        this.listenTo(this.collection, 'add', this.addTrackedItemView);
        this.listenTo(this.collection, 'add destroy', this.updateTrackedCalories);
        this.listenTo(this.collection, 'all', this.render);

    },

    addTrackedItemView: function(item) {

        console.log(item);
        // Add one result to the view
        var trackedItemView = new app.TrackedItemView({model: item})
        this.$trackedItems.append(trackedItemView.render().el);

    },

    updateTrackedCalories: function() {

        this.trackedCalories = 0;

        _(this.collection.models).each(function(model) {

            this.trackedCalories = this.trackedCalories + model.attributes.fields.nf_calories;

        }, this);

        var tempHTML = '<h4>Total calories ' + (this.trackedCalories).toFixed(2) + '</h4>';
        this.$trackedCalories.html(tempHTML);

    }

});