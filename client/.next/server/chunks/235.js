exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 26037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65105);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17952);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37059);
/**  @jsxImportSource @emotion/react */ /* __next_internal_client_entry_do_not_use__ default auto */ 



function Black(props) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        background-color: #343434;
        color: #f6f6f6;
        border-radius: 34px;
        height: 68px;
        padding: 16px 32px;
        box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.2);
        border: 2px solid transparent;
        ${_styles_typography__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.h5}
        &:hover {
          background-color: #7c7c7c;
          border: 2px solid transparent;
        }
        &:active {
          background-color: #343434;
          border: 2px solid #f1f1f1;
        }
      `,
        ...props,
        children: props.children
    });
}
function White(props) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        background-color: #f1f1f1;
        color: #202020;
        border-radius: 34px;
        height: 68px;
        padding: 16px 32px;
        box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.2);
        border: 2px solid transparent;
        &:hover {
          background-color: #d3d3d3;
          border: 2px solid transparent;
        }
        &:active {
          background-color: #f1f1f1;
          border: 2px solid #202020;
        }
        ${_styles_typography__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.h5}
      `,
        ...props,
        children: props.children
    });
}
function Capsule(props) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        background-color: #343434;
        color: #f1f1f1;
        border-radius: 8px;
        height: 57px;
        padding: 16px 24px;
        border: 2px solid transparent;
        &:hover {
          background-color: #7c7c7c;
          border: 2px solid transparent;
        }
        &:active {
          background-color: #343434;
          border: 2px solid #f1f1f1;
        }
        ${_styles_typography__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.h6}
      `,
        ...props,
        children: props.children
    });
}
function Text(props) {
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
        css: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        background-color: none;
        color: #000000;
        height: 49px;
        padding: 12px 20px;
        text-transform: none;
        text-decoration: none;
        line-height: 1.5;
        &:hover,
        &:active {
          line-height: 1.5;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        ${_styles_typography__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.h6}
      `,
        ...props,
        children: props.children
    });
}
const Button = {
    Black,
    White,
    Capsule,
    Text
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 55235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50468);
/* harmony import */ var _styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43604);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_globals_primitives_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72930);
/* harmony import */ var _app_globals_primitives_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_primitives_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_globals_tokens_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87426);
/* harmony import */ var _app_globals_tokens_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_globals_tokens_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55731);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48947);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26037);








function Header() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().leftContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().imgContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "xction_logo.png",
                                alt: "Xction 로고"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().navContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "",
                                className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7___default().h5),
                                children: "홈"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "",
                                className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7___default().h5),
                                children: "작품"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "",
                                className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7___default().h5),
                                children: "아티클"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "",
                                className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7___default().h5),
                                children: "커뮤니티"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "",
                                className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_7___default().h5),
                                children: "소개"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().rightContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon_SearchIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.White, {
                        children: "로그인"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 48947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SearchIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "42",
        height: "41",
        viewBox: "0 0 42 41",
        fill: "none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M33.0877 16.9492C33.0877 25.1409 26.1941 31.8983 17.5439 31.8983C8.89365 31.8983 2 25.1409 2 16.9492C2 8.75741 8.89365 2 17.5439 2C26.1941 2 33.0877 8.75741 33.0877 16.9492Z",
                stroke: "#F1F1F1",
                strokeWidth: "4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M38.13 39.5866L27.317 29.2496L29.0785 27.3336L39.9999 37.5996L38.13 39.5866Z",
                fill: "#F1F1F1",
                stroke: "#F1F1F1",
                strokeWidth: "2"
            })
        ]
    });
}


/***/ }),

/***/ 37059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17952);
/*
 * @deprecated
 * 공용 컴포넌트 css-in-css로 수정 후에 삭제할 예정입니다.
 */ 
const fontBase = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-family: "SUIT-Regular", sans-serif;
  font-style: normal;
  line-height: normal;
`;
const h1 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${fontBase}
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -1.5px;
`;
const h2 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${fontBase}
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -1.5px;
`;
const h3 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${fontBase}
  font-size: 48px;
  font-weight: 400;
`;
const h4 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${fontBase}
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.25px;
`;
const h5 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${fontBase}
  font-size: 24px;
  font-weight: 400;
  line-height: 36px; /* 150% */
`;
const h6 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  ${fontBase}
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.15px;
`;
const subTitle1 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
`;
const subTitle2 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1px;
`;
const body1 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
const body2 = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  /* Body2 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
`;
const button = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.4px;
`;
const caption = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.4px;
`;
const overline = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
`;
const typography = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    subTitle1,
    subTitle2,
    body1,
    body2,
    button,
    caption,
    overline
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);


/***/ }),

/***/ 43604:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__3JNoS",
	"leftContainer": "Header_leftContainer__S7G8B",
	"navContainer": "Header_navContainer___CbJF",
	"rightContainer": "Header_rightContainer__XDCzy",
	"icon": "Header_icon__ZGc7x"
};


/***/ }),

/***/ 50468:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "typography_h1__DecPZ",
	"h2": "typography_h2__Dn0zf",
	"h3": "typography_h3__o3Abb",
	"h4": "typography_h4__lGrWj",
	"h5": "typography_h5__DGJHL",
	"h6": "typography_h6__vf_A0",
	"subTitle1": "typography_subTitle1__neEq5",
	"subTitle2": "typography_subTitle2__9osCs",
	"body1": "typography_body1__oGhnD",
	"body2": "typography_body2__hZzTi",
	"button": "typography_button__wcxcP",
	"caption": "typography_caption__hfk0A",
	"overline": "typography_overline__FtOuM"
};


/***/ }),

/***/ 72930:
/***/ (() => {



/***/ }),

/***/ 87426:
/***/ (() => {



/***/ })

};
;