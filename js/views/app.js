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

    // // Launch the Backbone app
    // // Create the router
    // app.ArticleRouter = new Workspace();

    // // Create the articles collection then the view of the collection
    // app.Articles = new app.ArticleList();
    // app.ArticlesApp = new app.ArticlesView({collection: app.Articles});

    // // Create the contents collection then the view of the collection
    // app.Contents = new app.ContentsList();
    // app.ContentsApp = new app.ContentsView({collection: app.Contents});

    // // Create the "datas" collection then the view of the collection
    // app.Datas = new app.DataList();
    // app.DatasApp = new app.DatasView({collection: app.Datas});

    // // Start error/loading handler
    // app.errorHandler = new app.errorManager();

    // // Start the router
    // Backbone.history.start();

})