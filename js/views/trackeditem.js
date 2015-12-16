"use strict";

var app = app || {};

// Backbone view for a TrackedItem model
app.TrackedItemView = Backbone.View.extend({

    tagName: 'tr',

    // DOM events
    events: {

        // Add a Jquery event to untracked an item
        'click': 'untrackItem',

    },

    initialize: function() {

        // Listening to Backbone events
        this.listenTo(this.model, 'destroy', this.remove);

    },


    render: function() {

        // Build the item entry HTML
        var tempHTML = '<td>' + this.model.attributes.fields.item_name +  '</td><td>' + this.model.attributes.fields.nf_calories + ' calories</td>';
        this.$el.html(tempHTML);

        // Good practice for chaining
        return this;

    },

    untrackItem: function() {

        // Destroy the model, remove it from the collection and the view
        this.model.destroy();

    }

});