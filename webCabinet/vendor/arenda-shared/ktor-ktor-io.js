(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.r2;
  var Unit_instance = kotlin_kotlin.$_$.w2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m;
  var protoOf = kotlin_kotlin.$_$.tb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.wa;
  var initMetadataForObject = kotlin_kotlin.$_$.bb;
  var toString = kotlin_kotlin.$_$.tg;
  var hashCode = kotlin_kotlin.$_$.ua;
  var equals = kotlin_kotlin.$_$.pa;
  var initMetadataForClass = kotlin_kotlin.$_$.va;
  var createFailure = kotlin_kotlin.$_$.ig;
  var Result = kotlin_kotlin.$_$.rf;
  var initMetadataForInterface = kotlin_kotlin.$_$.za;
  var toString_0 = kotlin_kotlin.$_$.pe;
  var newThrowable = kotlin_kotlin.$_$.pb;
  var stackTraceToString = kotlin_kotlin.$_$.sg;
  var VOID = kotlin_kotlin.$_$.c;
  var isInterface = kotlin_kotlin.$_$.kb;
  var FunctionAdapter = kotlin_kotlin.$_$.ba;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var CoroutineImpl = kotlin_kotlin.$_$.b9;
  var fromInt = kotlin_kotlin.$_$.p9;
  var compare = kotlin_kotlin.$_$.j9;
  var numberToLong = kotlin_kotlin.$_$.w9;
  var add = kotlin_kotlin.$_$.g9;
  var intercepted = kotlin_kotlin.$_$.n8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qg;
  var returnIfSuspended = kotlin_kotlin.$_$.a3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k8;
  var Long = kotlin_kotlin.$_$.of;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.xa;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t3;
  var CancellationException = kotlin_kotlin.$_$.j8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var convertToInt = kotlin_kotlin.$_$.l9;
  var toString_1 = kotlin_kotlin.$_$.wb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var IllegalStateException = kotlin_kotlin.$_$.nf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m4;
  var captureStack = kotlin_kotlin.$_$.fa;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.sd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.tf;
  var equalsLong = kotlin_kotlin.$_$.o9;
  var get_ONE = kotlin_kotlin.$_$.f9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.z9;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var constructCallableReference = kotlin_kotlin.$_$.na;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Continuation = kotlin_kotlin.$_$.v8;
  var KFunctionImpl = kotlin_kotlin.$_$.hc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ya;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var initMetadataForLambda = kotlin_kotlin.$_$.ab;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.jf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d3;
  var listOf = kotlin_kotlin.$_$.f7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v3;
  var charSequenceLength = kotlin_kotlin.$_$.ka;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.bd;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.p;
  var AutoCloseable = kotlin_kotlin.$_$.cf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e;
  var replace_0 = kotlin_kotlin.$_$.td;
  var getStringHashCode = kotlin_kotlin.$_$.ta;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var charSequenceSubSequence = kotlin_kotlin.$_$.la;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.gb;
  var trim = kotlin_kotlin.$_$.xe;
  var toByte = kotlin_kotlin.$_$.ub;
  var decodeToString_0 = kotlin_kotlin.$_$.zc;
  var setOf = kotlin_kotlin.$_$.r7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var charSequenceGet = kotlin_kotlin.$_$.ja;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.g1e().t8(Companion_getInstance().d1e_1);
  }
  function resume_0(throwable) {
    var tmp = this.g1e();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.t8(tmp1_elvis_lhs == null ? Companion_getInstance().d1e_1 : tmp1_elvis_lhs.rl_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.n1g(min, $completion) : $super.n1g.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, ByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref_0, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.bv();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.c1e_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.d1e_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.e1e_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.e1e_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.e1e_1 == null ? 0 : hashCode(this.e1e_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.e1e_1, other.e1e_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.k1e_1 = continuation;
    this.l1e_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.k1e_1), 16));
      stackTraceToString(this_0);
      tmp.l1e_1 = this_0;
    }
  }
  protoOf(Read).g1e = function () {
    return this.k1e_1;
  };
  protoOf(Read).f1e = function () {
    return this.l1e_1;
  };
  protoOf(Read).h1e = function () {
    return 'read';
  };
  function Write(continuation) {
    this.m1e_1 = continuation;
    this.n1e_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.m1e_1), 16));
      stackTraceToString(this_0);
      tmp.n1e_1 = this_0;
    }
  }
  protoOf(Write).g1e = function () {
    return this.m1e_1;
  };
  protoOf(Write).f1e = function () {
    return this.n1e_1;
  };
  protoOf(Write).h1e = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.r1e_1;
    $this.p1e_1.fp($this.t1e_1);
    $this.q1e_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.s1e_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.s1e_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.i1e();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().c1e_1;
    var continuation = $this.s1e_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.j1e(cause);
    }
    var tmp0_safe_receiver = $this.w1e_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(cause);
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.x1e_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).bv = function () {
    return this.x1e_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).h3 = function () {
    return this.x1e_1;
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
  function ByteChannel$invokeOnClose$lambda() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_0() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
    return function () {
      this$0.w1e_1.atomicfu$compareAndSet($handler, null);
      return Unit_instance;
    };
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1f_1 = _this__u8e3s4;
    this.h1f_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            rethrowCloseCauseIfNeeded_0(this.g1f_1);
            if (compare(this.g1f_1.t1e_1.d1(), fromInt(this.h1f_1)) >= 0)
              return true;
            this.i1f_1 = this.g1f_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.g1f_1.q1e_1), this.g1f_1.t1e_1.d1()), fromInt(this.h1f_1)) < 0 && this.g1f_1.v1e_1.kotlinx$atomicfu$value == null)) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.i8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.ew();
            var tmp0 = this.i1f_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.s1e_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.s1e_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.i1e();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.j1e(new ConcurrentIOException(tmp2.h1e(), previous.f1e()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.i1e();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.j1e(previous.e1e_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.g1f_1.q1e_1), this.g1f_1.t1e_1.d1()), fromInt(this.h1f_1)) < 0 && this.g1f_1.v1e_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.s1e_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.s1e_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.i1e();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.mw(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
            continue $sm;
          case 3:
            if (compare(this.g1f_1.t1e_1.d1(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.g1f_1);
            }

            return compare(this.g1f_1.t1e_1.d1(), fromInt(this.h1f_1)) >= 0;
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1f_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            rethrowCloseCauseIfNeeded_0(this.r1f_1);
            this.r1f_1.t1f();
            if (this.r1f_1.u1f())
              return Unit_instance;
            this.s1f_1 = this.r1f_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.r1f_1.u1f() && this.r1f_1.v1e_1.kotlinx$atomicfu$value == null)) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.i8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.ew();
            var tmp0 = this.s1f_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.s1e_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.s1e_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.i1e();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.j1e(new ConcurrentIOException(tmp2.h1e(), previous.f1e()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.i1e();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.j1e(previous.e1e_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(!this.r1f_1.u1f() && this.r1f_1.v1e_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.s1e_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.s1e_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.i1e();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.mw(), this);
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1g_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            var this_0 = this.d1g_1;
            this.j8_1 = 2;
            this.f1g_1 = Companion_instance;
            this.i8_1 = 1;
            suspendResult = this_0.g1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.f1g_1;
            tmp_0.e1g_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.j8_1 = 4;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.j8_1 = 4;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var e = this.l8_1;
              var tmp_2 = this;
              tmp_2.e1g_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.i8_1 = 3;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            this.j8_1 = 4;
            if (!this.d1g_1.v1e_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.d1g_1, null);
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 4) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.o1e_1 = autoFlush;
    this.p1e_1 = new Buffer();
    this.q1e_1 = 0;
    this.r1e_1 = new Object();
    this.s1e_1 = atomic$ref$1(Empty_instance);
    this.t1e_1 = new Buffer();
    this.u1e_1 = new Buffer();
    this.v1e_1 = atomic$ref$1(null);
    this.w1e_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).h1g = function () {
    return this.o1e_1;
  };
  protoOf(ByteChannel).u1f = function () {
    return this.q1e_1 < 1048576;
  };
  protoOf(ByteChannel).i1g = function () {
    var tmp0_safe_receiver = this.v1e_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).ry();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp = new ClosedReadChannelException(p0);
          }
        }
      }
      var tmp0_safe_receiver_0 = tmp;
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        throw tmp0_safe_receiver_0;
      }
    }
    if (this.t1e_1.co()) {
      moveFlushToReadBuffer(this);
    }
    return this.t1e_1;
  };
  protoOf(ByteChannel).j1g = function () {
    if (this.k1g()) {
      var tmp0_safe_receiver = this.v1e_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
        // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
        var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
        var tmp_0;
        if (tmp0_subject == null) {
          tmp_0 = null;
        } else {
          if (isInterface(tmp0_subject, CopyableThrowable)) {
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).ry();
          } else {
            if (tmp0_subject instanceof CancellationException) {
              tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
            } else {
              var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
              tmp_0 = new ClosedWriteChannelException(p0);
            }
          }
        }
        var tmp0_safe_receiver_0 = tmp_0;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          throw tmp0_safe_receiver_0;
        }
        tmp = tmp_1;
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.u1e_1;
  };
  protoOf(ByteChannel).l1g = function () {
    var tmp0_safe_receiver = this.v1e_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).ry();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ByteChannel).k1g = function () {
    return !(this.v1e_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).m1g = function () {
    return !(this.l1g() == null) || (this.k1g() && this.q1e_1 === 0 && this.t1e_1.co());
  };
  protoOf(ByteChannel).n1g = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ByteChannel).g1g = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ByteChannel).t1f = function () {
    if (this.u1e_1.co())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.r1e_1;
    var count = convertToInt(this.u1e_1.d1());
    this.p1e_1.up(this.u1e_1);
    this.q1e_1 = this.q1e_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.s1e_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.s1e_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.i1e();
    }
  };
  protoOf(ByteChannel).y3 = function () {
    this.t1f();
    if (!this.v1e_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).p1g = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ByteChannel).q1g = function (cause) {
    if (!(this.v1e_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.v1e_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).ry();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(closedToken).message, access$_get_origin__hdh1qz(closedToken));
        } else {
          var p0 = access$_get_origin__hdh1qz(closedToken);
          tmp = new ClosedByteChannelException(p0);
        }
      }
    }
    var wrappedCause = tmp;
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).r1g = function (handler) {
    var existingCause = this.v1e_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).ry();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(existingCause).message, access$_get_origin__hdh1qz(existingCause));
          } else {
            var p0 = access$_get_origin__hdh1qz(existingCause);
            tmp = new ClosedByteChannelException(p0);
          }
        }
      }
      handler(tmp);
      var tmp_0 = ByteChannel$invokeOnClose$lambda;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    }
    if (!this.w1e_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
    var cause = this.v1e_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.w1e_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).ry();
        } else {
          if (tmp0_subject_0 instanceof CancellationException) {
            tmp_1 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(cause).message, access$_get_origin__hdh1qz(cause));
          } else {
            var p0_0 = access$_get_origin__hdh1qz(cause);
            tmp_1 = new ClosedByteChannelException(p0_0);
          }
        }
      }
      handler(tmp_1);
      var tmp_2 = ByteChannel$invokeOnClose$lambda_0;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_2);
    }
    var tmp_3 = ByteChannel$invokeOnClose$lambda_1(this, handler);
    return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_3);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.lp(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.t1g_1.d1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.t1g_1.d1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.t1g_1.e1(i) === $this.t1g_1.e1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.t1g_1.e1(i) === $this.t1g_1.e1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.z1g_1, extra), $this.v1g_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.v1g_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.t1g_1) + '"'));
    }
  }
  function toSingleLineString($this, $receiver) {
    return replace(decodeToString($receiver), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1i_1 = _this__u8e3s4;
    this.f1i_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 9;
            this.e1i_1.z1g_1 = new Long(0, 0);
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.e1i_1.w1g_1.co()) {
              this.g1i_1 = true;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.i8_1 = 2;
              suspendResult = this.e1i_1.s1g_1.o1g(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.g1i_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.g1i_1) {
              this.i8_1 = 7;
              continue $sm;
            }

            this.i8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.e1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = checkFullMatch(this.e1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.e1i_1.z1g_1;
            } else {
              this.i8_1 = 6;
              continue $sm;
            }

          case 6:
            this.i8_1 = 1;
            continue $sm;
          case 7:
            if (!this.f1i_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.e1i_1, this.e1i_1.t1g_1) + '" but encountered end of input');
            }

            this.e1i_1.z1g_1 = add(this.e1i_1.z1g_1, this.e1i_1.y1g_1.fp(this.e1i_1.u1g_1.j1g()));
            this.i8_1 = 8;
            suspendResult = this.e1i_1.u1g_1.g1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.e1i_1.z1g_1;
          case 9:
            throw this.l8_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1h_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.j1h_1.w1g_1.co()) {
              this.k1h_1 = true;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.i8_1 = 2;
              suspendResult = this.j1h_1.s1g_1.o1g(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.k1h_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.k1h_1) {
              this.i8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.j1h_1.w1g_1, this.j1h_1.t1g_1.e1(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.j1h_1.w1g_1;
              checkBounds(this.j1h_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).d1());
              this.j1h_1.z1g_1 = add(this.j1h_1.z1g_1, this.j1h_1.w1g_1.fp(this.j1h_1.u1g_1.j1g()));
              this.i8_1 = 5;
              suspendResult = flushIfNeeded(this.j1h_1.u1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.j1h_1, nextMatch);
              var tmp_1 = this.j1h_1;
              var tmp_2 = this.j1h_1.z1g_1;
              var tmp_3 = this.j1h_1.u1g_1.j1g();
              tmp_1.z1g_1 = add(tmp_2, this.j1h_1.w1g_1.cp(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.i8_1 = 4;
              suspendResult = flushIfNeeded(this.j1h_1.u1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.i8_1 = 6;
            continue $sm;
          case 6:
            this.i8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.l8_1;
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
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1h_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.t1h_1.w1g_1.co()) {
              this.v1h_1 = true;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.i8_1 = 2;
              suspendResult = this.t1h_1.s1g_1.o1g(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.v1h_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.v1h_1) {
              this.i8_1 = 7;
              continue $sm;
            }

            this.u1h_1 = this.t1h_1.w1g_1.fo();
            if (this.t1h_1.a1h_1 > 0 && !(this.u1h_1 === this.t1h_1.t1g_1.e1(this.t1h_1.a1h_1))) {
              var oldMatchIndex = this.t1h_1.a1h_1;
              while (this.t1h_1.a1h_1 > 0 && !(this.u1h_1 === this.t1h_1.t1g_1.e1(this.t1h_1.a1h_1))) {
                this.t1h_1.a1h_1 = this.t1h_1.x1g_1[this.t1h_1.a1h_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.t1h_1.a1h_1 | 0);
              checkBounds(this.t1h_1, retained);
              var tmp_0 = this.t1h_1;
              var tmp_1 = this.t1h_1.z1g_1;
              var tmp_2 = this.t1h_1.u1g_1.j1g();
              tmp_0.z1g_1 = add(tmp_1, this.t1h_1.y1g_1.cp(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.t1h_1.a1h_1 === 0 && !(this.u1h_1 === this.t1h_1.t1g_1.e1(this.t1h_1.a1h_1))) {
                this.i8_1 = 6;
                suspendResult = writeByte(this.t1h_1.u1g_1, this.u1h_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.i8_1 = 4;
                continue $sm;
              }
            } else {
              this.i8_1 = 5;
              continue $sm;
            }

          case 4:
            this.i8_1 = 5;
            continue $sm;
          case 5:
            this.t1h_1.a1h_1 = this.t1h_1.a1h_1 + 1 | 0;
            if (this.t1h_1.a1h_1 === this.t1h_1.t1g_1.d1()) {
              return true;
            }

            this.t1h_1.y1g_1.vp(this.u1h_1);
            this.i8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.t1h_1.z1g_1;
            this.t1h_1.z1g_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.l8_1;
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
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.s1g_1 = channel;
    this.t1g_1 = matchString;
    this.u1g_1 = writeChannel;
    this.v1g_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.t1g_1.d1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.w1g_1 = this.s1g_1.i1g();
    this.x1g_1 = buildPartialMatchTable(this);
    this.y1g_1 = new Buffer();
    this.z1g_1 = new Long(0, 0);
    this.a1h_1 = 0;
  }
  protoOf(ByteChannelScanner).h1i = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function attachWriterJob(_this__u8e3s4, writerJob) {
    var tmp = writerJob.i1i_1;
    var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r1g(attachWriterJob$lambda(_this__u8e3s4));
    }
  }
  function attachWriterJob$lambda($this_attachWriterJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        $this_attachWriterJob.q1g(cause);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.k1i_1 = null;
    this.l1i_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).l1g = function () {
    return this.k1i_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).m1g = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).i1g = function () {
    return this.l1i_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).n1g = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).q1g = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.m1i_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.q1g(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).h1i(ignoreMissing, $completion);
  }
  function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    // Inline function 'kotlin.require' call
    if (!(compare(limit, new Long(0, 0)) >= 0)) {
      var message = 'Limit (' + limit.toString() + ') should be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.i1g().bo().d1());
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' bytes');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' bytes');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.l1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count) {
    if (compare(count, new Long(0, 0)) > 0) {
      if (outBuffer._v == null) {
        outBuffer._v = new Buffer();
      }
      outBuffer._v.pp(readBuffer, count);
      consumed._v = add(consumed._v, count);
    }
  }
  function internalReadLineTo$appendOrBuffer(outBuffer, $out, readBuffer, consumed, count) {
    if (outBuffer._v == null) {
      if (compare(count, new Long(0, 0)) > 0) {
        $out.c1(readString(readBuffer, count));
        consumed._v = add(consumed._v, count);
      }
    } else {
      internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count);
    }
  }
  function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
    if (!$lenientLineEnding)
      return new Long(-1, -1);
    var tmp;
    if (equalsLong(lfIndex, new Long(-1, -1))) {
      // Inline function 'kotlin.Long.minus' call
      var this_0 = get_remaining(_this__u8e3s4);
      // Inline function 'kotlin.comparisons.minOf' call
      var b = subtract(this_0, fromInt(1));
      tmp = compare(limitLeft, b) <= 0 ? limitLeft : b;
    } else if (equalsLong(lfIndex, new Long(0, 0))) {
      tmp = new Long(0, 0);
    } else {
      // Inline function 'kotlin.Long.minus' call
      tmp = subtract(lfIndex, fromInt(1));
    }
    var endIndex = tmp;
    return indexOf(_this__u8e3s4, 13, VOID, endIndex);
  }
  function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
    var tmp = new $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1i_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.w1i_1 = BytePacketBuilder();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.v1i_1.m1g()) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.w1i_1.up(this.v1i_1.i1g());
            this.i8_1 = 2;
            suspendResult = this.v1i_1.o1g(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.v1i_1);
            return this.w1i_1.bo();
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
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1j_1 = _this__u8e3s4;
    this.g1j_1 = max;
  }
  protoOf($discardCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.h1j_1 = this.g1j_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.h1j_1, new Long(0, 0)) > 0 && !this.f1j_1.m1g())) {
              this.i8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.f1j_1) === 0) {
              this.i8_1 = 2;
              suspendResult = this.f1j_1.o1g(VOID, this);
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
            var tmp0 = this.h1j_1;
            var b = get_remaining(this.f1j_1.i1g());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.f1j_1.i1g(), count);
            this.h1j_1 = subtract(this.h1j_1, count);
            this.i8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.g1j_1, this.h1j_1);
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
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1j_1 = _this__u8e3s4;
    this.r1j_1 = buffer;
    this.s1j_1 = offset;
    this.t1j_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.q1j_1.m1g())
              return -1;
            if (this.q1j_1.i1g().co()) {
              this.i8_1 = 1;
              suspendResult = this.q1j_1.o1g(VOID, this);
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
            if (this.q1j_1.m1g())
              return -1;
            return readAvailable_0(this.q1j_1.i1g(), this.r1j_1, this.s1j_1, this.t1j_1);
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1k_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = readBuffer(this.c1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1k_1 = _this__u8e3s4;
    this.m1k_1 = channel;
    this.n1k_1 = limit;
  }
  protoOf($copyToCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 12;
            this.o1k_1 = this.n1k_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 8;
            this.j8_1 = 7;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.l1k_1.m1g() && compare(this.o1k_1, new Long(0, 0)) > 0)) {
              this.i8_1 = 6;
              continue $sm;
            }

            if (this.l1k_1.i1g().co()) {
              this.i8_1 = 3;
              suspendResult = this.l1k_1.o1g(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.o1k_1;
            var b = get_remaining(this.l1k_1.i1g());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.l1k_1.i1g().ep(this.m1k_1.j1g(), count);
            this.o1k_1 = subtract(this.o1k_1, count);
            this.i8_1 = 5;
            suspendResult = this.m1k_1.g1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i8_1 = 2;
            continue $sm;
          case 6:
            this.j8_1 = 12;
            this.i8_1 = 10;
            continue $sm;
          case 7:
            this.j8_1 = 8;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.l1k_1.q1g(cause);
              close_0(this.m1k_1, cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 8:
            this.j8_1 = 12;
            this.p1k_1 = this.l8_1;
            this.i8_1 = 9;
            suspendResult = this.m1k_1.g1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.p1k_1;
          case 10:
            this.j8_1 = 12;
            this.i8_1 = 11;
            suspendResult = this.m1k_1.g1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.n1k_1, this.o1k_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1k_1 = _this__u8e3s4;
    this.z1k_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = peek(this.y1k_1, this.z1k_1.d1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.z1k_1)) {
              this.i8_1 = 3;
              suspendResult = discard(this.y1k_1, fromInt(this.z1k_1.d1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1l_1 = _this__u8e3s4;
    this.j1l_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.k1l_1 = new Buffer();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.k1l_1.d1(), fromInt(this.j1l_1)) < 0)) {
              this.i8_1 = 5;
              continue $sm;
            }

            if (this.i1l_1.i1g().co()) {
              this.i8_1 = 2;
              suspendResult = this.i1l_1.o1g(VOID, this);
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
            if (this.i1l_1.m1g()) {
              this.i8_1 = 5;
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.i1l_1.i1g()), subtract(numberToLong(this.j1l_1), this.k1l_1.d1())) > 0) {
              this.i1l_1.i1g().ep(this.k1l_1, subtract(numberToLong(this.j1l_1), this.k1l_1.d1()));
            } else {
              this.i1l_1.i1g().fp(this.k1l_1);
            }

            this.i8_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.k1l_1.d1(), fromInt(this.j1l_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.j1l_1 + ' bytes but only ' + this.k1l_1.d1().toString() + ' available');
            }

            return this.k1l_1;
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
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1l_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.u1l_1 = new Buffer();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.t1l_1.m1g()) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.u1l_1.up(this.t1l_1.i1g());
            this.i8_1 = 2;
            suspendResult = this.t1l_1.o1g(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.t1l_1.l1g();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.u1l_1;
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1m_1 = _this__u8e3s4;
    this.e1m_1 = count;
  }
  protoOf($peekCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.d1m_1.m1g())
              return null;
            this.i8_1 = 1;
            suspendResult = this.d1m_1.n1g(this.e1m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.d1m_1.i1g().gp(), this.e1m_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1m_1 = _this__u8e3s4;
    this.o1m_1 = out;
    this.p1m_1 = limit;
    this.q1m_1 = lenientLineEnding;
    this.r1m_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 27;
            this.v1m_1 = this.n1m_1.i1g();
            if (this.v1m_1.co()) {
              this.i8_1 = 1;
              suspendResult = this.n1m_1.o1g(VOID, this);
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
            if (this.n1m_1.m1g())
              return new Long(-1, -1);
            this.u1m_1 = {_v: new Long(0, 0)};
            this.s1m_1 = {_v: null};
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 24;
            this.i8_1 = 5;
            continue $sm;
          case 5:
            if (!(compare(this.u1m_1._v, this.p1m_1) < 0 && !this.n1m_1.m1g())) {
              this.i8_1 = 15;
              continue $sm;
            }

            this.y1m_1 = subtract(this.p1m_1, this.u1m_1._v);
            this.z1m_1 = indexOf(this.v1m_1, 10, VOID, this.y1m_1);
            var crIndex = internalReadLineTo$scanForSoleCr(this.v1m_1, this.q1m_1, this.z1m_1, this.y1m_1);
            if (compare(crIndex, new Long(0, 0)) >= 0) {
              internalReadLineTo$appendOrBuffer(this.s1m_1, this.o1m_1, this.v1m_1, this.u1m_1, crIndex);
              discard_0(this.v1m_1, new Long(1, 0));
              this.t1m_1 = this.u1m_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 6;
              continue $sm;
            }

          case 6:
            if (equalsLong(this.z1m_1, new Long(0, 0))) {
              discard_0(this.v1m_1, new Long(1, 0));
              this.t1m_1 = this.u1m_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 7;
              continue $sm;
            }

          case 7:
            if (compare(this.z1m_1, new Long(0, 0)) > 0) {
              var tmp_0;
              var tmp_1 = this.v1m_1.bo();
              var this_0 = this.z1m_1;
              if (tmp_1.xo(subtract(this_0, fromInt(1))) === 13) {
                tmp_0 = new Long(1, 0);
              } else {
                tmp_0 = new Long(0, 0);
              }
              var isCrlf = tmp_0;
              internalReadLineTo$appendOrBuffer(this.s1m_1, this.o1m_1, this.v1m_1, this.u1m_1, subtract(this.z1m_1, isCrlf));
              discard_0(this.v1m_1, add(numberToLong(1), isCrlf));
              this.t1m_1 = this.u1m_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 8;
              continue $sm;
            }

          case 8:
            var tmp0 = this.y1m_1;
            var b = get_remaining(this.v1m_1);
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            var tmp_2 = this.v1m_1.bo();
            if (tmp_2.xo(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$appendOrBuffer(this.s1m_1, this.o1m_1, this.v1m_1, this.u1m_1, subtract(count, fromInt(1)));
              this.i8_1 = 9;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.v1m_1, this.n1m_1, this.q1m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$bufferBytes(this.s1m_1, this.v1m_1, this.u1m_1, count);
              this.i8_1 = 11;
              continue $sm;
            }

          case 9:
            if (suspendResult) {
              this.t1m_1 = this.u1m_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              internalReadLineTo$bufferBytes(this.s1m_1, this.v1m_1, this.u1m_1, new Long(1, 0));
              this.i8_1 = 10;
              continue $sm;
            }

          case 10:
            this.i8_1 = 11;
            continue $sm;
          case 11:
            if (compare(this.u1m_1._v, this.p1m_1) < 0 && equalsLong(get_remaining(this.v1m_1), new Long(0, 0))) {
              this.i8_1 = 12;
              suspendResult = this.n1m_1.o1g(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.x1m_1 = false;
              this.i8_1 = 13;
              continue $sm;
            }

          case 12:
            this.x1m_1 = !suspendResult;
            this.i8_1 = 13;
            continue $sm;
          case 13:
            if (this.x1m_1) {
              this.i8_1 = 15;
              continue $sm;
            } else {
              this.i8_1 = 14;
              continue $sm;
            }

          case 14:
            this.i8_1 = 5;
            continue $sm;
          case 15:
            if (equalsLong(this.u1m_1._v, new Long(0, 0)) && this.n1m_1.m1g()) {
              this.t1m_1 = new Long(-1, -1);
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 16;
              continue $sm;
            }

          case 16:
            if (!(compare(this.u1m_1._v, this.p1m_1) <= 0)) {
              var message = 'Consumed bytes exceed the limit: ' + this.u1m_1._v.toString() + ' > ' + this.p1m_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (equalsLong(this.u1m_1._v, this.p1m_1)) {
              if (equalsLong(this.p1m_1, new Long(-1, 2147483647)))
                throw new TooLongLineException('Max line length exceeded');
              if (equalsLong(get_remaining(this.v1m_1), new Long(0, 0))) {
                this.i8_1 = 18;
                suspendResult = this.n1m_1.o1g(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.w1m_1 = false;
                this.i8_1 = 19;
                continue $sm;
              }
            } else {
              this.i8_1 = 17;
              continue $sm;
            }

          case 17:
            if (this.r1m_1) {
              throwEndOfStreamException(this.u1m_1._v);
            }

            this.t1m_1 = this.u1m_1._v;
            this.j8_1 = 27;
            this.i8_1 = 25;
            var tmp_3 = this;
            continue $sm;
          case 18:
            this.w1m_1 = !suspendResult;
            this.i8_1 = 19;
            continue $sm;
          case 19:
            if (this.w1m_1) {
              throwEndOfStreamException(this.u1m_1._v);
            } else {
              this.i8_1 = 20;
              continue $sm;
            }

            break;
          case 20:
            var tmp0_subject = this.v1m_1.bo().xo(new Long(0, 0));
            if (tmp0_subject === 10) {
              discard_0(this.v1m_1, new Long(1, 0));
              this.t1m_1 = this.u1m_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              if (tmp0_subject === 13) {
                this.i8_1 = 21;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.v1m_1, this.n1m_1, this.q1m_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.i8_1 = 23;
                continue $sm;
              }
            }

          case 21:
            if (suspendResult) {
              this.t1m_1 = this.u1m_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 22;
              continue $sm;
            }

          case 22:
            this.i8_1 = 23;
            continue $sm;
          case 23:
            throwTooLongLineException(this.p1m_1);
            break;
          case 24:
            this.j8_1 = 27;
            var t = this.l8_1;
            if (!(this.s1m_1._v == null)) {
              this.o1m_1.c1(readString_0(this.s1m_1._v));
            }

            throw t;
          case 25:
            var tmp_4 = this.t1m_1;
            this.j8_1 = 27;
            if (!(this.s1m_1._v == null)) {
              this.o1m_1.c1(readString_0(this.s1m_1._v));
            }

            return tmp_4;
          case 26:
            this.j8_1 = 27;
            if (!(this.s1m_1._v == null)) {
              this.o1m_1.c1(readString_0(this.s1m_1._v));
            }

            return Unit_instance;
          case 27:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 27) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1n_1 = _this__u8e3s4;
    this.j1n_1 = $this_internalReadLineTo;
    this.k1n_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            if (compare(get_remaining(this.i1n_1), new Long(2, 0)) >= 0) {
              this.m1n_1 = true;
              this.i8_1 = 2;
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = this.j1n_1.n1g(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m1n_1 = suspendResult;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (this.m1n_1) {
              this.l1n_1 = this.i1n_1.bo().xo(new Long(1, 0)) === 10;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.l1n_1 = false;
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.l1n_1) {
              discard_0(this.i1n_1, new Long(2, 0));
              return true;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.k1n_1) {
              discard_0(this.i1n_1, new Long(1, 0));
              return true;
            }

            return false;
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
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1n_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.v1n_1);
            if (this.v1n_1.h1g() || get_size(this.v1n_1.j1g()) >= 1048576) {
              this.i8_1 = 1;
              suspendResult = this.v1n_1.g1g(this);
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
  function ByteWriteChannel$flushAndClose$ref(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref_0(p0);
    return constructCallableReference(function ($completion) {
      return i.a1o($completion);
    }, 0, 1, 6, 'flushAndClose', [p0]);
  }
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.i1i_1 = channel;
    this.j1i_1 = job;
  }
  protoOf(WriterJob).nx = function () {
    return this.j1i_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.b1o_1 = channel;
    this.c1o_1 = coroutineContext;
  }
  protoOf(WriterScope).nr = function () {
    return this.c1o_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.j1g().lp(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref(_this__u8e3s4));
    } else {
      _this__u8e3s4.q1g(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.nx().ps(block);
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.ps(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.j1g().vp(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.d1o_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).o8 = function () {
    return this.d1o_1;
  };
  protoOf(NO_CALLBACK$1).p8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).t8 = function (result) {
    return this.p8(result);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    KFunctionImpl.call(this, 1, 1, 6);
    this.z1n_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref_0).a1o = function ($completion) {
    return this.z1n_1.p1g($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref_0).c9 = function ($completion) {
    return this.a1o($completion);
  };
  function writer$slambda($block, $channel, resultContinuation) {
    this.m1o_1 = $block;
    this.n1o_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).v1o = function ($this$launch, $completion) {
    var tmp = this.w1o($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(writer$slambda).d9 = function (p1, $completion) {
    return this.v1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 14;
            this.r1o_1 = Job(get_job(this.o1o_1.nr()));
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.i8_1 = 2;
            suspendResult = this.m1o_1(new WriterScope(this.n1o_1, this.o1o_1.nr().gf(this.r1o_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r1o_1.iy();
            var tmp_0;
            if (get_job(this.o1o_1.nr()).js()) {
              this.n1o_1.q1g(get_job(this.o1o_1.nr()).ms());
              tmp_0 = Unit_instance;
            }

            this.j8_1 = 14;
            this.i8_1 = 9;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.l8_1;
              cancel(this.r1o_1, 'Exception thrown while writing to channel', cause);
              this.n1o_1.q1g(cause);
              this.j8_1 = 14;
              this.i8_1 = 9;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 14;
            this.s1o_1 = this.l8_1;
            this.i8_1 = 5;
            suspendResult = this.r1o_1.ts(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o1o_1;
            this.j8_1 = 7;
            this.u1o_1 = Companion_instance;
            this.i8_1 = 6;
            suspendResult = this.n1o_1.p1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.u1o_1;
            tmp_2.t1o_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.j8_1 = 14;
            this.i8_1 = 8;
            continue $sm;
          case 7:
            this.j8_1 = 14;
            var tmp_3 = this.l8_1;
            if (tmp_3 instanceof Error) {
              var e = this.l8_1;
              var tmp_4 = this;
              tmp_4.t1o_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.i8_1 = 8;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 8:
            this.j8_1 = 14;
            throw this.s1o_1;
          case 9:
            this.j8_1 = 14;
            this.i8_1 = 10;
            suspendResult = this.r1o_1.ts(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.o1o_1;
            this.j8_1 = 12;
            this.q1o_1 = Companion_instance;
            this.i8_1 = 11;
            suspendResult = this.n1o_1.p1g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.q1o_1;
            tmp_5.p1o_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.j8_1 = 14;
            this.i8_1 = 13;
            continue $sm;
          case 12:
            this.j8_1 = 14;
            var tmp_6 = this.l8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.l8_1;
              var tmp_7 = this;
              tmp_7.p1o_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.i8_1 = 13;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 13:
            this.j8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.j8_1 === 14) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).w1o = function ($this$launch, completion) {
    var i = new writer$slambda(this.m1o_1, this.n1o_1, completion);
    i.o1o_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.v1o($this$launch, $completion);
    }, 1);
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.k1g()) {
        $channel.q1g(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function access$_get_origin__hdh1qz($this) {
    return $this.x1o_1;
  }
  function CloseToken(origin) {
    this.x1o_1 = origin;
  }
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.z1o_1.up($this.y1o_1.i1g());
    $this.a1p_1 = add($this.a1p_1, appended);
  }
  function updateConsumed($this) {
    $this.b1p_1 = add($this.b1p_1, subtract($this.a1p_1, $this.z1o_1.d1()));
    $this.a1p_1 = $this.z1o_1.d1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1p_1 = _this__u8e3s4;
    this.l1p_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (compare(this.k1p_1.i1g().d1(), fromInt(this.l1p_1)) >= 0) {
              return true;
            }

            this.i8_1 = 1;
            suspendResult = this.k1p_1.y1o_1.n1g(this.l1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.k1p_1);
              return true;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.y1o_1 = delegate;
    this.z1o_1 = new Buffer();
    this.a1p_1 = new Long(0, 0);
    this.b1p_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).m1p = function () {
    updateConsumed(this);
    return this.b1p_1;
  };
  protoOf(CountedByteReadChannel).l1g = function () {
    return this.y1o_1.l1g();
  };
  protoOf(CountedByteReadChannel).m1g = function () {
    return this.z1o_1.co() && this.y1o_1.m1g();
  };
  protoOf(CountedByteReadChannel).i1g = function () {
    transferFromDelegate(this);
    return this.z1o_1;
  };
  protoOf(CountedByteReadChannel).n1g = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CountedByteReadChannel).q1g = function (cause) {
    this.y1o_1.q1g(cause);
    this.z1o_1.y3();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_1(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  var LineEnding_entriesInitialized;
  function LineEnding_initEntries() {
    if (LineEnding_entriesInitialized)
      return Unit_instance;
    LineEnding_entriesInitialized = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Lenient_instance;
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if ($this === Companion_getInstance_2().n1p_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_2().o1p_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_2().p1p_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_2().r1p_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.s1p_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.b1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.n1p_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.o1p_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.p1p_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.q1p_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.r1p_1 = listOf([new LineEndingMode(this.n1p_1), new LineEndingMode(this.o1p_1), new LineEndingMode(this.p1p_1)]);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.s1p_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_2();
    this.s1p_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.s1p_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.s1p_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.s1p_1, other);
  };
  function SourceByteReadChannel(source) {
    this.t1p_1 = source;
    this.u1p_1 = null;
  }
  protoOf(SourceByteReadChannel).l1g = function () {
    var tmp0_safe_receiver = this.u1p_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).ry();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SourceByteReadChannel).m1g = function () {
    return this.t1p_1.co();
  };
  protoOf(SourceByteReadChannel).i1g = function () {
    var tmp0_safe_receiver = this.l1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.t1p_1.bo();
  };
  protoOf(SourceByteReadChannel).n1g = function (min, $completion) {
    var tmp0_safe_receiver = this.l1g();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.t1p_1.eo(fromInt(min));
  };
  protoOf(SourceByteReadChannel).q1g = function (cause) {
    if (!(this.u1p_1 == null))
      return Unit_instance;
    this.t1p_1.y3();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.u1p_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.bo().d1();
    var tmp$ret$0 = compare(tmp0, b) <= 0 ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.co();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.d1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.lp(buffer, offset, offset + length | 0);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.bo();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.bo().d1());
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.bo().d1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.co() && block(_this__u8e3s4.bo())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.eo(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.bo().zo(countToDiscard);
    return countToDiscard;
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.ap(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().v1p_1 : charset;
    if (charset.equals(Charsets_getInstance().v1p_1))
      return encodeToByteArray(_this__u8e3s4);
    return encodeToByteArray_0(charset.y1p(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().v1p_1 : charset;
    if (charset === Charsets_getInstance().v1p_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.y1p(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).c1q = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).k1q = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).bv = function () {
    return Unit_instance;
  };
  function Companion_3() {
  }
  protoOf(Companion_3).l1q = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().v1p_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().w1p_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Charset(_name) {
    this.x1p_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.x1p_1 === other.x1p_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.x1p_1);
  };
  protoOf(Charset).toString = function () {
    return this.x1p_1;
  };
  function Charsets() {
    Charsets_instance = this;
    this.v1p_1 = new CharsetImpl('UTF-8');
    this.w1p_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.x1p_1;
  }
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.n1q_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_4.l1q(name);
  }
  function CharsetEncoder(_charset) {
    this.o1q_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.bo().d1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.p1q(array);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp;
    dst.c1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().w1p_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().v1p_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.op(result);
    return result.length;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).y1p = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).m1q = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.n1q_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.o1q_1;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.s1q_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.s1q_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.s1q_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.s1q_1.equals(other.s1q_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.u1q_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.u1q_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.u1q_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.u1q_1.equals(other.u1q_1))
      return false;
    return true;
  };
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.v1q_1 = $this_toKtor;
  }
  protoOf(toKtor$1).p1q = function (buffer) {
    return this.v1q_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.w1q_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().h2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).p1q = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.w1q_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.vp(toByte(point >> 8));
        }
        builder.vp(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().v1p_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().v1p_1)) {
      if (max === 2147483647)
        return readString_1(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.bo().d1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.m1q(), _this__u8e3s4, max);
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().f12_1;
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.vp(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.d1q_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d1q_1;
    tmp.e1q_1 = Array(size);
    this.f1q_1 = 0;
  }
  protoOf(DefaultPool).g1q = function (instance) {
  };
  protoOf(DefaultPool).h1q = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).i1q = function (instance) {
  };
  protoOf(DefaultPool).j1q = function () {
    if (this.f1q_1 === 0)
      return this.c1q();
    this.f1q_1 = this.f1q_1 - 1 | 0;
    var idx = this.f1q_1;
    var tmp = this.e1q_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.e1q_1[idx] = null;
    return this.h1q(instance);
  };
  protoOf(DefaultPool).k1q = function (instance) {
    this.i1q(instance);
    if (this.f1q_1 === this.d1q_1) {
      this.g1q(instance);
    } else {
      var _unary__edvuaz = this.f1q_1;
      this.f1q_1 = _unary__edvuaz + 1 | 0;
      this.e1q_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).bv = function () {
    var inductionVariable = 0;
    var last = this.f1q_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.e1q_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.e1q_1[i] = null;
        this.g1q(instance);
      }
       while (inductionVariable < last);
    this.f1q_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).i1e = resume;
  protoOf(Read).j1e = resume_0;
  protoOf(Write).i1e = resume;
  protoOf(Write).j1e = resume_0;
  protoOf(ByteChannel).o1g = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).o1g = awaitContent$default;
  protoOf(CountedByteReadChannel).o1g = awaitContent$default;
  protoOf(SourceByteReadChannel).o1g = awaitContent$default;
  protoOf(DefaultPool).y3 = close;
  protoOf(NoPoolImpl).y3 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.b = Charsets_getInstance;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = copyTo;
  _.$_$.f = readAvailable;
  _.$_$.g = readLineStrictTo;
  _.$_$.h = readPacket;
  _.$_$.i = readRemaining;
  _.$_$.j = readUntil;
  _.$_$.k = skipIfFound;
  _.$_$.l = toByteArray;
  _.$_$.m = writeFully;
  _.$_$.n = MalformedInputException;
  _.$_$.o = decode;
  _.$_$.p = encode;
  _.$_$.q = forName;
  _.$_$.r = get_name;
  _.$_$.s = BytePacketBuilder;
  _.$_$.t = build;
  _.$_$.u = canRead;
  _.$_$.v = discard_0;
  _.$_$.w = readText_0;
  _.$_$.x = get_remaining;
  _.$_$.y = get_size;
  _.$_$.z = takeWhile;
  _.$_$.a1 = toByteArray_0;
  _.$_$.b1 = writeFully_0;
  _.$_$.c1 = writeText;
  _.$_$.d1 = get_ByteArrayPool;
  _.$_$.e1 = DefaultPool;
  _.$_$.f1 = NoPoolImpl;
  _.$_$.g1 = ByteChannel;
  _.$_$.h1 = ByteReadChannel_0;
  _.$_$.i1 = ByteReadChannel;
  _.$_$.j1 = ByteReadChannel_1;
  _.$_$.k1 = ClosedByteChannelException;
  _.$_$.l1 = WriterScope;
  _.$_$.m1 = attachWriterJob;
  _.$_$.n1 = cancel_0;
  _.$_$.o1 = close_0;
  _.$_$.p1 = counted;
  _.$_$.q1 = invokeOnCompletion;
  _.$_$.r1 = ioDispatcher;
  _.$_$.s1 = readText;
  _.$_$.t1 = rethrowCloseCauseIfNeeded;
  _.$_$.u1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
