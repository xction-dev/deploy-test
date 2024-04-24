"use strict";
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 36804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ useMutation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ../node_modules/@tanstack/query-core/build/modern/mutation.js
var mutation = __webpack_require__(13526);
// EXTERNAL MODULE: ../node_modules/@tanstack/query-core/build/modern/notifyManager.js
var notifyManager = __webpack_require__(27445);
// EXTERNAL MODULE: ../node_modules/@tanstack/query-core/build/modern/subscribable.js
var subscribable = __webpack_require__(92845);
// EXTERNAL MODULE: ../node_modules/@tanstack/query-core/build/modern/utils.js
var utils = __webpack_require__(55311);
;// CONCATENATED MODULE: ../node_modules/@tanstack/query-core/build/modern/mutationObserver.js
// src/mutationObserver.ts




var MutationObserver = class extends subscribable/* Subscribable */.l {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!(0,utils/* shallowEqualObjects */.VS)(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && (0,utils/* hashKey */.Ym)(prevOptions.mutationKey) !== (0,utils/* hashKey */.Ym)(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? (0,mutation/* getDefaultState */.R)();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager/* notifyManager */.V.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(action.data, variables, context);
          this.#mutateOptions.onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(action.error, variables, context);
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};

//# sourceMappingURL=mutationObserver.js.map
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(25207);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/utils.js
var modern_utils = __webpack_require__(76316);
;// CONCATENATED MODULE: ../node_modules/@tanstack/react-query/build/modern/useMutation.js
"use client";

// src/useMutation.ts




function useMutation(options, queryClient) {
  const client = (0,QueryClientProvider/* useQueryClient */.NL)(queryClient);
  const [observer] = react_.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  react_.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = react_.useSyncExternalStore(
    react_.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager/* notifyManager */.V.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = react_.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(modern_utils/* noop */.Z);
    },
    [observer]
  );
  if (result.error && (0,modern_utils/* shouldThrowError */.L)(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}

//# sourceMappingURL=useMutation.js.map

/***/ })

};
;