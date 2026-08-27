(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-http-cio.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-http-cio.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http-cio'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http-cio' was not found. Please, check whether 'ktor-ktor-http-cio' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-http-cio'], globalThis['ktor-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_http_cio, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.jg;
  var protoOf = kotlin_kotlin.$_$.tb;
  var objectCreate = kotlin_kotlin.$_$.sb;
  var CancellationException = kotlin_kotlin.$_$.j8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t3;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.wb;
  var getKClassFromExpression = kotlin_kotlin.$_$.lc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.cf;
  var isInterface = kotlin_kotlin.$_$.kb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.j1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l2;
  var arrayOf = kotlin_kotlin.$_$.gg;
  var createKType = kotlin_kotlin.$_$.kc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.pa;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.e9;
  var IllegalStateException = kotlin_kotlin.$_$.nf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.j4;
  var captureStack = kotlin_kotlin.$_$.fa;
  var defineProp = kotlin_kotlin.$_$.oa;
  var UnsupportedOperationException = kotlin_kotlin.$_$.eg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.w4;
  var trimIndent = kotlin_kotlin.$_$.ve;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.g1;
  var fromInt = kotlin_kotlin.$_$.p9;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.i1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.i;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.k4;
  var initMetadataForInterface = kotlin_kotlin.$_$.za;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var writer = kotlin_io_ktor_ktor_io.$_$.u1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.t;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.s;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.q;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.r;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.o;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.p;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.l1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.u;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var emptySet = kotlin_kotlin.$_$.m6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.b1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.r3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var getKClass = kotlin_kotlin.$_$.mc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.nc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.r1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.pg;
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var KtMutableMap = kotlin_kotlin.$_$.l5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.ic;
  var setOf = kotlin_kotlin.$_$.q7;
  var get = kotlin_kotlin.$_$.x8;
  var fold = kotlin_kotlin.$_$.w8;
  var minusKey = kotlin_kotlin.$_$.y8;
  var plus = kotlin_kotlin.$_$.a9;
  var Element = kotlin_kotlin.$_$.z8;
  var joinToString = kotlin_kotlin.$_$.y6;
  var setOf_0 = kotlin_kotlin.$_$.r7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.mb;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.n;
  var Unit = kotlin_kotlin.$_$.dg;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.oe;
  var contentType = kotlin_io_ktor_ktor_http.$_$.h1;
  var isByteArray = kotlin_kotlin.$_$.eb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.v;
  var Long = kotlin_kotlin.$_$.of;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.t1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.m;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.n1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.z;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.q1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.m1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.l;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.s1;
  var toInt = kotlin_kotlin.$_$.me;
  var reversed = kotlin_kotlin.$_$.p7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.x7;
  var sortedWith = kotlin_kotlin.$_$.t7;
  var Collection = kotlin_kotlin.$_$.b5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w3;
  var charSequenceLength = kotlin_kotlin.$_$.ka;
  var get_name = kotlin_io_ktor_ktor_io.$_$.r;
  var roundToInt = kotlin_kotlin.$_$.yb;
  var firstOrNull = kotlin_kotlin.$_$.q6;
  var FunctionAdapter = kotlin_kotlin.$_$.ba;
  var Comparator = kotlin_kotlin.$_$.gf;
  var hashCode = kotlin_kotlin.$_$.ua;
  var compareValues = kotlin_kotlin.$_$.i8;
  var charset = kotlin_io_ktor_ktor_http.$_$.f1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.r1;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.e1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.w;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.d1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.p1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.l1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.c1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.h;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.hc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ya;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Default_getInstance = kotlin_kotlin.$_$.k2;
  var equalsLong = kotlin_kotlin.$_$.o9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var toLongOrNull = kotlin_kotlin.$_$.ne;
  var multiply = kotlin_kotlin.$_$.u9;
  var compare = kotlin_kotlin.$_$.j9;
  var toNumber = kotlin_kotlin.$_$.aa;
  var numberToLong = kotlin_kotlin.$_$.w9;
  var add = kotlin_kotlin.$_$.g9;
  var Companion_instance = kotlin_kotlin.$_$.r2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m;
  var createFailure = kotlin_kotlin.$_$.ig;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.n;
  var toString_0 = kotlin_kotlin.$_$.tg;
  var trimMargin = kotlin_kotlin.$_$.we;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var KProperty0 = kotlin_kotlin.$_$.qc;
  var Exception = kotlin_kotlin.$_$.lf;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var createKTypeParameter = kotlin_kotlin.$_$.jc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.n;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.c2;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.y;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.m1;
  var emptyList = kotlin_kotlin.$_$.k6;
  var addAll = kotlin_kotlin.$_$.o5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_websockets.$_$.b;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.m4;
  var KtList = kotlin_kotlin.$_$.g5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.a1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.o1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var decode = kotlin_io_ktor_ktor_io.$_$.o;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.d1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.m;
  var close = kotlin_io_ktor_ktor_io.$_$.o1;
  var KtMutableList = kotlin_kotlin.$_$.j5;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.i;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var equals_0 = kotlin_kotlin.$_$.ed;
  var flatten = kotlin_kotlin.$_$.t6;
  var copyToArray = kotlin_kotlin.$_$.h6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.f;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.k1;
  var intercepted = kotlin_kotlin.$_$.n8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.f7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.u3;
  var Error_init_$Create$ = kotlin_kotlin.$_$.y3;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.ad;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.b1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.g8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.n1;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.w;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.d3g().nr();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($saveCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().z3e_1;
    client.l3c_1.b2h(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invokeCOROUTINE$, CoroutineImpl);
  initMetadataForFunctionReference(PipelineContext$proceed$ref, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpRetryEventData, 'HttpRetryEventData');
  initMetadataForLambda(HttpRequestRetryConfig$delay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpRequestRetryConfig, 'HttpRequestRetryConfig', HttpRequestRetryConfig);
  initMetadataForClass(HttpRetryShouldRetryContext, 'HttpRetryShouldRetryContext');
  initMetadataForClass(HttpRetryDelayContext, 'HttpRetryDelayContext');
  initMetadataForClass(HttpRetryModifyRequestContext, 'HttpRetryModifyRequestContext');
  initMetadataForLambda(HttpRequestRetry$lambda$slambda, CoroutineImpl, VOID, [3]);
  initMetadataForLambda(HttpRequestRetry$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($throwOnInvalidResponseBodyCOROUTINE$, CoroutineImpl);
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HttpRequestTimeoutException, 'HttpRequestTimeoutException', VOID, IOException, [CopyableThrowable]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBody$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance', VOID, VOID, [AutoCloseable]);
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformRequestBodyContext, 'TransformRequestBodyContext');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForClass(OnRequestContext, 'OnRequestContext');
  initMetadataForLambda(RequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestHook, 'RequestHook');
  initMetadataForLambda(TransformRequestBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformRequestBodyHook, 'TransformRequestBodyHook');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForClass(ClientSSESession, 'ClientSSESession', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(ClientSSESessionWithDeserialization, 'ClientSSESessionWithDeserialization', VOID, VOID, [CoroutineScope]);
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', VOID, VOID, [WebSocketSession, DefaultWebSocketSession], [1, 0]);
  initMetadataForClass(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(WebSocketContent, 'WebSocketContent', WebSocketContent, ClientUpgradeContent, VOID, [1]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(Config_0, 'Config', Config_0);
  initMetadataForObject(Plugin_0, 'Plugin');
  initMetadataForClass(WebSockets, 'WebSockets');
  initMetadataForObject(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($fetchResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($cleanupCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0, 2]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FetchOptions, 'FetchOptions');
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$_1, CoroutineImpl);
  initMetadataForCoroutine($createWebSocketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0_0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [DefaultWebSocketSession], [0, 1]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(engines$iterator$1);
  initMetadataForObject(engines, 'engines');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.f3c_1 = manageEngine;
    if ($this.f3c_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.t3c_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.i3c_1.v8(Key_instance));
      tmp.ps(HttpClient$_init_$lambda_36nm6w(engine));
    }
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$_init_$lambda_36nm6w($engine) {
    return function (cause) {
      var tmp;
      if (!($engine instanceof HttpClientEngineBase)) {
        tmp = true;
      } else {
        tmp = $engine.t3c_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.y3();
          tmp_1 = Unit_instance;
        } else {
          var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
          cancel($engine, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Client scope is canceled', cause) : tmp0_elvis_lhs);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.e3d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).h3d = function ($this$intercept, call, $completion) {
    var tmp = this.i3d($this$intercept, call, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClient$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this.g3d_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.g3d_1) + '(' + toString(getKClassFromExpression(this.g3d_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.i8_1 = 1;
            suspendResult = this.e3d_1.m3c_1.w2g(Unit_instance, this.g3d_1.o3d(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.g3d_1.p3d(response);
            this.i8_1 = 2;
            suspendResult = this.f3d_1.b2g(this.g3d_1, this);
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
  protoOf(HttpClient$slambda).i3d = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.e3d_1, completion);
    i.f3d_1 = $this$intercept;
    i.g3d_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.h3d($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.y3d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).c3e = function ($this$intercept, it, $completion) {
    var tmp = this.d3e($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClient$slambda_1).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.c3e(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.z3d_1.c2g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b3e_1 = suspendResult;
            this.j8_1 = 3;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 3;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              var tmp_1 = this;
              this.y3d_1.p3c_1.f2v(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.z3d_1.x2g_1.o3d(), cause));
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 3:
            throw this.l8_1;
          case 4:
            this.j8_1 = 3;
            return Unit_instance;
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
  protoOf(HttpClient$slambda_1).d3e = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.y3d_1, completion);
    i.z3d_1 = $this$intercept;
    i.a3e_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.c3e($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3e_1 = _this__u8e3s4;
    this.n3e_1 = builder;
  }
  protoOf($executeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.m3e_1.p3c_1.f2v(get_HttpRequestCreated(), this.n3e_1);
            this.i8_1 = 1;
            suspendResult = this.m3e_1.j3c_1.w2g(this.n3e_1, this.n3e_1.r3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.d3c_1 = engine;
    this.e3c_1 = userConfig;
    this.f3c_1 = false;
    this.g3c_1 = atomic$boolean$1(false);
    this.h3c_1 = Job(this.d3c_1.nr().v8(Key_instance));
    this.i3c_1 = this.d3c_1.nr().gf(this.h3c_1);
    this.j3c_1 = new HttpRequestPipeline();
    this.k3c_1 = new HttpResponsePipeline();
    this.l3c_1 = new HttpSendPipeline();
    this.m3c_1 = new HttpReceivePipeline();
    this.n3c_1 = AttributesJsFn(true);
    this.o3c_1 = this.d3c_1.u3e();
    this.p3c_1 = new Events();
    this.q3c_1 = new HttpClientConfig();
    this.d3c_1.v3e(this);
    var tmp = Phases_getInstance_0().a3f_1;
    this.l3c_1.b2h(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.e3c_1;
    this.q3c_1.j3f(get_HttpRequestLifecycle());
    this.q3c_1.j3f(get_BodyProgress());
    this.q3c_1.j3f(get_SaveBody());
    if ($this$with.g3f_1) {
      this.q3c_1.k3f('DefaultTransformers', HttpClient$lambda);
    }
    this.q3c_1.j3f(Plugin_getInstance());
    this.q3c_1.j3f(get_HttpCallValidator());
    if ($this$with.f3f_1) {
      this.q3c_1.j3f(get_HttpRedirect());
    }
    this.q3c_1.l3f($this$with);
    if ($this$with.g3f_1) {
      this.q3c_1.j3f(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.q3c_1);
    this.q3c_1.v3e(this);
    var tmp_0 = Phases_getInstance_2().m3f_1;
    this.k3c_1.b2h(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).nr = function () {
    return this.i3c_1;
  };
  protoOf(HttpClient).r3f = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClient).y3 = function () {
    var success = this.g3c_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.n3c_1.d2b(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.k2b().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.d2b(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.y3();
      }
    }
    this.h3c_1.iy();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.d3c_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_0;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    block(this_0);
    var config = this_0;
    var engine = engineFactory.s3f(config.e3f_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.b3f_1.n2(plugin.l1()))
      return Unit_instance;
    var tmp0 = $this.b3f_1;
    var tmp2 = plugin.l1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.w2(tmp2, value);
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$installPlugin$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$installPlugin$lambda($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.n3c_1.j2b(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.q3c_1.c3f_1.p2($plugin.l1()));
      var pluginData = $plugin.t3f(config);
      $plugin.u3f(pluginData, scope);
      attributes.g2b($plugin.l1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.b3f_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.c3f_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.d3f_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.e3f_1 = HttpClientConfig$engineConfig$lambda;
    this.f3f_1 = true;
    this.g3f_1 = true;
    this.h3f_1 = false;
    this.i3f_1 = PlatformUtils_getInstance().e2d_1;
  }
  protoOf(HttpClientConfig).v3f = function (plugin, configure) {
    var previousConfigBlock = this.c3f_1.p2(plugin.l1());
    var tmp0 = this.c3f_1;
    var tmp2 = plugin.l1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.w2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).j3f = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.v3f(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.v3f.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).k3f = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.d3f_1.w2(key, block);
  };
  protoOf(HttpClientConfig).v3e = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.b3f_1.r2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.d3f_1.r2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).l3f = function (other) {
    this.f3f_1 = other.f3f_1;
    this.g3f_1 = other.g3f_1;
    this.h3f_1 = other.h3f_1;
    var tmp0 = this.b3f_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.b3f_1;
    tmp0.y2(map);
    var tmp0_0 = this.c3f_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.c3f_1;
    tmp0_0.y2(map_0);
    var tmp0_1 = this.d3f_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.d3f_1;
    tmp0_1.y2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.o3d().a2p() : headers;
    return new DelegatedCall(_this__u8e3s4.j3d_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.o3d().a2p() : responseHeaders;
    HttpClientCall.call(this, client);
    this.l3d_1 = new DelegatedRequest(this, originCall.w3f());
    this.m3d_1 = new DelegatedResponse(this, originCall.o3d(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.b3g_1 = origin;
    this.c3g_1 = call;
  }
  protoOf(DelegatedRequest).d3g = function () {
    return this.c3g_1;
  };
  protoOf(DelegatedRequest).nr = function () {
    return this.b3g_1.nr();
  };
  protoOf(DelegatedRequest).e3g = function () {
    return this.b3g_1.e3g();
  };
  protoOf(DelegatedRequest).f3g = function () {
    return this.b3g_1.f3g();
  };
  protoOf(DelegatedRequest).x3f = function () {
    return this.b3g_1.x3f();
  };
  protoOf(DelegatedRequest).g3g = function () {
    return this.b3g_1.g3g();
  };
  protoOf(DelegatedRequest).a2p = function () {
    return this.b3g_1.a2p();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.a2p() : headers;
    HttpResponse.call(this);
    this.h3g_1 = call;
    this.i3g_1 = origin;
    this.j3g_1 = content;
    this.k3g_1 = headers;
    this.l3g_1 = this.i3g_1.nr();
  }
  protoOf(DelegatedResponse).d3g = function () {
    return this.h3g_1;
  };
  protoOf(DelegatedResponse).a2p = function () {
    return this.k3g_1;
  };
  protoOf(DelegatedResponse).m3g = function () {
    return this.j3g_1(this.i3g_1);
  };
  protoOf(DelegatedResponse).nr = function () {
    return this.l3g_1;
  };
  protoOf(DelegatedResponse).n3g = function () {
    return this.i3g_1.n3g();
  };
  protoOf(DelegatedResponse).o3g = function () {
    return this.i3g_1.o3g();
  };
  protoOf(DelegatedResponse).p3g = function () {
    return this.i3g_1.p3g();
  };
  protoOf(DelegatedResponse).q3g = function () {
    return this.i3g_1.q3g();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.l3d_1 = new DefaultHttpRequest($this, requestData);
    $this.m3d_1 = new DefaultHttpResponse($this, responseData);
    $this.x3f().i2b(Companion_getInstance_7().r3g_1);
    var tmp = responseData.w3g_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.x3f().g2b(Companion_getInstance_7().r3g_1, responseData.w3g_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = PrimitiveClasses_getInstance().bb();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(PrimitiveClasses_getInstance().bb(), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.r3g_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h3h_1 = _this__u8e3s4;
    this.i3h_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.j8_1 = 4;
            if (instanceOf(this.h3h_1.o3d(), this.i3h_1.o2h_1))
              return this.h3h_1.o3d();
            if (!this.h3h_1.y3f() && !get_isSaved(this.h3h_1.o3d()) && !this.h3h_1.k3d_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.h3h_1);
            }

            var tmp0_elvis_lhs = this.h3h_1.x3f().e2b(Companion_getInstance_7().r3g_1);
            if (tmp0_elvis_lhs == null) {
              this.i8_1 = 1;
              suspendResult = this.h3h_1.z3f(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.j3h_1 = tmp0_elvis_lhs;
              this.i8_1 = 2;
              continue $sm;
            }

          case 1:
            this.j3h_1 = suspendResult;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.j3h_1;
            var subject = new HttpResponseContainer(this.i3h_1, responseData);
            this.i8_1 = 3;
            suspendResult = this.h3h_1.j3d_1.k3c_1.w2g(this.h3h_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.l3h_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.i3h_1.o2h_1)) {
              var from = getKClassFromExpression(result);
              var to = this.i3h_1.o2h_1;
              throw new NoTransformationFoundException(this.h3h_1.o3d(), from, to);
            }

            return result;
          case 4:
            this.j8_1 = 5;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.l8_1;
              cancel_0(this.h3h_1.o3d(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.j3d_1 = client;
    this.k3d_1 = atomic$boolean$1(false);
    this.n3d_1 = false;
  }
  protoOf(HttpClientCall).nr = function () {
    return this.o3d().nr();
  };
  protoOf(HttpClientCall).x3f = function () {
    return this.w3f().x3f();
  };
  protoOf(HttpClientCall).w3f = function () {
    var tmp = this.l3d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).o3d = function () {
    var tmp = this.m3d_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).y3f = function () {
    return this.n3d_1;
  };
  protoOf(HttpClientCall).z3f = function ($completion) {
    return this.o3d().m3g();
  };
  protoOf(HttpClientCall).a3g = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.w3f().f3g().toString() + ', ' + this.o3d().n3g().toString() + ']';
  };
  protoOf(HttpClientCall).p3d = function (response) {
    this.m3d_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.m3h_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.m3h_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.n3h_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).f3g().toString() + '`\n        Response status `' + response.n3g().toString() + '`\n        Response header `ContentType: ' + response.a2p().t2c('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).a2p().t2c('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.n3h_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.c3i_1 = responseBody;
    this.l3d_1 = new SavedHttpRequest(this, request);
    this.m3d_1 = new SavedHttpResponse(this, this.c3i_1, response);
    checkContentLength(contentLength(response), fromInt(this.c3i_1.length), request.e3g());
    this.d3i_1 = true;
  }
  protoOf(SavedHttpCall).y3f = function () {
    return this.d3i_1;
  };
  function SavedHttpRequest(call, origin) {
    this.e3i_1 = origin;
    this.f3i_1 = call;
  }
  protoOf(SavedHttpRequest).d3g = function () {
    return this.f3i_1;
  };
  protoOf(SavedHttpRequest).nr = function () {
    return this.e3i_1.nr();
  };
  protoOf(SavedHttpRequest).e3g = function () {
    return this.e3i_1.e3g();
  };
  protoOf(SavedHttpRequest).f3g = function () {
    return this.e3i_1.f3g();
  };
  protoOf(SavedHttpRequest).x3f = function () {
    return this.e3i_1.x3f();
  };
  protoOf(SavedHttpRequest).g3g = function () {
    return this.e3i_1.g3g();
  };
  protoOf(SavedHttpRequest).a2p = function () {
    return this.e3i_1.a2p();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.g3i_1 = call;
    this.h3i_1 = body;
    this.i3i_1 = origin.n3g();
    this.j3i_1 = origin.o3g();
    this.k3i_1 = origin.p3g();
    this.l3i_1 = origin.q3g();
    this.m3i_1 = origin.a2p();
    this.n3i_1 = origin.nr();
  }
  protoOf(SavedHttpResponse).d3g = function () {
    return this.g3i_1;
  };
  protoOf(SavedHttpResponse).n3g = function () {
    return this.i3i_1;
  };
  protoOf(SavedHttpResponse).o3g = function () {
    return this.j3i_1;
  };
  protoOf(SavedHttpResponse).p3g = function () {
    return this.k3i_1;
  };
  protoOf(SavedHttpResponse).q3g = function () {
    return this.l3i_1;
  };
  protoOf(SavedHttpResponse).a2p = function () {
    return this.m3i_1;
  };
  protoOf(SavedHttpResponse).nr = function () {
    return this.n3i_1;
  };
  protoOf(SavedHttpResponse).m3g = function () {
    return ByteReadChannel_0(this.h3i_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3h_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp_0 = this.w3h_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.w3h_1;
            this.i8_1 = 1;
            suspendResult = readRemaining(this.w3h_1.o3d().m3g(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.w3h_1.j3d_1, this.w3h_1.w3f(), this.w3h_1.o3d(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.y2u());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.p2u());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().m1i_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.s2u();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.r3i_1, true, ObservableContent$getContent$slambda_0(delegate, null)).i1i_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.b3j_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).s3a = function ($this$writer, $completion) {
    var tmp = this.t3a($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ObservableContent$getContent$slambda).d9 = function (p1, $completion) {
    return this.s3a(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.b3j_1.u2u(this.c3j_1.b1o_1, this);
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
  protoOf(ObservableContent$getContent$slambda).t3a = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.b3j_1, completion);
    i.c3j_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.s3a($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.q3i_1 = delegate;
    this.r3i_1 = callContext;
    this.s3i_1 = listener;
  }
  protoOf(ObservableContent).n2u = function () {
    return this.q3i_1.n2u();
  };
  protoOf(ObservableContent).o2u = function () {
    return this.q3i_1.o2u();
  };
  protoOf(ObservableContent).a2p = function () {
    return this.q3i_1.a2p();
  };
  protoOf(ObservableContent).s2u = function () {
    return observable(getContent(this, this.q3i_1), this.r3i_1, this.o2u(), this.s3i_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.p3c_1.f2v(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.nr().v8(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.or();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.t3j_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.u3j().h2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.d3k_1 = $client;
    this.e3k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).h3d = function ($this$intercept, content, $completion) {
    var tmp = this.i3d($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClientEngine$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.i3k(this.f3k_1.x2g_1);
            var body = this.g3k_1;
            if (body == null) {
              this_0.r3e_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().bb();
              var tmp_1;
              try {
                tmp_1 = createKType(PrimitiveClasses_getInstance().bb(), arrayOf([]), false);
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
              this_0.j3k(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.r3e_1 = body;
                this_0.j3k(null);
              } else {
                this_0.r3e_1 = body;
                var tmp_3 = PrimitiveClasses_getInstance().bb();
                var tmp_4;
                try {
                  tmp_4 = createKType(PrimitiveClasses_getInstance().bb(), arrayOf([]), false);
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
                this_0.j3k(new TypeInfo(tmp_3, tmp_4));
              }
            }

            var builder = this_0;
            this.d3k_1.p3c_1.f2v(get_HttpRequestIsReadyForSending(), builder);
            var tmp_6 = this;
            var this_1 = builder.t2k();
            this_1.s3j_1.g2b(get_CLIENT_CONFIG(), this.d3k_1.q3c_1);
            tmp_6.h3k_1 = this_1;
            validateHeaders(this.h3k_1);
            checkExtensions(this.e3k_1, this.h3k_1);
            this.i8_1 = 1;
            suspendResult = executeWithinCallContext(this.e3k_1, this.h3k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.d3k_1, this.h3k_1, responseData);
            var response = call.o3d();
            this.d3k_1.p3c_1.f2v(get_HttpResponseReceived(), response);
            var tmp_7 = get_job(response.nr());
            tmp_7.ps(HttpClientEngine$install$slambda$lambda(this.d3k_1, response));
            this.i8_1 = 2;
            suspendResult = this.f3k_1.b2g(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).i3d = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.d3k_1, this.e3k_1, completion);
    i.f3k_1 = $this$intercept;
    i.g3k_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.h3d($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.s3k_1 = this$0;
    this.t3k_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).v3k = function ($this$async, $completion) {
    var tmp = this.w1o($this$async, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).d9 = function (p1, $completion) {
    return this.v3k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            if (_get_closed__iwkfs1(this.s3k_1)) {
              throw new ClientEngineClosedException();
            }

            this.i8_1 = 1;
            suspendResult = this.s3k_1.w3k(this.t3k_1, this);
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).w1o = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.s3k_1, this.t3k_1, completion);
    i.u3k_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.v3k($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3j_1 = _this__u8e3s4;
    this.m3j_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = createCallContext(this.l3j_1, this.m3j_1.r3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.gf(new KtorCallContextElement(callContext));
            this.i8_1 = 2;
            suspendResult = async(this.l3j_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.l3j_1, this.m3j_1, null)).ju(this);
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.p3j_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.n2d();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().s2o_1.h2(element)) {
        destination.b1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.r()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.nr().gf(callJob).gf(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.o8().v8(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.rs(true, VOID, createCallContext$lambda(callJob));
      callJob.ps(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.ws(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.bv();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
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
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.u3e().y3k_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.b3l();
    }, 1, 0, 20);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().gf(this$0.b3l()).gf(new CoroutineName(this$0.r3c_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.nr();
    }, 1, 0, 21);
  }
  function HttpClientEngineBase(engineName) {
    this.r3c_1 = engineName;
    this.s3c_1 = atomic$boolean$1(false);
    this.t3c_1 = atomic$int$1(0);
    var tmp = this;
    tmp.u3c_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.v3c_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).b3l = function () {
    var tmp0 = this.u3c_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.m1();
  };
  protoOf(HttpClientEngineBase).nr = function () {
    var tmp0 = this.v3c_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.m1();
  };
  protoOf(HttpClientEngineBase).y3 = function () {
    if (!this.s3c_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.nr().v8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.iy();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.c3l_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.c3l_1;
  };
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().bb(), arrayOf([]), false))]), false);
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
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.x3k_1 = 4;
    this.y3k_1 = null;
    this.z3k_1 = false;
    this.a3l_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function callContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.o8();
    return ensureNotNull(tmp$ret$0.v8(Companion_instance_1)).d3l_1;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_8() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.d3l_1 = callContext;
  }
  protoOf(KtorCallContextElement).l1 = function () {
    return Companion_instance_1;
  };
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.s2d(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.t2c('User-Agent') == null && content.a2p().t2c('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.n2u();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.a2p().t2c('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.t2c('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.o2u();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.a2p().t2c('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.t2c('Content-Length') : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Type', type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Length', length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().y2c_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.r2d($requestHeaders);
      $this$buildHeaders.r2d($content.a2p());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if ('Content-Length' === key) {
        return Unit_instance;
      }
      var tmp_0;
      if ('Content-Type' === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().h2(key)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = values.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = 'Cookie' === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0(['Date', 'Expires', 'Last-Modified', 'If-Modified-Since', 'If-Unmodified-Since']);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.m3l_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).h3d = function ($this$intercept, content, $completion) {
    var tmp = this.i3d($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(AfterRenderHook$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this.o3l_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.i8_1 = 1;
            suspendResult = this.m3l_1(this.n3l_1.x2g_1, this.o3l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            var newContent = tmp_1;
            this.i8_1 = 2;
            suspendResult = this.n3l_1.b2g(newContent, this);
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
  protoOf(AfterRenderHook$install$slambda).i3d = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.m3l_1, completion);
    i.n3l_1 = $this$intercept;
    i.o3l_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.h3d($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).p3l = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.j3c_1.y2g(Phases_getInstance().t3l_1, observableContentPhase);
    client.j3c_1.b2h(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).v3l = function (client, handler) {
    return this.p3l(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.e3m_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).h3m = function ($this$intercept, response, $completion) {
    var tmp = this.i3m($this$intercept, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(AfterReceiveHook$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3m(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = this.e3m_1(this.g3m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.i8_1 = 2;
              suspendResult = this.f3m_1.b2g(newResponse, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterReceiveHook$install$slambda).i3m = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.e3m_1, completion);
    i.f3m_1 = $this$intercept;
    i.g3m_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.h3m($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).j3m = function (client, handler) {
    var tmp = Phases_getInstance_1().m3m_1;
    client.m3c_1.b2h(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).v3l = function (client, handler) {
    return this.j3m(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.d3g();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).o3d();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.s3m(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.s3m(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).d3n = function (request, content, $completion) {
    var tmp = this.e3n(request, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(BodyProgress$lambda$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.d3n(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp0_elvis_lhs = this.b3n_1.t3e_1.e2b(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.c3n_1, this.b3n_1.s3e_1, listener);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).e3n = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.b3n_1 = request;
    i.c3n_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.d3n(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).o3n = function (response, $completion) {
    var tmp = this.p3n(response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(BodyProgress$lambda$slambda_1).d9 = function (p1, $completion) {
    return this.o3n(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp0_elvis_lhs = this.n3n_1.d3g().w3f().x3f().e2b(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.n3n_1, listener);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).p3n = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.n3n_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.o3n(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.m3g(), $this$replaceResponse.nr(), contentLength($this$replaceResponse), $listener);
    };
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ProgressListener), arrayOf([]), false);
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
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin_0('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.q3n_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.s3n_1 = 'Unhandled redirect: ' + response.d3g().w3f().e3g().l2p_1 + ' ' + response.d3g().w3f().f3g().toString() + '. ' + ('Status: ' + response.n3g().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.s3n_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.u3n_1 = 'Client request(' + response.d3g().w3f().e3g().l2p_1 + ' ' + response.d3g().w3f().f3g().toString() + ') ' + ('invalid: ' + response.n3g().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.u3n_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.w3n_1 = 'Server error(' + response.d3g().w3f().e3g().l2p_1 + ' ' + response.d3g().w3f().f3g().toString() + ': ' + (response.n3g().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.w3n_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).j3o = function (response, $completion) {
    var tmp = this.p3n(response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).d9 = function (p1, $completion) {
    return this.j3o(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            var expectSuccess = this.f3o_1.d3g().x3f().d2b(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              get_LOGGER().v2h('Skipping default response validation for ' + this.f3o_1.d3g().w3f().f3g().toString());
              return Unit_instance;
            }

            this.h3o_1 = this.f3o_1.n3g().y2r_1;
            var originCall = this.f3o_1.d3g();
            if (this.h3o_1 < 300 || originCall.x3f().f2b(get_ValidateMark())) {
              return Unit_instance;
            }

            this.i8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this_0.x3f().g2b(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_0;
            this.g3o_1 = exceptionCall.o3d();
            this.j8_1 = 3;
            this.i8_1 = 2;
            suspendResult = bodyAsText(this.g3o_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i3o_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.l8_1;
              var tmp_1 = this;
              tmp_1.i3o_1 = '<body failed decoding>';
              this.i8_1 = 4;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 5;
            var exceptionResponseText = this.i3o_1;
            var tmp0_subject = this.h3o_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.g3o_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.g3o_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.g3o_1, exceptionResponseText) : new ResponseException(this.g3o_1, exceptionResponseText);
            get_LOGGER().v2h('Default response validation for ' + this.f3o_1.d3g().w3f().f3g().toString() + ' failed with ' + exception.toString());
            throw exception;
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).p3n = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.f3o_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.j3o(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.m3o_1 = $this_addDefaultResponseValidation.h3f_1;
      $this$HttpResponseValidator.n3o(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
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
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().t3l_1;
    _this__u8e3s4.j3c_1.b2h(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_2().n3f_1;
    _this__u8e3s4.k3c_1.b2h(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.r3o_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.p3o_1 = $contentType == null ? Application_getInstance().y2i_1 : $contentType;
    this.q3o_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).n2u = function () {
    return this.p3o_1;
  };
  protoOf(defaultTransformers$1$content$1).o2u = function () {
    return this.q3o_1;
  };
  protoOf(defaultTransformers$1$content$1).p2u = function () {
    return this.r3o_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.v3o_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.x2g_1.q3e_1.t2c('Content-Length');
    tmp.t3o_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.u3o_1 = $contentType == null ? Application_getInstance().y2i_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).o2u = function () {
    return this.t3o_1;
  };
  protoOf(defaultTransformers$1$content$2).n2u = function () {
    return this.u3o_1;
  };
  protoOf(defaultTransformers$1$content$2).s2u = function () {
    return this.v3o_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).h3d = function ($this$intercept, body, $completion) {
    var tmp = this.i3d($this$intercept, body, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(defaultTransformers$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.e3p_1.x2g_1.q3e_1.t2c('Accept') == null) {
              this.e3p_1.x2g_1.q3e_1.q2d('Accept', '*/*');
            }

            var contentType_0 = contentType(this.e3p_1.x2g_1);
            var tmp0_subject = this.f3p_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.f3p_1, contentType_0 == null ? Text_getInstance().b2k_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.f3p_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.e3p_1, contentType_0, this.f3p_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.f3p_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.e3p_1.x2g_1, this.f3p_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.n2u()) == null)) {
              this.e3p_1.x2g_1.q3e_1.t2d('Content-Type');
              get_LOGGER_0().v2h('Transformed with default transformers request body for ' + this.e3p_1.x2g_1.o3e_1.toString() + ' from ' + toString(getKClassFromExpression(this.f3p_1)));
              this.i8_1 = 1;
              suspendResult = this.e3p_1.b2g(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 1:
            this.i8_1 = 2;
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
  protoOf(defaultTransformers$slambda).i3d = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.e3p_1 = $this$intercept;
    i.f3p_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.h3d($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.o3p_1 = $body;
    this.p3p_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).s3a = function ($this$writer, $completion) {
    var tmp = this.t3a($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(defaultTransformers$slambda$slambda).d9 = function (p1, $completion) {
    return this.s3a(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = copyTo(this.o3p_1, this.q3p_1.b1o_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.o3p_1);
            this.j8_1 = 4;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.j8_1 = 4;
            return Unit_instance;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.l8_1;
              cancel(this.p3p_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.l8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.l8_1;
                cancel_0(this.p3p_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.l8_1;
              }
            }

          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda$slambda).t3a = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.o3p_1, this.p3p_1, completion);
    i.q3p_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.s3a($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.iy();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation) {
    this.z3p_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).c3e = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.d3e($this$intercept, _destruct__k2r9zo, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(defaultTransformers$slambda_1).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.c3e(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 12;
            this.c3q_1 = this.b3q_1.ne();
            var body = this.b3q_1.oe();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.a3q_1.x2g_1.o3d();
            var tmp0_subject = this.c3q_1.o2h_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.i8_1 = 10;
              suspendResult = this.a3q_1.b2g(new HttpResponseContainer(this.c3q_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().hb())) {
                this.i8_1 = 8;
                suspendResult = readRemaining(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.i8_1 = 6;
                  suspendResult = readRemaining(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().qb())) {
                    this.i8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.nr()));
                      var this_0 = writer(this.a3q_1, this.z3p_1.i3c_1, VOID, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachWriterJob(body, this_0);
                      var channel = this_0.i1i_1;
                      this.i8_1 = 3;
                      suspendResult = this.a3q_1.b2g(new HttpResponseContainer(this.c3q_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.i8_1 = 2;
                        suspendResult = this.a3q_1.b2g(new HttpResponseContainer(this.c3q_1, response.n3g()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.a3q_1.x2g_1.o3d().a2p().t2c('Content-Type');
                          var tmp$ret$0;
                          l$ret$1: do {
                            if (tmp0 == null) {
                              var message = 'No content type provided for multipart';
                              throw IllegalStateException_init_$Create$(toString(message));
                            } else {
                              tmp$ret$0 = tmp0;
                              break l$ret$1;
                            }
                          }
                           while (false);
                          var rawContentType = tmp$ret$0;
                          var contentType = Companion_getInstance_0().vl(rawContentType);
                          if (!contentType.p2k(MultiPart_getInstance().u2j_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.a3q_1.x2g_1.o3d().a2p().t2c('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.a3q_1.nr(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.c3q_1, body_0);
                          this.i8_1 = 1;
                          suspendResult = this.a3q_1.b2g(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.d3q_1 = null;
                          this.i8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 2:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 3:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.a3q_1.x2g_1.o3d()), fromInt(bytes.length), this.a3q_1.x2g_1.w3f().e3g());
            this.i8_1 = 5;
            suspendResult = this.a3q_1.b2g(new HttpResponseContainer(this.c3q_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.c3q_1, ARGUMENT);
            this.i8_1 = 7;
            suspendResult = this.a3q_1.b2g(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.c3q_1, ARGUMENT_3);
            this.i8_1 = 9;
            suspendResult = this.a3q_1.b2g(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 10:
            this.d3q_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 11:
            var result = this.d3q_1;
            if (!(result == null)) {
              get_LOGGER_0().v2h('Transformed with default transformers response body ' + ('for ' + this.a3q_1.x2g_1.w3f().f3g().toString() + ' to ' + toString(this.c3q_1.o2h_1)));
            }

            return Unit_instance;
          case 12:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 12) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).d3e = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.z3p_1, completion);
    i.a3q_1 = $this$intercept;
    i.b3q_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.c3e($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k3o_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.l3o_1 = ArrayList_init_$Create$();
    this.m3o_1 = true;
  }
  protoOf(HttpCallValidatorConfig).n3o = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.k3o_1.b1(block);
  };
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.m3q_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).h3d = function ($this$intercept, it, $completion) {
    var tmp = this.i3d($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(RequestError$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.n3q_1.c2g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p3q_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.i8_1 = 3;
              suspendResult = this.m3q_1(HttpRequest(this.n3q_1.x2g_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.p3q_1 = Unit_instance;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).i3d = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.m3q_1, completion);
    i.n3q_1 = $this$intercept;
    i.o3q_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.h3d($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).q3q = function (client, handler) {
    var tmp = Phases_getInstance().q3l_1;
    client.j3c_1.b2h(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).v3l = function (client, handler) {
    return this.q3q(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.z3q_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).c3e = function ($this$intercept, it, $completion) {
    var tmp = this.d3e($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReceiveError$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.c3e(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.a3r_1.c2g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c3r_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.i8_1 = 3;
              suspendResult = this.z3q_1(this.a3r_1.x2g_1.w3f(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.c3r_1 = Unit_instance;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).d3e = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.z3q_1, completion);
    i.a3r_1 = $this$intercept;
    i.b3r_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.c3e($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).q3q = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.k3c_1.a2h(Phases_getInstance_2().m3f_1, BeforeReceive);
    client.k3c_1.b2h(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).v3l = function (client, handler) {
    return this.q3q(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.v3f(get_HttpCallValidator(), block);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    return constructCallableReference(function () {
      return new HttpCallValidatorConfig();
    }, 0, 0, 22, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.p3m_1.k3o_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.p3m_1.l3o_1);
    var expectSuccess = $this$createClientPlugin.p3m_1.m3o_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.s3m(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.s3m(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.s3m(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.s3m(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.i3s_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).k3s = function (request, $completion) {
    var tmp = this.l3s(request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda).d9 = function (p1, $completion) {
    return this.k3s(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.j3s_1.t3e_1.j2b(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.i3s_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).l3s = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.i3s_1, completion);
    i.j3s_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.k3s(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.u3s_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).y3s = function ($this$on, request, $completion) {
    var tmp = this.z3s($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.y3s(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.v3s_1.c3t(this.w3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x3s_1 = suspendResult;
            this.i8_1 = 2;
            suspendResult = invoke$validateResponse(this.u3s_1, this.x3s_1.o3d(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.x3s_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).z3s = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.u3s_1, completion);
    i.v3s_1 = $this$on;
    i.w3s_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.y3s($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.l3t_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).p3t = function (request, cause, $completion) {
    var tmp = this.q3t(request, cause, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).e9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.p3t(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.o3t_1 = unwrapCancellationException(this.n3t_1);
            this.i8_1 = 1;
            suspendResult = invoke$processException(this.l3t_1, this.o3t_1, this.m3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.o3t_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).q3t = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.l3t_1, completion);
    i.m3t_1 = request;
    i.n3t_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.p3t(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.z3t_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).p3t = function (request, cause, $completion) {
    var tmp = this.q3t(request, cause, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).e9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.p3t(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.c3u_1 = unwrapCancellationException(this.b3u_1);
            this.i8_1 = 1;
            suspendResult = invoke$processException(this.z3t_1, this.c3u_1, this.a3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.c3u_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).q3t = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.z3t_1, completion);
    i.a3u_1 = request;
    i.b3u_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.p3t(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3r_1 = responseValidators;
    this.m3r_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            get_LOGGER_1().v2h('Validating response for request ' + this.m3r_1.d3g().w3f().f3g().toString());
            this.n3r_1 = this.l3r_1.t();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.n3r_1.u()) {
              this.i8_1 = 3;
              continue $sm;
            }

            var element = this.n3r_1.v();
            this.i8_1 = 2;
            suspendResult = element(this.m3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w3r_1 = callExceptionHandlers;
    this.x3r_1 = cause;
    this.y3r_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            get_LOGGER_1().v2h('Processing exception ' + this.x3r_1.toString() + ' for request ' + this.y3r_1.f3g().toString());
            this.z3r_1 = this.w3r_1.t();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.z3r_1.u()) {
              this.i8_1 = 5;
              continue $sm;
            }

            var element = this.z3r_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.i8_1 = 3;
              suspendResult = element.e3u_1(this.x3r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.i8_1 = 2;
                suspendResult = element.d3u_1(this.x3r_1, this.y3r_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 6) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function HttpRequest$1($builder) {
    this.j3u_1 = $builder;
    this.f3u_1 = $builder.p3e_1;
    this.g3u_1 = $builder.o3e_1.t2k();
    this.h3u_1 = $builder.t3e_1;
    this.i3u_1 = $builder.q3e_1.t2k();
  }
  protoOf(HttpRequest$1).d3g = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).e3g = function () {
    return this.f3u_1;
  };
  protoOf(HttpRequest$1).f3g = function () {
    return this.g3u_1;
  };
  protoOf(HttpRequest$1).x3f = function () {
    return this.h3u_1;
  };
  protoOf(HttpRequest$1).a2p = function () {
    return this.i3u_1;
  };
  protoOf(HttpRequest$1).g3g = function () {
    var tmp = this.j3u_1.r3e_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.j3u_1.r3e_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().eb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.l1().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.n3c_1.e2b(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e2b(plugin.l1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Attributes), arrayOf([]), false);
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
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.k3u_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.l3u_1 = LinkedHashMap_init_$Create$();
    this.m3u_1 = null;
    this.n3u_1 = Charsets_getInstance().v1p_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.w3u_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).h3d = function ($this$intercept, content, $completion) {
    var tmp = this.i3d($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(RenderRequestHook$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = this.w3u_1(this.x3u_1.x2g_1, this.y3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.i8_1 = 2;
              suspendResult = this.x3u_1.b2g(result, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RenderRequestHook$install$slambda).i3d = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.w3u_1, completion);
    i.x3u_1 = $this$intercept;
    i.y3u_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.h3d($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).z3u = function (client, handler) {
    var tmp = Phases_getInstance().t3l_1;
    client.j3c_1.b2h(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).v3l = function (client, handler) {
    return this.z3u(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 23, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.p3m_1.l3u_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.p3m_1.n3u_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.p3m_1.k3u_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.p3m_1.l3u_1.n2(element)) {
        destination.b1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.p3m_1.k3u_1;
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0_0, Collection)) {
        tmp_2 = tmp0_0.r();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (!element_0.equals(Charsets_getInstance().v1p_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.p3m_1.l3u_1.q2();
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp0_1, Collection)) {
          tmp_3 = tmp0_1.r();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$9 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_1 = tmp0_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          if (!element_1.equals(Charsets_getInstance().v1p_1)) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
        }
        tmp$ret$9 = false;
      }
      tmp_1 = tmp$ret$9;
    }
    var hasRegisteredCharsets = tmp_1;
    var tmp_4;
    if (hasRegisteredCharsets) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = withoutQuality.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        this_1.q(get_name(element_2));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_3 = withQuality.t();
      while (_iterator__ex2g4s_3.u()) {
        var element_3 = _iterator__ex2g4s_3.v();
        var charset = element_3.ne();
        var quality = element_3.oe();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        // Inline function 'kotlin.check' call
        if (!(0.0 <= quality ? quality <= 1.0 : false)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = 100 * quality;
        var truncatedQuality = roundToInt(this_2) / 100.0;
        this_1.q(get_name(charset) + ';q=' + truncatedQuality);
      }
      tmp_4 = this_1.toString();
    } else {
      tmp_4 = null;
    }
    var acceptCharsetHeader = tmp_4;
    var tmp0_elvis_lhs = $this$createClientPlugin.p3m_1.m3u_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.le_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().v1p_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.s3m(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.a3v(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.b3v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).mc = function (a, b) {
    return this.b3v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.mc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).h3 = function () {
    return this.b3v_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.me_1;
    var tmp$ret$2 = a.me_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_name(a);
    var tmp$ret$2 = get_name(b);
    return compareValues(tmp, tmp$ret$2);
  }
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().b2k_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().v2h('Sending request body to ' + request.o3e_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.o3d());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().v2h('Reading response body for ' + call.w3f().f3g().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.q3e_1.t2c('Accept-Charset') == null))
      return Unit_instance;
    get_LOGGER_2().v2h('Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.o3e_1.toString());
    _this__u8e3s4.q3e_1.o2d('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.k3v_1 = $acceptCharsetHeader;
    this.l3v_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).o3v = function (request, content, $completion) {
    var tmp = this.p3v(request, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpPlainText$lambda$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.o3v(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          invoke$addAcceptCharsetHeader(this.m3v_1, this.k3v_1);
          var tmp_0 = this.n3v_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.m3v_1);
          if (!(contentType_0 == null) && !(contentType_0.l2k_1 === Text_getInstance().b2k_1.l2k_1)) {
            return null;
          }
          return invoke$wrapContent(this.l3v_1, this.m3v_1, this.n3v_1, contentType_0);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).p3v = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.k3v_1, this.l3v_1, completion);
    i.m3v_1 = request;
    i.n3v_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.o3v(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.y3v_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).d3w = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.e3w($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).f3w = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.d3w(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            if (!this.c3w_1.o2h_1.equals(PrimitiveClasses_getInstance().mb()))
              return null;
            this.i8_1 = 1;
            suspendResult = readRemaining(this.b3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.y3v_1, this.a3w_1.d3g(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).e3w = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.y3v_1, completion);
    i.z3v_1 = $this$transformResponseBody;
    i.a3w_1 = response;
    i.b3w_1 = content;
    i.c3w_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.d3w($this$transformResponseBody, response, content, requestedType, $completion);
    }, 4);
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.g3w_1 = true;
    this.h3w_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.y2r_1;
    return tmp0_subject === Companion_getInstance_1().h2q_1.y2r_1 || tmp0_subject === Companion_getInstance_1().i2q_1.y2r_1 || (tmp0_subject === Companion_getInstance_1().n2q_1.y2r_1 || (tmp0_subject === Companion_getInstance_1().o2q_1.y2r_1 || tmp0_subject === Companion_getInstance_1().j2q_1.y2r_1)) ? true : false;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 24, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.p3m_1.g3w_1;
    var allowHttpsDowngrade = $this$createClientPlugin.p3m_1.h3w_1;
    var tmp = Send_instance;
    $this$createClientPlugin.s3m(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.f3x_1 = $checkHttpMethod;
    this.g3x_1 = $allowHttpsDowngrade;
    this.h3x_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).y3s = function ($this$on, request, $completion) {
    var tmp = this.z3s($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRedirect$lambda$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.y3s(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.i3x_1.c3t(this.j3x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.f3x_1 && !get_ALLOWED_FOR_REDIRECT().h2(origin.w3f().e3g())) {
              return origin;
            }

            this.i8_1 = 2;
            suspendResult = invoke$handleCall(this.i3x_1, this.j3x_1, origin, this.g3x_1, this.h3x_1.o3m_1, this);
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
  protoOf(HttpRedirect$lambda$slambda).z3s = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.f3x_1, this.g3x_1, this.h3x_1, completion);
    i.i3x_1 = $this$on;
    i.j3x_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.y3s($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3w_1 = _this__u8e3s4;
    this.r3w_1 = context;
    this.s3w_1 = origin;
    this.t3w_1 = allowHttpsDowngrade;
    this.u3w_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.v3w_1 = this.s3w_1;
            this.w3w_1 = this.r3w_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.v3w_1.w3f().f3g().d2t_1;
            var previousAuthority = get_authority(this.v3w_1.w3f().f3g());
            if (!isRedirect(this.v3w_1.o3d().n3g()))
              return this.v3w_1;
            var location = this.v3w_1.o3d().a2p().t2c('Location');
            if (location == null) {
              get_LOGGER_3().t2h('Location header missing from redirect response ' + this.v3w_1.w3f().f3g().toString() + '; returning response as is');
              return this.v3w_1;
            }

            this.u3w_1.p3c_1.f2v(get_HttpResponseRedirectEvent(), this.v3w_1.o3d());
            get_LOGGER_3().v2h('Received redirect response to ' + location + ' for request ' + this.v3w_1.w3f().f3g().toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.i3k(this.w3w_1);
            this_0.o3e_1.n2s_1.s2();
            takeFrom(this_0.o3e_1, location);
            if (!this.t3w_1 && isSecure(previousProtocol) && !isSecure(this_0.o3e_1.q2s())) {
              get_LOGGER_3().v2h('Blocked redirect from ' + this.v3w_1.w3f().f3g().toString() + ' to ' + location + ' due to HTTPS downgrade');
              return this.v3w_1;
            }

            if (!(previousAuthority === get_authority_0(this_0.o3e_1))) {
              this_0.q3e_1.t2d('Authorization');
              get_LOGGER_3().v2h('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_0.o3e_1.a2u()));
            }

            tmp_0.w3w_1 = this_0;
            this.i8_1 = 2;
            suspendResult = this.q3w_1.c3t(this.w3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v3w_1 = suspendResult;
            this.i8_1 = 1;
            continue $sm;
          case 3:
            throw this.l8_1;
          case 4:
            return Unit_instance;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().b2p_1, Companion_getInstance_2().g2p_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function $invokeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s3x_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0 = this.s3x_1.w3x_1;
            this.i8_1 = 1;
            suspendResult = tmp0.c2g(this);
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 25);
    this.w3x_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).a1o = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(PipelineContext$proceed$ref).c9 = function ($completion) {
    return this.a1o($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.a1o($completion);
    }, 0, 9, 25, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.f3y_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).h3d = function ($this$intercept, it, $completion) {
    var tmp = this.i3d($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(SetupRequestContext$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.f3y_1(this.g3y_1.x2g_1, PipelineContext$proceed$ref_0(this.g3y_1), this);
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
  protoOf(SetupRequestContext$install$slambda).i3d = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.f3y_1, completion);
    i.g3y_1 = $this$intercept;
    i.h3y_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.h3d($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).i3y = function (client, handler) {
    var tmp = Phases_getInstance().q3l_1;
    client.j3c_1.b2h(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).v3l = function (client, handler) {
    return this.i3y(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.ps(attachToClientEngineJob$lambda(requestJob));
    requestJob.ps(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.s3m(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.r3y_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).v3y = function (request, proceed, $completion) {
    var tmp = this.w3y(request, proceed, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.v3y(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.u3y_1 = SupervisorJob(this.s3y_1.s3e_1);
            attachToClientEngineJob(this.u3y_1, ensureNotNull(this.r3y_1.o3m_1.i3c_1.v8(Key_instance)));
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.s3y_1.s3e_1 = this.u3y_1;
            this.i8_1 = 2;
            suspendResult = this.t3y_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j8_1 = 6;
            this.i8_1 = 5;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.u3y_1.hy(cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 6;
            var t = this.l8_1;
            this.u3y_1.iy();
            throw t;
          case 5:
            this.j8_1 = 6;
            this.u3y_1.iy();
            return Unit_instance;
          case 6:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 6) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).w3y = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.r3y_1, completion);
    i.s3y_1 = request;
    i.t3y_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.v3y(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        get_LOGGER_4().v2h('Cancelling request because engine Job failed with error: ' + cause.toString());
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().v2h('Cancelling request because engine Job completed');
        $requestJob.iy();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.bv();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin_0('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return LOGGER_5;
  }
  var LOGGER_5;
  function get_HttpRequestRetryEvent() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return HttpRequestRetryEvent;
  }
  var HttpRequestRetryEvent;
  var HttpRequestRetry;
  function get_MaxRetriesPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function HttpRetryEventData(request, retryCount, response, cause) {
    this.x3y_1 = request;
    this.y3y_1 = retryCount;
    this.z3y_1 = response;
    this.a3z_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return equalsLong(randomizationMs, new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().ug(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).k3z = function (it, $completion) {
    var tmp = this.l3z(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).d9 = function (p1, $completion) {
    return this.k3z(p1 instanceof Long ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = delay(this.j3z_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).l3z = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.j3z_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.k3z(it, $completion);
    }, 1);
  }
  function HttpRequestRetryConfig$modifyRequest$lambda(_this__u8e3s4, it) {
    return Unit_instance;
  }
  function HttpRequestRetryConfig$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _unused_var__etf5q3, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$retryOnServerErrors$lambda($this$retryIf, _unused_var__etf5q3, response) {
    // Inline function 'kotlin.let' call
    var it = response.n3g().y2r_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.n3z_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a2p();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t2c('Retry-After');
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_0 = multiply(tmp3_safe_receiver, fromInt(1000));
        }
        var retryAfter = tmp_0;
        var tmp0 = $block(_this__u8e3s4, it);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = retryAfter == null ? new Long(0, 0) : retryAfter;
        tmp = compare(tmp0, b) >= 0 ? tmp0 : b;
      } else {
        tmp = $block(_this__u8e3s4, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$exponentialDelay$lambda($base, $baseDelayMs, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp0 = $base;
      // Inline function 'kotlin.math.pow' call
      var n = retry - 1 | 0;
      var tmp$ret$0 = Math.pow(tmp0, n);
      var tmp0_0 = numberToLong(tmp$ret$0 * toNumber($baseDelayMs));
      // Inline function 'kotlin.comparisons.minOf' call
      var b = $maxDelayMs;
      var delay = compare(tmp0_0, b) <= 0 ? tmp0_0 : b;
      return add(delay, randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetryConfig() {
    var tmp = this;
    tmp.s3z_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.t3z_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.u3z_1 = 0;
    this.v3z(3);
    this.w3z();
  }
  protoOf(HttpRequestRetryConfig).x3z = function () {
    var tmp = this.p3z_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).y3z = function () {
    var tmp = this.q3z_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).z3z = function () {
    var tmp = this.r3z_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).a40 = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.u3z_1 = maxRetries;
    this.p3z_1 = block;
  };
  protoOf(HttpRequestRetryConfig).b40 = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.u3z_1 = maxRetries;
    this.q3z_1 = block;
  };
  protoOf(HttpRequestRetryConfig).c40 = function (maxRetries, retryOnTimeout) {
    this.b40(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).d40 = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.c40(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.c40.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).e40 = function (maxRetries) {
    this.a40(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).v3z = function (maxRetries) {
    this.e40(maxRetries);
    this.d40(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).f40 = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.r3z_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).g40 = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    if (!(base > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(baseDelayMs, new Long(0, 0)) > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(maxDelayMs, new Long(0, 0)) > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(randomizationMs, new Long(0, 0)) >= 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.f40(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).w3z = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? new Long(1000, 0) : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? new Long(60000, 0) : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? new Long(1000, 0) : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.g40(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.g40.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.h40_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.m3z_1 = request;
    this.n3z_1 = response;
    this.o3z_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.i40_1 = request;
    this.j40_1 = response;
    this.k40_1 = cause;
    this.l40_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function isTimeoutException(_this__u8e3s4) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  function HttpRequestRetryConfig$_init_$ref_mqbboi() {
    return constructCallableReference(function () {
      return new HttpRequestRetryConfig();
    }, 0, 0, 26, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.p3m_1.x3z();
    var shouldRetryOnException = $this$createClientPlugin.p3m_1.y3z();
    var delayMillis = $this$createClientPlugin.p3m_1.z3z();
    var delay = $this$createClientPlugin.p3m_1.s3z_1;
    var maxRetries = $this$createClientPlugin.p3m_1.u3z_1;
    var modifyRequest = $this$createClientPlugin.p3m_1.t3z_1;
    $this$createClientPlugin.y40(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.s3m(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.s3e_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.iy();
      } else {
        subRequestJob.hy(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.w3f(), call.o3d());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).z40(request);
    var tmp = request.s3e_1;
    tmp.ps(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.i41_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).m41 = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.n41($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).o41 = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.m41(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp0_elvis_lhs = this.k41_1.t3e_1.e2b(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.i41_1 : tmp0_elvis_lhs;
          this.k41_1.t3e_1.g2b(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).n41 = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.i41_1, completion);
    i.j41_1 = $this$onRequest;
    i.k41_1 = request;
    i.l41_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.m41($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.x41_1 = $shouldRetry;
    this.y41_1 = $shouldRetryOnException;
    this.z41_1 = $maxRetries;
    this.a42_1 = $delayMillis;
    this.b42_1 = $modifyRequest;
    this.c42_1 = $this_createClientPlugin;
    this.d42_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).y3s = function ($this$on, request, $completion) {
    var tmp = this.z3s($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.y3s(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.h42_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.f42_1.t3e_1.e2b(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.o42_1 = tmp0_elvis_lhs == null ? this.x41_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.f42_1.t3e_1.e2b(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.m42_1 = tmp1_elvis_lhs == null ? this.y41_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.f42_1.t3e_1.e2b(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.n42_1 = tmp2_elvis_lhs == null ? this.z41_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.f42_1.t3e_1.e2b(get_RetryDelayPerRequestAttributeKey());
            tmp_3.i42_1 = tmp3_elvis_lhs == null ? this.a42_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.f42_1.t3e_1.e2b(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.p42_1 = tmp4_elvis_lhs == null ? this.b42_1 : tmp4_elvis_lhs;
            this.j42_1 = null;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 9;
              continue $sm;
            }

            this.l42_1 = invoke$prepareRequest(this.f42_1);
            this.j8_1 = 5;
            if (!(this.j42_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.f42_1, this.j42_1.z3y_1, this.j42_1.a3z_1, this.j42_1.y3y_1);
              this.p42_1(modifyRequestContext, this.l42_1);
            }

            this.i8_1 = 2;
            suspendResult = this.e42_1.c3t(this.l42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g42_1 = suspendResult;
            if (!invoke$shouldRetry(this.h42_1, this.n42_1, this.o42_1, this.g42_1)) {
              this.i8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.g42_1.o3d(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.h42_1 = this.h42_1 + 1 | 0;
            tmp_5.k42_1 = new HttpRetryEventData(this.l42_1, this.h42_1, this.g42_1.o3d(), null);
            this.j8_1 = 8;
            this.i8_1 = 6;
            continue $sm;
          case 4:
            this.j8_1 = 8;
            this.i8_1 = 9;
            continue $sm;
          case 5:
            this.j8_1 = 8;
            var tmp_6 = this.l8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.l8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.h42_1, this.n42_1, this.m42_1, this.l42_1, cause)) {
                throw cause;
              }
              this.h42_1 = this.h42_1 + 1 | 0;
              tmp_7.k42_1 = new HttpRetryEventData(this.l42_1, this.h42_1, null, cause);
              this.i8_1 = 6;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 6:
            this.j8_1 = 8;
            var retryData = this.k42_1;
            this.j42_1 = retryData;
            this.c42_1.o3m_1.p3c_1.f2v(get_HttpRequestRetryEvent(), this.j42_1);
            var delayContext = new HttpRetryDelayContext(this.j42_1.x3y_1, this.j42_1.z3y_1, this.j42_1.a3z_1);
            this.i8_1 = 7;
            suspendResult = this.d42_1(this.i42_1(delayContext, this.h42_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            get_LOGGER_5().v2h('Retrying request ' + this.f42_1.o3e_1.toString() + ' attempt: ' + this.h42_1);
            this.i8_1 = 1;
            continue $sm;
          case 8:
            throw this.l8_1;
          case 9:
            return this.g42_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 8) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).z3s = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.x41_1, this.y41_1, this.z41_1, this.a42_1, this.b42_1, this.c42_1, this.d42_1, completion);
    i.e42_1 = $this$on;
    i.f42_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.y3s($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u40_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            if (get_isSaved(this.u40_1)) {
              this.v40_1 = this.u40_1.m3g();
              this.i8_1 = 1;
              continue $sm;
            } else {
              this.w40_1 = false;
              this.i8_1 = 4;
              continue $sm;
            }

          case 1:
            this.j8_1 = 5;
            this.i8_1 = 2;
            suspendResult = this.v40_1.o1g(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x40_1 = suspendResult;
            this.j8_1 = 6;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.x40_1;
            this.j8_1 = 6;
            var this_0 = this.v40_1;
            var tmp_1;
            try {
              cancel_1(this_0);
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_5().u2h('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.w40_1 = tmp_0;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            return this.w40_1;
          case 5:
            this.j8_1 = 6;
            var t = this.l8_1;
            var this_2 = this.v40_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().u2h('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.l8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.j8_1 === 6) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function _init_properties_HttpRequestRetry_kt__h4xjtt() {
    if (!properties_initialized_HttpRequestRetry_kt_jcpv6l) {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      HttpRequestRetryEvent = new EventDefinition();
      var tmp = HttpRequestRetryConfig$_init_$ref_mqbboi();
      HttpRequestRetry = createClientPlugin('RetryFeature', tmp, HttpRequestRetry$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'MaxRetriesPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().hb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false);
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
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_4;
      try {
        tmp_4 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false))]), false);
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
      var tmp$ret$2_0 = tmp_4;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_6 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_7;
      try {
        tmp_7 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_8;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_8 = null;
        } else {
          throw $p_1;
        }
        tmp_7 = tmp_8;
      }
      var tmp$ret$2_1 = tmp_7;
      var tmp$ret$1_1 = new TypeInfo(tmp_6, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_9 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_11;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_11 = null;
        } else {
          throw $p_2;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_2 = tmp_10;
      var tmp$ret$1_2 = new TypeInfo(tmp_9, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_13;
      try {
        tmp_13 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Long), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_14;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_14 = null;
        } else {
          throw $p_3;
        }
        tmp_13 = tmp_14;
      }
      var tmp$ret$2_3 = tmp_13;
      var tmp$ret$1_3 = new TypeInfo(tmp_12, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function Sender() {
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.z42_1 = $plugin;
    this.a43_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).h3d = function ($this$intercept, content, $completion) {
    var tmp = this.i3d($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpSend$Plugin$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this.c43_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.c43_1)) + ', with Content-Type: ' + toString_0(contentType(this.b43_1.x2g_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.b43_1.x2g_1;
            var body = this.c43_1;
            if (body == null) {
              tmp0.r3e_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2;
              try {
                tmp_2 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
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
              tmp0.j3k(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.r3e_1 = body;
                tmp0.j3k(null);
              } else {
                tmp0.r3e_1 = body;
                var tmp_4 = getKClass(OutgoingContent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_6;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_6 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_5 = tmp_6;
                }
                tmp0.j3k(new TypeInfo(tmp_4, tmp_5));
              }
            }

            var maxRetries = this.b43_1.x2g_1.t3e_1.e2b(get_MaxRetriesPerRequestAttributeKey());
            var tmp_7;
            if (!(maxRetries == null) && maxRetries >= this.z42_1.d43_1) {
              var tmp_8;
              if (maxRetries < 2147483647) {
                tmp_8 = maxRetries + 1 | 0;
              } else {
                tmp_8 = maxRetries;
              }
              tmp_7 = tmp_8;
            } else {
              tmp_7 = this.z42_1.d43_1;
            }

            var maxSendCount = tmp_7;
            var realSender = new DefaultSender(maxSendCount, this.a43_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.z42_1.e43_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.i8_1 = 1;
            suspendResult = interceptedSender.q42(this.b43_1.x2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.i8_1 = 2;
            suspendResult = this.b43_1.b2g(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).i3d = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.z42_1, this.a43_1, completion);
    i.b43_1 = $this$intercept;
    i.c43_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.h3d($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n43_1 = _this__u8e3s4;
    this.o43_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0_safe_receiver = this.n43_1.s43_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.n43_1.r43_1 >= this.n43_1.p43_1) {
              throw new SendCountExceedException('Max send count ' + this.n43_1.p43_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.n43_1.r43_1;
            this.n43_1.r43_1 = _unary__edvuaz + 1 | 0;
            this.i8_1 = 1;
            suspendResult = this.n43_1.q43_1.l3c_1.w2g(this.o43_1, this.o43_1.r3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.n43_1.s43_1 = call;
            return call;
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
  function Config() {
    this.t43_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpSend), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.u43_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).l1 = function () {
    return this.u43_1;
  };
  protoOf(Plugin).v43 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.t43_1);
  };
  protoOf(Plugin).t3f = function (block) {
    return this.v43(block);
  };
  protoOf(Plugin).w43 = function (plugin, scope) {
    var tmp = Phases_getInstance().u3l_1;
    scope.j3c_1.b2h(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).u3f = function (plugin, scope) {
    return this.w43(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.x43_1 = interceptor;
    this.y43_1 = nextSender;
  }
  protoOf(InterceptedSender).q42 = function (requestBuilder, $completion) {
    return this.x43_1(this.y43_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.p43_1 = maxSendCount;
    this.q43_1 = client;
    this.r43_1 = 0;
    this.s43_1 = null;
  }
  protoOf(DefaultSender).q42 = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.d43_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e43_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).z43 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.e43_1.b1(block);
  };
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HttpRequestTimeoutException() {
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_SaveBody_kt__lbc3fj();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_LOGGER_6() {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp0 = LOGGER$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LOGGER', 0, tmp, _get_LOGGER_$ref_77hhxy(), null);
    return tmp0.m1();
  }
  var LOGGER$delegate;
  function get_SaveBody() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SaveBody;
  }
  var SaveBody;
  var SaveBodyPlugin;
  function get_isSaved(_this__u8e3s4) {
    _init_properties_SaveBody_kt__lbc3fj();
    return _this__u8e3s4.d3g().x3f().f2b(get_RESPONSE_BODY_SAVED());
  }
  function tryCancelBody(_this__u8e3s4, e) {
    e = e === VOID ? null : e;
    _init_properties_SaveBody_kt__lbc3fj();
    var byteChannel = _this__u8e3s4.m3g();
    if (!byteChannel.m1g()) {
      try {
        byteChannel.q1g(e);
      } catch ($p) {
        if ($p instanceof CancellationException) {
          var cause = $p;
          throw cause;
        } else {
          if ($p instanceof Exception) {
            var cause_0 = $p;
            get_LOGGER_6().u2h('Failed to cancel response body', cause_0);
          } else {
            throw $p;
          }
        }
      }
    }
  }
  function SaveBodyPluginConfig() {
    this.a44_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_6();
    }, 0, 0, 27);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_1().k3m_1;
    $this$createClientPlugin.o3m_1.m3c_1.b2h(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).h3m = function ($this$intercept, response, $completion) {
    var tmp = this.i3m($this$intercept, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(SaveBody$lambda$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3m(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.o44_1 = this.k44_1.d3g();
            this.l44_1 = this.o44_1.x3f();
            if (this.l44_1.f2b(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_6();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2h('Skipping body saving for ' + this.o44_1.w3f().f3g().toString());
              }
              return Unit_instance;
            }

            this.m44_1 = null;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 4;
            this.j8_1 = 3;
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2h('Saving body for ' + this.o44_1.w3f().f3g().toString());
            }

            this.i8_1 = 2;
            suspendResult = save(this.o44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n44_1 = suspendResult.o3d();
            this.j8_1 = 7;
            this.i8_1 = 5;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var e = this.l8_1;
              var tmp_1 = this;
              this.m44_1 = e;
              throw e;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 7;
            var t = this.l8_1;
            tryCancelBody(this.k44_1, this.m44_1);
            throw t;
          case 5:
            var tmp_2 = this.n44_1;
            this.j8_1 = 7;
            tryCancelBody(this.k44_1, this.m44_1);
            var savedResponse = tmp_2;
            this.l44_1.g2b(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.i8_1 = 6;
            suspendResult = this.j44_1.b2g(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 7) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).i3m = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.j44_1 = $this$intercept;
    i.k44_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.h3m($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 28, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.p3m_1.a44_1) {
      get_LOGGER_6().t2h('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_6().t2h('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
    }
    return Unit_instance;
  }
  var properties_initialized_SaveBody_kt_hzvee7;
  function _init_properties_SaveBody_kt__lbc3fj() {
    if (!properties_initialized_SaveBody_kt_hzvee7) {
      properties_initialized_SaveBody_kt_hzvee7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
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
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin_0('SaveBody', SaveBody$lambda);
      var tmp_5 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin('DoubleReceivePlugin', tmp_5, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.p44_1 = hook;
    this.q44_1 = handler;
  }
  protoOf(HookHandler).v3e = function (client) {
    this.p44_1.v3l(client, this.q44_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.n3m_1 = key;
    this.o3m_1 = client;
    this.p3m_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q3m_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.r3m_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).y40 = function (block) {
    this.s3m(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).r44 = function (block) {
    this.s3m(TransformRequestBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).a3v = function (block) {
    this.s3m(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).s3m = function (hook, handler) {
    this.q3m_1.b1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.s44_1 = key;
    this.t44_1 = config;
    this.u44_1 = body;
    var tmp = this;
    tmp.v44_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).v3e = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.s44_1, scope, this.t44_1);
    // Inline function 'kotlin.apply' call
    this.u44_1(tmp0);
    var pluginBuilder = tmp0;
    this.v44_1 = pluginBuilder.r3m_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.q3m_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.v3e(scope);
    }
  };
  protoOf(ClientPluginInstance).y3 = function () {
    this.v44_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.e45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).h3d = function ($this$intercept, it, $completion) {
    var tmp = this.i3d($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(SetupRequest$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.e45_1(this.f45_1.x2g_1, this);
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
  protoOf(SetupRequest$install$slambda).i3d = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.e45_1, completion);
    i.f45_1 = $this$intercept;
    i.g45_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.h3d($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).h45 = function (client, handler) {
    var tmp = Phases_getInstance().q3l_1;
    client.j3c_1.b2h(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).v3l = function (client, handler) {
    return this.h45(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.a3t_1 = httpSendSender;
    this.b3t_1 = coroutineContext;
  }
  protoOf(Sender_0).nr = function () {
    return this.b3t_1;
  };
  protoOf(Sender_0).c3t = function (requestBuilder, $completion) {
    return this.a3t_1.q42(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.q45_1 = $handler;
    this.r45_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).u45 = function ($this$intercept, request, $completion) {
    var tmp = this.v45($this$intercept, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(Send$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.u45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.q45_1(new Sender_0(this.s45_1, this.r45_1.i3c_1), this.t45_1, this);
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
  protoOf(Send$install$slambda).v45 = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.q45_1, this.r45_1, completion);
    i.s45_1 = $this$intercept;
    i.t45_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.u45($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).w45 = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.z43(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).v3l = function (client, handler) {
    return this.w45(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function createClientPlugin_0(name, body) {
    return createClientPlugin(name, createClientPlugin$lambda, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.x45_1 = createConfiguration;
    this.y45_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().bb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.z45_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).l1 = function () {
    return this.z45_1;
  };
  protoOf(ClientPluginImpl).a46 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.x45_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.z45_1, config, this.y45_1);
  };
  protoOf(ClientPluginImpl).t3f = function (block) {
    return this.a46(block);
  };
  protoOf(ClientPluginImpl).b46 = function (plugin, scope) {
    plugin.v3e(scope);
  };
  protoOf(ClientPluginImpl).u3f = function (plugin, scope) {
    return this.b46(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformRequestBodyContext() {
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.k46_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).h3d = function ($this$intercept, it, $completion) {
    var tmp = this.i3d($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(RequestHook$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.k46_1(new OnRequestContext(), this.l46_1.x2g_1, this.l46_1.a2g(), this);
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
  protoOf(RequestHook$install$slambda).i3d = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.k46_1, completion);
    i.l46_1 = $this$intercept;
    i.m46_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.h3d($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).n46 = function (client, handler) {
    var tmp = Phases_getInstance().r3l_1;
    client.j3c_1.b2h(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).v3l = function (client, handler) {
    return this.n46(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformRequestBodyHook$install$slambda($handler, resultContinuation) {
    this.w46_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformRequestBodyHook$install$slambda).h3d = function ($this$intercept, it, $completion) {
    var tmp = this.i3d($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(TransformRequestBodyHook$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformRequestBodyHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = this.w46_1(new TransformRequestBodyContext(), this.x46_1.x2g_1, this.x46_1.a2g(), this.x46_1.x2g_1.z46(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newContent = suspendResult;
            if (!(newContent == null)) {
              this.i8_1 = 2;
              suspendResult = this.x46_1.b2g(newContent, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(TransformRequestBodyHook$install$slambda).i3d = function ($this$intercept, it, completion) {
    var i = new TransformRequestBodyHook$install$slambda(this.w46_1, completion);
    i.x46_1 = $this$intercept;
    i.y46_1 = it;
    return i;
  };
  function TransformRequestBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformRequestBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.h3d($this$intercept, it, $completion);
    }, 2);
  }
  function TransformRequestBodyHook() {
  }
  protoOf(TransformRequestBodyHook).a47 = function (client, handler) {
    var tmp = Phases_getInstance().s3l_1;
    client.j3c_1.b2h(tmp, TransformRequestBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformRequestBodyHook).v3l = function (client, handler) {
    return this.a47(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformRequestBodyHook_instance;
  function TransformRequestBodyHook_getInstance() {
    return TransformRequestBodyHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.j47_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).c3e = function ($this$intercept, it, $completion) {
    var tmp = this.d3e($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.c3e(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var _destruct__k2r9zo = this.k47_1.a2g();
            this.m47_1 = _destruct__k2r9zo.ne();
            var content = _destruct__k2r9zo.oe();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.i8_1 = 1;
            suspendResult = this.j47_1(new TransformResponseBodyContext(), this.k47_1.x2g_1.o3d(), content, this.m47_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var newContent = tmp_0;
            var tmp_1;
            if (!(newContent instanceof NullBody)) {
              tmp_1 = !this.m47_1.o2h_1.ja(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.m47_1.toString());
            }

            this.i8_1 = 2;
            suspendResult = this.k47_1.b2g(new HttpResponseContainer(this.m47_1, newContent), this);
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
  protoOf(TransformResponseBodyHook$install$slambda).d3e = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.j47_1, completion);
    i.k47_1 = $this$intercept;
    i.l47_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.c3e($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).n47 = function (client, handler) {
    var tmp = Phases_getInstance_2().o3f_1;
    client.k3c_1.b2h(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).v3l = function (client, handler) {
    return this.n47(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function ClientSSESession(call, delegate) {
    this.o47_1 = delegate;
    this.p47_1 = call;
  }
  protoOf(ClientSSESession).nr = function () {
    return this.o47_1.nr();
  };
  function ClientSSESessionWithDeserialization(call, delegate) {
    this.q47_1 = delegate;
    this.r47_1 = call;
  }
  protoOf(ClientSSESessionWithDeserialization).nr = function () {
    return this.q47_1.nr();
  };
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function DefaultClientWebSocketSession(call, delegate) {
    this.s47_1 = delegate;
    this.t47_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).h2w = function (frame, $completion) {
    return this.s47_1.h2w(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).g1g = function ($completion) {
    return this.s47_1.g1g($completion);
  };
  protoOf(DefaultClientWebSocketSession).d2w = function (_set____db54di) {
    this.s47_1.d2w(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).e2w = function () {
    return this.s47_1.e2w();
  };
  protoOf(DefaultClientWebSocketSession).f2w = function () {
    return this.s47_1.f2w();
  };
  protoOf(DefaultClientWebSocketSession).g2w = function () {
    return this.s47_1.g2w();
  };
  protoOf(DefaultClientWebSocketSession).nr = function () {
    return this.s47_1.nr();
  };
  protoOf(DefaultClientWebSocketSession).c2w = function (negotiatedExtensions) {
    this.s47_1.c2w(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.u47_1 = session;
    this.v47_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).h2w = function (frame, $completion) {
    return this.u47_1.h2w(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).g1g = function ($completion) {
    return this.u47_1.g1g($completion);
  };
  protoOf(DelegatingClientWebSocketSession).d2w = function (_set____db54di) {
    this.u47_1.d2w(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).e2w = function () {
    return this.u47_1.e2w();
  };
  protoOf(DelegatingClientWebSocketSession).f2w = function () {
    return this.u47_1.f2w();
  };
  protoOf(DelegatingClientWebSocketSession).g2w = function () {
    return this.u47_1.g2w();
  };
  protoOf(DelegatingClientWebSocketSession).nr = function () {
    return this.u47_1.nr();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().lg(nonce));
    tmp.y47_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.q2d('Upgrade', 'websocket');
    this_1.q2d('Connection', 'Upgrade');
    this_1.q2d('Sec-WebSocket-Key', this.y47_1);
    this_1.q2d('Sec-WebSocket-Version', '13');
    tmp_0.z47_1 = this_1.t2k();
  }
  protoOf(WebSocketContent).a2p = function () {
    return this.z47_1;
  };
  protoOf(WebSocketContent).toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_WEBSOCKETS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return WEBSOCKETS_KEY;
  }
  var WEBSOCKETS_KEY;
  function get_LOGGER_7() {
    _init_properties_WebSockets_kt__jaqpbo();
    return LOGGER_6;
  }
  var LOGGER_6;
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.i48_1 = $extensionsSupported;
    this.j48_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).h3d = function ($this$intercept, it, $completion) {
    var tmp = this.i3d($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebSockets$Plugin$install$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.h3d(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            if (!isWebsocket(this.k48_1.x2g_1.o3e_1.q2s())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2h('Skipping WebSocket plugin for non-websocket request: ' + this.k48_1.x2g_1.o3e_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2h('Sending WebSocket request ' + this.k48_1.x2g_1.o3e_1.toString());
            }

            this.k48_1.x2g_1.m48(WebSocketCapability_instance, Unit_instance);
            if (this.i48_1) {
              installExtensions(this.j48_1, this.k48_1.x2g_1);
            }

            this.k48_1.x2g_1.t3e_1.h2b(get_WEBSOCKETS_KEY(), this.j48_1);
            this.i8_1 = 1;
            suspendResult = this.k48_1.b2g(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).i3d = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.i48_1, this.j48_1, completion);
    i.k48_1 = $this$intercept;
    i.l48_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.h3d($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.v48_1 = $plugin;
    this.w48_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).c3e = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.d3e($this$intercept, _destruct__k2r9zo, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.c3e(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var info = this.y48_1.ne();
            var session = this.y48_1.oe();
            var response = this.x48_1.x2g_1.o3d();
            var status = response.n3g();
            var requestContent = get_request(response).g3g();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.v2h('Skipping non-websocket response from ' + this.x48_1.x2g_1.w3f().f3g().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().w2p_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().w2p_1.y2r_1 + ' but was ' + status.y2r_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.v2h('Receive websocket session from ' + this.x48_1.x2g_1.w3f().f3g().toString() + ': ' + toString(session));
            }

            if (!equalsLong(this.v48_1.a49_1, new Long(2147483647, 0))) {
              session.d2w(this.v48_1.a49_1);
            }

            var tmp_0;
            if (info.o2h_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.v48_1.e49(session);
              var clientSession = new DefaultClientWebSocketSession(this.x48_1.x2g_1, defaultSession);
              var tmp_1;
              if (this.w48_1) {
                tmp_1 = completeNegotiation(this.v48_1, this.x48_1.x2g_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.c2w(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.x48_1.x2g_1, session);
            }

            var clientSession_0 = tmp_0;
            this.i8_1 = 1;
            suspendResult = this.x48_1.b2g(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).d3e = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.v48_1, this.w48_1, completion);
    i.x48_1 = $this$intercept;
    i.y48_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.c3e($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.b49_1.t2k();
    context.t3e_1.g2b(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.k33();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.o3d().a2p().t2c('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.x3f().d2b(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.l33(serverExtensions)) {
        destination.b1(element);
      }
    }
    return destination;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.r())
      return Unit_instance;
    var headerValue = joinToString(protocols, ',');
    header(context, 'Sec-WebSocket-Extensions', headerValue);
  }
  function Config_0() {
    this.f49_1 = new WebSocketExtensionsConfig();
    this.g49_1 = new WebSocketChannelsConfig();
    this.h49_1 = new Long(0, 0);
    this.i49_1 = new Long(2147483647, 0);
    this.j49_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.k49_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).l1 = function () {
    return this.k49_1;
  };
  protoOf(Plugin_0).l49 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.h49_1, config.i49_1, config.f49_1, config.j49_1, config.g49_1);
  };
  protoOf(Plugin_0).t3f = function (block) {
    return this.l49(block);
  };
  protoOf(Plugin_0).m49 = function (plugin, scope) {
    var extensionsSupported = scope.d3c_1.u3j().h2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().t3l_1;
    scope.j3c_1.b2h(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_2().o3f_1;
    scope.k3c_1.b2h(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).u3f = function (plugin, scope) {
    return this.m49(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function WebSockets(pingIntervalMillis, maxFrameSize, extensionsConfig, contentConverter, channelsConfig) {
    Plugin_getInstance_0();
    contentConverter = contentConverter === VOID ? null : contentConverter;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_3().i2w_1 : channelsConfig;
    this.z48_1 = pingIntervalMillis;
    this.a49_1 = maxFrameSize;
    this.b49_1 = extensionsConfig;
    this.c49_1 = contentConverter;
    this.d49_1 = channelsConfig;
  }
  protoOf(WebSockets).e49 = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.z48_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.z48_1, timeoutMillis, this.d49_1);
    this_1.d2w(this.a49_1);
    return this_1;
  };
  function WebSocketExtensionsCapability() {
  }
  protoOf(WebSocketExtensionsCapability).toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  protoOf(WebSocketExtensionsCapability).hashCode = function () {
    return 806573237;
  };
  protoOf(WebSocketExtensionsCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketExtensionsCapability))
      return false;
    return true;
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    return WebSocketExtensionsCapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function _init_properties_WebSockets_kt__jaqpbo() {
    if (!properties_initialized_WebSockets_kt_2t2hw2) {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'Websocket extensions';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
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
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(WebSockets);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      WEBSOCKETS_KEY = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return new ByteChannel();
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.o49_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.p49_1 = call;
    this.q49_1 = data.o3j_1;
    this.r49_1 = data.n3j_1;
    this.s49_1 = data.q3j_1;
    this.t49_1 = data.p3j_1;
    this.u49_1 = data.s3j_1;
  }
  protoOf(DefaultHttpRequest).d3g = function () {
    return this.p49_1;
  };
  protoOf(DefaultHttpRequest).nr = function () {
    return this.d3g().nr();
  };
  protoOf(DefaultHttpRequest).e3g = function () {
    return this.q49_1;
  };
  protoOf(DefaultHttpRequest).f3g = function () {
    return this.r49_1;
  };
  protoOf(DefaultHttpRequest).g3g = function () {
    return this.s49_1;
  };
  protoOf(DefaultHttpRequest).a2p = function () {
    return this.t49_1;
  };
  protoOf(DefaultHttpRequest).x3f = function () {
    return this.u49_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    return Companion_instance_2;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.o3e_1 = new URLBuilder();
    this.p3e_1 = Companion_getInstance_2().b2p_1;
    this.q3e_1 = new HeadersBuilder();
    this.r3e_1 = EmptyContent_getInstance();
    this.s3e_1 = SupervisorJob();
    this.t3e_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).a2p = function () {
    return this.q3e_1;
  };
  protoOf(HttpRequestBuilder).j3k = function (value) {
    if (!(value == null)) {
      this.t3e_1.g2b(get_BodyTypeAttributeKey(), value);
    } else {
      this.t3e_1.i2b(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).z46 = function () {
    return this.t3e_1.e2b(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).t2k = function () {
    var tmp = this.o3e_1.t2k();
    var tmp_0 = this.p3e_1;
    var tmp_1 = this.q3e_1.t2k();
    var tmp_2 = this.r3e_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.r3e_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.s3e_1, this.t3e_1);
  };
  protoOf(HttpRequestBuilder).i3k = function (builder) {
    this.s3e_1 = builder.s3e_1;
    return this.z40(builder);
  };
  protoOf(HttpRequestBuilder).z40 = function (builder) {
    this.p3e_1 = builder.p3e_1;
    this.r3e_1 = builder.r3e_1;
    this.j3k(builder.z46());
    takeFrom_0(this.o3e_1, builder.o3e_1);
    this.o3e_1.l2s_1 = this.o3e_1.l2s_1;
    appendAll(this.q3e_1, builder.q3e_1);
    putAll(this.t3e_1, builder.t3e_1);
    return this;
  };
  protoOf(HttpRequestBuilder).m48 = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.t3e_1.j2b(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.w2(key, capability);
  };
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.n3j_1 = url;
    this.o3j_1 = method;
    this.p3j_1 = headers;
    this.q3j_1 = body;
    this.r3j_1 = executionContext;
    this.s3j_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.s3j_1.e2b(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2();
    tmp.t3j_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.n3j_1.toString() + ', method=' + this.o3j_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.s3g_1 = statusCode;
    this.t3g_1 = requestTime;
    this.u3g_1 = headers;
    this.v3g_1 = version;
    this.w3g_1 = body;
    this.x3g_1 = callContext;
    this.y3g_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.s3g_1.toString() + ')';
  };
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.q3j_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function url(_this__u8e3s4, urlString) {
    _init_properties_HttpRequest_kt__813lx1();
    takeFrom(_this__u8e3s4.o3e_1, urlString);
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
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
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.q3l_1 = new PipelinePhase('Before');
    this.r3l_1 = new PipelinePhase('State');
    this.s3l_1 = new PipelinePhase('Transform');
    this.t3l_1 = new PipelinePhase('Render');
    this.u3l_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().q3l_1, Phases_getInstance().r3l_1, Phases_getInstance().s3l_1, Phases_getInstance().t3l_1, Phases_getInstance().u3l_1]);
    this.d4a_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).v2g = function () {
    return this.d4a_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.w3e_1 = new PipelinePhase('Before');
    this.x3e_1 = new PipelinePhase('State');
    this.y3e_1 = new PipelinePhase('Monitoring');
    this.z3e_1 = new PipelinePhase('Engine');
    this.a3f_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().w3e_1, Phases_getInstance_0().x3e_1, Phases_getInstance_0().y3e_1, Phases_getInstance_0().z3e_1, Phases_getInstance_0().a3f_1]);
    this.l4a_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).v2g = function () {
    return this.l4a_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(TypeInfo), arrayOf([]), false);
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
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.a2p().q2d('Accept', contentType.toString());
  }
  function header(_this__u8e3s4, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      _this__u8e3s4.a2p().q2d(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.m4a_1 = call;
    this.n4a_1 = responseData.x3g_1;
    this.o4a_1 = responseData.s3g_1;
    this.p4a_1 = responseData.v3g_1;
    this.q4a_1 = responseData.t3g_1;
    this.r4a_1 = responseData.y3g_1;
    var tmp = this;
    var tmp_0 = responseData.w3g_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.s4a_1 = tmp0_elvis_lhs == null ? Companion_getInstance().m1i_1 : tmp0_elvis_lhs;
    this.t4a_1 = responseData.u3g_1;
  }
  protoOf(DefaultHttpResponse).d3g = function () {
    return this.m4a_1;
  };
  protoOf(DefaultHttpResponse).nr = function () {
    return this.n4a_1;
  };
  protoOf(DefaultHttpResponse).n3g = function () {
    return this.o4a_1;
  };
  protoOf(DefaultHttpResponse).o3g = function () {
    return this.p4a_1;
  };
  protoOf(DefaultHttpResponse).p3g = function () {
    return this.q4a_1;
  };
  protoOf(DefaultHttpResponse).q3g = function () {
    return this.r4a_1;
  };
  protoOf(DefaultHttpResponse).m3g = function () {
    return this.s4a_1;
  };
  protoOf(DefaultHttpResponse).a2p = function () {
    return this.t4a_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).f3g().toString() + ', ' + this.n3g().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.d3g().w3f();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().v1p_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c4b_1 = _this__u8e3s4;
    this.d4b_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.c4b_1);
            var originCharset = tmp0_elvis_lhs == null ? this.d4b_1 : tmp0_elvis_lhs;
            this.e4b_1 = originCharset.m1q();
            var this_0 = this.c4b_1;
            this.i8_1 = 1;
            var tmp_0 = this_0.d3g();
            var tmp_1 = getKClass(Source);
            var tmp_2;
            try {
              tmp_2 = createKType(getKClass(Source), arrayOf([]), false);
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
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.e4b_1, input);
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.k3m_1 = new PipelinePhase('Before');
    this.l3m_1 = new PipelinePhase('State');
    this.m3m_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().k3m_1, Phases_getInstance_1().l3m_1, Phases_getInstance_1().m3m_1]);
    this.m4b_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).v2g = function () {
    return this.m4b_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.m3f_1 = new PipelinePhase('Receive');
    this.n3f_1 = new PipelinePhase('Parse');
    this.o3f_1 = new PipelinePhase('Transform');
    this.p3f_1 = new PipelinePhase('State');
    this.q3f_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().m3f_1, Phases_getInstance_2().n3f_1, Phases_getInstance_2().o3f_1, Phases_getInstance_2().p3f_1, Phases_getInstance_2().q3f_1]);
    this.u4b_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).v2g = function () {
    return this.u4b_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.k3h_1 = expectedType;
    this.l3h_1 = response;
  }
  protoOf(HttpResponseContainer).ne = function () {
    return this.k3h_1;
  };
  protoOf(HttpResponseContainer).oe = function () {
    return this.l3h_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.k3h_1.toString() + ', response=' + toString(this.l3h_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.k3h_1.hashCode();
    result = imul(result, 31) + hashCode(this.l3h_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.k3h_1.equals(other.k3h_1))
      return false;
    if (!equals(this.l3h_1, other.l3h_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d4c_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 6;
            var builder = (new HttpRequestBuilder()).i3k(this.d4c_1.h4c_1);
            this.i8_1 = 2;
            suspendResult = this.d4c_1.i4c_1.r3f(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g4c_1 = suspendResult;
            this.i8_1 = 3;
            suspendResult = save(this.g4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f4c_1 = suspendResult.o3d();
            this.i8_1 = 4;
            suspendResult = this.d4c_1.j4c(this.g4c_1.o3d(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.f4c_1;
          case 5:
            return this.e4c_1;
          case 6:
            this.j8_1 = 7;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.l8_1;
              throw unwrapCancellationException(cause);
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
  function $cleanupCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s4c_1 = _this__u8e3s4;
    this.t4c_1 = _this__u8e3s4_0;
    this.u4c_1 = cause;
  }
  protoOf($cleanupCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp_0 = get_job(this.t4c_1.nr());
            var job = isInterface(tmp_0, CompletableJob) ? tmp_0 : THROW_CCE();
            this.v4c_1 = job;
            var $this$apply = this.v4c_1;
            var tmp0_subject = this.u4c_1;
            if (tmp0_subject == null)
              $this$apply.iy();
            else {
              if (tmp0_subject instanceof CancellationException) {
                $this$apply.ws(this.u4c_1);
              } else {
                $this$apply.ws(CancellationException_init_$Create$('Exception occurred during request execution', this.u4c_1));
              }
            }

            if (!get_isSaved(this.t4c_1)) {
              try {
                cancel_1(this.t4c_1.m3g());
              } catch ($p) {
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                } else {
                  throw $p;
                }
              }
            }

            this.i8_1 = 1;
            suspendResult = $this$apply.ts(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function HttpStatement(builder, client) {
    this.h4c_1 = builder;
    this.i4c_1 = client;
  }
  protoOf(HttpStatement).w4c = function ($completion) {
    return this.x4c($completion);
  };
  protoOf(HttpStatement).x4c = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpStatement).j4c = function (_this__u8e3s4, cause, $completion) {
    var tmp = new $cleanupCOROUTINE$(this, _this__u8e3s4, cause, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.h4c_1.o3e_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).i1i_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.g4d_1 = $this_observable;
    this.h4d_1 = $listener;
    this.i4d_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).s3a = function ($this$writer, $completion) {
    var tmp = this.t3a($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(observable$slambda).d9 = function (p1, $completion) {
    return this.s3a(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 16;
            this.p4d_1 = get_ByteArrayPool();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.l4d_1 = this.p4d_1;
            this.k4d_1 = this.l4d_1.j1q();
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 15;
            this.o4d_1 = this.k4d_1;
            this.m4d_1 = new Long(0, 0);
            this.i8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.g4d_1.m1g()) {
              this.i8_1 = 9;
              continue $sm;
            }

            this.i8_1 = 5;
            suspendResult = readAvailable(this.g4d_1, this.o4d_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n4d_1 = suspendResult;
            if (this.n4d_1 <= 0) {
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 6;
              continue $sm;
            }

          case 6:
            this.i8_1 = 7;
            suspendResult = writeFully(this.j4d_1.b1o_1, this.o4d_1, 0, this.n4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.m4d_1;
            var other = this.n4d_1;
            tmp_0.m4d_1 = add(tmp0, fromInt(other));
            this.i8_1 = 8;
            suspendResult = this.h4d_1.o3i(this.m4d_1, this.i4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.i8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.g4d_1.l1g();
            close(this.j4d_1.b1o_1, closedCause);
            if (closedCause == null && equalsLong(this.m4d_1, new Long(0, 0))) {
              this.i8_1 = 10;
              suspendResult = this.h4d_1.o3i(this.m4d_1, this.i4d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 11;
              continue $sm;
            }

          case 10:
            this.i8_1 = 11;
            continue $sm;
          case 11:
            this.j8_1 = 16;
            this.i8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.j8_1 = 16;
            this.l4d_1.k1q(this.k4d_1);
            this.i8_1 = 14;
            continue $sm;
          case 13:
            this.j8_1 = 16;
            this.l4d_1.k1q(this.k4d_1);
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.j8_1 = 16;
            var t = this.l8_1;
            this.l4d_1.k1q(this.k4d_1);
            throw t;
          case 16:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 16) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).t3a = function ($this$writer, completion) {
    var i = new observable$slambda(this.g4d_1, this.h4d_1, this.i4d_1, completion);
    i.j4d_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.s3a($this$writer, $completion);
    }, 1);
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.q4d_1 = response;
    this.r4d_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.t4d_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).o2u = function () {
    return this.t4d_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function get_DecompressionListAttribute() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    return DecompressionListAttribute;
  }
  var DecompressionListAttribute;
  function dropCompressionHeaders(_this__u8e3s4, method, attributes, alwaysRemove) {
    alwaysRemove = alwaysRemove === VOID ? false : alwaysRemove;
    _init_properties_HeadersUtils_kt__fb6dxx();
    if (method.equals(Companion_getInstance_2().g2p_1) || method.equals(Companion_getInstance_2().h2p_1))
      return Unit_instance;
    var header = _this__u8e3s4.t2c('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.j2b(tmp, dropCompressionHeaders$lambda).b1(header);
    }
    _this__u8e3s4.t2d('Content-Encoding');
    _this__u8e3s4.t2d('Content-Length');
  }
  function dropCompressionHeaders$lambda() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    // Inline function 'kotlin.collections.mutableListOf' call
    return ArrayList_init_$Create$();
  }
  var properties_initialized_HeadersUtils_kt_8c3zal;
  function _init_properties_HeadersUtils_kt__fb6dxx() {
    if (!properties_initialized_HeadersUtils_kt_8c3zal) {
      properties_initialized_HeadersUtils_kt_8c3zal = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'DecompressionListAttribute';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().mb(), arrayOf([]), false))]), false);
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
      DecompressionListAttribute = new AttributeKey(name, tmp$ret$1);
    }
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    block(this_0);
    return this_0.t2k();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'FetchOptions';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(FetchOptions);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(FetchOptions), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.u4d_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_3;
  function Companion_getInstance_10() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_10();
    this.v4d_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).w4d = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).s3f = function (block) {
    return this.w4d(block);
  };
  protoOf(Js).toString = function () {
    return 'Js';
  };
  protoOf(Js).hashCode = function () {
    return -527824213;
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function JsClientEngineConfig$requestInit$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    var tmp = this;
    tmp.b4e_1 = JsClientEngineConfig$requestInit$lambda;
    this.c4e_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().e4e(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function JsClientEngine$execute$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$_1(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r4f_1 = _this__u8e3s4;
    this.s4f_1 = data;
  }
  protoOf($executeCOROUTINE$_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.i8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t4f_1 = suspendResult;
            this.v4f_1 = this.s4f_1.s3j_1.d2b(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.s4f_1)) {
              this.i8_1 = 5;
              suspendResult = executeWebSocketRequest(this.r4f_1, this.s4f_1, this.t4f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            this.u4f_1 = GMTDate();
            this.i8_1 = 3;
            suspendResult = ktor_toRaw(this.s4f_1, this.v4f_1, this.t4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.s4f_1.s3j_1.e2b(Companion_getInstance_10().u4d_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v4d_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.i8_1 = 4;
            suspendResult = commonFetch(this.s4f_1.n3j_1.toString(), rawRequest, fetchOptions, this.r4f_1.b4g_1, get_job(this.t4f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.s4f_1.o3j_1, this.s4f_1.s3j_1);
            var version = Companion_getInstance_4().o2p_1;
            var body = readBody(CoroutineScope_0(this.t4f_1), rawResponse);
            var tmp2_safe_receiver = this.s4f_1.s3j_1.e2b(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v49(this.s4f_1, status, headers, body, this.s4f_1.q3j_1, this.t4f_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.u4f_1, headers, version, responseBody, this.t4f_1);
          case 5:
            return suspendResult;
          case 6:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 6) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n4e_1 = _this__u8e3s4;
    this.o4e_1 = urlString_capturingHack;
    this.p4e_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.p4e_1.n2d();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.b1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.p4e_1.m2d(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.b1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.r4e_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().y2c_1) {
              this.q4e_1 = new WebSocket(this.o4e_1, this.r4e_1);
              this.i8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.i8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.p4e_1.s2d(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.q4e_1 = new ws_capturingHack(this.o4e_1, this.r4e_1, {headers: headers_capturingHack});
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return this.q4e_1;
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
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a4f_1 = _this__u8e3s4;
    this.b4f_1 = request;
    this.c4f_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.e4f_1 = GMTDate();
            this.h4f_1 = this.b4f_1.n3j_1.toString();
            this.i4f_1 = this.b4f_1.s3j_1.d2b(get_WEBSOCKETS_KEY());
            this.i8_1 = 1;
            suspendResult = createWebSocket(this.a4f_1, this.h4f_1, this.b4f_1.p3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f4f_1 = suspendResult;
            this.d4f_1 = new JsWebSocketSession(this.c4f_1, this.f4f_1, this.i4f_1.d49_1);
            this.j8_1 = 3;
            this.i8_1 = 2;
            suspendResult = awaitConnection(this.f4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g4f_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              var tmp_1 = this;
              cancel_3(this.c4f_1, CancellationException_0('Failed to connect to ' + this.h4f_1, cause));
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 5;
            var this_0 = this.f4f_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().v2o_1;
            return new HttpResponseData(Companion_getInstance_1().w2p_1, this.e4f_1, headers, Companion_getInstance_4().o2p_1, this.d4f_1, this.c4f_1);
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.b4g_1 = config;
    this.c4g_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.b4g_1.a3l_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).u3e = function () {
    return this.b4g_1;
  };
  protoOf(JsClientEngine).u3j = function () {
    return this.c4g_1;
  };
  protoOf(JsClientEngine).w3k = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ew();
    $l$block: {
      if (cancellable.js()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf(arrayConcat([['open'], events]));
      var callback = {_v: null};
      var tmp = awaitConnection$lambda(events_0, _this__u8e3s4, callback);
      var disposable = new sam$kotlinx_coroutines_DisposableHandle$0(tmp);
      callback._v = awaitConnection$lambda_0(true, disposable, cancellable, _this__u8e3s4);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = events_0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_0;
        if (callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp_0 = callback._v;
        }
        _this__u8e3s4.addEventListener(element, tmp_0);
      }
      var disposable_0 = disposable;
      cancellable.qu(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.mw();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.d4g_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).bv = function () {
    return this.d4g_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).h3 = function () {
    return this.d4g_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
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
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).hashCode = function () {
    return hashCode(this.h3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.q2d(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().y2c_1);
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($events, $this, $callback) {
    return function () {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $events.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp;
        if ($callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp = $callback._v;
        }
        $this.removeEventListener(element, tmp);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($once, $disposable, $continuation, $this_awaitConnection) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($once) {
        $disposable.bv();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.t8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.t8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.bv();
      var tmp;
      if (!(cause == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().m1i_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).i1i_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.a9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.m4g_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).s3a = function ($this$writer, $completion) {
    var tmp = this.t3a($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(channelFromStream$slambda).d9 = function (p1, $completion) {
    return this.s3a(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 9;
            this.p4g_1 = this.m4g_1.getReader();
            this.j8_1 = 7;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 6;
              continue $sm;
            }

            this.i8_1 = 2;
            suspendResult = readChunk(this.p4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.i8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.q4g_1 = tmp0_elvis_lhs;
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.q4g_1;
            this.i8_1 = 4;
            suspendResult = writeFully(this.n4g_1.b1o_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = this.n4g_1.b1o_1.g1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i8_1 = 1;
            continue $sm;
          case 6:
            this.j8_1 = 9;
            this.i8_1 = 10;
            continue $sm;
          case 7:
            this.j8_1 = 9;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              this.o4g_1 = this.l8_1;
              this.i8_1 = 8;
              var tmp_2 = this.p4g_1.cancel(this.o4g_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 8:
            throw this.o4g_1;
          case 9:
            throw this.l8_1;
          case 10:
            this.j8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 9) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).t3a = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.m4g_1, completion);
    i.n4g_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.s3a($this$writer, $completion);
    }, 1);
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ew();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.b4e_1(init);
    requestConfig(init);
    callJob.rs(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().y2c_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.c4e_1);
      tmp = fetch(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.mw();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_6().n2v($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.r4g_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).bv = function () {
    return this.r4g_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).h3 = function () {
    return this.r4g_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
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
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).hashCode = function () {
    return hashCode(this.h3());
  };
  function JsWebSocketSession$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(true, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.u4g_1.hy(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.v4g_1.p18(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cause = WebSocketException_init_$Create$(asString(event));
      this$0.u4g_1.hy(cause);
      this$0.v4g_1.t18(cause);
      this$0.w4g_1.x18();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_2($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_3(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var reason = new CloseReason(event.code, event.reason);
      this$0.u4g_1.gy(reason);
      this$0.v4g_1.p18(Close_init_$Create$(reason));
      this$0.v4g_1.v18();
      this$0.w4g_1.x18();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_4($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda($cause, this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($cause == null) {
        this$0.t4g_1.close();
      } else {
        this$0.t4g_1.close(Codes_NORMAL_getInstance().k2v_1, 'Client failed');
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_5(this$0, $onMessage, $onError) {
    return function (cause) {
      var tmp0 = this$0;
      $l$block: {
        // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.runWhenOpen' call
        if (tmp0.t4g_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.t4g_1.close();
          } else {
            this$0.t4g_1.close(Codes_NORMAL_getInstance().k2v_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.t4g_1;
        var callback = JsWebSocketSession$lambda$lambda(cause, this$0);
        // Inline function 'org.w3c.dom.AddEventListenerOptions' call
        var o = {};
        o['passive'] = false;
        o['once'] = true;
        o['capture'] = false;
        var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
        this_0.addEventListener('open', callback, options);
        var tmp = JsWebSocketSession$lambda$lambda_0(this_0, 'open', callback);
        new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
      }
      $onMessage.bv();
      $onError.bv();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.i4h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).v1o = function ($this$launch, $completion) {
    var tmp = this.w1o($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(JsWebSocketSession$slambda).d9 = function (p1, $completion) {
    return this.v1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 10;
            this.n4h_1 = this.i4h_1.w4g_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.l4h_1 = this.n4h_1;
            this.k4h_1 = null;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 9;
            this.j8_1 = 8;
            this.m4h_1 = this.l4h_1.t();
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = this.m4h_1.r16(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.i8_1 = 6;
              continue $sm;
            }

            var e = this.m4h_1.v();
            switch (e.w2v_1.a1_1) {
              case 0:
                var text = e.x2v_1;
                this.i4h_1.t4g_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.x2v_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.i4h_1.t4g_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully_0(builder, e.x2v_1);
                var data = builder;
                var code = data.po();
                var reason = readText(data);
                this.i4h_1.u4g_1.gy(new CloseReason(code, reason));
                if (isReservedStatusCode(this.i4h_1, code)) {
                  this.i4h_1.t4g_1.close();
                } else {
                  this.i4h_1.t4g_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.i8_1 = 4;
            continue $sm;
          case 6:
            this.j8_1 = 10;
            this.i8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.j8_1 = 10;
            cancelConsumed(this.l4h_1, this.k4h_1);
            this.i8_1 = 12;
            continue $sm;
          case 8:
            this.j8_1 = 9;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.l8_1;
              var tmp_3 = this;
              this.k4h_1 = e_0;
              throw e_0;
            } else {
              throw this.l8_1;
            }

          case 9:
            this.j8_1 = 10;
            var t = this.l8_1;
            cancelConsumed(this.l4h_1, this.k4h_1);
            throw t;
          case 10:
            throw this.l8_1;
          case 11:
            this.j8_1 = 10;
            cancelConsumed(this.l4h_1, this.k4h_1);
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.j8_1 === 10) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).w1o = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.i4h_1, completion);
    i.j4h_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.v1o($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.s4g_1 = coroutineContext;
    this.t4g_1 = websocket;
    this.u4g_1 = CompletableDeferred();
    this.v4g_1 = from(Factory_getInstance(), channelsConfig.j2w_1);
    this.w4g_1 = from(Factory_getInstance(), channelsConfig.k2w_1);
    this.x4g_1 = this.v4g_1;
    this.y4g_1 = this.w4g_1;
    this.z4g_1 = this.u4g_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.t4g_1;
    var callback = JsWebSocketSession$lambda(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o = {};
    o['passive'] = false;
    o['once'] = false;
    o['capture'] = false;
    var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
    this_0.addEventListener('message', callback, options);
    var tmp = JsWebSocketSession$lambda_0(this_0, 'message', callback);
    var onMessage = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_1 = this.t4g_1;
    var callback_0 = JsWebSocketSession$lambda_1(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_0 = {};
    o_0['passive'] = false;
    o_0['once'] = false;
    o_0['capture'] = false;
    var options_0 = (!(o_0 == null) ? !(o_0 == null) : false) ? o_0 : THROW_CCE();
    this_1.addEventListener('error', callback_0, options_0);
    var tmp_0 = JsWebSocketSession$lambda_2(this_1, 'error', callback_0);
    var onError = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_0);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_2 = this.t4g_1;
    var callback_1 = JsWebSocketSession$lambda_3(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_1 = {};
    o_1['passive'] = false;
    o_1['once'] = true;
    o_1['capture'] = false;
    var options_1 = (!(o_1 == null) ? !(o_1 == null) : false) ? o_1 : THROW_CCE();
    this_2.addEventListener('close', callback_1, options_1);
    var tmp_1 = JsWebSocketSession$lambda_4(this_2, 'close', callback_1);
    new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_1);
    var tmp0_safe_receiver = this.s4g_1.v8(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ps(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.t4g_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.j2w_1.e33()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).nr = function () {
    return this.s4g_1;
  };
  protoOf(JsWebSocketSession).f2w = function () {
    return this.x4g_1;
  };
  protoOf(JsWebSocketSession).g2w = function () {
    return this.y4g_1;
  };
  protoOf(JsWebSocketSession).d2w = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).e2w = function () {
    return new Long(-1, 2147483647);
  };
  protoOf(JsWebSocketSession).c2w = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).g1g = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function asString(_this__u8e3s4) {
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    return tmp.stringify(_this__u8e3s4, tmp$ret$0);
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$(content, callContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($skipContentLengthHeader, $jsHeaders) {
    return function (key, value) {
      var tmp;
      if ($skipContentLengthHeader && key === 'Content-Length') {
        return Unit_instance;
      }
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.o3j_1.l2p_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.f3f_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.t4i_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).s3a = function ($this$writer, $completion) {
    var tmp = this.t3a($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(getBodyBytes$slambda).d9 = function (p1, $completion) {
    return this.s3a(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.t4i_1.u2u(this.u4i_1.b1o_1, this);
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
  protoOf(getBodyBytes$slambda).t3a = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.t4i_1, completion);
    i.u4i_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.s3a($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w4h_1 = _this__u8e3s4;
    this.x4h_1 = clientConfig;
    this.y4h_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.z4h_1 = {};
            var this_0 = this.w4h_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.o3j_1) && isEmpty(this_0.q3j_1);
            mergeHeaders(this_0.p3j_1, this_0.q3j_1, toRaw$lambda(skipContentLengthHeader, this.z4h_1));
            this.i8_1 = 1;
            suspendResult = getBodyBytes(this.w4h_1.q3j_1, this.y4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.w4h_1, this.z4h_1, this.x4h_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4i_1 = content;
    this.j4i_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            var tmp0_subject = this.i4i_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.k4i_1 = this.i4i_1.p2u();
              this.i8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.i8_1 = 3;
                suspendResult = readRemaining(this.i4i_1.s2u(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.i8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_0, this.j4i_1, VOID, getBodyBytes$slambda_0(this.i4i_1, null)).i1i_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.i8_1 = 1;
                    suspendResult = getBodyBytes(this.i4i_1.y2u(), this.j4i_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.k4i_1 = null;
                      this.i8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.i4i_1);
                      } else {
                        var tmp_2 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.k4i_1 = suspendResult;
            this.i8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.k4i_1 = readByteArray(ARGUMENT);
            this.i8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.k4i_1 = readByteArray(ARGUMENT_0);
            this.i8_1 = 5;
            continue $sm;
          case 4:
            throw this.l8_1;
          case 5:
            return this.k4i_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function Node(item, next) {
    this.v4i_1 = item;
    this.w4i_1 = next;
  }
  function engines$iterator$1() {
    this.x4i_1 = engines_getInstance().d4e_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.x4i_1);
    this.x4i_1 = result.w4i_1;
    return result.v4i_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.x4i_1);
  };
  function engines() {
    engines_instance = this;
    this.d4e_1 = atomic$ref$1(null);
  }
  protoOf(engines).e4e = function (item) {
    $l$loop: while (true) {
      var current = this.d4e_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.d4e_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  };
  protoOf(engines).t = function () {
    return new engines$iterator$1();
  };
  var engines_instance;
  function engines_getInstance() {
    if (engines_instance == null)
      new engines();
    return engines_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  var useEngineDispatcher;
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function checkContentLength(contentLength, bodySize, method) {
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).u3j = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).v3e = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).v8 = get;
  protoOf(KtorCallContextElement).ff = fold;
  protoOf(KtorCallContextElement).ef = minusKey;
  protoOf(KtorCallContextElement).gf = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).nr = get_coroutineContext;
  protoOf(JsWebSocketSession).h2w = send;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  RequestHook_instance = new RequestHook();
  TransformRequestBodyHook_instance = new TransformRequestBodyHook();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketExtensionsCapability_instance = new WebSocketExtensionsCapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_2 = new Companion_1();
  Js_instance = new Js();
  useEngineDispatcher = true;
  //endregion
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var io = _.io || (_.io = {});
    var ktor = io.ktor || (io.ktor = {});
    var client = ktor.client || (ktor.client = {});
    var engine = client.engine || (client.engine = {});
    var js = engine.js || (engine.js = {});
    defineProp(js, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Js_instance;
  _.$_$.b = EmptyContent_getInstance;
  _.$_$.c = bodyAsText;
  _.$_$.d = TransformRequestBodyContext;
  _.$_$.e = TransformResponseBodyContext;
  _.$_$.f = createClientPlugin;
  _.$_$.g = ClientSSESessionWithDeserialization;
  _.$_$.h = ClientSSESession;
  _.$_$.i = HttpRequestBuilder;
  _.$_$.j = accept;
  _.$_$.k = url;
  _.$_$.l = HttpResponse;
  _.$_$.m = HttpStatement;
  _.$_$.n = get_request;
  _.$_$.o = HttpClient_0;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
