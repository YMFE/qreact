(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('stream')) :
	typeof define === 'function' && define.amd ? define(['stream'], factory) :
	(global.ReactDOMServer = factory(global.stream));
}(this, (function (stream) {

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var $Object = Object;
var $ = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

var $_global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var $_has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var $_fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var $_descriptors = !$_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var $_core = createCommonjsModule(function (module) {
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var $_aFunction = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var $_ctx = function(fn, that, length){
  $_aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? $_core : $_core[name] || ($_core[name] = {})
    , target    = IS_GLOBAL ? $_global : IS_STATIC ? $_global[name] : ($_global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? $_ctx(out, $_global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? $_ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
var $_export = $export;

var $_propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var $_hide = $_descriptors ? function(object, key, value){
  return $.setDesc(object, key, $_propertyDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var $_redefine = $_hide;

var SHARED = '__core-js_shared__';
var store  = $_global[SHARED] || ($_global[SHARED] = {});
var $_shared = function(key){
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var $_uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var store$1  = $_shared('wks');
var Symbol$1 = $_global.Symbol;
var $_wks = function(name){
  return store$1[name] || (store$1[name] =
    Symbol$1 && Symbol$1[name] || (Symbol$1 || $_uid)('Symbol.' + name));
};

var def = $.setDesc;
var TAG = $_wks('toStringTag');

var $_setToStringTag = function(it, tag, stat){
  if(it && !$_has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

var toString = {}.toString;

var $_cof = function(it){
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

var $_iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return $_cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var $_defined = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var $_toIobject = function(it){
  return $_iobject($_defined(it));
};

var $_keyof = function(object, el){
  var O      = $_toIobject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var getNames$1  = $.getNames;
var toString$1  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames$1(it);
  } catch(e){
    return windowNames.slice();
  }
};

var get = function getOwnPropertyNames(it){
  if(windowNames && toString$1.call(it) == '[object Window]')return getWindowNames(it);
  return getNames$1($_toIobject(it));
};

var $_getNames = {
	get: get
};

// all enumerable object keys, includes symbols

var $_enumKeys = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};

// 7.2.2 IsArray(argument)

var $_isArray = Array.isArray || function(arg){
  return $_cof(arg) == 'Array';
};

var $_isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var $_anObject = function(it){
  if(!$_isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

var $_library = true;

// ECMAScript 6 symbols shim
var getDesc        = $.getDesc;
var setDesc        = $.setDesc;
var _create        = $.create;
var getNames       = $_getNames.get;
var $Symbol        = $_global.Symbol;
var $JSON          = $_global.JSON;
var _stringify     = $JSON && $JSON.stringify;
var setter         = false;
var HIDDEN         = $_wks('_hidden');
var isEnum         = $.isEnum;
var SymbolRegistry = $_shared('symbol-registry');
var AllSymbols     = $_shared('symbols');
var useNative      = typeof $Symbol == 'function';
var ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = $_descriptors && $_fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  $_descriptors && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if($_has(this, HIDDEN) && $_has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, $_propertyDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && $_has(AllSymbols, key)){
    if(!D.enumerable){
      if(!$_has(it, HIDDEN))setDesc(it, HIDDEN, $_propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if($_has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: $_propertyDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  $_anObject(it);
  var keys = $_enumKeys(P = $_toIobject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !$_has(this, key) || !$_has(AllSymbols, key) || $_has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = $_toIobject(it), key);
  if(D && $_has(AllSymbols, key) && !($_has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames($_toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!$_has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames($_toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if($_has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !$_isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $_fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap($_uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  $_redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $_getNames.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if($_descriptors && !$_library){
    $_redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return $_has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return $_keyof(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = $_wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$_export($_export.G + $_export.W, {Symbol: $Symbol});

$_export($_export.S, 'Symbol', symbolStatics);

$_export($_export.S + $_export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $_export($_export.S + $_export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
$_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
$_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
$_setToStringTag($_global.JSON, 'JSON', true);

var symbol$1 = $_core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$1, __esModule: true };
});

var _Symbol = unwrapExports(symbol);

var create$2 = function create(P, D){
  return $.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$2, __esModule: true };
});

unwrapExports(create);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc$1  = $.getDesc;
var check = function(O, proto){
  $_anObject(O);
  if(!$_isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
var $_setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = $_ctx(Function.call, getDesc$1(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

$_export($_export.S, 'Object', {setPrototypeOf: $_setProto.set});

var setPrototypeOf$2 = $_core.Object.setPrototypeOf;

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf$2, __esModule: true };
});

unwrapExports(setPrototypeOf);

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var $_toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// true  -> String#at
// false -> String#codePointAt
var $_stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String($_defined(that))
      , i = $_toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var $_iterators = {};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
$_hide(IteratorPrototype, $_wks('iterator'), function(){ return this; });

var $_iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: $_propertyDesc(1, next)});
  $_setToStringTag(Constructor, NAME + ' Iterator');
};

var getProto       = $.getProto;
var ITERATOR       = $_wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var $_iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $_iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    $_setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!$_library && $_has(proto, FF_ITERATOR))$_hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!$_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    $_hide(proto, ITERATOR, $default);
  }
  // Plug for library
  $_iterators[NAME] = $default;
  $_iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))$_redefine(proto, key, methods[key]);
    } else $_export($_export.P + $_export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at  = $_stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
$_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

var $_addToUnscopables = function(){ /* empty */ };

var $_iterStep = function(done, value){
  return {value: value, done: !!done};
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = $_iterDefine(Array, 'Array', function(iterated, kind){
  this._t = $_toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return $_iterStep(1);
  }
  if(kind == 'keys'  )return $_iterStep(0, index);
  if(kind == 'values')return $_iterStep(0, O[index]);
  return $_iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
$_iterators.Arguments = $_iterators.Array;

$_addToUnscopables('keys');
$_addToUnscopables('values');
$_addToUnscopables('entries');

$_iterators.NodeList = $_iterators.HTMLCollection = $_iterators.Array;

// getting tag from 19.1.3.6 Object.prototype.toString()
var TAG$1 = $_wks('toStringTag');
var ARG = $_cof(function(){ return arguments; }()) == 'Arguments';

var $_classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG$1]) == 'string' ? T
    // builtinTag case
    : ARG ? $_cof(O)
    // ES3 arguments fallback
    : (B = $_cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var $_strictNew = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};

// call something on iterator step with safe closing on error

var $_iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn($_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)$_anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator
var ITERATOR$1   = $_wks('iterator');
var ArrayProto = Array.prototype;

var $_isArrayIter = function(it){
  return it !== undefined && ($_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

// 7.1.15 ToLength
var min       = Math.min;
var $_toLength = function(it){
  return it > 0 ? min($_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var ITERATOR$2  = $_wks('iterator');
var core_getIteratorMethod = $_core.getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR$2]
    || it['@@iterator']
    || $_iterators[$_classof(it)];
};

var $_forOf = function(iterable, entries, fn, that){
  var iterFn = core_getIteratorMethod(iterable)
    , f      = $_ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if($_isArrayIter(iterFn))for(length = $_toLength(iterable.length); length > index; index++){
    entries ? f($_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    $_iterCall(iterator, f, step.value, entries);
  }
};

// 7.2.9 SameValue(x, y)
var $_sameValue = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var SPECIES$1   = $_wks('species');
var $_speciesConstructor = function(O, D){
  var C = $_anObject(O).constructor, S;
  return C === undefined || (S = $_anObject(C)[SPECIES$1]) == undefined ? D : $_aFunction(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var $_invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var $_html = $_global.document && document.documentElement;

var document$1 = $_global.document;
var is = $_isObject(document$1) && $_isObject(document$1.createElement);
var $_domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var process$3            = $_global.process;
var setTask            = $_global.setImmediate;
var clearTask          = $_global.clearImmediate;
var MessageChannel     = $_global.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      $_invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if($_cof(process$3) == 'process'){
    defer = function(id){
      process$3.nextTick($_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = $_ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if($_global.addEventListener && typeof postMessage == 'function' && !$_global.importScripts){
    defer = function(id){
      $_global.postMessage(id + '', '*');
    };
    $_global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in $_domCreate('script')){
    defer = function(id){
      $_html.appendChild($_domCreate('script'))[ONREADYSTATECHANGE] = function(){
        $_html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout($_ctx(run, id, 1), 0);
    };
  }
}
var $_task = {
  set:   setTask,
  clear: clearTask
};

var macrotask = $_task.set;
var Observer  = $_global.MutationObserver || $_global.WebKitMutationObserver;
var process$2   = $_global.process;
var Promise   = $_global.Promise;
var isNode$1    = $_cof(process$2) == 'process';
var head;
var last;
var notify$1;

var flush = function(){
  var parent, domain, fn;
  if(isNode$1 && (parent = process$2.domain)){
    process$2.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode$1){
  notify$1 = function(){
    process$2.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify$1 = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify$1 = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify$1 = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call($_global, flush);
  };
}

var $_microtask = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode$1 && process$2.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify$1();
  } last = task;
};

var $_redefineAll = function(target, src){
  for(var key in src)$_redefine(target, key, src[key]);
  return target;
};

var SPECIES$2     = $_wks('species');

var $_setSpecies = function(KEY){
  var C = $_core[KEY];
  if($_descriptors && C && !C[SPECIES$2])$.setDesc(C, SPECIES$2, {
    configurable: true,
    get: function(){ return this; }
  });
};

var ITERATOR$3     = $_wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var $_iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$3]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$3] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var setProto   = $_setProto.set;
var SPECIES    = $_wks('species');
var PROMISE    = 'Promise';
var process$1    = $_global.process;
var isNode     = $_classof(process$1) == 'process';
var P          = $_global[PROMISE];
var empty      = function(){ /* empty */ };
var Wrapper;

var testResolve = function(sub){
  var test = new P(empty), promise;
  if(sub)test.constructor = function(exec){
    exec(empty, empty);
  };
  (promise = P.resolve(test))['catch'](empty);
  return promise === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && $_descriptors){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if($_library && a === P && b === Wrapper)return true;
  return $_sameValue(a, b);
};
var getConstructor = function(C){
  var S = $_anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return $_isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = $_aFunction(resolve),
  this.reject  = $_aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  $_microtask(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process$1.emit('unhandledRejection', value, promise);
        } else if(handler = $_global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = $_global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      $_microtask(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, $_ctx($resolve, wrapper, 1), $_ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    $_aFunction(executor);
    var record = this._d = {
      p: $_strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor($_ctx($resolve, record, 1), $_ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  $_redefineAll(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability($_speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$_export($_export.G + $_export.W + $_export.F * !USE_NATIVE, {Promise: P});
$_setToStringTag(P, PROMISE);
$_setSpecies(PROMISE);
Wrapper = $_core[PROMISE];

// statics
$_export($_export.S + $_export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$_export($_export.S + $_export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$_export($_export.S + $_export.F * !(USE_NATIVE && $_iterDetect(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      $_forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      $_forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

var promise$2 = $_core.Promise;

var promise = createCommonjsModule(function (module) {
module.exports = { "default": promise$2, __esModule: true };
});

unwrapExports(promise);

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = symbol["default"];

var _Object$create = create["default"];

var _Object$setPrototypeOf = setPrototypeOf["default"];

var _Promise = promise["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_Object$setPrototypeOf) {
      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return _Promise.resolve(value.arg).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof commonjsGlobal === "object" ? commonjsGlobal : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
});

var regenerator = createCommonjsModule(function (module) {
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };
});

var _regeneratorRuntime = unwrapExports(regenerator);

// 7.1.13 ToObject(argument)

var $_toObject = function(it){
  return Object($_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)


// should work with symbols and should have deterministic property order (V8 bug)
var $_objectAssign = $_fails(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = $_toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = $_iobject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;

// 19.1.3.1 Object.assign(target, source)


$_export($_export.S + $_export.F, 'Object', {assign: $_objectAssign});

var assign$1 = $_core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$1, __esModule: true };
});

var _Object$assign = unwrapExports(assign);

$_export($_export.S + $_export.F * !$_iterDetect(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = $_toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = core_getIteratorMethod(O)
      , length, result, step, iterator;
    if(mapping)mapfn = $_ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && $_isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? $_iterCall(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = $_toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

var from$1 = $_core.Array.from;

var from = createCommonjsModule(function (module) {
module.exports = { "default": from$1, __esModule: true };
});

unwrapExports(from);

var hasSymbol = typeof _Symbol === "function" && _Symbol["for"];
var REACT_ELEMENT_TYPE = hasSymbol ? _Symbol["for"]("react.element") : 0xeac7;


var REACT_FRAGMENT_TYPE = hasSymbol ? _Symbol["for"]("react.fragment") : 0xeacb;




/**
 * 复制一个对象的属性到另一个对象
 *
 * @param {any} obj
 * @param {any} props
 * @returns
 */



var __type = Object.prototype.toString;

/**
 * 一个空函数
 *
 * @export
 */
function noop() {}

/**
 * 类继承
 *
 * @export
 * @param {any} SubClass
 * @param {any} SupClass
 */








var rword = /[^, ]+/g;

function oneObject(array, val) {
  if (array + "" === array) {
    //利用字符串的特征进行优化，字符串加上一个空字符串等于自身
    array = array.match(rword) || [];
  }
  var result = {},

  //eslint-disable-next-line
  value = val !== void 666 ? val : 1;
  for (var i = 0, n = array.length; i < n; i++) {
    result[array[i]] = value;
  }
  return result;
}





var options = oneObject(["beforeProps", "afterCreate", "beforeInsert", "beforeDelete", "beforeUpdate", "afterUpdate", "beforePatch", "afterPatch", "beforeUnmount", "afterMount"], noop);

var numberMap = {
  //null undefined IE6-8这里会返回[object Object]
  "[object Boolean]": 2,
  "[object Number]": 3,
  "[object String]": 4,
  "[object Function]": 5,
  "[object Symbol]": 6,
  "[object Array]": 7
};
// undefined: 0, null: 1, boolean:2, number: 3, string: 4, function: 5, symbol:6, array: 7, object:8
function typeNumber(data) {
  if (data === null) {
    return 1;
  }
  if (data === void 666) {
    return 0;
  }
  var a = numberMap[__type.call(data)];
  return a || 8;
}

var iterator$1 = $_wks('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$1, __esModule: true };
});

var _Symbol$iterator = unwrapExports(iterator);

//用于后端的元素节点
function DOMElement(type) {
  this.nodeName = type;
  this.style = {};
  this.children = [];
}



var fn = DOMElement.prototype = {
  contains: Boolean
};
String("replaceChild,appendChild,removeAttributeNS,setAttributeNS,removeAttribute,setAttribute" + ",getAttribute,insertBefore,removeChild,addEventListener,removeEventListener,attachEvent" + ",detachEvent").replace(/\w+/g, function (name) {
  fn[name] = function () {
    console.log("fire " + name); // eslint-disable-line
  };
});

//用于后端的document
var fakeDoc = new DOMElement();
fakeDoc.createElement = fakeDoc.createElementNS = fakeDoc.createDocumentFragment = function (type) {
  return new DOMElement(type);
};
fakeDoc.createTextNode = fakeDoc.createComment = Boolean;
fakeDoc.documentElement = new DOMElement("html");
fakeDoc.body = new DOMElement("body");
fakeDoc.nodeName = "#document";
fakeDoc.textContent = "";
try {
  var w = window;
  var b = !!w.alert;
} catch (e) {
  b = false;
  w = {
    document: fakeDoc
  };
}


var win = w;

var document$2 = w.document || fakeDoc;


var fragment = document$2.createDocumentFragment();




var versions = {
  88: 7, //IE7-8 objectobject
  80: 6, //IE6 objectundefined
  "00": NaN, // other modern browsers
  "08": NaN
};
/* istanbul ignore next  */
var msie = document$2.documentMode || versions[typeNumber(document$2.all) + "" + typeNumber(win.XMLHttpRequest)];

var modern = /NaN|undefined/.test(msie) || msie > 8;

//fix 0.14对此方法的改动，之前refs里面保存的是虚拟DOM
function getDOMNode() {
  return this;
}
var pendingRefs = [];
win.pendingRefs = pendingRefs;
var Refs = {
  mountOrder: 1,
  currentOwner: null,
  controlledCbs: [],
  // errorHook: string,//发生错误的生命周期钩子
  // errorInfo: [],    //已经构建好的错误信息
  // doctors: null     //医生节点
  // error: null       //第一个捕捉到的错误
  fireRef: function fireRef(vnode, dom) {
    if (vnode._disposed || vnode.stateNode.__isStateless) {
      dom = null;
    }
    var ref = vnode.ref;
    if (typeof ref === "function") {
      return ref(dom);
    }
    var owner = vnode._owner;
    if (!ref) {
      return;
    }
    if (!owner) {
      throw "Element ref was specified as a string (" + ref + ") but no owner was set";
    }
    if (dom) {
      if (dom.nodeType) {
        dom.getDOMNode = getDOMNode;
      }
      owner.refs[ref] = dom;
    } else {
      delete owner.refs[ref];
    }
  }
};

function Vnode(type, vtype, props, key, ref) {
  this.type = type;
  this.vtype = vtype;
  if (vtype) {
    this.props = props;
    this._owner = Refs.currentOwner;

    if (key) {
      this.key = key;
    }

    var refType = typeNumber(ref);
    if (refType === 3 || refType === 4 || refType === 5) {
      //number, string, function
      this._hasRef = true;
      this.ref = ref;
    }
  }
  /*
      this.stateNode = null
    */

  options.afterCreate(this);
}

Vnode.prototype = {
  getDOMNode: function getDOMNode() {
    return this.stateNode || null;
  },


  $$typeof: REACT_ELEMENT_TYPE
};

/**
 * 虚拟DOM工厂
 *
 * @param {string|function|Component} type
 * @param {object} props
 * @param {array} ...children
 * @returns
 */



function createVText(type, text) {
  var vnode = new Vnode(type, 0);
  vnode.text = text;
  return vnode;
}

// 用于辅助XML元素的生成（svg, math),
// 它们需要根据父节点的tagName与namespaceURI,知道自己是存在什么文档中


var lastText;
var flattenIndex;
var flattenObject;
var flattenPrev;
var flattenArray;
function flattenCb(child, index, vnode) {
  var childType = typeNumber(child);
  if (childType < 3) {
    //在React16中undefined, null, boolean不会产生节点
    lastText = null;
    return;
  } else if (childType < 5) {
    //number string
    if (lastText) {
      //合并相邻的文本节点
      lastText.text += child;
      return;
    }
    lastText = child = createVText("#text", child + "");
  } else {
    lastText = null;
  }
  var key = child.key;
  if (key && !flattenObject[".$" + key]) {
    flattenObject[".$" + key] = child;
  } else {
    if (index === ".") {
      index = "." + flattenIndex;
    }
    flattenObject[index] = child;
  }
  child.index = flattenIndex;
  child.return = vnode;
  if (flattenPrev) {
    flattenPrev.sibling = child;
  }
  flattenPrev = child;
  flattenIndex++;
  flattenArray.push(child);
}

function fiberizeChildren(c, updater) {
  flattenObject = {};
  flattenPrev = null;
  flattenArray = [];
  var vnode = updater.vnode;
  if (c !== void 666) {
    lastText = null;
    flattenIndex = 0;
    operateChildren(c, "", flattenCb, vnode);
    var child = flattenArray[0];
    if (child) {
      vnode.child = child;
    }
    if (flattenPrev) {
      delete flattenPrev.sibling;
    }
  }
  return updater.children = flattenObject;
}

function operateChildren(children, prefix, callback, parent) {
  var iteratorFn;
  if (children) {
    if (children.forEach) {
      children.forEach(function (el, i) {
        operateChildren(el, prefix ? prefix + ":" + i : "." + i, callback, parent);
      });
      return;
    } else if (iteratorFn = getIteractor(children)) {
      var iterator = iteratorFn.call(children),
          ii = 0,
          step;
      while (!(step = iterator.next()).done) {
        operateChildren(step.value, prefix ? prefix + ":" + ii : "." + ii, callback, parent);
        ii++;
      }
      return;
    }
  }
  if (Object(children) === children && !children.type) {
    throw "children中存在非法的对象";
  }
  callback(children, prefix || ".", parent);
}
var REAL_SYMBOL = hasSymbol && _Symbol$iterator;
var FAKE_SYMBOL = "@@iterator";
function getIteractor(a) {
  if (typeNumber(a) > 7) {
    var iteratorFn = REAL_SYMBOL && a[REAL_SYMBOL] || a[FAKE_SYMBOL];
    if (iteratorFn && iteratorFn.call) {
      return iteratorFn;
    }
  }
}

/**
 * 为了防止污染用户的实例，需要将操作组件虚拟DOM与生命周期钩子的逻辑全部抽象到这个类中
 *
 * @export
 * @param {any} instance
 * @param {any} vnode
 */


function getChildContext(instance, parentContext) {
  if (instance.getChildContext) {
    var context = instance.getChildContext();
    if (context) {
      parentContext = _Object$assign({}, parentContext, context);
    }
  }
  return parentContext;
}

function getContextByTypes(curContext, contextTypes) {
  var context = {};
  if (!contextTypes || !curContext) {
    return context;
  }
  for (var key in contextTypes) {
    if (contextTypes.hasOwnProperty(key)) {
      context[key] = curContext[key];
    }
  }
  return context;
}

var matchHtmlRegExp = /["'&<>]/;

function escapeHtml(string) {
  var str = "" + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = "";
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = "&quot;";
        break;
      case 38:
        // &
        escape = "&amp;";
        break;
      case 39:
        // '
        escape = "&#x27;"; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = "&lt;";
        break;
      case 62:
        // >
        escape = "&gt;";
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

function encodeEntities(text) {
  if (typeof text === "boolean" || typeof text === "number") {
    return "" + text;
  }
  return escapeHtml(text);
}

var _typeof = createCommonjsModule(function (module, exports) {
"use strict";

var _Symbol = symbol["default"];

exports["default"] = function (obj) {
  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
};

exports.__esModule = true;
});

var _typeof$1 = unwrapExports(_typeof);

var rnumber = /^-?\d+(\.\d+)?$/;
/**
     * 为元素样子设置样式
     * 
     * @export
     * @param {any} dom 
     * @param {any} lastStyle 
     * @param {any} nextStyle 
     */


var cssNumber = oneObject("animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");

var cssMap = oneObject("float", "cssFloat");

/**
 * 转换成当前浏览器可用的样式名
 * 
 * @param {any} name 
 * @returns 
 */

var skipAttributes = {
  ref: 1,
  key: 1,
  children: 1,
  dangerouslySetInnerHTML: 1,
  innerHTML: 1
};
var cssCached = {
  styleFloat: "float",
  cssFloat: "float"
};
var rXlink = /^xlink:?(.+)/;

function cssName$$1(name) {
  if (cssCached[name]) {
    return cssCached[name];
  }
  return cssCached[name] = name.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function stringifyClassName(obj) {
  var arr = [];
  for (var i in obj) {
    if (obj[i]) {
      arr.push(i);
    }
  }
  return arr.join(" ");
}

var attrCached = {};
function encodeAttributes(value) {
  if (attrCached[value]) {
    return attrCached[value];
  }
  return attrCached[value] = "\"" + encodeEntities(value) + "\"";
}

function skipFalseAndFunction(a) {
  return a !== false && Object(a) !== a;
}

function stringifyStyleObject(obj) {
  var arr = [];
  for (var i in obj) {
    var val = obj[i];
    if (obj != null) {
      var unit = "";
      if (rnumber.test(val) && !cssNumber[name]) {
        unit = "px";
      }
      arr.push(cssName$$1(name) + ": " + val + unit);
    }
  }
  return arr.join("; ");
}

var forElement = {
  select: 1,
  input: 1,
  textarea: 1
};

function stringifyAttributes(props, type) {
  var attrs = [];
  for (var _name in props) {
    var v = props[_name];
    if (skipAttributes[_name]) {
      continue;
    }
    var checkType = false;
    if (_name === "className" || _name === "class") {
      _name = "class";
      if (v && (typeof v === "undefined" ? "undefined" : _typeof$1(v)) === "object") {
        v = stringifyClassName(v);
        checkType = true;
      }
    } else if (_name === "style") {
      if (Object(v) == v) {
        v = stringifyStyleObject(v);
        checkType = true;
      } else {
        continue;
      }
    } else if (_name === "defaultValue") {
      if (forElement[type]) {
        _name = "value";
      }
    } else if (_name === "defaultChecked") {
      if (forElement[type]) {
        _name = "checked";
        v = "";
        checkType = true;
      }
    } else if (_name.match(rXlink)) {
      _name = _name.toLowerCase().replace(rXlink, "xlink:$1");
    }
    if (checkType || skipFalseAndFunction(v)) {
      attrs.push(_name + "=" + encodeAttributes(v + ""));
    }
  }
  return attrs.length ? " " + attrs.join(" ") : "";
}

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(renderVNodeGen);

function renderVNode(vnode, context) {
  var _vnode = vnode,
      vtype = _vnode.vtype,
      type = _vnode.type,
      props = _vnode.props;

  switch (type) {
    case "#text":
      return encodeEntities(vnode.text);
    case "#comment":
      return "<!--" + vnode.text + "-->";
    default:
      var innerHTML$$1 = props && props.dangerouslySetInnerHTML;
      innerHTML$$1 = innerHTML$$1 && innerHTML$$1.__html;
      if (vtype === 1) {
        //如果是元素节点
        if (type === "option") {
          //向上找到select元素
          for (var p = vnode.return; p && p.type !== "select"; p === p.return) {
            // no operation
          }
          if (p && p.valuesSet) {
            var curValue = getOptionValue(vnode);
            if (p.valuesSet["&" + curValue]) {
              props = _Object$assign({ selected: "" }, props); //添加一个selected属性
            }
          }
        } else if (type === "select") {
          var selectValue = vnode.props.value || vnode.props.defaultValue;
          if (selectValue != null) {
            var values = [].concat(selectValue),
                valuesSet = {};
            values.forEach(function (el) {
              valuesSet["&" + el] = true;
            });
            vnode.valuesSet = valuesSet;
          }
        }

        var str = "<" + type + stringifyAttributes(props, type);
        if (voidTags[type]) {
          return str + "/>\n";
        }
        str += ">";
        if (innerHTML$$1) {
          str += innerHTML$$1;
        } else {
          var fakeUpdater = {
            vnode: vnode
          };
          var children = fiberizeChildren(props.children, fakeUpdater);
          for (var i in children) {
            var child = children[i];
            str += renderVNode(child, context);
          }
          vnode.updater = fakeUpdater;
        }
        return str + "</" + type + ">\n";
      } else if (vtype > 1) {
        var data = {
          context: context
        };
        vnode = toVnode(vnode, data);
        context = data.context;
        return renderVNode(vnode, context);
      } else if (Array.isArray(vnode)) {
        var multiChild = "";
        vnode.forEach(function (el) {
          multiChild += renderVNode(el, context);
        });
        return multiChild;
      } else {
        throw "数据不合法";
      }
  }
}

function renderVNodeGen(vnode, context) {
  var _vnode2, vtype, type, props, innerHTML$$1, p, curValue, selectValue, values, valuesSet, str, fakeUpdater, children, i, child, data, multiChild;

  return _regeneratorRuntime.wrap(function renderVNodeGen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _vnode2 = vnode, vtype = _vnode2.vtype, type = _vnode2.type, props = _vnode2.props;
          _context.t0 = type;
          _context.next = _context.t0 === "#text" ? 4 : _context.t0 === "#comment" ? 7 : 10;
          break;

        case 4:
          _context.next = 6;
          return encodeEntities(vnode.text);

        case 6:
          return _context.abrupt("break", 40);

        case 7:
          _context.next = 9;
          return "<!--" + vnode.text + "-->";

        case 9:
          return _context.abrupt("break", 40);

        case 10:
          innerHTML$$1 = props && props.dangerouslySetInnerHTML;

          innerHTML$$1 = innerHTML$$1 && innerHTML$$1.__html;

          if (!(vtype === 1)) {
            _context.next = 24;
            break;
          }

          //如果是元素节点
          if (type === "option") {
            //向上找到select元素
            for (p = vnode.return; p && p.type !== "select"; p === p.return) {
              // no operation
            }
            if (p && p.valuesSet) {
              curValue = getOptionValue(vnode);

              if (p.valuesSet["&" + curValue]) {
                props = _Object$assign({ selected: "" }, props); //添加一个selected属性
              }
            }
          } else if (type === "select") {
            selectValue = vnode.props.value || vnode.props.defaultValue;

            if (selectValue != null) {
              values = [].concat(selectValue), valuesSet = {};

              values.forEach(function (el) {
                valuesSet["&" + el] = true;
              });
              vnode.valuesSet = valuesSet;
            }
          }

          str = "<" + type + stringifyAttributes(props, type);

          if (!voidTags[type]) {
            _context.next = 18;
            break;
          }

          _context.next = 18;
          return str + "/>\n";

        case 18:
          str += ">";
          if (innerHTML$$1) {
            str += innerHTML$$1;
          } else {
            fakeUpdater = {
              vnode: vnode
            };
            children = fiberizeChildren(props.children, fakeUpdater);

            for (i in children) {
              child = children[i];

              str += renderVNode(child, context);
            }
            vnode.updater = fakeUpdater;
          }
          _context.next = 22;
          return str + "</" + type + ">\n";

        case 22:
          _context.next = 40;
          break;

        case 24:
          if (!(vtype > 1)) {
            _context.next = 32;
            break;
          }

          data = {
            context: context
          };

          vnode = toVnode(vnode, data);
          context = data.context;
          _context.next = 30;
          return renderVNode(vnode, context);

        case 30:
          _context.next = 40;
          break;

        case 32:
          if (!Array.isArray(vnode)) {
            _context.next = 39;
            break;
          }

          multiChild = "";

          vnode.forEach(function (el) {
            multiChild += renderVNode(el, context);
          });
          _context.next = 37;
          return multiChild;

        case 37:
          _context.next = 40;
          break;

        case 39:
          throw "数据不合法";

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getOptionValue(option) {
  if ("value" in option.props) {
    return option.props.value;
  } else {
    var a = option.props.children;
    if (a + "" === "a") {
      return a;
    } else {
      return a.text;
    }
  }
}

var voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];

/**
 * 将组件虚拟DOM进行实例化，不断render，归化为元素虚拟DOM或文本节点或数组
 * @param {*} vnode 组件虚拟DOM
 * @param {*} data 一个包含context的对象
 */
function toVnode(vnode, data) {
  var parentContext = data.context,
      Type = vnode.type,
      instance,
      rendered;

  if (vnode.vtype > 1) {
    var props = vnode.props;
    // props = getComponentProps(Type, props)
    var instanceContext = getContextByTypes(parentContext, Type.contextTypes);
    if (vnode.vtype === 4) {
      //处理无状态组件
      rendered = Type(props, instanceContext);
      if (rendered && rendered.render) {
        rendered = rendered.render();
      }
      instance = {};
    } else {
      //处理普通组件
      instance = new Type(props, instanceContext);
      instance.props = instance.props || props;
      instance.context = instance.context || instanceContext;
      if (instance.componentWillMount) {
        try {
          instance.componentWillMount();
        } catch (e) {
          // no operation
        }
      }
      rendered = instance.render();
    }

    rendered = fixVnode(rendered);

    if (instance.componentWillMount) {
      instance.componentWillMount();
    }
    // <App />下面存在<A ref="a"/>那么AppInstance.refs.a = AInstance
    // patchRef(vnode._owner, vnode.props.ref, instance)

    if (instance.getChildContext) {
      data.context = getChildContext(instance, parentContext); //将context往下传
    }
    if (Array.isArray(rendered)) {
      return rendered.map(function (el) {
        return toVnode(el, data, instance);
      });
    } else {
      return toVnode(rendered, data, instance);
    }
  } else {
    return vnode;
  }
}

//==================实现序列化文本节点与属性值的相关方法=============

function fixVnode(vnode) {
  var number = typeNumber(vnode);
  if (number < 3) {
    // 0, 1, 2
    return {
      vtype: 0,
      text: "",
      type: "#text"
    };
  } else if (number < 5) {
    //3, 4
    return {
      vtype: 0,
      text: vnode + "",
      type: "#text"
    };
  } else {
    return vnode;
  }
}

function renderToString(vnode, context) {
  return renderVNode(fixVnode(vnode), context || {});
}

function renderToNodeStream(vnode, context) {
  var rs = new stream.Readable();
  var it = renderVNodeGen(vnode, context || {});

  rs._read = function () {
    var v = it.next();

    if (!v.done) {
      rs.push(v.value.toString());
    } else {
      rs.push(null);
    }
  };

  return rs;
}

var index = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToString,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToNodeStream
};

return index;

})));
