(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-serialization.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-serialization.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-serialization-kotlinx'.");
    }
    globalThis['ktor-ktor-serialization-kotlinx'] = factory(typeof globalThis['ktor-ktor-serialization-kotlinx'] === 'undefined' ? {} : globalThis['ktor-ktor-serialization-kotlinx'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['ktor-ktor-http'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-serialization']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var protoOf = kotlin_kotlin.$_$.tb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var toString = kotlin_kotlin.$_$.wb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var isInterface = kotlin_kotlin.$_$.kb;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.l;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.p1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.v;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var equals = kotlin_kotlin.$_$.pa;
  var FunctionAdapter = kotlin_kotlin.$_$.ba;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var hashCode = kotlin_kotlin.$_$.ua;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.i;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.h1;
  var discard = kotlin_io_ktor_ktor_io.$_$.v;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var readText = kotlin_io_ktor_ktor_io.$_$.w;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var getKClassFromExpression = kotlin_kotlin.$_$.lc;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var KtMap = kotlin_kotlin.$_$.i5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var KtSet = kotlin_kotlin.$_$.n5;
  var firstOrNull_0 = kotlin_kotlin.$_$.r6;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var isArray = kotlin_kotlin.$_$.cb;
  var KtList = kotlin_kotlin.$_$.g5;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Exception = kotlin_kotlin.$_$.lf;
  var joinToString = kotlin_kotlin.$_$.y6;
  var to = kotlin_kotlin.$_$.ug;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var filterNotNull = kotlin_kotlin.$_$.p6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j3;
  var singleOrNull = kotlin_kotlin.$_$.s7;
  var Collection = kotlin_kotlin.$_$.b5;
  var KClass = kotlin_kotlin.$_$.oc;
  var emptyList = kotlin_kotlin.$_$.k6;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($serializeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($deserializeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
  //endregion
  function extensions(format) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = get_providers();
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp0_safe_receiver = element.r4x(format);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.b1(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.n34(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.a4y_1 = $$this$unsafeFlow;
    this.b4y_1 = $contentType;
    this.c4y_1 = $charset;
    this.d4y_1 = $typeInfo;
    this.e4y_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).d35 = function (value, $completion) {
    var tmp = this.e35(value, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).d9 = function (p1, $completion) {
    return this.d35(p1, $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.a4y_1;
            var tmp2 = this.f4y_1;
            this.g4y_1 = tmp0;
            this.i8_1 = 1;
            suspendResult = tmp2.x4l(this.b4y_1, this.c4y_1, this.d4y_1, this.e4y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.i8_1 = 2;
            suspendResult = this.g4y_1.q1a(ARGUMENT, this);
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
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).e35 = function (value, completion) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.a4y_1, this.b4y_1, this.c4y_1, this.d4y_1, this.e4y_1, completion);
    i.f4y_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
    return constructCallableReference(function (value, $completion) {
      return i.d35(value, $completion);
    }, 1);
  }
  function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p4y_1 = _this__u8e3s4;
    this.q4y_1 = collector;
  }
  protoOf($collectCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var $this$unsafeFlow = this.q4y_1;
            this.i8_1 = 1;
            var tmp_0 = KotlinxSerializationConverter$serialize$o$collect$slambda_0($this$unsafeFlow, this.p4y_1.s4y_1, this.p4y_1.t4y_1, this.p4y_1.u4y_1, this.p4y_1.v4y_1, null);
            suspendResult = this.p4y_1.r4y_1.s1a(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.q1r(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.s1r(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported format ' + toString(format);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.w4y_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q1a = function (value, $completion) {
    return this.w4y_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).h3 = function () {
    return this.w4y_1;
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
  function KotlinxSerializationConverter$serialize$$inlined$map$1($this, $contentType, $charset, $typeInfo, $value) {
    this.r4y_1 = $this;
    this.s4y_1 = $contentType;
    this.t4y_1 = $charset;
    this.u4y_1 = $typeInfo;
    this.v4y_1 = $value;
  }
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).r1a = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$(this, collector, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).s1a = function (collector, $completion) {
    return this.r1a(collector, $completion);
  };
  function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$slambda).g4z = function (it, $completion) {
    var tmp = this.h4z(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).d9 = function (p1, $completion) {
    return this.g4z((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          return !(this.f4z_1 == null);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).h4z = function (it, completion) {
    var i = new KotlinxSerializationConverter$serialize$slambda(completion);
    i.f4z_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.g4z(it, $completion);
    }, 1);
  }
  function $serializeCOROUTINE$(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4z_1 = _this__u8e3s4;
    this.r4z_1 = contentType;
    this.s4z_1 = charset;
    this.t4z_1 = typeInfo;
    this.u4z_1 = value;
  }
  protoOf($serializeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            var this_0 = asFlow(this.q4z_1.w4z_1);
            var tmp_0 = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, this.r4z_1, this.s4z_1, this.t4z_1, this.u4z_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$serialize$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var fromExtension = suspendResult;
            if (!(fromExtension == null))
              return fromExtension;
            var tmp_1;
            try {
              tmp_1 = serializerForTypeInfo(this.q4z_1.v4z_1.r1u(), this.t4z_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.u4z_1, this.q4z_1.v4z_1.r1u());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this.q4z_1, serializer, this.q4z_1.v4z_1, this.u4z_1, this.r4z_1, this.s4z_1);
          case 2:
            throw this.l8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $deserializeCOROUTINE$(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f50_1 = _this__u8e3s4;
    this.g50_1 = charset;
    this.h50_1 = typeInfo;
    this.i50_1 = content;
  }
  protoOf($deserializeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.i8_1 = 1;
            suspendResult = readRemaining(this.i50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j50_1 = suspendResult;
            this.l50_1 = this.f50_1.w4z_1.t();
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!this.l50_1.u()) {
              this.i8_1 = 5;
              continue $sm;
            }

            var ext = this.l50_1.v();
            this.i8_1 = 3;
            suspendResult = ext.f35(this.g50_1, this.h50_1, ByteReadChannel(this.j50_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.i8_1 = 2;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.k50_1 = tmp0_elvis_lhs;
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            return this.k50_1;
          case 5:
            var serializer = serializerForTypeInfo(this.f50_1.v4z_1.r1u(), this.h50_1);
            this.j8_1 = 6;
            var tmp1_subject = this.f50_1.v4z_1;
            var tmp_1;
            if (isInterface(tmp1_subject, StringFormat)) {
              tmp_1 = this.f50_1.v4z_1.r1r(serializer, readText(this.j50_1, this.g50_1));
            } else {
              if (isInterface(tmp1_subject, BinaryFormat)) {
                tmp_1 = this.f50_1.v4z_1.t1r(serializer, readByteArray(this.j50_1));
              } else {
                discard(this.j50_1);
                var message = 'Unsupported format ' + toString(this.f50_1.v4z_1);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            return tmp_1;
          case 6:
            this.j8_1 = 7;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Error) {
              var cause = this.l8_1;
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.l8_1;
            }

          case 7:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 7) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.v4z_1 = format;
    this.w4z_1 = extensions(this.v4z_1);
    var tmp;
    var tmp_0 = this.v4z_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.v4z_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.v4z_1) + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).m50 = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeCOROUTINE$(this, contentType, charset, typeInfo, value, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(KotlinxSerializationConverter).x4l = function (contentType, charset, typeInfo, value, $completion) {
    return this.m50(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).f35 = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$(this, charset, typeInfo, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.p2h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.k().r()) {
        tmp_0 = null;
      } else {
        var tmp0_elvis_lhs = serializerOrNull(module_0, tmp0_safe_receiver);
        tmp_0 = tmp0_elvis_lhs == null ? checkTypeParameters(tmp0_safe_receiver, typeInfo, module_0) : tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = module_0.y1r(typeInfo.o2h_1);
      tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.o2h_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp;
    if (value == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_instance));
    } else {
      if (isInterface(value, KtList)) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (isArray(value)) {
          var tmp1_safe_receiver = firstOrNull_0(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
        } else {
          if (isInterface(value, KtSet)) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (isInterface(value, KtMap)) {
              var keySerializer = elementSerializer(value.q2(), module_0);
              var valueSerializer = elementSerializer(value.r2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.y1r(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function checkTypeParameters(type, typeInfo, module_0) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = type.k();
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp;
      try {
        var tmp0_safe_receiver = element.ei_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_1;
          if (serializerOrNull(module_0, tmp0_safe_receiver) == null) {
            tmp_1 = tmp0_safe_receiver;
          } else {
            tmp_1 = null;
          }
          tmp_0 = tmp_1;
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Exception) {
          var _unused_var__etf5q3 = $p;
          return null;
        } else {
          throw $p;
        }
      }
      if (tmp == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.b1(tmp);
      }
    }
    var nonSerializableArgs = destination;
    if (nonSerializableArgs.r())
      return null;
    var argNames = joinToString(nonSerializableArgs, VOID, VOID, VOID, VOID, VOID, checkTypeParameters$lambda);
    var tmp_3;
    if (nonSerializableArgs.d1() === 1) {
      tmp_3 = to('', 'is');
    } else {
      tmp_3 = to('s', 'are');
    }
    var _destruct__k2r9zo = tmp_3;
    var s = _destruct__k2r9zo.ne();
    var be = _destruct__k2r9zo.oe();
    throw SerializationException_init_$Create$('Serializer for type argument' + s + ' ' + argNames + ' ' + be + " not found for '" + typeInfo.o2h_1.o() + "'. " + ('Ensure that the listed type' + s + ' ' + be + " marked as '@Serializable'."));
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.p2h_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = filterNotNull(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = guessSerializer(item, module_0);
      destination.b1(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.distinctBy' call
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.t();
    while (_iterator__ex2g4s_0.u()) {
      var e = _iterator__ex2g4s_0.v();
      var key = e.x1q().j1s();
      if (set.b1(key)) {
        list.b1(e);
      }
    }
    var serializers = list;
    if (serializers.d1() > 1) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
      var _iterator__ex2g4s_1 = serializers.t();
      while (_iterator__ex2g4s_1.u()) {
        var item_0 = _iterator__ex2g4s_1.v();
        var tmp$ret$7 = item_0.x1q().j1s();
        destination_0.b1(tmp$ret$7);
      }
      // Inline function 'kotlin.error' call
      var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
    if (selected.x1q().c1s()) {
      return selected;
    }
    if (!isInterface(selected, KSerializer))
      THROW_CCE();
    var tmp$ret$9;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$9 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_2 = _this__u8e3s4.t();
      while (_iterator__ex2g4s_2.u()) {
        var element = _iterator__ex2g4s_2.v();
        if (element == null) {
          tmp$ret$9 = true;
          break $l$block_0;
        }
      }
      tmp$ret$9 = false;
    }
    if (tmp$ret$9) {
      return get_nullable(selected);
    }
    return selected;
  }
  function checkTypeParameters$lambda(it) {
    var clz = it.j();
    var tmp;
    if (!(clz == null) ? isInterface(clz, KClass) : false) {
      tmp = "'" + clz.o() + "'";
    } else {
      tmp = "'" + toString(it) + "'";
    }
    return tmp;
  }
  function get_providers() {
    return emptyList();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx.js.map
