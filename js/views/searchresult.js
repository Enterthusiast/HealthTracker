"use strict";

var app = app || {};

// TODO: build get functions on the model instead of getting the data directly

// Backbone view for an article model
app.SearchResultView = Backbone.View.extend({

    // DOM element
    tagName: 'tr',

    events: {

        'click .search-result': 'addTracked'

    },

    initialize: function() {

        // Listening to Backbone events
        this.listenTo(this.model, 'destroy', this.remove);

    },

    render: function() {

        var tempHTML = '<td class="search-result" result_id="' + this.model.id + '">' + this.model.attributes.fields.item_name +  '</td><td>' + this.model.attributes.fields.nf_calories + ' calories</td>';
        this.$el.html(tempHTML);

        // Good practice for chaining
        return this;

    },

    addTracked: function(result) {

        console.log(result);
        app.TrackedItems.add(app.SearchResults.get(result.toElement.getAttribute('result_id')));
        console.log(app.TrackedItems);

    }

});