exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 87021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PostListCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/styles/typography.module.css
var typography_module = __webpack_require__(50468);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./src/components/Card/PostListCard/PostListCard.module.css
var PostListCard_module = __webpack_require__(72601);
var PostListCard_module_default = /*#__PURE__*/__webpack_require__.n(PostListCard_module);
// EXTERNAL MODULE: ./src/components/Tag/index.tsx
var Tag = __webpack_require__(56174);
;// CONCATENATED MODULE: ./src/components/Icon/LikeIcon/index.tsx
/**
 * LikeIcon 벡터 정보가 없어 우선 코멘트 아이콘으로 대체합니다.
 */ 
function LikeIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "26",
        viewBox: "0 0 30 26",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M25 1.99986H5C4.20435 1.99986 3.44129 2.31591 2.87868 2.87848C2.31607 3.44105 2 4.20406 2 4.99966V14.999C2 15.7946 2.31607 16.5576 2.87868 17.1201C3.44129 17.6827 4.20435 17.9988 5 17.9988H15C15.1314 17.9985 15.2616 18.0242 15.3831 18.0743C15.5045 18.1244 15.615 18.1979 15.708 18.2907L20 22.5864V18.9987C20 18.7335 20.1054 18.4792 20.2929 18.2916C20.4804 18.1041 20.7348 17.9988 21 17.9988H25C25.7956 17.9988 26.5587 17.6827 27.1213 17.1201C27.6839 16.5576 28 15.7946 28 14.999V4.99966C28 4.20406 27.6839 3.44105 27.1213 2.87848C26.5587 2.31591 25.7956 1.99986 25 1.99986ZM5 0H25C26.3261 0 27.5979 0.526748 28.5355 1.46437C29.4732 2.40198 30 3.67366 30 4.99966V14.999C30 15.6555 29.8707 16.3057 29.6194 16.9123C29.3681 17.5188 28.9998 18.07 28.5355 18.5343C28.0712 18.9985 27.52 19.3668 26.9134 19.618C26.3068 19.8693 25.6566 19.9986 25 19.9986H22V24.9983C22.0004 25.1963 21.9419 25.39 21.832 25.5547C21.7222 25.7195 21.5659 25.848 21.3829 25.9238C21.2 25.9996 20.9986 26.0194 20.8044 25.9807C20.6102 25.942 20.4319 25.8464 20.292 25.7062L14.586 19.9986H5C3.67392 19.9986 2.40215 19.4719 1.46447 18.5343C0.526784 17.5966 0 16.325 0 14.999L0 4.99966C0 3.67366 0.526784 2.40198 1.46447 1.46437C2.40215 0.526748 3.67392 0 5 0Z",
            fill: "#F1F1F1"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Icon/CommentIcon/index.tsx

function CommentIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "26",
        viewBox: "0 0 30 26",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M25 1.99986H5C4.20435 1.99986 3.44129 2.31591 2.87868 2.87848C2.31607 3.44105 2 4.20406 2 4.99966V14.999C2 15.7946 2.31607 16.5576 2.87868 17.1201C3.44129 17.6827 4.20435 17.9988 5 17.9988H15C15.1314 17.9985 15.2616 18.0242 15.3831 18.0743C15.5045 18.1244 15.615 18.1979 15.708 18.2907L20 22.5864V18.9987C20 18.7335 20.1054 18.4792 20.2929 18.2916C20.4804 18.1041 20.7348 17.9988 21 17.9988H25C25.7956 17.9988 26.5587 17.6827 27.1213 17.1201C27.6839 16.5576 28 15.7946 28 14.999V4.99966C28 4.20406 27.6839 3.44105 27.1213 2.87848C26.5587 2.31591 25.7956 1.99986 25 1.99986ZM5 0H25C26.3261 0 27.5979 0.526748 28.5355 1.46437C29.4732 2.40198 30 3.67366 30 4.99966V14.999C30 15.6555 29.8707 16.3057 29.6194 16.9123C29.3681 17.5188 28.9998 18.07 28.5355 18.5343C28.0712 18.9985 27.52 19.3668 26.9134 19.618C26.3068 19.8693 25.6566 19.9986 25 19.9986H22V24.9983C22.0004 25.1963 21.9419 25.39 21.832 25.5547C21.7222 25.7195 21.5659 25.848 21.3829 25.9238C21.2 25.9996 20.9986 26.0194 20.8044 25.9807C20.6102 25.942 20.4319 25.8464 20.292 25.7062L14.586 19.9986H5C3.67392 19.9986 2.40215 19.4719 1.46447 18.5343C0.526784 17.5966 0 16.325 0 14.999L0 4.99966C0 3.67366 0.526784 2.40198 1.46447 1.46437C2.40215 0.526748 3.67392 0 5 0Z",
            fill: "#F1F1F1"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Line/index.tsx

function line() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1520",
        height: "2",
        viewBox: "0 0 1520 2",
        fill: "none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M0 1.33325H1520",
            stroke: "#7C7C7C"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Card/PostListCard/index.tsx
/**
 * 커뮤니티의 Post List를 보여주는 게시판 컴포넌트입니다.
 *
 */ 






function PostListCard({ data }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (PostListCard_module_default()).container,
        children: data.map((post, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PostListCard_module_default()).postItemContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PostListCard_module_default()).upperContainer,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: (typography_module_default()).h5,
                                        children: post.title
                                    }),
                                    post.tags.map((tag, index)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx(Tag/* default */.Z, {
                                            data: tag
                                        }, index);
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (PostListCard_module_default()).contentContainer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: (typography_module_default()).h6,
                                    children: post.content.slice(0, 100)
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (PostListCard_module_default()).lowerContainer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (PostListCard_module_default()).likesContainer,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(LikeIcon, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (typography_module_default()).subTitle1,
                                                children: post.likesCount
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (PostListCard_module_default()).commentsContainer,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CommentIcon, {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (typography_module_default()).subTitle1,
                                                children: post.commentsCount
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (typography_module_default()).subTitle1,
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (typography_module_default()).subTitle1,
                                        children: `${post.createdTime.getFullYear()}.${(post.createdTime.getMonth() + 1).toString().padStart(2, "0")}.${post.createdTime.getDate().toString().padStart(2, "0")}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (typography_module_default()).subTitle1,
                                        children: post.createdUser.name
                                    })
                                ]
                            })
                        ]
                    }, index),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (PostListCard_module_default()).lineContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(line, {})
                    })
                ]
            }))
    });
}


/***/ }),

/***/ 72601:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PostListCard_container__Tl8b7",
	"postItemContainer": "PostListCard_postItemContainer__L8lY7",
	"upperContainer": "PostListCard_upperContainer__PKHZt",
	"contentContainer": "PostListCard_contentContainer__cNwli",
	"lowerContainer": "PostListCard_lowerContainer__z7tOg",
	"likesContainer": "PostListCard_likesContainer____fA1",
	"commentsContainer": "PostListCard_commentsContainer__v3lb1",
	"lineContainer": "PostListCard_lineContainer__pqsJJ"
};


/***/ })

};
;