"use strict";

var app = app || {};

// Backbone collection of TrackedItem model
app.TrackedItemList = Backbone.Collection.extend({

    // Set the model for the list
    model: app.TrackedItem,

    add: function( model, options ){

        // call the real add with the list of attributes we want to use
        // to build the models
        Backbone.Collection.prototype.add.call(this, model.attributes);

    }

});