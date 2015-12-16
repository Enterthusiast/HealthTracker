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
        this.$searchButton = this.$('.search-button');

        // Listen to Backbone events
        this.listenTo(this.collection, 'reset', this.wipeResultView);
        this.listenTo(this.collection, 'sort', this.addResultsView);
        this.listenTo(this.collection, 'all', this.render);

    },

    startSearch: function() {

        this.showLoading();
        // Fetch data
        this.collection.fetchSearch(this.$searchText.val().trim(), { hideLoading: this.hideLoading, view: this});

    },

    showLoading: function() {

        this.$searchButton.text('Loading...')

    },

    hideLoading: function(status, view) {

        if(status.toString() === 'success') {

            view.$searchButton.text('Search');

        } else if(status.toString() === 'error') {

            view.$searchButton.text('Error Try Again');

        }

        if(view.collection.length === 0) {

            view.$searchResults.html('<tr><td><h4>Search results</h4></td><td><h4>No Result</h4></td></tr>');

        }

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

        this.wipeResultView();

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