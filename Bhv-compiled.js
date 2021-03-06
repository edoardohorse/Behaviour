"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*const NEWEL_ENABLE = true; // true|false;
const BHV_ENABLE = true; // true|false;
const CLASSIE_ENABLE = true; // true|false;
const POLYFILLS_ENABLE = true; // true|false;
*/ /*
   const POLYFILL_STARTSWITH_ENABLE = true;
   const POLYFILL_ENDSWITH_ENABLE = true;
   const POLYFILL_OBJECT_ASSIGN_ENABLE = true;
   const POLYFILL_OBJECT___PROTO___ENABLE = true;
   const POLYFILL_OBJECT_ISEMPTY_ENABLE = true;
   */

//if( BHV_ENABLE ){
var Bhv = function () {
    function Bhv() {
        _classCallCheck(this, Bhv);
    }

    _createClass(Bhv, [{
        key: "debug",
        get: function get() {
            console.log(this);
        },
        set: function set(obj) {
            console.log(obj);
        }
    }], [{
        key: "whoami",
        value: function whoami(str) {
            console.log(str || "This is " + this.name + " class in Behaviour");
        }
    }, {
        key: "whereami",
        value: function whereami(str) {
            console.log(str || "I'm here!!!");
        }
    }]);

    return Bhv;
}();

//}


//}
//}


//if( NEWEL_ENABLE ){

/*
 * Example usage newEl
 * el:"div",
 * id:"theid",
 * theclass:"box expanded",
 * data:{
    "data-init": "prova",
    "href": provava"
    Object.prova = function(){
    *  }
    debugger;
    }

 * !!! Respect the uppercase of attributes such as viewBox and not viewbox !!!
 */

function newEl(node, toWrite) {
    // Crea Html element per comodità
    if (typeof node == "string") {
        var string = node.split(",");

        var el = document.createElement(string[0].trim());
        if (string[1] != undefined) string[1].trim() == "" ? false : el.id = string[1].trim();
        if (string[2] != undefined) {
            string[2].indexOf(" ") == 0 ? string[2] = string[2].substr(1) : false;
            var theclass = string[2].split(" ");
            for (var i in theclass) {
                classie.add(el, theclass[i]);
            }
        }
    }

    if ((typeof node === "undefined" ? "undefined" : _typeof(node)) == "object") {

        if (node.el == null) {
            console.error("--- Need a name of HTMLElement at least");
            return;
        } else {
            var el = document.createElement(node.el);

            node.id === undefined ? false : el.id = node.id;

            if (node.theclass != undefined) {
                node.theclass = node.theclass.split(" ");
                for (var i in node.theclass) {
                    classie.add(el, node.theclass[i]);
                }
            }

            if (node.data != undefined) {
                for (var i in node.data) {
                    var attr = document.createAttribute(i);
                    // Don't use setAttribute( string, string) cause
                    // doesn't respect the uppercase
                    attr.value = node.data[i];
                    el.setAttributeNode(attr);
                }
            }
        }
    }
    if (typeof toWrite != "undefined") toWrite.appendChild(el);
    return el;
}

//}

//if(POLYFILL_ENDSWITH_ENABLE){
if (!("endsWith" in String.prototype)) {
    Object.defineProperty(String.prototype, "endsWith", {
        enumerable: false,
        value: function value(wd) {
            if (typeof wd == "undefined") return false;
            var lengthStr = this.length;
            var lengthWd = wd.length;
            if (lengthWd > lengthStr) {
                return false;
            } else if (this.substring(lengthStr - lengthWd) == wd) return true;else return false;
        }
    });
}
//}

//if(POLYFILL_STARTSWITH_ENABLE){
if (!("startsWith" in String.prototype)) {

    Object.defineProperty(String.prototype, "startsWith", {
        enumerable: false,
        value: function value(wd) {
            if (typeof wd == "undefined") return false;
            var lengthStr = this.length;
            var lengthWd = wd.length;
            if (lengthWd > lengthStr) {
                return false;
            } else if (this.substring(0, lengthWd) == wd) return true;else return false;
        }
    });
}
//}
/*
(function () {
    const DEBUG = false
    var oldLog = console.log;
    if (DEBUG)
        console.log = function (message) {
            // DO MESSAGE HERE.
            document.body.innerHTML += message + "<br>"
        };
})();*/

//if(POLYFILL_OBJECT_ASSIGN_ENABLE){
//Polyfill Object.assign
if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
        'use strict';

        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
//}


//}

if (!("isEmpty" in Object.prototype)) {
    Object.defineProperty(Object.prototype, "isEmpty", {
        enumerable: false,
        value: function value() {
            if (Object.keys(this).length > 0) {
                return false;
            } else return true;
        }
    });
}

//if( POLYFILL_OBJECT_ISEMPTY_ENABLE ){
if (!("__proto__" in Object.prototype)) {
    Object.defineProperty(Object.prototype, '__proto__', {
        enumerable: false,
        get: function get() {
            return this.constructor.prototype;
        }
    });
}
//}


// Classie API
/*
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )

 * Multiple classes are accepted in add, remove and toggle methods if they
 * are separated from ',' (comma)
 */

window.classie = undefined;

//if( CLASSIE_ENABLE ){
window.classie = {
    //     if( 'classList' in document.documentElement )
    add: function add(el, classes) {
        if (!(el instanceof HTMLElement)) console.error("--- Need an HTMLelement to add class");

        classes = classes.trim();
        if (classes.indexOf(",") > -1) {
            classes = classes.split(",");
            for (var i = 0; i < classes.length; i++) {
                if (!this.has(el, classes[i])) el.className += classes[i];
            }
        } else el.className += ' ' + classes;
        return el;
    },

    remove: function remove(el, classes) {
        if (!(el instanceof HTMLElement)) console.error("--- Need an HTMLelement to add class");

        classes = classes.replace(' ', '');
        if (classes.indexOf(",") > -1) {
            classes = classes.split(",");
            for (var i = 0; i < classes.length; i++) {
                if (this.has(el, classes[i])) {
                    var classReg = new RegExp("(^|\\s+)" + classes[i] + "(\\s+|$)");
                    el.className = el.className.replace(classReg, ' ');
                }
            }
            el.className = el.className.trim();
        } else {
            var _classReg = new RegExp("(^|\\s+)" + classes + "(\\s+|$)");
            el.className = el.className.replace(_classReg, ' ');
        }

        return el;
    },

    has: function has(el, theclass) {
        if (!(el instanceof HTMLElement)) console.error("--- Need an HTMLelement to add class");

        var classReg = new RegExp("(^|\\s+)" + theclass + "(\\s+|$)");
        return classReg.test(el.className);
    },

    toggle: function toggle(el, classes) {
        if (!(el instanceof HTMLElement)) console.error("--- Need an HTMLelement to add class");

        classes = classes.replace(' ', '');
        if (classes.indexOf(",") > -1) {
            classes = classes.split(",");
            for (var i = 0; i < classes.length; i++) {
                if (this.has(el, classes[i])) this.remove(el, classes[i]);else this.add(el, classes[i]);
            }
            el.className = el.className.trim();
        } else {
            if (this.has(el, classes)) this.remove(el, classes);else this.add(el, classes);
        }

        return el;
    }
};
