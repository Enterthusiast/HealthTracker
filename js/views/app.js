"use strict";

var app = app || {};

// Start the app
$(function () {

    // Create the articles collection then the view of the collection
    app.SearchResults = new app.SearchResultList();
    app.SearchResultsApp = new app.SearchResultsView({collection: app.SearchResults});

    // Create the contents collection then the view of the collection
    app.TrackedItems = new app.TrackedItemList();
    app.TrackedItemsApp = new app.TrackedItemsView({collection: app.TrackedItems});

})