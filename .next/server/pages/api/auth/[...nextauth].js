"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/azure-ad":
/*!***********************************************!*\
  !*** external "next-auth/providers/azure-ad" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/azure-ad");

/***/ }),

/***/ "(api)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nconst uri = process.env.MONGODB_URI;\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    let globalWithMongoClientPromise = global;\n    if (!globalWithMongoClientPromise._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        globalWithMongoClientPromise._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongoClientPromise._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL21vbmdvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDN0IsTUFBTSxJQUFJQyxNQUFNLDJDQUEyQztBQUM1RCxDQUFDO0FBRUQsTUFBTUMsTUFBY0osUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQzNDLElBQUlHO0FBQ0osSUFBSUM7QUFFSixJQUFJTixJQUF5QixFQUFlO0lBQzNDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFFN0UsSUFBSU8sK0JBQStCQztJQUluQyxJQUFJLENBQUNELDZCQUE2QkUsbUJBQW1CLEVBQUU7UUFDdERKLFNBQVMsSUFBSU4sZ0RBQVdBLENBQUNLO1FBQ3pCRyw2QkFBNkJFLG1CQUFtQixHQUFHSixPQUFPSyxPQUFPO0lBQ2xFLENBQUM7SUFFREosZ0JBQWdCQyw2QkFBNkJFLG1CQUFtQjtBQUNqRSxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9saWIvbW9uZ29kYi50cz81M2MyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKTtcbn1cblxuY29uc3QgdXJpOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmxldCBjbGllbnQ6IE1vbmdvQ2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcblx0Ly8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG5cdC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG5cblx0bGV0IGdsb2JhbFdpdGhNb25nb0NsaWVudFByb21pc2UgPSBnbG9iYWwgYXMgdHlwZW9mIGdsb2JhbFRoaXMgJiB7XG5cdFx0X21vbmdvQ2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD47XG5cdH07XG5cblx0aWYgKCFnbG9iYWxXaXRoTW9uZ29DbGllbnRQcm9taXNlLl9tb25nb0NsaWVudFByb21pc2UpIHtcblx0XHRjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcblx0XHRnbG9iYWxXaXRoTW9uZ29DbGllbnRQcm9taXNlLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xuXHR9XG5cblx0Y2xpZW50UHJvbWlzZSA9IGdsb2JhbFdpdGhNb25nb0NsaWVudFByb21pc2UuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG5cdC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG5cdGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xuXHRjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsV2l0aE1vbmdvQ2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./src/lib/mongodb.ts\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_azure_ad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/azure-ad */ \"next-auth/providers/azure-ad\");\n/* harmony import */ var next_auth_providers_azure_ad__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_azure_ad__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_azure_ad__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.AZURE_AD_CLIENT_ID,\n            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,\n            tenantId: process.env.AZURE_AD_TENANT_ID\n        })\n    ],\n    callbacks: {\n        async jwt ({ token  }) {\n            return token;\n        },\n        async session ({ session , user  }) {\n            session.user = {\n                id: user.id,\n                name: user.name,\n                email: user.email,\n                completed: user.completed,\n                today: user.today,\n                timeToday: user.timeToday\n            };\n            return session;\n        }\n    },\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_1__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n};\n// export default NextAuth(authOptions);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDa0I7QUFDUjtBQUVPO0FBRXBELE1BQU1JLGNBQWM7SUFDMUIsaURBQWlEO0lBQ2pEQyxXQUFXO1FBQ1ZGLG1FQUFlQSxDQUFDO1lBQ2ZHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQ3hDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLHNCQUFzQjtZQUNoREMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxrQkFBa0I7UUFDekM7S0FFQTtJQUNEQyxXQUFXO1FBQ1YsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQWtCLEVBQUU7WUFDcEMsT0FBT0E7UUFDUjtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsUUFBTyxFQUFFQyxLQUFJLEVBQW9DLEVBQUU7WUFDbEVELFFBQVFDLElBQUksR0FBRztnQkFDZEMsSUFBSUQsS0FBS0MsRUFBRTtnQkFDWEMsTUFBTUYsS0FBS0UsSUFBSTtnQkFDZkMsT0FBT0gsS0FBS0csS0FBSztnQkFDakJDLFdBQVdKLEtBQUtJLFNBQVM7Z0JBQ3pCQyxPQUFPTCxLQUFLSyxLQUFLO2dCQUNqQkMsV0FBV04sS0FBS00sU0FBUztZQUMxQjtZQUVBLE9BQU9QO1FBQ1I7SUFDRDtJQUNBUSxTQUFTeEIsMEVBQWNBLENBQUNELG9EQUFhQTtBQUN0QyxFQUFFO0FBQ0Ysd0NBQXdDO0FBRXhDLGlFQUFlRSxnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJ0AvbGliL21vbmdvZGInO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlcic7XG5pbXBvcnQgTmV4dEF1dGgsIHsgU2Vzc2lvbiwgVXNlciB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBKV1QgfSBmcm9tICduZXh0LWF1dGgvand0JztcbmltcG9ydCBBenVyZUFEUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9henVyZS1hZCc7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcblx0Ly8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuXHRwcm92aWRlcnM6IFtcblx0XHRBenVyZUFEUHJvdmlkZXIoe1xuXHRcdFx0Y2xpZW50SWQ6IHByb2Nlc3MuZW52LkFaVVJFX0FEX0NMSUVOVF9JRCEsXG5cdFx0XHRjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFaVVJFX0FEX0NMSUVOVF9TRUNSRVQhLFxuXHRcdFx0dGVuYW50SWQ6IHByb2Nlc3MuZW52LkFaVVJFX0FEX1RFTkFOVF9JRCxcblx0XHR9KSxcblx0XHQvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuXHRdLFxuXHRjYWxsYmFja3M6IHtcblx0XHRhc3luYyBqd3QoeyB0b2tlbiB9OiB7IHRva2VuOiBKV1QgfSkge1xuXHRcdFx0cmV0dXJuIHRva2VuO1xuXHRcdH0sXG5cdFx0YXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHVzZXIgfTogeyBzZXNzaW9uOiBTZXNzaW9uOyB1c2VyOiBVc2VyIH0pIHtcblx0XHRcdHNlc3Npb24udXNlciA9IHtcblx0XHRcdFx0aWQ6IHVzZXIuaWQsXG5cdFx0XHRcdG5hbWU6IHVzZXIubmFtZSxcblx0XHRcdFx0ZW1haWw6IHVzZXIuZW1haWwsXG5cdFx0XHRcdGNvbXBsZXRlZDogdXNlci5jb21wbGV0ZWQsXG5cdFx0XHRcdHRvZGF5OiB1c2VyLnRvZGF5LFxuXHRcdFx0XHR0aW1lVG9kYXk6IHVzZXIudGltZVRvZGF5XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gc2Vzc2lvbjtcblx0XHR9LFxuXHR9LFxuXHRhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbn07XG4vLyBleHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiTW9uZ29EQkFkYXB0ZXIiLCJOZXh0QXV0aCIsIkF6dXJlQURQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiQVpVUkVfQURfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVpVUkVfQURfQ0xJRU5UX1NFQ1JFVCIsInRlbmFudElkIiwiQVpVUkVfQURfVEVOQU5UX0lEIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwidXNlciIsImlkIiwibmFtZSIsImVtYWlsIiwiY29tcGxldGVkIiwidG9kYXkiLCJ0aW1lVG9kYXkiLCJhZGFwdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();