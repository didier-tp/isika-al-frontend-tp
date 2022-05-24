//IIFE = immediately-invoked function expression
//IIFE is a function expression that automatically invokes 
//after completion of the definition. 

//basic iife:
(function () {
    var userName = "Steve";//local au bloc/module IIFE (speudo "semi global")
    
    function display(name)
    {
        console.log("here name: " + name);
    }

    display(userName);
  })();

  //module as iife:
  var m1 = (function () {
    var defaultPrefix = ">>"; //local au bloc/module IIFE (speudo "semi global")

    return {
        withDefaultPrefix: function (message) {
            return defaultPrefix + message;
        },

        setDefaultPrefix: function (prefix) {
           this.defaultPrefix = prefix;
        }
    };
})();

console.log(m1.withDefaultPrefix("abc"));

//other module as iife (may be in other js script):
var m2 = (function () {
    var defaultPrefix = "**"; //local au bloc/module IIFE (speudo "semi global")

    return {
        withDefaultPrefix: function (message) {
            return defaultPrefix + message;
        },

        setDefaultPrefix: function (prefix) {
           this.defaultPrefix = prefix;
        }
    };
})();

console.log(m2.withDefaultPrefix("abc"));
