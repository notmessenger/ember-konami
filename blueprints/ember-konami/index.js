/* globals module */

module.exports = {
    afterInstall: function() {
        var self = this;

        return this.addBowerPackageToProject( 'ccampbell/mousetrap' );
    },

    normalizeEntityName: function() {}
};