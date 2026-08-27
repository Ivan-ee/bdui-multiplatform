(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var protoOf = kotlin_kotlin.$_$.tb;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var toString = kotlin_kotlin.$_$.wb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var charSequenceLength = kotlin_kotlin.$_$.ka;
  var charSequenceGet = kotlin_kotlin.$_$.ja;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e;
  var equals = kotlin_kotlin.$_$.pa;
  var toString_0 = kotlin_kotlin.$_$.tg;
  var Enum = kotlin_kotlin.$_$.jf;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var initMetadataForInterface = kotlin_kotlin.$_$.za;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w3;
  var hashCode = kotlin_kotlin.$_$.ua;
  var joinToString = kotlin_kotlin.$_$.y6;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var KtMap = kotlin_kotlin.$_$.i5;
  var KtList = kotlin_kotlin.$_$.g5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var getKClassFromExpression = kotlin_kotlin.$_$.lc;
  var getBooleanHashCode = kotlin_kotlin.$_$.ra;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var toDouble = kotlin_kotlin.$_$.je;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var toLongOrNull = kotlin_kotlin.$_$.ne;
  var toULongOrNull = kotlin_kotlin.$_$.se;
  var ULong = kotlin_kotlin.$_$.ag;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var toDoubleOrNull = kotlin_kotlin.$_$.ie;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.ge;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.kb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var lazy = kotlin_kotlin.$_$.pg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var captureStack = kotlin_kotlin.$_$.fa;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var defineProp = kotlin_kotlin.$_$.oa;
  var fromInt = kotlin_kotlin.$_$.p9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.s;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t1;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.la;
  var coerceAtLeast = kotlin_kotlin.$_$.bc;
  var coerceAtMost = kotlin_kotlin.$_$.cc;
  var isBlank = kotlin_kotlin.$_$.jd;
  var Collection = kotlin_kotlin.$_$.b5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var toSet = kotlin_kotlin.$_$.f8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var singleOrNull = kotlin_kotlin.$_$.s7;
  var emptyMap = kotlin_kotlin.$_$.l6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var getValue = kotlin_kotlin.$_$.u6;
  var copyOf = kotlin_kotlin.$_$.f6;
  var arrayCopy = kotlin_kotlin.$_$.p5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.hf;
  var invoke = kotlin_kotlin.$_$.kg;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.if;
  var Unit = kotlin_kotlin.$_$.dg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var getKClass = kotlin_kotlin.$_$.mc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var ensureNotNull = kotlin_kotlin.$_$.jg;
  var substringBefore = kotlin_kotlin.$_$.ce;
  var removeSuffix = kotlin_kotlin.$_$.rd;
  var substringAfter = kotlin_kotlin.$_$.be;
  var contains = kotlin_kotlin.$_$.xc;
  var plus = kotlin_kotlin.$_$.rg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var convertToByte = kotlin_kotlin.$_$.k9;
  var equalsLong = kotlin_kotlin.$_$.o9;
  var convertToShort = kotlin_kotlin.$_$.m9;
  var convertToInt = kotlin_kotlin.$_$.l9;
  var IllegalArgumentException = kotlin_kotlin.$_$.mf;
  var isFinite = kotlin_kotlin.$_$.mg;
  var isFinite_0 = kotlin_kotlin.$_$.lg;
  var charCodeAt = kotlin_kotlin.$_$.ia;
  var toUInt = kotlin_kotlin.$_$.re;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var toULong = kotlin_kotlin.$_$.te;
  var toUByte = kotlin_kotlin.$_$.qe;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var toUShort = kotlin_kotlin.$_$.ue;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s1;
  var objectCreate = kotlin_kotlin.$_$.sb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var toString_1 = kotlin_kotlin.$_$.l;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.s2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.v2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var setOf = kotlin_kotlin.$_$.r7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k;
  var numberToChar = kotlin_kotlin.$_$.rb;
  var equals_0 = kotlin_kotlin.$_$.ed;
  var toByte = kotlin_kotlin.$_$.ub;
  var startsWith = kotlin_kotlin.$_$.xd;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var numberRangeToNumber = kotlin_kotlin.$_$.qb;
  var ClosedRange = kotlin_kotlin.$_$.ac;
  var contains_0 = kotlin_kotlin.$_$.ec;
  var single = kotlin_kotlin.$_$.ud;
  var Char = kotlin_kotlin.$_$.ef;
  var emptySet = kotlin_kotlin.$_$.m6;
  var plus_0 = kotlin_kotlin.$_$.j7;
  var toInt = kotlin_kotlin.$_$.me;
  var toList = kotlin_kotlin.$_$.y7;
  var enumEntries = kotlin_kotlin.$_$.d9;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var toNumber = kotlin_kotlin.$_$.aa;
  var last = kotlin_kotlin.$_$.d7;
  var removeLast = kotlin_kotlin.$_$.o7;
  var lastIndexOf = kotlin_kotlin.$_$.pd;
  var Long = kotlin_kotlin.$_$.of;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.g;
  var multiply = kotlin_kotlin.$_$.u9;
  var add = kotlin_kotlin.$_$.g9;
  var subtract = kotlin_kotlin.$_$.z9;
  var compare = kotlin_kotlin.$_$.j9;
  var numberToLong = kotlin_kotlin.$_$.w9;
  var negate = kotlin_kotlin.$_$.v9;
  var charArray = kotlin_kotlin.$_$.ha;
  var indexOf = kotlin_kotlin.$_$.hd;
  var indexOf_0 = kotlin_kotlin.$_$.id;
  var substring = kotlin_kotlin.$_$.ee;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.v3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.f3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json', VOID, VOID, [StringFormat]);
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.y4l_1 = configuration;
    this.z4l_1 = serializersModule;
    this.a4m_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).r1u = function () {
    return this.z4l_1;
  };
  protoOf(Json).q1r = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.d37();
    }
  };
  protoOf(Json).r1r = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.x1q(), null);
    var result = input.c1u(deserializer);
    lexer.p4m();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.j4n();
    return new JsonImpl(conf, builder.h4n_1);
  }
  function JsonBuilder(json) {
    this.q4m_1 = json.y4l_1.k4n_1;
    this.r4m_1 = json.y4l_1.p4n_1;
    this.s4m_1 = json.y4l_1.l4n_1;
    this.t4m_1 = json.y4l_1.m4n_1;
    this.u4m_1 = json.y4l_1.o4n_1;
    this.v4m_1 = json.y4l_1.q4n_1;
    this.w4m_1 = json.y4l_1.r4n_1;
    this.x4m_1 = json.y4l_1.t4n_1;
    this.y4m_1 = json.y4l_1.a4o_1;
    this.z4m_1 = json.y4l_1.v4n_1;
    this.a4n_1 = json.y4l_1.w4n_1;
    this.b4n_1 = json.y4l_1.x4n_1;
    this.c4n_1 = json.y4l_1.y4n_1;
    this.d4n_1 = json.y4l_1.z4n_1;
    this.e4n_1 = json.y4l_1.u4n_1;
    this.f4n_1 = json.y4l_1.n4n_1;
    this.g4n_1 = json.y4l_1.s4n_1;
    this.h4n_1 = json.r1u();
    this.i4n_1 = json.y4l_1.b4o_1;
  }
  protoOf(JsonBuilder).j4n = function () {
    if (this.g4n_1) {
      // Inline function 'kotlin.require' call
      if (!(this.x4m_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.y4m_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.u4m_1) {
      // Inline function 'kotlin.require' call
      if (!(this.v4m_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.v4m_1 === '    ')) {
      var tmp0 = this.v4m_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.v4m_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.q4m_1, this.s4m_1, this.t4m_1, this.f4n_1, this.u4m_1, this.r4m_1, this.v4m_1, this.w4m_1, this.g4n_1, this.x4m_1, this.e4n_1, this.z4m_1, this.a4n_1, this.b4n_1, this.c4n_1, this.d4n_1, this.y4m_1, this.i4n_1);
  };
  function validateConfiguration($this) {
    if (equals($this.r1u(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.y4l_1);
    $this.r1u().j2a(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    this.k4n_1 = encodeDefaults;
    this.l4n_1 = ignoreUnknownKeys;
    this.m4n_1 = isLenient;
    this.n4n_1 = allowStructuredMapKeys;
    this.o4n_1 = prettyPrint;
    this.p4n_1 = explicitNulls;
    this.q4n_1 = prettyPrintIndent;
    this.r4n_1 = coerceInputValues;
    this.s4n_1 = useArrayPolymorphism;
    this.t4n_1 = classDiscriminator;
    this.u4n_1 = allowSpecialFloatingPointValues;
    this.v4n_1 = useAlternativeNames;
    this.w4n_1 = namingStrategy;
    this.x4n_1 = decodeEnumsCaseInsensitive;
    this.y4n_1 = allowTrailingComma;
    this.z4n_1 = allowComments;
    this.a4o_1 = classDiscriminatorMode;
    this.b4o_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.k4n_1 + ', ignoreUnknownKeys=' + this.l4n_1 + ', isLenient=' + this.m4n_1 + ', ' + ('allowStructuredMapKeys=' + this.n4n_1 + ', prettyPrint=' + this.o4n_1 + ', explicitNulls=' + this.p4n_1 + ', ') + ("prettyPrintIndent='" + this.q4n_1 + "', coerceInputValues=" + this.r4n_1 + ', useArrayPolymorphism=' + this.s4n_1 + ', ') + ("classDiscriminator='" + this.t4n_1 + "', allowSpecialFloatingPointValues=" + this.u4n_1 + ', ') + ('useAlternativeNames=' + this.v4n_1 + ', namingStrategy=' + toString_0(this.w4n_1) + ', decodeEnumsCaseInsensitive=' + this.x4n_1 + ', ') + ('allowTrailingComma=' + this.y4n_1 + ', allowComments=' + this.z4n_1 + ', classDiscriminatorMode=' + this.a4o_1.toString() + ', exceptionsWithDebugInfo=' + this.b4o_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.g3g();
  };
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.l1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.e4o_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.e4o_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.e4o_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.e4o_1.k1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.e4o_1.r();
  };
  protoOf(JsonObject).h2c = function (key) {
    return this.e4o_1.n2(key);
  };
  protoOf(JsonObject).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h2c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).t2c = function (key) {
    return this.e4o_1.p2(key);
  };
  protoOf(JsonObject).p2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.t2c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).d1 = function () {
    return this.e4o_1.d1();
  };
  protoOf(JsonObject).q2 = function () {
    return this.e4o_1.q2();
  };
  protoOf(JsonObject).r2 = function () {
    return this.e4o_1.r2();
  };
  protoOf(JsonObject).k1 = function () {
    return this.e4o_1.k1();
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.f4o_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.f4o_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.f4o_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.f4o_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.f4o_1.r();
  };
  protoOf(JsonArray).g4o = function (element) {
    return this.f4o_1.h2(element);
  };
  protoOf(JsonArray).h2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.g4o(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.f4o_1.t();
  };
  protoOf(JsonArray).h4o = function (elements) {
    return this.f4o_1.i2(elements);
  };
  protoOf(JsonArray).i2 = function (elements) {
    return this.h4o(elements);
  };
  protoOf(JsonArray).e1 = function (index) {
    return this.f4o_1.e1(index);
  };
  protoOf(JsonArray).i4o = function (element) {
    return this.f4o_1.j2(element);
  };
  protoOf(JsonArray).j2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.i4o(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).j4o = function (element) {
    return this.f4o_1.k2(element);
  };
  protoOf(JsonArray).k2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.j4o(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).l2 = function () {
    return this.f4o_1.l2();
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.f4o_1.j1(index);
  };
  protoOf(JsonArray).m2 = function (fromIndex, toIndex) {
    return this.f4o_1.m2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.f4o_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).d1 = function () {
    return this.f4o_1.d1();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.k4o_1 = 'null';
  }
  protoOf(JsonNull).g3g = function () {
    return this.k4o_1;
  };
  protoOf(JsonNull).l4o = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).q22 = function (typeParamsSerializers) {
    return this.l4o();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.m4o_1 = isString;
    this.n4o_1 = coerceToInlineType;
    this.o4o_1 = toString(body);
    if (!(this.n4o_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.n4o_1.l1s()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).g3g = function () {
    return this.o4o_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.m4o_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.o4o_1);
      tmp = this_0.toString();
    } else {
      tmp = this.o4o_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.m4o_1 === other.m4o_1))
      return false;
    if (!(this.o4o_1 === other.o4o_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.m4o_1);
    result = imul(31, result) + getStringHashCode(this.o4o_1) | 0;
    return result;
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.g3g();
    }
    return tmp;
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.g3g());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.g3g()).p4o();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.g3g();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.g3g());
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.l1r('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.l1r('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.l1r('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.l1r('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.l1r('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().q4o_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().r4o_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().s4o_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().t4o_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().u4o_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.v4o_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).x1q = function () {
    return this.v4o_1;
  };
  protoOf(JsonElementSerializer).w4o = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.u1v(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.u1v(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.u1v(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).y1q = function (encoder, value) {
    return this.w4o(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).z1q = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.d4o();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.q4o_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).x1q = function () {
    return this.q4o_1;
  };
  protoOf(JsonPrimitiveSerializer).x4o = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.u1v(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.u1v(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).y1q = function (encoder, value) {
    return this.x4o(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).z1q = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.d4o();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.c4o().y4l_1.b4o_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.r4o_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).x1q = function () {
    return this.r4o_1;
  };
  protoOf(JsonNullSerializer).y4o = function (encoder, value) {
    verify(encoder);
    encoder.x1u();
  };
  protoOf(JsonNullSerializer).y1q = function (encoder, value) {
    return this.y4o(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).z1q = function (decoder) {
    verify_0(decoder);
    if (decoder.o1t()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.p1t();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.s4o_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).x1q = function () {
    return this.s4o_1;
  };
  protoOf(JsonLiteralSerializer).z4o = function (encoder, value) {
    verify(encoder);
    if (value.m4o_1) {
      return encoder.g1v(value.o4o_1);
    }
    if (!(value.n4o_1 == null)) {
      return encoder.i1v(value.n4o_1).g1v(value.o4o_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.o4o_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.c1v(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.o4o_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).ym_1;
      var tmp_1 = encoder.i1v(serializer_0(Companion_getInstance()).x1q());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.c1v(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.o4o_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.e1v(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.o4o_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.y1u(tmp3_safe_receiver);
    }
    encoder.g1v(value.o4o_1);
  };
  protoOf(JsonLiteralSerializer).y1q = function (encoder, value) {
    return this.z4o(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).z1q = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.d4o();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.c4o().y4l_1.b4o_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.a4p_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).x1q();
    this.b4p_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).j1s = function () {
    return this.b4p_1;
  };
  protoOf(JsonObjectDescriptor).o1s = function (index) {
    return this.a4p_1.o1s(index);
  };
  protoOf(JsonObjectDescriptor).p1s = function (name) {
    return this.a4p_1.p1s(name);
  };
  protoOf(JsonObjectDescriptor).q1s = function (index) {
    return this.a4p_1.q1s(index);
  };
  protoOf(JsonObjectDescriptor).r1s = function (index) {
    return this.a4p_1.r1s(index);
  };
  protoOf(JsonObjectDescriptor).s1s = function (index) {
    return this.a4p_1.s1s(index);
  };
  protoOf(JsonObjectDescriptor).k1s = function () {
    return this.a4p_1.k1s();
  };
  protoOf(JsonObjectDescriptor).c1s = function () {
    return this.a4p_1.c1s();
  };
  protoOf(JsonObjectDescriptor).l1s = function () {
    return this.a4p_1.l1s();
  };
  protoOf(JsonObjectDescriptor).m1s = function () {
    return this.a4p_1.m1s();
  };
  protoOf(JsonObjectDescriptor).n1s = function () {
    return this.a4p_1.n1s();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.t4o_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).x1q = function () {
    return this.t4o_1;
  };
  protoOf(JsonObjectSerializer).c4p = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).y1q(encoder, value);
  };
  protoOf(JsonObjectSerializer).y1q = function (encoder, value) {
    return this.c4p(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).z1q = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).z1q(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.d4p_1 = ListSerializer(JsonElementSerializer_getInstance()).x1q();
    this.e4p_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).j1s = function () {
    return this.e4p_1;
  };
  protoOf(JsonArrayDescriptor).o1s = function (index) {
    return this.d4p_1.o1s(index);
  };
  protoOf(JsonArrayDescriptor).p1s = function (name) {
    return this.d4p_1.p1s(name);
  };
  protoOf(JsonArrayDescriptor).q1s = function (index) {
    return this.d4p_1.q1s(index);
  };
  protoOf(JsonArrayDescriptor).r1s = function (index) {
    return this.d4p_1.r1s(index);
  };
  protoOf(JsonArrayDescriptor).s1s = function (index) {
    return this.d4p_1.s1s(index);
  };
  protoOf(JsonArrayDescriptor).k1s = function () {
    return this.d4p_1.k1s();
  };
  protoOf(JsonArrayDescriptor).c1s = function () {
    return this.d4p_1.c1s();
  };
  protoOf(JsonArrayDescriptor).l1s = function () {
    return this.d4p_1.l1s();
  };
  protoOf(JsonArrayDescriptor).m1s = function () {
    return this.d4p_1.m1s();
  };
  protoOf(JsonArrayDescriptor).n1s = function () {
    return this.d4p_1.n1s();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.u4o_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).x1q = function () {
    return this.u4o_1;
  };
  protoOf(JsonArraySerializer).f4p = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).y1q(encoder, value);
  };
  protoOf(JsonArraySerializer).y1q = function (encoder, value) {
    return this.f4p(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).z1q = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).z1q(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.g4p_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.m1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 31);
  }
  function defer$1($deferred) {
    this.g4p_1 = lazy($deferred);
  }
  protoOf(defer$1).j1s = function () {
    return _get_original__l7ku1m(this).j1s();
  };
  protoOf(defer$1).k1s = function () {
    return _get_original__l7ku1m(this).k1s();
  };
  protoOf(defer$1).m1s = function () {
    return _get_original__l7ku1m(this).m1s();
  };
  protoOf(defer$1).o1s = function (index) {
    return _get_original__l7ku1m(this).o1s(index);
  };
  protoOf(defer$1).p1s = function (name) {
    return _get_original__l7ku1m(this).p1s(name);
  };
  protoOf(defer$1).q1s = function (index) {
    return _get_original__l7ku1m(this).q1s(index);
  };
  protoOf(defer$1).r1s = function (index) {
    return _get_original__l7ku1m(this).r1s(index);
  };
  protoOf(defer$1).s1s = function (index) {
    return _get_original__l7ku1m(this).s1s(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.i4p_1 = shortMessage;
    this.j4p_1 = offset;
    this.k4p_1 = path;
    this.l4p_1 = input;
    this.m4p_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.n4p_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.n4p_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
    captureStack(this, JsonEncodingException);
    this.p4p_1 = shortMessage;
    this.q4p_1 = classSerialName;
    this.r4p_1 = hint;
  }
  function Composer(writer) {
    this.s4p_1 = writer;
    this.t4p_1 = true;
  }
  protoOf(Composer).u4p = function () {
    this.t4p_1 = true;
  };
  protoOf(Composer).v4p = function () {
    return Unit_instance;
  };
  protoOf(Composer).w4p = function () {
    this.t4p_1 = false;
  };
  protoOf(Composer).x4p = function () {
    this.t4p_1 = false;
  };
  protoOf(Composer).y4p = function () {
    return Unit_instance;
  };
  protoOf(Composer).z4p = function (v) {
    return this.s4p_1.a4q(v);
  };
  protoOf(Composer).b4q = function (v) {
    return this.s4p_1.c4q(v);
  };
  protoOf(Composer).d4q = function (v) {
    return this.s4p_1.c4q(v.toString());
  };
  protoOf(Composer).e4q = function (v) {
    return this.s4p_1.c4q(v.toString());
  };
  protoOf(Composer).f4q = function (v) {
    return this.s4p_1.g4q(fromInt(v));
  };
  protoOf(Composer).h4q = function (v) {
    return this.s4p_1.g4q(fromInt(v));
  };
  protoOf(Composer).i4q = function (v) {
    return this.s4p_1.g4q(fromInt(v));
  };
  protoOf(Composer).j4q = function (v) {
    return this.s4p_1.g4q(v);
  };
  protoOf(Composer).k4q = function (v) {
    return this.s4p_1.c4q(v.toString());
  };
  protoOf(Composer).l4q = function (value) {
    return this.s4p_1.m4q(value);
  };
  function Composer_0(sb, json) {
    return json.y4l_1.o4n_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.p4q_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).i4q = function (v) {
    if (this.p4q_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.l4q(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.b4q(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).j4q = function (v) {
    if (this.p4q_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.l4q(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.b4q(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).f4q = function (v) {
    if (this.p4q_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.l4q(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.b4q(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).h4q = function (v) {
    if (this.p4q_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.l4q(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.b4q(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.s4q_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).l4q = function (value) {
    if (this.s4q_1) {
      protoOf(Composer).l4q.call(this, value);
    } else {
      protoOf(Composer).b4q.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.v4q_1 = json;
    this.w4q_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).u4p = function () {
    this.t4p_1 = true;
    this.w4q_1 = this.w4q_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).v4p = function () {
    this.w4q_1 = this.w4q_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).w4p = function () {
    this.t4p_1 = false;
    this.b4q('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.w4q_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.b4q(this.v4q_1.y4l_1.q4n_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).x4p = function () {
    if (this.t4p_1)
      this.t4p_1 = false;
    else {
      this.w4p();
    }
  };
  protoOf(ComposerWithPrettyPrint).y4p = function () {
    this.z4p(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.y4q_1 = (!descriptor.s1s(index) && descriptor.r1s(index).c1s());
    return $this.y4q_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 32, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.x4q_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.y4q_1 = false;
  }
  protoOf(JsonElementMarker).z4q = function (index) {
    this.x4q_1.i20(index);
  };
  protoOf(JsonElementMarker).a4r = function () {
    return this.x4q_1.j20();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage) {
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.b4r('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.l4m_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.c4r(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.j1s() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.k1s().toString() + "'"), keyDescriptor.j1s(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.k4m_1.b4o_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.y4l_1.l4n_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.n1s();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.p1s(name);
    if (!(index === -3))
      return index;
    if (!json.y4l_1.v4n_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.j1s() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.o1s(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.k1s(), CLASS_getInstance()) ? json.y4l_1.w4n_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.e4r(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.y4l_1.x4n_1 && equals(descriptor.k1s(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).p2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.e4r(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.m1s();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.q1s(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.b1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f4r_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.o1s(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.g4r(_this__u8e3s4, i, _this__u8e3s4.o1s(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var trackingSet = LinkedHashSet_init_$Create$();
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.m1s();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.o1s(tmp_2);
        var name = $strategy.g4r($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.b1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.j1s());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.k1s(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).n2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.o1s(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.o1s(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.w2(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.k4r_1, 2);
    $this.i4r_1 = copyOf($this.i4r_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.j4r_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.j4r_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.h4r_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i4r_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.j4r_1 = tmp_2;
    this.k4r_1 = -1;
  }
  protoOf(JsonPath).l4r = function (sd) {
    this.k4r_1 = this.k4r_1 + 1 | 0;
    var depth = this.k4r_1;
    if (depth === this.i4r_1.length) {
      resize(this);
    }
    this.i4r_1[depth] = sd;
  };
  protoOf(JsonPath).m4r = function (index) {
    this.j4r_1[this.k4r_1] = index;
  };
  protoOf(JsonPath).n4r = function (key) {
    var tmp;
    if (!(this.j4r_1[this.k4r_1] === -2)) {
      this.k4r_1 = this.k4r_1 + 1 | 0;
      tmp = this.k4r_1 === this.i4r_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.i4r_1[this.k4r_1] = this.h4r_1.b4o_1 ? key : RedactedKey_instance;
    this.j4r_1[this.k4r_1] = -2;
  };
  protoOf(JsonPath).o4r = function () {
    if (this.j4r_1[this.k4r_1] === -2) {
      this.i4r_1[this.k4r_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).p4r = function () {
    var depth = this.k4r_1;
    if (this.j4r_1[depth] === -2) {
      this.j4r_1[depth] = -1;
      this.k4r_1 = this.k4r_1 - 1 | 0;
    }
    if (!(this.k4r_1 === -1)) {
      this.k4r_1 = this.k4r_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).q4r = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.k4r_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.i4r_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.k1s(), LIST_getInstance())) {
            if (!(this.j4r_1[index] === -1)) {
              this_0.q('[');
              this_0.zb(this.j4r_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.j4r_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.o1s(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.q4r();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.k1s();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.r4r_1)
      return Unit_instance;
    if (!$this.s4r_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.r4r_1 = configuration.s4n_1;
    this.s4r_1 = !configuration.a4o_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).s2a = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).v2a = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.x1q();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).w2a = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).x2a = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().d1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.u1v(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.c4s_1.g4s(6);
    if ($this.c4s_1.h4s() === 4) {
      $this.c4s_1.c4r('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.c4s_1.i4s()) {
      var key = $this.d4s_1 ? $this.c4s_1.k4s() : $this.c4s_1.j4s();
      $this.c4s_1.g4s(5);
      var element = $this.l4s();
      // Inline function 'kotlin.collections.set' call
      result.w2(key, element);
      lastToken = $this.c4s_1.m4s();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.c4s_1.c4r('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.c4s_1.g4s(7);
    } else if (lastToken === 4) {
      if (!$this.e4s_1) {
        invalidTrailingComma($this.c4s_1);
      }
      $this.c4s_1.g4s(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readArray($this) {
    var lastToken = $this.c4s_1.m4s();
    if ($this.c4s_1.h4s() === 4) {
      $this.c4s_1.c4r('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.c4s_1.i4s()) {
      var element = $this.l4s();
      result.b1(element);
      lastToken = $this.c4s_1.m4s();
      if (!(lastToken === 4)) {
        var tmp0 = $this.c4s_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.l4m_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.c4r(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.c4s_1.g4s(9);
    } else if (lastToken === 4) {
      if (!$this.e4s_1) {
        invalidTrailingComma($this.c4s_1, 'array');
      }
      $this.c4s_1.g4s(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.d4s_1 || !isString) {
      tmp = $this.c4s_1.k4s();
    } else {
      tmp = $this.c4s_1.j4s();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.j4t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).n4t = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.o4t($this$DeepRecursiveFunction, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.n4t(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0_subject = this.j4t_1.c4s_1.h4s();
            if (tmp0_subject === 1) {
              this.m4t_1 = readValue(this.j4t_1, true);
              this.i8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.m4t_1 = readValue(this.j4t_1, false);
                this.i8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.i8_1 = 1;
                  suspendResult = readObject_0(this.j4t_1, this.k4t_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.m4t_1 = readArray(this.j4t_1);
                    this.i8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.j4t_1.c4s_1.c4r("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.m4t_1 = suspendResult;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return this.m4t_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).o4t = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.j4t_1, completion);
    i.k4t_1 = $this$DeepRecursiveFunction;
    i.l4t_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.n4t($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4s_1 = _this__u8e3s4;
    this.w4s_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.y4s_1 = this.v4s_1;
            this.z4s_1 = this.y4s_1.c4s_1.g4s(6);
            if (this.y4s_1.c4s_1.h4s() === 4) {
              this.y4s_1.c4s_1.c4r('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.x4s_1 = LinkedHashMap_init_$Create$();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.y4s_1.c4s_1.i4s()) {
              this.i8_1 = 4;
              continue $sm;
            }

            this.a4t_1 = this.y4s_1.d4s_1 ? this.y4s_1.c4s_1.k4s() : this.y4s_1.c4s_1.j4s();
            this.y4s_1.c4s_1.g4s(5);
            this.i8_1 = 2;
            suspendResult = this.w4s_1.gl(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.x4s_1;
            var key = this.a4t_1;
            tmp0.w2(key, element);
            this.z4s_1 = this.y4s_1.c4s_1.m4s();
            var tmp0_subject = this.z4s_1;
            if (tmp0_subject === 4) {
              this.i8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.i8_1 = 4;
                continue $sm;
              } else {
                this.y4s_1.c4s_1.c4r('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.i8_1 = 1;
            continue $sm;
          case 4:
            if (this.z4s_1 === 6) {
              this.y4s_1.c4s_1.g4s(7);
            } else if (this.z4s_1 === 4) {
              if (!this.y4s_1.e4s_1) {
                invalidTrailingComma(this.y4s_1.c4s_1);
              }
              this.y4s_1.c4s_1.g4s(7);
            }

            return new JsonObject(this.x4s_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.c4s_1 = lexer;
    this.d4s_1 = configuration.m4n_1;
    this.e4s_1 = configuration.y4n_1;
    this.f4s_1 = 0;
  }
  protoOf(JsonTreeReader).l4s = function () {
    var token = this.c4s_1.h4s();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.f4s_1 = this.f4s_1 + 1 | 0;
      if (this.f4s_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.f4s_1 = this.f4s_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.c4s_1.c4r('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.n1s().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.p4t_1;
    }
    return json.y4l_1.t4n_1;
  }
  function access$checkEncodingConflicts$tPolymorphicKt($receiver, serializer, actualSerializer, classDiscriminator) {
    return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
    if (getJsonEncodedNames(actualSerializer.x1q(), _this__u8e3s4).h2(classDiscriminator)) {
      var baseName = serializer.x1q().j1s();
      var actualName = actualSerializer.x1q().j1s();
      var text = _this__u8e3s4.y4l_1.a4o_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.d4r_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).q4t = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.d4r_1;
    var value_0 = this_0.p2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.w2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.w2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).e4r = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.r4t(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.q4t(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).r4t = function (descriptor, key) {
    var tmp0_safe_receiver = this.d4r_1.p2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.p2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.s4t_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.s4t_1 === unknownKey) {
      $receiver.s4t_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.t1u(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.e4m_1.h4s() === 4) {
      $this.e4m_1.c4r('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.g4m_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.g4m_1 === -1)) {
        hasComma = $this.e4m_1.u4t();
      }
    } else {
      $this.e4m_1.t4t(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.e4m_1.i4s()) {
      if (decodingKey) {
        if ($this.g4m_1 === -1) {
          var tmp0 = $this.e4m_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.l4m_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.c4r(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.e4m_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.l4m_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.c4r(tmp$ret$3, position_0);
          }
        }
      }
      $this.g4m_1 = $this.g4m_1 + 1 | 0;
      tmp = $this.g4m_1;
    } else {
      if (hasComma && !$this.c4m_1.y4l_1.y4n_1) {
        invalidTrailingComma($this.e4m_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.c4m_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.s1s(index);
      var elementDescriptor = descriptor.r1s(index);
      var tmp;
      if (isOptional && !elementDescriptor.c1s()) {
        tmp = $this.e4m_1.v4t(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.k1s(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.c1s()) {
          tmp_0 = $this.e4m_1.v4t(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.e4m_1.w4t($this.i4m_1.m4n_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.y4l_1.p4n_1 && elementDescriptor.c1s();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.e4m_1.j4s();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.e4m_1.u4t();
    while ($this.e4m_1.i4s()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.e4m_1.t4t(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.c4m_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.i4m_1.r4n_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.e4m_1.u4t();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.j4m_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.z4q(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.c4m_1.y4l_1.y4n_1) {
      invalidTrailingComma($this.e4m_1);
    }
    var tmp1_safe_receiver = $this.j4m_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a4r();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.c4m_1) || trySkip($this, $this.h4m_1, key)) {
      $this.e4m_1.y4t($this.i4m_1.m4n_1);
    } else {
      $this.e4m_1.m4m_1.p4r();
      $this.e4m_1.x4t(key);
    }
    return $this.e4m_1.u4t();
  }
  function decodeListIndex($this) {
    var hasComma = $this.e4m_1.u4t();
    var tmp;
    if ($this.e4m_1.i4s()) {
      if (!($this.g4m_1 === -1) && !hasComma) {
        $this.e4m_1.c4r('Expected end of the array or comma');
      }
      $this.g4m_1 = $this.g4m_1 + 1 | 0;
      tmp = $this.g4m_1;
    } else {
      if (hasComma && !$this.c4m_1.y4l_1.y4n_1) {
        invalidTrailingComma($this.e4m_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.i4m_1.m4n_1) {
      tmp = $this.e4m_1.a4u();
    } else {
      tmp = $this.e4m_1.z4t();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.c4m_1 = json;
    this.d4m_1 = mode;
    this.e4m_1 = lexer;
    this.f4m_1 = this.c4m_1.r1u();
    this.g4m_1 = -1;
    this.h4m_1 = discriminatorHolder;
    this.i4m_1 = this.c4m_1.y4l_1;
    this.j4m_1 = this.i4m_1.p4n_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).c4o = function () {
    return this.c4m_1;
  };
  protoOf(StreamingJsonDecoder).r1u = function () {
    return this.f4m_1;
  };
  protoOf(StreamingJsonDecoder).d4o = function () {
    return (new JsonTreeReader(this.c4m_1.y4l_1, this.e4m_1)).l4s();
  };
  protoOf(StreamingJsonDecoder).c1u = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c4m_1.y4l_1.s4n_1;
      }
      if (tmp) {
        return deserializer.z1q(this);
      }
      var discriminator = classDiscriminator(deserializer.x1q(), this.c4m_1);
      var tmp0_elvis_lhs = this.e4m_1.b4u(discriminator, this.i4m_1.m4n_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.c4o().y4l_1.s4n_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.z1q(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.x1q(), this.c4o());
          var tmp2_0 = this.d4o();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.x1q().j1s();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.e4m_1.m4m_1.q4r();
            var tmp_2;
            if (this.c4o().y4l_1.b4o_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.t2c(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.c4o().y4l_1.b4o_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.c4o(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.e4m_1.c4r(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.h4m_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.z1q(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.e4m_1.m4m_1.q4r());
      } else {
        throw $p_1;
      }
    }
  };
  protoOf(StreamingJsonDecoder).d1u = function (descriptor) {
    var newMode = switchMode(this.c4m_1, descriptor);
    this.e4m_1.m4m_1.l4r(descriptor);
    this.e4m_1.t4t(newMode.e4u_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.c4m_1, newMode, this.e4m_1, descriptor, this.h4m_1);
        break;
      default:
        var tmp_0;
        if (this.d4m_1.equals(newMode) && this.c4m_1.y4l_1.p4n_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.c4m_1, newMode, this.e4m_1, descriptor, this.h4m_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).e1u = function (descriptor) {
    if (descriptor.m1s() === 0 && ignoreUnknownKeys(descriptor, this.c4m_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.e4m_1.u4t() && !this.c4m_1.y4l_1.y4n_1) {
      invalidTrailingComma(this.e4m_1, '');
    }
    this.e4m_1.t4t(this.d4m_1.f4u_1);
    this.e4m_1.m4m_1.p4r();
  };
  protoOf(StreamingJsonDecoder).o1t = function () {
    var tmp;
    var tmp0_safe_receiver = this.j4m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y4q_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.e4m_1.g4u();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).p1t = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).p1u = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.d4m_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.e4m_1.m4m_1.o4r();
    }
    var value = protoOf(AbstractDecoder).p1u.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.e4m_1.m4m_1.n4r(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).t1u = function (descriptor) {
    var index;
    switch (this.d4m_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.d4m_1.equals(WriteMode_MAP_getInstance())) {
      this.e4m_1.m4m_1.m4r(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).q1t = function () {
    return this.e4m_1.h4u();
  };
  protoOf(StreamingJsonDecoder).r1t = function () {
    var value = this.e4m_1.i4u();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.e4m_1.c4r("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).s1t = function () {
    var value = this.e4m_1.i4u();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.e4m_1.c4r("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).t1t = function () {
    var value = this.e4m_1.i4u();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.e4m_1.c4r("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).u1t = function () {
    return this.e4m_1.i4u();
  };
  protoOf(StreamingJsonDecoder).v1t = function () {
    var tmp0 = this.e4m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k4s();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4r("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c4m_1.y4l_1.u4n_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.e4m_1, result);
  };
  protoOf(StreamingJsonDecoder).w1t = function () {
    var tmp0 = this.e4m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k4s();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4r("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c4m_1.y4l_1.u4n_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.e4m_1, result);
  };
  protoOf(StreamingJsonDecoder).x1t = function () {
    var string = this.e4m_1.k4s();
    if (!(string.length === 1)) {
      this.e4m_1.c4r("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).y1t = function () {
    var tmp;
    if (this.i4m_1.m4n_1) {
      tmp = this.e4m_1.a4u();
    } else {
      tmp = this.e4m_1.j4s();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).a1u = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.e4m_1, this.c4m_1) : protoOf(AbstractDecoder).a1u.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).z1t = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.c4m_1, this.y1t(), ' at path ' + this.e4m_1.m4m_1.q4r());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.j4u_1 = lexer;
    this.k4u_1 = json.r1u();
  }
  protoOf(JsonDecoderForUnsignedTypes).r1u = function () {
    return this.k4u_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).t1u = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).t1t = function () {
    var tmp0 = this.j4u_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k4s();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4r("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).u1t = function () {
    var tmp0 = this.j4u_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k4s();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4r("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).r1t = function () {
    var tmp0 = this.j4u_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k4s();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4r("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).s1t = function () {
    var tmp0 = this.j4u_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.k4s();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4r("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.t4r_1.w4p();
    $this.g1v(discriminator);
    $this.t4r_1.z4p(_Char___init__impl__6a9atx(58));
    $this.t4r_1.y4p();
    $this.g1v(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.t4r_1 = composer;
    this.u4r_1 = json;
    this.v4r_1 = mode;
    this.w4r_1 = modeReuseCache;
    this.x4r_1 = this.u4r_1.r1u();
    this.y4r_1 = this.u4r_1.y4l_1;
    this.z4r_1 = false;
    this.a4s_1 = null;
    this.b4s_1 = null;
    var i = this.v4r_1.a1_1;
    if (!(this.w4r_1 == null)) {
      if (!(this.w4r_1[i] === null) || !(this.w4r_1[i] === this)) {
        this.w4r_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).c4o = function () {
    return this.u4r_1;
  };
  protoOf(StreamingJsonEncoder).r1u = function () {
    return this.x4r_1;
  };
  protoOf(StreamingJsonEncoder).x1v = function (descriptor, index) {
    return this.y4r_1.k4n_1;
  };
  protoOf(StreamingJsonEncoder).u1v = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.c4o().y4l_1.s4n_1) {
        serializer.y1q(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.c4o().y4l_1.a4o_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.c4o().y4l_1.a4o_1.a1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.x1q().k1s();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.x1q(), this.c4o()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.x1q()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        access$checkEncodingConflicts$tPolymorphicKt(this.c4o(), serializer, actualSerializer, baseClassDiscriminator);
        checkKind_0(actualSerializer.x1q().k1s());
        var serialName = actualSerializer.x1q().j1s();
        this.a4s_1 = baseClassDiscriminator;
        this.b4s_1 = serialName;
      }
      actualSerializer.y1q(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).d1u = function (descriptor) {
    var newMode = switchMode(this.u4r_1, descriptor);
    if (!(newMode.e4u_1 === _Char___init__impl__6a9atx(0))) {
      this.t4r_1.z4p(newMode.e4u_1);
      this.t4r_1.u4p();
    }
    var discriminator = this.a4s_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.b4s_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.j1s() : tmp0_elvis_lhs);
      this.a4s_1 = null;
      this.b4s_1 = null;
    }
    if (this.v4r_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.w4r_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.t4r_1, this.u4r_1, newMode, this.w4r_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).e1u = function (descriptor) {
    if (!(this.v4r_1.f4u_1 === _Char___init__impl__6a9atx(0))) {
      this.t4r_1.v4p();
      this.t4r_1.x4p();
      this.t4r_1.z4p(this.v4r_1.f4u_1);
    }
  };
  protoOf(StreamingJsonEncoder).v1u = function (descriptor, index) {
    switch (this.v4r_1.a1_1) {
      case 1:
        if (!this.t4r_1.t4p_1) {
          this.t4r_1.z4p(_Char___init__impl__6a9atx(44));
        }

        this.t4r_1.w4p();
        break;
      case 2:
        if (!this.t4r_1.t4p_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.t4r_1.z4p(_Char___init__impl__6a9atx(44));
            this.t4r_1.w4p();
            tmp_0 = true;
          } else {
            this.t4r_1.z4p(_Char___init__impl__6a9atx(58));
            this.t4r_1.y4p();
            tmp_0 = false;
          }
          tmp.z4r_1 = tmp_0;
        } else {
          this.z4r_1 = true;
          this.t4r_1.w4p();
        }

        break;
      case 3:
        if (index === 0)
          this.z4r_1 = true;
        if (index === 1) {
          this.t4r_1.z4p(_Char___init__impl__6a9atx(44));
          this.t4r_1.y4p();
          this.z4r_1 = false;
        }

        break;
      default:
        if (!this.t4r_1.t4p_1) {
          this.t4r_1.z4p(_Char___init__impl__6a9atx(44));
        }

        this.t4r_1.w4p();
        this.g1v(getJsonElementName(descriptor, this.u4r_1, index));
        this.t4r_1.z4p(_Char___init__impl__6a9atx(58));
        this.t4r_1.y4p();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).i1v = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.t4r_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.t4r_1;
      } else {
        var tmp0 = this.t4r_1.s4p_1;
        var p1 = this.z4r_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.u4r_1, this.v4r_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.t4r_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.t4r_1;
      } else {
        var tmp0_0 = this.t4r_1.s4p_1;
        var p1_0 = this.z4r_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.u4r_1, this.v4r_1, null);
    } else if (!(this.a4s_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.b4s_1 = descriptor.j1s();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).i1v.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).x1u = function () {
    this.t4r_1.b4q('null');
  };
  protoOf(StreamingJsonEncoder).y1u = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.k4q(value);
    }
  };
  protoOf(StreamingJsonEncoder).z1u = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.f4q(value);
    }
  };
  protoOf(StreamingJsonEncoder).a1v = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.h4q(value);
    }
  };
  protoOf(StreamingJsonEncoder).b1v = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.i4q(value);
    }
  };
  protoOf(StreamingJsonEncoder).c1v = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.j4q(value);
    }
  };
  protoOf(StreamingJsonEncoder).d1v = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.d4q(value);
    }
    if (!this.y4r_1.u4n_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).e1v = function (value) {
    if (this.z4r_1) {
      this.g1v(value.toString());
    } else {
      this.t4r_1.e4q(value);
    }
    if (!this.y4r_1.u4n_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).f1v = function (value) {
    this.g1v(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).g1v = function (value) {
    return this.t4r_1.l4q(value);
  };
  protoOf(StreamingJsonEncoder).h1v = function (enumDescriptor, index) {
    this.g1v(enumDescriptor.o1s(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.l1s() && get_unsignedNumberDescriptors().h2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.l1s() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).x1q(), serializer_0(Companion_getInstance()).x1q(), serializer_2(Companion_getInstance_1()).x1q(), serializer_3(Companion_getInstance_2()).x1q()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.wb(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.wb(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.x1q())).c1u(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.r4u(tag);
    var tmp;
    if ($this.c4o().y4l_1.b4o_1) {
      var tmp$ret$3 = toString($this.s4u());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.n4u_1 = json;
    this.o4u_1 = value;
    this.p4u_1 = polymorphicDiscriminator;
    this.q4u_1 = this.c4o().y4l_1;
  }
  protoOf(AbstractJsonTreeDecoder).c4o = function () {
    return this.n4u_1;
  };
  protoOf(AbstractJsonTreeDecoder).m1 = function () {
    return this.o4u_1;
  };
  protoOf(AbstractJsonTreeDecoder).r1u = function () {
    return this.c4o().r1u();
  };
  protoOf(AbstractJsonTreeDecoder).s4u = function () {
    var tmp0_safe_receiver = this.i28();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.t4u(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.m1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).r4u = function (currentTag) {
    return this.k28() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).d4o = function () {
    return this.s4u();
  };
  protoOf(AbstractJsonTreeDecoder).c1u = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.c4o().y4l_1.s4n_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.z1q(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.x1q(), this.c4o());
      var tmp2 = this.d4o();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.x1q().j1s();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.k28();
        var tmp_0;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.t2c(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.c4o().y4l_1.b4o_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.c4o(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).j28 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).d1u = function (descriptor) {
    var currentObject = this.s4u();
    var tmp0_subject = descriptor.k1s();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.c4o();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.j1s();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.k28();
        var tmp_2;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.c4o();
        var keyDescriptor = carrierDescriptor(descriptor.r1s(0), this_0.r1u());
        var keyKind = keyDescriptor.k1s();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.c4o();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.j1s();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.k28();
            var tmp_6;
            if (this.c4o().y4l_1.b4o_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.y4l_1.n4n_1) {
            var tmp_7 = this.c4o();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.j1s();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.k28();
              var tmp_8;
              if (this.c4o().y4l_1.b4o_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.c4o();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.j1s();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.k28();
          var tmp_10;
          if (this.c4o().y4l_1.b4o_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.p4u_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).e1u = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).o1t = function () {
    var tmp = this.s4u();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).u4u = function (tag, enumDescriptor) {
    var tmp = this.c4o();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.t4u(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.j1s();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.r4u(tag);
      var tmp_0;
      if (this.c4o().y4l_1.b4o_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.g3g());
  };
  protoOf(AbstractJsonTreeDecoder).w28 = function (tag, enumDescriptor) {
    return this.u4u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).v4u = function (tag) {
    return !(this.t4u(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).m28 = function (tag) {
    return this.v4u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w4u = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).n28 = function (tag) {
    return this.w4u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x4u = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o28 = function (tag) {
    return this.x4u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y4u = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).p28 = function (tag) {
    return this.y4u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z4u = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).q28 = function (tag) {
    return this.z4u((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a4v = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).r28 = function (tag) {
    return this.a4v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b4v = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c4o().y4l_1.u4n_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.c4o().y4l_1.b4o_1) {
      var tmp$ret$13 = toString(this.s4u());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).s28 = function (tag) {
    return this.b4v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c4v = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.c4o().y4l_1.u4n_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.c4o().y4l_1.b4o_1) {
      var tmp$ret$13 = toString(this.s4u());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).t28 = function (tag) {
    return this.c4v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d4v = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.t4u(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.g3g()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.u1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).u28 = function (tag) {
    return this.d4v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e4v = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.t4u(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.r4u(tag);
      var tmp;
      if (this.c4o().y4l_1.b4o_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.r4u(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.c4o().y4l_1.b4o_1) {
        var tmp$ret$10 = toString(this.s4u());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.m4o_1 && !this.c4o().y4l_1.m4n_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.r4u(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.c4o().y4l_1.b4o_1) {
        var tmp$ret$14 = toString(this.s4u());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.o4o_1;
  };
  protoOf(AbstractJsonTreeDecoder).v28 = function (tag) {
    return this.e4v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f4v = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.c4o();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.t4u(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.j1s();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.r4u(tag);
        var tmp_1;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.g3g());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.c4o());
    } else {
      tmp = protoOf(NamedValueDecoder).x28.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).x28 = function (tag, inlineDescriptor) {
    return this.f4v((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).a1u = function (descriptor) {
    return !(this.i28() == null) ? protoOf(NamedValueDecoder).a1u.call(this, descriptor) : (new JsonPrimitiveDecoder(this.c4o(), this.m1(), this.p4u_1)).a1u(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.p4v_1 = (!$this.c4o().y4l_1.p4n_1 && !descriptor.s1s(index) && descriptor.r1s(index).c1s());
    return $this.p4v_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.m4v_1 = value;
    this.n4v_1 = polyDescriptor;
    this.o4v_1 = 0;
    this.p4v_1 = false;
  }
  protoOf(JsonTreeDecoder).m1 = function () {
    return this.m4v_1;
  };
  protoOf(JsonTreeDecoder).t1u = function (descriptor) {
    $l$loop: while (this.o4v_1 < descriptor.m1s()) {
      var _unary__edvuaz = this.o4v_1;
      this.o4v_1 = _unary__edvuaz + 1 | 0;
      var name = this.d28(descriptor, _unary__edvuaz);
      var index = this.o4v_1 - 1 | 0;
      this.p4v_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.m1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).n2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.q4u_1.r4n_1)
          return index;
        var tmp0 = this.c4o();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.s1s(index);
          var elementDescriptor = descriptor.r1s(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.c1s()) {
            var tmp_1 = this.q4v(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.k1s(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.c1s()) {
              var tmp_3 = this.q4v(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.q4v(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.y4l_1.p4n_1 && elementDescriptor.c1s();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).o1t = function () {
    return !this.p4v_1 && protoOf(AbstractJsonTreeDecoder).o1t.call(this);
  };
  protoOf(JsonTreeDecoder).e28 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.c4o());
    var baseName = descriptor.o1s(index);
    if (strategy == null) {
      if (!this.q4u_1.v4n_1)
        return baseName;
      if (this.m1().q2().h2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.c4o(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.m1().q2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (deserializationNamesMap_0.p2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.g4r(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).t4u = function (tag) {
    return getValue(this.m1(), tag);
  };
  protoOf(JsonTreeDecoder).q4v = function (tag) {
    return this.m1().t2c(tag);
  };
  protoOf(JsonTreeDecoder).d1u = function (descriptor) {
    if (descriptor === this.n4v_1) {
      var tmp = this.c4o();
      var tmp2 = this.s4u();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.n4v_1.j1s();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.k28();
        var tmp_0;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.p4u_1, this.n4v_1);
    }
    return protoOf(AbstractJsonTreeDecoder).d1u.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).e1u = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.c4o())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.k1s();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.c4o());
    var tmp_1;
    if (strategy == null && !this.q4u_1.v4n_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.c4o(), descriptor).q2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.c4o()).r4t(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.m1().q2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.h2(key) && !(key === this.p4u_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.k28();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.c4o().y4l_1.b4o_1) {
          var tmp$ret$4 = this.m1().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.x4v_1 = value;
    this.y4v_1 = this.x4v_1.d1();
    this.z4v_1 = -1;
  }
  protoOf(JsonTreeListDecoder).m1 = function () {
    return this.x4v_1;
  };
  protoOf(JsonTreeListDecoder).e28 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).t4u = function (tag) {
    return this.x4v_1.e1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).t1u = function (descriptor) {
    while (this.z4v_1 < (this.y4v_1 - 1 | 0)) {
      this.z4v_1 = this.z4v_1 + 1 | 0;
      return this.z4v_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.g4w_1 = value;
    this.y28('primitive');
  }
  protoOf(JsonPrimitiveDecoder).m1 = function () {
    return this.g4w_1;
  };
  protoOf(JsonPrimitiveDecoder).t1u = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).t4u = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.g4w_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.r4w_1 = value;
    this.s4w_1 = toList(this.r4w_1.q2());
    this.t4w_1 = imul(this.s4w_1.d1(), 2);
    this.u4w_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).m1 = function () {
    return this.r4w_1;
  };
  protoOf(JsonTreeMapDecoder).e28 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.s4w_1.e1(i);
  };
  protoOf(JsonTreeMapDecoder).t1u = function (descriptor) {
    while (this.u4w_1 < (this.t4w_1 - 1 | 0)) {
      this.u4w_1 = this.u4w_1 + 1 | 0;
      return this.u4w_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).t4u = function (tag) {
    return (this.u4w_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.r4w_1, tag);
  };
  protoOf(JsonTreeMapDecoder).e1u = function (descriptor) {
  };
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.e4u_1 = begin;
    this.f4u_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.k1s();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.r1s(0), _this__u8e3s4.r1u());
          var keyKind = keyDescriptor.k1s();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.y4l_1.n4n_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.k1s(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.l1s()) {
      tmp = carrierDescriptor(_this__u8e3s4.r1s(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.v4w(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.v4w(lastPosition, currentPosition);
    var result = $this.o4m_1.toString();
    $this.o4m_1.cc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.n4m_1);
    $this.n4m_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.w4w(), $this.l4m_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.x4w(currentPosition);
    if (currentPosition === -1) {
      $this.c4r('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.w4w();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.w4w(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.c4r("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.o4m_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.l4m_1 = startPos;
      $this.y4w();
      if (($this.l4m_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.c4r('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.l4m_1);
    }
    $this.o4m_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.c4r("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.x4w(start);
    if (current >= charSequenceLength($this.w4w()) || current === -1) {
      $this.c4r('EOF');
    }
    var tmp = $this.w4w();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.c4r("Expected valid boolean literal prefix, but had '" + $this.k4s() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.w4w()) - current | 0) < literalSuffix.length) {
      $this.c4r('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.w4w(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.c4r("Expected valid boolean literal prefix, but had '" + $this.k4s() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.l4m_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.k4m_1 = configuration;
    this.l4m_1 = 0;
    this.m4m_1 = new JsonPath(this.k4m_1);
    this.n4m_1 = null;
    this.o4m_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).y4w = function () {
  };
  protoOf(AbstractJsonLexer).u4t = function () {
    var current = this.z4w();
    var source = this.w4w();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.l4m_1 = this.l4m_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).a4x = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).p4m = function () {
    var nextToken = this.m4s();
    if (!(nextToken === 10)) {
      this.c4r('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.w4w(), this.l4m_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).g4s = function (expected) {
    var token = this.m4s();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.l4m_1 > 0 ? this.l4m_1 - 1 | 0 : this.l4m_1;
      var s = this.l4m_1 === charSequenceLength(this.w4w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.w4w(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.c4r(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).b4x = function (expected) {
    if (this.l4m_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.l4m_1;
        try {
          this.l4m_1 = this.l4m_1 - 1 | 0;
          tmp$ret$0 = this.k4s();
          break $l$block;
        }finally {
          this.l4m_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.b4r("Expected string literal but 'null' literal was found", this.l4m_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.l4m_1 > 0 ? this.l4m_1 - 1 | 0 : this.l4m_1;
    var s = this.l4m_1 === charSequenceLength(this.w4w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.w4w(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.c4r(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).h4s = function () {
    var source = this.w4w();
    var cpos = this.l4m_1;
    $l$loop_0: while (true) {
      cpos = this.x4w(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.l4m_1 = cpos;
      return charToTokenClass(ch);
    }
    this.l4m_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).v4t = function (doConsume) {
    var current = this.z4w();
    current = this.x4w(current);
    var len = charSequenceLength(this.w4w()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.w4w(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.w4w(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.l4m_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).g4u = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.v4t(doConsume) : $super.v4t.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).w4t = function (isLenient) {
    var token = this.h4s();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.k4s();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.j4s();
    }
    var string = tmp;
    this.n4m_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).c4x = function () {
    this.n4m_1 = null;
  };
  protoOf(AbstractJsonLexer).tn = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.w4w();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).j4s = function () {
    if (!(this.n4m_1 == null)) {
      return takePeeked(this);
    }
    return this.z4t();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.x4w(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.c4r('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.v4w(lastPosition, currentPosition);
          currentPosition = this.x4w(currentPosition);
          if (currentPosition === -1) {
            this.c4r('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.tn(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.l4m_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).a4u = function () {
    var result = this.k4s();
    if (result === 'null' && wasUnquotedString(this)) {
      this.c4r("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).k4s = function () {
    if (!(this.n4m_1 == null)) {
      return takePeeked(this);
    }
    var current = this.z4w();
    if (current >= charSequenceLength(this.w4w()) || current === -1) {
      this.c4r('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.w4w(), current));
    if (token === 1) {
      return this.j4s();
    }
    if (!(token === 0)) {
      this.c4r('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.w4w(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.w4w(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.w4w())) {
        usedAppend = true;
        this.v4w(this.l4m_1, current);
        var eof = this.x4w(current);
        if (eof === -1) {
          this.l4m_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.tn(this.l4m_1, current);
    } else {
      tmp = decodedString(this, this.l4m_1, current);
    }
    var result = tmp;
    this.l4m_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).v4w = function (fromIndex, toIndex) {
    this.o4m_1.wb(this.w4w(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).y4t = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.h4s();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.k4s();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.h4s();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.k4s();
        else
          this.z4t();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.b1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.c4r('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.c4r('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.c4r('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.m4s();
      if (tokenStack.d1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.w4w()) + "', currentPosition=" + this.l4m_1 + ')';
  };
  protoOf(AbstractJsonLexer).x4t = function (key) {
    var processed = this.tn(0, this.l4m_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.b4r("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).b4r = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.m4m_1.q4r(), hint, this.w4w());
  };
  protoOf(AbstractJsonLexer).c4r = function (message, position, hint, $super) {
    position = position === VOID ? this.l4m_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.b4r(message, position, hint) : $super.b4r.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).i4u = function () {
    var current = this.z4w();
    current = this.x4w(current);
    if (current >= charSequenceLength(this.w4w()) || current === -1) {
      this.c4r('EOF');
    }
    var tmp;
    if (charSequenceGet(this.w4w(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.w4w())) {
        this.c4r('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.w4w()))) {
      var ch = charSequenceGet(this.w4w(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.c4r("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.c4r("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.c4r("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.c4r("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.c4r("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.c4r('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.c4r('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.c4r('EOF');
      }
      if (!(charSequenceGet(this.w4w(), current) === _Char___init__impl__6a9atx(34))) {
        this.c4r('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.l4m_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.c4r('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.c4r("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.c4r('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).p4o = function () {
    var result = this.i4u();
    var next = this.m4s();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.l4m_1 > 0 ? this.l4m_1 - 1 | 0 : this.l4m_1;
      var s = this.l4m_1 === charSequenceLength(this.w4w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.w4w(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.c4r(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).h4u = function () {
    var current = this.z4w();
    if (current === charSequenceLength(this.w4w())) {
      this.c4r('EOF');
    }
    var tmp;
    if (charSequenceGet(this.w4w(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.l4m_1 === charSequenceLength(this.w4w())) {
        this.c4r('EOF');
      }
      if (!(charSequenceGet(this.w4w(), this.l4m_1) === _Char___init__impl__6a9atx(34))) {
        this.c4r('Expected closing quotation mark');
      }
      this.l4m_1 = this.l4m_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().e4x_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().d4x_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.d4x_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.e4x_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.d4x_1 = charArray(117);
    this.e4x_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).m4s = function () {
    var source = this.w4w();
    var cpos = this.z4w();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.l4m_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).i4s = function () {
    var current = this.z4w();
    if (current >= this.w4w().length || current === -1)
      return false;
    return this.a4x(charCodeAt(this.w4w(), current));
  };
  protoOf(StringJsonLexerWithComments).t4t = function (expected) {
    var source = this.w4w();
    var current = this.z4w();
    if (current >= source.length || current === -1) {
      this.l4m_1 = -1;
      this.b4x(expected);
    }
    var c = charCodeAt(source, current);
    this.l4m_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.b4x(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).h4s = function () {
    var source = this.w4w();
    var cpos = this.z4w();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.l4m_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).z4w = function () {
    var current = this.l4m_1;
    if (current === -1)
      return current;
    var source = this.w4w();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.l4m_1 = source.length;
            this.c4r('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.l4m_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.q4x_1 = source;
  }
  protoOf(StringJsonLexer).w4w = function () {
    return this.q4x_1;
  };
  protoOf(StringJsonLexer).x4w = function (position) {
    return position < this.w4w().length ? position : -1;
  };
  protoOf(StringJsonLexer).m4s = function () {
    var source = this.w4w();
    var cpos = this.l4m_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.l4m_1 = cpos;
      return charToTokenClass(c);
    }
    this.l4m_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).i4s = function () {
    var current = this.l4m_1;
    if (current === -1)
      return false;
    var source = this.w4w();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.l4m_1 = current;
      return this.a4x(c);
    }
    this.l4m_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).z4w = function () {
    var current = this.l4m_1;
    if (current === -1)
      return current;
    var source = this.w4w();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.l4m_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).t4t = function (expected) {
    if (this.l4m_1 === -1) {
      this.b4x(expected);
    }
    var source = this.w4w();
    var cpos = this.l4m_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.l4m_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.b4x(expected);
    }
    this.l4m_1 = -1;
    this.b4x(expected);
  };
  protoOf(StringJsonLexer).z4t = function () {
    this.t4t(_Char___init__impl__6a9atx(34));
    var current = this.l4m_1;
    var closingQuote = indexOf_0(this.w4w(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.k4s();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.l4m_1 > 0 ? this.l4m_1 - 1 | 0 : this.l4m_1;
      var s = this.l4m_1 === charSequenceLength(this.w4w()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.w4w(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.c4r(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.w4w(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.w4w(), this.l4m_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.l4m_1 = closingQuote + 1 | 0;
    return substring(this.w4w(), current, closingQuote);
  };
  protoOf(StringJsonLexer).b4u = function (keyToMatch, isLenient) {
    var positionSnapshot = this.l4m_1;
    try {
      if (!(this.m4s() === 6))
        return null;
      var firstKey = this.w4t(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.c4x();
      if (!(this.m4s() === 5))
        return null;
      return this.w4t(isLenient);
    }finally {
      this.l4m_1 = positionSnapshot;
      this.c4x();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.y4l_1.z4n_1 ? new StringJsonLexer(source, json.y4l_1) : new StringJsonLexerWithComments(source, json.y4l_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.a4m_1;
  }
  function JsonToStringWriter() {
    this.b4m_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).g4q = function (value) {
    this.b4m_1.ac(value);
  };
  protoOf(JsonToStringWriter).a4q = function (char) {
    this.b4m_1.s(char);
  };
  protoOf(JsonToStringWriter).c4q = function (text) {
    this.b4m_1.q(text);
  };
  protoOf(JsonToStringWriter).m4q = function (text) {
    printQuoted(this.b4m_1, text);
  };
  protoOf(JsonToStringWriter).d37 = function () {
    this.b4m_1.dc();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.b4m_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).c1s = get_isNullable;
  protoOf(defer$1).l1s = get_isInline;
  protoOf(defer$1).n1s = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).u2a = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
