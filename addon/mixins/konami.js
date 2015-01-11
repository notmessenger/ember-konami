/* global Mousetrap, cornify_add */

import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Easter egg to associate with keyboard shortcut
     *
     * @type {String}
     * @default 'raptor'
     */
    easterEgg: 'raptor',

    /**
     * Initialize this addon
     *
     * @return {void}
     */
    initializeKonami: function() {
        Ember.run.schedule( 'afterRender', this, function() {
            this.registerKeyboardShortcuts();
        });
    }.on( 'init' ),

    /**
     * Handler for easter egg injections
     *
     * @param  {string} egg
     * @return {void}
     */
    injectEasterEgg: function( egg ) {
        if (typeof egg === 'string') {
            try {
                this['inject' + Ember.String.capitalize(egg)]();
            } catch (exception) {
                Ember.Logger.log('Error when calling egg ' + egg);
                Ember.Logger.log(exception);
            }
        } else if (typeof egg === 'function') {
            egg(this);
        }
    },

    /**
     * Inject Easter Egg: Font Bomb
     *
     * http://creativejs.com/2012/07/fontbomb-blow-up-the-web/
     *
     * @function injectFontBomb
     * @return {void}
     */
    injectFontBomb: function() {
        this.injectScriptSource( '//fontbomb.ilex.ca/js/main.js' );
    },

    /**
     * Inject Easter Egg: Katamari Hack
     *
     * http://kathack.com
     *
     * @function injectKatamariHack
     * @return {void}
     */
    injectKatamariHack: function() {
        this.injectScriptSource( '//kathack.com/js/kh.js' );
    },

    /**
     * Inject Easter Egg: Kick Ass
     *
     * http://kickassapp.com
     *
     * @function injectKickAss
     * @return {void}
     */
    injectKickAss: function() {
        $('<script>')
            .attr( 'type', 'text/javascript' )
            .text( 'var KICKASSVERSION="2.0";' )
            .appendTo( 'head' );

        this.injectScriptSource( '//hi.kickassapp.com/kickass.js' );
    },

    /**
     * Inject Easter Egg: Raptorize
     *
     * http://zurb.com/playground/jquery-raptorize
     *
     * @function injectRaptor
     * @return {void}
     */
    injectRaptor: function() {
        var playAudio = function() {
            document.getElementById( 'elRaptorShriek' ).play();
        };

        $('<audio>')
            .attr( 'id', 'elRaptorShriek' )
            .attr( 'preload', 'auto' )
            .appendTo( 'body' );

        document.getElementById( 'elRaptorShriek' ).addEventListener( 'canplaythrough', playAudio, false );

        $('<source>')
            .attr( 'src', '/ember-konami/assets/audio/raptor-sound.mp3' )
            .appendTo( '#elRaptorShriek' );

        $('<source>')
            .attr( 'src', '/ember-konami/assets/audio/raptor-sound.ogg' )
            .appendTo( '#elRaptorShriek' );

        $('<img>')
            .attr( 'id', 'elRaptor' )
            .attr( 'src', '/ember-konami/assets/images/raptor.png' )
            .attr( 'style', 'display: none' )
            .appendTo( 'body' )
            .css({
                'position' : 'fixed',
                'bottom'   : '-700px',
                'right'    : '0',
                'display'  : 'block'
            })
            .animate({
                'bottom' : '-130px'
            }, 100, function() {
                var offset = (($(this).position().left)+400);

                $(this).delay(300).animate({
                    'right' : offset
                }, 2200, function() {
                    $('#elRaptor').css({
                        'bottom' : '-700px',
                        'right'  : '0'
                    });

                    document.getElementById( 'elRaptorShriek' ).removeEventListener( 'canplaythrough', playAudio, false);
                    $('audio#elRaptorShriek').remove();
                    $('img#elRaptor').remove();
                });
            });
    },

    /**
     * Inject Easter Egg: Cornify
     *
     * http://www.cornify.com/
     *
     * @function injectCornify
     * @return {void}
     */
    injectCornify: function() {
        $.getScript('//www.cornify.com/js/cornify.js', function() {
            cornify_add();
        });
    },

    /**
     * Inject JavaScript source into HEAD element
     *
     * @private
     * @function injectScriptSource
     * @param  {string} source
     * @return {void}
     */
    injectScriptSource: function( source ) {
        $('<script>')
            .attr( 'type', 'text/javascript' )
            .attr( 'src', source )
            .appendTo( 'head' );
    },

    /**
     * Register keyboard shortcuts to easter eggs
     *
     * @return {void}
     */
    registerKeyboardShortcuts: function() {
        var easterEgg = this.get('easterEgg'),
            self      = this;
        Mousetrap.bind(
            'up up down down left right left right b a enter',
            function() {
                self.injectEasterEgg( easterEgg );
            }
        );
    }
});
