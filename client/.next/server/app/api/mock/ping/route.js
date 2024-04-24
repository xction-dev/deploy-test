"use strict";
(() => {
var exports = {};
exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 58998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/mock/ping/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ../node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(29621);
// EXTERNAL MODULE: ../node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(72444);
// EXTERNAL MODULE: ../node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(46221);
// EXTERNAL MODULE: ../node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(49893);
;// CONCATENATED MODULE: ./src/app/api/mock/ping/route.ts

async function GET() {
    return next_response/* default */.Z.json({
        message: "pong"
    });
}

;// CONCATENATED MODULE: ../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fmock%2Fping%2Froute&name=app%2Fapi%2Fmock%2Fping%2Froute&pagePath=private-next-app-dir%2Fapi%2Fmock%2Fping%2Froute.ts&appDir=%2FUsers%2Fjun-young%2FDesktop%2Fdev%2Fxction%2Fxction.co.kr%2Fclient%2Fsrc%2Fapp&appPaths=%2Fapi%2Fmock%2Fping%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/mock/ping/route",
        pathname: "/api/mock/ping",
        filename: "route",
        bundlePath: "app/api/mock/ping/route"
    },
    resolvedPagePath: "/Users/jun-young/Desktop/dev/xction/xction.co.kr/client/src/app/api/mock/ping/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/mock/ping/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [750,804,893], () => (__webpack_exec__(58998)));
module.exports = __webpack_exports__;

})();