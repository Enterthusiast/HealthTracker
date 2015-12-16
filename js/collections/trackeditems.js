"use strict";

var app = app || {};

// Backbone collection of TrackedItem model
app.TrackedItemList = Backbone.Collection.extend({

    // Set the model for the list
    model: app.TrackedItem,

    // localStorage save data locally on the user machine
    localStorage: new Backbone.LocalStorage("healthtracker-trackeditems"),

    create: function( model, options ){

        // call the real create with the list of attributes we want to use
        // to build the models
        Backbone.Collection.prototype.create.call(this, model.attributes);

    }

});