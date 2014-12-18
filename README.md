# ember-konami

This Ember CLI Addon provides Konami-code activated easter eggs to Ember applications.

---

# Available easter eggs

## Raptor (enabled by default)

From [http://zurb.com/playground/jquery-raptorize](http://zurb.com/playground/jquery-raptorize), this easter egg unleashes
a Raptor of Jurassic proportions.

## Kick Ass

From [http://kickassapp.com](http://kickassapp.com), this easter egg allows you to destroy DOM elements as if they were
asteroids.

## Font Bomb

From [http://creativejs.com/2012/07/fontbomb-blow-up-the-web/](http://creativejs.com/2012/07/fontbomb-blow-up-the-web/),
this easter egg allows you to drop “bombs” on any site to blow the text to bits.

## Katamari Hack

From [http://kathack.com](http://kathack.com), this easter egg turns any page into [Katamari Damacy](http://en.wikipedia.org/wiki/Katamari_Damacy).



# Installation and Configuration

1) `npm install --save-dev ember-konami`

2) `ember generate ember-konami`

3) Make the following modifications to the Application Controller:

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


# Triggering the easter egg

In order to activate the easter egg you only need to enter the Konami code using your keyboard.  The Konami code consists
of these keystrokes:

```
↑ ↑ ↓ ↓ ← → ← → B A
```



