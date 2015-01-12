import Ember from 'ember';
import mixinUnderTest from 'ember-konami/mixins/konami';

module( 'Unit - mixins:konami' );

test( 'Successfully mixed', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest ),
        subject;

    Ember.run( function() {
        subject = testObject.create();
    });

    ok( subject );
});

test( 'injectEasterEgg() calls correct function when passed string', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest ),
        subject;

    Ember.run( function() {
        subject = testObject.create({
            injectTest: function() {
                this.set( 'testRan', 'yes' );
            }
        });

        subject.injectEasterEgg( 'test' );
    });

    equal( subject.get( 'testRan' ), 'yes' );
});

test( 'injectEasterEgg() calls function passed to it', function() {
    expect(1);

    var testObject = Ember.Object.extend( mixinUnderTest ),
        testRan    = false,
        subject;

    Ember.run( function() {
        subject = testObject.create();
        subject.injectEasterEgg( function() {
            testRan = true;
        });
    });

    equal( testRan, true );
});
