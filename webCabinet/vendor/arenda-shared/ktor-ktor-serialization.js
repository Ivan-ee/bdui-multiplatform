(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-http.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-http.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-serialization'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization'.");
    }
    globalThis['ktor-ktor-serialization'] = factory(typeof globalThis['ktor-ktor-serialization'] === 'undefined' ? {} : globalThis['ktor-ktor-serialization'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-http']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_http) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.lf;
  var VOID = kotlin_kotlin.$_$.c;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.d4;
  var captureStack = kotlin_kotlin.$_$.fa;
  var protoOf = kotlin_kotlin.$_$.tb;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var initMetadataForInterface = kotlin_kotlin.$_$.za;
  var equals = kotlin_kotlin.$_$.pa;
  var FunctionAdapter = kotlin_kotlin.$_$.ba;
  var isInterface = kotlin_kotlin.$_$.kb;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var hashCode = kotlin_kotlin.$_$.ua;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
  initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
  function register$default(contentType, converter, configuration, $super) {
    var tmp;
    if (configuration === VOID) {
      tmp = Configuration$register$lambda;
    } else {
      tmp = configuration;
    }
    configuration = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.m34(contentType, converter, configuration);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.m34.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  initMetadataForInterface(Configuration, 'Configuration');
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($deserializeCOROUTINE$, CoroutineImpl);
  //endregion
  function ContentConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function Configuration$register$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Configuration() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.o34_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q1a = function (value, $completion) {
    return this.o34_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).h3 = function () {
    return this.o34_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.h3(), other.h3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    this.x34_1 = $$this$unsafeFlow;
    this.y34_1 = $charset;
    this.z34_1 = $typeInfo;
    this.a35_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).d35 = function (value, $completion) {
    var tmp = this.e35(value, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(deserialize$o$collect$slambda).d9 = function (p1, $completion) {
    return this.d35(p1, $completion);
  };
  protoOf(deserialize$o$collect$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.x34_1;
            var tmp2 = this.b35_1;
            this.c35_1 = tmp0;
            this.i8_1 = 1;
            suspendResult = tmp2.f35(this.y34_1, this.z34_1, this.a35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.i8_1 = 2;
            suspendResult = this.c35_1.q1a(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(deserialize$o$collect$slambda).e35 = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.x34_1, this.y34_1, this.z34_1, this.a35_1, completion);
    i.b35_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
    return constructCallableReference(function (value, $completion) {
      return i.d35(value, $completion);
    }, 1);
  }
  function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o35_1 = _this__u8e3s4;
    this.p35_1 = collector;
  }
  protoOf($collectCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var $this$unsafeFlow = this.p35_1;
            this.i8_1 = 1;
            var tmp_0 = deserialize$o$collect$slambda_0($this$unsafeFlow, this.o35_1.r35_1, this.o35_1.s35_1, this.o35_1.t35_1, null);
            suspendResult = this.o35_1.q35_1.s1a(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function deserialize$$inlined$map$1($this, $charset, $typeInfo, $body) {
    this.q35_1 = $this;
    this.r35_1 = $charset;
    this.s35_1 = $typeInfo;
    this.t35_1 = $body;
  }
  protoOf(deserialize$$inlined$map$1).r1a = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$(this, collector, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(deserialize$$inlined$map$1).s1a = function (collector, $completion) {
    return this.r1a(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.c36_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).e36 = function (it, $completion) {
    var tmp = this.e35(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(deserialize$slambda).d9 = function (p1, $completion) {
    return this.e36(p1, $completion);
  };
  protoOf(deserialize$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          return !(this.d36_1 == null) || this.c36_1.m1g();
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).e35 = function (it, completion) {
    var i = new deserialize$slambda(this.c36_1, completion);
    i.d36_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.e36(it, $completion);
    }, 1);
  }
  function $deserializeCOROUTINE$(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i34_1 = _this__u8e3s4;
    this.j34_1 = body;
    this.k34_1 = typeInfo;
    this.l34_1 = charset;
  }
  protoOf($deserializeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            var this_0 = asFlow(this.i34_1);
            var tmp_0 = new deserialize$$inlined$map$1(this_0, this.l34_1, this.k34_1, this.j34_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.j34_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.j34_1.m1g()) {
                tmp_1 = this.j34_1;
              } else {
                var tmp0_safe_receiver = this.k34_1.p2h_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l()) === true) {
                  tmp_1 = NullBody_instance;
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.k34_1.toString());
                }
              }
            }

            return tmp_1;
          case 2:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = Configuration;
  _.$_$.d = JsonConvertException;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization.js.map
