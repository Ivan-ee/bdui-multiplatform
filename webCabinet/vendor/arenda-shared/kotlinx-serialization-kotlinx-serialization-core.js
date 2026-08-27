(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.tb;
  var initMetadataForInterface = kotlin_kotlin.$_$.za;
  var VOID = kotlin_kotlin.$_$.c;
  var getKClassFromExpression = kotlin_kotlin.$_$.lc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j2;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var emptyList = kotlin_kotlin.$_$.k6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.z2;
  var lazy = kotlin_kotlin.$_$.og;
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sa;
  var toString = kotlin_kotlin.$_$.wb;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var objectCreate = kotlin_kotlin.$_$.sb;
  var captureStack = kotlin_kotlin.$_$.fa;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.e4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.g4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException = kotlin_kotlin.$_$.mf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.p;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var isInterface = kotlin_kotlin.$_$.kb;
  var KClass = kotlin_kotlin.$_$.oc;
  var Triple = kotlin_kotlin.$_$.uf;
  var getKClass = kotlin_kotlin.$_$.mc;
  var Pair = kotlin_kotlin.$_$.qf;
  var Entry = kotlin_kotlin.$_$.h5;
  var KtMap = kotlin_kotlin.$_$.i5;
  var KtMutableMap = kotlin_kotlin.$_$.l5;
  var LinkedHashMap = kotlin_kotlin.$_$.e5;
  var HashMap = kotlin_kotlin.$_$.c5;
  var KtSet = kotlin_kotlin.$_$.n5;
  var KtMutableSet = kotlin_kotlin.$_$.m5;
  var LinkedHashSet = kotlin_kotlin.$_$.f5;
  var HashSet = kotlin_kotlin.$_$.d5;
  var Collection = kotlin_kotlin.$_$.b5;
  var KtList = kotlin_kotlin.$_$.g5;
  var KtMutableList = kotlin_kotlin.$_$.j5;
  var ArrayList = kotlin_kotlin.$_$.a5;
  var copyToArray = kotlin_kotlin.$_$.h6;
  var Result = kotlin_kotlin.$_$.rf;
  var ensureNotNull = kotlin_kotlin.$_$.jg;
  var equals = kotlin_kotlin.$_$.pa;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var isBlank = kotlin_kotlin.$_$.jd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var toList = kotlin_kotlin.$_$.z7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j3;
  var toHashSet = kotlin_kotlin.$_$.w7;
  var toBooleanArray = kotlin_kotlin.$_$.u7;
  var withIndex = kotlin_kotlin.$_$.h8;
  var to = kotlin_kotlin.$_$.ug;
  var toMap = kotlin_kotlin.$_$.b8;
  var lazy_0 = kotlin_kotlin.$_$.pg;
  var contentEquals = kotlin_kotlin.$_$.s5;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var Long = kotlin_kotlin.$_$.of;
  var Char = kotlin_kotlin.$_$.ef;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.d;
  var Duration = kotlin_kotlin.$_$.ye;
  var Companion_getInstance = kotlin_kotlin.$_$.m2;
  var Instant = kotlin_kotlin.$_$.ze;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.n2;
  var Uuid = kotlin_kotlin.$_$.bf;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o2;
  var toIntOrNull = kotlin_kotlin.$_$.le;
  var hashCode = kotlin_kotlin.$_$.ua;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.k3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.p3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var isArray = kotlin_kotlin.$_$.cb;
  var arrayIterator = kotlin_kotlin.$_$.da;
  var asList = kotlin_kotlin.$_$.q5;
  var until = kotlin_kotlin.$_$.gc;
  var step = kotlin_kotlin.$_$.fc;
  var getValue = kotlin_kotlin.$_$.u6;
  var longArray = kotlin_kotlin.$_$.ob;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var get_lastIndex = kotlin_kotlin.$_$.a7;
  var shiftLeft = kotlin_kotlin.$_$.x9;
  var bitwiseOr = kotlin_kotlin.$_$.i9;
  var equalsLong = kotlin_kotlin.$_$.o9;
  var invert = kotlin_kotlin.$_$.q9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.hg;
  var indexOf = kotlin_kotlin.$_$.v6;
  var contentToString = kotlin_kotlin.$_$.w5;
  var Enum = kotlin_kotlin.$_$.jf;
  var joinToString = kotlin_kotlin.$_$.y6;
  var toString_0 = kotlin_kotlin.$_$.tg;
  var KTypeParameter = kotlin_kotlin.$_$.sc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.i3;
  var booleanArray = kotlin_kotlin.$_$.ea;
  var emptyMap = kotlin_kotlin.$_$.l6;
  var contentHashCode = kotlin_kotlin.$_$.v5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p2;
  var isCharArray = kotlin_kotlin.$_$.fb;
  var charArray = kotlin_kotlin.$_$.ha;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f2;
  var isDoubleArray = kotlin_kotlin.$_$.hb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var isFloatArray = kotlin_kotlin.$_$.ib;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.q2;
  var isLongArray = kotlin_kotlin.$_$.r9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.u2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p1;
  var ULongArray = kotlin_kotlin.$_$.zf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var isIntArray = kotlin_kotlin.$_$.jb;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.t2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g1;
  var UIntArray = kotlin_kotlin.$_$.xf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.i2;
  var isShortArray = kotlin_kotlin.$_$.lb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.v2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y1;
  var UShortArray = kotlin_kotlin.$_$.bg;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var isByteArray = kotlin_kotlin.$_$.eb;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.s2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x;
  var UByteArray = kotlin_kotlin.$_$.vf;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.q;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.r;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var isBooleanArray = kotlin_kotlin.$_$.db;
  var coerceAtLeast = kotlin_kotlin.$_$.bc;
  var copyOf = kotlin_kotlin.$_$.b6;
  var copyOf_0 = kotlin_kotlin.$_$.d6;
  var copyOf_1 = kotlin_kotlin.$_$.e6;
  var copyOf_2 = kotlin_kotlin.$_$.z5;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o1;
  var copyOf_3 = kotlin_kotlin.$_$.g6;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f1;
  var copyOf_4 = kotlin_kotlin.$_$.y5;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x1;
  var copyOf_5 = kotlin_kotlin.$_$.c6;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.t;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w;
  var copyOf_6 = kotlin_kotlin.$_$.a6;
  var trimIndent = kotlin_kotlin.$_$.ve;
  var Unit = kotlin_kotlin.$_$.dg;
  var charSequenceLength = kotlin_kotlin.$_$.ka;
  var lastOrNull = kotlin_kotlin.$_$.c7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.b7;
  var ULong = kotlin_kotlin.$_$.ag;
  var UInt = kotlin_kotlin.$_$.yf;
  var UByte = kotlin_kotlin.$_$.wf;
  var UShort = kotlin_kotlin.$_$.cg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qg;
  var get_js = kotlin_kotlin.$_$.nb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.x6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var get_indices_0 = kotlin_kotlin.$_$.w6;
  var get_longArrayClass = kotlin_kotlin.$_$.s9;
  var mapOf = kotlin_kotlin.$_$.h7;
  var Companion_instance = kotlin_kotlin.$_$.r2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m;
  var createFailure = kotlin_kotlin.$_$.ig;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForInterface(StringFormat, 'StringFormat');
  initMetadataForInterface(BinaryFormat, 'BinaryFormat');
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.z1q(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.p1u(descriptor, index, deserializer, previousValue) : $super.p1u.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.d1u(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.y1q(this, value);
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.s2a(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.a1r(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.b1r());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.c1r(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.b1r());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.l1r('type', serializer_1(StringCompanionObject_instance).x1q());
      $this$buildSerialDescriptor.l1r('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.m1r_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.f1r_1 = this$0.n1r_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.m1r_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.x1q();
    }, 1, 0, 7);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.m1r_1 = baseClass;
    this.n1r_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.o1r_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).b1r = function () {
    return this.m1r_1;
  };
  protoOf(PolymorphicSerializer).x1q = function () {
    var tmp0 = this.o1r_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.m1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.m1r_1) + ')';
  };
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.d1() === 1 ? "Field '" + missingFields.e1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.u1r_1 = missingFields;
    this.v1r_1 = serialName;
  }
  protoOf(MissingFieldException).w1r = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.u1r_1, this.v1r_1);
  };
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.b1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.y1r(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.x1r()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.y1r(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.z1r(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.b1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.b1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.e1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.e1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.e1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.e1(0), serializers.e1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.e1(0), serializers.e1(1), serializers.e1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.e1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializer_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.e1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().a1s(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().a1s(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().b1s(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().b1s(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.e1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.e1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_3(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.x1q().c1s()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_17(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.y1r(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x1q();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.h1s_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.d1s_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.g1s_1 = original;
    this.h1s_1 = kClass;
    this.i1s_1 = this.g1s_1.j1s() + '<' + this.h1s_1.o() + '>';
  }
  protoOf(ContextDescriptor).j1s = function () {
    return this.i1s_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.g1s_1, another.g1s_1) && another.h1s_1.equals(this.h1s_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.h1s_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.i1s_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.h1s_1) + ', original: ' + toString(this.g1s_1) + ')';
  };
  protoOf(ContextDescriptor).k1s = function () {
    return this.g1s_1.k1s();
  };
  protoOf(ContextDescriptor).c1s = function () {
    return this.g1s_1.c1s();
  };
  protoOf(ContextDescriptor).l1s = function () {
    return this.g1s_1.l1s();
  };
  protoOf(ContextDescriptor).m1s = function () {
    return this.g1s_1.m1s();
  };
  protoOf(ContextDescriptor).n1s = function () {
    return this.g1s_1.n1s();
  };
  protoOf(ContextDescriptor).o1s = function (index) {
    return this.g1s_1.o1s(index);
  };
  protoOf(ContextDescriptor).p1s = function (name) {
    return this.g1s_1.p1s(name);
  };
  protoOf(ContextDescriptor).q1s = function (index) {
    return this.g1s_1.q1s(index);
  };
  protoOf(ContextDescriptor).r1s = function (index) {
    return this.g1s_1.r1s(index);
  };
  protoOf(ContextDescriptor).s1s = function (index) {
    return this.g1s_1.s1s(index);
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.u1s_1 = $this_elementNames;
    this.t1s_1 = $this_elementNames.m1s();
  }
  protoOf(elementNames$1).u = function () {
    return this.t1s_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.u1s_1.m1s();
    var _unary__edvuaz = this.t1s_1;
    this.t1s_1 = _unary__edvuaz - 1 | 0;
    return this.u1s_1.o1s(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.v1s_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.v1s_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.x1s_1 = $this_elementDescriptors;
    this.w1s_1 = $this_elementDescriptors.m1s();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.w1s_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.x1s_1.m1s();
    var _unary__edvuaz = this.w1s_1;
    this.w1s_1 = _unary__edvuaz - 1 | 0;
    return this.x1s_1.r1s(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.y1s_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.y1s_1);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.g1r_1.d1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.d1r_1 = serialName;
    this.e1r_1 = false;
    this.f1r_1 = emptyList();
    this.g1r_1 = ArrayList_init_$Create$_0();
    this.h1r_1 = HashSet_init_$Create$();
    this.i1r_1 = ArrayList_init_$Create$_0();
    this.j1r_1 = ArrayList_init_$Create$_0();
    this.k1r_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).z1s = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.h1r_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.d1r_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.g1r_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.i1r_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.j1r_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.k1r_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).l1r = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.z1s(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.z1s.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.l1t_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.m1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.k1t_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 8);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.a1t_1 = serialName;
    this.b1t_1 = kind;
    this.c1t_1 = elementsCount;
    this.d1t_1 = builder.f1r_1;
    this.e1t_1 = toHashSet(builder.g1r_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.g1r_1;
    tmp.f1t_1 = copyToArray(this_0);
    this.g1t_1 = compactArray(builder.i1r_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.j1r_1;
    tmp_0.h1t_1 = copyToArray(this_1);
    this.i1t_1 = toBooleanArray(builder.k1r_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.f1t_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.de_1, item.ce_1);
      destination.b1(tmp$ret$4);
    }
    tmp_1.j1t_1 = toMap(destination);
    this.k1t_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.l1t_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).j1s = function () {
    return this.a1t_1;
  };
  protoOf(SerialDescriptorImpl).k1s = function () {
    return this.b1t_1;
  };
  protoOf(SerialDescriptorImpl).m1s = function () {
    return this.c1t_1;
  };
  protoOf(SerialDescriptorImpl).n1s = function () {
    return this.d1t_1;
  };
  protoOf(SerialDescriptorImpl).m1t = function () {
    return this.e1t_1;
  };
  protoOf(SerialDescriptorImpl).o1s = function (index) {
    return getChecked(this.f1t_1, index);
  };
  protoOf(SerialDescriptorImpl).p1s = function (name) {
    var tmp0_elvis_lhs = this.j1t_1.p2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).q1s = function (index) {
    return getChecked(this.h1t_1, index);
  };
  protoOf(SerialDescriptorImpl).r1s = function (index) {
    return getChecked(this.g1t_1, index);
  };
  protoOf(SerialDescriptorImpl).s1s = function (index) {
    return getChecked_0(this.i1t_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j1s() === other.j1s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.k1t_1, other.k1t_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m1s() === other.m1s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.m1s();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.r1s(index).j1s() === other.r1s(index).j1s())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.r1s(index).k1s(), other.r1s(index).k1s())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.g1r_1.d1(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).n1t = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).o1t = function () {
    return true;
  };
  protoOf(AbstractDecoder).p1t = function () {
    return null;
  };
  protoOf(AbstractDecoder).q1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).r1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).s1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).t1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u1t = function () {
    var tmp = this.n1t();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x1t = function () {
    var tmp = this.n1t();
    return tmp instanceof Char ? tmp.u1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).y1t = function () {
    var tmp = this.n1t();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z1t = function (enumDescriptor) {
    var tmp = this.n1t();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a1u = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).b1u = function (deserializer, previousValue) {
    return this.c1u(deserializer);
  };
  protoOf(AbstractDecoder).d1u = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).e1u = function (descriptor) {
  };
  protoOf(AbstractDecoder).f1u = function (descriptor, index) {
    return this.q1t();
  };
  protoOf(AbstractDecoder).g1u = function (descriptor, index) {
    return this.r1t();
  };
  protoOf(AbstractDecoder).h1u = function (descriptor, index) {
    return this.s1t();
  };
  protoOf(AbstractDecoder).i1u = function (descriptor, index) {
    return this.t1t();
  };
  protoOf(AbstractDecoder).j1u = function (descriptor, index) {
    return this.u1t();
  };
  protoOf(AbstractDecoder).k1u = function (descriptor, index) {
    return this.v1t();
  };
  protoOf(AbstractDecoder).l1u = function (descriptor, index) {
    return this.w1t();
  };
  protoOf(AbstractDecoder).m1u = function (descriptor, index) {
    return this.x1t();
  };
  protoOf(AbstractDecoder).n1u = function (descriptor, index) {
    return this.y1t();
  };
  protoOf(AbstractDecoder).o1u = function (descriptor, index) {
    return this.a1u(descriptor.r1s(index));
  };
  protoOf(AbstractDecoder).p1u = function (descriptor, index, deserializer, previousValue) {
    return this.b1u(deserializer, previousValue);
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).d1u = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).e1u = function (descriptor) {
  };
  protoOf(AbstractEncoder).v1u = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).w1u = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).x1u = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).y1u = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).z1u = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).a1v = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).b1v = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).c1v = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).d1v = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).e1v = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).f1v = function (value) {
    return this.w1u(new Char(value));
  };
  protoOf(AbstractEncoder).g1v = function (value) {
    return this.w1u(value);
  };
  protoOf(AbstractEncoder).h1v = function (enumDescriptor, index) {
    return this.w1u(index);
  };
  protoOf(AbstractEncoder).i1v = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).j1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.y1u(value);
    }
  };
  protoOf(AbstractEncoder).k1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.z1u(value);
    }
  };
  protoOf(AbstractEncoder).l1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.a1v(value);
    }
  };
  protoOf(AbstractEncoder).m1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.b1v(value);
    }
  };
  protoOf(AbstractEncoder).n1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.c1v(value);
    }
  };
  protoOf(AbstractEncoder).o1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.d1v(value);
    }
  };
  protoOf(AbstractEncoder).p1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.e1v(value);
    }
  };
  protoOf(AbstractEncoder).q1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.f1v(value);
    }
  };
  protoOf(AbstractEncoder).r1v = function (descriptor, index, value) {
    if (this.v1u(descriptor, index)) {
      this.g1v(value);
    }
  };
  protoOf(AbstractEncoder).s1v = function (descriptor, index) {
    return this.v1u(descriptor, index) ? this.i1v(descriptor.r1s(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).t1v = function (descriptor, index, serializer, value) {
    if (this.v1u(descriptor, index)) {
      this.u1v(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.n1u($this.x1q(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.q1u($this.x1q(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).p1r = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.x1q();
    var composite = encoder.d1u(descriptor);
    composite.r1v(this.x1q(), 0, actualSerializer.x1q().j1s());
    var tmp = this.x1q();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.t1v(tmp, 1, tmp$ret$2, value);
    composite.e1u(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).y1q = function (encoder, value) {
    return this.p1r(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).z1q = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.x1q();
    var composite = decoder.d1u(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.s1u()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.t1u(this.x1q());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.n1u(this.x1q(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.q1u(this.x1q(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.e1u(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).a1r = function (decoder, klassName) {
    return decoder.r1u().y1v(this.b1r(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).c1r = function (encoder, value) {
    return encoder.r1u().z1v(this.b1r(), value);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    throwSubtypeNotRegistered(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.a1w_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).x1q = function () {
    return this.a1w_1;
  };
  protoOf(NothingSerializer_0).b1w = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).y1q = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.b1w(encoder, tmp);
  };
  protoOf(NothingSerializer_0).z1q = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.c1w_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).x1q = function () {
    return this.c1w_1;
  };
  protoOf(DurationSerializer).d1w = function (encoder, value) {
    encoder.g1v(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).y1q = function (encoder, value) {
    return this.d1w(encoder, value instanceof Duration ? value.ck_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).e1w = function (decoder) {
    return Companion_getInstance().dk(decoder.y1t());
  };
  protoOf(DurationSerializer).z1q = function (decoder) {
    return new Duration(this.e1w(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.f1w_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).x1q = function () {
    return this.f1w_1;
  };
  protoOf(InstantSerializer).g1w = function (encoder, value) {
    encoder.g1v(value.toString());
  };
  protoOf(InstantSerializer).y1q = function (encoder, value) {
    return this.g1w(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).z1q = function (decoder) {
    return Companion_getInstance_0().pk(decoder.y1t());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.h1w_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).x1q = function () {
    return this.h1w_1;
  };
  protoOf(UuidSerializer).i1w = function (encoder, value) {
    encoder.g1v(value.toString());
  };
  protoOf(UuidSerializer).y1q = function (encoder, value) {
    return this.i1w(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).z1q = function (decoder) {
    return Companion_getInstance_1().vl(decoder.y1t());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).j1s = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).j1s = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).j1s = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).j1s = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.l1w_1 = elementDescriptor;
    this.m1w_1 = 1;
  }
  protoOf(ListLikeDescriptor).k1s = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).m1s = function () {
    return this.m1w_1;
  };
  protoOf(ListLikeDescriptor).o1s = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).p1s = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).s1s = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.j1s() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).q1s = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.j1s() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).r1s = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.j1s() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.l1w_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.l1w_1, other.l1w_1) && this.j1s() === other.j1s())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.l1w_1), 31) + getStringHashCode(this.j1s()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.j1s() + '(' + toString(this.l1w_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.r1w_1 = serialName;
    this.s1w_1 = keyDescriptor;
    this.t1w_1 = valueDescriptor;
    this.u1w_1 = 2;
  }
  protoOf(MapLikeDescriptor).j1s = function () {
    return this.r1w_1;
  };
  protoOf(MapLikeDescriptor).k1s = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).m1s = function () {
    return this.u1w_1;
  };
  protoOf(MapLikeDescriptor).o1s = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).p1s = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).s1s = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.j1s() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).q1s = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.j1s() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).r1s = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.j1s() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.s1w_1;
        break;
      case 1:
        tmp = this.t1w_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.j1s() === other.j1s()))
      return false;
    if (!equals(this.s1w_1, other.s1w_1))
      return false;
    if (!equals(this.t1w_1, other.t1w_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.j1s());
    result = imul(31, result) + hashCode(this.s1w_1) | 0;
    result = imul(31, result) + hashCode(this.t1w_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.j1s() + '(' + toString(this.s1w_1) + ', ' + toString(this.t1w_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.z1w_1 = primitive.j1s() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).j1s = function () {
    return this.z1w_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.b1x_1 = new ArrayListClassDesc(element.x1q());
  }
  protoOf(ArrayListSerializer).x1q = function () {
    return this.b1x_1;
  };
  protoOf(ArrayListSerializer).c1x = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).d1x = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ArrayListSerializer).e1x = function (_this__u8e3s4) {
    return this.d1x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).f1x = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).g1x = function (_this__u8e3s4) {
    return this.f1x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).h1x = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).i1x = function (_this__u8e3s4) {
    return this.h1x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).j1x = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i5(size);
  };
  protoOf(ArrayListSerializer).k1x = function (_this__u8e3s4, size) {
    return this.j1x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).l1x = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.u2(index, element);
  };
  protoOf(ArrayListSerializer).m1x = function (_this__u8e3s4, index, element) {
    return this.l1x(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.x1x_1 = new HashSetClassDesc(eSerializer.x1q());
  }
  protoOf(HashSetSerializer).x1q = function () {
    return this.x1x_1;
  };
  protoOf(HashSetSerializer).c1x = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).y1x = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashSetSerializer).e1x = function (_this__u8e3s4) {
    return this.y1x(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).z1x = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).g1x = function (_this__u8e3s4) {
    return this.z1x(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).a1y = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).i1x = function (_this__u8e3s4) {
    return this.a1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).b1y = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).k1x = function (_this__u8e3s4, size) {
    return this.b1y(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).c1y = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).m1x = function (_this__u8e3s4, index, element) {
    return this.c1y(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.e1y_1 = new LinkedHashSetClassDesc(eSerializer.x1q());
  }
  protoOf(LinkedHashSetSerializer).x1q = function () {
    return this.e1y_1;
  };
  protoOf(LinkedHashSetSerializer).c1x = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).f1y = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashSetSerializer).e1x = function (_this__u8e3s4) {
    return this.f1y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).g1y = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).g1x = function (_this__u8e3s4) {
    return this.g1y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).a1y = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).i1x = function (_this__u8e3s4) {
    return this.a1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).h1y = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).k1x = function (_this__u8e3s4, size) {
    return this.h1y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).i1y = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).m1x = function (_this__u8e3s4, index, element) {
    return this.i1y(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.l1y_1 = new HashMapClassDesc(kSerializer.x1q(), vSerializer.x1q());
  }
  protoOf(HashMapSerializer).x1q = function () {
    return this.l1y_1;
  };
  protoOf(HashMapSerializer).m1y = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(HashMapSerializer).n1y = function (_this__u8e3s4) {
    return this.m1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).o1y = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.k1().t();
  };
  protoOf(HashMapSerializer).p1y = function (_this__u8e3s4) {
    return this.o1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).c1x = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).q1y = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(HashMapSerializer).e1x = function (_this__u8e3s4) {
    return this.q1y(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).r1y = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).g1x = function (_this__u8e3s4) {
    return this.r1y(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).s1y = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).i1x = function (_this__u8e3s4) {
    return this.s1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t1y = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).k1x = function (_this__u8e3s4, size) {
    return this.t1y(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.a1z_1 = new LinkedHashMapClassDesc(kSerializer.x1q(), vSerializer.x1q());
  }
  protoOf(LinkedHashMapSerializer).x1q = function () {
    return this.a1z_1;
  };
  protoOf(LinkedHashMapSerializer).m1y = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(LinkedHashMapSerializer).n1y = function (_this__u8e3s4) {
    return this.m1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).o1y = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.k1().t();
  };
  protoOf(LinkedHashMapSerializer).p1y = function (_this__u8e3s4) {
    return this.o1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).c1x = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).b1z = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.d1(), 2);
  };
  protoOf(LinkedHashMapSerializer).e1x = function (_this__u8e3s4) {
    return this.b1z(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).c1z = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).g1x = function (_this__u8e3s4) {
    return this.c1z(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).s1y = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).i1x = function (_this__u8e3s4) {
    return this.s1y((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).d1z = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).k1x = function (_this__u8e3s4, size) {
    return this.d1z(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.f1z_1 = kClass;
    this.g1z_1 = new ArrayClassDesc(eSerializer.x1q());
  }
  protoOf(ReferenceArraySerializer).x1q = function () {
    return this.g1z_1;
  };
  protoOf(ReferenceArraySerializer).h1z = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).n1y = function (_this__u8e3s4) {
    return this.h1z((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).i1z = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).p1y = function (_this__u8e3s4) {
    return this.i1z((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).c1x = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).j1z = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(ReferenceArraySerializer).e1x = function (_this__u8e3s4) {
    return this.j1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).k1z = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.f1z_1);
  };
  protoOf(ReferenceArraySerializer).g1x = function (_this__u8e3s4) {
    return this.k1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).l1z = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).i1x = function (_this__u8e3s4) {
    return this.l1z((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).m1z = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i5(size);
  };
  protoOf(ReferenceArraySerializer).k1x = function (_this__u8e3s4, size) {
    return this.m1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).n1z = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.u2(index, element);
  };
  protoOf(ReferenceArraySerializer).m1x = function (_this__u8e3s4, index, element) {
    return this.n1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).o1x = function (_this__u8e3s4) {
    return _this__u8e3s4.d1();
  };
  protoOf(CollectionSerializer).n1y = function (_this__u8e3s4) {
    return this.o1x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).p1x = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).p1y = function (_this__u8e3s4) {
    return this.p1x((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.u1y_1 = keySerializer;
    this.v1y_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).w1y = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.p1_1;
    var last = progression.q1_1;
    var step_0 = progression.r1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.x1y(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).s1x = function (decoder, builder, startIndex, size) {
    return this.w1y(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).x1y = function (decoder, index, builder, checkIndex) {
    var key = decoder.q1u(this.x1q(), index, this.u1y_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.t1u(this.x1q());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.n2(key)) {
      var tmp_2 = this.v1y_1.x1q().k1s();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.p1u(this.x1q(), vIndex, this.v1y_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.q1u(this.x1q(), vIndex, this.v1y_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.w2(key, value);
  };
  protoOf(MapLikeSerializer).t1x = function (decoder, index, builder, checkIndex) {
    return this.x1y(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).r1x = function (encoder, value) {
    var size = this.n1y(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.x1q();
    var composite = encoder.w1v(descriptor, size);
    var iterator = this.p1y(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.m1();
      var tmp = this.x1q();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.t1v(tmp, _unary__edvuaz, this.u1y_1, k);
      var tmp_0 = this.x1q();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.t1v(tmp_0, _unary__edvuaz_0, this.v1y_1, v);
    }
    composite.e1u(descriptor);
  };
  protoOf(MapLikeSerializer).y1q = function (encoder, value) {
    return this.r1x(encoder, value);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.q1x_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).r1x = function (encoder, value) {
    var size = this.n1y(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.x1q();
    var composite = encoder.w1v(descriptor, size);
    var iterator = this.p1y(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.t1v(this.x1q(), index, this.q1x_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.e1u(descriptor);
  };
  protoOf(CollectionLikeSerializer).y1q = function (encoder, value) {
    return this.r1x(encoder, value);
  };
  protoOf(CollectionLikeSerializer).s1x = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.t1x(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).t1x = function (decoder, index, builder, checkIndex) {
    this.m1x(builder, index, decoder.q1u(this.x1q(), index, this.q1x_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.u1u($this.x1q());
    $this.k1x(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).v1x = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.i1x(previous);
    var builder = tmp1_elvis_lhs == null ? this.c1x() : tmp1_elvis_lhs;
    var startIndex = this.e1x(builder);
    var compositeDecoder = decoder.d1u(this.x1q());
    if (compositeDecoder.s1u()) {
      this.s1x(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.t1u(this.x1q());
        if (index === -1)
          break $l$loop;
        this.u1x(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.e1u(this.x1q());
    return this.g1x(builder);
  };
  protoOf(AbstractCollectionSerializer).z1q = function (decoder) {
    return this.v1x(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).u1x = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.t1x(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.t1x.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.p1z_1 = new PrimitiveArrayDescriptor(primitiveSerializer.x1q());
  }
  protoOf(PrimitiveArraySerializer).x1q = function () {
    return this.p1z_1;
  };
  protoOf(PrimitiveArraySerializer).q1z = function (_this__u8e3s4) {
    return _this__u8e3s4.r1z();
  };
  protoOf(PrimitiveArraySerializer).e1x = function (_this__u8e3s4) {
    return this.q1z(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).s1z = function (_this__u8e3s4) {
    return _this__u8e3s4.t1z();
  };
  protoOf(PrimitiveArraySerializer).g1x = function (_this__u8e3s4) {
    return this.s1z(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).u1z = function (_this__u8e3s4, size) {
    return _this__u8e3s4.v1z(size);
  };
  protoOf(PrimitiveArraySerializer).k1x = function (_this__u8e3s4, size) {
    return this.u1z(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).w1z = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).p1y = function (_this__u8e3s4) {
    return this.w1z(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).x1z = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).m1x = function (_this__u8e3s4, index, element) {
    return this.x1z(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).c1x = function () {
    return this.i1x(this.y1z());
  };
  protoOf(PrimitiveArraySerializer).b20 = function (encoder, value) {
    var size = this.n1y(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.p1z_1;
    var composite = encoder.w1v(descriptor, size);
    this.a20(composite, value, size);
    composite.e1u(descriptor);
  };
  protoOf(PrimitiveArraySerializer).y1q = function (encoder, value) {
    return this.b20(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).r1x = function (encoder, value) {
    return this.b20(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).z1q = function (decoder) {
    return this.v1x(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).c20 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.r1z() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.v1z(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.v1z.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.d20_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.h20_1[slot] = bitwiseOr($this.h20_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.h20_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.h20_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.f20_1($this.e20_1, index)) {
            $this.h20_1[slot] = slotMarks;
            return index;
          }
        }
        $this.h20_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.e20_1 = descriptor;
    this.f20_1 = readIfAbsent;
    var elementsCount = this.e20_1.m1s();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.g20_1 = tmp_0;
      this.h20_1 = Companion_getInstance_8().d20_1;
    } else {
      this.g20_1 = new Long(0, 0);
      this.h20_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).i20 = function (index) {
    if (index < 64) {
      this.g20_1 = bitwiseOr(this.g20_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).j20 = function () {
    var elementsCount = this.e20_1.m1s();
    while (!equalsLong(this.g20_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.g20_1));
      this.g20_1 = bitwiseOr(this.g20_1, shiftLeft(new Long(1, 0), index));
      if (this.f20_1(this.e20_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.k20_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.k20_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.z20(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.l20_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.x1q();
    }, 1, 0, 9);
  }
  function EnumSerializer(serialName, values) {
    this.k20_1 = values;
    this.l20_1 = null;
    var tmp = this;
    tmp.m20_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).x1q = function () {
    var tmp0 = this.m20_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.m1();
  };
  protoOf(EnumSerializer).a21 = function (encoder, value) {
    var index = indexOf(this.k20_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.x1q().j1s() + ', ' + ('must be one of ' + contentToString(this.k20_1)));
    }
    encoder.h1v(this.x1q(), index);
  };
  protoOf(EnumSerializer).y1q = function (encoder, value) {
    return this.a21(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).z1q = function (decoder) {
    var index = decoder.z1t(this.x1q());
    if (!(0 <= index ? index <= (this.k20_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.x1q().j1s() + ' enum values, ' + ('values size is ' + this.k20_1.length));
    }
    return this.k20_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.x1q().j1s() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.o21_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.m1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.o1s(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 10);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.n21_1 = ENUM_getInstance();
    var tmp = this;
    tmp.o21_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).k1s = function () {
    return this.n21_1;
  };
  protoOf(EnumDescriptor).r1s = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.k1s() === ENUM_getInstance()))
      return false;
    if (!(this.j1s() === other.j1s()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.j1s() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.j1s());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.d22_1 = true;
  }
  protoOf(InlineClassDescriptor).l1s = function () {
    return this.d22_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j1s() === other.j1s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.d22_1 && contentEquals(this.p21(), other.p21()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m1s() === other.m1s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.m1s();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.r1s(index).j1s() === other.r1s(index).j1s())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.r1s(index).k1s(), other.r1s(index).k1s())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.e22_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).f22 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.e22_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).x1q = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).y1q = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).z1q = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.w1r(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.h22_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).r1u = function () {
    return this.h22_1;
  };
  protoOf(NoOpEncoder).w1u = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).x1u = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).y1u = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).z1u = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).a1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).b1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g1v = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).h1v = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.i22_1 = OBJECT_getInstance();
    this.j22_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).k1s = function () {
    return this.i22_1;
  };
  protoOf(NothingSerialDescriptor).j1s = function () {
    return this.j22_1;
  };
  protoOf(NothingSerialDescriptor).m1s = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).o1s = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).p1s = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s1s = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).r1s = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q1s = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.j22_1) + imul(31, this.i22_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.k22_1 = serializer;
    this.l22_1 = new SerialDescriptorForNullable(this.k22_1.x1q());
  }
  protoOf(NullableSerializer).x1q = function () {
    return this.l22_1;
  };
  protoOf(NullableSerializer).m22 = function (encoder, value) {
    if (!(value == null)) {
      encoder.v1v();
      encoder.u1v(this.k22_1, value);
    } else {
      encoder.x1u();
    }
  };
  protoOf(NullableSerializer).y1q = function (encoder, value) {
    return this.m22(encoder, value);
  };
  protoOf(NullableSerializer).z1q = function (decoder) {
    return decoder.o1t() ? decoder.c1u(this.k22_1) : decoder.p1t();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.k22_1, other.k22_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.k22_1);
  };
  function SerialDescriptorForNullable(original) {
    this.d1s_1 = original;
    this.e1s_1 = this.d1s_1.j1s() + '?';
    this.f1s_1 = cachedSerialNames(this.d1s_1);
  }
  protoOf(SerialDescriptorForNullable).j1s = function () {
    return this.e1s_1;
  };
  protoOf(SerialDescriptorForNullable).m1t = function () {
    return this.f1s_1;
  };
  protoOf(SerialDescriptorForNullable).c1s = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.d1s_1, other.d1s_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.d1s_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.d1s_1), 31);
  };
  protoOf(SerialDescriptorForNullable).k1s = function () {
    return this.d1s_1.k1s();
  };
  protoOf(SerialDescriptorForNullable).l1s = function () {
    return this.d1s_1.l1s();
  };
  protoOf(SerialDescriptorForNullable).m1s = function () {
    return this.d1s_1.m1s();
  };
  protoOf(SerialDescriptorForNullable).n1s = function () {
    return this.d1s_1.n1s();
  };
  protoOf(SerialDescriptorForNullable).o1s = function (index) {
    return this.d1s_1.o1s(index);
  };
  protoOf(SerialDescriptorForNullable).p1s = function (name) {
    return this.d1s_1.p1s(name);
  };
  protoOf(SerialDescriptorForNullable).q1s = function (index) {
    return this.d1s_1.q1s(index);
  };
  protoOf(SerialDescriptorForNullable).r1s = function (index) {
    return this.d1s_1.r1s(index);
  };
  protoOf(SerialDescriptorForNullable).s1s = function (index) {
    return this.d1s_1.s1s(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.f1r_1 = this$0.o22_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.x1q();
    }, 1, 0, 11);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.n22_1 = objectInstance;
    this.o22_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p22_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).x1q = function () {
    var tmp0 = this.p22_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.m1();
  };
  protoOf(ObjectSerializer).p1r = function (encoder, value) {
    encoder.d1u(this.x1q()).e1u(this.x1q());
  };
  protoOf(ObjectSerializer).y1q = function (encoder, value) {
    return this.p1r(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).z1q = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.x1q();
    var composite = decoder.d1u(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.s1u()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.t1u(this.x1q());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.e1u(descriptor);
    return this.n22_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.ei_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ei_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.m1t();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.m1s());
    var inductionVariable = 0;
    var last = _this__u8e3s4.m1s();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.o1s(i);
        result.b1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.o1s(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.j1s());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.w20_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.m1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.y20_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.m1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.r20_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.r20_1[i];
        indices.w2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.o20_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f22();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 12);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.o20_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g22();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.x1q();
          destination.b1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.p21();
    }, 1, 0, 13);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.p21());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 14);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.n20_1 = serialName;
    this.o20_1 = generatedSerializer;
    this.p20_1 = elementsCount;
    this.q20_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.p20_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.r20_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.p20_1;
    tmp_3.s20_1 = Array(size);
    this.t20_1 = null;
    this.u20_1 = booleanArray(this.p20_1);
    this.v20_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.w20_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.x20_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.y20_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).j1s = function () {
    return this.n20_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).m1s = function () {
    return this.p20_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).k1s = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).n1s = function () {
    var tmp0_elvis_lhs = this.t20_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).m1t = function () {
    return this.v20_1.q2();
  };
  protoOf(PluginGeneratedSerialDescriptor).p21 = function () {
    var tmp0 = this.x20_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).q21 = function (name, isOptional) {
    this.q20_1 = this.q20_1 + 1 | 0;
    this.r20_1[this.q20_1] = name;
    this.u20_1[this.q20_1] = isOptional;
    this.s20_1[this.q20_1] = null;
    if (this.q20_1 === (this.p20_1 - 1 | 0)) {
      this.v20_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).z20 = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.q21(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.q21.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).r1s = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).x1q();
  };
  protoOf(PluginGeneratedSerialDescriptor).s1s = function (index) {
    return getChecked_0(this.u20_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).q1s = function (index) {
    var tmp0_elvis_lhs = getChecked(this.s20_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).o1s = function (index) {
    return getChecked(this.r20_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).p1s = function (name) {
    var tmp0_elvis_lhs = this.v20_1.p2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.j1s() === other.j1s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.p21(), other.p21())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m1s() === other.m1s())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.m1s();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.r1s(index).j1s() === other.r1s(index).j1s())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.r1s(index).k1s(), other.r1s(index).k1s())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.j1s());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.j1s();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.k1s();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.m1s());
    var tmp_0 = _this__u8e3s4.j1s() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.o1s(i) + ': ' + $this_toStringImpl.r1s(i).j1s();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).t22 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.t22((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).u22 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.u22((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).y1z = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).v22 = function (decoder, index, builder, checkIndex) {
    builder.y22(decoder.m1u(this.p1z_1, index));
  };
  protoOf(CharArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.v22(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.v22(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).z22 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).a20 = function (encoder, content, size) {
    return this.z22(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).c23 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.c23((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).d23 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.d23((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).y1z = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).e23 = function (decoder, index, builder, checkIndex) {
    builder.h23(decoder.l1u(this.p1z_1, index));
  };
  protoOf(DoubleArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.e23(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.e23(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).i23 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).a20 = function (encoder, content, size) {
    return this.i23(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).l23 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.l23((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).m23 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.m23((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).y1z = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).n23 = function (decoder, index, builder, checkIndex) {
    builder.q23(decoder.k1u(this.p1z_1, index));
  };
  protoOf(FloatArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.n23(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.n23(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).r23 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).a20 = function (encoder, content, size) {
    return this.r23(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).u23 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.u23((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).v23 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.v23((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).y1z = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).w23 = function (decoder, index, builder, checkIndex) {
    builder.z23(decoder.j1u(this.p1z_1, index));
  };
  protoOf(LongArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.w23(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.w23(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).a24 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).a20 = function (encoder, content, size) {
    return this.a24(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).d24 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.d24(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.dn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).e24 = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.e24(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.dn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).f24 = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).y1z = function () {
    return new ULongArray(this.f24());
  };
  protoOf(ULongArraySerializer_0).g24 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.o1u(this.p1z_1, index).u1t();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.j24(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.g24(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.g24(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).k24 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.s1v(this.p1z_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.c1v(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).a20 = function (encoder, content, size) {
    return this.k24(encoder, content instanceof ULongArray ? content.dn_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).n24 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.n24((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).o24 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.o24((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).y1z = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).p24 = function (decoder, index, builder, checkIndex) {
    builder.s24(decoder.i1u(this.p1z_1, index));
  };
  protoOf(IntArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.p24(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.p24(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).t24 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.m1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).a20 = function (encoder, content, size) {
    return this.t24(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).w24 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.w24(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.tm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).x24 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.x24(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.tm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).y24 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).y1z = function () {
    return new UIntArray(this.y24());
  };
  protoOf(UIntArraySerializer_0).z24 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.o1u(this.p1z_1, index).t1t();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.c25(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.z24(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.z24(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).d25 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.s1v(this.p1z_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.b1v(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).a20 = function (encoder, content, size) {
    return this.d25(encoder, content instanceof UIntArray ? content.tm_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).g25 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.g25((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).h25 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.h25((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).y1z = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).i25 = function (decoder, index, builder, checkIndex) {
    builder.l25(decoder.h1u(this.p1z_1, index));
  };
  protoOf(ShortArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.i25(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.i25(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).m25 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.l1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).a20 = function (encoder, content, size) {
    return this.m25(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).p25 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.p25(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.nn_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).q25 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.q25(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.nn_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).r25 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).y1z = function () {
    return new UShortArray(this.r25());
  };
  protoOf(UShortArraySerializer_0).s25 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.o1u(this.p1z_1, index).s1t();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.v25(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.s25(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.s25(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).w25 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.s1v(this.p1z_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.a1v(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).a20 = function (encoder, content, size) {
    return this.w25(encoder, content instanceof UShortArray ? content.nn_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).z25 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.z25((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).a26 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.a26((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).y1z = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).b26 = function (decoder, index, builder, checkIndex) {
    builder.e26(decoder.g1u(this.p1z_1, index));
  };
  protoOf(ByteArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.b26(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.b26(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).f26 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.k1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).a20 = function (encoder, content, size) {
    return this.f26(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).i26 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.i26(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.jm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).j26 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.j26(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.jm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).k26 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).y1z = function () {
    return new UByteArray(this.k26());
  };
  protoOf(UByteArraySerializer_0).l26 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.o1u(this.p1z_1, index).r1t();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.o26(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.l26(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.l26(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).p26 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.s1v(this.p1z_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.z1u(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).a20 = function (encoder, content, size) {
    return this.p26(encoder, content instanceof UByteArray ? content.jm_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).s26 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).n1y = function (_this__u8e3s4) {
    return this.s26((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).t26 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).i1x = function (_this__u8e3s4) {
    return this.t26((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).y1z = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).u26 = function (decoder, index, builder, checkIndex) {
    builder.x26(decoder.f1u(this.p1z_1, index));
  };
  protoOf(BooleanArraySerializer_0).t1x = function (decoder, index, builder, checkIndex) {
    return this.u26(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).z1z = function (decoder, index, builder, checkIndex) {
    return this.u26(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).y26 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.j1v(this.p1z_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).a20 = function (encoder, content, size) {
    return this.y26(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w22_1 = bufferWithData;
    this.x22_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(CharArrayBuilder).r1z = function () {
    return this.x22_1;
  };
  protoOf(CharArrayBuilder).v1z = function (requiredCapacity) {
    if (this.w22_1.length < requiredCapacity)
      this.w22_1 = copyOf(this.w22_1, coerceAtLeast(requiredCapacity, imul(this.w22_1.length, 2)));
  };
  protoOf(CharArrayBuilder).y22 = function (c) {
    this.c20();
    var tmp = this.w22_1;
    var _unary__edvuaz = this.x22_1;
    this.x22_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).t1z = function () {
    return copyOf(this.w22_1, this.x22_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f23_1 = bufferWithData;
    this.g23_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(DoubleArrayBuilder).r1z = function () {
    return this.g23_1;
  };
  protoOf(DoubleArrayBuilder).v1z = function (requiredCapacity) {
    if (this.f23_1.length < requiredCapacity)
      this.f23_1 = copyOf_0(this.f23_1, coerceAtLeast(requiredCapacity, imul(this.f23_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).h23 = function (c) {
    this.c20();
    var tmp = this.f23_1;
    var _unary__edvuaz = this.g23_1;
    this.g23_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).t1z = function () {
    return copyOf_0(this.f23_1, this.g23_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o23_1 = bufferWithData;
    this.p23_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(FloatArrayBuilder).r1z = function () {
    return this.p23_1;
  };
  protoOf(FloatArrayBuilder).v1z = function (requiredCapacity) {
    if (this.o23_1.length < requiredCapacity)
      this.o23_1 = copyOf_1(this.o23_1, coerceAtLeast(requiredCapacity, imul(this.o23_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).q23 = function (c) {
    this.c20();
    var tmp = this.o23_1;
    var _unary__edvuaz = this.p23_1;
    this.p23_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).t1z = function () {
    return copyOf_1(this.o23_1, this.p23_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x23_1 = bufferWithData;
    this.y23_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(LongArrayBuilder).r1z = function () {
    return this.y23_1;
  };
  protoOf(LongArrayBuilder).v1z = function (requiredCapacity) {
    if (this.x23_1.length < requiredCapacity)
      this.x23_1 = copyOf_2(this.x23_1, coerceAtLeast(requiredCapacity, imul(this.x23_1.length, 2)));
  };
  protoOf(LongArrayBuilder).z23 = function (c) {
    this.c20();
    var tmp = this.x23_1;
    var _unary__edvuaz = this.y23_1;
    this.y23_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).t1z = function () {
    return copyOf_2(this.x23_1, this.y23_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h24_1 = bufferWithData;
    this.i24_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.v1z(10);
  }
  protoOf(ULongArrayBuilder).r1z = function () {
    return this.i24_1;
  };
  protoOf(ULongArrayBuilder).v1z = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.h24_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.h24_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.h24_1), 2));
      tmp.h24_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).j24 = function (c) {
    this.c20();
    var tmp = this.h24_1;
    var _unary__edvuaz = this.i24_1;
    this.i24_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).z26 = function () {
    var tmp0 = this.h24_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.i24_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).t1z = function () {
    return new ULongArray(this.z26());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q24_1 = bufferWithData;
    this.r24_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(IntArrayBuilder).r1z = function () {
    return this.r24_1;
  };
  protoOf(IntArrayBuilder).v1z = function (requiredCapacity) {
    if (this.q24_1.length < requiredCapacity)
      this.q24_1 = copyOf_3(this.q24_1, coerceAtLeast(requiredCapacity, imul(this.q24_1.length, 2)));
  };
  protoOf(IntArrayBuilder).s24 = function (c) {
    this.c20();
    var tmp = this.q24_1;
    var _unary__edvuaz = this.r24_1;
    this.r24_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).t1z = function () {
    return copyOf_3(this.q24_1, this.r24_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a25_1 = bufferWithData;
    this.b25_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.v1z(10);
  }
  protoOf(UIntArrayBuilder).r1z = function () {
    return this.b25_1;
  };
  protoOf(UIntArrayBuilder).v1z = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.a25_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.a25_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.a25_1), 2));
      tmp.a25_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).c25 = function (c) {
    this.c20();
    var tmp = this.a25_1;
    var _unary__edvuaz = this.b25_1;
    this.b25_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).a27 = function () {
    var tmp0 = this.a25_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.b25_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).t1z = function () {
    return new UIntArray(this.a27());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j25_1 = bufferWithData;
    this.k25_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(ShortArrayBuilder).r1z = function () {
    return this.k25_1;
  };
  protoOf(ShortArrayBuilder).v1z = function (requiredCapacity) {
    if (this.j25_1.length < requiredCapacity)
      this.j25_1 = copyOf_4(this.j25_1, coerceAtLeast(requiredCapacity, imul(this.j25_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).l25 = function (c) {
    this.c20();
    var tmp = this.j25_1;
    var _unary__edvuaz = this.k25_1;
    this.k25_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).t1z = function () {
    return copyOf_4(this.j25_1, this.k25_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t25_1 = bufferWithData;
    this.u25_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.v1z(10);
  }
  protoOf(UShortArrayBuilder).r1z = function () {
    return this.u25_1;
  };
  protoOf(UShortArrayBuilder).v1z = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.t25_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.t25_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.t25_1), 2));
      tmp.t25_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).v25 = function (c) {
    this.c20();
    var tmp = this.t25_1;
    var _unary__edvuaz = this.u25_1;
    this.u25_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).b27 = function () {
    var tmp0 = this.t25_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.u25_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).t1z = function () {
    return new UShortArray(this.b27());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c26_1 = bufferWithData;
    this.d26_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(ByteArrayBuilder).r1z = function () {
    return this.d26_1;
  };
  protoOf(ByteArrayBuilder).v1z = function (requiredCapacity) {
    if (this.c26_1.length < requiredCapacity)
      this.c26_1 = copyOf_5(this.c26_1, coerceAtLeast(requiredCapacity, imul(this.c26_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).e26 = function (c) {
    this.c20();
    var tmp = this.c26_1;
    var _unary__edvuaz = this.d26_1;
    this.d26_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).t1z = function () {
    return copyOf_5(this.c26_1, this.d26_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m26_1 = bufferWithData;
    this.n26_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.v1z(10);
  }
  protoOf(UByteArrayBuilder).r1z = function () {
    return this.n26_1;
  };
  protoOf(UByteArrayBuilder).v1z = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.m26_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m26_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.m26_1), 2));
      tmp.m26_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).o26 = function (c) {
    this.c20();
    var tmp = this.m26_1;
    var _unary__edvuaz = this.n26_1;
    this.n26_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).c27 = function () {
    var tmp0 = this.m26_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n26_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).t1z = function () {
    return new UByteArray(this.c27());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v26_1 = bufferWithData;
    this.w26_1 = bufferWithData.length;
    this.v1z(10);
  }
  protoOf(BooleanArrayBuilder).r1z = function () {
    return this.w26_1;
  };
  protoOf(BooleanArrayBuilder).v1z = function (requiredCapacity) {
    if (this.v26_1.length < requiredCapacity)
      this.v26_1 = copyOf_6(this.v26_1, coerceAtLeast(requiredCapacity, imul(this.v26_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).x26 = function (c) {
    this.c20();
    var tmp = this.v26_1;
    var _unary__edvuaz = this.w26_1;
    this.w26_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).t1z = function () {
    return copyOf_6(this.v26_1, this.w26_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function IntSerializer() {
    IntSerializer_instance = this;
    this.d27_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).x1q = function () {
    return this.d27_1;
  };
  protoOf(IntSerializer).e27 = function (encoder, value) {
    return encoder.b1v(value);
  };
  protoOf(IntSerializer).y1q = function (encoder, value) {
    return this.e27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).z1q = function (decoder) {
    return decoder.t1t();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.f27_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).x1q = function () {
    return this.f27_1;
  };
  protoOf(LongSerializer).g27 = function (encoder, value) {
    return encoder.c1v(value);
  };
  protoOf(LongSerializer).y1q = function (encoder, value) {
    return this.g27(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).z1q = function (decoder) {
    return decoder.u1t();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().p2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.h27_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).x1q = function () {
    return this.h27_1;
  };
  protoOf(StringSerializer).i27 = function (encoder, value) {
    return encoder.g1v(value);
  };
  protoOf(StringSerializer).y1q = function (encoder, value) {
    return this.i27(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).z1q = function (decoder) {
    return decoder.y1t();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.j27_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.j27_1 = serialName;
    this.k27_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).j1s = function () {
    return this.j27_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).k1s = function () {
    return this.k27_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).m1s = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).o1s = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).p1s = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s1s = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).r1s = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q1s = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.j27_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.j27_1 === other.j27_1 && equals(this.k27_1, other.k27_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.j27_1) + imul(31, this.k27_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().r2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.x1q().j1s();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.l27_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).x1q = function () {
    return this.l27_1;
  };
  protoOf(ByteSerializer).m27 = function (encoder, value) {
    return encoder.z1u(value);
  };
  protoOf(ByteSerializer).y1q = function (encoder, value) {
    return this.m27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).z1q = function (decoder) {
    return decoder.r1t();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.n27_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).x1q = function () {
    return this.n27_1;
  };
  protoOf(ShortSerializer).o27 = function (encoder, value) {
    return encoder.a1v(value);
  };
  protoOf(ShortSerializer).y1q = function (encoder, value) {
    return this.o27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).z1q = function (decoder) {
    return decoder.s1t();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.p27_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).x1q = function () {
    return this.p27_1;
  };
  protoOf(CharSerializer).q27 = function (encoder, value) {
    return encoder.f1v(value);
  };
  protoOf(CharSerializer).y1q = function (encoder, value) {
    return this.q27(encoder, value instanceof Char ? value.u1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).r27 = function (decoder) {
    return decoder.x1t();
  };
  protoOf(CharSerializer).z1q = function (decoder) {
    return new Char(this.r27(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.s27_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).x1q = function () {
    return this.s27_1;
  };
  protoOf(DoubleSerializer).t27 = function (encoder, value) {
    return encoder.e1v(value);
  };
  protoOf(DoubleSerializer).y1q = function (encoder, value) {
    return this.t27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).z1q = function (decoder) {
    return decoder.w1t();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.u27_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).x1q = function () {
    return this.u27_1;
  };
  protoOf(FloatSerializer).v27 = function (encoder, value) {
    return encoder.d1v(value);
  };
  protoOf(FloatSerializer).y1q = function (encoder, value) {
    return this.v27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).z1q = function (decoder) {
    return decoder.v1t();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.w27_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).x1q = function () {
    return this.w27_1;
  };
  protoOf(BooleanSerializer).x27 = function (encoder, value) {
    return encoder.y1u(value);
  };
  protoOf(BooleanSerializer).y1q = function (encoder, value) {
    return this.x27(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).z1q = function (decoder) {
    return decoder.q1t();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.y27_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).x1q = function () {
    return this.y27_1.x1q();
  };
  protoOf(UnitSerializer).z27 = function (encoder, value) {
    this.y27_1.p1r(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).y1q = function (encoder, value) {
    return this.z27(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).a28 = function (decoder) {
    this.y27_1.z1q(decoder);
  };
  protoOf(UnitSerializer).z1q = function (decoder) {
    this.a28(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).d28 = function (_this__u8e3s4, index) {
    return this.f28(this.e28(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).f28 = function (nestedName) {
    var tmp0_elvis_lhs = this.i28();
    return this.j28(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).e28 = function (descriptor, index) {
    return descriptor.o1s(index);
  };
  protoOf(NamedValueDecoder).j28 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).k28 = function () {
    return this.g28_1.r() ? '$' : joinToString(this.g28_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.y28(tag);
    var r = block();
    if (!$this.h28_1) {
      $this.z28();
    }
    $this.h28_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.b1u($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.g28_1 = ArrayList_init_$Create$_0();
    this.h28_1 = false;
  }
  protoOf(TaggedDecoder).r1u = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).l28 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).m28 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).n28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r28 = function (tag) {
    var tmp = this.l28(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u28 = function (tag) {
    var tmp = this.l28(tag);
    return tmp instanceof Char ? tmp.u1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).v28 = function (tag) {
    var tmp = this.l28(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w28 = function (tag, enumDescriptor) {
    var tmp = this.l28(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x28 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.y28(tag);
    return this;
  };
  protoOf(TaggedDecoder).b1u = function (deserializer, previousValue) {
    return this.c1u(deserializer);
  };
  protoOf(TaggedDecoder).a1u = function (descriptor) {
    return this.x28(this.z28(), descriptor);
  };
  protoOf(TaggedDecoder).o1t = function () {
    var tmp0_elvis_lhs = this.i28();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.m28(currentTag);
  };
  protoOf(TaggedDecoder).p1t = function () {
    return null;
  };
  protoOf(TaggedDecoder).q1t = function () {
    return this.n28(this.z28());
  };
  protoOf(TaggedDecoder).r1t = function () {
    return this.o28(this.z28());
  };
  protoOf(TaggedDecoder).s1t = function () {
    return this.p28(this.z28());
  };
  protoOf(TaggedDecoder).t1t = function () {
    return this.q28(this.z28());
  };
  protoOf(TaggedDecoder).u1t = function () {
    return this.r28(this.z28());
  };
  protoOf(TaggedDecoder).v1t = function () {
    return this.s28(this.z28());
  };
  protoOf(TaggedDecoder).w1t = function () {
    return this.t28(this.z28());
  };
  protoOf(TaggedDecoder).x1t = function () {
    return this.u28(this.z28());
  };
  protoOf(TaggedDecoder).y1t = function () {
    return this.v28(this.z28());
  };
  protoOf(TaggedDecoder).z1t = function (enumDescriptor) {
    return this.w28(this.z28(), enumDescriptor);
  };
  protoOf(TaggedDecoder).d1u = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).e1u = function (descriptor) {
  };
  protoOf(TaggedDecoder).f1u = function (descriptor, index) {
    return this.n28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).g1u = function (descriptor, index) {
    return this.o28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).h1u = function (descriptor, index) {
    return this.p28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).i1u = function (descriptor, index) {
    return this.q28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).j1u = function (descriptor, index) {
    return this.r28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).k1u = function (descriptor, index) {
    return this.s28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).l1u = function (descriptor, index) {
    return this.t28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).m1u = function (descriptor, index) {
    return this.u28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).n1u = function (descriptor, index) {
    return this.v28(this.d28(descriptor, index));
  };
  protoOf(TaggedDecoder).o1u = function (descriptor, index) {
    return this.x28(this.d28(descriptor, index), descriptor.r1s(index));
  };
  protoOf(TaggedDecoder).p1u = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.d28(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).i28 = function () {
    return lastOrNull(this.g28_1);
  };
  protoOf(TaggedDecoder).y28 = function (name) {
    this.g28_1.b1(name);
  };
  protoOf(TaggedDecoder).z28 = function () {
    var r = this.g28_1.v2(get_lastIndex_0(this.g28_1));
    this.h28_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.a29_1 = key;
    this.b29_1 = value;
  }
  protoOf(MapEntry).l1 = function () {
    return this.a29_1;
  };
  protoOf(MapEntry).m1 = function () {
    return this.b29_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.a29_1) + ', value=' + toString_0(this.b29_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.a29_1 == null ? 0 : hashCode(this.a29_1);
    result = imul(result, 31) + (this.b29_1 == null ? 0 : hashCode(this.b29_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.a29_1, other.a29_1))
      return false;
    if (!equals(this.b29_1, other.b29_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.l1r('key', $keySerializer.x1q());
      $this$buildSerialDescriptor.l1r('value', $valueSerializer.x1q());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.e29_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).x1q = function () {
    return this.e29_1;
  };
  protoOf(MapEntrySerializer_0).f29 = function (_this__u8e3s4) {
    return _this__u8e3s4.l1();
  };
  protoOf(MapEntrySerializer_0).g29 = function (_this__u8e3s4) {
    return this.f29((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).h29 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).i29 = function (_this__u8e3s4) {
    return this.h29((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).j29 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.l1r('first', $keySerializer.x1q());
      $this$buildClassSerialDescriptor.l1r('second', $valueSerializer.x1q());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.p29_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).x1q = function () {
    return this.p29_1;
  };
  protoOf(PairSerializer_0).q29 = function (_this__u8e3s4) {
    return _this__u8e3s4.le_1;
  };
  protoOf(PairSerializer_0).g29 = function (_this__u8e3s4) {
    return this.q29(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).r29 = function (_this__u8e3s4) {
    return _this__u8e3s4.me_1;
  };
  protoOf(PairSerializer_0).i29 = function (_this__u8e3s4) {
    return this.r29(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).j29 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.q1u($this.v29_1, 0, $this.s29_1);
    var b = composite.q1u($this.v29_1, 1, $this.t29_1);
    var c = composite.q1u($this.v29_1, 2, $this.u29_1);
    composite.e1u($this.v29_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.t1u($this.v29_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.q1u($this.v29_1, 0, $this.s29_1);
          break;
        case 1:
          b = composite.q1u($this.v29_1, 1, $this.t29_1);
          break;
        case 2:
          c = composite.q1u($this.v29_1, 2, $this.u29_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.e1u($this.v29_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.l1r('first', this$0.s29_1.x1q());
      $this$buildClassSerialDescriptor.l1r('second', this$0.t29_1.x1q());
      $this$buildClassSerialDescriptor.l1r('third', this$0.u29_1.x1q());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.s29_1 = aSerializer;
    this.t29_1 = bSerializer;
    this.u29_1 = cSerializer;
    var tmp = this;
    tmp.v29_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).x1q = function () {
    return this.v29_1;
  };
  protoOf(TripleSerializer_0).w29 = function (encoder, value) {
    var structuredEncoder = encoder.d1u(this.v29_1);
    structuredEncoder.t1v(this.v29_1, 0, this.s29_1, value.sl_1);
    structuredEncoder.t1v(this.v29_1, 1, this.t29_1, value.tl_1);
    structuredEncoder.t1v(this.v29_1, 2, this.u29_1, value.ul_1);
    structuredEncoder.e1u(this.v29_1);
  };
  protoOf(TripleSerializer_0).y1q = function (encoder, value) {
    return this.w29(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).z1q = function (decoder) {
    var composite = decoder.d1u(this.v29_1);
    if (composite.s1u()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.k29_1 = keySerializer;
    this.l29_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).m29 = function (encoder, value) {
    var structuredEncoder = encoder.d1u(this.x1q());
    structuredEncoder.t1v(this.x1q(), 0, this.k29_1, this.g29(value));
    structuredEncoder.t1v(this.x1q(), 1, this.l29_1, this.i29(value));
    structuredEncoder.e1u(this.x1q());
  };
  protoOf(KeyValueSerializer).y1q = function (encoder, value) {
    return this.m29(encoder, value);
  };
  protoOf(KeyValueSerializer).z1q = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.x1q();
    var composite = decoder.d1u(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.s1u()) {
        var key = composite.q1u(this.x1q(), 0, this.k29_1);
        var value = composite.q1u(this.x1q(), 1, this.l29_1);
        tmp$ret$1 = this.j29(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.t1u(this.x1q());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.q1u(this.x1q(), 0, this.k29_1);
            break;
          case 1:
            value_0 = composite.q1u(this.x1q(), 1, this.l29_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.j29(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.e1u(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.x29_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).x1q = function () {
    return this.x29_1;
  };
  protoOf(ULongSerializer).y29 = function (encoder, value) {
    var tmp = encoder.i1v(this.x29_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.c1v(tmp$ret$0);
  };
  protoOf(ULongSerializer).y1q = function (encoder, value) {
    return this.y29(encoder, value instanceof ULong ? value.ym_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).z29 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.a1u(this.x29_1).u1t();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).z1q = function (decoder) {
    return new ULong(this.z29(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.a2a_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_7(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).x1q = function () {
    return this.a2a_1;
  };
  protoOf(UIntSerializer).b2a = function (encoder, value) {
    var tmp = encoder.i1v(this.a2a_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.b1v(tmp$ret$0);
  };
  protoOf(UIntSerializer).y1q = function (encoder, value) {
    return this.b2a(encoder, value instanceof UInt ? value.om_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).c2a = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.a1u(this.a2a_1).t1t();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).z1q = function (decoder) {
    return new UInt(this.c2a(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.d2a_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_8(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).x1q = function () {
    return this.d2a_1;
  };
  protoOf(UByteSerializer).e2a = function (encoder, value) {
    var tmp = encoder.i1v(this.d2a_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.z1u(tmp$ret$0);
  };
  protoOf(UByteSerializer).y1q = function (encoder, value) {
    return this.e2a(encoder, value instanceof UByte ? value.em_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).f2a = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.a1u(this.d2a_1).r1t();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).z1q = function (decoder) {
    return new UByte(this.f2a(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.g2a_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_9(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).x1q = function () {
    return this.g2a_1;
  };
  protoOf(UShortSerializer).h2a = function (encoder, value) {
    var tmp = encoder.i1v(this.g2a_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.a1v(tmp$ret$0);
  };
  protoOf(UShortSerializer).y1q = function (encoder, value) {
    return this.h2a(encoder, value instanceof UShort ? value.in_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).i2a = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.a1u(this.g2a_1).s1t();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).z1q = function (decoder) {
    return new UShort(this.i2a(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).y1r = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.z1r(kClass, typeArgumentsSerializers) : $super.z1r.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.k2a_1 = class2ContextualFactory;
    this.l2a_1 = polyBase2Serializers;
    this.m2a_1 = polyBase2DefaultSerializerProvider;
    this.n2a_1 = polyBase2NamedSerializers;
    this.o2a_1 = polyBase2DefaultDeserializerProvider;
    this.p2a_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).x1r = function () {
    return this.p2a_1;
  };
  protoOf(SerialModuleImpl).z1v = function (baseClass, value) {
    if (!baseClass.ja(value))
      return null;
    var tmp0_safe_receiver = this.l2a_1.p2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.m2a_1.p2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).y1v = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.n2a_1.p2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).p2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.o2a_1.p2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).z1r = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.k2a_1.p2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2a(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).j2a = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.k2a_1.k1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.l1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.m1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.t2a_1;
        collector.u2a(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.s2a(kclass, serial.r2a_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.l2a_1.k1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.l1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.m1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.k1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.l1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.m1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.v2a(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.m2a_1.k1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.m1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.w2a(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.o2a_1.k1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.l1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.m1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.x2a(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.y2a_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.y2a_1.equals(tmp0_other_with_cast.y2a_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.y2a_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.y2a_1) + ')';
  };
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().db()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().lb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.q22(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().mb(), serializer_1(StringCompanionObject_instance)), to(getKClass(Char), serializer_10(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().pb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().kb(), serializer_11(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().vb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_12(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_2(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().hb(), serializer_7(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().sb(), IntArraySerializer()), to(getKClass(UInt), serializer_3(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().gb(), serializer_9(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().rb(), ShortArraySerializer()), to(getKClass(UShort), serializer_5(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().fb(), serializer_8(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().qb(), ByteArraySerializer()), to(getKClass(UByte), serializer_4(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().eb(), serializer_13(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().ob(), BooleanArraySerializer()), to(getKClass(Unit), serializer_14(Unit_instance)), to(PrimitiveClasses_getInstance().db(), NothingSerializer()), to(getKClass(Duration), serializer_15(Companion_getInstance())), to(getKClass(Instant), serializer_16(Companion_getInstance_0())), to(getKClass(Uuid), serializer_17(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().db())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.z2a_1 = $factory;
  }
  protoOf(createCache$1).a1s = function (key) {
    return this.z2a_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.a2b_1 = $factory;
  }
  protoOf(createParametrizedCache$1).b1s = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.a2b_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).c1s = get_isNullable;
  protoOf(SerialDescriptorImpl).l1s = get_isInline;
  protoOf(AbstractDecoder).q1u = decodeSerializableElement$default;
  protoOf(AbstractDecoder).c1u = decodeSerializableValue;
  protoOf(AbstractDecoder).s1u = decodeSequentially;
  protoOf(AbstractDecoder).u1u = decodeCollectionSize;
  protoOf(AbstractEncoder).v1v = encodeNotNullMark;
  protoOf(AbstractEncoder).w1v = beginCollection;
  protoOf(AbstractEncoder).u1v = encodeSerializableValue;
  protoOf(AbstractEncoder).x1v = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).c1s = get_isNullable;
  protoOf(ListLikeDescriptor).l1s = get_isInline;
  protoOf(ListLikeDescriptor).n1s = get_annotations;
  protoOf(MapLikeDescriptor).c1s = get_isNullable;
  protoOf(MapLikeDescriptor).l1s = get_isInline;
  protoOf(MapLikeDescriptor).n1s = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).c1s = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).l1s = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).g22 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).c1s = get_isNullable;
  protoOf(NothingSerialDescriptor).l1s = get_isInline;
  protoOf(NothingSerialDescriptor).n1s = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).c1s = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).l1s = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).n1s = get_annotations;
  protoOf(TaggedDecoder).q1u = decodeSerializableElement$default;
  protoOf(TaggedDecoder).c1u = decodeSerializableValue;
  protoOf(TaggedDecoder).s1u = decodeSequentially;
  protoOf(TaggedDecoder).u1u = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = IntSerializer_getInstance;
  _.$_$.j = LongSerializer_getInstance;
  _.$_$.k = StringSerializer_getInstance;
  _.$_$.l = SerializationException_init_$Init$_0;
  _.$_$.m = SerializationException_init_$Create$_0;
  _.$_$.n = UnknownFieldException_init_$Create$;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = SetSerializer;
  _.$_$.r = get_nullable;
  _.$_$.s = serializer_1;
  _.$_$.t = serializer_5;
  _.$_$.u = serializer_3;
  _.$_$.v = serializer_4;
  _.$_$.w = serializer_2;
  _.$_$.x = PolymorphicKind;
  _.$_$.y = PrimitiveKind;
  _.$_$.z = PrimitiveSerialDescriptor;
  _.$_$.a1 = get_annotations;
  _.$_$.b1 = get_isInline;
  _.$_$.c1 = get_isNullable;
  _.$_$.d1 = SerialDescriptor;
  _.$_$.e1 = ENUM;
  _.$_$.f1 = buildSerialDescriptor;
  _.$_$.g1 = getContextualDescriptor;
  _.$_$.h1 = AbstractDecoder;
  _.$_$.i1 = AbstractEncoder;
  _.$_$.j1 = CompositeDecoder;
  _.$_$.k1 = CompositeEncoder;
  _.$_$.l1 = Decoder;
  _.$_$.m1 = Encoder;
  _.$_$.n1 = AbstractPolymorphicSerializer;
  _.$_$.o1 = ArrayListSerializer;
  _.$_$.p1 = ElementMarker;
  _.$_$.q1 = typeParametersSerializers;
  _.$_$.r1 = GeneratedSerializer;
  _.$_$.s1 = InlinePrimitiveDescriptor;
  _.$_$.t1 = NamedValueDecoder;
  _.$_$.u1 = PluginGeneratedSerialDescriptor;
  _.$_$.v1 = SerializerFactory;
  _.$_$.w1 = createSimpleEnumSerializer;
  _.$_$.x1 = jsonCachedSerialNames;
  _.$_$.y1 = missingFieldExceptionWithNewMessage;
  _.$_$.z1 = throwMissingFieldException;
  _.$_$.a2 = EmptySerializersModule_0;
  _.$_$.b2 = contextual;
  _.$_$.c2 = SerializersModuleCollector;
  _.$_$.d2 = BinaryFormat;
  _.$_$.e2 = DeserializationStrategy;
  _.$_$.f2 = KSerializer;
  _.$_$.g2 = MissingFieldException;
  _.$_$.h2 = SerializableWith;
  _.$_$.i2 = SerializationException;
  _.$_$.j2 = SerializationStrategy;
  _.$_$.k2 = StringFormat;
  _.$_$.l2 = findPolymorphicSerializer;
  _.$_$.m2 = findPolymorphicSerializer_0;
  _.$_$.n2 = serializerOrNull_0;
  _.$_$.o2 = serializer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
