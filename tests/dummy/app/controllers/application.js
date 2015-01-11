import Ember from 'ember';
import Konami from 'ember-konami/mixins/konami';

export default Ember.Controller.extend( Konami, {

    /**
     * Default egg
     *
     * @property {easterEgg}
     * @type {String}
     * @default 'raptor'
     */
    easterEgg: 'raptor',

    /**
     * Egg possibilities
     *
     * @property {eggs}
     * @type {Array}
     * @default [ 'raptor', 'kickAss', 'fontBomb', 'katamariHack', 'cornify', 'turnDownForWhat' ]
     */
    eggs: [ 'raptor', 'kickAss', 'fontBomb', 'katamariHack', 'cornify', 'turnDownForWhat' ],

    /**
     * Value selected from select list
     *
     * @property {selectedName}
     * @type {String}
     * @default 'raptor'
     */
    selectedName: 'raptor',

    /**
     * Set easter egg to selection value
     *
     * @type function
     * @observes selectedName
     * @return {void}
     */
    whichEgg: function() {
        this.set( 'easterEgg', this.get( 'selectedName' ) );
    }.observes( 'selectedName' )
});