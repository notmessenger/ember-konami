define("dummy/app", 
  ["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("dummy/controllers/application", 
  ["ember","ember-konami/mixins/konami","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Konami = __dependency2__["default"];

    __exports__["default"] = Ember.Controller.extend(Konami, {

      /**
       * Default egg
       *
       * @property {easterEgg}
       * @type {String}
       * @default 'raptor'
       */
      easterEgg: "raptor",

      /**
       * Egg possibilities
       *
       * @property {eggs}
       * @type {Array}
       * @default [ 'raptor', 'kickAss', 'fontBomb', 'katamariHack', 'cornify', 'turnDownForWhat' ]
       */
      eggs: ["raptor", "kickAss", "fontBomb", "katamariHack", "cornify", "turnDownForWhat"],

      /**
       * Value selected from select list
       *
       * @property {selectedName}
       * @type {String}
       * @default 'raptor'
       */
      selectedName: "raptor",

      /**
       * Set easter egg to selection value
       *
       * @type function
       * @observes selectedName
       * @return {void}
       */
      whichEgg: (function () {
        this.set("easterEgg", this.get("selectedName"));
      }).observes("selectedName")
    });
  });
define("dummy/ember-konami/tests/ember-konami/mixins/konami.jshint", 
  [],
  function() {
    "use strict";
    module("JSHint - ember-konami/mixins");
    test("ember-konami/mixins/konami.js should pass jshint", function () {
      ok(true, "ember-konami/mixins/konami.js should pass jshint.");
    });
  });
define("dummy/initializers/export-application-global", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: "export-application-global",

      initialize: initialize
    };
  });
define("dummy/mixins/konami", 
  ["ember-konami/mixins/konami","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var mixin = __dependency1__["default"];

    __exports__["default"] = mixin;
  });
define("dummy/router", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function () {});

    __exports__["default"] = Router;
  });
define("dummy/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"btn-group pull-right\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-reorder\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                <li role=\"presentation\"><a href=\"https://github.com/notmessenger/ember-konami/blob/master/README.md\"><i class=\"fa fa-cubes\"></i> Documentation</a></li>\n                <li role=\"presentation\"><a href=\"https://github.com/notmessenger/ember-konami/stargazers\"><i class=\"fa fa-star\"></i> Star The Repo</a></li>\n                <li role=\"presentation\"><a href=\"https://github.com/notmessenger/ember-konami/fork\"><i class=\"fa fa-code-fork\"></i> Fork Our Repo</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4>Which Easter Egg should launch when the Konami code is entered?</h4> ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
        'content': ("eggs"),
        'value': ("selectedName")
      },hashTypes:{'content': "ID",'value': "ID"},hashContexts:{'content': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n        </div>\n    </div>\n\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a sem sem. Suspendisse finibus turpis sit amet sem sodales porttitor. Suspendisse eu tincidunt sapien, eget convallis mauris. Nulla efficitur risus in vehicula aliquet. Integer a ultricies nisi. Suspendisse non nulla hendrerit, rutrum ipsum consectetur, aliquam sem. Quisque ante enim, mattis nec mi quis, ullamcorper varius arcu. Cras et lorem ligula. Aenean at odio venenatis magna pellentesque posuere. Nullam massa purus, malesuada id sem id, facilisis suscipit dui.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Nullam finibus tellus nec ante semper, eu porta felis tempus. Praesent quis velit at magna pharetra sollicitudin at non eros. Sed finibus euismod felis, ac interdum justo finibus et. In maximus eget massa et sagittis. Vivamus pretium metus eu neque congue tempor. Maecenas id congue purus. Nam id ligula fringilla, lobortis odio ac, molestie lacus. Praesent enim libero, ullamcorper non blandit eget, vulputate nec eros. Sed pharetra urna quis tellus volutpat consectetur. Maecenas egestas ante sed ex venenatis sagittis. Nunc quis purus rhoncus, laoreet turpis quis, tincidunt lorem. Nunc ut quam mauris. Praesent nec lorem vel arcu placerat tincidunt.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Vestibulum dapibus fringilla sollicitudin. Aenean at vehicula purus. Pellentesque tellus neque, gravida vel dapibus quis, vestibulum ac sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec lectus velit, semper in molestie finibus, egestas in mi. Nulla facilisi. Vestibulum feugiat nisi non lacus tincidunt, id imperdiet nisi feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vel urna ac massa laoreet volutpat. Donec ut leo nunc. Donec interdum non sapien quis iaculis. Suspendisse mollis tellus eu lacus scelerisque venenatis. Fusce bibendum viverra leo. Pellentesque vehicula interdum venenatis. Nulla feugiat hendrerit justo, eget condimentum velit vestibulum eu.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Donec vitae ante tortor. Nulla nisl libero, dapibus ut ultricies vel, molestie eget purus. Sed posuere diam eu dui consequat, eget fermentum leo semper. Sed metus arcu, condimentum ut dolor at, elementum sagittis libero. Vivamus in viverra leo. Etiam ligula dolor, ullamcorper sed felis non, auctor blandit nunc. Donec bibendum ultricies sem, id tristique ante iaculis sit amet. In id accumsan neque.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Curabitur et elit lobortis, consectetur sapien elementum, condimentum sem. Mauris interdum iaculis quam, sed auctor turpis ullamcorper ut. Donec nulla ipsum, elementum ac cursus at, semper at tellus. Vestibulum ac felis orci. Vestibulum pellentesque tincidunt elit, a pellentesque sapien tristique in. Mauris nec leo non augue molestie consectetur id ut felis. Nullam hendrerit ex nunc, ut mattis eros tincidunt nec. Integer eleifend auctor metus ultricies tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at iaculis erat. Proin pulvinar sit amet nisl ac commodo. Proin gravida erat vehicula ante facilisis, eu pulvinar ipsum auctor.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Ut ultrices tincidunt massa quis semper. Ut egestas nunc vitae urna scelerisque convallis. Morbi blandit urna eu turpis mollis interdum. Vivamus malesuada blandit ipsum in volutpat. Aenean eleifend est metus, eget ultrices libero ornare vel. Phasellus varius aliquet ligula a tincidunt. Nullam aliquet hendrerit libero vel sodales. In sollicitudin feugiat dolor sodales facilisis. Donec nec nunc lacus. Mauris rutrum varius laoreet. Nullam eget tortor leo.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Nulla ac rhoncus dolor. Morbi non nisi in magna pharetra aliquet. Sed sed ligula non eros cursus tempor. Praesent porta, sem in aliquet finibus, sem magna lacinia diam, ac scelerisque arcu mi a nibh. Donec quis tincidunt eros. In tempor urna eu blandit pharetra. Sed scelerisque, risus et molestie dictum, neque purus interdum magna, eget vestibulum metus tellus efficitur leo. Nullam in leo metus.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Nunc lobortis commodo vestibulum. Aliquam elementum, dui vitae varius laoreet, nisl augue elementum quam, nec varius nisi odio eget odio. Suspendisse eget urna sit amet turpis dignissim fringilla ac eget velit. Donec vestibulum gravida enim ut varius. Duis at sodales tellus, a mattis nunc. Praesent laoreet iaculis molestie. Curabitur ut posuere nisi, vitae euismod magna. Quisque sollicitudin fringilla facilisis.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Phasellus tincidunt, nisi vel fermentum pharetra, orci massa interdum mauris, vel porta elit nisl non metus. Curabitur in libero at lorem scelerisque iaculis laoreet in sem. Donec nec sapien a leo tincidunt facilisis. Aliquam ex justo, euismod quis posuere eu, mollis vulputate tortor. Vestibulum tincidunt vel libero quis vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque ultricies odio sed fringilla.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p>Mauris varius velit quam, scelerisque facilisis turpis aliquet eu. Nunc ultricies at velit a fringilla. Integer aliquam nunc id pellentesque volutpat. Praesent dignissim dignissim diam, non ultrices nulla efficitur sit amet. Quisque quis tempor arcu. Duis condimentum elit dictum eros porttitor ullamcorper sit amet at lorem. Fusce suscipit massa quis quam iaculis, sit amet bibendum leo consectetur. Sed posuere et ligula eu tincidunt. Pellentesque varius condimentum enim ullamcorper luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sit amet est gravida, semper mauris vel, dapibus orci.</p>\n        </div>\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("dummy/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("dummy/tests/controllers/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/application.js should pass jshint', function() { 
      ok(true, 'controllers/application.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests');
    test('dummy/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'dummy/tests/test-helper.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/mixins/konami-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/mixins');
    test('dummy/tests/unit/mixins/konami-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/mixins/konami-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/helpers/resolver", 
  ["ember/resolver","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("dummy/tests/helpers/start-app", 
  ["ember","dummy/app","dummy/router","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function () {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("dummy/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("dummy/tests/test-helper", 
  ["dummy/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

    QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
    var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
    document.getElementById("ember-testing-container").style.visibility = containerVisibility;
  });
define("dummy/tests/unit/mixins/konami-test", 
  ["ember","ember-konami/mixins/konami"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var mixinUnderTest = __dependency2__["default"];

    module("Unit - mixins:konami");

    test("Successfully mixed", function () {
      expect(1);

      var testObject = Ember.Object.extend(mixinUnderTest), subject;

      Ember.run(function () {
        subject = testObject.create();
      });

      ok(subject);
    });

    test("injectEasterEgg() calls correct function when passed string", function () {
      expect(1);

      var testObject = Ember.Object.extend(mixinUnderTest), subject;

      Ember.run(function () {
        subject = testObject.create({
          injectTest: function () {
            this.set("testRan", "yes");
          }
        });

        subject.injectEasterEgg("test");
      });

      equal(subject.get("testRan"), "yes");
    });

    test("injectEasterEgg() calls function passed to it", function () {
      expect(1);

      var testObject = Ember.Object.extend(mixinUnderTest),
          testRan = false,
          subject;

      Ember.run(function () {
        subject = testObject.create();
        subject.injectEasterEgg(function () {
          testRan = true;
        });
      });

      equal(testRan, true);
    });
  });
/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map