"use strict";

var app = app || {};

// Backbone collection of articles model
app.SearchResultList = Backbone.Collection.extend({

    // Set the model for an article model
    model: app.SearchResult,

    // URL to the required REST flux
    url: '',

    initialize: function() {

    },

    // Overriding the parse function
    // This way we can store important information in the collection
    // and then build the models from the data we want.
    parse: function(response) {

        return response.hits;
        // // We return only the datas we want the models to be made of
        // return articlesFetcher.embedded.articles;

    },

    fetchSearch: function(search) {

        this.url = 'https://api.nutritionix.com/v1_1/search/' + search + '?fields=item_name%2Citem_id%2Cnf_calories&appId=d0cb930d&appKey=d1f65536f72a648a3b0c2ae8444ee96a';
        this.reset();
        this.fetch({wait: true});

    },

    comparator: function(model) {

        return model.attributes.fields.nf_calories;

    }

});
