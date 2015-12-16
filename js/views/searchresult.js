"use strict";

var app = app || {};

// Backbone view for a SearchResult model
app.SearchResultView = Backbone.View.extend({

    // DOM element
    tagName: 'tr',

    events: {

        // Add a Jquery event to add a Result to the Tracked items
        'click': 'addTracked'

    },

    attributes: {

        'result_id': '',

    },

    initialize: function() {

        this.$el.attr('result_id', this.model.id);
        // Listening to Backbone events
        this.listenTo(this.model, 'destroy', this.remove);

    },

    render: function() {

        // Build the result entry HTML
        var tempHTML = '<td test="' + this.attributes.result_id + '">' + this.model.attributes.fields.item_name +  '</td><td>' + this.model.attributes.fields.nf_calories + ' calories</td>';
        this.$el.html(tempHTML);

        // Good practice for chaining
        return this;

    },

    addTracked: function(result) {

        // Add a TrackedItem with the SearchResult attributes to the TrackedItems collection
        app.TrackedItems.add(app.SearchResults.get(result.toElement.parentElement.getAttribute('result_id')));

    }

});