"use strict";

var app = app || {};

// TODO: build get functions on the model instead of getting the data directly

app.TrackedItemView = Backbone.View.extend({

    tagName: 'tr',

    // DOM events
    events: {

        'click .tracked-item': 'untrackItem',

    },

    initialize: function() {

        // Listening to Backbone events
        this.listenTo(this.model, 'destroy', this.remove);

    },


    render: function() {

        var tempHTML = '<td class="tracked-item">' + this.model.attributes.fields.item_name +  '</td><td>' + this.model.attributes.fields.nf_calories + ' calories</td>';
        this.$el.html(tempHTML);

        // Good practice for chaining
        return this;

    },

    untrackItem: function() {

        this.model.destroy();

    }

});