(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-serialization-kotlinx-json.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['ktor-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'ktor-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['ktor-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'ktor-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-content-negotiation' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'bdui-multiplatform:shared'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'bdui-multiplatform:shared'.");
    }
    globalThis['bdui-multiplatform:shared'] = factory(typeof globalThis['bdui-multiplatform:shared'] === 'undefined' ? {} : globalThis['bdui-multiplatform:shared'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-client-content-negotiation'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var get_ContentNegotiation = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.i;
  var url = kotlin_io_ktor_ktor_client_core.$_$.k;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.m;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var KtList = kotlin_kotlin.$_$.g5;
  var getKClass = kotlin_kotlin.$_$.mc;
  var arrayOf = kotlin_kotlin.$_$.gg;
  var createKType = kotlin_kotlin.$_$.kc;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.ic;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var isInterface = kotlin_kotlin.$_$.kb;
  var protoOf = kotlin_kotlin.$_$.tb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.c;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var contentType = kotlin_io_ktor_ktor_http.$_$.i1;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.o;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var objectCreate = kotlin_kotlin.$_$.sb;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var Long = kotlin_kotlin.$_$.of;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var equalsLong = kotlin_kotlin.$_$.o9;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.z2;
  var lazy = kotlin_kotlin.$_$.og;
  var emptyList = kotlin_kotlin.$_$.k6;
  var equals = kotlin_kotlin.$_$.pa;
  var toString = kotlin_kotlin.$_$.wb;
  var hashCode = kotlin_kotlin.$_$.ua;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.h6;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var Js_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForCoroutine($fetchObjectsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fetchCatalogLayoutCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fetchObjectLayoutCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fetchPayLayoutCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fetchMyPaymentsLayoutCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($createPaymentCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CatalogApi, 'CatalogApi', VOID, VOID, VOID, [0, 1, 2]);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CreatePaymentRequest, 'CreatePaymentRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PaymentDto, 'PaymentDto', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RentalObjectDto, 'RentalObjectDto', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForLambda(CatalogApiJs$fetchObjects$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CatalogApiJs$fetchCatalogLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CatalogApiJs$fetchObjectLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CatalogApiJs$fetchPayLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CatalogApiJs$fetchMyPaymentsLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CatalogApiJs$createPayment$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(CatalogApiJs, 'CatalogApiJs');
  //endregion
  function CatalogApi$json$lambda($this$Json) {
    $this$Json.s4m_1 = true;
    return Unit_instance;
  }
  function CatalogApi$client$lambda$lambda(this$0) {
    return function ($this$install) {
      json($this$install, this$0.o50_1);
      return Unit_instance;
    };
  }
  function CatalogApi$client$lambda(this$0) {
    return function ($this$HttpClient) {
      var tmp = get_ContentNegotiation();
      $this$HttpClient.v3f(tmp, CatalogApi$client$lambda$lambda(this$0));
      return Unit_instance;
    };
  }
  function $fetchObjectsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y50_1 = _this__u8e3s4;
  }
  protoOf($fetchObjectsCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.y50_1.p50_1;
            var urlString = this.y50_1.n50_1 + '/api/v1/objects';
            var this_0 = new HttpRequestBuilder();
            url(this_0, urlString);
            this_0.p3e_1 = Companion_getInstance().b2p_1;
            this.i8_1 = 1;
            suspendResult = (new HttpStatement(this_0, tmp0)).w4c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_1 = suspendResult;
            this.i8_1 = 2;
            var tmp_0 = this_1.d3g();
            var tmp_1 = getKClass(KtList);
            var tmp_2;
            try {
              tmp_2 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(RentalObjectDto), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_3 = null;
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }

            suspendResult = tmp_0.a3g(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isInterface(suspendResult, KtList) : false) ? suspendResult : THROW_CCE();
          case 3:
            throw this.l8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $fetchCatalogLayoutCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h51_1 = _this__u8e3s4;
  }
  protoOf($fetchCatalogLayoutCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.h51_1.p50_1;
            var urlString = this.h51_1.n50_1 + '/api/v1/layout/catalog';
            var this_0 = new HttpRequestBuilder();
            url(this_0, urlString);
            this_0.p3e_1 = Companion_getInstance().b2p_1;
            this.i8_1 = 1;
            suspendResult = (new HttpStatement(this_0, tmp0)).w4c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.i8_1 = 2;
            suspendResult = bodyAsText(ARGUMENT, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $fetchObjectLayoutCOROUTINE$(_this__u8e3s4, objectId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q51_1 = _this__u8e3s4;
    this.r51_1 = objectId;
  }
  protoOf($fetchObjectLayoutCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.q51_1.p50_1;
            var urlString = this.q51_1.n50_1 + '/api/v1/layout/object/' + this.r51_1;
            var this_0 = new HttpRequestBuilder();
            url(this_0, urlString);
            this_0.p3e_1 = Companion_getInstance().b2p_1;
            this.i8_1 = 1;
            suspendResult = (new HttpStatement(this_0, tmp0)).w4c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.i8_1 = 2;
            suspendResult = bodyAsText(ARGUMENT, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $fetchPayLayoutCOROUTINE$(_this__u8e3s4, objectId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a52_1 = _this__u8e3s4;
    this.b52_1 = objectId;
  }
  protoOf($fetchPayLayoutCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.a52_1.p50_1;
            var urlString = this.a52_1.n50_1 + '/api/v1/layout/pay/' + this.b52_1;
            var this_0 = new HttpRequestBuilder();
            url(this_0, urlString);
            this_0.p3e_1 = Companion_getInstance().b2p_1;
            this.i8_1 = 1;
            suspendResult = (new HttpStatement(this_0, tmp0)).w4c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.i8_1 = 2;
            suspendResult = bodyAsText(ARGUMENT, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $fetchMyPaymentsLayoutCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k52_1 = _this__u8e3s4;
  }
  protoOf($fetchMyPaymentsLayoutCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.k52_1.p50_1;
            var urlString = this.k52_1.n50_1 + '/api/v1/layout/my_payments';
            var this_0 = new HttpRequestBuilder();
            url(this_0, urlString);
            this_0.p3e_1 = Companion_getInstance().b2p_1;
            this.i8_1 = 1;
            suspendResult = (new HttpStatement(this_0, tmp0)).w4c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.i8_1 = 2;
            suspendResult = bodyAsText(ARGUMENT, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $createPaymentCOROUTINE$(_this__u8e3s4, objectId, months, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t52_1 = _this__u8e3s4;
    this.u52_1 = objectId;
    this.v52_1 = months;
  }
  protoOf($createPaymentCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.t52_1.p50_1;
            var urlString = this.t52_1.n50_1 + '/api/v1/payments';
            var builder = new HttpRequestBuilder();
            builder.p3e_1 = Companion_getInstance().c2p_1;
            url(builder, urlString);
            contentType(builder, Application_getInstance().v2i_1);
            var body = new CreatePaymentRequest(this.u52_1, this.v52_1);
            if (body == null) {
              builder.r3e_1 = NullBody_instance;
              var tmp_0 = getKClass(CreatePaymentRequest);
              var tmp_1;
              try {
                tmp_1 = createKType(getKClass(CreatePaymentRequest), arrayOf([]), false);
              } catch ($p) {
                var tmp_2;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_2 = null;
                } else {
                  throw $p;
                }
                tmp_1 = tmp_2;
              }
              builder.j3k(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                builder.r3e_1 = body;
                builder.j3k(null);
              } else {
                builder.r3e_1 = body;
                var tmp_3 = getKClass(CreatePaymentRequest);
                var tmp_4;
                try {
                  tmp_4 = createKType(getKClass(CreatePaymentRequest), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_5;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_5 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_4 = tmp_5;
                }
                builder.j3k(new TypeInfo(tmp_3, tmp_4));
              }
            }

            builder.p3e_1 = Companion_getInstance().c2p_1;
            this.i8_1 = 1;
            suspendResult = (new HttpStatement(builder, tmp0)).w4c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.i8_1 = 2;
            var tmp_6 = this_0.d3g();
            var tmp_7 = getKClass(PaymentDto);
            var tmp_8;
            try {
              tmp_8 = createKType(getKClass(PaymentDto), arrayOf([]), false);
            } catch ($p_1) {
              var tmp_9;
              if ($p_1 instanceof Error) {
                var _unused_var__etf5q3_1 = $p_1;
                tmp_9 = null;
              } else {
                throw $p_1;
              }
              tmp_8 = tmp_9;
            }

            suspendResult = tmp_6.a3g(new TypeInfo(tmp_7, tmp_8), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof PaymentDto ? suspendResult : THROW_CCE();
          case 3:
            throw this.l8_1;
        }
      } catch ($p_2) {
        var e = $p_2;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function CatalogApi(baseUrl, engine) {
    engine = engine === VOID ? defaultHttpEngine() : engine;
    this.n50_1 = baseUrl;
    var tmp = this;
    tmp.o50_1 = Json(VOID, CatalogApi$json$lambda);
    var tmp_0 = this;
    tmp_0.p50_1 = HttpClient(engine, CatalogApi$client$lambda(this));
  }
  protoOf(CatalogApi).w52 = function ($completion) {
    var tmp = new $fetchObjectsCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApi).x52 = function ($completion) {
    var tmp = new $fetchCatalogLayoutCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApi).y52 = function (objectId, $completion) {
    var tmp = new $fetchObjectLayoutCOROUTINE$(this, objectId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApi).z52 = function (objectId, $completion) {
    var tmp = new $fetchPayLayoutCOROUTINE$(this, objectId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApi).a53 = function ($completion) {
    var tmp = new $fetchMyPaymentsLayoutCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApi).b53 = function (objectId, months, $completion) {
    var tmp = new $createPaymentCOROUTINE$(this, objectId, months, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ru.arenda.shared.CreatePaymentRequest', this, 2);
    tmp0_serialDesc.q21('object_id', false);
    tmp0_serialDesc.q21('months', false);
    this.c53_1 = tmp0_serialDesc;
  }
  protoOf($serializer).d53 = function (encoder, value) {
    var tmp0_desc = this.c53_1;
    var tmp1_output = encoder.d1u(tmp0_desc);
    tmp1_output.r1v(tmp0_desc, 0, value.e53_1);
    tmp1_output.m1v(tmp0_desc, 1, value.f53_1);
    tmp1_output.e1u(tmp0_desc);
  };
  protoOf($serializer).y1q = function (encoder, value) {
    return this.d53(encoder, value instanceof CreatePaymentRequest ? value : THROW_CCE());
  };
  protoOf($serializer).z1q = function (decoder) {
    var tmp0_desc = this.c53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_input = decoder.d1u(tmp0_desc);
    if (tmp6_input.s1u()) {
      tmp4_local0 = tmp6_input.n1u(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.i1u(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.t1u(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.n1u(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.i1u(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.e1u(tmp0_desc);
    return CreatePaymentRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).x1q = function () {
    return this.c53_1;
  };
  protoOf($serializer).f22 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function CreatePaymentRequest_init_$Init$(seen0, objectId, months, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().c53_1);
    }
    $this.e53_1 = objectId;
    $this.f53_1 = months;
    return $this;
  }
  function CreatePaymentRequest_init_$Create$(seen0, objectId, months, serializationConstructorMarker) {
    return CreatePaymentRequest_init_$Init$(seen0, objectId, months, serializationConstructorMarker, objectCreate(protoOf(CreatePaymentRequest)));
  }
  function CreatePaymentRequest(objectId, months) {
    this.e53_1 = objectId;
    this.f53_1 = months;
  }
  protoOf(CreatePaymentRequest).toString = function () {
    return 'CreatePaymentRequest(objectId=' + this.e53_1 + ', months=' + this.f53_1 + ')';
  };
  protoOf(CreatePaymentRequest).hashCode = function () {
    var result = getStringHashCode(this.e53_1);
    result = imul(result, 31) + this.f53_1 | 0;
    return result;
  };
  protoOf(CreatePaymentRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreatePaymentRequest))
      return false;
    if (!(this.e53_1 === other.e53_1))
      return false;
    if (!(this.f53_1 === other.f53_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ru.arenda.shared.PaymentDto', this, 9);
    tmp0_serialDesc.q21('id', false);
    tmp0_serialDesc.q21('user_id', false);
    tmp0_serialDesc.q21('object_id', false);
    tmp0_serialDesc.q21('start_date', false);
    tmp0_serialDesc.q21('months', false);
    tmp0_serialDesc.q21('amount', false);
    tmp0_serialDesc.q21('status', false);
    tmp0_serialDesc.q21('object_title', true);
    tmp0_serialDesc.q21('object_address', true);
    this.g53_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).h53 = function (encoder, value) {
    var tmp0_desc = this.g53_1;
    var tmp1_output = encoder.d1u(tmp0_desc);
    tmp1_output.r1v(tmp0_desc, 0, value.id);
    tmp1_output.r1v(tmp0_desc, 1, value.userId);
    tmp1_output.r1v(tmp0_desc, 2, value.objectId);
    tmp1_output.r1v(tmp0_desc, 3, value.startDate);
    tmp1_output.m1v(tmp0_desc, 4, value.months);
    tmp1_output.n1v(tmp0_desc, 5, value.amount);
    tmp1_output.r1v(tmp0_desc, 6, value.status);
    if (tmp1_output.x1v(tmp0_desc, 7) ? true : !(value.objectTitle === '')) {
      tmp1_output.r1v(tmp0_desc, 7, value.objectTitle);
    }
    if (tmp1_output.x1v(tmp0_desc, 8) ? true : !(value.objectAddress === '')) {
      tmp1_output.r1v(tmp0_desc, 8, value.objectAddress);
    }
    tmp1_output.e1u(tmp0_desc);
  };
  protoOf($serializer_0).y1q = function (encoder, value) {
    return this.h53(encoder, value instanceof PaymentDto ? value : THROW_CCE());
  };
  protoOf($serializer_0).z1q = function (decoder) {
    var tmp0_desc = this.g53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = new Long(0, 0);
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.d1u(tmp0_desc);
    if (tmp13_input.s1u()) {
      tmp4_local0 = tmp13_input.n1u(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.n1u(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.n1u(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.n1u(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.i1u(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.j1u(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.n1u(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.n1u(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.n1u(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.t1u(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.n1u(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.n1u(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.n1u(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.n1u(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.i1u(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.j1u(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.n1u(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.n1u(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.n1u(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.e1u(tmp0_desc);
    return PaymentDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_0).x1q = function () {
    return this.g53_1;
  };
  protoOf($serializer_0).f22 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function PaymentDto_init_$Init$(seen0, id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_0().g53_1);
    }
    $this.id = id;
    $this.userId = userId;
    $this.objectId = objectId;
    $this.startDate = startDate;
    $this.months = months;
    $this.amount = amount;
    $this.status = status;
    if (0 === (seen0 & 128))
      $this.objectTitle = '';
    else
      $this.objectTitle = objectTitle;
    if (0 === (seen0 & 256))
      $this.objectAddress = '';
    else
      $this.objectAddress = objectAddress;
    return $this;
  }
  function PaymentDto_init_$Create$(seen0, id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress, serializationConstructorMarker) {
    return PaymentDto_init_$Init$(seen0, id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress, serializationConstructorMarker, objectCreate(protoOf(PaymentDto)));
  }
  function PaymentDto(id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress) {
    objectTitle = objectTitle === VOID ? '' : objectTitle;
    objectAddress = objectAddress === VOID ? '' : objectAddress;
    this.id = id;
    this.userId = userId;
    this.objectId = objectId;
    this.startDate = startDate;
    this.months = months;
    this.amount = amount;
    this.status = status;
    this.objectTitle = objectTitle;
    this.objectAddress = objectAddress;
  }
  protoOf(PaymentDto).i53 = function () {
    return this.id;
  };
  protoOf(PaymentDto).j53 = function () {
    return this.userId;
  };
  protoOf(PaymentDto).k53 = function () {
    return this.objectId;
  };
  protoOf(PaymentDto).l53 = function () {
    return this.startDate;
  };
  protoOf(PaymentDto).m53 = function () {
    return this.months;
  };
  protoOf(PaymentDto).n53 = function () {
    return this.amount;
  };
  protoOf(PaymentDto).n3g = function () {
    return this.status;
  };
  protoOf(PaymentDto).o53 = function () {
    return this.objectTitle;
  };
  protoOf(PaymentDto).p53 = function () {
    return this.objectAddress;
  };
  protoOf(PaymentDto).ne = function () {
    return this.id;
  };
  protoOf(PaymentDto).oe = function () {
    return this.userId;
  };
  protoOf(PaymentDto).q53 = function () {
    return this.objectId;
  };
  protoOf(PaymentDto).r53 = function () {
    return this.startDate;
  };
  protoOf(PaymentDto).s53 = function () {
    return this.months;
  };
  protoOf(PaymentDto).t53 = function () {
    return this.amount;
  };
  protoOf(PaymentDto).u53 = function () {
    return this.status;
  };
  protoOf(PaymentDto).v53 = function () {
    return this.objectTitle;
  };
  protoOf(PaymentDto).w53 = function () {
    return this.objectAddress;
  };
  protoOf(PaymentDto).x53 = function (id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress) {
    return new PaymentDto(id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress);
  };
  protoOf(PaymentDto).copy = function (id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress, $super) {
    id = id === VOID ? this.id : id;
    userId = userId === VOID ? this.userId : userId;
    objectId = objectId === VOID ? this.objectId : objectId;
    startDate = startDate === VOID ? this.startDate : startDate;
    months = months === VOID ? this.months : months;
    amount = amount === VOID ? this.amount : amount;
    status = status === VOID ? this.status : status;
    objectTitle = objectTitle === VOID ? this.objectTitle : objectTitle;
    objectAddress = objectAddress === VOID ? this.objectAddress : objectAddress;
    return $super === VOID ? this.x53(id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress) : $super.x53.call(this, id, userId, objectId, startDate, months, amount, status, objectTitle, objectAddress);
  };
  protoOf(PaymentDto).toString = function () {
    return 'PaymentDto(id=' + this.id + ', userId=' + this.userId + ', objectId=' + this.objectId + ', startDate=' + this.startDate + ', months=' + this.months + ', amount=' + this.amount.toString() + ', status=' + this.status + ', objectTitle=' + this.objectTitle + ', objectAddress=' + this.objectAddress + ')';
  };
  protoOf(PaymentDto).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.userId) | 0;
    result = imul(result, 31) + getStringHashCode(this.objectId) | 0;
    result = imul(result, 31) + getStringHashCode(this.startDate) | 0;
    result = imul(result, 31) + this.months | 0;
    result = imul(result, 31) + this.amount.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.status) | 0;
    result = imul(result, 31) + getStringHashCode(this.objectTitle) | 0;
    result = imul(result, 31) + getStringHashCode(this.objectAddress) | 0;
    return result;
  };
  protoOf(PaymentDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PaymentDto))
      return false;
    if (!(this.id === other.id))
      return false;
    if (!(this.userId === other.userId))
      return false;
    if (!(this.objectId === other.objectId))
      return false;
    if (!(this.startDate === other.startDate))
      return false;
    if (!(this.months === other.months))
      return false;
    if (!equalsLong(this.amount, other.amount))
      return false;
    if (!(this.status === other.status))
      return false;
    if (!(this.objectTitle === other.objectTitle))
      return false;
    if (!(this.objectAddress === other.objectAddress))
      return false;
    return true;
  };
  function RentalObjectDto$Companion$$childSerializers$_anonymous__o6l0xe() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y53_1 = [null, null, null, null, null, null, lazy(tmp_0, RentalObjectDto$Companion$$childSerializers$_anonymous__o6l0xe), null];
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ru.arenda.shared.RentalObjectDto', this, 8);
    tmp0_serialDesc.q21('id', false);
    tmp0_serialDesc.q21('owner_id', false);
    tmp0_serialDesc.q21('title', false);
    tmp0_serialDesc.q21('address', false);
    tmp0_serialDesc.q21('description', true);
    tmp0_serialDesc.q21('price_per_month', false);
    tmp0_serialDesc.q21('photos', true);
    tmp0_serialDesc.q21('status', true);
    this.z53_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).a54 = function (encoder, value) {
    var tmp0_desc = this.z53_1;
    var tmp1_output = encoder.d1u(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().y53_1;
    tmp1_output.r1v(tmp0_desc, 0, value.id);
    tmp1_output.r1v(tmp0_desc, 1, value.ownerId);
    tmp1_output.r1v(tmp0_desc, 2, value.title);
    tmp1_output.r1v(tmp0_desc, 3, value.address);
    if (tmp1_output.x1v(tmp0_desc, 4) ? true : !(value.description === '')) {
      tmp1_output.r1v(tmp0_desc, 4, value.description);
    }
    tmp1_output.n1v(tmp0_desc, 5, value.pricePerMonth);
    if (tmp1_output.x1v(tmp0_desc, 6) ? true : !equals(value.photos, emptyList())) {
      tmp1_output.t1v(tmp0_desc, 6, tmp2_cached[6].m1(), value.photos);
    }
    if (tmp1_output.x1v(tmp0_desc, 7) ? true : !(value.status === 'free')) {
      tmp1_output.r1v(tmp0_desc, 7, value.status);
    }
    tmp1_output.e1u(tmp0_desc);
  };
  protoOf($serializer_1).y1q = function (encoder, value) {
    return this.a54(encoder, value instanceof RentalObjectDto ? value : THROW_CCE());
  };
  protoOf($serializer_1).z1q = function (decoder) {
    var tmp0_desc = this.z53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = new Long(0, 0);
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.d1u(tmp0_desc);
    var tmp13_cached = Companion_getInstance_2().y53_1;
    if (tmp12_input.s1u()) {
      tmp4_local0 = tmp12_input.n1u(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.n1u(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.n1u(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.n1u(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.n1u(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.j1u(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.p1u(tmp0_desc, 6, tmp13_cached[6].m1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.n1u(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.t1u(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.n1u(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.n1u(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.n1u(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.n1u(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.n1u(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.j1u(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.p1u(tmp0_desc, 6, tmp13_cached[6].m1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.n1u(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.e1u(tmp0_desc);
    return RentalObjectDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_1).x1q = function () {
    return this.z53_1;
  };
  protoOf($serializer_1).f22 = function () {
    var tmp0_cached = Companion_getInstance_2().y53_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), tmp0_cached[6].m1(), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function RentalObjectDto_init_$Init$(seen0, id, ownerId, title, address, description, pricePerMonth, photos, status, serializationConstructorMarker, $this) {
    if (!(47 === (47 & seen0))) {
      throwMissingFieldException(seen0, 47, $serializer_getInstance_1().z53_1);
    }
    $this.id = id;
    $this.ownerId = ownerId;
    $this.title = title;
    $this.address = address;
    if (0 === (seen0 & 16))
      $this.description = '';
    else
      $this.description = description;
    $this.pricePerMonth = pricePerMonth;
    if (0 === (seen0 & 64))
      $this.photos = emptyList();
    else
      $this.photos = photos;
    if (0 === (seen0 & 128))
      $this.status = 'free';
    else
      $this.status = status;
    return $this;
  }
  function RentalObjectDto_init_$Create$(seen0, id, ownerId, title, address, description, pricePerMonth, photos, status, serializationConstructorMarker) {
    return RentalObjectDto_init_$Init$(seen0, id, ownerId, title, address, description, pricePerMonth, photos, status, serializationConstructorMarker, objectCreate(protoOf(RentalObjectDto)));
  }
  function RentalObjectDto(id, ownerId, title, address, description, pricePerMonth, photos, status) {
    Companion_getInstance_2();
    description = description === VOID ? '' : description;
    photos = photos === VOID ? emptyList() : photos;
    status = status === VOID ? 'free' : status;
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.address = address;
    this.description = description;
    this.pricePerMonth = pricePerMonth;
    this.photos = photos;
    this.status = status;
  }
  protoOf(RentalObjectDto).i53 = function () {
    return this.id;
  };
  protoOf(RentalObjectDto).b54 = function () {
    return this.ownerId;
  };
  protoOf(RentalObjectDto).c54 = function () {
    return this.title;
  };
  protoOf(RentalObjectDto).d54 = function () {
    return this.address;
  };
  protoOf(RentalObjectDto).e54 = function () {
    return this.description;
  };
  protoOf(RentalObjectDto).f54 = function () {
    return this.pricePerMonth;
  };
  protoOf(RentalObjectDto).g54 = function () {
    return this.photos;
  };
  protoOf(RentalObjectDto).n3g = function () {
    return this.status;
  };
  protoOf(RentalObjectDto).ne = function () {
    return this.id;
  };
  protoOf(RentalObjectDto).oe = function () {
    return this.ownerId;
  };
  protoOf(RentalObjectDto).q53 = function () {
    return this.title;
  };
  protoOf(RentalObjectDto).r53 = function () {
    return this.address;
  };
  protoOf(RentalObjectDto).s53 = function () {
    return this.description;
  };
  protoOf(RentalObjectDto).t53 = function () {
    return this.pricePerMonth;
  };
  protoOf(RentalObjectDto).u53 = function () {
    return this.photos;
  };
  protoOf(RentalObjectDto).v53 = function () {
    return this.status;
  };
  protoOf(RentalObjectDto).h54 = function (id, ownerId, title, address, description, pricePerMonth, photos, status) {
    return new RentalObjectDto(id, ownerId, title, address, description, pricePerMonth, photos, status);
  };
  protoOf(RentalObjectDto).copy = function (id, ownerId, title, address, description, pricePerMonth, photos, status, $super) {
    id = id === VOID ? this.id : id;
    ownerId = ownerId === VOID ? this.ownerId : ownerId;
    title = title === VOID ? this.title : title;
    address = address === VOID ? this.address : address;
    description = description === VOID ? this.description : description;
    pricePerMonth = pricePerMonth === VOID ? this.pricePerMonth : pricePerMonth;
    photos = photos === VOID ? this.photos : photos;
    status = status === VOID ? this.status : status;
    return $super === VOID ? this.h54(id, ownerId, title, address, description, pricePerMonth, photos, status) : $super.h54.call(this, id, ownerId, title, address, description, pricePerMonth, photos, status);
  };
  protoOf(RentalObjectDto).toString = function () {
    return 'RentalObjectDto(id=' + this.id + ', ownerId=' + this.ownerId + ', title=' + this.title + ', address=' + this.address + ', description=' + this.description + ', pricePerMonth=' + this.pricePerMonth.toString() + ', photos=' + toString(this.photos) + ', status=' + this.status + ')';
  };
  protoOf(RentalObjectDto).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.ownerId) | 0;
    result = imul(result, 31) + getStringHashCode(this.title) | 0;
    result = imul(result, 31) + getStringHashCode(this.address) | 0;
    result = imul(result, 31) + getStringHashCode(this.description) | 0;
    result = imul(result, 31) + this.pricePerMonth.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.photos) | 0;
    result = imul(result, 31) + getStringHashCode(this.status) | 0;
    return result;
  };
  protoOf(RentalObjectDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RentalObjectDto))
      return false;
    if (!(this.id === other.id))
      return false;
    if (!(this.ownerId === other.ownerId))
      return false;
    if (!(this.title === other.title))
      return false;
    if (!(this.address === other.address))
      return false;
    if (!(this.description === other.description))
      return false;
    if (!equalsLong(this.pricePerMonth, other.pricePerMonth))
      return false;
    if (!equals(this.photos, other.photos))
      return false;
    if (!(this.status === other.status))
      return false;
    return true;
  };
  function CatalogApiJs$fetchObjects$slambda(this$0, resultContinuation) {
    this.q54_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchObjects$slambda).s54 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchObjects$slambda).d9 = function (p1, $completion) {
    return this.s54((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogApiJs$fetchObjects$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.q54_1.t54_1.w52(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            return copyToArray(this_0);
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
  protoOf(CatalogApiJs$fetchObjects$slambda).w1o = function ($this$promise, completion) {
    var i = new CatalogApiJs$fetchObjects$slambda(this.q54_1, completion);
    i.r54_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchObjects$slambda_0(this$0, resultContinuation) {
    var i = new CatalogApiJs$fetchObjects$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.s54($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs$fetchCatalogLayout$slambda(this$0, resultContinuation) {
    this.c55_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchCatalogLayout$slambda).e55 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchCatalogLayout$slambda).d9 = function (p1, $completion) {
    return this.e55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogApiJs$fetchCatalogLayout$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.c55_1.t54_1.x52(this);
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
  protoOf(CatalogApiJs$fetchCatalogLayout$slambda).w1o = function ($this$promise, completion) {
    var i = new CatalogApiJs$fetchCatalogLayout$slambda(this.c55_1, completion);
    i.d55_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchCatalogLayout$slambda_0(this$0, resultContinuation) {
    var i = new CatalogApiJs$fetchCatalogLayout$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.e55($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs$fetchObjectLayout$slambda(this$0, $objectId, resultContinuation) {
    this.n55_1 = this$0;
    this.o55_1 = $objectId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchObjectLayout$slambda).e55 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchObjectLayout$slambda).d9 = function (p1, $completion) {
    return this.e55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogApiJs$fetchObjectLayout$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.n55_1.t54_1.y52(this.o55_1, this);
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
  protoOf(CatalogApiJs$fetchObjectLayout$slambda).w1o = function ($this$promise, completion) {
    var i = new CatalogApiJs$fetchObjectLayout$slambda(this.n55_1, this.o55_1, completion);
    i.p55_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchObjectLayout$slambda_0(this$0, $objectId, resultContinuation) {
    var i = new CatalogApiJs$fetchObjectLayout$slambda(this$0, $objectId, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.e55($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs$fetchPayLayout$slambda(this$0, $objectId, resultContinuation) {
    this.y55_1 = this$0;
    this.z55_1 = $objectId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchPayLayout$slambda).e55 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchPayLayout$slambda).d9 = function (p1, $completion) {
    return this.e55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogApiJs$fetchPayLayout$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.y55_1.t54_1.z52(this.z55_1, this);
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
  protoOf(CatalogApiJs$fetchPayLayout$slambda).w1o = function ($this$promise, completion) {
    var i = new CatalogApiJs$fetchPayLayout$slambda(this.y55_1, this.z55_1, completion);
    i.a56_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchPayLayout$slambda_0(this$0, $objectId, resultContinuation) {
    var i = new CatalogApiJs$fetchPayLayout$slambda(this$0, $objectId, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.e55($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs$fetchMyPaymentsLayout$slambda(this$0, resultContinuation) {
    this.j56_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchMyPaymentsLayout$slambda).e55 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchMyPaymentsLayout$slambda).d9 = function (p1, $completion) {
    return this.e55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogApiJs$fetchMyPaymentsLayout$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.j56_1.t54_1.a53(this);
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
  protoOf(CatalogApiJs$fetchMyPaymentsLayout$slambda).w1o = function ($this$promise, completion) {
    var i = new CatalogApiJs$fetchMyPaymentsLayout$slambda(this.j56_1, completion);
    i.k56_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchMyPaymentsLayout$slambda_0(this$0, resultContinuation) {
    var i = new CatalogApiJs$fetchMyPaymentsLayout$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.e55($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs$createPayment$slambda(this$0, $objectId, $months, resultContinuation) {
    this.t56_1 = this$0;
    this.u56_1 = $objectId;
    this.v56_1 = $months;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$createPayment$slambda).x56 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$createPayment$slambda).d9 = function (p1, $completion) {
    return this.x56((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CatalogApiJs$createPayment$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.t56_1.t54_1.b53(this.u56_1, this.v56_1, this);
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
  protoOf(CatalogApiJs$createPayment$slambda).w1o = function ($this$promise, completion) {
    var i = new CatalogApiJs$createPayment$slambda(this.t56_1, this.u56_1, this.v56_1, completion);
    i.w56_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$createPayment$slambda_0(this$0, $objectId, $months, resultContinuation) {
    var i = new CatalogApiJs$createPayment$slambda(this$0, $objectId, $months, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.x56($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs(baseUrl) {
    this.t54_1 = new CatalogApi(baseUrl);
  }
  protoOf(CatalogApiJs).fetchObjects = function () {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchObjects$slambda_0(this, null));
  };
  protoOf(CatalogApiJs).fetchCatalogLayout = function () {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchCatalogLayout$slambda_0(this, null));
  };
  protoOf(CatalogApiJs).fetchObjectLayout = function (objectId) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchObjectLayout$slambda_0(this, objectId, null));
  };
  protoOf(CatalogApiJs).fetchPayLayout = function (objectId) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchPayLayout$slambda_0(this, objectId, null));
  };
  protoOf(CatalogApiJs).fetchMyPaymentsLayout = function () {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchMyPaymentsLayout$slambda_0(this, null));
  };
  protoOf(CatalogApiJs).createPayment = function (objectId, months) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$createPayment$slambda_0(this, objectId, months, null));
  };
  function createCatalogApi(baseUrl) {
    return new CatalogApiJs(baseUrl);
  }
  function defaultHttpEngine() {
    return Js_instance;
  }
  //region block: post-declaration
  protoOf($serializer).g22 = typeParametersSerializers;
  protoOf($serializer_0).g22 = typeParametersSerializers;
  protoOf($serializer_1).g22 = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var ru = _.ru || (_.ru = {});
    var arenda = ru.arenda || (ru.arenda = {});
    var shared = arenda.shared || (arenda.shared = {});
    shared.PaymentDto = PaymentDto;
    var ru_0 = _.ru || (_.ru = {});
    var arenda_0 = ru_0.arenda || (ru_0.arenda = {});
    var shared_0 = arenda_0.shared || (arenda_0.shared = {});
    shared_0.RentalObjectDto = RentalObjectDto;
    var ru_1 = _.ru || (_.ru = {});
    var arenda_1 = ru_1.arenda || (ru_1.arenda = {});
    var shared_1 = arenda_1.shared || (arenda_1.shared = {});
    shared_1.CatalogApiJs = CatalogApiJs;
    shared_1.createCatalogApi = createCatalogApi;
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=bdui-multiplatform-shared.js.map
