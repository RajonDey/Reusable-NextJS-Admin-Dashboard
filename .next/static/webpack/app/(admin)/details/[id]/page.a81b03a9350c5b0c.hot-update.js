"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin)/details/[id]/page",{

/***/ "(app-pages-browser)/./app/(admin)/details/[id]/page.jsx":
/*!*******************************************!*\
  !*** ./app/(admin)/details/[id]/page.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-label */ \"(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./utils/axios.js\");\n/* harmony import */ var _components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/custom/Loading */ \"(app-pages-browser)/./components/custom/Loading.jsx\");\n/* harmony import */ var _constants_capacity_details_questions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/capacity_details_questions */ \"(app-pages-browser)/./constants/capacity_details_questions.json\");\n/* harmony import */ var _constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants/apiConstants */ \"(app-pages-browser)/./constants/apiConstants.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getDetails = async ()=>{\n        try {\n            // Assuming the `id` passed corresponds to a user._id in your db.json\n            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_4__.axiosSecureInstance.get((0,_constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__.ADMIN_DETAILS_SLUG)(id));\n            if (response && response.data) {\n                // Since you're getting user details, simply store the user object.\n                setDetails(response.data);\n                console.log(response.data);\n            }\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[40px] mb-[40px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col justify-between h-[calc(100vh-160px)]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"headline-small mb-[8px]\",\n                    children: \" User Details \"\n                }, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined) : details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-input-details mb-[16px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_8__.Label, {\n                            className: \"label-large\",\n                            children: \"Full Name\"\n                        }, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"body-medium\",\n                            children: details.fullName\n                        }, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_8__.Label, {\n                            className: \"label-large\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"body-medium\",\n                            children: details.email\n                        }, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end gap-3 mt-[60px] \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            className: \"transparent-btn\",\n                            children: \"Go back\"\n                        }, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"B3DF7WybNxEctf9AQbkSPOhHmXA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0w7QUFDRTtBQUNuQjtBQUN1QjtBQUNGO0FBQ1c7QUFDQztBQUU5RCxNQUFNVSxPQUFPO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsRUFBRTs7SUFDOUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQTtJQUN0QyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWUsYUFBYTtRQUNqQixJQUFJO1lBQ0YscUVBQXFFO1lBQ3JFLE1BQU1DLFdBQVcsTUFBTVosNkRBQW1CQSxDQUFDYSxHQUFHLENBQUNWLDJFQUFrQkEsQ0FBQ0c7WUFFbEUsSUFBSU0sWUFBWUEsU0FBU0UsSUFBSSxFQUFFO2dCQUM3QixtRUFBbUU7Z0JBQ25FTixXQUFXSSxTQUFTRSxJQUFJO2dCQUN4QkMsUUFBUUMsR0FBRyxDQUFDSixTQUFTRSxJQUFJO1lBQzNCO1FBQ0YsRUFBRSxPQUFPRyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQ0E7UUFDaEIsU0FBVTtZQUNSUCxXQUFXO1FBQ2I7SUFDRjtJQUVBZixnREFBU0EsQ0FBQztRQUNSZ0I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEwQjs7Ozs7O2dCQUN2Q1Ysd0JBQ0MsOERBQUNSLGtFQUFPQTs7OztnQ0FFUk0seUJBQ0UsOERBQUNXO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3RCLHdEQUFLQTs0QkFBQ3NCLFdBQVU7c0NBQWM7Ozs7OztzQ0FDL0IsOERBQUNFOzRCQUFFRixXQUFVO3NDQUFlWixRQUFRZSxRQUFROzs7Ozs7c0NBRTVDLDhEQUFDekIsd0RBQUtBOzRCQUFDc0IsV0FBVTtzQ0FBYzs7Ozs7O3NDQUMvQiw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQWVaLFFBQVFnQixLQUFLOzs7Ozs7Ozs7Ozs7OEJBTy9DLDhEQUFDTDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ3BCLGlEQUFJQTt3QkFBQ3lCLE1BQUs7a0NBQ1QsNEVBQUMxQix5REFBTUE7NEJBQUNxQixXQUFVO3NDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhEO0dBckRNZjtBQXVETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGFkbWluKS9kZXRhaWxzL1tpZF0vcGFnZS5qc3g/YThiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWxhYmVsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9idXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGF4aW9zU2VjdXJlSW5zdGFuY2UgfSBmcm9tICdAL3V0aWxzL2F4aW9zJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b20vTG9hZGluZyc7XG5pbXBvcnQgZGF0YXNldCBmcm9tICdAL2NvbnN0YW50cy9jYXBhY2l0eV9kZXRhaWxzX3F1ZXN0aW9ucyc7XG5pbXBvcnQgeyBBRE1JTl9ERVRBSUxTX1NMVUcgfSBmcm9tIFwiQC9jb25zdGFudHMvYXBpQ29uc3RhbnRzXCI7XG5cbmNvbnN0IHBhZ2UgPSAoeyBwYXJhbXM6IHsgaWQgfSB9KSA9PiB7XG4gIGNvbnN0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBcbiAgY29uc3QgZ2V0RGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gQXNzdW1pbmcgdGhlIGBpZGAgcGFzc2VkIGNvcnJlc3BvbmRzIHRvIGEgdXNlci5faWQgaW4geW91ciBkYi5qc29uXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zU2VjdXJlSW5zdGFuY2UuZ2V0KEFETUlOX0RFVEFJTFNfU0xVRyhpZCkpO1xuXG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAvLyBTaW5jZSB5b3UncmUgZ2V0dGluZyB1c2VyIGRldGFpbHMsIHNpbXBseSBzdG9yZSB0aGUgdXNlciBvYmplY3QuXG4gICAgICAgIHNldERldGFpbHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGV0YWlscygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs0MHB4XSBtYi1bNDBweF1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtW2NhbGMoMTAwdmgtMTYwcHgpXVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGxpbmUtc21hbGwgbWItWzhweF1cIj4gVXNlciBEZXRhaWxzIDwvaDI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGV0YWlscyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1pbnB1dC1kZXRhaWxzIG1iLVsxNnB4XVwiPlxuICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2VcIj5GdWxsIE5hbWU8L0xhYmVsPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5LW1lZGl1bVwiPntkZXRhaWxzLmZ1bGxOYW1lfTwvcD5cblxuICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2VcIj5FbWFpbDwvTGFiZWw+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvZHktbWVkaXVtXCI+e2RldGFpbHMuZW1haWx9PC9wPlxuXG4gICAgICAgICAgICAgIHsvKiBSZW5kZXIgb3RoZXIgdXNlciBkZXRhaWxzIHNpbWlsYXJseSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgbXQtWzYwcHhdIFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInRyYW5zcGFyZW50LWJ0blwiPkdvIGJhY2s8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYWJlbCIsIkJ1dHRvbiIsIkxpbmsiLCJheGlvc1NlY3VyZUluc3RhbmNlIiwiTG9hZGluZyIsImRhdGFzZXQiLCJBRE1JTl9ERVRBSUxTX1NMVUciLCJwYWdlIiwicGFyYW1zIiwiaWQiLCJkZXRhaWxzIiwic2V0RGV0YWlscyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0RGV0YWlscyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImZ1bGxOYW1lIiwiZW1haWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/details/[id]/page.jsx\n"));

/***/ })

});