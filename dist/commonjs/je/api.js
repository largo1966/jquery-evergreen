"use strict";
/*
 * # API
 *
 * Import modules to build the API.
 *
 * The special comments (e.g. `API:class`) are used to exclude modules for a custom build.
 */

var api = {},
    $ = {};

/* API:attr */
var attr = require("./attr")["default"];
api.attr = attr;
/* API:attr */

/* API:class */
var addClass = require("./class").addClass;
var removeClass = require("./class").removeClass;
var toggleClass = require("./class").toggleClass;
var hasClass = require("./class").hasClass;
api.addClass = addClass;
api.removeClass = removeClass;
api.toggleClass = toggleClass;
api.hasClass = hasClass;
/* API:class */

/* API:dom */
var append = require("./dom").append;
var before = require("./dom").before;
var after = require("./dom").after;
api.append = append;
api.before = before;
api.after = after;
/* API:dom */

/* API:event */
var on = require("./event").on;
var off = require("./event").off;
var delegate = require("./event").delegate;
var undelegate = require("./event").undelegate;
var trigger = require("./event").trigger;
api.on = on;
api.off = off;
api.delegate = delegate;
api.undelegate = undelegate;
api.trigger = trigger;
/* API:event */

/* API:html */
var html = require("./html")["default"];
api.html = html;
/* API:html */

/* API:selector */
var $ = require("./selector").$;
var find = require("./selector").find;
api.find = find;
/* API:selector */

/* API:mode */
var isNative = require("./mode").isNative;
var native = require("./mode").native;
$.isNative = isNative;
$.native = native;
/* API:mode */

var array = [];

/*
 * The `apiNodeList` object represents the API that gets augmented onto the native `NodeList` object.
 * The wrapped array (native `Array`) already has these (and more).
 */

var apiNodeList = {
    every: array.every,
    filter: array.filter,
    forEach: array.forEach,
    each: array.forEach,
    some: array.some,
    map: array.map
};

/*
 * Augment the `$` function to be able to:
 *
 * - wrap the `$` objects and add the API methods
 * - switch to native mode
 */

$.getNodeMethods = function() {
    return api;
};
$.getNodeListMethods = function() {
    return apiNodeList;
};

// Export interface

exports["default"] = $;