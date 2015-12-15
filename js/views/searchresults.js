"use strict";

var app = app || {};

// Backbone view for the SearchResults collection
app.SearchResultsView = Backbone.View.extend({

    // DOM element
    el: $('.search'),

    events: {

        // Add Jquery events that launch a search on Click and Enter
        'click .search-button': 'startSearch',
        'keypress #search-text': 'startSearchIfEnter'

    },

    initialize: function() {

        // Store query requests
        this.$searchResults = this.$('.search-results');
        this.$searchText = this.$('#search-text');

        // Listen to Backbone events
        this.listenTo(this.collection, 'reset', this.wipeResultView);
        this.listenTo(this.collection, 'sort', this.addResultsView);
        this.listenTo(this.collection, 'all', this.render);

    },

    startSearch: function() {

        // Fetch data
        this.collection.fetchSearch(this.$searchText.val().trim());

    },

    startSearchIfEnter: function(event) {

        // Start a new search if Enter has been hit
        // while the input is in focus
        if (event.which == 13) {

            // unfocus the input
            event.target.blur();
            // Start a search
            this.startSearch();

        }

    },

    addResultView: function(result, index) {

        // Add one result to the view
        var searchResultView = new app.SearchResultView({model: result});
        this.$searchResults.append(searchResultView.render().el);

        // Add the header when every results have been added
        if(index === this.collection.length - 1) {

            this.$searchResults.prepend('<tr><td><h4>Search results</h4></td><td></td></tr>');

        }

    },

    addResultsView: function() {

        // Read the collection, add the Results to the page
        _.each(this.collection.models, function(data, index) {

            this.addResultView(data, index);

        }, this);

    },

    wipeResultView: function() {

        // Remove the results from the page
        this.$searchResults.html('');

    }

});