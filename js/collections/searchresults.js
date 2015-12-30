"use strict";

var app = app || {};

// Backbone collection of SearchResult model
app.SearchResultList = Backbone.Collection.extend({

    // Set the model for a SearchResult model
    model: app.SearchResult,

    // URL to the required REST flux
    url: '',

    // Overriding the parse function
    // This way we can store important information in the collection
    // and then build the models from the data we want.
    parse: function(response) {

        // We return only the datas we want the models to be made of
        return response.hits;

    },

    fetchSearch: function(search, callbackData) {

        // Create the URL corresponding to the user search
        this.url = 'https://api.nutritionix.com/v1_1/search/'
            + search
            + '?fields=item_name%2Citem_id%2Cnf_calories&appId=d0cb930d&appKey=d1f65536f72a648a3b0c2ae8444ee96a';

        // Then reset the collection and fetch data with the new URL
        this.reset();
        this.fetch({
            wait: true,
            error: function(model, response)  {

                callbackData.hideLoading('error', callbackData.view);

            },
            success: function(model, response)  {

                callbackData.hideLoading('success', callbackData.view);

            }
        });

    },

    comparator: function(model) {

        // Sort the collection by calories
        return model.attributes.fields.nf_calories;

    }

});
