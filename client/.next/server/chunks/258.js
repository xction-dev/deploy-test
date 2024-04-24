exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 39258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TrendingCardLong)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50468);
/* harmony import */ var _styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78081);
/* harmony import */ var _TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56174);
/**
 * 실시간 인기글을 보여주는 카드 컴포넌트입니다.
 * 추후 고정된 전체 width 값을 반응형으로 구현하며, 태그 작업이 필요합니다.
 */ 



function TrendingCardLong({ data }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3___default().h4),
                    children: "실시간 인기글"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default().postContainer),
                children: data.map((post, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default().postItemContainer),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default().postInfoContainer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3___default().h5),
                                        children: index + 1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3___default().h5),
                                            children: post.title
                                        })
                                    }),
                                    post.tags.map((tag, index)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            data: tag
                                        }, index);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_TrendingCardLong_module_css__WEBPACK_IMPORTED_MODULE_2___default().postViewsDateContainer),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_3___default().h6),
                                    children: `${post.viewsCount}회 | ${post.createdTime.getFullYear()}.${(post.createdTime.getMonth() + 1).toString().padStart(2, "0")}.${post.createdTime.getDate().toString().padStart(2, "0")}`
                                })
                            })
                        ]
                    }, index))
            })
        ]
    });
}


/***/ }),

/***/ 56174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_typography_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50468);
/* harmony import */ var _styles_typography_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26844);
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1__);
/**
 * 커뮤니티에 쓰일 태그 컴포넌트입니다.
 * name을 props로 받아서 태그를 렌더링합니다.
 */ 


const tagColor = {
    정보: "purple",
    홍보: "pink",
    자유: "blue",
    한줄평: "navy",
    주간Best: "green",
    월간Best: "mint",
    "실시간\uD83D\uDD25": "orange"
};
function Tag({ data }) {
    const color = tagColor[data.name];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default().container)} ${(_Tag_module_css__WEBPACK_IMPORTED_MODULE_1___default())[color]}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_typography_module_css__WEBPACK_IMPORTED_MODULE_2___default().subTitle2),
            children: data.name
        })
    });
}


/***/ }),

/***/ 78081:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "TrendingCardLong_container__hnst_",
	"titleContainer": "TrendingCardLong_titleContainer__FrfjS",
	"postContainer": "TrendingCardLong_postContainer__64t2y",
	"postItemContainer": "TrendingCardLong_postItemContainer__GM1Q_",
	"postInfoContainer": "TrendingCardLong_postInfoContainer__n_fn5"
};


/***/ }),

/***/ 26844:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Tag_container__RZKk_",
	"purple": "Tag_purple__KDdgH",
	"pink": "Tag_pink__Jl3tW",
	"blue": "Tag_blue___hue9",
	"navy": "Tag_navy__rRwel",
	"green": "Tag_green__7Duad",
	"mint": "Tag_mint__RXvfF",
	"orange": "Tag_orange__dosWT"
};


/***/ })

};
;