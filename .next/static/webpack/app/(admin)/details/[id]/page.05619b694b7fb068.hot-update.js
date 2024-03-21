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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/react-label */ \"(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./utils/axios.js\");\n/* harmony import */ var _components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/custom/Loading */ \"(app-pages-browser)/./components/custom/Loading.jsx\");\n/* harmony import */ var _constants_capacity_details_questions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/capacity_details_questions */ \"(app-pages-browser)/./constants/capacity_details_questions.json\");\n/* harmony import */ var _constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants/apiConstants */ \"(app-pages-browser)/./constants/apiConstants.js\");\n/* harmony import */ var _components_EditUserForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/EditUserForm */ \"(app-pages-browser)/./components/EditUserForm.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getDetails = async ()=>{\n        try {\n            // Assuming the `id` passed corresponds to a user._id in your db.json\n            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_4__.axiosSecureInstance.get((0,_constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__.ADMIN_DETAILS_SLUG)(id));\n            if (response && response.data) {\n                // Since you're getting user details, simply store the user object.\n                setDetails(response.data);\n                console.log(response.data);\n            }\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[40px] mb-[40px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col justify-center items-center h-[calc(100vh-160px)]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"headline-small mb-[50px]\",\n                    children: \" User Details \"\n                }, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined) : details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-9/12 mx-auto relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large\",\n                                children: \"Full Name\"\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"body-medium\",\n                                children: details.fullName\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large block pt-5\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"body-medium\",\n                                children: details.email\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large block pt-5\",\n                                children: \"User Id\"\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"body-medium\",\n                                children: details.id\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large block pt-5\",\n                                children: [\n                                    \"His Role: \",\n                                    details.role\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end gap-3 absolute bottom-[-50px] right-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        className: \"transparent-btn\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end gap-3 absolute top-[10px] right-[10px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogTrigger, {\n                                            asChild: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                                variant: \"outline\",\n                                                children: \"Eidt User\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogContent, {\n                                            className: \"sm:max-w-[425px]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogHeader, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogTitle, {\n                                                            children: \"Edit profile\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogDescription, {\n                                                            children: \"Make changes to your profile here. Click save when you're done.\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"grid gap-4 py-4\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditUserForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                        userId: id\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"B3DF7WybNxEctf9AQbkSPOhHmXA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNMO0FBQ0U7QUFDbkI7QUFDdUI7QUFDRjtBQUNXO0FBQ0M7QUFDVDtBQUNMO0FBQ0Q7QUFTZjtBQUVoQyxNQUFNbUIsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsRUFBRSxFQUFFLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHckIsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ3NCLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU13QixhQUFhO1FBQ2pCLElBQUk7WUFDRixxRUFBcUU7WUFDckUsTUFBTUMsV0FBVyxNQUFNckIsNkRBQW1CQSxDQUFDc0IsR0FBRyxDQUFDbkIsMkVBQWtCQSxDQUFDWTtZQUVsRSxJQUFJTSxZQUFZQSxTQUFTRSxJQUFJLEVBQUU7Z0JBQzdCLG1FQUFtRTtnQkFDbkVOLFdBQVdJLFNBQVNFLElBQUk7Z0JBQ3hCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNFLElBQUk7WUFDM0I7UUFDRixFQUFFLE9BQU9HLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JQLFdBQVc7UUFDYjtJQUNGO0lBRUF4QixnREFBU0EsQ0FBQztRQUNSeUI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEyQjs7Ozs7O2dCQUN4Q1Ysd0JBQ0MsOERBQUNqQixrRUFBT0E7Ozs7Z0NBRVJlLHlCQUNFOzhCQUNFLDRFQUFDVzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUMvQix5REFBS0E7Z0NBQUMrQixXQUFVOzBDQUFjOzs7Ozs7MENBQy9CLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBZVosUUFBUWUsUUFBUTs7Ozs7OzBDQUU1Qyw4REFBQ2xDLHlEQUFLQTtnQ0FBQytCLFdBQVU7MENBQXlCOzs7Ozs7MENBQzFDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBZVosUUFBUWdCLEtBQUs7Ozs7OzswQ0FFekMsOERBQUNuQyx5REFBS0E7Z0NBQUMrQixXQUFVOzBDQUF5Qjs7Ozs7OzBDQUMxQyw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQWVaLFFBQVFELEVBQUU7Ozs7OzswQ0FFdEMsOERBQUNsQix5REFBS0E7Z0NBQUMrQixXQUFVOztvQ0FBeUI7b0NBQzdCWixRQUFRaUIsSUFBSTs7Ozs7OzswQ0FJekIsOERBQUNOO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDN0IsaURBQUlBO29DQUFDbUMsTUFBSzs4Q0FDVCw0RUFBQ3BDLHlEQUFNQTt3Q0FBQzhCLFdBQVU7a0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUd4Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUN0QiwwREFBTUE7O3NEQUNMLDhEQUFDTSxpRUFBYUE7NENBQUN1QixPQUFPO3NEQUNwQiw0RUFBQ3JDLHlEQUFNQTtnREFBQ3NDLFNBQVE7MERBQVU7Ozs7Ozs7Ozs7O3NEQUU1Qiw4REFBQzdCLGlFQUFhQTs0Q0FBQ3FCLFdBQVU7OzhEQUN2Qiw4REFBQ2xCLGdFQUFZQTs7c0VBQ1gsOERBQUNDLCtEQUFXQTtzRUFBQzs7Ozs7O3NFQUNiLDhEQUFDSCxxRUFBaUJBO3NFQUFDOzs7Ozs7Ozs7Ozs7OERBS3JCLDhEQUFDbUI7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUN4QixnRUFBWUE7d0RBQUNpQyxRQUFRdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZOUM7R0FoRk1GO0FBa0ZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeD9hOGJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1sYWJlbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGF4aW9zU2VjdXJlSW5zdGFuY2UgfSBmcm9tIFwiQC91dGlscy9heGlvc1wiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9jdXN0b20vTG9hZGluZ1wiO1xuaW1wb3J0IGRhdGFzZXQgZnJvbSBcIkAvY29uc3RhbnRzL2NhcGFjaXR5X2RldGFpbHNfcXVlc3Rpb25zXCI7XG5pbXBvcnQgeyBBRE1JTl9ERVRBSUxTX1NMVUcgfSBmcm9tIFwiQC9jb25zdGFudHMvYXBpQ29uc3RhbnRzXCI7XG5pbXBvcnQgRWRpdFVzZXJGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dEZXNjcmlwdGlvbixcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dIZWFkZXIsXG4gIERpYWxvZ1RpdGxlLFxuICBEaWFsb2dUcmlnZ2VyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuXG5jb25zdCBwYWdlID0gKHsgcGFyYW1zOiB7IGlkIH0gfSkgPT4ge1xuICBjb25zdCBbZGV0YWlscywgc2V0RGV0YWlsc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBnZXREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBBc3N1bWluZyB0aGUgYGlkYCBwYXNzZWQgY29ycmVzcG9uZHMgdG8gYSB1c2VyLl9pZCBpbiB5b3VyIGRiLmpzb25cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NTZWN1cmVJbnN0YW5jZS5nZXQoQURNSU5fREVUQUlMU19TTFVHKGlkKSk7XG5cbiAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIC8vIFNpbmNlIHlvdSdyZSBnZXR0aW5nIHVzZXIgZGV0YWlscywgc2ltcGx5IHN0b3JlIHRoZSB1c2VyIG9iamVjdC5cbiAgICAgICAgc2V0RGV0YWlscyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREZXRhaWxzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzQwcHhdIG1iLVs0MHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bY2FsYygxMDB2aC0xNjBweCldXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkbGluZS1zbWFsbCBtYi1bNTBweF1cIj4gVXNlciBEZXRhaWxzIDwvaDI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgZGV0YWlscyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCByb3VuZGVkLXhsIHAtOCBkYXJrOmJnLXNsYXRlLTgwMCB3LTkvMTIgbXgtYXV0byByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1sYXJnZVwiPkZ1bGwgTmFtZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keS1tZWRpdW1cIj57ZGV0YWlscy5mdWxsTmFtZX08L3A+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2UgYmxvY2sgcHQtNVwiPkVtYWlsPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5LW1lZGl1bVwiPntkZXRhaWxzLmVtYWlsfTwvcD5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1sYXJnZSBibG9jayBwdC01XCI+VXNlciBJZDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keS1tZWRpdW1cIj57ZGV0YWlscy5pZH08L3A+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2UgYmxvY2sgcHQtNVwiPlxuICAgICAgICAgICAgICAgICAgSGlzIFJvbGU6IHtkZXRhaWxzLnJvbGV9XG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgb3RoZXIgdXNlciBkZXRhaWxzIHNpbWlsYXJseSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgYWJzb2x1dGUgYm90dG9tLVstNTBweF0gcmlnaHQtMFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1idG5cIj5HbyBiYWNrPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIGFic29sdXRlIHRvcC1bMTBweF0gcmlnaHQtWzEwcHhdXCI+XG4gICAgICAgICAgICAgICAgICA8RGlhbG9nPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIj5FaWR0IFVzZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJzbTptYXgtdy1bNDI1cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5FZGl0IHByb2ZpbGU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNYWtlIGNoYW5nZXMgdG8geW91ciBwcm9maWxlIGhlcmUuIENsaWNrIHNhdmUgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UncmUgZG9uZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0VXNlckZvcm0gdXNlcklkPXtpZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYWJlbCIsIkJ1dHRvbiIsIkxpbmsiLCJheGlvc1NlY3VyZUluc3RhbmNlIiwiTG9hZGluZyIsImRhdGFzZXQiLCJBRE1JTl9ERVRBSUxTX1NMVUciLCJFZGl0VXNlckZvcm0iLCJUb2FzdENvbnRhaW5lciIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIkRpYWxvZ0Zvb3RlciIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nVHJpZ2dlciIsInBhZ2UiLCJwYXJhbXMiLCJpZCIsImRldGFpbHMiLCJzZXREZXRhaWxzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXREZXRhaWxzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZnVsbE5hbWUiLCJlbWFpbCIsInJvbGUiLCJocmVmIiwiYXNDaGlsZCIsInZhcmlhbnQiLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/details/[id]/page.jsx\n"));

/***/ })

});