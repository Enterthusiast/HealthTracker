"use strict";

var app = app || {};

// Displaying an article means in fact displaying a collection of contents

// Backbone collection of contents model
app.TrackedItemList = Backbone.Collection.extend({

    // Set the model for a content model
    model: app.TrackedItem,

    idcounter: 0,

    add: function( model, options ){

        // call the real add
        Backbone.Collection.prototype.add.call(this, model.attributes);

    }

    // // Listening to Backbone events
    // initialize: function() {

    // },

    // // Overriding the parse function
    // // This way we can store important information in the collection
    // // and then build the models from the data we want.
    // parse: function(response) {

    //     // // We return only the datas we want the contents to be made of
    //     // return contentsFetcher.embedded.contents;

    // }

});