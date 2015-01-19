
[![Latest Release](https://img.shields.io/github/release/notmessenger/ember-konami.svg)](https://github.com/notmessenger/ember-konami/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-0.1.7-orange.svg) [![License](https://img.shields.io/npm/l/ember-konami.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/ember-konami.svg)](https://www.npmjs.com/package/ember-konami)

[![Dependencies](https://img.shields.io/david/notmessenger/ember-konami.svg)](https://david-dm.org/notmessenger/ember-konami) [![Dev Dependencies](https://img.shields.io/david/dev/notmessenger/ember-konami.svg)](https://david-dm.org/notmessenger/ember-konami#info=devDependencies)

[![Build Status](https://img.shields.io/travis/notmessenger/ember-konami/develop.svg)](https://travis-ci.org/notmessenger/ember-konami) [![Code Climate](https://img.shields.io/codeclimate/github/notmessenger/ember-konami.svg)](https://codeclimate.com/github/notmessenger/ember-konami)


# ember-konami

This Ember CLI Addon provides for the easy addition of easter eggs into an Ember application.  It comes bundled with a
collection of easter eggs to choose from, as well as you can specify your own.  The specified easter egg is activated
by the user entering the Konami code via their keyboard.

# Available easter eggs

### Raptor (enabled by default)

From [http://zurb.com/playground/jquery-raptorize](http://zurb.com/playground/jquery-raptorize), this easter egg unleashes
a Raptor of Jurassic proportions.

### Kick Ass

From [http://kickassapp.com](http://kickassapp.com), this easter egg allows you to destroy DOM elements as if they were
asteroids.

### Font Bomb

From [http://creativejs.com/2012/07/fontbomb-blow-up-the-web/](http://creativejs.com/2012/07/fontbomb-blow-up-the-web/),
this easter egg allows you to drop “bombs” on any site to blow the text to bits.

### Katamari Hack

From [http://kathack.com](http://kathack.com), this easter egg turns any page into [Katamari Damacy](http://en.wikipedia.org/wiki/Katamari_Damacy).

### Cornify

From [http://www.cornify.com/](http://www.cornify.com/), this easter egg adds Unicorns and Rainbows to your page.

### Turn Down For What

From [https://nthitz.github.io/turndownforwhatjs/](https://nthitz.github.io/turndownforwhatjs/), this turns any website down for what


# Installation and Configuration

1) `ember install:addon ember-konami`

2) Make the following modifications to the Application Controller:

```
import Ember from 'ember';
import Konami from 'ember-konami/mixins/konami';

export default Ember.Controller.extend( Konami, {

});
```

The default easter egg is `raptor` but if you wish for a different one to be activated after the Konami code is entered,
simply make the following modification:

```
import Ember from 'ember';
import Konami from 'ember-konami/mixins/konami';

export default Ember.Controller.extend( Konami, {
    easterEgg: 'placeholder'
});
```

where the `placeholder` text should be one of the following values, corresponding to the desired easter egg:

* raptor
* kickAss
* fontBomb
* katamariHack
* cornify
* turnDownForWhat

## Specifying a custom easter egg

Instead of setting one of the values above in place of the `placeholder` text, you can define a function to be executed
when the easter egg is activated.  In this way you can trigger your own custom easter egg.


# Triggering the easter egg

In order to activate the easter egg you only need to enter the Konami code using your keyboard.  The Konami code consists
of these keystrokes:

```
↑ ↑ ↓ ↓ ← → ← → B A Enter
```



