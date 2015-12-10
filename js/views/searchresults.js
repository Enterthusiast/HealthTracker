"use strict";

var app = app || {};

// Backbone view for the articles collection
app.SearchResultsView = Backbone.View.extend({

    // DOM element
    el: $('.search'),

    events: {

        'click .search-button': 'startSearch'

    },

    initialize: function() {

        // Store Jquery request
        this.$searchResults = this.$('.search-results');
        this.$searchText = this.$('.search-text');

        // Listen to Backbone events
        // this.listenTo(this.collection, 'add', this.addResultView);
        this.listenTo(this.collection, 'reset', this.wipeResultView);
        this.listenTo(this.collection, 'sort', this.addResultsView);
        this.listenTo(this.collection, 'all', this.render);

    },

    startSearch: function() {

        this.collection.fetchSearch(this.$searchText.val().trim());

    },

    addResultView: function(result, index) {

        // Add one result to the view
        var searchResultView = new app.SearchResultView({model: result})
        this.$searchResults.append(searchResultView.render().el);

        if(index === this.collection.length - 1) {

            this.$searchResults.prepend('<tr><td><h4>Search results</h4></td><td></td></tr>');

        }

    },

    addResultsView: function() {

        _.each(this.collection.models, function(data, index) {

            this.addResultView(data, index)

        }, this);

    },


    wipeResultView: function() {

        this.$searchResults.html('');

    }

});