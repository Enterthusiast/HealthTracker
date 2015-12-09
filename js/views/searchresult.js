"use strict";

var app = app || {};

// TODO: build get functions on the model instead of getting the data directly

// Backbone view for an article model
app.SearchResultView = Backbone.View.extend({

    // DOM element
    tagName: 'li',

    initialize: function() {

        // Listening to Backbone events
        this.listenTo(this.model, 'destroy', this.remove);

    },

    render: function() {

        this.$el.html(this.model.attributes.fields.item_name);

        // Good practice for chaining
        return this;

    }

});