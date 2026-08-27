(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-bytestring'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-bytestring'.");
    }
    globalThis['kotlinx-io-kotlinx-io-bytestring'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.c;
  var copyOfRange = kotlin_kotlin.$_$.x5;
  var protoOf = kotlin_kotlin.$_$.tb;
  var objectCreate = kotlin_kotlin.$_$.sb;
  var toCharArray = kotlin_kotlin.$_$.he;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var getKClassFromExpression = kotlin_kotlin.$_$.lc;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var contentEquals = kotlin_kotlin.$_$.t5;
  var contentHashCode = kotlin_kotlin.$_$.u5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var compareTo = kotlin_kotlin.$_$.ma;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e;
  var Comparable = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var decodeToString = kotlin_kotlin.$_$.zc;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
  //endregion
  function ByteString_init_$Init$(data, startIndex, endIndex, $this) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    ByteString.call($this, copyOfRange(data, startIndex, endIndex), null);
    return $this;
  }
  function ByteString_init_$Create$(data, startIndex, endIndex) {
    return ByteString_init_$Init$(data, startIndex, endIndex, objectCreate(protoOf(ByteString)));
  }
  function Companion() {
    Companion_instance = this;
    this.on_1 = new ByteString(new Int8Array(0), null);
    this.pn_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).qn = function (byteArray) {
    return new ByteString(byteArray, null);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ByteString(data, dummy) {
    Companion_getInstance();
    this.rn_1 = data;
    this.sn_1 = 0;
  }
  protoOf(ByteString).d1 = function () {
    return this.rn_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.rn_1.length === this.rn_1.length))
      return false;
    if (!(other.sn_1 === 0) && !(this.sn_1 === 0) && !(other.sn_1 === this.sn_1))
      return false;
    return contentEquals(this.rn_1, other.rn_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.sn_1;
    if (hc === 0) {
      hc = contentHashCode(this.rn_1);
      this.sn_1 = hc;
    }
    return hc;
  };
  protoOf(ByteString).e1 = function (index) {
    if (index < 0 || index >= this.d1())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.d1() + ')');
    return this.rn_1[index];
  };
  protoOf(ByteString).tn = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().on_1;
    } else {
      tmp = ByteString_init_$Create$(this.rn_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).un = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.d1() : endIndex;
    return $super === VOID ? this.tn(startIndex, endIndex) : $super.tn.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).vn = function (other) {
    if (other === this)
      return 0;
    var localData = this.rn_1;
    var otherData = other.rn_1;
    var inductionVariable = 0;
    var tmp0 = this.d1();
    // Inline function 'kotlin.math.min' call
    var b = other.d1();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$5 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$5);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.d1(), other.d1());
  };
  protoOf(ByteString).d = function (other) {
    return this.vn(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.d1().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.d1(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.q('ByteString(size=');
    $this$with.q(sizeStr);
    $this$with.q(' hex=');
    var localData = this.rn_1;
    var inductionVariable = 0;
    var last = this.d1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.s(Companion_getInstance().pn_1[(b >>> 4 | 0) & 15]);
        $this$with.s(Companion_getInstance().pn_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.s(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).wn = function () {
    return this.rn_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().on_1;
    } else {
      tmp = Companion_getInstance().qn(bytes);
    }
    return tmp;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.wn());
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.d1() === 0;
  }
  function UnsafeByteStringOperations() {
  }
  protoOf(UnsafeByteStringOperations).xn = function (array) {
    return Companion_getInstance().qn(array);
  };
  var UnsafeByteStringOperations_instance;
  function UnsafeByteStringOperations_getInstance() {
    return UnsafeByteStringOperations_instance;
  }
  //region block: init
  UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UnsafeByteStringOperations_instance;
  _.$_$.b = ByteString_init_$Create$;
  _.$_$.c = ByteString_0;
  _.$_$.d = decodeToString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
