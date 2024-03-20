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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/react-label */ \"(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./utils/axios.js\");\n/* harmony import */ var _components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/custom/Loading */ \"(app-pages-browser)/./components/custom/Loading.jsx\");\n/* harmony import */ var _constants_capacity_details_questions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/capacity_details_questions */ \"(app-pages-browser)/./constants/capacity_details_questions.json\");\n/* harmony import */ var _constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants/apiConstants */ \"(app-pages-browser)/./constants/apiConstants.js\");\n/* harmony import */ var _components_EditUserForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/EditUserForm */ \"(app-pages-browser)/./components/EditUserForm.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getDetails = async ()=>{\n        try {\n            // Assuming the `id` passed corresponds to a user._id in your db.json\n            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_4__.axiosSecureInstance.get((0,_constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__.ADMIN_DETAILS_SLUG)(id));\n            if (response && response.data) {\n                // Since you're getting user details, simply store the user object.\n                setDetails(response.data);\n                console.log(response.data);\n            }\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[40px] mb-[40px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col justify-center items-center h-[calc(100vh-160px)]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"headline-small mb-[50px]\",\n                    children: \" User Details \"\n                }, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined) : details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-9/12 mx-auto relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_11__.Label, {\n                                    className: \"label-large\",\n                                    children: \"Full Name\"\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"body-medium\",\n                                    children: details.fullName\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_11__.Label, {\n                                    className: \"label-large block pt-5\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"body-medium\",\n                                    children: details.email\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_11__.Label, {\n                                    className: \"label-large block pt-5\",\n                                    children: \"User Id\"\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"body-medium\",\n                                    children: details.id\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_11__.Label, {\n                                    className: \"label-large block pt-5\",\n                                    children: [\n                                        \"His Role: \",\n                                        details.role\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-end gap-3 absolute bottom-[-50px] right-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            className: \"transparent-btn\",\n                                            children: \"Go back\"\n                                        }, void 0, false, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-end gap-3 absolute bottom-[-50px] right-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            className: \"transparent-btn\",\n                                            children: \"Eidt User\"\n                                        }, void 0, false, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditUserForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            userId: id\n                        }, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_9__.ToastContainer, {}, void 0, false, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"B3DF7WybNxEctf9AQbkSPOhHmXA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0w7QUFDRTtBQUNuQjtBQUN1QjtBQUNGO0FBQ1c7QUFDQztBQUNUO0FBQ0w7QUFDRDtBQUUvQyxNQUFNWSxPQUFPO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxFQUFFLEVBQUUsRUFBRTs7SUFDOUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQTtJQUN0QyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1pQixhQUFhO1FBQ2pCLElBQUk7WUFDRixxRUFBcUU7WUFDckUsTUFBTUMsV0FBVyxNQUFNZCw2REFBbUJBLENBQUNlLEdBQUcsQ0FBQ1osMkVBQWtCQSxDQUFDSztZQUVsRSxJQUFJTSxZQUFZQSxTQUFTRSxJQUFJLEVBQUU7Z0JBQzdCLG1FQUFtRTtnQkFDbkVOLFdBQVdJLFNBQVNFLElBQUk7Z0JBQ3hCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNFLElBQUk7WUFDM0I7UUFDRixFQUFFLE9BQU9HLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JQLFdBQVc7UUFDYjtJQUNGO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSa0I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEyQjs7Ozs7O2dCQUN4Q1Ysd0JBQ0MsOERBQUNWLGtFQUFPQTs7OztnQ0FFUlEseUJBQ0U7O3NDQUNFLDhEQUFDVzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN4Qix5REFBS0E7b0NBQUN3QixXQUFVOzhDQUFjOzs7Ozs7OENBQy9CLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBZVosUUFBUWUsUUFBUTs7Ozs7OzhDQUU1Qyw4REFBQzNCLHlEQUFLQTtvQ0FBQ3dCLFdBQVU7OENBQXlCOzs7Ozs7OENBQzFDLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBZVosUUFBUWdCLEtBQUs7Ozs7Ozs4Q0FFekMsOERBQUM1Qix5REFBS0E7b0NBQUN3QixXQUFVOzhDQUF5Qjs7Ozs7OzhDQUMxQyw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQWVaLFFBQVFELEVBQUU7Ozs7Ozs4Q0FFdEMsOERBQUNYLHlEQUFLQTtvQ0FBQ3dCLFdBQVU7O3dDQUF5Qjt3Q0FDN0JaLFFBQVFpQixJQUFJOzs7Ozs7OzhDQUl6Qiw4REFBQ047b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUN0QixpREFBSUE7d0NBQUM0QixNQUFLO2tEQUNULDRFQUFDN0IseURBQU1BOzRDQUFDdUIsV0FBVTtzREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3hDLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ3RCLGlEQUFJQTt3Q0FBQzRCLE1BQUs7a0RBQ1QsNEVBQUM3Qix5REFBTUE7NENBQUN1QixXQUFVO3NEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJMUMsOERBQUNqQixnRUFBWUE7NEJBQUN3QixRQUFRcEI7Ozs7OztzQ0FDdEIsOERBQUNILDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0dBcEVNQztBQXNFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGFkbWluKS9kZXRhaWxzL1tpZF0vcGFnZS5qc3g/YThiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBheGlvc1NlY3VyZUluc3RhbmNlIH0gZnJvbSBcIkAvdXRpbHMvYXhpb3NcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvY3VzdG9tL0xvYWRpbmdcIjtcbmltcG9ydCBkYXRhc2V0IGZyb20gXCJAL2NvbnN0YW50cy9jYXBhY2l0eV9kZXRhaWxzX3F1ZXN0aW9uc1wiO1xuaW1wb3J0IHsgQURNSU5fREVUQUlMU19TTFVHIH0gZnJvbSBcIkAvY29uc3RhbnRzL2FwaUNvbnN0YW50c1wiO1xuaW1wb3J0IEVkaXRVc2VyRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0VkaXRVc2VyRm9ybVwiO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5jb25zdCBwYWdlID0gKHsgcGFyYW1zOiB7IGlkIH0gfSkgPT4ge1xuICBjb25zdCBbZGV0YWlscywgc2V0RGV0YWlsc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBnZXREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBBc3N1bWluZyB0aGUgYGlkYCBwYXNzZWQgY29ycmVzcG9uZHMgdG8gYSB1c2VyLl9pZCBpbiB5b3VyIGRiLmpzb25cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NTZWN1cmVJbnN0YW5jZS5nZXQoQURNSU5fREVUQUlMU19TTFVHKGlkKSk7XG5cbiAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIC8vIFNpbmNlIHlvdSdyZSBnZXR0aW5nIHVzZXIgZGV0YWlscywgc2ltcGx5IHN0b3JlIHRoZSB1c2VyIG9iamVjdC5cbiAgICAgICAgc2V0RGV0YWlscyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREZXRhaWxzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzQwcHhdIG1iLVs0MHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bY2FsYygxMDB2aC0xNjBweCldXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkbGluZS1zbWFsbCBtYi1bNTBweF1cIj4gVXNlciBEZXRhaWxzIDwvaDI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGV0YWlscyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCByb3VuZGVkLXhsIHAtOCBkYXJrOmJnLXNsYXRlLTgwMCB3LTkvMTIgbXgtYXV0byByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1sYXJnZVwiPkZ1bGwgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keS1tZWRpdW1cIj57ZGV0YWlscy5mdWxsTmFtZX08L3A+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2UgYmxvY2sgcHQtNVwiPkVtYWlsPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5LW1lZGl1bVwiPntkZXRhaWxzLmVtYWlsfTwvcD5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1sYXJnZSBibG9jayBwdC01XCI+VXNlciBJZDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keS1tZWRpdW1cIj57ZGV0YWlscy5pZH08L3A+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2UgYmxvY2sgcHQtNVwiPlxuICAgICAgICAgICAgICAgICAgSGlzIFJvbGU6IHtkZXRhaWxzLnJvbGV9XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgb3RoZXIgdXNlciBkZXRhaWxzIHNpbWlsYXJseSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgYWJzb2x1dGUgYm90dG9tLVstNTBweF0gcmlnaHQtMFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1idG5cIj5HbyBiYWNrPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIGFic29sdXRlIGJvdHRvbS1bLTUwcHhdIHJpZ2h0LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtYnRuXCI+RWlkdCBVc2VyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RWRpdFVzZXJGb3JtIHVzZXJJZD17aWR9IC8+XG4gICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYWJlbCIsIkJ1dHRvbiIsIkxpbmsiLCJheGlvc1NlY3VyZUluc3RhbmNlIiwiTG9hZGluZyIsImRhdGFzZXQiLCJBRE1JTl9ERVRBSUxTX1NMVUciLCJFZGl0VXNlckZvcm0iLCJUb2FzdENvbnRhaW5lciIsInBhZ2UiLCJwYXJhbXMiLCJpZCIsImRldGFpbHMiLCJzZXREZXRhaWxzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXREZXRhaWxzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZnVsbE5hbWUiLCJlbWFpbCIsInJvbGUiLCJocmVmIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/details/[id]/page.jsx\n"));

/***/ })

});