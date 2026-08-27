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
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.o;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.z2;
  var lazy = kotlin_kotlin.$_$.og;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var emptyList = kotlin_kotlin.$_$.k6;
  var equals = kotlin_kotlin.$_$.pa;
  var Long = kotlin_kotlin.$_$.of;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var objectCreate = kotlin_kotlin.$_$.sb;
  var toString = kotlin_kotlin.$_$.wb;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var hashCode = kotlin_kotlin.$_$.ua;
  var equalsLong = kotlin_kotlin.$_$.o9;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
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
  initMetadataForClass(CatalogApi, 'CatalogApi', VOID, VOID, VOID, [0]);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RentalObjectDto, 'RentalObjectDto', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForLambda(CatalogApiJs$fetchObjects$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(CatalogApiJs$fetchCatalogLayout$slambda, CoroutineImpl, VOID, [1]);
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
  function CatalogApi(baseUrl, engine) {
    engine = engine === VOID ? defaultHttpEngine() : engine;
    this.n50_1 = baseUrl;
    var tmp = this;
    tmp.o50_1 = Json(VOID, CatalogApi$json$lambda);
    var tmp_0 = this;
    tmp_0.p50_1 = HttpClient(engine, CatalogApi$client$lambda(this));
  }
  protoOf(CatalogApi).i51 = function ($completion) {
    var tmp = new $fetchObjectsCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApi).j51 = function ($completion) {
    var tmp = new $fetchCatalogLayoutCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function RentalObjectDto$Companion$$childSerializers$_anonymous__o6l0xe() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k51_1 = [null, null, null, null, null, null, lazy(tmp_0, RentalObjectDto$Companion$$childSerializers$_anonymous__o6l0xe), null];
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ru.arenda.shared.RentalObjectDto', this, 8);
    tmp0_serialDesc.q21('id', false);
    tmp0_serialDesc.q21('owner_id', false);
    tmp0_serialDesc.q21('title', false);
    tmp0_serialDesc.q21('address', false);
    tmp0_serialDesc.q21('description', true);
    tmp0_serialDesc.q21('price_per_month', false);
    tmp0_serialDesc.q21('photos', true);
    tmp0_serialDesc.q21('status', true);
    this.l51_1 = tmp0_serialDesc;
  }
  protoOf($serializer).m51 = function (encoder, value) {
    var tmp0_desc = this.l51_1;
    var tmp1_output = encoder.d1u(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().k51_1;
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
  protoOf($serializer).y1q = function (encoder, value) {
    return this.m51(encoder, value instanceof RentalObjectDto ? value : THROW_CCE());
  };
  protoOf($serializer).z1q = function (decoder) {
    var tmp0_desc = this.l51_1;
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
    var tmp13_cached = Companion_getInstance_0().k51_1;
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
  protoOf($serializer).x1q = function () {
    return this.l51_1;
  };
  protoOf($serializer).f22 = function () {
    var tmp0_cached = Companion_getInstance_0().k51_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), tmp0_cached[6].m1(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function RentalObjectDto_init_$Init$(seen0, id, ownerId, title, address, description, pricePerMonth, photos, status, serializationConstructorMarker, $this) {
    if (!(47 === (47 & seen0))) {
      throwMissingFieldException(seen0, 47, $serializer_getInstance().l51_1);
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
    Companion_getInstance_0();
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
  protoOf(RentalObjectDto).n51 = function () {
    return this.id;
  };
  protoOf(RentalObjectDto).o51 = function () {
    return this.ownerId;
  };
  protoOf(RentalObjectDto).p51 = function () {
    return this.title;
  };
  protoOf(RentalObjectDto).q51 = function () {
    return this.address;
  };
  protoOf(RentalObjectDto).r51 = function () {
    return this.description;
  };
  protoOf(RentalObjectDto).s51 = function () {
    return this.pricePerMonth;
  };
  protoOf(RentalObjectDto).t51 = function () {
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
  protoOf(RentalObjectDto).u51 = function () {
    return this.title;
  };
  protoOf(RentalObjectDto).v51 = function () {
    return this.address;
  };
  protoOf(RentalObjectDto).w51 = function () {
    return this.description;
  };
  protoOf(RentalObjectDto).x51 = function () {
    return this.pricePerMonth;
  };
  protoOf(RentalObjectDto).y51 = function () {
    return this.photos;
  };
  protoOf(RentalObjectDto).z51 = function () {
    return this.status;
  };
  protoOf(RentalObjectDto).a52 = function (id, ownerId, title, address, description, pricePerMonth, photos, status) {
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
    return $super === VOID ? this.a52(id, ownerId, title, address, description, pricePerMonth, photos, status) : $super.a52.call(this, id, ownerId, title, address, description, pricePerMonth, photos, status);
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
    this.j52_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchObjects$slambda).l52 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchObjects$slambda).d9 = function (p1, $completion) {
    return this.l52((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.j52_1.m52_1.i51(this);
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
    var i = new CatalogApiJs$fetchObjects$slambda(this.j52_1, completion);
    i.k52_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchObjects$slambda_0(this$0, resultContinuation) {
    var i = new CatalogApiJs$fetchObjects$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.l52($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs$fetchCatalogLayout$slambda(this$0, resultContinuation) {
    this.v52_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CatalogApiJs$fetchCatalogLayout$slambda).x52 = function ($this$promise, $completion) {
    var tmp = this.w1o($this$promise, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CatalogApiJs$fetchCatalogLayout$slambda).d9 = function (p1, $completion) {
    return this.x52((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.v52_1.m52_1.j51(this);
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
    var i = new CatalogApiJs$fetchCatalogLayout$slambda(this.v52_1, completion);
    i.w52_1 = $this$promise;
    return i;
  };
  function CatalogApiJs$fetchCatalogLayout$slambda_0(this$0, resultContinuation) {
    var i = new CatalogApiJs$fetchCatalogLayout$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$promise, $completion) {
      return i.x52($this$promise, $completion);
    }, 1);
  }
  function CatalogApiJs(baseUrl) {
    this.m52_1 = new CatalogApi(baseUrl);
  }
  protoOf(CatalogApiJs).fetchObjects = function () {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchObjects$slambda_0(this, null));
  };
  protoOf(CatalogApiJs).fetchCatalogLayout = function () {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, CatalogApiJs$fetchCatalogLayout$slambda_0(this, null));
  };
  function createCatalogApi(baseUrl) {
    return new CatalogApiJs(baseUrl);
  }
  function defaultHttpEngine() {
    return Js_instance;
  }
  //region block: post-declaration
  protoOf($serializer).g22 = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var ru = _.ru || (_.ru = {});
    var arenda = ru.arenda || (ru.arenda = {});
    var shared = arenda.shared || (arenda.shared = {});
    shared.RentalObjectDto = RentalObjectDto;
    var ru_0 = _.ru || (_.ru = {});
    var arenda_0 = ru_0.arenda || (ru_0.arenda = {});
    var shared_0 = arenda_0.shared || (arenda_0.shared = {});
    shared_0.CatalogApiJs = CatalogApiJs;
    shared_0.createCatalogApi = createCatalogApi;
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=bdui-multiplatform-shared.js.map
