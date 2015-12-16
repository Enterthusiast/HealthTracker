"use strict";

var app = app || {};

// Backbone view for the TrackedItems collection
app.TrackedItemsView = Backbone.View.extend({

    // DOM element
    el: $('.tracked'),

    // Total calories tracked
    trackedCalories: 0,

    initialize: function() {

        // Saving jquery requests for later
        this.$trackedItems = this.$('.tracked-items');
        this.$trackedCalories = this.$('.tracked-calories');

        // Listening to Backbone events
        this.listenTo(this.collection, 'add', this.addTrackedItemView);
        this.listenTo(this.collection, 'add destroy', this.updateTrackedCalories);
        this.listenTo(this.collection, 'all', this.render);

        this.collection.fetch();

    },

    addTrackedItemView: function(item) {

        // Add one result to the view
        var trackedItemView = new app.TrackedItemView({model: item})
        this.$trackedItems.append(trackedItemView.render().el);

    },

    updateTrackedCalories: function() {

        this.trackedCalories = 0;

        // Calculate the total number of calories in the collection
        _(this.collection.models).each(function(model) {

            this.trackedCalories = this.trackedCalories + model.attributes.fields.nf_calories;

        }, this);

        // Update the HTML to show the new total calories
        var tempHTML = '<h4>Total ' + (this.trackedCalories).toFixed(2) + '</h4>';
        this.$trackedCalories.html(tempHTML);

    }

});