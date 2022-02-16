this["wp"] = this["wp"] || {}; this["wp"]["components"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "SB3u");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1VY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
var emotion_sheet_browser_esm = __webpack_require__("ep+1");

// CONCATENATED MODULE: ./node_modules/stylis/dist/stylis.mjs
var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var s="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var h="@namespace";var p="@keyframes";var b="@font-face";var w="@counter-style";var $="@font-feature-values";var k=Math.abs;var d=String.fromCharCode;var g=Object.assign;function m(e,r){return(((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function x(e){return e.trim()}function y(e,r){return(e=r.exec(e))?e[0]:e}function j(e,r,a){return e.replace(r,a)}function C(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function A(e,r,a){return e.slice(r,a)}function O(e){return e.length}function M(e){return e.length}function S(e,r){return r.push(e),e}function q(e,r){return e.map(r).join("")}var B=1;var D=1;var E=0;var F=0;var G=0;var H="";function I(e,r,a,c,n,t,s){return{value:e,root:r,parent:a,type:c,props:n,children:t,line:B,column:D,length:s,return:""}}function J(e,r){return g(I("",null,null,"",null,null,0),e,{length:-e.length},r)}function K(){return G}function L(){G=F>0?z(H,--F):0;if(D--,G===10)D=1,B--;return G}function N(){G=F<E?z(H,F++):0;if(D++,G===10)D=1,B++;return G}function P(){return z(H,F)}function Q(){return F}function R(e,r){return A(H,e,r)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return B=D=1,E=O(H=e),F=0,[]}function V(e){return H="",e}function W(e){return x(R(F-1,ee(e===91?e+2:e===40?e+1:e)))}function X(e){return V(Z(U(e)))}function Y(e){while(G=P())if(G<33)N();else break;return T(e)>2||T(G)>3?"":" "}function Z(e){while(N())switch(T(G)){case 0:S(ae(F-1),e);break;case 2:S(W(G),e);break;default:S(d(G),e)}return e}function _(e,r){while(--r&&N())if(G<48||G>102||G>57&&G<65||G>70&&G<97)break;return R(e,Q()+(r<6&&P()==32&&N()==32))}function ee(e){while(N())switch(G){case e:return F;case 34:case 39:if(e!==34&&e!==39)ee(G);break;case 40:if(e===41)ee(e);break;case 92:N();break}return F}function re(e,r){while(N())if(e+G===47+10)break;else if(e+G===42+42&&P()===47)break;return"/*"+R(r,F-1)+"*"+d(e===47?e:N())}function ae(e){while(!T(P()))N();return R(e,F)}function ce(e){return V(ne("",null,null,null,[""],e=U(e),0,[0],e))}function ne(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var g="";var m=n;var x=t;var y=c;var z=g;while(w)switch(p=k,k=N()){case 40:if(p!=108&&z.charCodeAt(l-1)==58){if(C(z+=j(W(k),"&","&\f"),"&\f")!=-1)$=-1;break}case 34:case 39:case 91:z+=W(k);break;case 9:case 10:case 13:case 32:z+=Y(p);break;case 92:z+=_(Q()-1,7);continue;case 47:switch(P()){case 42:case 47:S(se(re(N(),Q()),r,a),i);break;default:z+="/"}break;case 123*b:u[f++]=O(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&O(z)-l)S(h>32?ue(z+";",c,a,l-1):ue(j(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:S(y=te(z,r,a,f,o,n,u,g,m=[],x=[],l),t);if(k===123)if(o===0)ne(z,r,y,y,m,t,l,u,x);else switch(v){case 100:case 109:case 115:ne(e,y,y,c&&S(te(e,y,y,0,0,n,u,g,n,m=[],l),x),n,x,l,u,c?m:x);break;default:ne(z,y,y,y,[""],x,0,u,x)}}f=o=h=0,b=$=1,g=z="",l=s;break;case 58:l=1+O(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&L()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(O(z)-1)*$,$=1;break;case 64:if(P()===45)z+=W(N());v=P(),o=l=O(g=z+=ae(Q())),k++;break;case 45:if(p===45&&O(z)==2)b=0}}return t}function te(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,g=A(e,v+1,v=k(w=u[b])),m=e;d<p;++d)if(m=x(w>0?h[d]+" "+g:j(g,/&\f/g,h[d])))f[$++]=m;return I(e,r,a,t===0?n:i,f,o,l)}function se(e,r,a){return I(e,r,a,c,d(K()),A(e,2,-2),0)}function ue(e,r,a,c){return I(e,r,a,t,A(e,0,c),A(e,c+1,-1),c)}function ie(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+j(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+j(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+j(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+j(c,"shrink","negative")+c;case 5292:return a+c+e+j(c,"basis","preferred-size")+c;case 6060:return a+"box-"+j(c,"-grow","")+a+c+e+j(c,"grow","positive")+c;case 4554:return a+j(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return j(j(j(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return j(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return j(j(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return j(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return j(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return~C(c,"stretch")?ie(j(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,O(c)-3-(~C(c,"!important")&&10))){case 107:return j(c,":",":"+a)+c;case 101:return j(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function fe(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function oe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return"";case p:return e.return=e.value+"{"+fe(e.children,s)+"}";case n:e.value=e.props.join(",")}return O(a=fe(e.children,s))?e.return=e.value+"{"+a+"}":""}function le(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function ve(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function he(c,s,u,i){if(c.length>-1)if(!c.return)switch(c.type){case t:c.return=ie(c.value,c.length);break;case p:return fe([J(c,{value:j(c.value,"@","@"+a)})],i);case n:if(c.length)return q(c.props,(function(n){switch(y(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fe([J(c,{props:[j(n,/:(read-\w+)/,":"+r+"$1")]})],i);case"::placeholder":return fe([J(c,{props:[j(n,/:(plac\w+)/,":"+a+"input-$1")]}),J(c,{props:[j(n,/:(plac\w+)/,":"+r+"$1")]}),J(c,{props:[j(n,/:(plac\w+)/,e+"input-$1")]})],i)}return""}))}}function pe(e){switch(e.type){case n:e.props=e.props.map((function(r){return q(X(r),(function(r,a,c){switch(z(r,0)){case 12:return A(r,1,O(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+A(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(c)>1?"":r;case a=M(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}
//# sourceMappingURL=stylis.mjs.map

// EXTERNAL MODULE: ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
var weak_memoize_browser_esm = __webpack_require__("gRFL");

// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
var emotion_memoize_browser_esm = __webpack_require__("SVgp");

// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var emotion_cache_browser_esm_identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (T(character)) {
      break;
    }

    N();
  }

  return R(begin, F);
};

var emotion_cache_browser_esm_toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += emotion_cache_browser_esm_identifierWithPointTracking(F - 1, points, index);
        break;

      case 2:
        parsed[index] += W(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = N());

  return parsed;
};

var emotion_cache_browser_esm_getRules = function getRules(value, points) {
  return V(emotion_cache_browser_esm_toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = emotion_cache_browser_esm_getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [he];

var emotion_cache_browser_esm_createCache = function createCache(options) {
  var key = options.key;

  if (false) {}

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (false) {}

  {
    var currentSheet;
    var finalizingPlugins = [oe,  false ? undefined : ve(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return fe(ce(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (false) {}

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new emotion_sheet_browser_esm["a" /* StyleSheet */]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ var emotion_cache_browser_esm = __webpack_exports__["a"] = (emotion_cache_browser_esm_createCache);


/***/ }),

/***/ "+51k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getActiveElement;
function getActiveElement() {
  return typeof document !== 'undefined' && document.activeElement;
}

/***/ }),

/***/ "+WFq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSlot; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slot_fill_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JYkG");
// @ts-nocheck

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function useSlot(name) {
  const registry = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_slot_fill_context__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
  const slot = registry.slots[name] || {};
  const slotFills = registry.fills[name];
  const fills = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => slotFills || [], [slotFills]);
  const updateSlot = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(fillProps => {
    registry.updateSlot(name, fillProps);
  }, [name, registry.updateSlot]);
  const unregisterSlot = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(slotRef => {
    registry.unregisterSlot(name, slotRef);
  }, [name, registry.unregisterSlot]);
  const registerFill = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(fillRef => {
    registry.registerFill(name, fillRef);
  }, [name, registry.registerFill]);
  const unregisterFill = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(fillRef => {
    registry.unregisterFill(name, fillRef);
  }, [name, registry.unregisterFill]);
  return { ...slot,
    updateSlot,
    unregisterSlot,
    fills,
    registerFill,
    unregisterFill
  };
}


/***/ }),

/***/ "+ipW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canUseDOM; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SyVe");



function checkIsBrowser() {
  var _window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[/* getWindow */ "a"])();

  return Boolean(typeof _window !== "undefined" && _window.document && _window.document.createElement);
}
/**
 * It's `true` if it is running in a browser environment or `false` if it is not (SSR).
 *
 * @example
 * import { canUseDOM } from "reakit-utils";
 *
 * const title = canUseDOM ? document.title : "";
 */


var canUseDOM = checkIsBrowser();




/***/ }),

/***/ "/9aa":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "/A+k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $TypeError = GetIntrinsic('%TypeError%');

var Get = __webpack_require__("aBsX");
var ToLength = __webpack_require__("3HW2");
var Type = __webpack_require__("PoQ0");

// https://262.ecma-international.org/11.0/#sec-lengthofarraylike

module.exports = function LengthOfArrayLike(obj) {
	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	return ToLength(Get(obj, 'length'));
};

// TODO: use this all over


/***/ }),

/***/ "/ZKw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("82c2");
var callBind = __webpack_require__("SLit");

var implementation = __webpack_require__("yN6O");
var getPolyfill = __webpack_require__("22yB");
var polyfill = getPolyfill();
var shim = __webpack_require__("v3P4");

var boundFlat = callBind(polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;


/***/ }),

/***/ "/sVA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__("UVaH")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "030x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styleInterface = void 0;
var styleTheme = void 0;

var START_MARK = 'react-with-styles.resolve.start';
var END_MARK = 'react-with-styles.resolve.end';
var MEASURE_MARK = '\uD83D\uDC69\u200D\uD83C\uDFA8 [resolve]';

function registerTheme(theme) {
  styleTheme = theme;
}

function registerInterface(interfaceToRegister) {
  styleInterface = interfaceToRegister;
}

function create(makeFromTheme, createWithDirection) {
  var styles = createWithDirection(makeFromTheme(styleTheme));
  return function () {
    return styles;
  };
}

function createLTR(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createLTR || styleInterface.create);
}

function createRTL(makeFromTheme) {
  return create(makeFromTheme, styleInterface.createRTL || styleInterface.create);
}

function get() {
  return styleTheme;
}

function resolve() {
  if (false) {}

  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var result = styleInterface.resolve(styles);

  if (false) {}

  return result;
}

function resolveLTR() {
  for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  if (styleInterface.resolveLTR) {
    return styleInterface.resolveLTR(styles);
  }

  return resolve(styles);
}

function resolveRTL() {
  for (var _len3 = arguments.length, styles = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  if (styleInterface.resolveRTL) {
    return styleInterface.resolveRTL(styles);
  }

  return resolve(styles);
}

function flush() {
  if (styleInterface.flush) {
    styleInterface.flush();
  }
}

exports['default'] = {
  registerTheme: registerTheme,
  registerInterface: registerInterface,
  create: createLTR,
  createLTR: createLTR,
  createRTL: createRTL,
  get: get,
  resolve: resolveLTR,
  resolveLTR: resolveLTR,
  resolveRTL: resolveRTL,
  flush: flush
};

/***/ }),

/***/ "0Dl3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getNumberOfCalendarMonthWeeks;

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek) {
  var weekDayDiff = firstDayOfMonth.day() - firstDayOfWeek;
  return (weekDayDiff + 7) % 7;
}

function getNumberOfCalendarMonthWeeks(month) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _moment2['default'].localeData().firstDayOfWeek();

  var firstDayOfMonth = month.clone().startOf('month');
  var numBlankDays = getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek);
  return Math.ceil((numBlankDays + month.daysInMonth()) / 7);
}

/***/ }),

/***/ "0HL0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setTextFieldValue; });
/* harmony import */ var reakit_utils_fireEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qOxZ");


function setTextFieldValue(element, value) {
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    var _Object$getOwnPropert;

    var proto = Object.getPrototypeOf(element);
    var setValue = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(proto, "value")) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;

    if (setValue) {
      setValue.call(element, value);
      Object(reakit_utils_fireEvent__WEBPACK_IMPORTED_MODULE_0__[/* fireEvent */ "a"])(element, "input", {
        bubbles: true
      });
    }
  }
}




/***/ }),

/***/ "0XP8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LeftArrow = function () {
  function LeftArrow(props) {
    return _react2['default'].createElement(
      'svg',
      props,
      _react2['default'].createElement('path', {
        d: 'M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z'
      })
    );
  }

  return LeftArrow;
}();

LeftArrow.defaultProps = {
  viewBox: '0 0 1000 1000'
};
exports['default'] = LeftArrow;

/***/ }),

/***/ "1+Kn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BOTTOM_RIGHT = exports.TOP_RIGHT = exports.TOP_LEFT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = __webpack_require__("Koq/");

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__("Hsqg");

var _reactWithStyles = __webpack_require__("TG4+");

var _defaultPhrases = __webpack_require__("vV+G");

var _getPhrasePropTypes = __webpack_require__("yc2e");

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _KeyboardShortcutRow = __webpack_require__("zN8g");

var _KeyboardShortcutRow2 = _interopRequireDefault(_KeyboardShortcutRow);

var _CloseButton = __webpack_require__("xEte");

var _CloseButton2 = _interopRequireDefault(_CloseButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOP_LEFT = exports.TOP_LEFT = 'top-left';
var TOP_RIGHT = exports.TOP_RIGHT = 'top-right';
var BOTTOM_RIGHT = exports.BOTTOM_RIGHT = 'bottom-right';

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  block: _propTypes2['default'].bool,
  buttonLocation: _propTypes2['default'].oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT]),
  showKeyboardShortcutsPanel: _propTypes2['default'].bool,
  openKeyboardShortcutsPanel: _propTypes2['default'].func,
  closeKeyboardShortcutsPanel: _propTypes2['default'].func,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerKeyboardShortcutsPhrases))
}));

var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function () {
    function openKeyboardShortcutsPanel() {}

    return openKeyboardShortcutsPanel;
  }(),
  closeKeyboardShortcutsPanel: function () {
    function closeKeyboardShortcutsPanel() {}

    return closeKeyboardShortcutsPanel;
  }(),

  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases
};

function getKeyboardShortcuts(phrases) {
  return [{
    unicode: '↵',
    label: phrases.enterKey,
    action: phrases.selectFocusedDate
  }, {
    unicode: '←/→',
    label: phrases.leftArrowRightArrow,
    action: phrases.moveFocusByOneDay
  }, {
    unicode: '↑/↓',
    label: phrases.upArrowDownArrow,
    action: phrases.moveFocusByOneWeek
  }, {
    unicode: 'PgUp/PgDn',
    label: phrases.pageUpPageDown,
    action: phrases.moveFocusByOneMonth
  }, {
    unicode: 'Home/End',
    label: phrases.homeEnd,
    action: phrases.moveFocustoStartAndEndOfWeek
  }, {
    unicode: 'Esc',
    label: phrases.escape,
    action: phrases.returnFocusToInput
  }, {
    unicode: '?',
    label: phrases.questionMark,
    action: phrases.openThisPanel
  }];
}

var DayPickerKeyboardShortcuts = function (_React$Component) {
  _inherits(DayPickerKeyboardShortcuts, _React$Component);

  function DayPickerKeyboardShortcuts() {
    var _ref;

    _classCallCheck(this, DayPickerKeyboardShortcuts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = DayPickerKeyboardShortcuts.__proto__ || Object.getPrototypeOf(DayPickerKeyboardShortcuts)).call.apply(_ref, [this].concat(args)));

    var phrases = _this.props.phrases;

    _this.keyboardShortcuts = getKeyboardShortcuts(phrases);

    _this.onShowKeyboardShortcutsButtonClick = _this.onShowKeyboardShortcutsButtonClick.bind(_this);
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind(_this);
    _this.setHideKeyboardShortcutsButtonRef = _this.setHideKeyboardShortcutsButtonRef.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  _createClass(DayPickerKeyboardShortcuts, [{
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var phrases = this.props.phrases;

        if (nextProps.phrases !== phrases) {
          this.keyboardShortcuts = getKeyboardShortcuts(nextProps.phrases);
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate() {
        this.handleFocus();
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();

        var closeKeyboardShortcutsPanel = this.props.closeKeyboardShortcutsPanel;
        // Because the close button is the only focusable element inside of the panel, this
        // amounts to a very basic focus trap. The user can exit the panel by "pressing" the
        // close button or hitting escape

        switch (e.key) {
          case 'Enter':
          case ' ':
          case 'Spacebar': // for older browsers
          case 'Escape':
            closeKeyboardShortcutsPanel();
            break;

          // do nothing - this allows the up and down arrows continue their
          // default behavior of scrolling the content of the Keyboard Shortcuts Panel
          // which is needed when only a single month is shown for instance.
          case 'ArrowUp':
          case 'ArrowDown':
            break;

          // completely block the rest of the keys that have functionality outside of this panel
          case 'Tab':
          case 'Home':
          case 'End':
          case 'PageUp':
          case 'PageDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            e.preventDefault();
            break;

          default:
            break;
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'onShowKeyboardShortcutsButtonClick',
    value: function () {
      function onShowKeyboardShortcutsButtonClick() {
        var _this2 = this;

        var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel;

        // we want to return focus to this button after closing the keyboard shortcuts panel

        openKeyboardShortcutsPanel(function () {
          _this2.showKeyboardShortcutsButton.focus();
        });
      }

      return onShowKeyboardShortcutsButtonClick;
    }()
  }, {
    key: 'setShowKeyboardShortcutsButtonRef',
    value: function () {
      function setShowKeyboardShortcutsButtonRef(ref) {
        this.showKeyboardShortcutsButton = ref;
      }

      return setShowKeyboardShortcutsButtonRef;
    }()
  }, {
    key: 'setHideKeyboardShortcutsButtonRef',
    value: function () {
      function setHideKeyboardShortcutsButtonRef(ref) {
        this.hideKeyboardShortcutsButton = ref;
      }

      return setHideKeyboardShortcutsButtonRef;
    }()
  }, {
    key: 'handleFocus',
    value: function () {
      function handleFocus() {
        if (this.hideKeyboardShortcutsButton) {
          // automatically move focus into the dialog by moving
          // to the only interactive element, the hide button
          this.hideKeyboardShortcutsButton.focus();
        }
      }

      return handleFocus;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this3 = this;

        var _props = this.props,
            block = _props.block,
            buttonLocation = _props.buttonLocation,
            showKeyboardShortcutsPanel = _props.showKeyboardShortcutsPanel,
            closeKeyboardShortcutsPanel = _props.closeKeyboardShortcutsPanel,
            styles = _props.styles,
            phrases = _props.phrases;


        var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;

        var bottomRight = buttonLocation === BOTTOM_RIGHT;
        var topRight = buttonLocation === TOP_RIGHT;
        var topLeft = buttonLocation === TOP_LEFT;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'button',
            _extends({
              ref: this.setShowKeyboardShortcutsButtonRef
            }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_show, bottomRight && styles.DayPickerKeyboardShortcuts_show__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_show__topRight, topLeft && styles.DayPickerKeyboardShortcuts_show__topLeft), {
              type: 'button',
              'aria-label': toggleButtonText,
              onClick: this.onShowKeyboardShortcutsButtonClick,
              onKeyDown: function () {
                function onKeyDown(e) {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  } else if (e.key === 'Space') {
                    _this3.onShowKeyboardShortcutsButtonClick(e);
                  }
                }

                return onKeyDown;
              }(),
              onMouseUp: function () {
                function onMouseUp(e) {
                  e.currentTarget.blur();
                }

                return onMouseUp;
              }()
            }),
            _react2['default'].createElement(
              'span',
              (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_showSpan, bottomRight && styles.DayPickerKeyboardShortcuts_showSpan__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_showSpan__topRight, topLeft && styles.DayPickerKeyboardShortcuts_showSpan__topLeft),
              '?'
            )
          ),
          showKeyboardShortcutsPanel && _react2['default'].createElement(
            'div',
            _extends({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_panel), {
              role: 'dialog',
              'aria-labelledby': 'DayPickerKeyboardShortcuts_title',
              'aria-describedby': 'DayPickerKeyboardShortcuts_description'
            }),
            _react2['default'].createElement(
              'div',
              _extends({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_title), {
                id: 'DayPickerKeyboardShortcuts_title'
              }),
              phrases.keyboardShortcuts
            ),
            _react2['default'].createElement(
              'button',
              _extends({
                ref: this.setHideKeyboardShortcutsButtonRef
              }, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_close), {
                type: 'button',
                tabIndex: '0',
                'aria-label': phrases.hideKeyboardShortcutsPanel,
                onClick: closeKeyboardShortcutsPanel,
                onKeyDown: this.onKeyDown
              }),
              _react2['default'].createElement(_CloseButton2['default'], (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_closeSvg))
            ),
            _react2['default'].createElement(
              'ul',
              _extends({}, (0, _reactWithStyles.css)(styles.DayPickerKeyboardShortcuts_list), {
                id: 'DayPickerKeyboardShortcuts_description'
              }),
              this.keyboardShortcuts.map(function (_ref2) {
                var unicode = _ref2.unicode,
                    label = _ref2.label,
                    action = _ref2.action;
                return _react2['default'].createElement(_KeyboardShortcutRow2['default'], {
                  key: label,
                  unicode: unicode,
                  label: label,
                  action: action,
                  block: block
                });
              })
            )
          )
        );
      }

      return render;
    }()
  }]);

  return DayPickerKeyboardShortcuts;
}(_react2['default'].Component);

DayPickerKeyboardShortcuts.propTypes = propTypes;
DayPickerKeyboardShortcuts.defaultProps = defaultProps;

exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var _ref3$reactDates = _ref3.reactDates,
      color = _ref3$reactDates.color,
      font = _ref3$reactDates.font,
      zIndex = _ref3$reactDates.zIndex;
  return {
    DayPickerKeyboardShortcuts_buttonReset: {
      background: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      padding: 0,
      cursor: 'pointer',
      fontSize: font.size,

      ':active': {
        outline: 'none'
      }
    },

    DayPickerKeyboardShortcuts_show: {
      width: 22,
      position: 'absolute',
      zIndex: zIndex + 2
    },

    DayPickerKeyboardShortcuts_show__bottomRight: {
      borderTop: '26px solid transparent',
      borderRight: '33px solid ' + String(color.core.primary),
      bottom: 0,
      right: 0,

      ':hover': {
        borderRight: '33px solid ' + String(color.core.primary_dark)
      }
    },

    DayPickerKeyboardShortcuts_show__topRight: {
      borderBottom: '26px solid transparent',
      borderRight: '33px solid ' + String(color.core.primary),
      top: 0,
      right: 0,

      ':hover': {
        borderRight: '33px solid ' + String(color.core.primary_dark)
      }
    },

    DayPickerKeyboardShortcuts_show__topLeft: {
      borderBottom: '26px solid transparent',
      borderLeft: '33px solid ' + String(color.core.primary),
      top: 0,
      left: 0,

      ':hover': {
        borderLeft: '33px solid ' + String(color.core.primary_dark)
      }
    },

    DayPickerKeyboardShortcuts_showSpan: {
      color: color.core.white,
      position: 'absolute'
    },

    DayPickerKeyboardShortcuts_showSpan__bottomRight: {
      bottom: 0,
      right: -28
    },

    DayPickerKeyboardShortcuts_showSpan__topRight: {
      top: 1,
      right: -28
    },

    DayPickerKeyboardShortcuts_showSpan__topLeft: {
      top: 1,
      left: -28
    },

    DayPickerKeyboardShortcuts_panel: {
      overflow: 'auto',
      background: color.background,
      border: '1px solid ' + String(color.core.border),
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: zIndex + 2,
      padding: 22,
      margin: 33
    },

    DayPickerKeyboardShortcuts_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 0
    },

    DayPickerKeyboardShortcuts_list: {
      listStyle: 'none',
      padding: 0,
      fontSize: font.size
    },

    DayPickerKeyboardShortcuts_close: {
      position: 'absolute',
      right: 22,
      top: 22,
      zIndex: zIndex + 2,

      ':active': {
        outline: 'none'
      }
    },

    DayPickerKeyboardShortcuts_closeSvg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter,

      ':hover': {
        fill: color.core.grayLight
      },

      ':focus': {
        fill: color.core.grayLight
      }
    }
  };
})(DayPickerKeyboardShortcuts);

/***/ }),

/***/ "10Kj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__("oNNP");

var predicates = {
	// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),

/***/ "16Al":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("WbBG");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "17x9":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("16Al")();
}


/***/ }),

/***/ "1CF3":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dom"]; }());

/***/ }),

/***/ "1KsK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "1P9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = __webpack_require__("Asd8");


/***/ }),

/***/ "1TsT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}




/***/ }),

/***/ "1ao6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $TypeError = GetIntrinsic('%TypeError%');

var IsPropertyKey = __webpack_require__("nR7C");
var Type = __webpack_require__("PoQ0");

// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};


/***/ }),

/***/ "1iEr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronRight);


/***/ }),

/***/ "1seS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("1KsK");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__("sYn3");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "22yB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("yN6O");

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};


/***/ }),

/***/ "25kQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("aUaa");


/***/ }),

/***/ "2Q00":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = CalendarWeek;

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _airbnbPropTypes = __webpack_require__("Hsqg");

var _CalendarDay = __webpack_require__("N3k4");

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _CustomizableCalendarDay = __webpack_require__("GET3");

var _CustomizableCalendarDay2 = _interopRequireDefault(_CustomizableCalendarDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: (0, _airbnbPropTypes.or)([(0, _airbnbPropTypes.childrenOfType)(_CalendarDay2['default']), (0, _airbnbPropTypes.childrenOfType)(_CustomizableCalendarDay2['default'])]).isRequired
});

function CalendarWeek(_ref) {
  var children = _ref.children;

  return _react2['default'].createElement(
    'tr',
    null,
    children
  );
}

CalendarWeek.propTypes = propTypes;

/***/ }),

/***/ "2S2E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__("Fv1B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _propTypes2['default'].oneOf(_constants.WEEKDAYS);

/***/ }),

/***/ "2gm7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronLeft);


/***/ }),

/***/ "2mql":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("TOwV");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "3HW2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = __webpack_require__("yyeE");

var ToIntegerOrInfinity = __webpack_require__("3iup");

module.exports = function ToLength(argument) {
	var len = ToIntegerOrInfinity(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};


/***/ }),

/***/ "3HjQ":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This function takes an array of styles and separates them into styles that
// are handled by Aphrodite and inline styles.
function separateStyles(stylesArray) {
  var classNames = [];

  // Since determining if an Object is empty requires collecting all of its
  // keys, and we want the best performance in this code because we are in the
  // render path, we are going to do a little bookkeeping ourselves.
  var hasInlineStyles = false;
  var inlineStyles = {};

  // This is run on potentially every node in the tree when rendering, where
  // performance is critical. Normally we would prefer using `forEach`, but
  // old-fashioned for loops are faster so that's what we have chosen here.
  for (var i = 0; i < stylesArray.length; i++) {
    // eslint-disable-line no-plusplus
    var style = stylesArray[i];

    // If this  style is falsy, we just want to disregard it. This allows for
    // syntax like:
    //
    //   css(isFoo && styles.foo)
    if (style) {
      if (typeof style === 'string') {
        classNames.push(style);
      } else {
        Object.assign(inlineStyles, style);
        hasInlineStyles = true;
      }
    }
  }

  return {
    classNames: classNames,
    hasInlineStyles: hasInlineStyles,
    inlineStyles: inlineStyles
  };
}

exports['default'] = separateStyles;

/***/ }),

/***/ "3gBW":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("50qU");


/***/ }),

/***/ "3iup":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5ToInteger = __webpack_require__("Wfh+");

var ToNumber = __webpack_require__("Rhcr");

// https://www.ecma-international.org/ecma-262/11.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if (number !== 0) {
		number = ES5ToInteger(number);
	}
	return number === 0 ? 0 : number;
};


/***/ }),

/***/ "4cSd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("82c2");
var callBind = __webpack_require__("PrET");

var implementation = __webpack_require__("rQy3");
var getPolyfill = __webpack_require__("xoj2");
var shim = __webpack_require__("ib7Q");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "4eJC":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),

/***/ "4po3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isTextField; });
/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 *
 * @example
 * import { isTextField } from "reakit-utils";
 *
 * isTextField(document.querySelector("div")); // false
 * isTextField(document.querySelector("input")); // true
 * isTextField(document.querySelector("input[type='button']")); // false
 * isTextField(document.querySelector("textarea")); // true
 * isTextField(document.querySelector("div[contenteditable='true']")); // true
 */
function isTextField(element) {
  try {
    var isTextInput = element instanceof HTMLInputElement && element.selectionStart !== null;
    var isTextArea = element.tagName === "TEXTAREA";
    var isContentEditable = element.contentEditable === "true";
    return isTextInput || isTextArea || isContentEditable || false;
  } catch (error) {
    // Safari throws an exception when trying to get `selectionStart`
    // on non-text <input> elements (which, understandably, don't
    // have the text selection API). We catch this via a try/catch
    // block, as opposed to a more explicit check of the element's
    // input types, because of Safari's non-standard behavior. This
    // also means we don't have to worry about the list of input
    // types that support `selectionStart` changing as the HTML spec
    // evolves over time.
    return false;
  }
}




/***/ }),

/***/ "4qvr":
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = __webpack_require__(0).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "50qU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__("Hsqg");

var _consolidatedEvents = __webpack_require__("1TsT");

var _object = __webpack_require__("4cSd");

var _object2 = _interopRequireDefault(_object);

var _document = __webpack_require__("n1Y7");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents'
};

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes2['default'].node.isRequired,
  onOutsideClick: _propTypes2['default'].func.isRequired,
  disabled: _propTypes2['default'].bool,
  useCapture: _propTypes2['default'].bool,
  display: _propTypes2['default'].oneOf((0, _object2['default'])(DISPLAY))
});

var defaultProps = {
  disabled: false,

  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

var OutsideClickHandler = function (_React$Component) {
  _inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler() {
    var _ref;

    _classCallCheck(this, OutsideClickHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref, [this].concat(args)));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.setChildNodeRef = _this.setChildNodeRef.bind(_this);
    return _this;
  }

  _createClass(OutsideClickHandler, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            disabled = _props.disabled,
            useCapture = _props.useCapture;


        if (!disabled) this.addMouseDownEventListener(useCapture);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(_ref2) {
        var prevDisabled = _ref2.disabled;
        var _props2 = this.props,
            disabled = _props2.disabled,
            useCapture = _props2.useCapture;

        if (prevDisabled !== disabled) {
          if (disabled) {
            this.removeEventListeners();
          } else {
            this.addMouseDownEventListener(useCapture);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.removeEventListeners();
      }

      return componentWillUnmount;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseDown',
    value: function () {
      function onMouseDown(e) {
        var useCapture = this.props.useCapture;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (!isDescendantOfRoot) {
          if (this.removeMouseUp) {
            this.removeMouseUp();
            this.removeMouseUp = null;
          }
          this.removeMouseUp = (0, _consolidatedEvents.addEventListener)(document, 'mouseup', this.onMouseUp, { capture: useCapture });
        }
      }

      return onMouseDown;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseUp',
    value: function () {
      function onMouseUp(e) {
        var onOutsideClick = this.props.onOutsideClick;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        if (!isDescendantOfRoot) {
          onOutsideClick(e);
        }
      }

      return onMouseUp;
    }()
  }, {
    key: 'setChildNodeRef',
    value: function () {
      function setChildNodeRef(ref) {
        this.childNode = ref;
      }

      return setChildNodeRef;
    }()
  }, {
    key: 'addMouseDownEventListener',
    value: function () {
      function addMouseDownEventListener(useCapture) {
        this.removeMouseDown = (0, _consolidatedEvents.addEventListener)(document, 'mousedown', this.onMouseDown, { capture: useCapture });
      }

      return addMouseDownEventListener;
    }()
  }, {
    key: 'removeEventListeners',
    value: function () {
      function removeEventListeners() {
        if (this.removeMouseDown) this.removeMouseDown();
        if (this.removeMouseUp) this.removeMouseUp();
      }

      return removeEventListeners;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            children = _props3.children,
            display = _props3.display;


        return _react2['default'].createElement(
          'div',
          {
            ref: this.setChildNodeRef,
            style: display !== DISPLAY.BLOCK && (0, _object2['default'])(DISPLAY).includes(display) ? { display: display } : undefined
          },
          children
        );
      }

      return render;
    }()
  }]);

  return OutsideClickHandler;
}(_react2['default'].Component);

exports['default'] = OutsideClickHandler;


OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

/***/ }),

/***/ "5V/u":
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'combineChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.combineChunks;
	  }
	});
	Object.defineProperty(exports, 'fillInChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.fillInChunks;
	  }
	});
	Object.defineProperty(exports, 'findAll', {
	  enumerable: true,
	  get: function get() {
	    return _utils.findAll;
	  }
	});
	Object.defineProperty(exports, 'findChunks', {
	  enumerable: true,
	  get: function get() {
	    return _utils.findChunks;
	  }
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	/**
	 * Creates an array of chunk objects representing both higlightable and non highlightable pieces of text that match each search word.
	 * @return Array of "chunks" (where a Chunk is { start:number, end:number, highlight:boolean })
	 */
	var findAll = exports.findAll = function findAll(_ref) {
	  var autoEscape = _ref.autoEscape,
	      _ref$caseSensitive = _ref.caseSensitive,
	      caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
	      _ref$findChunks = _ref.findChunks,
	      findChunks = _ref$findChunks === undefined ? defaultFindChunks : _ref$findChunks,
	      sanitize = _ref.sanitize,
	      searchWords = _ref.searchWords,
	      textToHighlight = _ref.textToHighlight;
	  return fillInChunks({
	    chunksToHighlight: combineChunks({
	      chunks: findChunks({
	        autoEscape: autoEscape,
	        caseSensitive: caseSensitive,
	        sanitize: sanitize,
	        searchWords: searchWords,
	        textToHighlight: textToHighlight
	      })
	    }),
	    totalLength: textToHighlight ? textToHighlight.length : 0
	  });
	};
	
	/**
	 * Takes an array of {start:number, end:number} objects and combines chunks that overlap into single chunks.
	 * @return {start:number, end:number}[]
	 */
	
	
	var combineChunks = exports.combineChunks = function combineChunks(_ref2) {
	  var chunks = _ref2.chunks;
	
	  chunks = chunks.sort(function (first, second) {
	    return first.start - second.start;
	  }).reduce(function (processedChunks, nextChunk) {
	    // First chunk just goes straight in the array...
	    if (processedChunks.length === 0) {
	      return [nextChunk];
	    } else {
	      // ... subsequent chunks get checked to see if they overlap...
	      var prevChunk = processedChunks.pop();
	      if (nextChunk.start <= prevChunk.end) {
	        // It may be the case that prevChunk completely surrounds nextChunk, so take the
	        // largest of the end indeces.
	        var endIndex = Math.max(prevChunk.end, nextChunk.end);
	        processedChunks.push({ highlight: false, start: prevChunk.start, end: endIndex });
	      } else {
	        processedChunks.push(prevChunk, nextChunk);
	      }
	      return processedChunks;
	    }
	  }, []);
	
	  return chunks;
	};
	
	/**
	 * Examine text for any matches.
	 * If we find matches, add them to the returned array as a "chunk" object ({start:number, end:number}).
	 * @return {start:number, end:number}[]
	 */
	var defaultFindChunks = function defaultFindChunks(_ref3) {
	  var autoEscape = _ref3.autoEscape,
	      caseSensitive = _ref3.caseSensitive,
	      _ref3$sanitize = _ref3.sanitize,
	      sanitize = _ref3$sanitize === undefined ? defaultSanitize : _ref3$sanitize,
	      searchWords = _ref3.searchWords,
	      textToHighlight = _ref3.textToHighlight;
	
	  textToHighlight = sanitize(textToHighlight);
	
	  return searchWords.filter(function (searchWord) {
	    return searchWord;
	  }) // Remove empty words
	  .reduce(function (chunks, searchWord) {
	    searchWord = sanitize(searchWord);
	
	    if (autoEscape) {
	      searchWord = escapeRegExpFn(searchWord);
	    }
	
	    var regex = new RegExp(searchWord, caseSensitive ? 'g' : 'gi');
	
	    var match = void 0;
	    while (match = regex.exec(textToHighlight)) {
	      var _start = match.index;
	      var _end = regex.lastIndex;
	      // We do not return zero-length matches
	      if (_end > _start) {
	        chunks.push({ highlight: false, start: _start, end: _end });
	      }
	
	      // Prevent browsers like Firefox from getting stuck in an infinite loop
	      // See http://www.regexguru.com/2008/04/watch-out-for-zero-length-matches/
	      if (match.index === regex.lastIndex) {
	        regex.lastIndex++;
	      }
	    }
	
	    return chunks;
	  }, []);
	};
	// Allow the findChunks to be overridden in findAll,
	// but for backwards compatibility we export as the old name
	exports.findChunks = defaultFindChunks;
	
	/**
	 * Given a set of chunks to highlight, create an additional set of chunks
	 * to represent the bits of text between the highlighted text.
	 * @param chunksToHighlight {start:number, end:number}[]
	 * @param totalLength number
	 * @return {start:number, end:number, highlight:boolean}[]
	 */
	
	var fillInChunks = exports.fillInChunks = function fillInChunks(_ref4) {
	  var chunksToHighlight = _ref4.chunksToHighlight,
	      totalLength = _ref4.totalLength;
	
	  var allChunks = [];
	  var append = function append(start, end, highlight) {
	    if (end - start > 0) {
	      allChunks.push({
	        start: start,
	        end: end,
	        highlight: highlight
	      });
	    }
	  };
	
	  if (chunksToHighlight.length === 0) {
	    append(0, totalLength, false);
	  } else {
	    var lastIndex = 0;
	    chunksToHighlight.forEach(function (chunk) {
	      append(lastIndex, chunk.start, false);
	      append(chunk.start, chunk.end, true);
	      lastIndex = chunk.end;
	    });
	    append(lastIndex, totalLength, false);
	  }
	  return allChunks;
	};
	
	function defaultSanitize(string) {
	  return string;
	}
	
	function escapeRegExpFn(string) {
	  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}

/***/ })
/******/ ]);


/***/ }),

/***/ "5aBA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden")}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;exports.ContextConsumer=h;exports.ContextProvider=z;exports.Element=A;exports.ForwardRef=B;exports.Fragment=C;exports.Lazy=D;exports.Memo=E;exports.Portal=F;exports.Profiler=G;exports.StrictMode=H;
exports.Suspense=I;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return y(a)===h};exports.isContextProvider=function(a){return y(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return y(a)===k};exports.isFragment=function(a){return y(a)===d};exports.isLazy=function(a){return y(a)===p};exports.isMemo=function(a){return y(a)===n};
exports.isPortal=function(a){return y(a)===c};exports.isProfiler=function(a){return y(a)===f};exports.isStrictMode=function(a){return y(a)===e};exports.isSuspense=function(a){return y(a)===l};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
exports.typeOf=y;


/***/ }),

/***/ "5yQQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("nRDI");

module.exports = function getPolyfill() {
	if (typeof document !== 'undefined') {
		if (document.contains) {
			return document.contains;
		}
		if (document.body && document.body.contains) {
			try {
				if (typeof document.body.contains.call(document, '') === 'boolean') {
					return document.body.contains;
				}
			} catch (e) { /**/ }
		}
	}
	return implementation;
};


/***/ }),

/***/ "6/BL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("oNNP");

var assertRecord = __webpack_require__("10Kj");

var Type = __webpack_require__("PoQ0");

// https://ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),

/***/ "60zJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://262.ecma-international.org/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),

/***/ "6Ehn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');

var IsIntegralNumber = __webpack_require__("J2ba");

var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;

var $setProto = GetIntrinsic('%Object.setPrototypeOf%', true) || (
	// eslint-disable-next-line no-proto, no-negated-condition
	[].__proto__ !== $ArrayPrototype
		? null
		: function (O, proto) {
			O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
			return O;
		}
);

// https://www.ecma-international.org/ecma-262/12.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!IsIntegralNumber(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 3, 5
	if (proto !== $ArrayPrototype) { // step 4
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 6
		A.length = length;
	}
	/* step 6, the above as a shortcut for the below
    OrdinaryDefineOwnProperty(A, 'length', {
        '[[Configurable]]': false,
        '[[Enumerable]]': false,
        '[[Value]]': length,
        '[[Writable]]': true
    });
    */
	return A;
};


/***/ }),

/***/ "6HWY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isNextMonth;

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _isSameMonth = __webpack_require__("ulUS");

var _isSameMonth2 = _interopRequireDefault(_isSameMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isNextMonth(a, b) {
  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
  return (0, _isSameMonth2['default'])(a.clone().add(1, 'month'), b);
}

/***/ }),

/***/ "6I5v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),

/***/ "6XE+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $gOPD = __webpack_require__("knm9");
var $TypeError = GetIntrinsic('%TypeError%');

var callBound = __webpack_require__("qeuH");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var has = __webpack_require__("oNNP");

var IsArray = __webpack_require__("Bl8U");
var IsPropertyKey = __webpack_require__("nR7C");
var IsRegExp = __webpack_require__("a73V");
var ToPropertyDescriptor = __webpack_require__("6orR");
var Type = __webpack_require__("PoQ0");

// https://ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty

module.exports = function OrdinaryGetOwnProperty(O, P) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!has(O, P)) {
		return void 0;
	}
	if (!$gOPD) {
		// ES3 / IE 8 fallback
		var arrayLength = IsArray(O) && P === 'length';
		var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
		return {
			'[[Configurable]]': !(arrayLength || regexLastIndex),
			'[[Enumerable]]': $isEnumerable(O, P),
			'[[Value]]': O[P],
			'[[Writable]]': true
		};
	}
	return ToPropertyDescriptor($gOPD(O, P));
};


/***/ }),

/***/ "6orR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("oNNP");

var GetIntrinsic = __webpack_require__("j1Hc");

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__("PoQ0");
var ToBoolean = __webpack_require__("e87w");
var IsCallable = __webpack_require__("1P9b");

// https://262.ecma-international.org/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new $TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),

/***/ "6zzY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export ComponentsContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useComponentsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextSystemProvider; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Z23Y");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



const ComponentsContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])(
/** @type {Record<string, any>} */
{});
const useComponentsContext = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ComponentsContext);
/**
 * Runs an effect only on update (i.e., ignores the first render)
 *
 * @param {import('react').EffectCallback} effect
 * @param {import('react').DependencyList} deps
 */

function useUpdateEffect(effect, deps) {
  const mounted = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (mounted.current) {
      return effect();
    }

    mounted.current = true;
    return undefined;
  }, deps);
}
/**
 * Consolidates incoming ContextSystem values with a (potential) parent ContextSystem value.
 *
 * Note: This function will warn if it detects an un-memoized `value`
 *
 * @param {Object}              props
 * @param {Record<string, any>} props.value
 * @return {Record<string, any>} The consolidated value.
 */


function useContextSystemBridge(_ref) {
  let {
    value
  } = _ref;
  const parentContext = useComponentsContext();
  const valueRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  useUpdateEffect(() => {
    if ( // objects are equivalent
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(valueRef.current, value) && // but not the same reference
    valueRef.current !== value) {
      typeof process !== "undefined" && process.env && "production" !== "production" ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_2___default()(`Please memoize your context: ${JSON.stringify(value)}`) : void 0;
    }
  }, [value]); // `parentContext` will always be memoized (i.e., the result of this hook itself)
  // or the default value from when the `ComponentsContext` was originally
  // initialized (which will never change, it's a static variable)
  // so this memoization will prevent `merge` and `cloneDeep` from rerunning unless
  // the references to `value` change OR the `parentContext` has an actual material change
  // (because again, it's guaranteed to be memoized or a static reference to the empty object
  // so we know that the only changes for `parentContext` are material ones... i.e., why we
  // don't have to warn in the `useUpdateEffect` hook above for `parentContext` and we only
  // need to bother with the `value`). The `useUpdateEffect` above will ensure that we are
  // correctly warning when the `value` isn't being properly memoized. All of that to say
  // that this should be super safe to assume that `useMemo` will only run on actual
  // changes to the two dependencies, therefore saving us calls to `merge` and `cloneDeep`!

  const config = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(parentContext), value);
  }, [parentContext, value]);
  return config;
}
/**
 * A Provider component that can modify props for connected components within
 * the Context system.
 *
 * @example
 * ```jsx
 * <ContextSystemProvider value={{ Button: { size: 'small' }}}>
 *   <Button>...</Button>
 * </ContextSystemProvider>
 * ```
 *
 * @template {Record<string, any>} T
 * @param {Object}                    options
 * @param {import('react').ReactNode} options.children Children to render.
 * @param {T}                         options.value    Props to render into connected components.
 * @return {JSX.Element} A Provider wrapped component.
 */


const BaseContextSystemProvider = _ref2 => {
  let {
    children,
    value
  } = _ref2;
  const contextValue = useContextSystemBridge({
    value
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ComponentsContext.Provider, {
    value: contextValue
  }, children);
};

const ContextSystemProvider = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["memo"])(BaseContextSystemProvider);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "71Og":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isButton; });
var buttonInputTypes = ["button", "color", "file", "image", "reset", "submit"];
/**
 * Checks whether `element` is a native HTML button element.
 *
 * @example
 * import { isButton } from "reakit-utils";
 *
 * isButton(document.querySelector("button")); // true
 * isButton(document.querySelector("input[type='button']")); // true
 * isButton(document.querySelector("div")); // false
 * isButton(document.querySelector("input[type='text']")); // false
 * isButton(document.querySelector("div[role='button']")); // false
 *
 * @returns {boolean}
 */

function isButton(element) {
  if (element.tagName === "BUTTON") return true;

  if (element.tagName === "INPUT") {
    var input = element;
    return buttonInputTypes.indexOf(input.type) !== -1;
  }

  return false;
}




/***/ }),

/***/ "75pU":
/***/ (function(module, exports) {

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3)
  var cacheKey = serializer(args)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null)
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
}

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value
}

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
}

//
// API
//

module.exports = memoize
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
}


/***/ }),

/***/ "7Cbv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = __webpack_exports__["a"] = (v4);

/***/ }),

/***/ "7Jlx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contextConnect; });
/* unused harmony export getConnectNamespace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasConnectNamespace; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Z23Y");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tQ+x");
/* harmony import */ var _get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UAm0");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/* eslint-disable jsdoc/valid-types */

/**
 * Forwards ref (React.ForwardRef) and "Connects" (or registers) a component
 * within the Context system under a specified namespace.
 *
 * This is an (experimental) evolution of the initial connect() HOC.
 * The hope is that we can improve render performance by removing functional
 * component wrappers.
 *
 * @template {import('./wordpress-component').WordPressComponentProps<{}, any, any>} P
 * @param {(props: P, ref: import('react').Ref<any>) => JSX.Element | null} Component            The component to register into the Context system.
 * @param {string}                                                          namespace            The namespace to register the component under.
 * @param {Object}                                                          options
 * @param {boolean}                                                         [options.memo=false]
 * @return {import('./wordpress-component').WordPressComponentFromProps<P>} The connected WordPressComponent
 */

function contextConnect(Component, namespace) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  /* eslint-enable jsdoc/valid-types */
  const {
    memo: memoProp = false
  } = options;
  let WrappedComponent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(Component);

  if (memoProp) {
    // @ts-ignore
    WrappedComponent = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["memo"])(WrappedComponent);
  }

  if (typeof namespace === 'undefined') {
    typeof process !== "undefined" && process.env && "production" !== "production" ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_2___default()('contextConnect: Please provide a namespace') : void 0;
  } // @ts-ignore internal property


  let mergedNamespace = WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECT_STATIC_NAMESPACE */ "c"]] || [namespace];
  /**
   * Consolidate (merge) namespaces before attaching it to the WrappedComponent.
   */

  if (Array.isArray(namespace)) {
    mergedNamespace = [...mergedNamespace, ...namespace];
  }

  if (typeof namespace === 'string') {
    mergedNamespace = [...mergedNamespace, namespace];
  }

  WrappedComponent.displayName = namespace; // @ts-ignore internal property

  WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECT_STATIC_NAMESPACE */ "c"]] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(mergedNamespace); // @ts-ignore WordPressComponent property

  WrappedComponent.selector = `.${Object(_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_4__[/* getStyledClassNameFromKey */ "a"])(namespace)}`; // @ts-ignore

  return WrappedComponent;
}
/**
 * Attempts to retrieve the connected namespace from a component.
 *
 * @param {import('react').ReactChild | undefined | {}} Component The component to retrieve a namespace from.
 * @return {Array<string>} The connected namespaces.
 */

function getConnectNamespace(Component) {
  if (!Component) return [];
  let namespaces = []; // @ts-ignore internal property

  if (Component[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECT_STATIC_NAMESPACE */ "c"]]) {
    // @ts-ignore internal property
    namespaces = Component[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECT_STATIC_NAMESPACE */ "c"]];
  } // @ts-ignore


  if (Component.type && Component.type[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECT_STATIC_NAMESPACE */ "c"]]) {
    // @ts-ignore
    namespaces = Component.type[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECT_STATIC_NAMESPACE */ "c"]];
  }

  return namespaces;
}
/**
 * Checks to see if a component is connected within the Context system.
 *
 * @param {import('react').ReactNode} Component The component to retrieve a namespace from.
 * @param {Array<string>|string}      match     The namespace to check.
 * @return {boolean} The result.
 */

function hasConnectNamespace(Component, match) {
  if (!Component) return false;

  if (typeof match === 'string') {
    return getConnectNamespace(Component).includes(match);
  }

  if (Array.isArray(match)) {
    return match.some(result => getConnectNamespace(Component).includes(result));
  }

  return false;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "7bKH":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
var o=function(o){var t=o/255;return t<.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},t=function(t){return.2126*o(t.r)+.7152*o(t.g)+.0722*o(t.b)};/* harmony default export */ __webpack_exports__["a"] = (function(o){o.prototype.luminance=function(){return o=t(this.rgba),void 0===(r=2)&&(r=0),void 0===n&&(n=Math.pow(10,r)),Math.round(n*o)/n+0;var o,r,n},o.prototype.contrast=function(r){void 0===r&&(r="#FFF");var n,a,i,e,v,u,d,c=r instanceof o?r:new o(r);return e=this.rgba,v=c.toRgb(),u=t(e),d=t(v),n=u>d?(u+.05)/(d+.05):(d+.05)/(u+.05),void 0===(a=2)&&(a=0),void 0===i&&(i=Math.pow(10,a)),Math.floor(i*n)/i+0},o.prototype.isReadable=function(o,t){return void 0===o&&(o="#FFF"),void 0===t&&(t={}),this.contrast(o)>=(e=void 0===(i=(r=t).size)?"normal":i,"AAA"===(a=void 0===(n=r.level)?"AA":n)&&"normal"===e?7:"AA"===a&&"large"===e?3:4.5);var r,n,a,i,e}});


/***/ }),

/***/ "82c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("1seS");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "8R9v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("82c2");
var getPolyfill = __webpack_require__("yLpt");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "8sMu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var modulo = require('./modulo');
var $floor = Math.floor;

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	return $floor(x);
};


/***/ }),

/***/ "9Do8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("zt9T");

/***/ }),

/***/ "9VDH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dashicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vUUf");


/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function Icon(_ref) {
  let {
    icon = null,
    size = 24,
    ...additionalProps
  } = _ref;

  if ('string' === typeof icon) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dashicon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      icon: icon
    }, additionalProps));
  }

  if (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(icon) && _dashicon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] === icon.type) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(icon, { ...additionalProps
    });
  }

  if ('function' === typeof icon) {
    if (icon.prototype instanceof _wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"]) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(icon, {
        size,
        ...additionalProps
      });
    }

    return icon({
      size,
      ...additionalProps
    });
  }

  if (icon && (icon.type === 'svg' || icon.type === _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__["SVG"])) {
    const appliedProps = {
      width: size,
      height: size,
      ...icon.props,
      ...additionalProps
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__["SVG"], appliedProps);
  }

  if (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["isValidElement"])(icon)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(icon, {
      // @ts-ignore Just forwarding the size prop along
      size,
      ...additionalProps
    });
  }

  return icon;
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

/***/ "9Zbq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matches; });
/**
 * Ponyfill for `Element.prototype.matches`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
function matches(element, selectors) {
  if ("matches" in element) {
    return element.matches(selectors);
  }

  if ("msMatchesSelector" in element) {
    return element.msMatchesSelector(selectors);
  }

  return element.webkitMatchesSelector(selectors);
}




/***/ }),

/***/ "9cOx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__("qeuH")('Object.prototype.toString');

// https://ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),

/***/ "9gmn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ChevronUp = function () {
  function ChevronUp(props) {
    return _react2['default'].createElement(
      'svg',
      props,
      _react2['default'].createElement('path', {
        d: 'M32.1 712.6l453.2-452.2c11-11 21-11 32 0l453.2 452.2c4 5 6 10 6 16 0 13-10 23-22 23-7 0-12-2-16-7L501.3 308.5 64.1 744.7c-4 5-9 7-15 7-7 0-12-2-17-7-9-11-9-21 0-32.1z'
      })
    );
  }

  return ChevronUp;
}();

ChevronUp.defaultProps = {
  viewBox: '0 0 1000 1000'
};
exports['default'] = ChevronUp;

/***/ }),

/***/ "9pTB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var define = __webpack_require__("82c2");
var isSymbol = __webpack_require__("/sVA");

var globalKey = '__ global cache key __';
/* istanbul ignore else */
// eslint-disable-next-line no-restricted-properties
if (typeof Symbol === 'function' && isSymbol(Symbol('foo')) && typeof Symbol['for'] === 'function') {
	// eslint-disable-next-line no-restricted-properties
	globalKey = Symbol['for'](globalKey);
}

var trueThunk = function () {
	return true;
};

var ensureCache = function ensureCache() {
	if (!global[globalKey]) {
		var properties = {};
		properties[globalKey] = {};
		var predicates = {};
		predicates[globalKey] = trueThunk;
		define(global, properties, predicates);
	}
	return global[globalKey];
};

var cache = ensureCache();

var isPrimitive = function isPrimitive(val) {
	return val === null || (typeof val !== 'object' && typeof val !== 'function');
};

var getPrimitiveKey = function getPrimitiveKey(val) {
	if (isSymbol(val)) {
		return Symbol.prototype.valueOf.call(val);
	}
	return typeof val + ' | ' + String(val);
};

var requirePrimitiveKey = function requirePrimitiveKey(val) {
	if (!isPrimitive(val)) {
		throw new TypeError('key must not be an object');
	}
};

var globalCache = {
	clear: function clear() {
		delete global[globalKey];
		cache = ensureCache();
	},

	'delete': function deleteKey(key) {
		requirePrimitiveKey(key);
		delete cache[getPrimitiveKey(key)];
		return !globalCache.has(key);
	},

	get: function get(key) {
		requirePrimitiveKey(key);
		return cache[getPrimitiveKey(key)];
	},

	has: function has(key) {
		requirePrimitiveKey(key);
		return getPrimitiveKey(key) in cache;
	},

	set: function set(key, value) {
		requirePrimitiveKey(key);
		var primitiveKey = getPrimitiveKey(key);
		var props = {};
		props[primitiveKey] = value;
		var predicates = {};
		predicates[primitiveKey] = trueThunk;
		define(cache, props, predicates);
		return globalCache.has(key);
	},

	setIfMissingThenGet: function setIfMissingThenGet(key, valueThunk) {
		if (globalCache.has(key)) {
			return globalCache.get(key);
		}
		var item = valueThunk();
		globalCache.set(key, item);
		return item;
	}
};

module.exports = globalCache;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "AClM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ensureFocus; });

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/getActiveElement.js
var getActiveElement = __webpack_require__("Nym8");

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/hasFocus.js



/**
 * Checks if `element` has focus. Elements that are referenced by
 * `aria-activedescendant` are also considered.
 *
 * @example
 * import { hasFocus } from "reakit-utils";
 *
 * hasFocus(document.getElementById("id"));
 */

function hasFocus(element) {
  var activeElement = Object(getActiveElement["a" /* getActiveElement */])(element);
  if (!activeElement) return false;
  if (activeElement === element) return true;
  var activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  return activeDescendant === element.id;
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/ensureFocus.js




/**
 * Ensures `element` will receive focus if it's not already.
 *
 * @example
 * import { ensureFocus } from "reakit-utils";
 *
 * ensureFocus(document.activeElement); // does nothing
 *
 * const element = document.querySelector("input");
 *
 * ensureFocus(element); // focuses element
 * ensureFocus(element, { preventScroll: true }); // focuses element preventing scroll jump
 *
 * function isActive(el) {
 *   return el.dataset.active === "true";
 * }
 *
 * ensureFocus(document.querySelector("[data-active='true']"), { isActive }); // does nothing
 *
 * @returns {number} `requestAnimationFrame` call ID so it can be passed to `cancelAnimationFrame` if needed.
 */
function ensureFocus(element, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      preventScroll = _ref.preventScroll,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? hasFocus : _ref$isActive;

  if (isActive(element)) return -1;
  element.focus({
    preventScroll: preventScroll
  });
  if (isActive(element)) return -1;
  return requestAnimationFrame(function () {
    element.focus({
      preventScroll: preventScroll
    });
  });
}




/***/ }),

/***/ "AM7I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	AggregateError,
	Atomics,
	FinalizationRegistry,
	SharedArrayBuffer,
	WeakRef,
*/

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__("UVaH")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var asyncGenFunction = getEvalledConstructor('async function* () {}');
var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
	'%AsyncGenerator%': asyncGenFunctionPrototype,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__("D3zA");
var hasOwn = __webpack_require__("oNNP");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "AP2z":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "APjL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closest; });
/* harmony import */ var _matches_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Zbq");


/**
 * Ponyfill for `Element.prototype.closest`
 *
 * @example
 * import { closest } from "reakit-utils";
 *
 * closest(document.getElementById("id"), "div");
 * // same as
 * document.getElementById("id").closest("div");
 */
function closest(element, selectors) {
  if ("closest" in element) return element.closest(selectors);

  do {
    if (Object(_matches_js__WEBPACK_IMPORTED_MODULE_0__[/* matches */ "a"])(element, selectors)) return element;
    element = element.parentElement || element.parentNode;
  } while (element !== null && element.nodeType === 1);

  return null;
}




/***/ }),

/***/ "AXvK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsomorphicEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _canUseDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+ipW");





/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side
 * rendering.
 */

var useIsomorphicEffect = !_canUseDOM_js__WEBPACK_IMPORTED_MODULE_1__[/* canUseDOM */ "a"] ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];




/***/ }),

/***/ "Ae65":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getCalendarDaySettings;

var _getPhrase = __webpack_require__("oOcr");

var _getPhrase2 = _interopRequireDefault(_getPhrase);

var _constants = __webpack_require__("Fv1B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getCalendarDaySettings(day, ariaLabelFormat, daySize, modifiers, phrases) {
  var chooseAvailableDate = phrases.chooseAvailableDate,
      dateIsUnavailable = phrases.dateIsUnavailable,
      dateIsSelected = phrases.dateIsSelected;


  var daySizeStyles = {
    width: daySize,
    height: daySize - 1
  };

  var useDefaultCursor = modifiers.has('blocked-minimum-nights') || modifiers.has('blocked-calendar') || modifiers.has('blocked-out-of-range');

  var selected = modifiers.has('selected') || modifiers.has('selected-start') || modifiers.has('selected-end');

  var hoveredSpan = !selected && (modifiers.has('hovered-span') || modifiers.has('after-hovered-start'));

  var isOutsideRange = modifiers.has('blocked-out-of-range');

  var formattedDate = { date: day.format(ariaLabelFormat) };

  var ariaLabel = (0, _getPhrase2['default'])(chooseAvailableDate, formattedDate);
  if (modifiers.has(_constants.BLOCKED_MODIFIER)) {
    ariaLabel = (0, _getPhrase2['default'])(dateIsUnavailable, formattedDate);
  } else if (selected) {
    ariaLabel = (0, _getPhrase2['default'])(dateIsSelected, formattedDate);
  }

  return {
    daySizeStyles: daySizeStyles,
    useDefaultCursor: useDefaultCursor,
    selected: selected,
    hoveredSpan: hoveredSpan,
    isOutsideRange: isOutsideRange,
    ariaLabel: ariaLabel
  };
}

/***/ }),

/***/ "AeFk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClassNames */
/* unused harmony export Global */
/* unused harmony export createElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return css; });
/* unused harmony export jsx */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keyframes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+1VY");
/* harmony import */ var _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ek6p");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gRFL");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2mql");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eVQB");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Exhd");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ep+1");












var pkg = {
	name: "@emotion/react",
	version: "11.7.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.7.1",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.1.0",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.7.1",
		"@emotion/css-prettifier": "1.0.1",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.6.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* h */ "f"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* E */ "b"];
  createElementArgArray[1] = Object(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* c */ "e"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */Object(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* w */ "g"])(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__[/* serializeStyles */ "a"])([styles], undefined, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* T */ "c"]));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_8__[/* StyleSheet */ "a"]({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_6__[/* insertStyles */ "b"])(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__[/* serializeStyles */ "a"])(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_6__[/* getRegisteredStyles */ "a"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Noop = function Noop() {
  return null;
};

var ClassNames = /* #__PURE__ */Object(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* w */ "g"])(function (props, cache) {
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__[/* serializeStyles */ "a"])(args, cache.registered);

    {
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_6__[/* insertStyles */ "b"])(cache, serialized, false);
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__[/* T */ "c"])
  };
  var ele = props.children(content);
  hasRendered = true;
  var possiblyStyleElement = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Noop, null);


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, possiblyStyleElement, ele);
});

if (false) {}

if (false) { var globalKey, globalContext, isJest, isBrowser; }




/***/ }),

/***/ "Asd8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
/* globals document: false */
var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};

module.exports = reflectApply
	? function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),

/***/ "B6Q+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__("qGip");

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ "BZp5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _createForOfIteratorHelperLoose; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}




/***/ }),

/***/ "BeK9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),

/***/ "Bl8U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && __webpack_require__("qeuH")('Object.prototype.toString');

// https://ecma-international.org/ecma-262/6.0/#sec-isarray

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};


/***/ }),

/***/ "Bpkj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (link);


/***/ }),

/***/ "C6yU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useContextSystem; });
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Z23Y");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_system_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6zzY");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ohaz");
/* harmony import */ var _get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UAm0");
/* harmony import */ var _utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h9+V");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * @template TProps
 * @typedef {TProps & { className: string }} ConnectedProps
 */

/**
 * Custom hook that derives registered props from the Context system.
 * These derived props are then consolidated with incoming component props.
 *
 * @template {{ className?: string }} P
 * @param {P}      props     Incoming props from the component.
 * @param {string} namespace The namespace to register and to derive context props from.
 * @return {ConnectedProps<P>} The connected props.
 */

function useContextSystem(props, namespace) {
  const contextSystemProps = Object(_context_system_provider__WEBPACK_IMPORTED_MODULE_1__[/* useComponentsContext */ "b"])();

  if (typeof namespace === 'undefined') {
    typeof process !== "undefined" && process.env && "production" !== "production" ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_0___default()('useContextSystem: Please provide a namespace') : void 0;
  }

  const contextProps = (contextSystemProps === null || contextSystemProps === void 0 ? void 0 : contextSystemProps[namespace]) || {};
  /* eslint-disable jsdoc/no-undefined-types */

  /** @type {ConnectedProps<P>} */
  // @ts-ignore We fill in the missing properties below

  const finalComponentProps = { ...Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getConnectedNamespace */ "a"])(),
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* getNamespace */ "b"])(namespace)
  };
  /* eslint-enable jsdoc/no-undefined-types */

  const {
    _overrides: overrideProps,
    ...otherContextProps
  } = contextProps;
  const initialMergedProps = Object.entries(otherContextProps).length ? Object.assign({}, otherContextProps, props) : props;
  const cx = Object(_utils_hooks_use_cx__WEBPACK_IMPORTED_MODULE_4__[/* useCx */ "a"])();
  const classes = cx(Object(_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__[/* getStyledClassNameFromKey */ "a"])(namespace), props.className); // Provides the ability to customize the render of the component.

  const rendered = typeof initialMergedProps.renderChildren === 'function' ? initialMergedProps.renderChildren(initialMergedProps) : initialMergedProps.children;

  for (const key in initialMergedProps) {
    // @ts-ignore filling in missing props
    finalComponentProps[key] = initialMergedProps[key];
  }

  for (const key in overrideProps) {
    // @ts-ignore filling in missing props
    finalComponentProps[key] = overrideProps[key];
  } // @ts-ignore


  finalComponentProps.children = rendered;
  finalComponentProps.className = classes;
  return finalComponentProps;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "Cw+6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */

/** @typedef {string | { display: string, ariaLabel: string }} Shortcut */

/**
 * @typedef Props
 * @property {Shortcut} shortcut    Shortcut configuration
 * @property {string}   [className] Classname
 */

/**
 * @param {Props} props Props
 * @return {JSX.Element | null} Element
 */

function Shortcut(_ref) {
  let {
    shortcut,
    className
  } = _ref;

  if (!shortcut) {
    return null;
  }

  let displayText;
  let ariaLabel;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isString"])(shortcut)) {
    displayText = shortcut;
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isObject"])(shortcut)) {
    displayText = shortcut.display;
    ariaLabel = shortcut.ariaLabel;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: className,
    "aria-label": ariaLabel
  }, displayText);
}

/* harmony default export */ __webpack_exports__["a"] = (Shortcut);


/***/ }),

/***/ "Cx2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__("WZeS");

// https://ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};


/***/ }),

/***/ "D3zA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("aI7X");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "DHWS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ChevronDown = function () {
  function ChevronDown(props) {
    return _react2['default'].createElement(
      'svg',
      props,
      _react2['default'].createElement('path', {
        d: 'M967.5 288.5L514.3 740.7c-11 11-21 11-32 0L29.1 288.5c-4-5-6-11-6-16 0-13 10-23 23-23 6 0 11 2 15 7l437.2 436.2 437.2-436.2c4-5 9-7 16-7 6 0 11 2 16 7 9 10.9 9 21 0 32z'
      })
    );
  }

  return ChevronDown;
}();

ChevronDown.defaultProps = {
  viewBox: '0 0 1000 1000'
};
exports['default'] = ChevronDown;

/***/ }),

/***/ "DZdY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
var emotion_memoize_browser_esm = __webpack_require__("SVgp");

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */Object(emotion_memoize_browser_esm["a" /* default */])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var emotion_is_prop_valid_browser_esm = (isPropValid);

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js
var emotion_element_699e6908_browser_esm = __webpack_require__("ek6p");

// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var emotion_utils_browser_esm = __webpack_require__("eVQB");

// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js + 2 modules
var emotion_serialize_browser_esm = __webpack_require__("Exhd");

// CONCATENATED MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js







var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var Noop = function Noop() {
  return null;
};

var emotion_styled_base_browser_esm_createStyled = function createStyled(tag, options) {
  if (false) {}

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(emotion_element_699e6908_browser_esm["g" /* w */])(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = Object(external_React_["useContext"])(emotion_element_699e6908_browser_esm["c" /* T */]);
      }

      if (typeof props.className === 'string') {
        className = Object(emotion_utils_browser_esm["a" /* getRegisteredStyles */])(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = Object(emotion_serialize_browser_esm["a" /* serializeStyles */])(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = Object(emotion_utils_browser_esm["b" /* insertStyles */])(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/Object(external_React_["createElement"])(finalTag, newProps);
      var possiblyStyleElement = /*#__PURE__*/Object(external_React_["createElement"])(Noop, null);


      return /*#__PURE__*/Object(external_React_["createElement"])(external_React_["Fragment"], null, possiblyStyleElement, ele);
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, Object(esm_extends["a" /* default */])({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ var emotion_styled_base_browser_esm = __webpack_exports__["a"] = (emotion_styled_base_browser_esm_createStyled);


/***/ }),

/***/ "DciD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function noop() {
  return null;
}

noop.isRequired = noop;

function noopThunk() {
  return noop;
}

module.exports = {
  and: noopThunk,
  between: noopThunk,
  booleanSome: noopThunk,
  childrenHavePropXorChildren: noopThunk,
  childrenOf: noopThunk,
  childrenOfType: noopThunk,
  childrenSequenceOf: noopThunk,
  componentWithName: noopThunk,
  disallowedIf: noopThunk,
  elementType: noopThunk,
  empty: noopThunk,
  explicitNull: noopThunk,
  forbidExtraProps: Object,
  integer: noopThunk,
  keysOf: noopThunk,
  mutuallyExclusiveProps: noopThunk,
  mutuallyExclusiveTrueProps: noopThunk,
  nChildren: noopThunk,
  nonNegativeInteger: noop,
  nonNegativeNumber: noopThunk,
  numericString: noopThunk,
  object: noopThunk,
  or: noopThunk,
  predicate: noopThunk,
  range: noopThunk,
  ref: noopThunk,
  requiredBy: noopThunk,
  restrictedProp: noopThunk,
  sequenceOf: noopThunk,
  shape: noopThunk,
  stringEndsWith: noopThunk,
  stringStartsWith: noopThunk,
  uniqueArray: noopThunk,
  uniqueArrayOf: noopThunk,
  valuesOf: noopThunk,
  withShape: noopThunk
};


/***/ }),

/***/ "DmXP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "DzJC":
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__("sEfC"),
    isObject = __webpack_require__("GoyQ");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "ExA7":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "Exhd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ emotion_serialize_browser_esm_serializeStyles; });

// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_browser_esm = (murmur2);

// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ var unitless_browser_esm = (unitlessKeys);

// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
var emotion_memoize_browser_esm = __webpack_require__("SVgp");

// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */Object(emotion_memoize_browser_esm["a" /* default */])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var emotion_serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + emotion_serialize_browser_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + emotion_serialize_browser_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var emotion_serialize_browser_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "F7ZS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getCalendarMonthWeeks;

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _constants = __webpack_require__("Fv1B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getCalendarMonthWeeks(month, enableOutsideDays) {
  var firstDayOfWeek = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _moment2['default'].localeData().firstDayOfWeek();

  if (!_moment2['default'].isMoment(month) || !month.isValid()) {
    throw new TypeError('`month` must be a valid moment object');
  }
  if (_constants.WEEKDAYS.indexOf(firstDayOfWeek) === -1) {
    throw new TypeError('`firstDayOfWeek` must be an integer between 0 and 6');
  }

  // set utc offset to get correct dates in future (when timezone changes)
  var firstOfMonth = month.clone().startOf('month').hour(12);
  var lastOfMonth = month.clone().endOf('month').hour(12);

  // calculate the exact first and last days to fill the entire matrix
  // (considering days outside month)
  var prevDays = (firstOfMonth.day() + 7 - firstDayOfWeek) % 7;
  var nextDays = (firstDayOfWeek + 6 - lastOfMonth.day()) % 7;
  var firstDay = firstOfMonth.clone().subtract(prevDays, 'day');
  var lastDay = lastOfMonth.clone().add(nextDays, 'day');

  var totalDays = lastDay.diff(firstDay, 'days') + 1;

  var currentDay = firstDay.clone();
  var weeksInMonth = [];

  for (var i = 0; i < totalDays; i += 1) {
    if (i % 7 === 0) {
      weeksInMonth.push([]);
    }

    var day = null;
    if (i >= prevDays && i < totalDays - nextDays || enableOutsideDays) {
      day = currentDay.clone();
    }

    weeksInMonth[weeksInMonth.length - 1].push(day);

    currentDay.add(1, 'day');
  }

  return weeksInMonth;
}

/***/ }),

/***/ "FpZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "FqII":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "FufO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("1seS");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("FpZJ")();
var callBound = __webpack_require__("VF6F");
var toObject = Object;
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if ($propIsEnumerable(source, key)) {
					$push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if ($propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "Fv1B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DISPLAY_FORMAT = exports.DISPLAY_FORMAT = 'L';
var ISO_FORMAT = exports.ISO_FORMAT = 'YYYY-MM-DD';
var ISO_MONTH_FORMAT = exports.ISO_MONTH_FORMAT = 'YYYY-MM';

var START_DATE = exports.START_DATE = 'startDate';
var END_DATE = exports.END_DATE = 'endDate';

var HORIZONTAL_ORIENTATION = exports.HORIZONTAL_ORIENTATION = 'horizontal';
var VERTICAL_ORIENTATION = exports.VERTICAL_ORIENTATION = 'vertical';
var VERTICAL_SCROLLABLE = exports.VERTICAL_SCROLLABLE = 'verticalScrollable';

var ICON_BEFORE_POSITION = exports.ICON_BEFORE_POSITION = 'before';
var ICON_AFTER_POSITION = exports.ICON_AFTER_POSITION = 'after';

var INFO_POSITION_TOP = exports.INFO_POSITION_TOP = 'top';
var INFO_POSITION_BOTTOM = exports.INFO_POSITION_BOTTOM = 'bottom';
var INFO_POSITION_BEFORE = exports.INFO_POSITION_BEFORE = 'before';
var INFO_POSITION_AFTER = exports.INFO_POSITION_AFTER = 'after';

var ANCHOR_LEFT = exports.ANCHOR_LEFT = 'left';
var ANCHOR_RIGHT = exports.ANCHOR_RIGHT = 'right';

var OPEN_DOWN = exports.OPEN_DOWN = 'down';
var OPEN_UP = exports.OPEN_UP = 'up';

var DAY_SIZE = exports.DAY_SIZE = 39;
var BLOCKED_MODIFIER = exports.BLOCKED_MODIFIER = 'blocked';
var WEEKDAYS = exports.WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

var FANG_WIDTH_PX = exports.FANG_WIDTH_PX = 20;
var FANG_HEIGHT_PX = exports.FANG_HEIGHT_PX = 10;
var DEFAULT_VERTICAL_SPACING = exports.DEFAULT_VERTICAL_SPACING = 22;

var MODIFIER_KEY_NAMES = exports.MODIFIER_KEY_NAMES = new Set(['Shift', 'Control', 'Alt', 'Meta']);

/***/ }),

/***/ "G3V0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tabbable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTabbable; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BZp5");
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hE48");
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qdes");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aU41");
/* harmony import */ var reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("71Og");
/* harmony import */ var reakit_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KA1K");
/* harmony import */ var reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("eNtd");
/* harmony import */ var reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("AXvK");
/* harmony import */ var reakit_utils_hasFocusWithin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("PcHe");
/* harmony import */ var reakit_utils_isPortalEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Vq1w");
/* harmony import */ var reakit_utils_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("reMF");
/* harmony import */ var reakit_utils_tabbable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("kqkJ");
/* harmony import */ var _Role_Role_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("zGFp");
















// Automatically generated
var TABBABLE_KEYS = ["disabled", "focusable"];

var isSafariOrFirefoxOnMac = Object(reakit_utils_dom__WEBPACK_IMPORTED_MODULE_11__[/* isUA */ "a"])("Mac") && !Object(reakit_utils_dom__WEBPACK_IMPORTED_MODULE_11__[/* isUA */ "a"])("Chrome") && (Object(reakit_utils_dom__WEBPACK_IMPORTED_MODULE_11__[/* isUA */ "a"])("Safari") || Object(reakit_utils_dom__WEBPACK_IMPORTED_MODULE_11__[/* isUA */ "a"])("Firefox"));

function focusIfNeeded(element) {
  if (!Object(reakit_utils_hasFocusWithin__WEBPACK_IMPORTED_MODULE_9__[/* hasFocusWithin */ "a"])(element) && Object(reakit_utils_tabbable__WEBPACK_IMPORTED_MODULE_12__[/* isFocusable */ "c"])(element)) {
    element.focus();
  }
}

function isNativeTabbable(element) {
  return ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"].includes(element.tagName);
}

function supportsDisabledAttribute(element) {
  return ["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(element.tagName);
}

function getTabIndex(trulyDisabled, nativeTabbable, supportsDisabled, htmlTabIndex) {
  if (trulyDisabled) {
    if (nativeTabbable && !supportsDisabled) {
      // Anchor, audio and video tags don't support the `disabled` attribute.
      // We must pass tabIndex={-1} so they don't receive focus on tab.
      return -1;
    } // Elements that support the `disabled` attribute don't need tabIndex.


    return undefined;
  }

  if (nativeTabbable) {
    // If the element is enabled and it's natively tabbable, we don't need to
    // specify a tabIndex attribute unless it's explicitly set by the user.
    return htmlTabIndex;
  } // If the element is enabled and is not natively tabbable, we have to
  // fallback tabIndex={0}.


  return htmlTabIndex || 0;
}

function useDisableEvent(htmlEventRef, disabled) {
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    var _htmlEventRef$current;

    (_htmlEventRef$current = htmlEventRef.current) === null || _htmlEventRef$current === void 0 ? void 0 : _htmlEventRef$current.call(htmlEventRef, event);
    if (event.defaultPrevented) return;

    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, [htmlEventRef, disabled]);
}

var useTabbable = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "Tabbable",
  compose: _Role_Role_js__WEBPACK_IMPORTED_MODULE_13__[/* useRole */ "a"],
  keys: TABBABLE_KEYS,
  useOptions: function useOptions(options, _ref) {
    var disabled = _ref.disabled;
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      disabled: disabled
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlRef = _ref2.ref,
        htmlTabIndex = _ref2.tabIndex,
        htmlOnClickCapture = _ref2.onClickCapture,
        htmlOnMouseDownCapture = _ref2.onMouseDownCapture,
        htmlOnMouseDown = _ref2.onMouseDown,
        htmlOnKeyPressCapture = _ref2.onKeyPressCapture,
        htmlStyle = _ref2.style,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref2, ["ref", "tabIndex", "onClickCapture", "onMouseDownCapture", "onMouseDown", "onKeyPressCapture", "style"]);

    var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    var onClickCaptureRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlOnClickCapture);
    var onMouseDownCaptureRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlOnMouseDownCapture);
    var onMouseDownRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlOnMouseDown);
    var onKeyPressCaptureRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__[/* useLiveRef */ "a"])(htmlOnKeyPressCapture);
    var trulyDisabled = !!options.disabled && !options.focusable;

    var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
        nativeTabbable = _React$useState[0],
        setNativeTabbable = _React$useState[1];

    var _React$useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
        supportsDisabled = _React$useState2[0],
        setSupportsDisabled = _React$useState2[1];

    var style = options.disabled ? Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      pointerEvents: "none"
    }, htmlStyle) : htmlStyle;
    Object(reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_8__[/* useIsomorphicEffect */ "a"])(function () {
      var tabbable = ref.current;

      if (!tabbable) {
         false ? undefined : void 0;
        return;
      }

      if (!isNativeTabbable(tabbable)) {
        setNativeTabbable(false);
      }

      if (!supportsDisabledAttribute(tabbable)) {
        setSupportsDisabled(false);
      }
    }, []);
    var onClickCapture = useDisableEvent(onClickCaptureRef, options.disabled);
    var onMouseDownCapture = useDisableEvent(onMouseDownCaptureRef, options.disabled);
    var onKeyPressCapture = useDisableEvent(onKeyPressCaptureRef, options.disabled);
    var onMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onMouseDownRef$curre;

      (_onMouseDownRef$curre = onMouseDownRef.current) === null || _onMouseDownRef$curre === void 0 ? void 0 : _onMouseDownRef$curre.call(onMouseDownRef, event);
      var element = event.currentTarget;
      if (event.defaultPrevented) return; // Safari and Firefox on MacOS don't focus on buttons on mouse down
      // like other browsers/platforms. Instead, they focus on the closest
      // focusable ancestor element, which is ultimately the body element. So
      // we make sure to give focus to the tabbable element on mouse down so
      // it works consistently across browsers.

      if (!isSafariOrFirefoxOnMac) return;
      if (Object(reakit_utils_isPortalEvent__WEBPACK_IMPORTED_MODULE_10__[/* isPortalEvent */ "a"])(event)) return;
      if (!Object(reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_5__[/* isButton */ "a"])(element)) return; // We can't focus right away after on mouse down, otherwise it would
      // prevent drag events from happening. So we schedule the focus to the
      // next animation frame.

      var raf = requestAnimationFrame(function () {
        element.removeEventListener("mouseup", focusImmediately, true);
        focusIfNeeded(element);
      }); // If mouseUp happens before the next animation frame (which is common
      // on touch screens or by just tapping the trackpad on MacBook's), we
      // cancel the animation frame and immediately focus on the element.

      var focusImmediately = function focusImmediately() {
        cancelAnimationFrame(raf);
        focusIfNeeded(element);
      }; // By listening to the event in the capture phase, we make sure the
      // focus event is fired before the onMouseUp and onMouseUpCapture React
      // events, which is aligned with the default browser behavior.


      element.addEventListener("mouseup", focusImmediately, {
        once: true,
        capture: true
      });
    }, []);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      ref: Object(reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__[/* useForkRef */ "a"])(ref, htmlRef),
      style: style,
      tabIndex: getTabIndex(trulyDisabled, nativeTabbable, supportsDisabled, htmlTabIndex),
      disabled: trulyDisabled && supportsDisabled ? true : undefined,
      "aria-disabled": options.disabled ? true : undefined,
      onClickCapture: onClickCapture,
      onMouseDownCapture: onMouseDownCapture,
      onMouseDown: onMouseDown,
      onKeyPressCapture: onKeyPressCapture
    }, htmlProps);
  }
});
var Tabbable = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "div",
  useHook: useTabbable
});




/***/ }),

/***/ "GET3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureCustomizableCalendarDay = exports.selectedStyles = exports.lastInRangeStyles = exports.selectedSpanStyles = exports.hoveredSpanStyles = exports.blockedOutOfRangeStyles = exports.blockedCalendarStyles = exports.blockedMinNightsStyles = exports.highlightedCalendarStyles = exports.outsideStyles = exports.defaultStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = __webpack_require__("Koq/");

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = __webpack_require__("YZDV");

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = __webpack_require__("XGBb");

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__("Hsqg");

var _reactWithStyles = __webpack_require__("TG4+");

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _defaultPhrases = __webpack_require__("vV+G");

var _getPhrasePropTypes = __webpack_require__("yc2e");

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _getCalendarDaySettings = __webpack_require__("Ae65");

var _getCalendarDaySettings2 = _interopRequireDefault(_getCalendarDaySettings);

var _constants = __webpack_require__("Fv1B");

var _DefaultTheme = __webpack_require__("xOhs");

var _DefaultTheme2 = _interopRequireDefault(_DefaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = _DefaultTheme2['default'].reactDates.color;


function getStyles(stylesObj, isHovered) {
  if (!stylesObj) return null;

  var hover = stylesObj.hover;

  if (isHovered && hover) {
    return hover;
  }

  return stylesObj;
}

var DayStyleShape = _propTypes2['default'].shape({
  background: _propTypes2['default'].string,
  border: (0, _airbnbPropTypes.or)([_propTypes2['default'].string, _propTypes2['default'].number]),
  color: _propTypes2['default'].string,

  hover: _propTypes2['default'].shape({
    background: _propTypes2['default'].string,
    border: (0, _airbnbPropTypes.or)([_propTypes2['default'].string, _propTypes2['default'].number]),
    color: _propTypes2['default'].string
  })
});

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  day: _reactMomentProptypes2['default'].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes2['default'].bool,
  modifiers: _propTypes2['default'].instanceOf(Set),
  isFocused: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].oneOf([0, -1]),
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  renderDayContents: _propTypes2['default'].func,
  ariaLabelFormat: _propTypes2['default'].string,

  // style overrides
  defaultStyles: DayStyleShape,
  outsideStyles: DayStyleShape,
  todayStyles: DayStyleShape,
  firstDayOfWeekStyles: DayStyleShape,
  lastDayOfWeekStyles: DayStyleShape,
  highlightedCalendarStyles: DayStyleShape,
  blockedMinNightsStyles: DayStyleShape,
  blockedCalendarStyles: DayStyleShape,
  blockedOutOfRangeStyles: DayStyleShape,
  hoveredSpanStyles: DayStyleShape,
  selectedSpanStyles: DayStyleShape,
  lastInRangeStyles: DayStyleShape,
  selectedStyles: DayStyleShape,
  selectedStartStyles: DayStyleShape,
  selectedEndStyles: DayStyleShape,
  afterHoveredStartStyles: DayStyleShape,

  // internationalization
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
}));

var defaultStyles = exports.defaultStyles = {
  border: '1px solid ' + String(color.core.borderLight),
  color: color.text,
  background: color.background,

  hover: {
    background: color.core.borderLight,
    border: '1px double ' + String(color.core.borderLight),
    color: 'inherit'
  }
};

var outsideStyles = exports.outsideStyles = {
  background: color.outside.backgroundColor,
  border: 0,
  color: color.outside.color
};

var highlightedCalendarStyles = exports.highlightedCalendarStyles = {
  background: color.highlighted.backgroundColor,
  color: color.highlighted.color,

  hover: {
    background: color.highlighted.backgroundColor_hover,
    color: color.highlighted.color_active
  }
};

var blockedMinNightsStyles = exports.blockedMinNightsStyles = {
  background: color.minimumNights.backgroundColor,
  border: '1px solid ' + String(color.minimumNights.borderColor),
  color: color.minimumNights.color,

  hover: {
    background: color.minimumNights.backgroundColor_hover,
    color: color.minimumNights.color_active
  }
};

var blockedCalendarStyles = exports.blockedCalendarStyles = {
  background: color.blocked_calendar.backgroundColor,
  border: '1px solid ' + String(color.blocked_calendar.borderColor),
  color: color.blocked_calendar.color,

  hover: {
    background: color.blocked_calendar.backgroundColor_hover,
    border: '1px solid ' + String(color.blocked_calendar.borderColor),
    color: color.blocked_calendar.color_active
  }
};

var blockedOutOfRangeStyles = exports.blockedOutOfRangeStyles = {
  background: color.blocked_out_of_range.backgroundColor,
  border: '1px solid ' + String(color.blocked_out_of_range.borderColor),
  color: color.blocked_out_of_range.color,

  hover: {
    background: color.blocked_out_of_range.backgroundColor_hover,
    border: '1px solid ' + String(color.blocked_out_of_range.borderColor),
    color: color.blocked_out_of_range.color_active
  }
};

var hoveredSpanStyles = exports.hoveredSpanStyles = {
  background: color.hoveredSpan.backgroundColor,
  border: '1px solid ' + String(color.hoveredSpan.borderColor),
  color: color.hoveredSpan.color,

  hover: {
    background: color.hoveredSpan.backgroundColor_hover,
    border: '1px solid ' + String(color.hoveredSpan.borderColor),
    color: color.hoveredSpan.color_active
  }
};

var selectedSpanStyles = exports.selectedSpanStyles = {
  background: color.selectedSpan.backgroundColor,
  border: '1px solid ' + String(color.selectedSpan.borderColor),
  color: color.selectedSpan.color,

  hover: {
    background: color.selectedSpan.backgroundColor_hover,
    border: '1px solid ' + String(color.selectedSpan.borderColor),
    color: color.selectedSpan.color_active
  }
};

var lastInRangeStyles = exports.lastInRangeStyles = {
  borderRight: color.core.primary
};

var selectedStyles = exports.selectedStyles = {
  background: color.selected.backgroundColor,
  border: '1px solid ' + String(color.selected.borderColor),
  color: color.selected.color,

  hover: {
    background: color.selected.backgroundColor_hover,
    border: '1px solid ' + String(color.selected.borderColor),
    color: color.selected.color_active
  }
};

var defaultProps = {
  day: (0, _moment2['default'])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),

  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',

  // style defaults
  defaultStyles: defaultStyles,
  outsideStyles: outsideStyles,
  todayStyles: {},
  highlightedCalendarStyles: highlightedCalendarStyles,
  blockedMinNightsStyles: blockedMinNightsStyles,
  blockedCalendarStyles: blockedCalendarStyles,
  blockedOutOfRangeStyles: blockedOutOfRangeStyles,
  hoveredSpanStyles: hoveredSpanStyles,
  selectedSpanStyles: selectedSpanStyles,
  lastInRangeStyles: lastInRangeStyles,
  selectedStyles: selectedStyles,
  selectedStartStyles: {},
  selectedEndStyles: {},
  afterHoveredStartStyles: {},
  firstDayOfWeekStyles: {},
  lastDayOfWeekStyles: {},

  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CustomizableCalendarDay = function (_React$Component) {
  _inherits(CustomizableCalendarDay, _React$Component);

  function CustomizableCalendarDay() {
    var _ref;

    _classCallCheck(this, CustomizableCalendarDay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = CustomizableCalendarDay.__proto__ || Object.getPrototypeOf(CustomizableCalendarDay)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      isHovered: false
    };

    _this.setButtonRef = _this.setButtonRef.bind(_this);
    return _this;
  }

  _createClass(CustomizableCalendarDay, [{
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props = this.props,
            isFocused = _props.isFocused,
            tabIndex = _props.tabIndex;

        if (tabIndex === 0) {
          if (isFocused || tabIndex !== prevProps.tabIndex) {
            this.buttonRef.focus();
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onDayClick',
    value: function () {
      function onDayClick(day, e) {
        var onDayClick = this.props.onDayClick;

        onDayClick(day, e);
      }

      return onDayClick;
    }()
  }, {
    key: 'onDayMouseEnter',
    value: function () {
      function onDayMouseEnter(day, e) {
        var onDayMouseEnter = this.props.onDayMouseEnter;

        this.setState({ isHovered: true });
        onDayMouseEnter(day, e);
      }

      return onDayMouseEnter;
    }()
  }, {
    key: 'onDayMouseLeave',
    value: function () {
      function onDayMouseLeave(day, e) {
        var onDayMouseLeave = this.props.onDayMouseLeave;

        this.setState({ isHovered: false });
        onDayMouseLeave(day, e);
      }

      return onDayMouseLeave;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(day, e) {
        var onDayClick = this.props.onDayClick;
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onDayClick(day, e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'setButtonRef',
    value: function () {
      function setButtonRef(ref) {
        this.buttonRef = ref;
      }

      return setButtonRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props2 = this.props,
            day = _props2.day,
            ariaLabelFormat = _props2.ariaLabelFormat,
            daySize = _props2.daySize,
            isOutsideDay = _props2.isOutsideDay,
            modifiers = _props2.modifiers,
            tabIndex = _props2.tabIndex,
            renderDayContents = _props2.renderDayContents,
            styles = _props2.styles,
            phrases = _props2.phrases,
            defaultStylesWithHover = _props2.defaultStyles,
            outsideStylesWithHover = _props2.outsideStyles,
            todayStylesWithHover = _props2.todayStyles,
            firstDayOfWeekStylesWithHover = _props2.firstDayOfWeekStyles,
            lastDayOfWeekStylesWithHover = _props2.lastDayOfWeekStyles,
            highlightedCalendarStylesWithHover = _props2.highlightedCalendarStyles,
            blockedMinNightsStylesWithHover = _props2.blockedMinNightsStyles,
            blockedCalendarStylesWithHover = _props2.blockedCalendarStyles,
            blockedOutOfRangeStylesWithHover = _props2.blockedOutOfRangeStyles,
            hoveredSpanStylesWithHover = _props2.hoveredSpanStyles,
            selectedSpanStylesWithHover = _props2.selectedSpanStyles,
            lastInRangeStylesWithHover = _props2.lastInRangeStyles,
            selectedStylesWithHover = _props2.selectedStyles,
            selectedStartStylesWithHover = _props2.selectedStartStyles,
            selectedEndStylesWithHover = _props2.selectedEndStyles,
            afterHoveredStartStylesWithHover = _props2.afterHoveredStartStyles;
        var isHovered = this.state.isHovered;


        if (!day) return _react2['default'].createElement('td', null);

        var _getCalendarDaySettin = (0, _getCalendarDaySettings2['default'])(day, ariaLabelFormat, daySize, modifiers, phrases),
            daySizeStyles = _getCalendarDaySettin.daySizeStyles,
            useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
            selected = _getCalendarDaySettin.selected,
            hoveredSpan = _getCalendarDaySettin.hoveredSpan,
            isOutsideRange = _getCalendarDaySettin.isOutsideRange,
            ariaLabel = _getCalendarDaySettin.ariaLabel;

        return _react2['default'].createElement(
          'td',
          _extends({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, daySizeStyles, getStyles(defaultStylesWithHover, isHovered), isOutsideDay && getStyles(outsideStylesWithHover, isHovered), modifiers.has('today') && getStyles(todayStylesWithHover, isHovered), modifiers.has('first-day-of-week') && getStyles(firstDayOfWeekStylesWithHover, isHovered), modifiers.has('last-day-of-week') && getStyles(lastDayOfWeekStylesWithHover, isHovered), modifiers.has('highlighted-calendar') && getStyles(highlightedCalendarStylesWithHover, isHovered), modifiers.has('blocked-minimum-nights') && getStyles(blockedMinNightsStylesWithHover, isHovered), modifiers.has('blocked-calendar') && getStyles(blockedCalendarStylesWithHover, isHovered), hoveredSpan && getStyles(hoveredSpanStylesWithHover, isHovered), modifiers.has('after-hovered-start') && getStyles(afterHoveredStartStylesWithHover, isHovered), modifiers.has('selected-span') && getStyles(selectedSpanStylesWithHover, isHovered), modifiers.has('last-in-range') && getStyles(lastInRangeStylesWithHover, isHovered), selected && getStyles(selectedStylesWithHover, isHovered), modifiers.has('selected-start') && getStyles(selectedStartStylesWithHover, isHovered), modifiers.has('selected-end') && getStyles(selectedEndStylesWithHover, isHovered), isOutsideRange && getStyles(blockedOutOfRangeStylesWithHover, isHovered)), {
            role: 'button' // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
            , ref: this.setButtonRef,
            'aria-label': ariaLabel,
            onMouseEnter: function () {
              function onMouseEnter(e) {
                _this2.onDayMouseEnter(day, e);
              }

              return onMouseEnter;
            }(),
            onMouseLeave: function () {
              function onMouseLeave(e) {
                _this2.onDayMouseLeave(day, e);
              }

              return onMouseLeave;
            }(),
            onMouseUp: function () {
              function onMouseUp(e) {
                e.currentTarget.blur();
              }

              return onMouseUp;
            }(),
            onClick: function () {
              function onClick(e) {
                _this2.onDayClick(day, e);
              }

              return onClick;
            }(),
            onKeyDown: function () {
              function onKeyDown(e) {
                _this2.onKeyDown(day, e);
              }

              return onKeyDown;
            }(),
            tabIndex: tabIndex
          }),
          renderDayContents ? renderDayContents(day, modifiers) : day.format('D')
        );
      }

      return render;
    }()
  }]);

  return CustomizableCalendarDay;
}(_react2['default'].Component);

CustomizableCalendarDay.propTypes = propTypes;
CustomizableCalendarDay.defaultProps = defaultProps;

exports.PureCustomizableCalendarDay = CustomizableCalendarDay;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var font = _ref2.reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',

      ':active': {
        outline: 0
      }
    },

    CalendarDay__defaultCursor: {
      cursor: 'default'
    }
  };
})(CustomizableCalendarDay);

/***/ }),

/***/ "GG7f":
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-unresolved
__webpack_require__("H24B");


/***/ }),

/***/ "GK4x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const ToolbarContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (ToolbarContext);


/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "Gn0q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("82c2");
var getPolyfill = __webpack_require__("5yQQ");

module.exports = function shimContains() {
	var polyfill = getPolyfill();
	if (typeof document !== 'undefined') {
		define(
			document,
			{ contains: polyfill },
			{ contains: function () { return document.contains !== polyfill; } }
		);
		if (typeof Element !== 'undefined') {
			define(
				Element.prototype,
				{ contains: polyfill },
				{ contains: function () { return Element.prototype.contains !== polyfill; } }
			);
		}
	}
	return polyfill;
};


/***/ }),

/***/ "GoyQ":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "H24B":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerCSSInterfaceWithDefaultTheme = __webpack_require__("TUyu");

var _registerCSSInterfaceWithDefaultTheme2 = _interopRequireDefault(_registerCSSInterfaceWithDefaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

(0, _registerCSSInterfaceWithDefaultTheme2['default'])();

/***/ }),

/***/ "Hsqg":
/***/ (function(module, exports, __webpack_require__) {

module.exports =  true ? __webpack_require__("DciD") : undefined;



/***/ }),

/***/ "HwJD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ "HyUg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__("eJkf");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "I/A+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectSpread2; });
/* unused harmony export b */
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}




/***/ }),

/***/ "IVEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCreateElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SystemContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eUCI");
/* harmony import */ var _rollupPluginBabelHelpers_0c84a174_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RDTF");




function isRenderProp(children) {
  return typeof children === "function";
}

/**
 * Custom hook that will call `children` if it's a function. If
 * `useCreateElement` has been passed to the context, it'll be used instead.
 *
 * @example
 * import React from "react";
 * import { SystemProvider, useCreateElement } from "reakit-system";
 *
 * const system = {
 *   useCreateElement(type, props, children = props.children) {
 *     // very similar to what `useCreateElement` does already
 *     if (typeof children === "function") {
 *       const { children: _, ...rest } = props;
 *       return children(rest);
 *     }
 *     return React.createElement(type, props, children);
 *   },
 * };
 *
 * function Component(props) {
 *   return useCreateElement("div", props);
 * }
 *
 * function App() {
 *   return (
 *     <SystemProvider unstable_system={system}>
 *       <Component url="url">{({ url }) => <a href={url}>link</a>}</Component>
 *     </SystemProvider>
 *   );
 * }
 */

var useCreateElement = function useCreateElement(type, props, children) {
  if (children === void 0) {
    children = props.children;
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SystemContext_js__WEBPACK_IMPORTED_MODULE_1__[/* SystemContext */ "a"]);

  if (context.useCreateElement) {
    return context.useCreateElement(type, props, children);
  }

  if (typeof type === "string" && isRenderProp(children)) {
    var _ = props.children,
        rest = Object(_rollupPluginBabelHelpers_0c84a174_js__WEBPACK_IMPORTED_MODULE_2__[/* a */ "b"])(props, ["children"]);

    return children(rest);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, props, children);
};




/***/ }),

/***/ "IdCN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = reflectApply
	? function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),

/***/ "IgE5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isDayVisible;

var _isBeforeDay = __webpack_require__("h6xH");

var _isBeforeDay2 = _interopRequireDefault(_isBeforeDay);

var _isAfterDay = __webpack_require__("Nho6");

var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  var firstDayOfFirstMonth = month.clone().startOf('month');
  if (enableOutsideDays) firstDayOfFirstMonth = firstDayOfFirstMonth.startOf('week');
  if ((0, _isBeforeDay2['default'])(day, firstDayOfFirstMonth)) return false;

  var lastDayOfLastMonth = month.clone().add(numberOfMonths - 1, 'months').endOf('month');
  if (enableOutsideDays) lastDayOfLastMonth = lastDayOfLastMonth.endOf('week');
  return !(0, _isAfterDay2['default'])(day, lastDayOfLastMonth);
}

/***/ }),

/***/ "J2ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var abs = __webpack_require__("S8ty");
var floor = __webpack_require__("8sMu");
var Type = __webpack_require__("PoQ0");

var $isNaN = __webpack_require__("HwJD");
var $isFinite = __webpack_require__("ald4");

// https://tc39.es/ecma262/#sec-isintegralnumber

module.exports = function IsIntegralNumber(argument) {
	if (Type(argument) !== 'Number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var absValue = abs(argument);
	return floor(absValue) === absValue;
};


/***/ }),

/***/ "J7JS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__("Hsqg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports['default'] = (0, _airbnbPropTypes.and)([_propTypes2['default'].instanceOf(Set), function () {
  function modifiers(props, propName) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var propValue = props[propName];

    var firstError = void 0;
    [].concat(_toConsumableArray(propValue)).some(function (v, i) {
      var _PropTypes$string;

      var fakePropName = String(propName) + ': index ' + String(i);
      firstError = (_PropTypes$string = _propTypes2['default'].string).isRequired.apply(_PropTypes$string, [_defineProperty({}, fakePropName, v), fakePropName].concat(rest));
      return firstError != null;
    });
    return firstError == null ? null : firstError;
  }

  return modifiers;
}()], 'Modifiers (Set of Strings)');

/***/ }),

/***/ "JLmN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Clickable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useClickable; });
/* harmony import */ var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BZp5");
/* harmony import */ var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hE48");
/* harmony import */ var reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qdes");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("71Og");
/* harmony import */ var reakit_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KA1K");
/* harmony import */ var reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eNtd");
/* harmony import */ var reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("k2cL");
/* harmony import */ var _Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("G3V0");


















// Automatically generated
var CLICKABLE_KEYS = ["unstable_clickOnEnter", "unstable_clickOnSpace"];

function isNativeClick(event) {
  var element = event.currentTarget;
  if (!event.isTrusted) return false; // istanbul ignore next: can't test trusted events yet

  return Object(reakit_utils_isButton__WEBPACK_IMPORTED_MODULE_4__[/* isButton */ "a"])(element) || element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "A" || element.tagName === "SELECT";
}

var useClickable = Object(reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__[/* createHook */ "a"])({
  name: "Clickable",
  compose: _Tabbable_Tabbable_js__WEBPACK_IMPORTED_MODULE_8__[/* useTabbable */ "a"],
  keys: CLICKABLE_KEYS,
  useOptions: function useOptions(_ref) {
    var _ref$unstable_clickOn = _ref.unstable_clickOnEnter,
        unstable_clickOnEnter = _ref$unstable_clickOn === void 0 ? true : _ref$unstable_clickOn,
        _ref$unstable_clickOn2 = _ref.unstable_clickOnSpace,
        unstable_clickOnSpace = _ref$unstable_clickOn2 === void 0 ? true : _ref$unstable_clickOn2,
        options = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref, ["unstable_clickOnEnter", "unstable_clickOnSpace"]);

    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      unstable_clickOnEnter: unstable_clickOnEnter,
      unstable_clickOnSpace: unstable_clickOnSpace
    }, options);
  },
  useProps: function useProps(options, _ref2) {
    var htmlOnKeyDown = _ref2.onKeyDown,
        htmlOnKeyUp = _ref2.onKeyUp,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* _ */ "a"])(_ref2, ["onKeyDown", "onKeyUp"]);

    var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
        active = _React$useState[0],
        setActive = _React$useState[1];

    var onKeyDownRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnKeyDown);
    var onKeyUpRef = Object(reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_6__[/* useLiveRef */ "a"])(htmlOnKeyUp);
    var onKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onKeyDownRef$current;

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      if (event.metaKey) return;
      if (!Object(reakit_utils_isSelfTarget__WEBPACK_IMPORTED_MODULE_7__[/* isSelfTarget */ "a"])(event)) return;
      var isEnter = options.unstable_clickOnEnter && event.key === "Enter";
      var isSpace = options.unstable_clickOnSpace && event.key === " ";

      if (isEnter || isSpace) {
        if (isNativeClick(event)) return;
        event.preventDefault();

        if (isEnter) {
          event.currentTarget.click();
        } else if (isSpace) {
          setActive(true);
        }
      }
    }, [options.disabled, options.unstable_clickOnEnter, options.unstable_clickOnSpace]);
    var onKeyUp = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
      var _onKeyUpRef$current;

      (_onKeyUpRef$current = onKeyUpRef.current) === null || _onKeyUpRef$current === void 0 ? void 0 : _onKeyUpRef$current.call(onKeyUpRef, event);
      if (event.defaultPrevented) return;
      if (options.disabled) return;
      if (event.metaKey) return;
      var isSpace = options.unstable_clickOnSpace && event.key === " ";

      if (active && isSpace) {
        setActive(false);
        event.currentTarget.click();
      }
    }, [options.disabled, options.unstable_clickOnSpace, active]);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_0__[/* a */ "b"])({
      "data-active": active || undefined,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp
    }, htmlProps);
  }
});
var Clickable = Object(reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])({
  as: "button",
  memo: true,
  useHook: useClickable
});




/***/ }),

/***/ "JYkG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Z23Y");
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__);
// @ts-nocheck

/**
 * WordPress dependencies
 */


const SlotFillContext = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  slots: {},
  fills: {},
  registerSlot: () => {
    typeof process !== "undefined" && process.env && "production" !== "production" ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_1___default()('Components must be wrapped within `SlotFillProvider`. ' + 'See https://developer.wordpress.org/block-editor/components/slot-fill/') : void 0;
  },
  updateSlot: () => {},
  unregisterSlot: () => {},
  registerFill: () => {},
  unregisterFill: () => {}
});
/* harmony default export */ __webpack_exports__["a"] = (SlotFillContext);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "Jt44":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: remove, semver-major

module.exports = __webpack_require__("j1Hc");


/***/ }),

/***/ "Jx1U":
/***/ (function(module, exports) {

// Copyright (c) 2014 Rafael Caricio. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var GradientParser = {};

GradientParser.parse = (function() {

  var tokens = {
    linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
    repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
    radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
    repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
    extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^\#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    rgbaColor: /^rgba/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
  };

  var input = '';

  function error(msg) {
    var err = new Error(input + ': ' + msg);
    err.source = input;
    throw err;
  }

  function getAST() {
    var ast = matchListDefinitions();

    if (input.length > 0) {
      error('Invalid input not EOF');
    }

    return ast;
  }

  function matchListDefinitions() {
    return matchListing(matchDefinition);
  }

  function matchDefinition() {
    return matchGradient(
            'linear-gradient',
            tokens.linearGradient,
            matchLinearOrientation) ||

          matchGradient(
            'repeating-linear-gradient',
            tokens.repeatingLinearGradient,
            matchLinearOrientation) ||

          matchGradient(
            'radial-gradient',
            tokens.radialGradient,
            matchListRadialOrientations) ||

          matchGradient(
            'repeating-radial-gradient',
            tokens.repeatingRadialGradient,
            matchListRadialOrientations);
  }

  function matchGradient(gradientType, pattern, orientationMatcher) {
    return matchCall(pattern, function(captures) {

      var orientation = orientationMatcher();
      if (orientation) {
        if (!scan(tokens.comma)) {
          error('Missing comma before color stops');
        }
      }

      return {
        type: gradientType,
        orientation: orientation,
        colorStops: matchListing(matchColorStop)
      };
    });
  }

  function matchCall(pattern, callback) {
    var captures = scan(pattern);

    if (captures) {
      if (!scan(tokens.startCall)) {
        error('Missing (');
      }

      result = callback(captures);

      if (!scan(tokens.endCall)) {
        error('Missing )');
      }

      return result;
    }
  }

  function matchLinearOrientation() {
    return matchSideOrCorner() ||
      matchAngle();
  }

  function matchSideOrCorner() {
    return match('directional', tokens.sideOrCorner, 1);
  }

  function matchAngle() {
    return match('angular', tokens.angleValue, 1);
  }

  function matchListRadialOrientations() {
    var radialOrientations,
        radialOrientation = matchRadialOrientation(),
        lookaheadCache;

    if (radialOrientation) {
      radialOrientations = [];
      radialOrientations.push(radialOrientation);

      lookaheadCache = input;
      if (scan(tokens.comma)) {
        radialOrientation = matchRadialOrientation();
        if (radialOrientation) {
          radialOrientations.push(radialOrientation);
        } else {
          input = lookaheadCache;
        }
      }
    }

    return radialOrientations;
  }

  function matchRadialOrientation() {
    var radialType = matchCircle() ||
      matchEllipse();

    if (radialType) {
      radialType.at = matchAtPosition();
    } else {
      var defaultPosition = matchPositioning();
      if (defaultPosition) {
        radialType = {
          type: 'default-radial',
          at: defaultPosition
        };
      }
    }

    return radialType;
  }

  function matchCircle() {
    var circle = match('shape', /^(circle)/i, 0);

    if (circle) {
      circle.style = matchLength() || matchExtentKeyword();
    }

    return circle;
  }

  function matchEllipse() {
    var ellipse = match('shape', /^(ellipse)/i, 0);

    if (ellipse) {
      ellipse.style =  matchDistance() || matchExtentKeyword();
    }

    return ellipse;
  }

  function matchExtentKeyword() {
    return match('extent-keyword', tokens.extentKeywords, 1);
  }

  function matchAtPosition() {
    if (match('position', /^at/, 0)) {
      var positioning = matchPositioning();

      if (!positioning) {
        error('Missing positioning value');
      }

      return positioning;
    }
  }

  function matchPositioning() {
    var location = matchCoordinates();

    if (location.x || location.y) {
      return {
        type: 'position',
        value: location
      };
    }
  }

  function matchCoordinates() {
    return {
      x: matchDistance(),
      y: matchDistance()
    };
  }

  function matchListing(matcher) {
    var captures = matcher(),
      result = [];

    if (captures) {
      result.push(captures);
      while (scan(tokens.comma)) {
        captures = matcher();
        if (captures) {
          result.push(captures);
        } else {
          error('One extra comma');
        }
      }
    }

    return result;
  }

  function matchColorStop() {
    var color = matchColor();

    if (!color) {
      error('Expected color definition');
    }

    color.length = matchDistance();
    return color;
  }

  function matchColor() {
    return matchHexColor() ||
      matchRGBAColor() ||
      matchRGBColor() ||
      matchLiteralColor();
  }

  function matchLiteralColor() {
    return match('literal', tokens.literalColor, 0);
  }

  function matchHexColor() {
    return match('hex', tokens.hexColor, 1);
  }

  function matchRGBColor() {
    return matchCall(tokens.rgbColor, function() {
      return  {
        type: 'rgb',
        value: matchListing(matchNumber)
      };
    });
  }

  function matchRGBAColor() {
    return matchCall(tokens.rgbaColor, function() {
      return  {
        type: 'rgba',
        value: matchListing(matchNumber)
      };
    });
  }

  function matchNumber() {
    return scan(tokens.number)[1];
  }

  function matchDistance() {
    return match('%', tokens.percentageValue, 1) ||
      matchPositionKeyword() ||
      matchLength();
  }

  function matchPositionKeyword() {
    return match('position-keyword', tokens.positionKeywords, 1);
  }

  function matchLength() {
    return match('px', tokens.pixelValue, 1) ||
      match('em', tokens.emValue, 1);
  }

  function match(type, pattern, captureIndex) {
    var captures = scan(pattern);
    if (captures) {
      return {
        type: type,
        value: captures[captureIndex]
      };
    }
  }

  function scan(regexp) {
    var captures,
        blankCaptures;

    blankCaptures = /^[\n\r\t\s]+/.exec(input);
    if (blankCaptures) {
        consume(blankCaptures[0].length);
    }

    captures = regexp.exec(input);
    if (captures) {
        consume(captures[0].length);
    }

    return captures;
  }

  function consume(size) {
    input = input.substr(size);
  }

  return function(code) {
    input = code.toString();
    return getAST();
  };
})();

exports.parse = (GradientParser || {}).parse;


/***/ }),

/***/ "K+tz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["a"] = (external);


/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "KA1K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: warning, useWarning

// EXTERNAL MODULE: ./node_modules/reakit-warning/es/warning.js
var warning = __webpack_require__("WnOg");

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/isObject.js
var isObject = __webpack_require__("Ptb8");

// CONCATENATED MODULE: ./node_modules/reakit-warning/es/useWarning.js





function isRefObject(ref) {
  return Object(isObject["a" /* isObject */])(ref) && "current" in ref;
}
/**
 * Logs `messages` to the console using `console.warn` based on a `condition`.
 * This should be used inside components.
 */


function useWarning(condition) {
  for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    messages[_key - 1] = arguments[_key];
  }

  if (false) {}
}



// CONCATENATED MODULE: ./node_modules/reakit-warning/es/index.js







/***/ }),

/***/ "KCH1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unstable_IdContext; });
/* unused harmony export unstable_IdProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var defaultPrefix = "id";
function generateRandomString(prefix) {
  if (prefix === void 0) {
    prefix = defaultPrefix;
  }

  return "" + (prefix ? prefix + "-" : "") + Math.random().toString(32).substr(2, 6);
}

var unstable_IdContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(generateRandomString);
function unstable_IdProvider(_ref) {
  var children = _ref.children,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? defaultPrefix : _ref$prefix;
  var count = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var generateId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (localPrefix) {
    if (localPrefix === void 0) {
      localPrefix = prefix;
    }

    return "" + (localPrefix ? localPrefix + "-" : "") + ++count.current;
  }, [prefix]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(unstable_IdContext.Provider, {
    value: generateId
  }, children);
}




/***/ }),

/***/ "KfNM":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "Koq/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("82c2");
var callBind = __webpack_require__("PrET");

var implementation = __webpack_require__("FufO");
var getPolyfill = __webpack_require__("yLpt");
var shim = __webpack_require__("8R9v");

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "KtDd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var ArrayCreate = __webpack_require__("6Ehn");
var Get = __webpack_require__("aBsX");
var IsArray = __webpack_require__("Bl8U");
var IsConstructor = __webpack_require__("TFEf");
var IsIntegralNumber = __webpack_require__("J2ba");
var Type = __webpack_require__("PoQ0");

// https://ecma-international.org/ecma-262/12.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!IsIntegralNumber(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}

	var isArray = IsArray(originalArray);
	if (!isArray) {
		return ArrayCreate(length);
	}

	var C = Get(originalArray, 'constructor');
	// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
	// if (IsConstructor(C)) {
	// 	if C is another realm's Array, C = undefined
	// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
	// }
	if ($species && Type(C) === 'Object') {
		C = Get(C, $species);
		if (C === null) {
			C = void 0;
		}
	}

	if (typeof C === 'undefined') {
		return ArrayCreate(length);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(length); // Construct(C, length);
};



/***/ }),

/***/ "Kz5y":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("WFqU");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "L8Kx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAnimateClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animate; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * @typedef {'top' | 'top left' | 'top right' | 'middle' | 'middle left' | 'middle right' | 'bottom' | 'bottom left' | 'bottom right'} AppearOrigin
 * @typedef {'left' | 'right'} SlideInOrigin
 * @typedef {{ type: 'appear'; origin?: AppearOrigin }} AppearOptions
 * @typedef {{ type: 'slide-in'; origin?: SlideInOrigin }} SlideInOptions
 * @typedef {{ type: 'loading' }} LoadingOptions
 * @typedef {AppearOptions | SlideInOptions | LoadingOptions} GetAnimateOptions
 */

/* eslint-disable jsdoc/valid-types */

/**
 * @param {GetAnimateOptions['type']} type The animation type
 * @return {'top' | 'left'} Default origin
 */

function getDefaultOrigin(type) {
  return type === 'appear' ? 'top' : 'left';
}
/* eslint-enable jsdoc/valid-types */

/**
 * @param {GetAnimateOptions} options
 *
 * @return {string | void} ClassName that applies the animations
 */


function getAnimateClassName(options) {
  if (options.type === 'loading') {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-animate__loading');
  }

  const {
    type,
    origin = getDefaultOrigin(type)
  } = options;

  if (type === 'appear') {
    const [yAxis, xAxis = 'center'] = origin.split(' ');
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-animate__appear', {
      ['is-from-' + xAxis]: xAxis !== 'center',
      ['is-from-' + yAxis]: yAxis !== 'middle'
    });
  }

  if (type === 'slide-in') {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-animate__slide-in', 'is-from-' + origin);
  }
} // @ts-ignore Reason: Planned for deprecation

function Animate(_ref) {
  let {
    type,
    options = {},
    children
  } = _ref;
  return children({
    className: getAnimateClassName({
      type,
      ...options
    })
  });
}


/***/ }),

/***/ "LTAC":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isTouchDevice;
function isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
}
module.exports = exports['default'];

/***/ }),

/***/ "Lxf3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__("Teho");

var isCallable = __webpack_require__("IdCN");

// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
var ES5internalSlots = {
	'[[DefaultValue]]': function (O) {
		var actualHint;
		if (arguments.length > 1) {
			actualHint = arguments[1];
		} else {
			actualHint = toStr.call(O) === '[object Date]' ? String : Number;
		}

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// http://ecma-international.org/ecma-262/5.1/#sec-9.1
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	if (arguments.length > 1) {
		return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
	}
	return ES5internalSlots['[[DefaultValue]]'](input);
};


/***/ }),

/***/ "Mih7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasUserFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setUserFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return userFocus; });
function userFocus(element) {
  element.userFocus = true;
  element.focus();
  element.userFocus = false;
}
function hasUserFocus(element) {
  return !!element.userFocus;
}
function setUserFocus(element, value) {
  element.userFocus = value;
}




/***/ }),

/***/ "Mp0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const linkOff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (linkOff);


/***/ }),

/***/ "N3k4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureCalendarDay = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = __webpack_require__("Koq/");

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = __webpack_require__("YZDV");

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = __webpack_require__("XGBb");

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = __webpack_require__("Hsqg");

var _reactWithStyles = __webpack_require__("TG4+");

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _defaultPhrases = __webpack_require__("vV+G");

var _getPhrasePropTypes = __webpack_require__("yc2e");

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _getCalendarDaySettings = __webpack_require__("Ae65");

var _getCalendarDaySettings2 = _interopRequireDefault(_getCalendarDaySettings);

var _ModifiersShape = __webpack_require__("J7JS");

var _ModifiersShape2 = _interopRequireDefault(_ModifiersShape);

var _constants = __webpack_require__("Fv1B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {
  day: _reactMomentProptypes2['default'].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes2['default'].bool,
  modifiers: _ModifiersShape2['default'],
  isFocused: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].oneOf([0, -1]),
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,
  renderDayContents: _propTypes2['default'].func,
  ariaLabelFormat: _propTypes2['default'].string,

  // internationalization
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
}));

var defaultProps = {
  day: (0, _moment2['default'])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),

  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',

  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CalendarDay = function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay() {
    var _ref;

    _classCallCheck(this, CalendarDay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).call.apply(_ref, [this].concat(args)));

    _this.setButtonRef = _this.setButtonRef.bind(_this);
    return _this;
  }

  _createClass(CalendarDay, [{
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props = this.props,
            isFocused = _props.isFocused,
            tabIndex = _props.tabIndex;

        if (tabIndex === 0) {
          if (isFocused || tabIndex !== prevProps.tabIndex) {
            this.buttonRef.focus();
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'onDayClick',
    value: function () {
      function onDayClick(day, e) {
        var onDayClick = this.props.onDayClick;

        onDayClick(day, e);
      }

      return onDayClick;
    }()
  }, {
    key: 'onDayMouseEnter',
    value: function () {
      function onDayMouseEnter(day, e) {
        var onDayMouseEnter = this.props.onDayMouseEnter;

        onDayMouseEnter(day, e);
      }

      return onDayMouseEnter;
    }()
  }, {
    key: 'onDayMouseLeave',
    value: function () {
      function onDayMouseLeave(day, e) {
        var onDayMouseLeave = this.props.onDayMouseLeave;

        onDayMouseLeave(day, e);
      }

      return onDayMouseLeave;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(day, e) {
        var onDayClick = this.props.onDayClick;
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          onDayClick(day, e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'setButtonRef',
    value: function () {
      function setButtonRef(ref) {
        this.buttonRef = ref;
      }

      return setButtonRef;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props2 = this.props,
            day = _props2.day,
            ariaLabelFormat = _props2.ariaLabelFormat,
            daySize = _props2.daySize,
            isOutsideDay = _props2.isOutsideDay,
            modifiers = _props2.modifiers,
            renderDayContents = _props2.renderDayContents,
            tabIndex = _props2.tabIndex,
            styles = _props2.styles,
            phrases = _props2.phrases;


        if (!day) return _react2['default'].createElement('td', null);

        var _getCalendarDaySettin = (0, _getCalendarDaySettings2['default'])(day, ariaLabelFormat, daySize, modifiers, phrases),
            daySizeStyles = _getCalendarDaySettin.daySizeStyles,
            useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
            selected = _getCalendarDaySettin.selected,
            hoveredSpan = _getCalendarDaySettin.hoveredSpan,
            isOutsideRange = _getCalendarDaySettin.isOutsideRange,
            ariaLabel = _getCalendarDaySettin.ariaLabel;

        return _react2['default'].createElement(
          'td',
          _extends({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, styles.CalendarDay__default, isOutsideDay && styles.CalendarDay__outside, modifiers.has('today') && styles.CalendarDay__today, modifiers.has('first-day-of-week') && styles.CalendarDay__firstDayOfWeek, modifiers.has('last-day-of-week') && styles.CalendarDay__lastDayOfWeek, modifiers.has('hovered-offset') && styles.CalendarDay__hovered_offset, modifiers.has('highlighted-calendar') && styles.CalendarDay__highlighted_calendar, modifiers.has('blocked-minimum-nights') && styles.CalendarDay__blocked_minimum_nights, modifiers.has('blocked-calendar') && styles.CalendarDay__blocked_calendar, hoveredSpan && styles.CalendarDay__hovered_span, modifiers.has('selected-span') && styles.CalendarDay__selected_span, modifiers.has('last-in-range') && styles.CalendarDay__last_in_range, modifiers.has('selected-start') && styles.CalendarDay__selected_start, modifiers.has('selected-end') && styles.CalendarDay__selected_end, selected && styles.CalendarDay__selected, isOutsideRange && styles.CalendarDay__blocked_out_of_range, daySizeStyles), {
            role: 'button' // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
            , ref: this.setButtonRef,
            'aria-label': ariaLabel,
            onMouseEnter: function () {
              function onMouseEnter(e) {
                _this2.onDayMouseEnter(day, e);
              }

              return onMouseEnter;
            }(),
            onMouseLeave: function () {
              function onMouseLeave(e) {
                _this2.onDayMouseLeave(day, e);
              }

              return onMouseLeave;
            }(),
            onMouseUp: function () {
              function onMouseUp(e) {
                e.currentTarget.blur();
              }

              return onMouseUp;
            }(),
            onClick: function () {
              function onClick(e) {
                _this2.onDayClick(day, e);
              }

              return onClick;
            }(),
            onKeyDown: function () {
              function onKeyDown(e) {
                _this2.onKeyDown(day, e);
              }

              return onKeyDown;
            }(),
            tabIndex: tabIndex
          }),
          renderDayContents ? renderDayContents(day, modifiers) : day.format('D')
        );
      }

      return render;
    }()
  }]);

  return CalendarDay;
}(_react2['default'].Component);

CalendarDay.propTypes = propTypes;
CalendarDay.defaultProps = defaultProps;

exports.PureCalendarDay = CalendarDay;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',

      ':active': {
        outline: 0
      }
    },

    CalendarDay__defaultCursor: {
      cursor: 'default'
    },

    CalendarDay__default: {
      border: '1px solid ' + String(color.core.borderLight),
      color: color.text,
      background: color.background,

      ':hover': {
        background: color.core.borderLight,
        border: '1px double ' + String(color.core.borderLight),
        color: 'inherit'
      }
    },

    CalendarDay__hovered_offset: {
      background: color.core.borderBright,
      border: '1px double ' + String(color.core.borderLight),
      color: 'inherit'
    },

    CalendarDay__outside: {
      border: 0,
      background: color.outside.backgroundColor,
      color: color.outside.color,

      ':hover': {
        border: 0
      }
    },

    CalendarDay__blocked_minimum_nights: {
      background: color.minimumNights.backgroundColor,
      border: '1px solid ' + String(color.minimumNights.borderColor),
      color: color.minimumNights.color,

      ':hover': {
        background: color.minimumNights.backgroundColor_hover,
        color: color.minimumNights.color_active
      },

      ':active': {
        background: color.minimumNights.backgroundColor_active,
        color: color.minimumNights.color_active
      }
    },

    CalendarDay__highlighted_calendar: {
      background: color.highlighted.backgroundColor,
      color: color.highlighted.color,

      ':hover': {
        background: color.highlighted.backgroundColor_hover,
        color: color.highlighted.color_active
      },

      ':active': {
        background: color.highlighted.backgroundColor_active,
        color: color.highlighted.color_active
      }
    },

    CalendarDay__selected_span: {
      background: color.selectedSpan.backgroundColor,
      border: '1px solid ' + String(color.selectedSpan.borderColor),
      color: color.selectedSpan.color,

      ':hover': {
        background: color.selectedSpan.backgroundColor_hover,
        border: '1px solid ' + String(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      },

      ':active': {
        background: color.selectedSpan.backgroundColor_active,
        border: '1px solid ' + String(color.selectedSpan.borderColor),
        color: color.selectedSpan.color_active
      }
    },

    CalendarDay__last_in_range: {
      borderRight: color.core.primary
    },

    CalendarDay__selected: {
      background: color.selected.backgroundColor,
      border: '1px solid ' + String(color.selected.borderColor),
      color: color.selected.color,

      ':hover': {
        background: color.selected.backgroundColor_hover,
        border: '1px solid ' + String(color.selected.borderColor),
        color: color.selected.color_active
      },

      ':active': {
        background: color.selected.backgroundColor_active,
        border: '1px solid ' + String(color.selected.borderColor),
        color: color.selected.color_active
      }
    },

    CalendarDay__hovered_span: {
      background: color.hoveredSpan.backgroundColor,
      border: '1px solid ' + String(color.hoveredSpan.borderColor),
      color: color.hoveredSpan.color,

      ':hover': {
        background: color.hoveredSpan.backgroundColor_hover,
        border: '1px solid ' + String(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      },

      ':active': {
        background: color.hoveredSpan.backgroundColor_active,
        border: '1px solid ' + String(color.hoveredSpan.borderColor),
        color: color.hoveredSpan.color_active
      }
    },

    CalendarDay__blocked_calendar: {
      background: color.blocked_calendar.backgroundColor,
      border: '1px solid ' + String(color.blocked_calendar.borderColor),
      color: color.blocked_calendar.color,

      ':hover': {
        background: color.blocked_calendar.backgroundColor_hover,
        border: '1px solid ' + String(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      },

      ':active': {
        background: color.blocked_calendar.backgroundColor_active,
        border: '1px solid ' + String(color.blocked_calendar.borderColor),
        color: color.blocked_calendar.color_active
      }
    },

    CalendarDay__blocked_out_of_range: {
      background: color.blocked_out_of_range.backgroundColor,
      border: '1px solid ' + String(color.blocked_out_of_range.borderColor),
      color: color.blocked_out_of_range.color,

      ':hover': {
        background: color.blocked_out_of_range.backgroundColor_hover,
        border: '1px solid ' + String(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      },

      ':active': {
        background: color.blocked_out_of_range.backgroundColor_active,
        border: '1px solid ' + String(color.blocked_out_of_range.borderColor),
        color: color.blocked_out_of_range.color_active
      }
    },

    CalendarDay__selected_start: {},
    CalendarDay__selected_end: {},
    CalendarDay__today: {},
    CalendarDay__firstDayOfWeek: {},
    CalendarDay__lastDayOfWeek: {}
  };
})(CalendarDay);

/***/ }),

/***/ "NMb1":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());

/***/ }),

/***/ "NTP4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const upload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (upload);


/***/ }),

/***/ "NWDH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronDown = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (chevronDown);


/***/ }),

/***/ "Nho6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isAfterDay;

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _isBeforeDay = __webpack_require__("h6xH");

var _isBeforeDay2 = _interopRequireDefault(_isBeforeDay);

var _isSameDay = __webpack_require__("pRvc");

var _isSameDay2 = _interopRequireDefault(_isSameDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isAfterDay(a, b) {
  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
  return !(0, _isBeforeDay2['default'])(a, b) && !(0, _isSameDay2['default'])(a, b);
}

/***/ }),

/***/ "Nloh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureDayPicker = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _object = __webpack_require__("Koq/");

var _object2 = _interopRequireDefault(_object);

var _react = __webpack_require__("cDcd");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("17x9");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = __webpack_require__("YZDV");

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _airbnbPropTypes = __webpack_require__("Hsqg");

var _reactWithStyles = __webpack_require__("TG4+");

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _throttle = __webpack_require__("DzJC");

var _throttle2 = _interopRequireDefault(_throttle);

var _isTouchDevice = __webpack_require__("LTAC");

var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

var _reactOutsideClickHandler = __webpack_require__("3gBW");

var _reactOutsideClickHandler2 = _interopRequireDefault(_reactOutsideClickHandler);

var _defaultPhrases = __webpack_require__("vV+G");

var _getPhrasePropTypes = __webpack_require__("yc2e");

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _CalendarMonthGrid = __webpack_require__("Thzv");

var _CalendarMonthGrid2 = _interopRequireDefault(_CalendarMonthGrid);

var _DayPickerNavigation = __webpack_require__("zfJ5");

var _DayPickerNavigation2 = _interopRequireDefault(_DayPickerNavigation);

var _DayPickerKeyboardShortcuts = __webpack_require__("1+Kn");

var _DayPickerKeyboardShortcuts2 = _interopRequireDefault(_DayPickerKeyboardShortcuts);

var _getNumberOfCalendarMonthWeeks = __webpack_require__("0Dl3");

var _getNumberOfCalendarMonthWeeks2 = _interopRequireDefault(_getNumberOfCalendarMonthWeeks);

var _getCalendarMonthWidth = __webpack_require__("m2ax");

var _getCalendarMonthWidth2 = _interopRequireDefault(_getCalendarMonthWidth);

var _calculateDimension = __webpack_require__("ixyq");

var _calculateDimension2 = _interopRequireDefault(_calculateDimension);

var _getActiveElement = __webpack_require__("+51k");

var _getActiveElement2 = _interopRequireDefault(_getActiveElement);

var _isDayVisible = __webpack_require__("IgE5");

var _isDayVisible2 = _interopRequireDefault(_isDayVisible);

var _ModifiersShape = __webpack_require__("J7JS");

var _ModifiersShape2 = _interopRequireDefault(_ModifiersShape);

var _ScrollableOrientationShape = __webpack_require__("aE6U");

var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

var _DayOfWeekShape = __webpack_require__("2S2E");

var _DayOfWeekShape2 = _interopRequireDefault(_DayOfWeekShape);

var _CalendarInfoPositionShape = __webpack_require__("oR9Z");

var _CalendarInfoPositionShape2 = _interopRequireDefault(_CalendarInfoPositionShape);

var _constants = __webpack_require__("Fv1B");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MONTH_PADDING = 23;
var PREV_TRANSITION = 'prev';
var NEXT_TRANSITION = 'next';
var MONTH_SELECTION_TRANSITION = 'month_selection';
var YEAR_SELECTION_TRANSITION = 'year_selection';

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)((0, _object2['default'])({}, _reactWithStyles.withStylesPropTypes, {

  // calendar presentation props
  enableOutsideDays: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  orientation: _ScrollableOrientationShape2['default'],
  withPortal: _propTypes2['default'].bool,
  onOutsideClick: _propTypes2['default'].func,
  hidden: _propTypes2['default'].bool,
  initialVisibleMonth: _propTypes2['default'].func,
  firstDayOfWeek: _DayOfWeekShape2['default'],
  renderCalendarInfo: _propTypes2['default'].func,
  calendarInfoPosition: _CalendarInfoPositionShape2['default'],
  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isRTL: _propTypes2['default'].bool,
  verticalHeight: _airbnbPropTypes.nonNegativeInteger,
  noBorder: _propTypes2['default'].bool,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,

  // navigation props
  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,
  noNavButtons: _propTypes2['default'].bool,
  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,
  onMonthChange: _propTypes2['default'].func,
  onYearChange: _propTypes2['default'].func,
  onMultiplyScrollableMonths: _propTypes2['default'].func, // VERTICAL_SCROLLABLE daypickers only

  // month props
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes2['default'].func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes2['default'].func, 'renderMonthText', 'renderMonthElement'),

  // day props
  modifiers: _propTypes2['default'].objectOf(_propTypes2['default'].objectOf(_ModifiersShape2['default'])),
  renderCalendarDay: _propTypes2['default'].func,
  renderDayContents: _propTypes2['default'].func,
  onDayClick: _propTypes2['default'].func,
  onDayMouseEnter: _propTypes2['default'].func,
  onDayMouseLeave: _propTypes2['default'].func,

  // accessibility props
  isFocused: _propTypes2['default'].bool,
  getFirstFocusableDay: _propTypes2['default'].func,
  onBlur: _propTypes2['default'].func,
  showKeyboardShortcuts: _propTypes2['default'].bool,

  // internationalization
  monthFormat: _propTypes2['default'].string,
  weekDayFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases)),
  dayAriaLabelFormat: _propTypes2['default'].string
}));

var defaultProps = exports.defaultProps = {
  // calendar presentation props
  enableOutsideDays: false,
  numberOfMonths: 2,
  orientation: _constants.HORIZONTAL_ORIENTATION,
  withPortal: false,
  onOutsideClick: function () {
    function onOutsideClick() {}

    return onOutsideClick;
  }(),

  hidden: false,
  initialVisibleMonth: function () {
    function initialVisibleMonth() {
      return (0, _moment2['default'])();
    }

    return initialVisibleMonth;
  }(),
  firstDayOfWeek: null,
  renderCalendarInfo: null,
  calendarInfoPosition: _constants.INFO_POSITION_BOTTOM,
  hideKeyboardShortcutsPanel: false,
  daySize: _constants.DAY_SIZE,
  isRTL: false,
  verticalHeight: null,
  noBorder: false,
  transitionDuration: undefined,
  verticalBorderSpacing: undefined,
  horizontalMonthPadding: 13,

  // navigation props
  navPrev: null,
  navNext: null,
  noNavButtons: false,
  onPrevMonthClick: function () {
    function onPrevMonthClick() {}

    return onPrevMonthClick;
  }(),
  onNextMonthClick: function () {
    function onNextMonthClick() {}

    return onNextMonthClick;
  }(),
  onMonthChange: function () {
    function onMonthChange() {}

    return onMonthChange;
  }(),
  onYearChange: function () {
    function onYearChange() {}

    return onYearChange;
  }(),
  onMultiplyScrollableMonths: function () {
    function onMultiplyScrollableMonths() {}

    return onMultiplyScrollableMonths;
  }(),


  // month props
  renderMonthText: null,
  renderMonthElement: null,

  // day props
  modifiers: {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  onDayClick: function () {
    function onDayClick() {}

    return onDayClick;
  }(),
  onDayMouseEnter: function () {
    function onDayMouseEnter() {}

    return onDayMouseEnter;
  }(),
  onDayMouseLeave: function () {
    function onDayMouseLeave() {}

    return onDayMouseLeave;
  }(),


  // accessibility props
  isFocused: false,
  getFirstFocusableDay: null,
  onBlur: function () {
    function onBlur() {}

    return onBlur;
  }(),

  showKeyboardShortcuts: false,

  // internationalization
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: _defaultPhrases.DayPickerPhrases,
  dayAriaLabelFormat: undefined
};

var DayPicker = function (_React$Component) {
  _inherits(DayPicker, _React$Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    var currentMonth = props.hidden ? (0, _moment2['default'])() : props.initialVisibleMonth();

    var focusedDate = currentMonth.clone().startOf('month');
    if (props.getFirstFocusableDay) {
      focusedDate = props.getFirstFocusableDay(currentMonth);
    }

    var horizontalMonthPadding = props.horizontalMonthPadding;


    var translationValue = props.isRTL && _this.isHorizontal() ? -(0, _getCalendarMonthWidth2['default'])(props.daySize, horizontalMonthPadding) : 0;

    _this.hasSetInitialVisibleMonth = !props.hidden;
    _this.state = {
      currentMonth: currentMonth,
      monthTransition: null,
      translationValue: translationValue,
      scrollableMonthMultiple: 1,
      calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(props.daySize, horizontalMonthPadding),
      focusedDate: !props.hidden || props.isFocused ? focusedDate : null,
      nextFocusedDate: null,
      showKeyboardShortcuts: props.showKeyboardShortcuts,
      onKeyboardShortcutsPanelClose: function () {
        function onKeyboardShortcutsPanelClose() {}

        return onKeyboardShortcutsPanelClose;
      }(),

      isTouchDevice: (0, _isTouchDevice2['default'])(),
      withMouseInteractions: true,
      calendarInfoWidth: 0,
      monthTitleHeight: null,
      hasSetHeight: false
    };

    _this.setCalendarMonthWeeks(currentMonth);

    _this.calendarMonthGridHeight = 0;
    _this.setCalendarInfoWidthTimeout = null;

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.throttledKeyDown = (0, _throttle2['default'])(_this.onFinalKeyDown, 200, { trailing: false });
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);
    _this.onMonthChange = _this.onMonthChange.bind(_this);
    _this.onYearChange = _this.onYearChange.bind(_this);

    _this.multiplyScrollableMonths = _this.multiplyScrollableMonths.bind(_this);
    _this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind(_this);

    _this.openKeyboardShortcutsPanel = _this.openKeyboardShortcutsPanel.bind(_this);
    _this.closeKeyboardShortcutsPanel = _this.closeKeyboardShortcutsPanel.bind(_this);

    _this.setCalendarInfoRef = _this.setCalendarInfoRef.bind(_this);
    _this.setContainerRef = _this.setContainerRef.bind(_this);
    _this.setTransitionContainerRef = _this.setTransitionContainerRef.bind(_this);
    _this.setMonthTitleHeight = _this.setMonthTitleHeight.bind(_this);
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var currentMonth = this.state.currentMonth;

        if (this.calendarInfo) {
          this.setState({
            isTouchDevice: (0, _isTouchDevice2['default'])(),
            calendarInfoWidth: (0, _calculateDimension2['default'])(this.calendarInfo, 'width', true, true)
          });
        } else {
          this.setState({ isTouchDevice: (0, _isTouchDevice2['default'])() });
        }

        this.setCalendarMonthWeeks(currentMonth);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        var hidden = nextProps.hidden,
            isFocused = nextProps.isFocused,
            showKeyboardShortcuts = nextProps.showKeyboardShortcuts,
            onBlur = nextProps.onBlur,
            renderMonthText = nextProps.renderMonthText,
            horizontalMonthPadding = nextProps.horizontalMonthPadding;
        var currentMonth = this.state.currentMonth;


        if (!hidden) {
          if (!this.hasSetInitialVisibleMonth) {
            this.hasSetInitialVisibleMonth = true;
            this.setState({
              currentMonth: nextProps.initialVisibleMonth()
            });
          }
        }

        var _props = this.props,
            daySize = _props.daySize,
            prevIsFocused = _props.isFocused,
            prevRenderMonthText = _props.renderMonthText;


        if (nextProps.daySize !== daySize) {
          this.setState({
            calendarMonthWidth: (0, _getCalendarMonthWidth2['default'])(nextProps.daySize, horizontalMonthPadding)
          });
        }

        if (isFocused !== prevIsFocused) {
          if (isFocused) {
            var focusedDate = this.getFocusedDay(currentMonth);

            var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;

            if (nextProps.showKeyboardShortcuts) {
              // the ? shortcut came from the input and we should return input there once it is close
              onKeyboardShortcutsPanelClose = onBlur;
            }

            this.setState({
              showKeyboardShortcuts: showKeyboardShortcuts,
              onKeyboardShortcutsPanelClose: onKeyboardShortcutsPanelClose,
              focusedDate: focusedDate,
              withMouseInteractions: false
            });
          } else {
            this.setState({ focusedDate: null });
          }
        }

        if (renderMonthText !== prevRenderMonthText) {
          this.setState({
            monthTitleHeight: null
          });
        }
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'componentWillUpdate',
    value: function () {
      function componentWillUpdate() {
        var _this2 = this;

        var transitionDuration = this.props.transitionDuration;

        // Calculating the dimensions trigger a DOM repaint which
        // breaks the CSS transition.
        // The setTimeout will wait until the transition ends.

        if (this.calendarInfo) {
          this.setCalendarInfoWidthTimeout = setTimeout(function () {
            var calendarInfoWidth = _this2.state.calendarInfoWidth;

            var calendarInfoPanelWidth = (0, _calculateDimension2['default'])(_this2.calendarInfo, 'width', true, true);
            if (calendarInfoWidth !== calendarInfoPanelWidth) {
              _this2.setState({
                calendarInfoWidth: calendarInfoPanelWidth
              });
            }
          }, transitionDuration);
        }
      }

      return componentWillUpdate;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(prevProps) {
        var _props2 = this.props,
            orientation = _props2.orientation,
            daySize = _props2.daySize,
            isFocused = _props2.isFocused,
            numberOfMonths = _props2.numberOfMonths;
        var _state = this.state,
            focusedDate = _state.focusedDate,
            monthTitleHeight = _state.monthTitleHeight;


        if (this.isHorizontal() && (orientation !== prevProps.orientation || daySize !== prevProps.daySize)) {
          var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
          var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);
          var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;
          this.adjustDayPickerHeight(newMonthHeight);
        }

        if (!prevProps.isFocused && isFocused && !focusedDate) {
          this.container.focus();
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        clearTimeout(this.setCalendarInfoWidthTimeout);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'onKeyDown',
    value: function () {
      function onKeyDown(e) {
        e.stopPropagation();
        if (!_constants.MODIFIER_KEY_NAMES.has(e.key)) {
          this.throttledKeyDown(e);
        }
      }

      return onKeyDown;
    }()
  }, {
    key: 'onFinalKeyDown',
    value: function () {
      function onFinalKeyDown(e) {
        this.setState({ withMouseInteractions: false });

        var _props3 = this.props,
            onBlur = _props3.onBlur,
            isRTL = _props3.isRTL;
        var _state2 = this.state,
            focusedDate = _state2.focusedDate,
            showKeyboardShortcuts = _state2.showKeyboardShortcuts;

        if (!focusedDate) return;

        var newFocusedDate = focusedDate.clone();

        var didTransitionMonth = false;

        // focus might be anywhere when the keyboard shortcuts panel is opened so we want to
        // return it to wherever it was before when the panel was opened
        var activeElement = (0, _getActiveElement2['default'])();
        var onKeyboardShortcutsPanelClose = function () {
          function onKeyboardShortcutsPanelClose() {
            if (activeElement) activeElement.focus();
          }

          return onKeyboardShortcutsPanelClose;
        }();

        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            newFocusedDate.subtract(1, 'week');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;
          case 'ArrowLeft':
            e.preventDefault();
            if (isRTL) {
              newFocusedDate.add(1, 'day');
            } else {
              newFocusedDate.subtract(1, 'day');
            }
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;
          case 'Home':
            e.preventDefault();
            newFocusedDate.startOf('week');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;
          case 'PageUp':
            e.preventDefault();
            newFocusedDate.subtract(1, 'month');
            didTransitionMonth = this.maybeTransitionPrevMonth(newFocusedDate);
            break;

          case 'ArrowDown':
            e.preventDefault();
            newFocusedDate.add(1, 'week');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;
          case 'ArrowRight':
            e.preventDefault();
            if (isRTL) {
              newFocusedDate.subtract(1, 'day');
            } else {
              newFocusedDate.add(1, 'day');
            }
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;
          case 'End':
            e.preventDefault();
            newFocusedDate.endOf('week');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;
          case 'PageDown':
            e.preventDefault();
            newFocusedDate.add(1, 'month');
            didTransitionMonth = this.maybeTransitionNextMonth(newFocusedDate);
            break;

          case '?':
            this.openKeyboardShortcutsPanel(onKeyboardShortcutsPanelClose);
            break;

          case 'Escape':
            if (showKeyboardShortcuts) {
              this.closeKeyboardShortcutsPanel();
            } else {
              onBlur();
            }
            break;

          default:
            break;
        }

        // If there was a month transition, do not update the focused date until the transition has
        // completed. Otherwise, attempting to focus on a DOM node may interrupt the CSS animation. If
        // didTransitionMonth is true, the focusedDate gets updated in #updateStateAfterMonthTransition
        if (!didTransitionMonth) {
          this.setState({
            focusedDate: newFocusedDate
          });
        }
      }

      return onFinalKeyDown;
    }()
  }, {
    key: 'onPrevMonthClick',
    value: function () {
      function onPrevMonthClick(nextFocusedDate, e) {
        var _props4 = this.props,
            daySize = _props4.daySize,
            isRTL = _props4.isRTL,
            numberOfMonths = _props4.numberOfMonths;
        var _state3 = this.state,
            calendarMonthWidth = _state3.calendarMonthWidth,
            monthTitleHeight = _state3.monthTitleHeight;


        if (e) e.preventDefault();

        var translationValue = void 0;
        if (this.isVertical()) {
          var calendarMonthWeeksHeight = this.calendarMonthWeeks[0] * (daySize - 1);
          translationValue = monthTitleHeight + calendarMonthWeeksHeight + 1;
        } else if (this.isHorizontal()) {
          translationValue = calendarMonthWidth;
          if (isRTL) {
            translationValue = -2 * calendarMonthWidth;
          }

          var visibleCalendarWeeks = this.calendarMonthWeeks.slice(0, numberOfMonths);
          var _calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);
          var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight + 1;
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: PREV_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onPrevMonthClick;
    }()
  }, {
    key: 'onMonthChange',
    value: function () {
      function onMonthChange(currentMonth) {
        this.setCalendarMonthWeeks(currentMonth);
        this.calculateAndSetDayPickerHeight();

        // Translation value is a hack to force an invisible transition that
        // properly rerenders the CalendarMonthGrid
        this.setState({
          monthTransition: MONTH_SELECTION_TRANSITION,
          translationValue: 0.00001,
          focusedDate: null,
          nextFocusedDate: currentMonth,
          currentMonth: currentMonth
        });
      }

      return onMonthChange;
    }()
  }, {
    key: 'onYearChange',
    value: function () {
      function onYearChange(currentMonth) {
        this.setCalendarMonthWeeks(currentMonth);
        this.calculateAndSetDayPickerHeight();

        // Translation value is a hack to force an invisible transition that
        // properly rerenders the CalendarMonthGrid
        this.setState({
          monthTransition: YEAR_SELECTION_TRANSITION,
          translationValue: 0.0001,
          focusedDate: null,
          nextFocusedDate: currentMonth,
          currentMonth: currentMonth
        });
      }

      return onYearChange;
    }()
  }, {
    key: 'onNextMonthClick',
    value: function () {
      function onNextMonthClick(nextFocusedDate, e) {
        var _props5 = this.props,
            isRTL = _props5.isRTL,
            numberOfMonths = _props5.numberOfMonths,
            daySize = _props5.daySize;
        var _state4 = this.state,
            calendarMonthWidth = _state4.calendarMonthWidth,
            monthTitleHeight = _state4.monthTitleHeight;


        if (e) e.preventDefault();

        var translationValue = void 0;

        if (this.isVertical()) {
          var firstVisibleMonthWeeks = this.calendarMonthWeeks[1];
          var calendarMonthWeeksHeight = firstVisibleMonthWeeks * (daySize - 1);
          translationValue = -(monthTitleHeight + calendarMonthWeeksHeight + 1);
        }

        if (this.isHorizontal()) {
          translationValue = -calendarMonthWidth;
          if (isRTL) {
            translationValue = 0;
          }

          var visibleCalendarWeeks = this.calendarMonthWeeks.slice(2, numberOfMonths + 2);
          var _calendarMonthWeeksHeight2 = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);
          var newMonthHeight = monthTitleHeight + _calendarMonthWeeksHeight2 + 1;
          this.adjustDayPickerHeight(newMonthHeight);
        }

        this.setState({
          monthTransition: NEXT_TRANSITION,
          translationValue: translationValue,
          focusedDate: null,
          nextFocusedDate: nextFocusedDate
        });
      }

      return onNextMonthClick;
    }()
  }, {
    key: 'getFirstDayOfWeek',
    value: function () {
      function getFirstDayOfWeek() {
        var firstDayOfWeek = this.props.firstDayOfWeek;

        if (firstDayOfWeek == null) {
          return _moment2['default'].localeData().firstDayOfWeek();
        }

        return firstDayOfWeek;
      }

      return getFirstDayOfWeek;
    }()
  }, {
    key: 'getFirstVisibleIndex',
    value: function () {
      function getFirstVisibleIndex() {
        var orientation = this.props.orientation;
        var monthTransition = this.state.monthTransition;


        if (orientation === _constants.VERTICAL_SCROLLABLE) return 0;

        var firstVisibleMonthIndex = 1;
        if (monthTransition === PREV_TRANSITION) {
          firstVisibleMonthIndex -= 1;
        } else if (monthTransition === NEXT_TRANSITION) {
          firstVisibleMonthIndex += 1;
        }

        return firstVisibleMonthIndex;
      }

      return getFirstVisibleIndex;
    }()
  }, {
    key: 'getFocusedDay',
    value: function () {
      function getFocusedDay(newMonth) {
        var _props6 = this.props,
            getFirstFocusableDay = _props6.getFirstFocusableDay,
            numberOfMonths = _props6.numberOfMonths;


        var focusedDate = void 0;
        if (getFirstFocusableDay) {
          focusedDate = getFirstFocusableDay(newMonth);
        }

        if (newMonth && (!focusedDate || !(0, _isDayVisible2['default'])(focusedDate, newMonth, numberOfMonths))) {
          focusedDate = newMonth.clone().startOf('month');
        }

        return focusedDate;
      }

      return getFocusedDay;
    }()
  }, {
    key: 'setMonthTitleHeight',
    value: function () {
      function setMonthTitleHeight(monthTitleHeight) {
        var _this3 = this;

        this.setState({
          monthTitleHeight: monthTitleHeight
        }, function () {
          _this3.calculateAndSetDayPickerHeight();
        });
      }

      return setMonthTitleHeight;
    }()
  }, {
    key: 'setCalendarMonthWeeks',
    value: function () {
      function setCalendarMonthWeeks(currentMonth) {
        var numberOfMonths = this.props.numberOfMonths;


        this.calendarMonthWeeks = [];
        var month = currentMonth.clone().subtract(1, 'months');
        var firstDayOfWeek = this.getFirstDayOfWeek();
        for (var i = 0; i < numberOfMonths + 2; i += 1) {
          var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks2['default'])(month, firstDayOfWeek);
          this.calendarMonthWeeks.push(numberOfWeeks);
          month = month.add(1, 'months');
        }
      }

      return setCalendarMonthWeeks;
    }()
  }, {
    key: 'setContainerRef',
    value: function () {
      function setContainerRef(ref) {
        this.container = ref;
      }

      return setContainerRef;
    }()
  }, {
    key: 'setCalendarInfoRef',
    value: function () {
      function setCalendarInfoRef(ref) {
        this.calendarInfo = ref;
      }

      return setCalendarInfoRef;
    }()
  }, {
    key: 'setTransitionContainerRef',
    value: function () {
      function setTransitionContainerRef(ref) {
        this.transitionContainer = ref;
      }

      return setTransitionContainerRef;
    }()
  }, {
    key: 'maybeTransitionNextMonth',
    value: function () {
      function maybeTransitionNextMonth(newFocusedDate) {
        var numberOfMonths = this.props.numberOfMonths;
        var _state5 = this.state,
            currentMonth = _state5.currentMonth,
            focusedDate = _state5.focusedDate;


        var newFocusedDateMonth = newFocusedDate.month();
        var focusedDateMonth = focusedDate.month();
        var isNewFocusedDateVisible = (0, _isDayVisible2['default'])(newFocusedDate, currentMonth, numberOfMonths);
        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
          this.onNextMonthClick(newFocusedDate);
          return true;
        }

        return false;
      }

      return maybeTransitionNextMonth;
    }()
  }, {
    key: 'maybeTransitionPrevMonth',
    value: function () {
      function maybeTransitionPrevMonth(newFocusedDate) {
        var numberOfMonths = this.props.numberOfMonths;
        var _state6 = this.state,
            currentMonth = _state6.currentMonth,
            focusedDate = _state6.focusedDate;


        var newFocusedDateMonth = newFocusedDate.month();
        var focusedDateMonth = focusedDate.month();
        var isNewFocusedDateVisible = (0, _isDayVisible2['default'])(newFocusedDate, currentMonth, numberOfMonths);
        if (newFocusedDateMonth !== focusedDateMonth && !isNewFocusedDateVisible) {
          this.onPrevMonthClick(newFocusedDate);
          return true;
        }

        return false;
      }

      return maybeTransitionPrevMonth;
    }()
  }, {
    key: 'multiplyScrollableMonths',
    value: function () {
      function multiplyScrollableMonths(e) {
        var onMultiplyScrollableMonths = this.props.onMultiplyScrollableMonths;

        if (e) e.preventDefault();

        if (onMultiplyScrollableMonths) onMultiplyScrollableMonths(e);

        this.setState(function (_ref) {
          var scrollableMonthMultiple = _ref.scrollableMonthMultiple;
          return {
            scrollableMonthMultiple: scrollableMonthMultiple + 1
          };
        });
      }

      return multiplyScrollableMonths;
    }()
  }, {
    key: 'isHorizontal',
    value: function () {
      function isHorizontal() {
        var orientation = this.props.orientation;

        return orientation === _constants.HORIZONTAL_ORIENTATION;
      }

      return isHorizontal;
    }()
  }, {
    key: 'isVertical',
    value: function () {
      function isVertical() {
        var orientation = this.props.orientation;

        return orientation === _constants.VERTICAL_ORIENTATION || orientation === _constants.VERTICAL_SCROLLABLE;
      }

      return isVertical;
    }()
  }, {
    key: 'updateStateAfterMonthTransition',
    value: function () {
      function updateStateAfterMonthTransition() {
        var _this4 = this;

        var _props7 = this.props,
            onPrevMonthClick = _props7.onPrevMonthClick,
            onNextMonthClick = _props7.onNextMonthClick,
            numberOfMonths = _props7.numberOfMonths,
            onMonthChange = _props7.onMonthChange,
            onYearChange = _props7.onYearChange,
            isRTL = _props7.isRTL;
        var _state7 = this.state,
            currentMonth = _state7.currentMonth,
            monthTransition = _state7.monthTransition,
            focusedDate = _state7.focusedDate,
            nextFocusedDate = _state7.nextFocusedDate,
            withMouseInteractions = _state7.withMouseInteractions,
            calendarMonthWidth = _state7.calendarMonthWidth;


        if (!monthTransition) return;

        var newMonth = currentMonth.clone();
        var firstDayOfWeek = this.getFirstDayOfWeek();
        if (monthTransition === PREV_TRANSITION) {
          newMonth.subtract(1, 'month');
          if (onPrevMonthClick) onPrevMonthClick(newMonth);
          var newInvisibleMonth = newMonth.clone().subtract(1, 'month');
          var numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks2['default'])(newInvisibleMonth, firstDayOfWeek);
          this.calendarMonthWeeks = [numberOfWeeks].concat(_toConsumableArray(this.calendarMonthWeeks.slice(0, -1)));
        } else if (monthTransition === NEXT_TRANSITION) {
          newMonth.add(1, 'month');
          if (onNextMonthClick) onNextMonthClick(newMonth);
          var _newInvisibleMonth = newMonth.clone().add(numberOfMonths, 'month');
          var _numberOfWeeks = (0, _getNumberOfCalendarMonthWeeks2['default'])(_newInvisibleMonth, firstDayOfWeek);
          this.calendarMonthWeeks = [].concat(_toConsumableArray(this.calendarMonthWeeks.slice(1)), [_numberOfWeeks]);
        } else if (monthTransition === MONTH_SELECTION_TRANSITION) {
          if (onMonthChange) onMonthChange(newMonth);
        } else if (monthTransition === YEAR_SELECTION_TRANSITION) {
          if (onYearChange) onYearChange(newMonth);
        }

        var newFocusedDate = null;
        if (nextFocusedDate) {
          newFocusedDate = nextFocusedDate;
        } else if (!focusedDate && !withMouseInteractions) {
          newFocusedDate = this.getFocusedDay(newMonth);
        }

        this.setState({
          currentMonth: newMonth,
          monthTransition: null,
          translationValue: isRTL && this.isHorizontal() ? -calendarMonthWidth : 0,
          nextFocusedDate: null,
          focusedDate: newFocusedDate
        }, function () {
          // we don't want to focus on the relevant calendar day after a month transition
          // if the user is navigating around using a mouse
          if (withMouseInteractions) {
            var activeElement = (0, _getActiveElement2['default'])();
            if (activeElement && activeElement !== document.body && _this4.container.contains(activeElement)) {
              activeElement.blur();
            }
          }
        });
      }

      return updateStateAfterMonthTransition;
    }()
  }, {
    key: 'adjustDayPickerHeight',
    value: function () {
      function adjustDayPickerHeight(newMonthHeight) {
        var _this5 = this;

        var monthHeight = newMonthHeight + MONTH_PADDING;
        if (monthHeight !== this.calendarMonthGridHeight) {
          this.transitionContainer.style.height = String(monthHeight) + 'px';
          if (!this.calendarMonthGridHeight) {
            setTimeout(function () {
              _this5.setState({ hasSetHeight: true });
            }, 0);
          }
          this.calendarMonthGridHeight = monthHeight;
        }
      }

      return adjustDayPickerHeight;
    }()
  }, {
    key: 'calculateAndSetDayPickerHeight',
    value: function () {
      function calculateAndSetDayPickerHeight() {
        var _props8 = this.props,
            daySize = _props8.daySize,
            numberOfMonths = _props8.numberOfMonths;
        var monthTitleHeight = this.state.monthTitleHeight;


        var visibleCalendarWeeks = this.calendarMonthWeeks.slice(1, numberOfMonths + 1);
        var calendarMonthWeeksHeight = Math.max.apply(Math, [0].concat(_toConsumableArray(visibleCalendarWeeks))) * (daySize - 1);
        var newMonthHeight = monthTitleHeight + calendarMonthWeeksHeight + 1;

        if (this.isHorizontal()) {
          this.adjustDayPickerHeight(newMonthHeight);
        }
      }

      return calculateAndSetDayPickerHeight;
    }()
  }, {
    key: 'openKeyboardShortcutsPanel',
    value: function () {
      function openKeyboardShortcutsPanel(onCloseCallBack) {
        this.setState({
          showKeyboardShortcuts: true,
          onKeyboardShortcutsPanelClose: onCloseCallBack
        });
      }

      return openKeyboardShortcutsPanel;
    }()
  }, {
    key: 'closeKeyboardShortcutsPanel',
    value: function () {
      function closeKeyboardShortcutsPanel() {
        var onKeyboardShortcutsPanelClose = this.state.onKeyboardShortcutsPanelClose;


        if (onKeyboardShortcutsPanelClose) {
          onKeyboardShortcutsPanelClose();
        }

        this.setState({
          onKeyboardShortcutsPanelClose: null,
          showKeyboardShortcuts: false
        });
      }

      return closeKeyboardShortcutsPanel;
    }()
  }, {
    key: 'renderNavigation',
    value: function () {
      function renderNavigation() {
        var _this6 = this;

        var _props9 = this.props,
            navPrev = _props9.navPrev,
            navNext = _props9.navNext,
            noNavButtons = _props9.noNavButtons,
            orientation = _props9.orientation,
            phrases = _props9.phrases,
            isRTL = _props9.isRTL;


        if (noNavButtons) {
          return null;
        }

        var onNextMonthClick = void 0;
        if (orientation === _constants.VERTICAL_SCROLLABLE) {
          onNextMonthClick = this.multiplyScrollableMonths;
        } else {
          onNextMonthClick = function () {
            function onNextMonthClick(e) {
              _this6.onNextMonthClick(null, e);
            }

            return onNextMonthClick;
          }();
        }

        return _react2['default'].createElement(_DayPickerNavigation2['default'], {
          onPrevMonthClick: function () {
            function onPrevMonthClick(e) {
              _this6.onPrevMonthClick(null, e);
            }

            return onPrevMonthClick;
          }(),
          onNextMonthClick: onNextMonthClick,
          navPrev: navPrev,
          navNext: navNext,
          orientation: orientation,
          phrases: phrases,
          isRTL: isRTL
        });
      }

      return renderNavigation;
    }()
  }, {
    key: 'renderWeekHeader',
    value: function () {
      function renderWeekHeader(index) {
        var _props10 = this.props,
            daySize = _props10.daySize,
            horizontalMonthPadding = _props10.horizontalMonthPadding,
            orientation = _props10.orientation,
            weekDayFormat = _props10.weekDayFormat,
            styles = _props10.styles;
        var calendarMonthWidth = this.state.calendarMonthWidth;

        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var horizontalStyle = {
          left: index * calendarMonthWidth
        };
        var verticalStyle = {
          marginLeft: -calendarMonthWidth / 2
        };

        var weekHeaderStyle = {}; // no styles applied to the vertical-scrollable orientation
        if (this.isHorizontal()) {
          weekHeaderStyle = horizontalStyle;
        } else if (this.isVertical() && !verticalScrollable) {
          weekHeaderStyle = verticalStyle;
        }

        var firstDayOfWeek = this.getFirstDayOfWeek();

        var header = [];
        for (var i = 0; i < 7; i += 1) {
          header.push(_react2['default'].createElement(
            'li',
            _extends({ key: i }, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_li, { width: daySize })),
            _react2['default'].createElement(
              'small',
              null,
              (0, _moment2['default'])().day((i + firstDayOfWeek) % 7).format(weekDayFormat)
            )
          ));
        }

        return _react2['default'].createElement(
          'div',
          _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeader, this.isVertical() && styles.DayPicker_weekHeader__vertical, verticalScrollable && styles.DayPicker_weekHeader__verticalScrollable, weekHeaderStyle, { padding: '0 ' + String(horizontalMonthPadding) + 'px' }), {
            key: 'week-' + String(index)
          }),
          _react2['default'].createElement(
            'ul',
            (0, _reactWithStyles.css)(styles.DayPicker_weekHeader_ul),
            header
          )
        );
      }

      return renderWeekHeader;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _this7 = this;

        var _state8 = this.state,
            calendarMonthWidth = _state8.calendarMonthWidth,
            currentMonth = _state8.currentMonth,
            monthTransition = _state8.monthTransition,
            translationValue = _state8.translationValue,
            scrollableMonthMultiple = _state8.scrollableMonthMultiple,
            focusedDate = _state8.focusedDate,
            showKeyboardShortcuts = _state8.showKeyboardShortcuts,
            isTouch = _state8.isTouchDevice,
            hasSetHeight = _state8.hasSetHeight,
            calendarInfoWidth = _state8.calendarInfoWidth,
            monthTitleHeight = _state8.monthTitleHeight;
        var _props11 = this.props,
            enableOutsideDays = _props11.enableOutsideDays,
            numberOfMonths = _props11.numberOfMonths,
            orientation = _props11.orientation,
            modifiers = _props11.modifiers,
            withPortal = _props11.withPortal,
            onDayClick = _props11.onDayClick,
            onDayMouseEnter = _props11.onDayMouseEnter,
            onDayMouseLeave = _props11.onDayMouseLeave,
            firstDayOfWeek = _props11.firstDayOfWeek,
            renderMonthText = _props11.renderMonthText,
            renderCalendarDay = _props11.renderCalendarDay,
            renderDayContents = _props11.renderDayContents,
            renderCalendarInfo = _props11.renderCalendarInfo,
            renderMonthElement = _props11.renderMonthElement,
            calendarInfoPosition = _props11.calendarInfoPosition,
            hideKeyboardShortcutsPanel = _props11.hideKeyboardShortcutsPanel,
            onOutsideClick = _props11.onOutsideClick,
            monthFormat = _props11.monthFormat,
            daySize = _props11.daySize,
            isFocused = _props11.isFocused,
            isRTL = _props11.isRTL,
            styles = _props11.styles,
            theme = _props11.theme,
            phrases = _props11.phrases,
            verticalHeight = _props11.verticalHeight,
            dayAriaLabelFormat = _props11.dayAriaLabelFormat,
            noBorder = _props11.noBorder,
            transitionDuration = _props11.transitionDuration,
            verticalBorderSpacing = _props11.verticalBorderSpacing,
            horizontalMonthPadding = _props11.horizontalMonthPadding;
        var dayPickerHorizontalPadding = theme.reactDates.spacing.dayPickerHorizontalPadding;


        var isHorizontal = this.isHorizontal();

        var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
        var weekHeaders = [];
        for (var i = 0; i < numOfWeekHeaders; i += 1) {
          weekHeaders.push(this.renderWeekHeader(i));
        }

        var verticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
        var height = void 0;
        if (isHorizontal) {
          height = this.calendarMonthGridHeight;
        } else if (this.isVertical() && !verticalScrollable && !withPortal) {
          // If the user doesn't set a desired height,
          // we default back to this kind of made-up value that generally looks good
          height = verticalHeight || 1.75 * calendarMonthWidth;
        }

        var isCalendarMonthGridAnimating = monthTransition !== null;

        var shouldFocusDate = !isCalendarMonthGridAnimating && isFocused;

        var keyboardShortcutButtonLocation = _DayPickerKeyboardShortcuts.BOTTOM_RIGHT;
        if (this.isVertical()) {
          keyboardShortcutButtonLocation = withPortal ? _DayPickerKeyboardShortcuts.TOP_LEFT : _DayPickerKeyboardShortcuts.TOP_RIGHT;
        }

        var shouldAnimateHeight = isHorizontal && hasSetHeight;

        var calendarInfoPositionTop = calendarInfoPosition === _constants.INFO_POSITION_TOP;
        var calendarInfoPositionBottom = calendarInfoPosition === _constants.INFO_POSITION_BOTTOM;
        var calendarInfoPositionBefore = calendarInfoPosition === _constants.INFO_POSITION_BEFORE;
        var calendarInfoPositionAfter = calendarInfoPosition === _constants.INFO_POSITION_AFTER;
        var calendarInfoIsInline = calendarInfoPositionBefore || calendarInfoPositionAfter;

        var calendarInfo = renderCalendarInfo && _react2['default'].createElement(
          'div',
          _extends({
            ref: this.setCalendarInfoRef
          }, (0, _reactWithStyles.css)(calendarInfoIsInline && styles.DayPicker_calendarInfo__horizontal)),
          renderCalendarInfo()
        );

        var calendarInfoPanelWidth = renderCalendarInfo && calendarInfoIsInline ? calendarInfoWidth : 0;

        var firstVisibleMonthIndex = this.getFirstVisibleIndex();
        var wrapperHorizontalWidth = calendarMonthWidth * numberOfMonths + 2 * dayPickerHorizontalPadding;
        // Adding `1px` because of whitespace between 2 inline-block
        var fullHorizontalWidth = wrapperHorizontalWidth + calendarInfoPanelWidth + 1;

        var transitionContainerStyle = {
          width: isHorizontal && wrapperHorizontalWidth,
          height: height
        };

        var dayPickerWrapperStyle = {
          width: isHorizontal && wrapperHorizontalWidth
        };

        var dayPickerStyle = {
          width: isHorizontal && fullHorizontalWidth,

          // These values are to center the datepicker (approximately) on the page
          marginLeft: isHorizontal && withPortal ? -fullHorizontalWidth / 2 : null,
          marginTop: isHorizontal && withPortal ? -calendarMonthWidth / 2 : null
        };

        return _react2['default'].createElement(
          'div',
          _extends({
            role: 'application',
            'aria-label': phrases.calendarLabel
          }, (0, _reactWithStyles.css)(styles.DayPicker, isHorizontal && styles.DayPicker__horizontal, verticalScrollable && styles.DayPicker__verticalScrollable, isHorizontal && withPortal && styles.DayPicker_portal__horizontal, this.isVertical() && withPortal && styles.DayPicker_portal__vertical, dayPickerStyle, !monthTitleHeight && styles.DayPicker__hidden, !noBorder && styles.DayPicker__withBorder)),
          _react2['default'].createElement(
            _reactOutsideClickHandler2['default'],
            { onOutsideClick: onOutsideClick },
            (calendarInfoPositionTop || calendarInfoPositionBefore) && calendarInfo,
            _react2['default'].createElement(
              'div',
              (0, _reactWithStyles.css)(dayPickerWrapperStyle, calendarInfoIsInline && isHorizontal && styles.DayPicker_wrapper__horizontal),
              _react2['default'].createElement(
                'div',
                _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_weekHeaders, isHorizontal && styles.DayPicker_weekHeaders__horizontal), {
                  'aria-hidden': 'true',
                  role: 'presentation'
                }),
                weekHeaders
              ),
              _react2['default'].createElement(
                'div',
                _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_focusRegion), {
                  ref: this.setContainerRef,
                  onClick: function () {
                    function onClick(e) {
                      e.stopPropagation();
                    }

                    return onClick;
                  }(),
                  onKeyDown: this.onKeyDown,
                  onMouseUp: function () {
                    function onMouseUp() {
                      _this7.setState({ withMouseInteractions: true });
                    }

                    return onMouseUp;
                  }(),
                  role: 'region',
                  tabIndex: -1
                }),
                !verticalScrollable && this.renderNavigation(),
                _react2['default'].createElement(
                  'div',
                  _extends({}, (0, _reactWithStyles.css)(styles.DayPicker_transitionContainer, shouldAnimateHeight && styles.DayPicker_transitionContainer__horizontal, this.isVertical() && styles.DayPicker_transitionContainer__vertical, verticalScrollable && styles.DayPicker_transitionContainer__verticalScrollable, transitionContainerStyle), {
                    ref: this.setTransitionContainerRef
                  }),
                  _react2['default'].createElement(_CalendarMonthGrid2['default'], {
                    setMonthTitleHeight: !monthTitleHeight ? this.setMonthTitleHeight : undefined,
                    translationValue: translationValue,
                    enableOutsideDays: enableOutsideDays,
                    firstVisibleMonthIndex: firstVisibleMonthIndex,
                    initialMonth: currentMonth,
                    isAnimating: isCalendarMonthGridAnimating,
                    modifiers: modifiers,
                    orientation: orientation,
                    numberOfMonths: numberOfMonths * scrollableMonthMultiple,
                    onDayClick: onDayClick,
                    onDayMouseEnter: onDayMouseEnter,
                    onDayMouseLeave: onDayMouseLeave,
                    onMonthChange: this.onMonthChange,
                    onYearChange: this.onYearChange,
                    renderMonthText: renderMonthText,
                    renderCalendarDay: renderCalendarDay,
                    renderDayContents: renderDayContents,
                    renderMonthElement: renderMonthElement,
                    onMonthTransitionEnd: this.updateStateAfterMonthTransition,
                    monthFormat: monthFormat,
                    daySize: daySize,
                    firstDayOfWeek: firstDayOfWeek,
                    isFocused: shouldFocusDate,
                    focusedDate: focusedDate,
                    phrases: phrases,
                    isRTL: isRTL,
                    dayAriaLabelFormat: dayAriaLabelFormat,
                    transitionDuration: transitionDuration,
                    verticalBorderSpacing: verticalBorderSpacing,
                    horizontalMonthPadding: horizontalMonthPadding
                  }),
                  verticalScrollable && this.renderNavigation()
                ),
                !isTouch && !hideKeyboardShortcutsPanel && _react2['default'].createElement(_DayPickerKeyboardShortcuts2['default'], {
                  block: this.isVertical() && !withPortal,
                  buttonLocation: keyboardShortcutButtonLocation,
                  showKeyboardShortcutsPanel: showKeyboardShortcuts,
                  openKeyboardShortcutsPanel: this.openKeyboardShortcutsPanel,
                  closeKeyboardShortcutsPanel: this.closeKeyboardShortcutsPanel,
                  phrases: phrases
                })
              )
            ),
            (calendarInfoPositionBottom || calendarInfoPositionAfter) && calendarInfo
          )
        );
      }

      return render;
    }()
  }]);

  return DayPicker;
}(_react2['default'].Component);

DayPicker.propTypes = propTypes;
DayPicker.defaultProps = defaultProps;

exports.PureDayPicker = DayPicker;
exports['default'] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
      color = _ref2$reactDates.color,
      font = _ref2$reactDates.font,
      noScrollBarOnVerticalScrollable = _ref2$reactDates.noScrollBarOnVerticalScrollable,
      spacing = _ref2$reactDates.spacing,
      zIndex = _ref2$reactDates.zIndex;
  return {
    DayPicker: {
      background: color.background,
      position: 'relative',
      textAlign: 'left'
    },

    DayPicker__horizontal: {
      background: color.background
    },

    DayPicker__verticalScrollable: {
      height: '100%'
    },

    DayPicker__hidden: {
      visibility: 'hidden'
    },

    DayPicker__withBorder: {
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07)',
      borderRadius: 3
    },

    DayPicker_portal__horizontal: {
      boxShadow: 'none',
      position: 'absolute',
      left: '50%',
      top: '50%'
    },

    DayPicker_portal__vertical: {
      position: 'initial'
    },

    DayPicker_focusRegion: {
      outline: 'none'
    },

    DayPicker_calendarInfo__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },

    DayPicker_wrapper__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top'
    },

    DayPicker_weekHeaders: {
      position: 'relative'
    },

    DayPicker_weekHeaders__horizontal: {
      marginLeft: spacing.dayPickerHorizontalPadding
    },

    DayPicker_weekHeader: {
      color: color.placeholderText,
      position: 'absolute',
      top: 62,
      zIndex: zIndex + 2,
      textAlign: 'left'
    },

    DayPicker_weekHeader__vertical: {
      left: '50%'
    },

    DayPicker_weekHeader__verticalScrollable: {
      top: 0,
      display: 'table-row',
      borderBottom: '1px solid ' + String(color.core.border),
      background: color.background,
      marginLeft: 0,
      left: 0,
      width: '100%',
      textAlign: 'center'
    },

    DayPicker_weekHeader_ul: {
      listStyle: 'none',
      margin: '1px 0',
      paddingLeft: 0,
      paddingRight: 0,
      fontSize: font.size
    },

    DayPicker_weekHeader_li: {
      display: 'inline-block',
      textAlign: 'center'
    },

    DayPicker_transitionContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 3
    },

    DayPicker_transitionContainer__horizontal: {
      transition: 'height 0.2s ease-in-out'
    },

    DayPicker_transitionContainer__vertical: {
      width: '100%'
    },

    DayPicker_transitionContainer__verticalScrollable: (0, _object2['default'])({
      paddingTop: 20,
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      overflowY: 'scroll'
    }, noScrollBarOnVerticalScrollable && {
      '-webkitOverflowScrolling': 'touch',
      '::-webkit-scrollbar': {
        '-webkit-appearance': 'none',
        display: 'none'
      }
    })
  };
})(DayPicker);

/***/ }),

/***/ "NykK":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    getRawTag = __webpack_require__("AP2z"),
    objectToString = __webpack_require__("KfNM");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "Nym8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActiveElement; });
/* harmony import */ var _getDocument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ouKs");


/**
 * Returns `element.ownerDocument.activeElement`.
 */

function getActiveElement(element) {
  var _getDocument = Object(_getDocument_js__WEBPACK_IMPORTED_MODULE_0__[/* getDocument */ "a"])(element),
      activeElement = _getDocument.activeElement;

  if (!(activeElement !== null && activeElement !== void 0 && activeElement.nodeName)) {
    // In IE11, activeElement might be an empty object if we're interacting
    // with elements inside of an iframe.
    return null;
  }

  return activeElement;
}




/***/ }),

/***/ "Ohaz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConnectedNamespace; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tQ+x");
/**
 * Internal dependencies
 */

/**
 * Creates a dedicated context namespace HTML attribute for components.
 * ns is short for "namespace"
 *
 * @example
 * ```jsx
 * <div {...ns('Container')} />
 * ```
 *
 * @param {string} componentName The name for the component.
 * @return {Record<string, any>} A props object with the namespaced HTML attribute.
 */

function getNamespace(componentName) {
  return {
    [_constants__WEBPACK_IMPORTED_MODULE_0__[/* COMPONENT_NAMESPACE */ "a"]]: componentName
  };
}
/**
 * Creates a dedicated connected context namespace HTML attribute for components.
 * ns is short for "namespace"
 *
 * @example
 * ```jsx
 * <div {...cns()} />
 * ```
 *
 * @return {Record<string, any>} A props object with the namespaced HTML attribute.
 */

function getConnectedNamespace() {
  return {
    [_constants__WEBPACK_IMPORTED_MODULE_0__[/* CONNECTED_NAMESPACE */ "b"]]: true
  };
}


/***/ }),

/***/ "PFEc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = __webpack_require__("eH4f");

// https://ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};


/***/ }),

/***/ "PcHe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasFocusWithin; });
/* harmony import */ var _getActiveElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Nym8");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("utzN");




/**
 * Checks if `element` has focus within. Elements that are referenced by
 * `aria-activedescendant` are also considered.
 *
 * @example
 * import { hasFocusWithin } from "reakit-utils";
 *
 * hasFocusWithin(document.getElementById("id"));
 */

function hasFocusWithin(element) {
  var activeElement = Object(_getActiveElement_js__WEBPACK_IMPORTED_MODULE_0__[/* getActiveElement */ "a"])(element);
  if (!activeElement) return false;
  if (Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__[/* contains */ "a"])(element, activeElement)) return true;
  var activeDescendant = activeElement.getAttribute("aria-activedescendant");
  if (!activeDescendant) return false;
  if (activeDescendant === element.id) return true;
  return !!element.querySelector("#" + activeDescendant);
}




/***/ }),

/***/ "Pjai":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ToPrimitive = __webpack_require__("vLdR");

// http://262.ecma-international.org/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	var prim = ToPrimitive(value, Number);
	if (typeof prim !== 'string') {
		return +prim; // eslint-disable-line no-implicit-coercion
	}

	// eslint-disable-next-line no-control-regex
	var trimmed = prim.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, '');
	if ((/^0[ob]|^[+-]0x/).test(trimmed)) {
		return NaN;
	}

	return +trimmed; // eslint-disable-line no-implicit-coercion
};


/***/ }),

/***/ "PoQ0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__("60zJ");

// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	if (typeof x === 'bigint') {
		return 'BigInt';
	}
	return ES5Type(x);
};


/***/ }),

/***/ "Pq96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = isPrevMonth;

var _moment = __webpack_require__("wy2R");

var _moment2 = _interopRequireDefault(_moment);

var _isSameMonth = __webpack_require__("ulUS");

var _isSameMonth2 = _interopRequireDefault(_isSameMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isPrevMonth(a, b) {
  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
  return (0, _isSameMonth2['default'])(a.clone().subtract(1, 'month'), b);
}

/***/ }),

/***/ "PrET":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("D3zA");
var GetIntrinsic = __webpack_require__("AM7I");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "Ptb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
/**
 * Checks whether `arg` is an object or not.
 *
 * @returns {boolean}
 */
function isObject(arg) {
  return typeof arg === "object" && arg != null;
}




/***/ }),

/***/ "Q4Sy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plus);


/***/ }),

/***/ "QEu6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = exports.CHANNEL = '__direction__';

var DIRECTIONS = exports.DIRECTIONS = {
  LTR: 'ltr',
  RTL: 'rtl'
};

/***/ }),

/***/ "QIyF":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "Qmvf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var has = __webpack_require__("oNNP");
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ }),

/***/ "RDTF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectWithoutPropertiesLoose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _createForOfIteratorHelperLoose; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}




/***/ }),

/***/ "RMJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ "Rhcr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = __webpack_require__("qeuH");
var regexTester = __webpack_require__("ZbWB");
var isPrimitive = __webpack_require__("BeK9");

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = __webpack_require__("Cx2f");

// https://ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'bigint') {
		throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		}
		var trimmed = $trim(value);
		if (trimmed !== value) {
			return ToNumber(trimmed);
		}

	}
	return $Number(value);
};


/***/ }),

/***/ "RxS6":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ "S3lO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $TypeError = GetIntrinsic('%TypeError%');

var DefineOwnProperty = __webpack_require__("wTIp");

var FromPropertyDescriptor = __webpack_require__("rQBh");
var OrdinaryGetOwnProperty = __webpack_require__("6XE+");
var IsDataDescriptor = __webpack_require__("6/BL");
var IsExtensible = __webpack_require__("UaFt");
var IsPropertyKey = __webpack_require__("nR7C");
var SameValue = __webpack_require__("uug5");
var Type = __webpack_require__("PoQ0");

// https://ecma-international.org/ecma-262/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}
	var oldDesc = OrdinaryGetOwnProperty(O, P);
	var extensible = !oldDesc || IsExtensible(O);
	var immutable = oldDesc && (!oldDesc['[[Writable]]'] || !oldDesc['[[Configurable]]']);
	if (immutable || !extensible) {
		return false;
	}
	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		{
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Value]]': V,
			'[[Writable]]': true
		}
	);
};


/***/ }),

/***/ "S8ty":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("j1Hc");

var $abs = GetIntrinsic('%Math.abs%');

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function abs(x) {
	return $abs(x);
};


/***/ }),

/***/ "SB3u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SVG", function() { return /* reexport */ external_wp_primitives_["SVG"]; });
__webpack_require__.d(__webpack_exports__, "Path", function() { return /* reexport */ external_wp_primitives_["Path"]; });
__webpack_require__.d(__webpack_exports__, "Circle", function() { return /* reexport */ external_wp_primitives_["Circle"]; });
__webpack_require__.d(__webpack_exports__, "Polygon", function() { return /* reexport */ external_wp_primitives_["Polygon"]; });
__webpack_require__.d(__webpack_exports__, "Rect", function() { return /* reexport */ external_wp_primitives_["Rect"]; });
__webpack_require__.d(__webpack_exports__, "G", function() { return /* reexport */ external_wp_primitives_["G"]; });
__webpack_require__.d(__webpack_exports__, "HorizontalRule", function() { return /* reexport */ external_wp_primitives_["HorizontalRule"]; });
__webpack_require__.d(__webpack_exports__, "BlockQuotation", function() { return /* reexport */ external_wp_primitives_["BlockQuotation"]; });
__webpack_require__.d(__webpack_exports__, "__experimentalAlignmentMatrixControl", function() { return /* reexport */ AlignmentMatrixControl; });
__webpack_require__.d(__webpack_exports__, "Animate", function() { return /* reexport */ build_module_animate["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "__unstableGetAnimateClassName", function() { return /* reexport */ build_module_animate["b" /* getAnimateClassName */]; });
__webpack_require__.d(__webpack_exports__, "__unstableMotion", function() { return /* reexport */ motion; });
__webpack_require__.d(__webpack_exports__, "AnglePickerControl", function() { return /* reexport */ AnglePickerControl; });
__webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return /* reexport */ Autocomplete; });
__webpack_require__.d(__webpack_exports__, "__unstableUseAutocompleteProps", function() { return /* reexport */ useAutocompleteProps; });
__webpack_require__.d(__webpack_exports__, "BaseControl", function() { return /* reexport */ base_control; });
__webpack_require__.d(__webpack_exports__, "__experimentalBoxControl", function() { return /* reexport */ BoxControl; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ build_module_button["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return /* reexport */ button_group; });
__webpack_require__.d(__webpack_exports__, "Card", function() { return /* reexport */ card_component; });
__webpack_require__.d(__webpack_exports__, "CardBody", function() { return /* reexport */ card_body_component; });
__webpack_require__.d(__webpack_exports__, "CardDivider", function() { return /* reexport */ card_divider_component; });
__webpack_require__.d(__webpack_exports__, "CardFooter", function() { return /* reexport */ card_footer_component; });
__webpack_require__.d(__webpack_exports__, "CardHeader", function() { return /* reexport */ card_header_component; });
__webpack_require__.d(__webpack_exports__, "CardMedia", function() { return /* reexport */ card_media_component; });
__webpack_require__.d(__webpack_exports__, "CheckboxControl", function() { return /* reexport */ CheckboxControl; });
__webpack_require__.d(__webpack_exports__, "ClipboardButton", function() { return /* reexport */ ClipboardButton; });
__webpack_require__.d(__webpack_exports__, "__experimentalPaletteEdit", function() { return /* reexport */ PaletteEdit; });
__webpack_require__.d(__webpack_exports__, "ColorIndicator", function() { return /* reexport */ color_indicator; });
__webpack_require__.d(__webpack_exports__, "ColorPalette", function() { return /* reexport */ ColorPalette; });
__webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return /* reexport */ LegacyAdapter; });
__webpack_require__.d(__webpack_exports__, "ComboboxControl", function() { return /* reexport */ combobox_control; });
__webpack_require__.d(__webpack_exports__, "__unstableComposite", function() { return /* reexport */ Composite; });
__webpack_require__.d(__webpack_exports__, "__unstableCompositeGroup", function() { return /* reexport */ CompositeGroup; });
__webpack_require__.d(__webpack_exports__, "__unstableCompositeItem", function() { return /* reexport */ CompositeItem["a" /* CompositeItem */]; });
__webpack_require__.d(__webpack_exports__, "__unstableUseCompositeState", function() { return /* reexport */ useCompositeState; });
__webpack_require__.d(__webpack_exports__, "CustomSelectControl", function() { return /* reexport */ CustomSelectControl; });
__webpack_require__.d(__webpack_exports__, "Dashicon", function() { return /* reexport */ dashicon["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return /* reexport */ date_time; });
__webpack_require__.d(__webpack_exports__, "DatePicker", function() { return /* reexport */ date_time_date; });
__webpack_require__.d(__webpack_exports__, "TimePicker", function() { return /* reexport */ date_time_time; });
__webpack_require__.d(__webpack_exports__, "__experimentalDimensionControl", function() { return /* reexport */ dimension_control; });
__webpack_require__.d(__webpack_exports__, "Disabled", function() { return /* reexport */ build_module_disabled; });
__webpack_require__.d(__webpack_exports__, "__unstableDisclosureContent", function() { return /* reexport */ DisclosureContent; });
__webpack_require__.d(__webpack_exports__, "__experimentalDivider", function() { return /* reexport */ divider_component; });
__webpack_require__.d(__webpack_exports__, "Draggable", function() { return /* reexport */ Draggable; });
__webpack_require__.d(__webpack_exports__, "DropZone", function() { return /* reexport */ DropZoneComponent; });
__webpack_require__.d(__webpack_exports__, "DropZoneProvider", function() { return /* reexport */ DropZoneProvider; });
__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return /* reexport */ Dropdown; });
__webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return /* reexport */ dropdown_menu; });
__webpack_require__.d(__webpack_exports__, "DuotoneSwatch", function() { return /* reexport */ duotone_swatch; });
__webpack_require__.d(__webpack_exports__, "DuotonePicker", function() { return /* reexport */ duotone_picker; });
__webpack_require__.d(__webpack_exports__, "__experimentalElevation", function() { return /* reexport */ elevation_component; });
__webpack_require__.d(__webpack_exports__, "ExternalLink", function() { return /* reexport */ external_link; });
__webpack_require__.d(__webpack_exports__, "Flex", function() { return /* reexport */ flex_component; });
__webpack_require__.d(__webpack_exports__, "FlexBlock", function() { return /* reexport */ flex_block_component; });
__webpack_require__.d(__webpack_exports__, "FlexItem", function() { return /* reexport */ flex_item_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalFlyout", function() { return /* reexport */ flyout_component; });
__webpack_require__.d(__webpack_exports__, "FocalPointPicker", function() { return /* reexport */ focal_point_picker; });
__webpack_require__.d(__webpack_exports__, "FocusableIframe", function() { return /* reexport */ FocusableIframe; });
__webpack_require__.d(__webpack_exports__, "FontSizePicker", function() { return /* reexport */ font_size_picker; });
__webpack_require__.d(__webpack_exports__, "FormFileUpload", function() { return /* reexport */ form_file_upload; });
__webpack_require__.d(__webpack_exports__, "FormToggle", function() { return /* reexport */ form_toggle; });
__webpack_require__.d(__webpack_exports__, "FormTokenField", function() { return /* reexport */ form_token_field; });
__webpack_require__.d(__webpack_exports__, "GradientPicker", function() { return /* reexport */ GradientPicker; });
__webpack_require__.d(__webpack_exports__, "CustomGradientPicker", function() { return /* reexport */ CustomGradientPicker; });
__webpack_require__.d(__webpack_exports__, "__experimentalGrid", function() { return /* reexport */ grid_component; });
__webpack_require__.d(__webpack_exports__, "Guide", function() { return /* reexport */ Guide; });
__webpack_require__.d(__webpack_exports__, "GuidePage", function() { return /* reexport */ GuidePage; });
__webpack_require__.d(__webpack_exports__, "__experimentalHeading", function() { return /* reexport */ heading_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalHStack", function() { return /* reexport */ h_stack_component; });
__webpack_require__.d(__webpack_exports__, "Icon", function() { return /* reexport */ components_build_module_icon["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "IconButton", function() { return /* reexport */ deprecated; });
__webpack_require__.d(__webpack_exports__, "__experimentalItemGroup", function() { return /* reexport */ item_group_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalItem", function() { return /* reexport */ item_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalInputControl", function() { return /* reexport */ input_control; });
__webpack_require__.d(__webpack_exports__, "KeyboardShortcuts", function() { return /* reexport */ keyboard_shortcuts; });
__webpack_require__.d(__webpack_exports__, "MenuGroup", function() { return /* reexport */ menu_group; });
__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return /* reexport */ menu_item; });
__webpack_require__.d(__webpack_exports__, "MenuItemsChoice", function() { return /* reexport */ MenuItemsChoice; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ Modal; });
__webpack_require__.d(__webpack_exports__, "ScrollLock", function() { return /* reexport */ scroll_lock["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NavigableMenu", function() { return /* reexport */ navigable_container_menu; });
__webpack_require__.d(__webpack_exports__, "TabbableContainer", function() { return /* reexport */ navigable_container_tabbable; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigation", function() { return /* reexport */ Navigation; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigationBackButton", function() { return /* reexport */ back_button; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigationGroup", function() { return /* reexport */ NavigationGroup; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigationItem", function() { return /* reexport */ NavigationItem; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigationMenu", function() { return /* reexport */ NavigationMenu; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigatorProvider", function() { return /* reexport */ navigator_provider_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalNavigatorScreen", function() { return /* reexport */ navigator_screen_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseNavigator", function() { return /* reexport */ use_navigator; });
__webpack_require__.d(__webpack_exports__, "Notice", function() { return /* reexport */ build_module_notice; });
__webpack_require__.d(__webpack_exports__, "__experimentalNumberControl", function() { return /* reexport */ number_control; });
__webpack_require__.d(__webpack_exports__, "NoticeList", function() { return /* reexport */ notice_list; });
__webpack_require__.d(__webpack_exports__, "Panel", function() { return /* reexport */ panel; });
__webpack_require__.d(__webpack_exports__, "PanelBody", function() { return /* reexport */ panel_body; });
__webpack_require__.d(__webpack_exports__, "PanelHeader", function() { return /* reexport */ panel_header; });
__webpack_require__.d(__webpack_exports__, "PanelRow", function() { return /* reexport */ panel_row; });
__webpack_require__.d(__webpack_exports__, "Placeholder", function() { return /* reexport */ build_module_placeholder; });
__webpack_require__.d(__webpack_exports__, "Popover", function() { return /* reexport */ build_module_popover["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "QueryControls", function() { return /* reexport */ QueryControls; });
__webpack_require__.d(__webpack_exports__, "__experimentalRadio", function() { return /* reexport */ build_module_radio; });
__webpack_require__.d(__webpack_exports__, "__experimentalRadioGroup", function() { return /* reexport */ radio_group; });
__webpack_require__.d(__webpack_exports__, "RadioControl", function() { return /* reexport */ RadioControl; });
__webpack_require__.d(__webpack_exports__, "RangeControl", function() { return /* reexport */ range_control; });
__webpack_require__.d(__webpack_exports__, "ResizableBox", function() { return /* reexport */ resizable_box; });
__webpack_require__.d(__webpack_exports__, "ResponsiveWrapper", function() { return /* reexport */ responsive_wrapper; });
__webpack_require__.d(__webpack_exports__, "SandBox", function() { return /* reexport */ Sandbox; });
__webpack_require__.d(__webpack_exports__, "SearchControl", function() { return /* reexport */ search_control; });
__webpack_require__.d(__webpack_exports__, "SelectControl", function() { return /* reexport */ select_control; });
__webpack_require__.d(__webpack_exports__, "Snackbar", function() { return /* reexport */ snackbar["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "SnackbarList", function() { return /* reexport */ snackbar_list; });
__webpack_require__.d(__webpack_exports__, "__experimentalSpacer", function() { return /* reexport */ spacer_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalScrollable", function() { return /* reexport */ scrollable_component; });
__webpack_require__.d(__webpack_exports__, "Spinner", function() { return /* reexport */ Spinner; });
__webpack_require__.d(__webpack_exports__, "__experimentalSurface", function() { return /* reexport */ surface_component; });
__webpack_require__.d(__webpack_exports__, "TabPanel", function() { return /* reexport */ TabPanel; });
__webpack_require__.d(__webpack_exports__, "__experimentalText", function() { return /* reexport */ text_component; });
__webpack_require__.d(__webpack_exports__, "TextControl", function() { return /* reexport */ text_control; });
__webpack_require__.d(__webpack_exports__, "TextareaControl", function() { return /* reexport */ TextareaControl; });
__webpack_require__.d(__webpack_exports__, "TextHighlight", function() { return /* reexport */ text_highlight; });
__webpack_require__.d(__webpack_exports__, "Tip", function() { return /* reexport */ tip; });
__webpack_require__.d(__webpack_exports__, "ToggleControl", function() { return /* reexport */ ToggleControl; });
__webpack_require__.d(__webpack_exports__, "__experimentalToggleGroupControl", function() { return /* reexport */ toggle_group_control_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalToggleGroupControlOption", function() { return /* reexport */ toggle_group_control_option_component; });
__webpack_require__.d(__webpack_exports__, "Toolbar", function() { return /* reexport */ toolbar; });
__webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return /* reexport */ toolbar_button; });
__webpack_require__.d(__webpack_exports__, "ToolbarDropdownMenu", function() { return /* reexport */ toolbar_dropdown_menu; });
__webpack_require__.d(__webpack_exports__, "__experimentalToolbarContext", function() { return /* reexport */ toolbar_context["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ToolbarGroup", function() { return /* reexport */ toolbar_group; });
__webpack_require__.d(__webpack_exports__, "ToolbarItem", function() { return /* reexport */ toolbar_item["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "__experimentalToolsPanel", function() { return /* reexport */ tools_panel_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalToolsPanelItem", function() { return /* reexport */ tools_panel_item_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalToolsPanelContext", function() { return /* reexport */ ToolsPanelContext; });
__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return /* reexport */ build_module_tooltip["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "__experimentalTreeGrid", function() { return /* reexport */ tree_grid; });
__webpack_require__.d(__webpack_exports__, "__experimentalTreeGridRow", function() { return /* reexport */ tree_grid_row; });
__webpack_require__.d(__webpack_exports__, "__experimentalTreeGridCell", function() { return /* reexport */ tree_grid_cell; });
__webpack_require__.d(__webpack_exports__, "__experimentalTreeGridItem", function() { return /* reexport */ tree_grid_item; });
__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return /* reexport */ TreeSelect; });
__webpack_require__.d(__webpack_exports__, "__experimentalTruncate", function() { return /* reexport */ truncate_component; });
__webpack_require__.d(__webpack_exports__, "__experimentalUnitControl", function() { return /* reexport */ unit_control; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseCustomUnits", function() { return /* reexport */ useCustomUnits; });
__webpack_require__.d(__webpack_exports__, "__experimentalParseUnit", function() { return /* reexport */ parseUnit; });
__webpack_require__.d(__webpack_exports__, "__experimentalView", function() { return /* reexport */ view_component["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "VisuallyHidden", function() { return /* reexport */ component["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "__experimentalVStack", function() { return /* reexport */ v_stack_component; });
__webpack_require__.d(__webpack_exports__, "IsolatedEventContainer", function() { return /* reexport */ isolated_event_container; });
__webpack_require__.d(__webpack_exports__, "createSlotFill", function() { return /* reexport */ slot_fill["d" /* createSlotFill */]; });
__webpack_require__.d(__webpack_exports__, "Slot", function() { return /* reexport */ slot_fill["c" /* Slot */]; });
__webpack_require__.d(__webpack_exports__, "Fill", function() { return /* reexport */ slot_fill["a" /* Fill */]; });
__webpack_require__.d(__webpack_exports__, "SlotFillProvider", function() { return /* reexport */ slot_fill["b" /* Provider */]; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseSlot", function() { return /* reexport */ use_slot["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "__experimentalStyleProvider", function() { return /* reexport */ StyleProvider; });
__webpack_require__.d(__webpack_exports__, "__experimentalZStack", function() { return /* reexport */ z_stack_component; });
__webpack_require__.d(__webpack_exports__, "navigateRegions", function() { return /* reexport */ navigate_regions; });
__webpack_require__.d(__webpack_exports__, "__unstableUseNavigateRegions", function() { return /* reexport */ useNavigateRegions; });
__webpack_require__.d(__webpack_exports__, "withConstrainedTabbing", function() { return /* reexport */ with_constrained_tabbing; });
__webpack_require__.d(__webpack_exports__, "withFallbackStyles", function() { return /* reexport */ with_fallback_styles; });
__webpack_require__.d(__webpack_exports__, "withFilters", function() { return /* reexport */ withFilters; });
__webpack_require__.d(__webpack_exports__, "withFocusOutside", function() { return /* reexport */ with_focus_outside; });
__webpack_require__.d(__webpack_exports__, "withFocusReturn", function() { return /* reexport */ with_focus_return; });
__webpack_require__.d(__webpack_exports__, "FocusReturnProvider", function() { return /* reexport */ with_focus_return_Provider; });
__webpack_require__.d(__webpack_exports__, "withNotices", function() { return /* reexport */ with_notices; });
__webpack_require__.d(__webpack_exports__, "withSpokenMessages", function() { return /* reexport */ with_spoken_messages; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/components/build-module/text/styles.js
var text_styles_namespaceObject = {};
__webpack_require__.r(text_styles_namespaceObject);
__webpack_require__.d(text_styles_namespaceObject, "Text", function() { return Text; });
__webpack_require__.d(text_styles_namespaceObject, "block", function() { return styles_block; });
__webpack_require__.d(text_styles_namespaceObject, "positive", function() { return positive; });
__webpack_require__.d(text_styles_namespaceObject, "destructive", function() { return destructive; });
__webpack_require__.d(text_styles_namespaceObject, "muted", function() { return styles_muted; });
__webpack_require__.d(text_styles_namespaceObject, "highlighterText", function() { return highlighterText; });
__webpack_require__.d(text_styles_namespaceObject, "upperCase", function() { return styles_upperCase; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/components/build-module/ui/tooltip/styles.js
var tooltip_styles_namespaceObject = {};
__webpack_require__.r(tooltip_styles_namespaceObject);
__webpack_require__.d(tooltip_styles_namespaceObject, "TooltipContent", function() { return TooltipContent; });
__webpack_require__.d(tooltip_styles_namespaceObject, "TooltipPopoverView", function() { return TooltipPopoverView; });
__webpack_require__.d(tooltip_styles_namespaceObject, "noOutline", function() { return noOutline; });
__webpack_require__.d(tooltip_styles_namespaceObject, "TooltipShortcut", function() { return TooltipShortcut; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/components/build-module/toggle-group-control/toggle-group-control-option/styles.js
var toggle_group_control_option_styles_namespaceObject = {};
__webpack_require__.r(toggle_group_control_option_styles_namespaceObject);
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "LabelView", function() { return LabelView; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "labelBlock", function() { return labelBlock; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "buttonView", function() { return buttonView; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "buttonActive", function() { return buttonActive; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "ButtonContentView", function() { return ButtonContentView; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "separatorActive", function() { return separatorActive; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "LabelPlaceholderView", function() { return LabelPlaceholderView; });
__webpack_require__.d(toggle_group_control_option_styles_namespaceObject, "medium", function() { return medium; });

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// EXTERNAL MODULE: ./node_modules/reakit/es/Composite/CompositeItem.js
var CompositeItem = __webpack_require__("kTC8");

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/tooltip/index.js
var build_module_tooltip = __webpack_require__("W/NR");

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/visually-hidden/component.js + 1 modules
var component = __webpack_require__("iSWJ");

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/alignment-matrix-control/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


const GRID = [['top left', 'top center', 'top right'], ['center left', 'center center', 'center right'], ['bottom left', 'bottom center', 'bottom right']]; // Stored as map as i18n __() only accepts strings (not variables)

const ALIGNMENT_LABEL = {
  'top left': Object(external_wp_i18n_["__"])('Top Left'),
  'top center': Object(external_wp_i18n_["__"])('Top Center'),
  'top right': Object(external_wp_i18n_["__"])('Top Right'),
  'center left': Object(external_wp_i18n_["__"])('Center Left'),
  'center center': Object(external_wp_i18n_["__"])('Center Center'),
  'center right': Object(external_wp_i18n_["__"])('Center Right'),
  'bottom left': Object(external_wp_i18n_["__"])('Bottom Left'),
  'bottom center': Object(external_wp_i18n_["__"])('Bottom Center'),
  'bottom right': Object(external_wp_i18n_["__"])('Bottom Right')
}; // Transforms GRID into a flat Array of values

const ALIGNMENTS = Object(external_lodash_["flattenDeep"])(GRID);
/**
 * Parses and transforms an incoming value to better match the alignment values
 *
 * @param {string} value An alignment value to parse.
 *
 * @return {string} The parsed value.
 */

function transformValue(value) {
  const nextValue = value === 'center' ? 'center center' : value;
  return nextValue.replace('-', ' ');
}
/**
 * Creates an item ID based on a prefix ID and an alignment value.
 *
 * @param {string} prefixId An ID to prefix.
 * @param {string} value    An alignment value.
 *
 * @return {string} The item id.
 */

function utils_getItemId(prefixId, value) {
  const valueId = transformValue(value).replace(' ', '-');
  return `${prefixId}-${valueId}`;
}
/**
 * Retrieves the alignment index from a value.
 *
 * @param {string} alignment Value to check.
 *
 * @return {number} The index of a matching alignment.
 */

function getAlignmentIndex() {
  let alignment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'center';
  const item = transformValue(alignment).replace('-', ' ');
  const index = ALIGNMENTS.indexOf(item);
  return index > -1 ? index : undefined;
}

// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("DZdY");

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("AeFk");

// EXTERNAL MODULE: ./node_modules/colord/index.mjs
var colord = __webpack_require__("fHnH");

// EXTERNAL MODULE: ./node_modules/colord/plugins/names.mjs
var names = __webpack_require__("abaT");

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/utils/colors.js
/**
 * External dependencies
 */


Object(colord["b" /* extend */])([names["a" /* default */]]);
/**
 * Generating a CSS compliant rgba() color value.
 *
 * @param {string} hexValue The hex value to convert to rgba().
 * @param {number} alpha    The alpha value for opacity.
 * @return {string} The converted rgba() color value.
 *
 * @example
 * rgba( '#000000', 0.5 )
 * // rgba(0, 0, 0, 0.5)
 */

function rgba() {
  let hexValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Object(colord["a" /* colord */])(hexValue).alpha(alpha).toRgbString();
}

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/utils/colors-values.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


const BASE = {
  black: '#000',
  white: '#fff'
};
/**
 * TODO: Continue to update values as "G2" design evolves.
 *
 * "G2" refers to the movement to advance the interface of the block editor.
 * https://github.com/WordPress/gutenberg/issues/18667
 */

const G2 = {
  blue: {
    medium: {
      focus: '#007cba',
      focusDark: '#fff'
    }
  },
  gray: {
    900: '#1e1e1e',
    700: '#757575',
    // Meets 4.6:1 text contrast against white.
    600: '#949494',
    // Meets 3:1 UI or large text contrast against white.
    400: '#ccc',
    200: '#ddd',
    // Used for most borders.
    100: '#f0f0f0'
  },
  darkGray: {
    primary: '#1e1e1e',
    heading: '#050505'
  },
  mediumGray: {
    text: '#757575'
  },
  lightGray: {
    ui: '#949494',
    secondary: '#ccc',
    tertiary: '#e7e8e9'
  }
};
const DARK_GRAY = {
  900: '#191e23',
  800: '#23282d',
  700: '#32373c',
  600: '#40464d',
  500: '#555d66',
  // Use this most of the time for dark items.
  400: '#606a73',
  300: '#6c7781',
  // Lightest gray that can be used for AA text contrast.
  200: '#7e8993',
  150: '#8d96a0',
  // Lightest gray that can be used for AA non-text contrast.
  100: '#8f98a1',
  placeholder: rgba(G2.gray[900], 0.62)
};
const DARK_OPACITY = {
  900: rgba('#000510', 0.9),
  800: rgba('#00000a', 0.85),
  700: rgba('#06060b', 0.8),
  600: rgba('#000913', 0.75),
  500: rgba('#0a1829', 0.7),
  400: rgba('#0a1829', 0.65),
  300: rgba('#0e1c2e', 0.62),
  200: rgba('#162435', 0.55),
  100: rgba('#223443', 0.5),
  backgroundFill: rgba(DARK_GRAY[700], 0.7)
};
const DARK_OPACITY_LIGHT = {
  900: rgba('#304455', 0.45),
  800: rgba('#425863', 0.4),
  700: rgba('#667886', 0.35),
  600: rgba('#7b86a2', 0.3),
  500: rgba('#9197a2', 0.25),
  400: rgba('#95959c', 0.2),
  300: rgba('#829493', 0.15),
  200: rgba('#8b8b96', 0.1),
  100: rgba('#747474', 0.05)
};
const LIGHT_GRAY = {
  900: '#a2aab2',
  800: '#b5bcc2',
  700: '#ccd0d4',
  600: '#d7dade',
  500: '#e2e4e7',
  // Good for "grayed" items and borders.
  400: '#e8eaeb',
  // Good for "readonly" input fields and special text selection.
  300: '#edeff0',
  200: '#f3f4f5',
  100: '#f8f9f9',
  placeholder: rgba(BASE.white, 0.65)
};
const LIGHT_OPACITY_LIGHT = {
  900: rgba(BASE.white, 0.5),
  800: rgba(BASE.white, 0.45),
  700: rgba(BASE.white, 0.4),
  600: rgba(BASE.white, 0.35),
  500: rgba(BASE.white, 0.3),
  400: rgba(BASE.white, 0.25),
  300: rgba(BASE.white, 0.2),
  200: rgba(BASE.white, 0.15),
  100: rgba(BASE.white, 0.1),
  backgroundFill: rgba(LIGHT_GRAY[300], 0.8)
}; // Additional colors.
// Some are from https://make.wordpress.org/design/handbook/foundations/colors/.

const BLUE = {
  wordpress: {
    700: '#00669b'
  },
  dark: {
    900: '#0071a1'
  },
  medium: {
    900: '#006589',
    800: '#00739c',
    700: '#007fac',
    600: '#008dbe',
    500: '#00a0d2',
    400: '#33b3db',
    300: '#66c6e4',
    200: '#bfe7f3',
    100: '#e5f5fa',
    highlight: '#b3e7fe',
    focus: '#007cba'
  }
};
const ALERT = {
  yellow: '#f0b849',
  red: '#d94f4f',
  green: '#4ab866'
};
const ADMIN = {
  theme: `var( --wp-admin-theme-color, ${BLUE.wordpress[700]})`,
  themeDark10: `var( --wp-admin-theme-color-darker-10, ${BLUE.medium.focus})`
}; // Namespaced values for raw colors hex codes

const UI = {
  theme: ADMIN.theme,
  background: BASE.white,
  backgroundDisabled: LIGHT_GRAY[200],
  border: G2.gray[700],
  borderHover: G2.gray[700],
  borderFocus: ADMIN.themeDark10,
  borderDisabled: G2.gray[400],
  borderLight: G2.gray[200],
  label: DARK_GRAY[500],
  textDisabled: DARK_GRAY[150],
  textDark: BASE.white,
  textLight: BASE.black
};
const COLORS = { ...BASE,
  darkGray: Object(external_lodash_["merge"])({}, DARK_GRAY, G2.darkGray),
  darkOpacity: DARK_OPACITY,
  darkOpacityLight: DARK_OPACITY_LIGHT,
  mediumGray: G2.mediumGray,
  gray: G2.gray,
  lightGray: Object(external_lodash_["merge"])({}, LIGHT_GRAY, G2.lightGray),
  lightGrayLight: LIGHT_OPACITY_LIGHT,
  blue: Object(external_lodash_["merge"])({}, BLUE, G2.blue),
  alert: ALERT,
  admin: ADMIN,
  ui: UI
};
/* harmony default export */ var colors_values = (COLORS);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/utils/reduce-motion.js
/**
 * Allows users to opt-out of animations via OS-level preferences.
 *
 * @param {'transition' | 'animation' | string} [prop='transition'] CSS Property name
 * @return {string} Generated CSS code for the reduced style
 */
function reduceMotion() {
  let prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transition';
  let style;

  switch (prop) {
    case 'transition':
      style = 'transition-duration: 0ms;';
      break;

    case 'animation':
      style = 'animation-duration: 1ms;';
      break;

    default:
      style = `
				animation-duration: 1ms;
				transition-duration: 0ms;
			`;
  }

  return `
		@media ( prefers-reduced-motion: reduce ) {
			${style};
		}
	`;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/alignment-matrix-control/styles/alignment-matrix-control-styles.js


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var alignment_matrix_control_styles_ref =  true ? {
  name: "lp9rn7",
  styles: "border-radius:2px;box-sizing:border-box;display:grid;grid-template-columns:repeat( 3, 1fr );outline:none"
} : undefined;

const rootBase = () => {
  return alignment_matrix_control_styles_ref;
};

const rootSize = _ref2 => {
  let {
    size = 92
  } = _ref2;
  return /*#__PURE__*/Object(emotion_react_browser_esm["a" /* css */])("grid-template-rows:repeat( 3, calc( ", size, "px / 3 ) );width:", size, "px;" + ( true ? "" : undefined),  true ? "" : undefined);
};

const Root = Object(emotion_styled_base_browser_esm["a" /* default */])("div",  true ? {
  target: "e1od1u4s3"
} : undefined)(rootBase, ";border:1px solid transparent;cursor:pointer;grid-template-columns:auto;", rootSize, ";" + ( true ? "" : undefined));
const Row = Object(emotion_styled_base_browser_esm["a" /* default */])("div",  true ? {
  target: "e1od1u4s2"
} : undefined)( true ? {
  name: "1x5gbbj",
  styles: "box-sizing:border-box;display:grid;grid-template-columns:repeat( 3, 1fr )"
} : undefined);

const pointActive = _ref3 => {
  let {
    isActive
  } = _ref3;
  const boxShadow = isActive ? `0 0 0 2px ${COLORS.black}` : null;
  const pointColor = isActive ? COLORS.black : COLORS.lightGray[800];
  const pointColorHover = isActive ? COLORS.black : COLORS.blue.medium.focus;
  return /*#__PURE__*/Object(emotion_react_browser_esm["a" /* css */])("box-shadow:", boxShadow, ";color:", pointColor, ";*:hover>&{color:", pointColorHover, ";}" + ( true ? "" : undefined),  true ? "" : undefined);
};

const pointBase = props => {
  return /*#__PURE__*/Object(emotion_react_browser_esm["a" /* css */])("background:currentColor;box-sizing:border-box;display:grid;margin:auto;transition:all 120ms linear;", reduceMotion('transition'), " ", pointActive(props), ";" + ( true ? "" : undefined),  true ? "" : undefined);
};
const Point = Object(emotion_styled_base_browser_esm["a" /* default */])("span",  true ? {
  target: "e1od1u4s1"
} : undefined)("height:6px;width:6px;", pointBase, ";" + ( true ? "" : undefined));
const Cell = Object(emotion_styled_base_browser_esm["a" /* default */])("span",  true ? {
  target: "e1od1u4s0"
} : undefined)( true ? {
  name: "rjf3ub",
  styles: "appearance:none;border:none;box-sizing:border-box;margin:0;display:flex;position:relative;outline:none;align-items:center;justify-content:center;padding:0"
} : undefined);

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/alignment-matrix-control/cell.js



/**
 * Internal dependencies
 */



/**
 * Internal dependencies
 */



function cell_Cell(_ref) {
  let {
    isActive = false,
    value,
    ...props
  } = _ref;
  const tooltipText = ALIGNMENT_LABEL[value];
  return Object(external_wp_element_["createElement"])(build_module_tooltip["a" /* default */], {
    text: tooltipText
  }, Object(external_wp_element_["createElement"])(CompositeItem["a" /* CompositeItem */], Object(esm_extends["a" /* default */])({
    as: Cell,
    role: "gridcell"
  }, props), Object(external_wp_element_["createElement"])(component["a" /* default */], null, value), Object(external_wp_element_["createElement"])(Point, {
    isActive: isActive,
    role: "presentation"
  })));
}

// EXTERNAL MODULE: ./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js
var _rollupPluginBabelHelpers_1f0bf8c2 = __webpack_require__("BZp5");

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/useIsomorphicEffect.js
var useIsomorphicEffect = __webpack_require__("AXvK");

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/useSealedState.js


/**
 * React custom hook that returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 */
function useSealedState(initialState) {
  var _React$useState = Object(external_React_["useState"])(initialState),
      sealed = _React$useState[0];

  return sealed;
}



// EXTERNAL MODULE: ./node_modules/reakit-utils/es/getDocument.js
var getDocument = __webpack_require__("ouKs");

// CONCATENATED MODULE: ./node_modules/reakit/es/reverse-30eaa122.js


function groupItems(items) {
  var groups = [[]];

  var _loop = function _loop() {
    var item = _step.value;
    var group = groups.find(function (g) {
      return !g[0] || g[0].groupId === item.groupId;
    });

    if (group) {
      group.push(item);
    } else {
      groups.push([item]);
    }
  };

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2["c" /* b */])(items), _step; !(_step = _iterator()).done;) {
    _loop();
  }

  return groups;
}

function flatten(grid) {
  var flattened = [];

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2["c" /* b */])(grid), _step; !(_step = _iterator()).done;) {
    var row = _step.value;
    flattened.push.apply(flattened, row);
  }

  return flattened;
}

function reverse(array) {
  return array.slice().reverse();
}



// EXTERNAL MODULE: ./node_modules/reakit/es/getCurrentId-5aa9849e.js
var getCurrentId_5aa9849e = __webpack_require__("iYXd");

// CONCATENATED MODULE: ./node_modules/reakit/es/findEnabledItemById-8ddca752.js
function findEnabledItemById(items, id) {
  if (!id) return undefined;
  return items === null || items === void 0 ? void 0 : items.find(function (item) {
    return item.id === id && !item.disabled;
  });
}



// CONCATENATED MODULE: ./node_modules/reakit-utils/es/applyState.js
function isUpdater(argument) {
  return typeof argument === "function";
}
/**
 * Receives a `setState` argument and calls it with `currentValue` if it's a
 * function. Otherwise return the argument as the new value.
 *
 * @example
 * import { applyState } from "reakit-utils";
 *
 * applyState((value) => value + 1, 1); // 2
 * applyState(2, 1); // 2
 */


function applyState(argument, currentValue) {
  if (isUpdater(argument)) {
    return argument(currentValue);
  }

  return argument;
}



// EXTERNAL MODULE: ./node_modules/reakit/es/Id/IdProvider.js
var IdProvider = __webpack_require__("KCH1");

// CONCATENATED MODULE: ./node_modules/reakit/es/Id/IdState.js




function unstable_useIdState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      initialBaseId = _useSealedState.baseId;

  var generateId = Object(external_React_["useContext"])(IdProvider["a" /* unstable_IdContext */]);
  var idCountRef = Object(external_React_["useRef"])(0);

  var _React$useState = Object(external_React_["useState"])(function () {
    return initialBaseId || generateId();
  }),
      baseId = _React$useState[0],
      setBaseId = _React$useState[1];

  return {
    baseId: baseId,
    setBaseId: setBaseId,
    unstable_idCountRef: idCountRef
  };
}



// CONCATENATED MODULE: ./node_modules/reakit/es/Composite/CompositeState.js












function isElementPreceding(element1, element2) {
  return Boolean(element2.compareDocumentPosition(element1) & Node.DOCUMENT_POSITION_PRECEDING);
}

function findDOMIndex(items, item) {
  return items.findIndex(function (currentItem) {
    if (!currentItem.ref.current || !item.ref.current) {
      return false;
    }

    return isElementPreceding(item.ref.current, currentItem.ref.current);
  });
}

function getMaxLength(rows) {
  var maxLength = 0;

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2["c" /* b */])(rows), _step; !(_step = _iterator()).done;) {
    var length = _step.value.length;

    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

/**
 * Turns [row1, row1, row2, row2] into [row1, row2, row1, row2]
 */

function verticalizeItems(items) {
  var groups = groupItems(items);
  var maxLength = getMaxLength(groups);
  var verticalized = [];

  for (var i = 0; i < maxLength; i += 1) {
    for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2["c" /* b */])(groups), _step; !(_step = _iterator()).done;) {
      var group = _step.value;

      if (group[i]) {
        verticalized.push(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, group[i]), {}, {
          // If there's no groupId, it means that it's not a grid composite,
          // but a single row instead. So, instead of verticalizing it, that
          // is, assigning a different groupId based on the column index, we
          // keep it undefined so they will be part of the same group.
          // It's useful when using up/down on one-dimensional composites.
          groupId: group[i].groupId ? "" + i : undefined
        }));
      }
    }
  }

  return verticalized;
}

function createEmptyItem(groupId) {
  return {
    id: "__EMPTY_ITEM__",
    disabled: true,
    ref: {
      current: null
    },
    groupId: groupId
  };
}
/**
 * Turns [[row1, row1], [row2]] into [[row1, row1], [row2, row2]]
 */


function fillGroups(groups, currentId, shift) {
  var maxLength = getMaxLength(groups);

  for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2["c" /* b */])(groups), _step; !(_step = _iterator()).done;) {
    var group = _step.value;

    for (var i = 0; i < maxLength; i += 1) {
      var item = group[i];

      if (!item || shift && item.disabled) {
        var isFrist = i === 0;
        var previousItem = isFrist && shift ? Object(getCurrentId_5aa9849e["a" /* f */])(group) : group[i - 1];
        group[i] = previousItem && currentId !== (previousItem === null || previousItem === void 0 ? void 0 : previousItem.id) && shift ? previousItem : createEmptyItem(previousItem === null || previousItem === void 0 ? void 0 : previousItem.groupId);
      }
    }
  }

  return groups;
}

var nullItem = {
  id: null,
  ref: {
    current: null
  }
};
function placeItemsAfter(items, id, shouldInsertNullItem) {
  var index = items.findIndex(function (item) {
    return item.id === id;
  });
  return [].concat(items.slice(index + 1), shouldInsertNullItem ? [nullItem] : [], items.slice(0, index));
}

function getItemsInGroup(items, groupId) {
  return items.filter(function (item) {
    return item.groupId === groupId;
  });
}

var map = {
  horizontal: "vertical",
  vertical: "horizontal"
};
function getOppositeOrientation(orientation) {
  return orientation && map[orientation];
}

function addItemAtIndex(array, item, index) {
  if (!(index in array)) {
    return [].concat(array, [item]);
  }

  return [].concat(array.slice(0, index), [item], array.slice(index));
}

function sortBasedOnDOMPosition(items) {
  var pairs = items.map(function (item, index) {
    return [index, item];
  });
  var isOrderDifferent = false;
  pairs.sort(function (_ref, _ref2) {
    var indexA = _ref[0],
        a = _ref[1];
    var indexB = _ref2[0],
        b = _ref2[1];
    var elementA = a.ref.current;
    var elementB = b.ref.current;
    if (!elementA || !elementB) return 0; // a before b

    if (isElementPreceding(elementA, elementB)) {
      if (indexA > indexB) {
        isOrderDifferent = true;
      }

      return -1;
    } // a after b


    if (indexA < indexB) {
      isOrderDifferent = true;
    }

    return 1;
  });

  if (isOrderDifferent) {
    return pairs.map(function (_ref3) {
      var _ = _ref3[0],
          item = _ref3[1];
      return item;
    });
  }

  return items;
}

function setItemsBasedOnDOMPosition(items, setItems) {
  var sortedItems = sortBasedOnDOMPosition(items);

  if (items !== sortedItems) {
    setItems(sortedItems);
  }
}

function getCommonParent(items) {
  var _firstItem$ref$curren;

  var firstItem = items[0],
      nextItems = items.slice(1);
  var parentElement = firstItem === null || firstItem === void 0 ? void 0 : (_firstItem$ref$curren = firstItem.ref.current) === null || _firstItem$ref$curren === void 0 ? void 0 : _firstItem$ref$curren.parentElement;

  var _loop = function _loop() {
    var parent = parentElement;

    if (nextItems.every(function (item) {
      return parent.contains(item.ref.current);
    })) {
      return {
        v: parentElement
      };
    }

    parentElement = parentElement.parentElement;
  };

  while (parentElement) {
    var _ret = _loop();

    if (typeof _ret === "object") return _ret.v;
  }

  return Object(getDocument["a" /* getDocument */])(parentElement).body;
} // istanbul ignore next: JSDOM doesn't support IntersectionObverser
// See https://github.com/jsdom/jsdom/issues/2032


function useIntersectionObserver(items, setItems) {
  var previousItems = Object(external_React_["useRef"])([]);
  Object(external_React_["useEffect"])(function () {
    var callback = function callback() {
      var hasPreviousItems = !!previousItems.current.length; // We don't want to sort items if items have been just registered.

      if (hasPreviousItems) {
        setItemsBasedOnDOMPosition(items, setItems);
      }

      previousItems.current = items;
    };

    var root = getCommonParent(items);
    var observer = new IntersectionObserver(callback, {
      root: root
    });

    for (var _iterator = Object(_rollupPluginBabelHelpers_1f0bf8c2["c" /* b */])(items), _step; !(_step = _iterator()).done;) {
      var item = _step.value;

      if (item.ref.current) {
        observer.observe(item.ref.current);
      }
    }

    return function () {
      observer.disconnect();
    };
  }, [items]);
}

function useTimeoutObserver(items, setItems) {
  Object(external_React_["useEffect"])(function () {
    var callback = function callback() {
      return setItemsBasedOnDOMPosition(items, setItems);
    };

    var timeout = setTimeout(callback, 250);
    return function () {
      return clearTimeout(timeout);
    };
  });
}

function useSortBasedOnDOMPosition(items, setItems) {
  if (typeof IntersectionObserver === "function") {
    useIntersectionObserver(items, setItems);
  } else {
    useTimeoutObserver(items, setItems);
  }
}

function CompositeState_reducer(state, action) {
  var virtual = state.unstable_virtual,
      rtl = state.rtl,
      orientation = state.orientation,
      items = state.items,
      groups = state.groups,
      currentId = state.currentId,
      loop = state.loop,
      wrap = state.wrap,
      pastIds = state.pastIds,
      shift = state.shift,
      moves = state.unstable_moves,
      includesBaseElement = state.unstable_includesBaseElement,
      initialVirtual = state.initialVirtual,
      initialRTL = state.initialRTL,
      initialOrientation = state.initialOrientation,
      initialCurrentId = state.initialCurrentId,
      initialLoop = state.initialLoop,
      initialWrap = state.initialWrap,
      initialShift = state.initialShift,
      hasSetCurrentId = state.hasSetCurrentId;

  switch (action.type) {
    case "registerGroup":
      {
        var _group = action.group; // If there are no groups yet, just add it as the first one

        if (groups.length === 0) {
          return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
            groups: [_group]
          });
        } // Finds the group index based on DOM position


        var index = findDOMIndex(groups, _group);
        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          groups: addItemAtIndex(groups, _group, index)
        });
      }

    case "unregisterGroup":
      {
        var _id = action.id;
        var nextGroups = groups.filter(function (group) {
          return group.id !== _id;
        }); // The group isn't registered, so do nothing

        if (nextGroups.length === groups.length) {
          return state;
        }

        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          groups: nextGroups
        });
      }

    case "registerItem":
      {
        var _item = action.item; // Finds the item group based on the DOM hierarchy

        var _group2 = groups.find(function (r) {
          var _r$ref$current;

          return (_r$ref$current = r.ref.current) === null || _r$ref$current === void 0 ? void 0 : _r$ref$current.contains(_item.ref.current);
        }); // Group will be null if it's a one-dimensional composite


        var nextItem = Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({
          groupId: _group2 === null || _group2 === void 0 ? void 0 : _group2.id
        }, _item);

        var _index = findDOMIndex(items, nextItem);

        var nextState = Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          items: addItemAtIndex(items, nextItem, _index)
        });

        if (!hasSetCurrentId && !moves && initialCurrentId === undefined) {
          var _findFirstEnabledItem;

          // Sets currentId to the first enabled item. This runs whenever an item
          // is registered because the first enabled item may be registered
          // asynchronously.
          return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, nextState), {}, {
            currentId: (_findFirstEnabledItem = Object(getCurrentId_5aa9849e["a" /* f */])(nextState.items)) === null || _findFirstEnabledItem === void 0 ? void 0 : _findFirstEnabledItem.id
          });
        }

        return nextState;
      }

    case "unregisterItem":
      {
        var _id2 = action.id;
        var nextItems = items.filter(function (item) {
          return item.id !== _id2;
        }); // The item isn't registered, so do nothing

        if (nextItems.length === items.length) {
          return state;
        } // Filters out the item that is being removed from the pastIds list


        var nextPastIds = pastIds.filter(function (pastId) {
          return pastId !== _id2;
        });

        var _nextState = Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          pastIds: nextPastIds,
          items: nextItems
        }); // If the current item is the item that is being removed, focus pastId


        if (currentId && currentId === _id2) {
          var nextId = includesBaseElement ? null : Object(getCurrentId_5aa9849e["b" /* g */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState), {}, {
            currentId: nextPastIds[0]
          }));
          return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState), {}, {
            currentId: nextId
          });
        }

        return _nextState;
      }

    case "move":
      {
        var _id3 = action.id; // move() does nothing

        if (_id3 === undefined) {
          return state;
        } // Removes the current item and the item that is receiving focus from the
        // pastIds list


        var filteredPastIds = pastIds.filter(function (pastId) {
          return pastId !== currentId && pastId !== _id3;
        }); // If there's a currentId, add it to the pastIds list so it can be focused
        // if the new item gets removed or disabled

        var _nextPastIds = currentId ? [currentId].concat(filteredPastIds) : filteredPastIds;

        var _nextState2 = Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          pastIds: _nextPastIds
        }); // move(null) will focus the composite element itself, not an item


        if (_id3 === null) {
          return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState2), {}, {
            unstable_moves: moves + 1,
            currentId: Object(getCurrentId_5aa9849e["b" /* g */])(_nextState2, _id3)
          });
        }

        var _item2 = findEnabledItemById(items, _id3);

        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState2), {}, {
          unstable_moves: _item2 ? moves + 1 : moves,
          currentId: Object(getCurrentId_5aa9849e["b" /* g */])(_nextState2, _item2 === null || _item2 === void 0 ? void 0 : _item2.id)
        });
      }

    case "next":
      {
        // If there's no item focused, we just move the first one
        if (currentId == null) {
          return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
            type: "first"
          }));
        } // RTL doesn't make sense on vertical navigation


        var isHorizontal = orientation !== "vertical";
        var isRTL = rtl && isHorizontal;
        var allItems = isRTL ? reverse(items) : items;
        var currentItem = allItems.find(function (item) {
          return item.id === currentId;
        }); // If there's no item focused, we just move the first one

        if (!currentItem) {
          return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
            type: "first"
          }));
        }

        var isGrid = !!currentItem.groupId;
        var currentIndex = allItems.indexOf(currentItem);

        var _nextItems = allItems.slice(currentIndex + 1);

        var nextItemsInGroup = getItemsInGroup(_nextItems, currentItem.groupId); // Home, End

        if (action.allTheWay) {
          // We reverse so we can get the last enabled item in the group. If it's
          // RTL, nextItems and nextItemsInGroup are already reversed and don't
          // have the items before the current one anymore. So we have to get
          // items in group again with allItems.
          var _nextItem2 = Object(getCurrentId_5aa9849e["a" /* f */])(isRTL ? getItemsInGroup(allItems, currentItem.groupId) : reverse(nextItemsInGroup));

          return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
            type: "move",
            id: _nextItem2 === null || _nextItem2 === void 0 ? void 0 : _nextItem2.id
          }));
        }

        var oppositeOrientation = getOppositeOrientation( // If it's a grid and orientation is not set, it's a next/previous
        // call, which is inherently horizontal. up/down will call next with
        // orientation set to vertical by default (see below on up/down cases).
        isGrid ? orientation || "horizontal" : orientation);
        var canLoop = loop && loop !== oppositeOrientation;
        var canWrap = isGrid && wrap && wrap !== oppositeOrientation;
        var hasNullItem = // `previous` and `up` will set action.hasNullItem, but when calling
        // next directly, hasNullItem will only be true if it's not a grid and
        // loop is set to true, which means that pressing right or down keys on
        // grids will never focus the composite element. On one-dimensional
        // composites that don't loop, pressing right or down keys also doesn't
        // focus the composite element.
        action.hasNullItem || !isGrid && canLoop && includesBaseElement;

        if (canLoop) {
          var loopItems = canWrap && !hasNullItem ? allItems : getItemsInGroup(allItems, currentItem.groupId); // Turns [0, 1, current, 3, 4] into [3, 4, 0, 1]

          var sortedItems = placeItemsAfter(loopItems, currentId, hasNullItem);

          var _nextItem3 = Object(getCurrentId_5aa9849e["a" /* f */])(sortedItems, currentId);

          return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
            type: "move",
            id: _nextItem3 === null || _nextItem3 === void 0 ? void 0 : _nextItem3.id
          }));
        }

        if (canWrap) {
          var _nextItem4 = Object(getCurrentId_5aa9849e["a" /* f */])( // We can use nextItems, which contains all the next items, including
          // items from other groups, to wrap between groups. However, if there
          // is a null item (the composite element), we'll only use the next
          // items in the group. So moving next from the last item will focus
          // the composite element (null). On grid composites, horizontal
          // navigation never focuses the composite element, only vertical.
          hasNullItem ? nextItemsInGroup : _nextItems, currentId);

          var _nextId = hasNullItem ? (_nextItem4 === null || _nextItem4 === void 0 ? void 0 : _nextItem4.id) || null : _nextItem4 === null || _nextItem4 === void 0 ? void 0 : _nextItem4.id;

          return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
            type: "move",
            id: _nextId
          }));
        }

        var _nextItem = Object(getCurrentId_5aa9849e["a" /* f */])(nextItemsInGroup, currentId);

        if (!_nextItem && hasNullItem) {
          return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
            type: "move",
            id: null
          }));
        }

        return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
          type: "move",
          id: _nextItem === null || _nextItem === void 0 ? void 0 : _nextItem.id
        }));
      }

    case "previous":
      {
        // If currentId is initially set to null, the composite element will be
        // focusable while navigating with arrow keys. But, if it's a grid, we
        // don't want to focus the composite element with horizontal navigation.
        var _isGrid = !!groups.length;

        var _hasNullItem = !_isGrid && includesBaseElement;

        var _nextState3 = CompositeState_reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          items: reverse(items)
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
          type: "next",
          hasNullItem: _hasNullItem
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState3), {}, {
          items: items
        });
      }

    case "down":
      {
        var shouldShift = shift && !action.allTheWay; // First, we make sure groups have the same number of items by filling it
        // with disabled fake items. Then, we reorganize the items list so
        // [1-1, 1-2, 2-1, 2-2] becomes [1-1, 2-1, 1-2, 2-2].

        var verticalItems = verticalizeItems(flatten(fillGroups(groupItems(items), currentId, shouldShift)));

        var _canLoop = loop && loop !== "horizontal"; // Pressing down arrow key will only focus the composite element if loop
        // is true or vertical.


        var _hasNullItem2 = _canLoop && includesBaseElement;

        var _nextState4 = CompositeState_reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          orientation: "vertical",
          items: verticalItems
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
          type: "next",
          hasNullItem: _hasNullItem2
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState4), {}, {
          orientation: orientation,
          items: items
        });
      }

    case "up":
      {
        var _shouldShift = shift && !action.allTheWay;

        var _verticalItems = verticalizeItems(reverse(flatten(fillGroups(groupItems(items), currentId, _shouldShift)))); // If currentId is initially set to null, we'll always focus the
        // composite element when the up arrow key is pressed in the first row.


        var _hasNullItem3 = includesBaseElement;

        var _nextState5 = CompositeState_reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          orientation: "vertical",
          items: _verticalItems
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
          type: "next",
          hasNullItem: _hasNullItem3
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState5), {}, {
          orientation: orientation,
          items: items
        });
      }

    case "first":
      {
        var firstItem = Object(getCurrentId_5aa9849e["a" /* f */])(items);
        return CompositeState_reducer(state, Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
          type: "move",
          id: firstItem === null || firstItem === void 0 ? void 0 : firstItem.id
        }));
      }

    case "last":
      {
        var _nextState6 = CompositeState_reducer(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          items: reverse(items)
        }), Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, action), {}, {
          type: "first"
        }));

        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, _nextState6), {}, {
          items: items
        });
      }

    case "sort":
      {
        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          items: sortBasedOnDOMPosition(items),
          groups: sortBasedOnDOMPosition(groups)
        });
      }

    case "setVirtual":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        unstable_virtual: applyState(action.virtual, virtual)
      });

    case "setRTL":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        rtl: applyState(action.rtl, rtl)
      });

    case "setOrientation":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        orientation: applyState(action.orientation, orientation)
      });

    case "setCurrentId":
      {
        var nextCurrentId = Object(getCurrentId_5aa9849e["b" /* g */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          currentId: applyState(action.currentId, currentId)
        }));
        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          currentId: nextCurrentId,
          hasSetCurrentId: true
        });
      }

    case "setLoop":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        loop: applyState(action.loop, loop)
      });

    case "setWrap":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        wrap: applyState(action.wrap, wrap)
      });

    case "setShift":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        shift: applyState(action.shift, shift)
      });

    case "setIncludesBaseElement":
      {
        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          unstable_includesBaseElement: applyState(action.includesBaseElement, includesBaseElement)
        });
      }

    case "reset":
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
        unstable_virtual: initialVirtual,
        rtl: initialRTL,
        orientation: initialOrientation,
        currentId: Object(getCurrentId_5aa9849e["b" /* g */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          currentId: initialCurrentId
        })),
        loop: initialLoop,
        wrap: initialWrap,
        shift: initialShift,
        unstable_moves: 0,
        pastIds: []
      });

    case "setItems":
      {
        return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, state), {}, {
          items: action.items
        });
      }

    default:
      throw new Error();
  }
}

function useAction(fn) {
  return Object(external_React_["useCallback"])(fn, []);
}

function useIsUnmountedRef() {
  var isUnmountedRef = Object(external_React_["useRef"])(false);
  Object(useIsomorphicEffect["a" /* useIsomorphicEffect */])(function () {
    return function () {
      isUnmountedRef.current = true;
    };
  }, []);
  return isUnmountedRef;
}

function useCompositeState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState(initialState),
      _useSealedState$unsta = _useSealedState.unstable_virtual,
      virtual = _useSealedState$unsta === void 0 ? false : _useSealedState$unsta,
      _useSealedState$rtl = _useSealedState.rtl,
      rtl = _useSealedState$rtl === void 0 ? false : _useSealedState$rtl,
      orientation = _useSealedState.orientation,
      currentId = _useSealedState.currentId,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? false : _useSealedState$loop,
      _useSealedState$wrap = _useSealedState.wrap,
      wrap = _useSealedState$wrap === void 0 ? false : _useSealedState$wrap,
      _useSealedState$shift = _useSealedState.shift,
      shift = _useSealedState$shift === void 0 ? false : _useSealedState$shift,
      unstable_includesBaseElement = _useSealedState.unstable_includesBaseElement,
      sealed = Object(_rollupPluginBabelHelpers_1f0bf8c2["a" /* _ */])(_useSealedState, ["unstable_virtual", "rtl", "orientation", "currentId", "loop", "wrap", "shift", "unstable_includesBaseElement"]);

  var idState = unstable_useIdState(sealed);

  var _React$useReducer = Object(external_React_["useReducer"])(CompositeState_reducer, {
    unstable_virtual: virtual,
    rtl: rtl,
    orientation: orientation,
    items: [],
    groups: [],
    currentId: currentId,
    loop: loop,
    wrap: wrap,
    shift: shift,
    unstable_moves: 0,
    pastIds: [],
    unstable_includesBaseElement: unstable_includesBaseElement != null ? unstable_includesBaseElement : currentId === null,
    initialVirtual: virtual,
    initialRTL: rtl,
    initialOrientation: orientation,
    initialCurrentId: currentId,
    initialLoop: loop,
    initialWrap: wrap,
    initialShift: shift
  }),
      _React$useReducer$ = _React$useReducer[0],
      pastIds = _React$useReducer$.pastIds,
      initialVirtual = _React$useReducer$.initialVirtual,
      initialRTL = _React$useReducer$.initialRTL,
      initialOrientation = _React$useReducer$.initialOrientation,
      initialCurrentId = _React$useReducer$.initialCurrentId,
      initialLoop = _React$useReducer$.initialLoop,
      initialWrap = _React$useReducer$.initialWrap,
      initialShift = _React$useReducer$.initialShift,
      hasSetCurrentId = _React$useReducer$.hasSetCurrentId,
      state = Object(_rollupPluginBabelHelpers_1f0bf8c2["a" /* _ */])(_React$useReducer$, ["pastIds", "initialVirtual", "initialRTL", "initialOrientation", "initialCurrentId", "initialLoop", "initialWrap", "initialShift", "hasSetCurrentId"]),
      dispatch = _React$useReducer[1];

  var _React$useState = Object(external_React_["useState"])(false),
      hasActiveWidget = _React$useState[0],
      setHasActiveWidget = _React$useState[1]; // register/unregister may be called when this component is unmounted. We
  // store the unmounted state here so we don't update the state if it's true.
  // This only happens in a very specific situation.
  // See https://github.com/reakit/reakit/issues/650


  var isUnmountedRef = useIsUnmountedRef();
  var setItems = Object(external_React_["useCallback"])(function (items) {
    return dispatch({
      type: "setItems",
      items: items
    });
  }, []);
  useSortBasedOnDOMPosition(state.items, setItems);
  return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, idState), state), {}, {
    unstable_hasActiveWidget: hasActiveWidget,
    unstable_setHasActiveWidget: setHasActiveWidget,
    registerItem: useAction(function (item) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "registerItem",
        item: item
      });
    }),
    unregisterItem: useAction(function (id) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "unregisterItem",
        id: id
      });
    }),
    registerGroup: useAction(function (group) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "registerGroup",
        group: group
      });
    }),
    unregisterGroup: useAction(function (id) {
      if (isUnmountedRef.current) return;
      dispatch({
        type: "unregisterGroup",
        id: id
      });
    }),
    move: useAction(function (id) {
      return dispatch({
        type: "move",
        id: id
      });
    }),
    next: useAction(function (allTheWay) {
      return dispatch({
        type: "next",
        allTheWay: allTheWay
      });
    }),
    previous: useAction(function (allTheWay) {
      return dispatch({
        type: "previous",
        allTheWay: allTheWay
      });
    }),
    up: useAction(function (allTheWay) {
      return dispatch({
        type: "up",
        allTheWay: allTheWay
      });
    }),
    down: useAction(function (allTheWay) {
      return dispatch({
        type: "down",
        allTheWay: allTheWay
      });
    }),
    first: useAction(function () {
      return dispatch({
        type: "first"
      });
    }),
    last: useAction(function () {
      return dispatch({
        type: "last"
      });
    }),
    sort: useAction(function () {
      return dispatch({
        type: "sort"
      });
    }),
    unstable_setVirtual: useAction(function (value) {
      return dispatch({
        type: "setVirtual",
        virtual: value
      });
    }),
    setRTL: useAction(function (value) {
      return dispatch({
        type: "setRTL",
        rtl: value
      });
    }),
    setOrientation: useAction(function (value) {
      return dispatch({
        type: "setOrientation",
        orientation: value
      });
    }),
    setCurrentId: useAction(function (value) {
      return dispatch({
        type: "setCurrentId",
        currentId: value
      });
    }),
    setLoop: useAction(function (value) {
      return dispatch({
        type: "setLoop",
        loop: value
      });
    }),
    setWrap: useAction(function (value) {
      return dispatch({
        type: "setWrap",
        wrap: value
      });
    }),
    setShift: useAction(function (value) {
      return dispatch({
        type: "setShift",
        shift: value
      });
    }),
    unstable_setIncludesBaseElement: useAction(function (value) {
      return dispatch({
        type: "setIncludesBaseElement",
        includesBaseElement: value
      });
    }),
    reset: useAction(function () {
      return dispatch({
        type: "reset"
      });
    })
  });
}



// EXTERNAL MODULE: ./node_modules/reakit-system/es/createComponent.js + 3 modules
var createComponent = __webpack_require__("hE48");

// EXTERNAL MODULE: ./node_modules/reakit-system/es/createHook.js + 4 modules
var createHook = __webpack_require__("qdes");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/useForkRef.js
var useForkRef = __webpack_require__("aU41");

// EXTERNAL MODULE: ./node_modules/reakit-warning/es/index.js + 1 modules
var es = __webpack_require__("KA1K");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/useLiveRef.js
var useLiveRef = __webpack_require__("eNtd");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/isSelfTarget.js
var isSelfTarget = __webpack_require__("k2cL");

// EXTERNAL MODULE: ./node_modules/reakit/es/Role/Role.js
var Role = __webpack_require__("zGFp");

// EXTERNAL MODULE: ./node_modules/reakit/es/Tabbable/Tabbable.js
var Tabbable = __webpack_require__("G3V0");

// EXTERNAL MODULE: ./node_modules/reakit-system/es/useCreateElement.js
var useCreateElement = __webpack_require__("IVEb");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/_rollupPluginBabelHelpers-1f0bf8c2.js
var es_rollupPluginBabelHelpers_1f0bf8c2 = __webpack_require__("I/A+");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/createEvent.js
var createEvent = __webpack_require__("khzz");

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/fireBlurEvent.js




function createFocusEvent(element, type, eventInit) {
  if (eventInit === void 0) {
    eventInit = {};
  }

  if (typeof FocusEvent === "function") {
    return new FocusEvent(type, eventInit);
  }

  return Object(createEvent["a" /* createEvent */])(element, type, eventInit);
}
/**
 * Creates and dispatches a blur event in a way that also works on IE 11.
 *
 * @example
 * import { fireBlurEvent } from "reakit-utils";
 *
 * fireBlurEvent(document.getElementById("id"));
 */


function fireBlurEvent(element, eventInit) {
  var event = createFocusEvent(element, "blur", eventInit);
  var defaultAllowed = element.dispatchEvent(event);

  var bubbleInit = Object(es_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(es_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, eventInit), {}, {
    bubbles: true
  });

  element.dispatchEvent(createFocusEvent(element, "focusout", bubbleInit));
  return defaultAllowed;
}



// EXTERNAL MODULE: ./node_modules/reakit-utils/es/getWindow.js
var getWindow = __webpack_require__("SyVe");

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/fireKeyboardEvent.js



function createKeyboardEvent(element, type, eventInit) {
  if (eventInit === void 0) {
    eventInit = {};
  }

  if (typeof KeyboardEvent === "function") {
    return new KeyboardEvent(type, eventInit);
  } // IE 11 doesn't support Event constructors


  var event = Object(getDocument["a" /* getDocument */])(element).createEvent("KeyboardEvent");
  event.initKeyboardEvent(type, eventInit.bubbles, eventInit.cancelable, Object(getWindow["a" /* getWindow */])(element), eventInit.key, eventInit.location, eventInit.ctrlKey, eventInit.altKey, eventInit.shiftKey, eventInit.metaKey);
  return event;
}
/**
 * Creates and dispatches `KeyboardEvent` in a way that also works on IE 11.
 *
 * @example
 * import { fireKeyboardEvent } from "reakit-utils";
 *
 * fireKeyboardEvent(document.getElementById("id"), "keydown", {
 *   key: "ArrowDown",
 *   shiftKey: true,
 * });
 */


function fireKeyboardEvent(element, type, eventInit) {
  return element.dispatchEvent(createKeyboardEvent(element, type, eventInit));
}



// EXTERNAL MODULE: ./node_modules/reakit-utils/es/canUseDOM.js
var canUseDOM = __webpack_require__("+ipW");

// EXTERNAL MODULE: ./node_modules/reakit-utils/es/getActiveElement.js
var getActiveElement = __webpack_require__("Nym8");

// CONCATENATED MODULE: ./node_modules/reakit-utils/es/getNextActiveElementOnBlur.js





var isIE11 = canUseDOM["a" /* canUseDOM */] && "msCrypto" in window;
/**
 * Cross-browser method that returns the next active element (the element that
 * is receiving focus) after a blur event is dispatched. It receives the blur
 * event object as the argument.
 *
 * @example
 * import { getNextActiveElementOnBlur } from "reakit-utils";
 *
 * const element = document.getElementById("id");
 * element.addEventListener("blur", (event) => {
 *   const nextActiveElement = getNextActiveElementOnBlur(event);
 * });
 */

function getNextActiveElementOnBlur(event) {
  // IE 11 doesn't support event.relatedTarget on blur.
  // document.activeElement points the the next active element.
  // On modern browsers, document.activeElement points to the current target.
  if (isIE11) {
    var activeElement = Object(getActiveElement["a" /* getActiveElement */])(event.currentTarget);
    return activeElement;
  }

  return event.relatedTarget;
}



// EXTERNAL MODULE: ./node_modules/reakit/es/__keys-6742f591.js
var _keys_6742f591 = __webpack_require__("TFuP");

// EXTERNAL MODULE: ./node_modules/reakit/es/userFocus-e16425e3.js
var userFocus_e16425e3 = __webpack_require__("Mih7");

// CONCATENATED MODULE: ./node_modules/reakit/es/Composite/Composite.js





























var Composite_isIE11 = canUseDOM["a" /* canUseDOM */] && "msCrypto" in window;

function canProxyKeyboardEvent(event) {
  if (!Object(isSelfTarget["a" /* isSelfTarget */])(event)) return false;
  if (event.metaKey) return false;
  if (event.key === "Tab") return false;
  return true;
}

function useKeyboardEventProxy(virtual, currentItem, htmlEventHandler) {
  var eventHandlerRef = Object(useLiveRef["a" /* useLiveRef */])(htmlEventHandler);
  return Object(external_React_["useCallback"])(function (event) {
    var _eventHandlerRef$curr;

    (_eventHandlerRef$curr = eventHandlerRef.current) === null || _eventHandlerRef$curr === void 0 ? void 0 : _eventHandlerRef$curr.call(eventHandlerRef, event);
    if (event.defaultPrevented) return;

    if (virtual && canProxyKeyboardEvent(event)) {
      var currentElement = currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current;

      if (currentElement) {
        if (!fireKeyboardEvent(currentElement, event.type, event)) {
          event.preventDefault();
        } // The event will be triggered on the composite item and then
        // propagated up to this composite element again, so we can pretend
        // that it wasn't called on this component in the first place.


        if (event.currentTarget.contains(currentElement)) {
          event.stopPropagation();
        }
      }
    }
  }, [virtual, currentItem]);
} // istanbul ignore next


function useActiveElementRef(elementRef) {
  var activeElementRef = Object(external_React_["useRef"])(null);
  Object(external_React_["useEffect"])(function () {
    var document = Object(getDocument["a" /* getDocument */])(elementRef.current);

    var onFocus = function onFocus(event) {
      var target = event.target;
      activeElementRef.current = target;
    };

    document.addEventListener("focus", onFocus, true);
    return function () {
      document.removeEventListener("focus", onFocus, true);
    };
  }, []);
  return activeElementRef;
}

function findFirstEnabledItemInTheLastRow(items) {
  return Object(getCurrentId_5aa9849e["a" /* f */])(flatten(reverse(groupItems(items))));
}

function isItem(items, element) {
  return items === null || items === void 0 ? void 0 : items.some(function (item) {
    return !!element && item.ref.current === element;
  });
}

function useScheduleUserFocus(currentItem) {
  var currentItemRef = Object(useLiveRef["a" /* useLiveRef */])(currentItem);

  var _React$useReducer = Object(external_React_["useReducer"])(function (n) {
    return n + 1;
  }, 0),
      scheduled = _React$useReducer[0],
      schedule = _React$useReducer[1];

  Object(external_React_["useEffect"])(function () {
    var _currentItemRef$curre;

    var currentElement = (_currentItemRef$curre = currentItemRef.current) === null || _currentItemRef$curre === void 0 ? void 0 : _currentItemRef$curre.ref.current;

    if (scheduled && currentElement) {
      Object(userFocus_e16425e3["c" /* u */])(currentElement);
    }
  }, [scheduled]);
  return schedule;
}

var useComposite = Object(createHook["a" /* createHook */])({
  name: "Composite",
  compose: [Tabbable["a" /* useTabbable */]],
  keys: _keys_6742f591["a" /* C */],
  useOptions: function useOptions(options) {
    return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, options), {}, {
      currentId: Object(getCurrentId_5aa9849e["b" /* g */])(options)
    });
  },
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlOnFocusCapture = _ref.onFocusCapture,
        htmlOnFocus = _ref.onFocus,
        htmlOnBlurCapture = _ref.onBlurCapture,
        htmlOnKeyDown = _ref.onKeyDown,
        htmlOnKeyDownCapture = _ref.onKeyDownCapture,
        htmlOnKeyUpCapture = _ref.onKeyUpCapture,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2["a" /* _ */])(_ref, ["ref", "onFocusCapture", "onFocus", "onBlurCapture", "onKeyDown", "onKeyDownCapture", "onKeyUpCapture"]);

    var ref = Object(external_React_["useRef"])(null);
    var currentItem = findEnabledItemById(options.items, options.currentId);
    var previousElementRef = Object(external_React_["useRef"])(null);
    var onFocusCaptureRef = Object(useLiveRef["a" /* useLiveRef */])(htmlOnFocusCapture);
    var onFocusRef = Object(useLiveRef["a" /* useLiveRef */])(htmlOnFocus);
    var onBlurCaptureRef = Object(useLiveRef["a" /* useLiveRef */])(htmlOnBlurCapture);
    var onKeyDownRef = Object(useLiveRef["a" /* useLiveRef */])(htmlOnKeyDown);
    var scheduleUserFocus = useScheduleUserFocus(currentItem); // IE 11 doesn't support event.relatedTarget, so we use the active element
    // ref instead.

    var activeElementRef = Composite_isIE11 ? useActiveElementRef(ref) : undefined;
    Object(external_React_["useEffect"])(function () {
      var element = ref.current;

      if (options.unstable_moves && !currentItem) {
         false ? undefined : void 0; // If composite.move(null) has been called, the composite container
        // will receive focus.

        element === null || element === void 0 ? void 0 : element.focus();
      }
    }, [options.unstable_moves, currentItem]);
    var onKeyDownCapture = useKeyboardEventProxy(options.unstable_virtual, currentItem, htmlOnKeyDownCapture);
    var onKeyUpCapture = useKeyboardEventProxy(options.unstable_virtual, currentItem, htmlOnKeyUpCapture);
    var onFocusCapture = Object(external_React_["useCallback"])(function (event) {
      var _onFocusCaptureRef$cu;

      (_onFocusCaptureRef$cu = onFocusCaptureRef.current) === null || _onFocusCaptureRef$cu === void 0 ? void 0 : _onFocusCaptureRef$cu.call(onFocusCaptureRef, event);
      if (event.defaultPrevented) return;
      if (!options.unstable_virtual) return; // IE11 doesn't support event.relatedTarget, so we use the active
      // element ref instead.

      var previousActiveElement = (activeElementRef === null || activeElementRef === void 0 ? void 0 : activeElementRef.current) || event.relatedTarget;
      var previousActiveElementWasItem = isItem(options.items, previousActiveElement);

      if (Object(isSelfTarget["a" /* isSelfTarget */])(event) && previousActiveElementWasItem) {
        // Composite has been focused as a result of an item receiving focus.
        // The composite item will move focus back to the composite
        // container. In this case, we don't want to propagate this
        // additional event nor call the onFocus handler passed to
        // <Composite onFocus={...} />.
        event.stopPropagation(); // We keep track of the previous active item element so we can
        // manually fire a blur event on it later when the focus is moved to
        // another item on the onBlurCapture event below.

        previousElementRef.current = previousActiveElement;
      }
    }, [options.unstable_virtual, options.items]);
    var onFocus = Object(external_React_["useCallback"])(function (event) {
      var _onFocusRef$current;

      (_onFocusRef$current = onFocusRef.current) === null || _onFocusRef$current === void 0 ? void 0 : _onFocusRef$current.call(onFocusRef, event);
      if (event.defaultPrevented) return;

      if (options.unstable_virtual) {
        if (Object(isSelfTarget["a" /* isSelfTarget */])(event)) {
          // This means that the composite element has been focused while the
          // composite item has not. For example, by clicking on the
          // composite element without touching any item, or by tabbing into
          // the composite element. In this case, we want to trigger focus on
          // the item, just like it would happen with roving tabindex.
          // When it receives focus, the composite item will put focus back
          // on the composite element, in which case hasItemWithFocus will be
          // true.
          scheduleUserFocus();
        }
      } else if (Object(isSelfTarget["a" /* isSelfTarget */])(event)) {
        var _options$setCurrentId;

        // When the roving tabindex composite gets intentionally focused (for
        // example, by clicking directly on it, and not on an item), we make
        // sure to set the current id to null (which means the composite
        // itself is focused).
        (_options$setCurrentId = options.setCurrentId) === null || _options$setCurrentId === void 0 ? void 0 : _options$setCurrentId.call(options, null);
      }
    }, [options.unstable_virtual, options.setCurrentId]);
    var onBlurCapture = Object(external_React_["useCallback"])(function (event) {
      var _onBlurCaptureRef$cur;

      (_onBlurCaptureRef$cur = onBlurCaptureRef.current) === null || _onBlurCaptureRef$cur === void 0 ? void 0 : _onBlurCaptureRef$cur.call(onBlurCaptureRef, event);
      if (event.defaultPrevented) return;
      if (!options.unstable_virtual) return; // When virtual is set to true, we move focus from the composite
      // container (this component) to the composite item that is being
      // selected. Then we move focus back to the composite container. This
      // is so we can provide the same API as the roving tabindex method,
      // which means people can attach onFocus/onBlur handlers on the
      // CompositeItem component regardless of whether it's virtual or not.
      // This sequence of blurring and focusing items and composite may be
      // confusing, so we ignore intermediate focus and blurs by stopping its
      // propagation and not calling the passed onBlur handler (htmlOnBlur).

      var currentElement = (currentItem === null || currentItem === void 0 ? void 0 : currentItem.ref.current) || null;
      var nextActiveElement = getNextActiveElementOnBlur(event);
      var nextActiveElementIsItem = isItem(options.items, nextActiveElement);

      if (Object(isSelfTarget["a" /* isSelfTarget */])(event) && nextActiveElementIsItem) {
        // This is an intermediate blur event: blurring the composite
        // container to focus an item (nextActiveElement).
        if (nextActiveElement === currentElement) {
          // The next active element will be the same as the current item in
          // the state in two scenarios:
          //   - Moving focus with keyboard: the state is updated before the
          // blur event is triggered, so here the current item is already
          // pointing to the next active element.
          //   - Clicking on the current active item with a pointer: this
          // will trigger blur on the composite element and then the next
          // active element will be the same as the current item. Clicking on
          // an item other than the current one doesn't end up here as the
          // currentItem state will be updated only after it.
          if (previousElementRef.current && previousElementRef.current !== nextActiveElement) {
            // If there's a previous active item and it's not a click action,
            // then we fire a blur event on it so it will work just like if
            // it had DOM focus before (like when using roving tabindex).
            fireBlurEvent(previousElementRef.current, event);
          }
        } else if (currentElement) {
          // This will be true when the next active element is not the
          // current element, but there's a current item. This will only
          // happen when clicking with a pointer on a different item, when
          // there's already an item selected, in which case currentElement
          // is the item that is getting blurred, and nextActiveElement is
          // the item that is being clicked.
          fireBlurEvent(currentElement, event);
        } // We want to ignore intermediate blur events, so we stop its
        // propagation and return early so onFocus will not be called.


        event.stopPropagation();
      } else {
        var targetIsItem = isItem(options.items, event.target);

        if (!targetIsItem && currentElement) {
          // If target is not a composite item, it may be the composite
          // element itself (isSelfTarget) or a tabbable element inside the
          // composite widget. This may be triggered by clicking outside the
          // composite widget or by tabbing out of it. In either cases we
          // want to fire a blur event on the current item.
          fireBlurEvent(currentElement, event);
        }
      }
    }, [options.unstable_virtual, options.items, currentItem]);
    var onKeyDown = Object(external_React_["useCallback"])(function (event) {
      var _onKeyDownRef$current, _options$groups;

      (_onKeyDownRef$current = onKeyDownRef.current) === null || _onKeyDownRef$current === void 0 ? void 0 : _onKeyDownRef$current.call(onKeyDownRef, event);
      if (event.defaultPrevented) return;
      if (options.currentId !== null) return;
      if (!Object(isSelfTarget["a" /* isSelfTarget */])(event)) return;
      var isVertical = options.orientation !== "horizontal";
      var isHorizontal = options.orientation !== "vertical";
      var isGrid = !!((_options$groups = options.groups) !== null && _options$groups !== void 0 && _options$groups.length);

      var up = function up() {
        if (isGrid) {
          var item = findFirstEnabledItemInTheLastRow(options.items);

          if (item !== null && item !== void 0 && item.id) {
            var _options$move;

            (_options$move = options.move) === null || _options$move === void 0 ? void 0 : _options$move.call(options, item.id);
          }
        } else {
          var _options$last;

          (_options$last = options.last) === null || _options$last === void 0 ? void 0 : _options$last.call(options);
        }
      };

      var keyMap = {
        ArrowUp: (isGrid || isVertical) && up,
        ArrowRight: (isGrid || isHorizontal) && options.first,
        ArrowDown: (isGrid || isVertical) && options.first,
        ArrowLeft: (isGrid || isHorizontal) && options.last,
        Home: options.first,
        End: options.last,
        PageUp: options.first,
        PageDown: options.last
      };
      var action = keyMap[event.key];

      if (action) {
        event.preventDefault();
        action();
      }
    }, [options.currentId, options.orientation, options.groups, options.items, options.move, options.last, options.first]);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({
      ref: Object(useForkRef["a" /* useForkRef */])(ref, htmlRef),
      id: options.baseId,
      onFocus: onFocus,
      onFocusCapture: onFocusCapture,
      onBlurCapture: onBlurCapture,
      onKeyDownCapture: onKeyDownCapture,
      onKeyDown: onKeyDown,
      onKeyUpCapture: onKeyUpCapture,
      "aria-activedescendant": options.unstable_virtual ? (currentItem === null || currentItem === void 0 ? void 0 : currentItem.id) || undefined : undefined
    }, htmlProps);
  },
  useComposeProps: function useComposeProps(options, htmlProps) {
    htmlProps = Object(Role["a" /* useRole */])(options, htmlProps, true);
    var tabbableHTMLProps = Object(Tabbable["a" /* useTabbable */])(options, htmlProps, true);

    if (options.unstable_virtual || options.currentId === null) {
      // Composite will only be tabbable by default if the focus is managed
      // using aria-activedescendant, which requires DOM focus on the container
      // element (the composite)
      return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({
        tabIndex: 0
      }, tabbableHTMLProps);
    }

    return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])(Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({}, htmlProps), {}, {
      ref: tabbableHTMLProps.ref
    });
  }
});
var Composite = Object(createComponent["a" /* createComponent */])({
  as: "div",
  useHook: useComposite,
  useCreateElement: function useCreateElement$1(type, props, children) {
     false ? undefined : void 0;
    return Object(useCreateElement["a" /* useCreateElement */])(type, props, children);
  }
});



// EXTERNAL MODULE: ./node_modules/reakit/es/Id/Id.js
var Id = __webpack_require__("ym77");

// CONCATENATED MODULE: ./node_modules/reakit/es/Group/Group.js






// Automatically generated
var GROUP_KEYS = [];

var useGroup = Object(createHook["a" /* createHook */])({
  name: "Group",
  compose: Role["a" /* useRole */],
  keys: GROUP_KEYS,
  useProps: function useProps(_, htmlProps) {
    return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({
      role: "group"
    }, htmlProps);
  }
});
var Group = Object(createComponent["a" /* createComponent */])({
  as: "div",
  useHook: useGroup
});



// CONCATENATED MODULE: ./node_modules/reakit/es/Composite/CompositeGroup.js














var useCompositeGroup = Object(createHook["a" /* createHook */])({
  name: "CompositeGroup",
  compose: [useGroup, Id["a" /* unstable_useId */]],
  keys: _keys_6742f591["b" /* a */],
  propsAreEqual: function propsAreEqual(prev, next) {
    if (!next.id || prev.id !== next.id) {
      return useGroup.unstable_propsAreEqual(prev, next);
    }

    var prevCurrentId = prev.currentId,
        prevMoves = prev.unstable_moves,
        prevProps = Object(_rollupPluginBabelHelpers_1f0bf8c2["a" /* _ */])(prev, ["currentId", "unstable_moves"]);

    var nextCurrentId = next.currentId,
        nextMoves = next.unstable_moves,
        nextProps = Object(_rollupPluginBabelHelpers_1f0bf8c2["a" /* _ */])(next, ["currentId", "unstable_moves"]);

    if (prev.items && next.items) {
      var prevCurrentItem = findEnabledItemById(prev.items, prevCurrentId);
      var nextCurrentItem = findEnabledItemById(next.items, nextCurrentId);
      var prevGroupId = prevCurrentItem === null || prevCurrentItem === void 0 ? void 0 : prevCurrentItem.groupId;
      var nextGroupId = nextCurrentItem === null || nextCurrentItem === void 0 ? void 0 : nextCurrentItem.groupId;

      if (next.id === nextGroupId || next.id === prevGroupId) {
        return false;
      }
    }

    return useGroup.unstable_propsAreEqual(prevProps, nextProps);
  },
  useProps: function useProps(options, _ref) {
    var htmlRef = _ref.ref,
        htmlProps = Object(_rollupPluginBabelHelpers_1f0bf8c2["a" /* _ */])(_ref, ["ref"]);

    var ref = Object(external_React_["useRef"])(null);
    var id = options.id; // We need this to be called before CompositeItems' register

    Object(useIsomorphicEffect["a" /* useIsomorphicEffect */])(function () {
      var _options$registerGrou;

      if (!id) return undefined;
      (_options$registerGrou = options.registerGroup) === null || _options$registerGrou === void 0 ? void 0 : _options$registerGrou.call(options, {
        id: id,
        ref: ref
      });
      return function () {
        var _options$unregisterGr;

        (_options$unregisterGr = options.unregisterGroup) === null || _options$unregisterGr === void 0 ? void 0 : _options$unregisterGr.call(options, id);
      };
    }, [id, options.registerGroup, options.unregisterGroup]);
    return Object(_rollupPluginBabelHelpers_1f0bf8c2["b" /* a */])({
      ref: Object(useForkRef["a" /* useForkRef */])(ref, htmlRef)
    }, htmlProps);
  }
});
var CompositeGroup = Object(createComponent["a" /* createComponent */])({
  as: "div",
  useHook: useCompositeGroup
});



// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/alignment-matrix-control/styles/alignment-matrix-control-icon-styles.js


function alignment_matrix_control_icon_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const alignment_matrix_control_icon_styles_rootSize = () => {
  const padding = 1.5;
  const size = 24;
  return /*#__PURE__*/Object(emotion_react_browser_esm["a" /* css */])({
    gridTemplateRows: `repeat( 3, calc( ${size - padding * 2}px / 3))`,
    padding,
    maxHeight: size,
    maxWidth: size
  },  true ? "" : undefined,  true ? "" : undefined);
};

const rootPointerEvents = _ref => {
  let {
    disablePointerEvents
  } = _ref;
  return /*#__PURE__*/Object(emotion_react_browser_esm["a" /* css */])({
    pointerEvents: disablePointerEvents ? 'none' : null
  },  true ? "" : undefined,  true ? "" : undefined);
};

const alignment_matrix_control_icon_styles_Wrapper = Object(emotion_styled_base_browser_esm["a" /* default */])("div",  true ? {
  target: "elqsdmc2"
} : undefined)( true ? {
  name: "ogl07i",
  styles: "box-sizing:border-box;padding:2px"
} : undefined);
const alignment_matrix_control_icon_styles_Root = Object(emotion_styled_base_browser_esm["a" /* default */])("div",  true ? {
  target: "elqsdmc1"
} : undefined)("transform-origin:top left;height:100%;width:100%;", rootBase, ";", alignment_matrix_control_icon_styles_rootSize, ";", rootPointerEvents, ";" + ( true ? "" : undefined));

const alignment_matrix_control_icon_styles_pointActive = _ref2 => {
  let {
    isActive
  } = _ref2;
  const boxShadow = isActive ? `0 0 0 1px currentColor` : null;
  return /*#__PURE__*/Object(emotion_react_browser_esm["a" /* css */])("box-shadow:", boxShadow, ";color:currentColor;*:hover>&{color:currentColor;}" + ( true ? "" : undefined),  true ? "" : undefined);
};

const alignment_matrix_control_icon_styles_Point = Object(emotion_styled_base_browser_esm["a" /* default */])("span",  true ? {
  target: "elqsdmc0"
} : undefined)("height:2px;width:2px;", pointBase, ";", alignment_matrix_control_icon_styles_pointActive, ";" + ( true ? "" : undefined));
const alignment_matrix_control_icon_styles_Cell = Cell;

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/alignment-matrix-control/icon.js



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const BASE_SIZE = 24;
function AlignmentMatrixControlIcon(_ref) {
  let {
    className,
    disablePointerEvents = true,
    size = BASE_SIZE,
    style = {},
    value = 'center',
    ...props
  } = _ref;
  const alignIndex = getAlignmentIndex(value);
  const scale = (size / BASE_SIZE).toFixed(2);
  const classes = classnames_default()('component-alignment-matrix-control-icon', className);
  const styles = { ...style,
    transform: `scale(${scale})`
  };
  return Object(external_wp_element_["createElement"])(alignment_matrix_control_icon_styles_Root, Object(esm_extends["a" /* default */])({}, props, {
    className: classes,
    disablePointerEvents: disablePointerEvents,
    role: "presentation",
    size: size,
    style: styles
  }), ALIGNMENTS.map((align, index) => {
    const isActive = alignIndex === index;
    return Object(external_wp_element_["createElement"])(alignment_matrix_control_icon_styles_Cell, {
      key: align
    }, Object(external_wp_element_["createElement"])(alignment_matrix_control_icon_styles_Point, {
      isActive: isActive
    }));
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/components/build-module/alignment-matrix-control/index.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */







function useBaseId(id) {
  const instanceId = Object(external_wp_compose_["useInstanceId"])(AlignmentMatrixControl, 'alignment-matrix-control');
  return id || instanceId;
}

function AlignmentMatrixControl(_ref) {
  let {
    className,
    id,
    label = Object(external_wp_i18n_["__"])('Alignment Matrix Control'),
    defaultValue = 'center center',
    value,
    onChange = external_lodash_["noop"],
    width = 92,
    ...props
  } = _ref;
  const [immutableDefaultValue] = Object(external_wp_element_["useState"])(value !== null && value !== void 0 ? value : defaultValue);
  const baseId = useBaseId(id);
  const initialCurrentId = utils_getItemId(baseId, immutableDefaultValue);
  const composite = useCompositeState({
    baseId,
    currentId: initialCurrentId,
    rtl: Object(external_wp_i18n_["isRTL"])()
  });

  const handleOnChange = nextValue => {
    onChange(nextValue);
  };

  Object(external_wp_element_["useEffect"])(() => {
    if (typeof value !== 'undefined') {
      composite.setCurrentId(utils_getItemId(baseId, value));
    }
  }, [value, composite.setCurrentId]);
  const classes = classnames_default()('component-alignment-matrix-control', className);
  return Object(external_wp_element_["createElement"])(Composite, Object(esm_extends["a" /* default */])({}, props, composite, {
    "aria-label": label,
    as: Root,
    className: classes,
    role: "grid",
    width: width
  }), GRID.map((cells, index) => Object(external_wp_element_["createElement"])(CompositeGroup, Object(esm_extends["a" /* default */])({}, composite, {
    as: Row,
    role: "row",
    key: index
  }), cells.map(cell => {
    const cellId = utils_getItemId(baseId, cell);
    const isActive = composite.currentId === cellId;
    return Object(external_wp_element_["createElement"])(cell_Cell, Object(esm_extends["a" /* default */])({}, composite, {
      id: cellId,
      isActive: isActive,
      key: cell,
      value: cell,
      onFocus: () => handleOnChange(cell),
      tabIndex: isActive ? 0 : -1
    }));
  }))));
}
AlignmentMatrixControl.Icon = AlignmentMatrixControlIcon;

// EXTERNAL MODULE: ./node_modules/@wordpress/components/build-module/animate/index.js
var build_module_animate = __webpack_require__("L8Kx");

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/definitions.js
var createDefinition = function (propNames) { return ({
    isEnabled: function (props) { return propNames.some(function (name) { return !!props[name]; }); },
}); };
var featureDefinitions = {
    measureLayout: createDefinition([
        "layout",
        "layoutId",
        "drag",
        "_layoutResetTransform",
    ]),
    animation: createDefinition([
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
    ]),
    exit: createDefinition(["exit"]),
    drag: createDefinition(["drag", "dragControls"]),
    focus: createDefinition(["whileFocus"]),
    hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: createDefinition([
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
    ]),
    layoutAnimation: createDefinition(["layout", "layoutId"]),
};
function loadFeatures(features) {
    for (var key in features) {
        var Component = features[key];
        if (Component !== null)
            featureDefinitions[key].Component = Component;
    }
}



// CONCATENATED MODULE: ./node_modules/hey-listen/dist/hey-listen.es.js
var warning = function () { };
var invariant = function () { };
if (false) {}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LazyContext.js


var LazyContext = Object(external_React_["createContext"])({ strict: false });



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/use-features.js







var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
/**
 * Load features via renderless components based on the provided MotionProps.
 */
function useFeatures(props, visualElement, preloadedFeatures) {
    var features = [];
    var lazyContext = Object(external_React_["useContext"])(LazyContext);
    if (!visualElement)
        return null;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */
    if (false) {}
    for (var i = 0; i < numFeatures; i++) {
        var name_1 = featureNames[i];
        var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
        /**
         * It might be possible in the future to use this moment to
         * dynamically request functionality. In initial tests this
         * was producing a lot of duplication amongst bundles.
         */
        if (isEnabled(props) && Component) {
            features.push(external_React_["createElement"](Component, __assign({ key: name_1 }, props, { visualElement: visualElement })));
        }
    }
    return features;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.js


/**
 * @public
 */
var MotionConfigContext = Object(external_React_["createContext"])({
    transformPagePoint: function (p) { return p; },
    isStatic: false,
});



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/index.js


var MotionContext = Object(external_React_["createContext"])({});
function useVisualElementContext() {
    return Object(external_React_["useContext"])(MotionContext).visualElement;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.js


/**
 * @public
 */
var PresenceContext = Object(external_React_["createContext"])(null);



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.js


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(external_React_["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js




/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(external_React_["useContext"])(PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    Object(external_React_["useEffect"])(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return use_presence_isPresent(Object(external_React_["useContext"])(PresenceContext));
}
function use_presence_isPresent(context) {
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return useConstant(incrementId); };



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js


/**
 * @internal
 */
var LayoutGroupContext = Object(external_React_["createContext"])(null);



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-browser.js
var isBrowser = typeof window !== "undefined";



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js



var useIsomorphicLayoutEffect = isBrowser ? external_React_["useLayoutEffect"] : external_React_["useEffect"];



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js










function useLayoutId(_a) {
    var layoutId = _a.layoutId;
    var layoutGroupId = Object(external_React_["useContext"])(LayoutGroupContext);
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}
function useVisualElement(Component, visualState, props, createVisualElement) {
    var config = Object(external_React_["useContext"])(MotionConfigContext);
    var lazyContext = Object(external_React_["useContext"])(LazyContext);
    var parent = useVisualElementContext();
    var presenceContext = Object(external_React_["useContext"])(PresenceContext);
    var layoutId = useLayoutId(props);
    var visualElementRef = Object(external_React_["useRef"])(undefined);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    if (!createVisualElement)
        createVisualElement = lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState: visualState,
            parent: parent,
            props: __assign(__assign({}, props), { layoutId: layoutId }),
            presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
            blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
        });
    }
    var visualElement = visualElementRef.current;
    useIsomorphicLayoutEffect(function () {
        if (!visualElement)
            return;
        visualElement.setProps(__assign(__assign(__assign({}, config), props), { layoutId: layoutId }));
        visualElement.isPresent = use_presence_isPresent(presenceContext);
        visualElement.isPresenceRoot =
            !parent || parent.presenceId !== (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id);
        /**
         * Fire a render to ensure the latest state is reflected on-screen.
         */
        visualElement.syncRender();
    });
    Object(external_React_["useEffect"])(function () {
        var _a;
        if (!visualElement)
            return;
        /**
         * In a future refactor we can replace the features-as-components and
         * have this loop through them all firing "effect" listeners
         */
        (_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
    });
    useIsomorphicLayoutEffect(function () { return function () { return visualElement === null || visualElement === void 0 ? void 0 : visualElement.notifyUnmount(); }; }, []);
    return visualElement;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-ref-object.js
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return Object(external_React_["useCallback"])(function (instance) {
        var _a;
        instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/variants.js
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
    var _a;
    if (currentValues === void 0) { currentValues = {}; }
    if (currentVelocity === void 0) { currentVelocity = {}; }
    if (typeof definition === "string") {
        definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
    }
    return typeof definition === "function"
        ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity)
        : definition;
}
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}
function checkIfControllingVariants(props) {
    var _a;
    return (typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" ||
        isVariantLabel(props.initial) ||
        isVariantLabel(props.animate) ||
        isVariantLabel(props.whileHover) ||
        isVariantLabel(props.whileDrag) ||
        isVariantLabel(props.whileTap) ||
        isVariantLabel(props.whileFocus) ||
        isVariantLabel(props.exit));
}
function checkIfVariantNode(props) {
    return Boolean(checkIfControllingVariants(props) || props.variants);
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/utils.js


function getCurrentTreeVariants(props, context) {
    if (checkIfControllingVariants(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/create.js




function useCreateMotionContext(props, isStatic) {
    var _a = getCurrentTreeVariants(props, Object(external_React_["useContext"])(MotionContext)), initial = _a.initial, animate = _a.animate;
    return Object(external_React_["useMemo"])(function () { return ({ initial: initial, animate: animate }); }, 
    /**
     * Only break memoisation in static mode
     */
    isStatic
        ? [
            variantLabelsAsDependency(initial),
            variantLabelsAsDependency(animate),
        ]
        : []);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/index.js











/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(_a) {
    var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we're rendering in a static environment, we only visually update the component
         * as a result of a React-rerender rather than interactions or animations. This
         * means we don't need to load additional memory structures like VisualElement,
         * or any gesture/animation features.
         */
        var isStatic = Object(external_React_["useContext"])(MotionConfigContext).isStatic;
        var features = null;
        /**
         * Create the tree context. This is memoized and will only trigger renders
         * when the current tree variant changes in static mode.
         */
        var context = useCreateMotionContext(props, isStatic);
        /**
         *
         */
        var visualState = useVisualState(props, isStatic);
        if (!isStatic && isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = useVisualElement(Component, visualState, props, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             *
             * TODO: The intention is to move these away from a React-centric to a
             * VisualElement-centric lifecycle scheme.
             */
            features = useFeatures(props, context.visualElement, preloadedFeatures);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (external_React_["createElement"](external_React_["Fragment"], null,
            external_React_["createElement"](MotionContext.Provider, { value: context }, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic)),
            features));
    }
    return Object(external_React_["forwardRef"])(MotionComponent);
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig) {
        if (customMotionComponentConfig === void 0) { customMotionComponentConfig = {}; }
        return createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    var componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: function (_target, key) {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "tspan",
    "use",
    "view",
];



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js
var valueScaleCorrection = {};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/transform.js
/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var transform_order = ["translate", "scale", "rotate", "skew"];
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
transform_order.forEach(function (operationKey) {
    return transformAxes.forEach(function (axesKey) {
        return transformProps.push(operationKey + axesKey);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js



function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return (isTransformProp(key) ||
        isTransformOriginProp(key) ||
        ((layout || layoutId !== undefined) &&
            (!!valueScaleCorrection[key] || key === "opacity")));
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js
var isMotionValue = function (value) {
    return value !== null && typeof value === "object" && value.getVelocity;
};



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js


var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
    var transform = _a.transform, transformKeys = _a.transformKeys;
    var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js
/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};



// CONCATENATED MODULE: ./node_modules/style-value-types/dist/es/utils.js
var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var utils_sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v) {
    return typeof v === 'string';
}



// CONCATENATED MODULE: ./node_modules/style-value-types/dist/es/numbers/units.js



var createUnitType = function (unit) { return ({
    test: function (v) {
        return isString(v) && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; },
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = __assign(__assign({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });



// CONCATENATED MODULE: ./node_modules/style-value-types/dist/es/numbers/index.js



var numbers_number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; },
};
var numbers_alpha = __assign(__assign({}, numbers_number), { transform: clamp(0, 1) });
var numbers_scale = __assign(__assign({}, numbers_number), { default: 1 });



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js



var type_int_int = __assign(__assign({}, numbers_number), { transform: Math.round });



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/number.js



var numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Transform props
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale: numbers_scale,
    scaleX: numbers_scale,
    scaleY: numbers_scale,
    scaleZ: numbers_scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: numbers_alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    // Misc
    zIndex: type_int_int,
    // SVG
    fillOpacity: numbers_alpha,
    strokeOpacity: numbers_alpha,
    numOctaves: type_int_int,
};



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js







function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var _a;
    var style = state.style, vars = state.vars, transform = state.transform, transformKeys = state.transformKeys, transformOrigin = state.transformOrigin;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (var key in latestValues) {
        var value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if (isCSSVariable(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = numberValueTypes[key];
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
                transformIsNone = false;
        }
        else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
        }
        else {
            /**
             * If layout projection is on, and we need to perform scale correction for this
             * value type, perform it.
             */
            if ((projection === null || projection === void 0 ? void 0 : projection.isHydrated) &&
                (layoutState === null || layoutState === void 0 ? void 0 : layoutState.isHydrated) &&
                valueScaleCorrection[key]) {
                var correctedValue = valueScaleCorrection[key].process(value, layoutState, projection);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = valueScaleCorrection[key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        style[applyTo[i]] = correctedValue;
                    }
                }
                else {
                    style[key] = correctedValue;
                }
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (layoutState &&
        projection &&
        buildProjectionTransform &&
        buildProjectionTransformOrigin) {
        style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : undefined);
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildProjectionTransformOrigin(layoutState);
    }
    else {
        if (hasTransform) {
            style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = buildTransformOrigin(transformOrigin);
        }
    }
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js
var createHtmlRenderState = function () { return ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
}); };



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/use-props.js







function copyRawValuesOnly(target, source, props) {
    for (var key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(_a, visualState, isStatic) {
    var transformTemplate = _a.transformTemplate;
    return Object(external_React_["useMemo"])(function () {
        var state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, undefined, undefined, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        var vars = state.vars, style = state.style;
        return __assign(__assign({}, vars), style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    var styleProp = props.style || {};
    var style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    if (props.transformValues) {
        style = props.transformValues(style);
    }
    return style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {};
    var style = useStyle(props, visualState, isStatic);
    if (Boolean(props.drag)) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout =
            "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : "pan-" + (props.drag === "x" ? "y" : "x");
    }
    htmlProps.style = style;
    return htmlProps;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js
/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "_layoutResetTransform",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "whileDrag",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js


var shouldForward = function (key) { return !isValidMotionProp(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__("gCm3").default;
    shouldForward = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !isValidMotionProp(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for (var key in props) {
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/path.js


// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return px.transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js





/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    buildHTMLStyles(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js



var createSvgRenderState = function () { return (__assign(__assign({}, createHtmlRenderState()), { attrs: {} })); };



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/use-props.js






function useSVGProps(props, visualState) {
    var visualProps = Object(external_React_["useMemo"])(function () {
        var state = createSvgRenderState();
        buildSVGAttrs(state, visualState, undefined, undefined, { enableHardwareAcceleration: false }, props.transformTemplate);
        return __assign(__assign({}, state.attrs), { style: __assign({}, state.style) });
    }, [visualState]);
    if (props.style) {
        var rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
    }
    return visualProps;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/use-render.js







function createUseRender(forwardMotionProps) {
    if (forwardMotionProps === void 0) { forwardMotionProps = false; }
    var useRender = function (Component, props, ref, _a, isStatic) {
        var latestValues = _a.latestValues;
        var useVisualProps = isSVGComponent(Component)
            ? useSVGProps
            : useHTMLProps;
        var visualProps = useVisualProps(props, latestValues, isStatic);
        var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
        var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref: ref });
        return Object(external_React_["createElement"])(Component, elementProps);
    };
    return useRender;
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/render.js
function renderHTML(element, _a) {
    var style = _a.style, vars = _a.vars;
    // Directly assign style into the Element's style prop. In tests Object.assign is the
    // fastest way to assign styles.
    Object.assign(element.style, style);
    // Loop over any CSS variables and assign those.
    for (var key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}



// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js
/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseF