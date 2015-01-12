/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-konami',

    included: function( app ) {
        this._super.included( app );

        app.import({
            development : 'bower_components/mousetrap/mousetrap.js',
            production  : 'bower_components/mousetrap/mousetrap.min.js'
        });
    }
};
