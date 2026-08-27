(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-serialization.js', './ktor-ktor-io.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './ktor-ktor-http.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-serialization.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-http.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-serialization' was not found. Please, check whether 'ktor-ktor-serialization' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-content-negotiation'.");
    }
    globalThis['ktor-ktor-client-content-negotiation'] = factory(typeof globalThis['ktor-ktor-client-content-negotiation'] === 'undefined' ? {} : globalThis['ktor-ktor-client-content-negotiation'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-serialization'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-http']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_http) {
  'use strict';
  //region block: imports
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var protoOf = kotlin_kotlin.$_$.tb;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var lazy = kotlin_kotlin.$_$.pg;
  var endsWith = kotlin_kotlin.$_$.dd;
  var plus = kotlin_kotlin.$_$.j7;
  var toMutableSet = kotlin_kotlin.$_$.d8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var VOID = kotlin_kotlin.$_$.c;
  var Exception = kotlin_kotlin.$_$.lf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b4;
  var captureStack = kotlin_kotlin.$_$.fa;
  var toString = kotlin_kotlin.$_$.wb;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var TransformRequestBodyContext = kotlin_io_ktor_ktor_client_core.$_$.d;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.i;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var TransformResponseBodyContext = kotlin_io_ktor_ktor_client_core.$_$.e;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.l;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.kb;
  var contentType = kotlin_io_ktor_ktor_http.$_$.i1;
  var charset = kotlin_io_ktor_ktor_http.$_$.f1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.n;
  var Collection = kotlin_kotlin.$_$.b5;
  var emptyList = kotlin_kotlin.$_$.k6;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.j;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var getKClassFromExpression = kotlin_kotlin.$_$.lc;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.h1;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var Unit = kotlin_kotlin.$_$.dg;
  var ensureNotNull = kotlin_kotlin.$_$.jg;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.pa;
  var joinToString = kotlin_kotlin.$_$.y6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c3;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var to = kotlin_kotlin.$_$.ug;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.k;
  var mapOf = kotlin_kotlin.$_$.h7;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l2;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.z;
  var getKClass = kotlin_kotlin.$_$.mc;
  var ClientSSESession = kotlin_io_ktor_ktor_client_core.$_$.h;
  var ClientSSESessionWithDeserialization = kotlin_io_ktor_ktor_client_core.$_$.g;
  var setOf = kotlin_kotlin.$_$.r7;
  var KtList = kotlin_kotlin.$_$.g5;
  var ContentType = kotlin_io_ktor_ktor_http.$_$.x;
  var arrayOf = kotlin_kotlin.$_$.gg;
  var createKType = kotlin_kotlin.$_$.kc;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.ic;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.f;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
  initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
  initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
  initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
  initMetadataForLambda(ContentNegotiation$lambda$slambda, CoroutineImpl, VOID, [4]);
  initMetadataForLambda(ContentNegotiation$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForCoroutine($invoke$convertRequestCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$convertResponseCOROUTINE$, CoroutineImpl);
  //endregion
  function get_supportedSuffixTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return supportedSuffixTypes;
  }
  var supportedSuffixTypes;
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function get_ExcludedContentTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return ExcludedContentTypes;
  }
  var ExcludedContentTypes;
  function get_ContentNegotiation() {
    _init_properties_ContentNegotiation_kt__o183go();
    return ContentNegotiation;
  }
  var ContentNegotiation;
  function _get_subtypeSuffix__jfpkue($this) {
    var tmp0 = $this.y4i_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('subtypeSuffix', 1, tmp, ContentNegotiationConfig$defaultMatcher$o$_get_subtypeSuffix_$ref_v9fn95(), null);
    return tmp0.m1();
  }
  function ContentNegotiationConfig$defaultMatcher$o$subtypeSuffix$delegate$lambda($pattern) {
    return function () {
      var tmp0_safe_receiver = get_supportedSuffixTypes().p2($pattern.o2k());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = '+' + tmp0_safe_receiver;
      }
      return tmp;
    };
  }
  function ContentNegotiationConfig$defaultMatcher$o$_get_subtypeSuffix_$ref_v9fn95() {
    return constructCallableReference(function (p0) {
      return _get_subtypeSuffix__jfpkue(p0);
    }, 1, 0, 29);
  }
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.a4j_1 = converter;
    this.b4j_1 = contentTypeToSend;
    this.c4j_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiationConfig$defaultMatcher$1(pattern);
  }
  function ContentNegotiationConfig$defaultMatcher$1($pattern) {
    this.z4i_1 = $pattern;
    var tmp = this;
    tmp.y4i_1 = lazy(ContentNegotiationConfig$defaultMatcher$o$subtypeSuffix$delegate$lambda($pattern));
  }
  protoOf(ContentNegotiationConfig$defaultMatcher$1).d4j = function (contentType) {
    if (contentType.p2k(this.z4i_1)) {
      return true;
    }
    var tmp0_elvis_lhs = _get_subtypeSuffix__jfpkue(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var subtypeSuffix = tmp;
    return endsWith(contentType.m2k_1, subtypeSuffix, true);
  };
  function ContentNegotiationConfig() {
    this.e4j_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f4j_1 = ArrayList_init_$Create$();
    this.g4j_1 = null;
  }
  protoOf(ContentNegotiationConfig).m34 = function (contentType, converter, configuration) {
    this.h4j(contentType, converter, defaultMatcher(this, contentType), configuration);
  };
  protoOf(ContentNegotiationConfig).h4j = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.f4j_1.b1(registration);
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  function ContentNegotiationConfig$_init_$ref_1ne3ob() {
    return constructCallableReference(function () {
      return new ContentNegotiationConfig();
    }, 0, 0, 30, '<init>');
  }
  function ContentNegotiation$lambda($this$createClientPlugin) {
    _init_properties_ContentNegotiation_kt__o183go();
    var registrations = $this$createClientPlugin.p3m_1.f4j_1;
    var ignoredTypes = $this$createClientPlugin.p3m_1.e4j_1;
    $this$createClientPlugin.r44(ContentNegotiation$lambda$slambda_0(registrations, $this$createClientPlugin, ignoredTypes, null));
    $this$createClientPlugin.a3v(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function ContentNegotiation$lambda$convertRequest$lambda(it) {
    _init_properties_ContentNegotiation_kt__o183go();
    return toString(it.a4j_1);
  }
  function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
    var tmp = new $invoke$convertRequestCOROUTINE$(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
    charset = charset === VOID ? Charsets_getInstance().v1p_1 : charset;
    var tmp = new $invoke$convertResponseCOROUTINE$(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    this.z4k_1 = $registrations;
    this.a4l_1 = $this_createClientPlugin;
    this.b4l_1 = $ignoredTypes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda).g4l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    var tmp = this.h4l($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ContentNegotiation$lambda$slambda).f3w = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.g4l(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = invoke$convertRequest(this.z4k_1, this.a4l_1, this.b4l_1, this.d4l_1, this.e4l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(ContentNegotiation$lambda$slambda).h4l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
    var i = new ContentNegotiation$lambda$slambda(this.z4k_1, this.a4l_1, this.b4l_1, completion);
    i.c4l_1 = $this$transformRequestBody;
    i.d4l_1 = request;
    i.e4l_1 = body;
    i.f4l_1 = _unused_var__etf5q3;
    return i;
  };
  function ContentNegotiation$lambda$slambda_0($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation);
    return constructCallableReference(function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
      return i.g4l($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    }, 4);
  }
  function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    this.q4l_1 = $ignoredTypes;
    this.r4l_1 = $registrations;
    this.s4l_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda_1).d3w = function ($this$transformResponseBody, response, body, info, $completion) {
    var tmp = this.e3w($this$transformResponseBody, response, body, info, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ContentNegotiation$lambda$slambda_1).f3w = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.d3w(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0_elvis_lhs = contentType(this.u4l_1);
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var contentType_0 = tmp_0;
            var tmp1_elvis_lhs = charset(contentType_0);
            var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().v1p_1 : tmp1_elvis_lhs;
            this.i8_1 = 1;
            suspendResult = invoke$convertResponse(this.q4l_1, this.r4l_1, this.s4l_1, get_request(this.u4l_1).f3g(), this.w4l_1, this.v4l_1, contentType_0, charset_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(ContentNegotiation$lambda$slambda_1).e3w = function ($this$transformResponseBody, response, body, info, completion) {
    var i = new ContentNegotiation$lambda$slambda_1(this.q4l_1, this.r4l_1, this.s4l_1, completion);
    i.t4l_1 = $this$transformResponseBody;
    i.u4l_1 = response;
    i.v4l_1 = body;
    i.w4l_1 = info;
    return i;
  };
  function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, body, info, $completion) {
      return i.d3w($this$transformResponseBody, response, body, info, $completion);
    }, 4);
  }
  function $invoke$convertRequestCOROUTINE$(registrations, $this_createClientPlugin, ignoredTypes, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4j_1 = registrations;
    this.r4j_1 = $this_createClientPlugin;
    this.s4j_1 = ignoredTypes;
    this.t4j_1 = request;
    this.u4j_1 = body;
  }
  protoOf($invoke$convertRequestCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            var tmp_0;
            if (this.t4j_1.t3e_1.f2b(get_ExcludedContentTypes())) {
              var excluded = this.t4j_1.t3e_1.d2b(get_ExcludedContentTypes());
              var tmp0 = this.q4j_1;
              var destination = ArrayList_init_$Create$();
              var _iterator__ex2g4s = tmp0.t();
              while (_iterator__ex2g4s.u()) {
                var element = _iterator__ex2g4s.v();
                var tmp$ret$0;
                l$ret$1: do {
                  var tmp_1;
                  if (isInterface(excluded, Collection)) {
                    tmp_1 = excluded.r();
                  } else {
                    tmp_1 = false;
                  }
                  if (tmp_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                  var _iterator__ex2g4s_0 = excluded.t();
                  while (_iterator__ex2g4s_0.u()) {
                    var element_0 = _iterator__ex2g4s_0.v();
                    if (element.b4j_1.p2k(element_0)) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = true;
                }
                 while (false);
                if (tmp$ret$0) {
                  destination.b1(element);
                }
              }
              tmp_0 = destination;
            } else {
              tmp_0 = this.q4j_1;
            }

            var requestRegistrations = tmp_0;
            var tmp0_elvis_lhs = this.t4j_1.q3e_1.m2d('Accept');
            var acceptHeaders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
            var _iterator__ex2g4s_1 = requestRegistrations.t();
            while (_iterator__ex2g4s_1.u()) {
              var element_1 = _iterator__ex2g4s_1.v();
              var tmp$ret$2;
              l$ret$3: do {
                var tmp_2;
                if (isInterface(acceptHeaders, Collection)) {
                  tmp_2 = acceptHeaders.r();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
                var _iterator__ex2g4s_2 = acceptHeaders.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (Companion_getInstance().vl(element_2).p2k(element_1.b4j_1)) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                }
                tmp$ret$2 = true;
              }
               while (false);
              if (tmp$ret$2) {
                var qValue = this.r4j_1.p3m_1.g4j_1;
                var contentTypeToSend = qValue == null ? element_1.b4j_1 : element_1.b4j_1.n2k('q', qValue.toString());
                get_LOGGER().v2h('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + this.t4j_1.o3e_1.toString());
                accept(this.t4j_1, contentTypeToSend);
              }
            }

            var tmp_3;
            var tmp_4 = this.u4j_1;
            if (tmp_4 instanceof OutgoingContent) {
              tmp_3 = true;
            } else {
              var tmp0_0 = this.s4j_1;
              var tmp$ret$4;
              l$ret$5: do {
                var tmp_5;
                if (isInterface(tmp0_0, Collection)) {
                  tmp_5 = tmp0_0.r();
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  tmp$ret$4 = false;
                  break l$ret$5;
                }
                var _iterator__ex2g4s_3 = tmp0_0.t();
                while (_iterator__ex2g4s_3.u()) {
                  var element_3 = _iterator__ex2g4s_3.v();
                  if (element_3.ja(this.u4j_1)) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                tmp$ret$4 = false;
              }
               while (false);
              tmp_3 = tmp$ret$4;
            }

            if (tmp_3) {
              get_LOGGER().v2h('Body type ' + toString(getKClassFromExpression(this.u4j_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.t4j_1.o3e_1.toString() + '.'));
              return null;
            }

            var tmp_6 = this;
            var tmp0_elvis_lhs_0 = contentType_0(this.t4j_1);
            var tmp_7;
            if (tmp0_elvis_lhs_0 == null) {
              this.r4j_1;
              get_LOGGER().v2h("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.t4j_1.o3e_1.toString() + '.');
              return null;
            } else {
              tmp_7 = tmp0_elvis_lhs_0;
            }

            tmp_6.w4j_1 = tmp_7;
            var tmp_8 = this.u4j_1;
            if (tmp_8 instanceof Unit) {
              get_LOGGER().v2h('Sending empty body for ' + this.t4j_1.o3e_1.toString());
              this.t4j_1.q3e_1.t2d('Content-Type');
              return EmptyContent_getInstance();
            }

            var tmp_9 = this;
            var tmp0_1 = this.q4j_1;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_4 = tmp0_1.t();
            while (_iterator__ex2g4s_4.u()) {
              var element_4 = _iterator__ex2g4s_4.v();
              if (element_4.c4j_1.d4j(this.w4j_1)) {
                destination_0.b1(element_4);
              }
            }

            var tmp_10;
            if (!destination_0.r()) {
              tmp_10 = destination_0;
            } else {
              tmp_10 = null;
            }

            var tmp1_elvis_lhs = tmp_10;
            var tmp_11;
            if (tmp1_elvis_lhs == null) {
              this.r4j_1;
              get_LOGGER().v2h('None of the registered converters match request Content-Type=' + this.w4j_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.t4j_1.o3e_1.toString() + '.'));
              return null;
            } else {
              tmp_11 = tmp1_elvis_lhs;
            }

            tmp_9.v4j_1 = tmp_11;
            if (this.t4j_1.z46() == null) {
              get_LOGGER().v2h('Request has unknown body type. Skipping ContentNegotiation for ' + this.t4j_1.o3e_1.toString() + '.');
              return null;
            }

            this.t4j_1.q3e_1.t2d('Content-Type');
            this.a4k_1 = this.v4j_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.z4j_1 = this.a4k_1.t();
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!this.z4j_1.u()) {
              this.i8_1 = 5;
              continue $sm;
            }

            var element_5 = this.z4j_1.v();
            this.y4j_1 = element_5;
            this.i8_1 = 3;
            var tmp0_elvis_lhs_1 = charset(this.w4j_1);
            var tmp_12 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().v1p_1 : tmp0_elvis_lhs_1;
            var tmp_13 = ensureNotNull(this.t4j_1.z46());
            var this_0 = this.u4j_1;
            var tmp_14;
            if (!equals(this_0, NullBody_instance)) {
              tmp_14 = this_0;
            } else {
              tmp_14 = null;
            }

            suspendResult = this.y4j_1.a4j_1.x4l(this.w4j_1, tmp_12, tmp_13, tmp_14, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().v2h('Converted request body using ' + toString(this.y4j_1.a4j_1) + ' for ' + this.t4j_1.o3e_1.toString());
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.x4j_1 = result_0;
              this.i8_1 = 6;
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            this.i8_1 = 2;
            continue $sm;
          case 5:
            this.x4j_1 = null;
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.x4j_1;
            var tmp_15;
            if (tmp2_elvis_lhs == null) {
              var tmp_16 = "Can't convert " + toString(this.u4j_1) + ' with contentType ' + this.w4j_1.toString() + ' using converters ';
              throw new ContentConverterException(tmp_16 + joinToString(this.v4j_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
            } else {
              tmp_15 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_15;
            return serializedContent;
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
  function $invoke$convertResponseCOROUTINE$(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j4k_1 = ignoredTypes;
    this.k4k_1 = registrations;
    this.l4k_1 = $this_createClientPlugin;
    this.m4k_1 = requestUrl;
    this.n4k_1 = info;
    this.o4k_1 = body;
    this.p4k_1 = responseContentType;
    this.q4k_1 = charset;
  }
  protoOf($invoke$convertResponseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp_0 = this.o4k_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().v2h('Response body is already transformed. Skipping ContentNegotiation for ' + this.m4k_1.toString() + '.');
              return null;
            }

            if (this.j4k_1.h2(this.n4k_1.o2h_1)) {
              get_LOGGER().v2h('Response body type ' + toString(this.n4k_1.o2h_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.m4k_1.toString() + '.'));
              return null;
            }

            var tmp0 = this.k4k_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (element.c4j_1.d4j(this.p4k_1)) {
                destination.b1(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var _iterator__ex2g4s_0 = destination.t();
            while (_iterator__ex2g4s_0.u()) {
              var item = _iterator__ex2g4s_0.v();
              destination_0.b1(item.a4j_1);
            }

            var tmp_1;
            if (!destination_0.r()) {
              tmp_1 = destination_0;
            } else {
              tmp_1 = null;
            }

            var tmp0_elvis_lhs = tmp_1;
            var tmp_2;
            if (tmp0_elvis_lhs == null) {
              this.l4k_1;
              get_LOGGER().v2h('None of the registered converters match response with Content-Type=' + this.p4k_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.m4k_1.toString() + '.'));
              return null;
            } else {
              tmp_2 = tmp0_elvis_lhs;
            }

            var suitableConverters = tmp_2;
            this.i8_1 = 1;
            suspendResult = deserialize(suitableConverters, this.o4k_1, this.n4k_1, this.q4k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().v2h('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.m4k_1.toString() + '.');
            }

            return result;
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
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      supportedSuffixTypes = mapOf([to(Application_getInstance().v2i_1, 'json'), to(Application_getInstance().b2j_1, 'xml'), to(ContentType_init_$Create$('application', 'fastinfoset'), 'fastinfoset'), to(ContentType_init_$Create$('application', 'vnd.wap.wbxml'), 'wbxml'), to(Application_getInstance().e2j_1, 'zip')]);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().qb(), PrimitiveClasses_getInstance().mb(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent), getKClass(ClientSSESession), getKClass(ClientSSESessionWithDeserialization)]);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExcludedContentTypesAttr';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ContentType), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ExcludedContentTypes = new AttributeKey(name, tmp$ret$1);
      var tmp_2 = ContentNegotiationConfig$_init_$ref_1ne3ob();
      ContentNegotiation = createClientPlugin('ContentNegotiation', tmp_2, ContentNegotiation$lambda);
    }
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypes_web_kt__6eddjw();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypes_web_kt_23uj7m;
  function _init_properties_DefaultIgnoredTypes_web_kt__6eddjw() {
    if (!properties_initialized_DefaultIgnoredTypes_web_kt_23uj7m) {
      properties_initialized_DefaultIgnoredTypes_web_kt_23uj7m = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
    }
  }
  //region block: post-declaration
  protoOf(ContentNegotiationConfig).n34 = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ContentNegotiation;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation.js.map
