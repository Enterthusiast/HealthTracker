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

        // Listen to Backboen events
        this.listenTo(app.SearchResults, 'add', this.addResultView);
        this.listenTo(app.SearchResults, 'fetch', this.wipeResultView);
        this.listenTo(app.SearchResults, 'add fetch', this.render);

    },

    startSearch: function() {

        this.collection.fetchSearch(this.$searchText.val().trim());

    },

    addResultView: function(result) {

        // Add one result to the view
        var searchResultView = new app.SearchResultView({model: result})
        this.$searchResults.append(searchResultView.render().el);

    },

    wipeResultView: function() {

        this.$searchResults.html('');

    }

});