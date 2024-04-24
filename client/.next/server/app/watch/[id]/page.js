(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 55355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20089);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46221);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93585);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75594);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'watch',
        {
        children: [
        '[id]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 80447)), "/Users/jun-young/Desktop/dev/xction/xction.co.kr/client/src/app/watch/[id]/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93626))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87125)), "/Users/jun-young/Desktop/dev/xction/xction.co.kr/client/src/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 57382, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 93626))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/jun-young/Desktop/dev/xction/xction.co.kr/client/src/app/watch/[id]/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/watch/[id]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/watch/[id]/page",
        pathname: "/watch/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 75639:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30786))

/***/ }),

/***/ 30786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Watch)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Watch/FullScreen/FullScreen.css
var FullScreen = __webpack_require__(58479);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Fullscreen.js
var Fullscreen = __webpack_require__(33988);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/FullscreenExit.js
var FullscreenExit = __webpack_require__(29825);
;// CONCATENATED MODULE: ./src/components/Watch/FullScreen/FullScreen.tsx




function FullScreen_FullScreen({ videoRef, isFullScreen }) {
    const handleFullScreenToggle = ()=>{
        if (videoRef.current) {
            if (!isFullScreen) {
                // Enter full screen
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                } else if (videoRef.current.mozRequestFullScreen) {
                    // Firefox
                    videoRef.current.mozRequestFullScreen();
                } else if (videoRef.current.webkitRequestFullscreen) {
                    // Chrome, Safari and Opera
                    videoRef.current.webkitRequestFullscreen();
                } else if (videoRef.current.msRequestFullscreen) {
                    // IE/Edge
                    videoRef.current.msRequestFullscreen();
                }
            } else {
                const document = window.document;
                // Exit full screen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    // Firefox
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    // Chrome, Safari and Opera
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    // IE/Edge
                    document.msExitFullscreen();
                }
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "fullscreen-button",
        onClick: handleFullScreenToggle,
        children: isFullScreen ? /*#__PURE__*/ jsx_runtime_.jsx(FullscreenExit/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Fullscreen/* default */.Z, {})
    });
}
/* harmony default export */ const Watch_FullScreen_FullScreen = (FullScreen_FullScreen);

// EXTERNAL MODULE: ./src/components/Watch/PlayPause/PlayPause.css
var PlayPause = __webpack_require__(10284);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/PlayArrow.js
var PlayArrow = __webpack_require__(19406);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Pause.js
var Pause = __webpack_require__(84225);
;// CONCATENATED MODULE: ./src/components/Watch/PlayPause/PlayPause.tsx




function PlayPause_PlayPause({ videoRef, isPlaying, setIsPlaying, setDuration }) {
    const togglePlay = ()=>{
        if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            setDuration(videoRef.current.duration); // 처음 play부터 duration을 가져오기 위해
        } else if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "play-pause-button",
        onClick: togglePlay,
        children: isPlaying ? /*#__PURE__*/ jsx_runtime_.jsx(Pause/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(PlayArrow/* default */.Z, {})
    });
}
/* harmony default export */ const Watch_PlayPause_PlayPause = (PlayPause_PlayPause);

// EXTERNAL MODULE: ./src/components/Watch/Skip/Skip.css
var Skip = __webpack_require__(74854);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Forward10.js
var Forward10 = __webpack_require__(34368);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Replay10.js
var Replay10 = __webpack_require__(91114);
;// CONCATENATED MODULE: ./src/components/Watch/Skip/Skip.tsx




function Skip_Skip({ videoRef }) {
    const skipForward = ()=>{
        if (videoRef.current) {
            videoRef.current.currentTime += 10; // Skip forward by 10 seconds
        }
    };
    const skipBackward = ()=>{
        if (videoRef.current) {
            videoRef.current.currentTime -= 10; // Skip backward by 10 seconds
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "skip-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "skip-button",
                onClick: skipBackward,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Replay10/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "skip-button",
                onClick: skipForward,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Forward10/* default */.Z, {})
            })
        ]
    });
}
/* harmony default export */ const Watch_Skip_Skip = (Skip_Skip);

// EXTERNAL MODULE: ./src/components/Watch/Volume/Volume.css
var Volume = __webpack_require__(61185);
// EXTERNAL MODULE: ../node_modules/@mui/material/node/Slider/index.js
var Slider = __webpack_require__(89882);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/VolumeUp.js
var VolumeUp = __webpack_require__(79527);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/VolumeOff.js
var VolumeOff = __webpack_require__(31414);
;// CONCATENATED MODULE: ./src/components/Watch/Volume/Volume.tsx





function Volume_Volume({ videoRef, volume, setVolume, isMuted, setIsMuted }) {
    const handleVolumeChange = (event, newValue)=>{
        const newVolume = typeof newValue === "number" ? newValue : newValue[0];
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };
    const handleMute = ()=>{
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
            setVolume(videoRef.current.muted ? 0 : 1);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "volume-control",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "volume-button",
                onClick: handleMute,
                children: isMuted ? /*#__PURE__*/ jsx_runtime_.jsx(VolumeOff/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(VolumeUp/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
                className: "volume-slider",
                "aria-label": "Volume",
                min: 0,
                max: 1,
                step: 0.01,
                value: volume,
                onChange: handleVolumeChange,
                style: {
                    width: 50
                },
                size: "small",
                defaultValue: 0
            })
        ]
    });
}
/* harmony default export */ const Watch_Volume_Volume = (Volume_Volume);

// EXTERNAL MODULE: ./src/components/Watch/TimeBar/TimeBar.css
var TimeBar = __webpack_require__(90745);
;// CONCATENATED MODULE: ./src/components/Watch/TimeBar/TimeBar.tsx



function TimeBar_TimeBar({ videoRef, currentTime, duration }) {
    const handleTimeBarClick = (event, newValue)=>{
        const seekTime = duration * newValue / 100;
        if (videoRef.current) {
            videoRef.current.currentTime = seekTime;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Slider_default()), {
        value: currentTime && duration ? currentTime / duration * 100 : 0,
        onChange: handleTimeBarClick,
        "aria-label": "Time Bar"
    });
}
/* harmony default export */ const Watch_TimeBar_TimeBar = (TimeBar_TimeBar);

// EXTERNAL MODULE: ./src/components/Watch/Player/Player.css
var Player = __webpack_require__(14908);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/Watch/Player/Player.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function Player_Player({ src, finishWatchingProject }) {
    const videoRef = (0,react_.useRef)(null);
    const [isPlaying, setIsPlaying] = (0,react_.useState)(false);
    const [currentTime, setCurrentTime] = (0,react_.useState)(0);
    const [duration, setDuration] = (0,react_.useState)(0);
    const [volume, setVolume] = (0,react_.useState)(1);
    const [isMuted, setIsMuted] = (0,react_.useState)(false);
    const [isFullScreen, setIsFullScreen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const currentVideo = videoRef.current;
        if (currentVideo && src) {
            // Update currentTime and duration when the video can play
            currentVideo.addEventListener("canplay", ()=>{
                if (!currentVideo?.duration || !src) return;
                setDuration(currentVideo.duration);
            });
            // Update currentTime while the video is playing
            currentVideo.addEventListener("timeupdate", ()=>{
                if (!currentVideo?.duration || !src) return;
                setCurrentTime(currentVideo.currentTime);
            });
            currentVideo.addEventListener("ended", finishWatchingProject);
            // Detect full-screen change
            const handleFullScreenChange = ()=>{
                const document1 = window.document;
                setIsFullScreen(!!(document1.fullscreenElement || document1.mozFullScreenElement || document1.webkitFullscreenElement || document1.msFullscreenElement));
            };
            document.addEventListener("fullscreenchange", handleFullScreenChange);
            document.addEventListener("mozfullscreenchange", handleFullScreenChange);
            document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
            document.addEventListener("msfullscreenchange", handleFullScreenChange);
            return ()=>{
                if (currentVideo) {
                    // Clean up event listeners when the component unmounts
                    currentVideo.removeEventListener("canplay", ()=>{});
                    currentVideo.removeEventListener("timeupdate", ()=>{});
                    currentVideo.removeEventListener("ended", ()=>{});
                }
                // Clean up full-screen change listeners
                document.removeEventListener("fullscreenchange", handleFullScreenChange);
                document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
                document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
                document.removeEventListener("msfullscreenchange", handleFullScreenChange);
            };
        }
    }, [
        videoRef,
        src
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "video-player-container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "video-player",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                    ref: videoRef,
                    children: [
                        src && /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: src,
                            type: "video/mp4"
                        }),
                        "Your browser does not support the video tag."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "timebar-contianer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Watch_TimeBar_TimeBar, {
                        videoRef: videoRef,
                        currentTime: currentTime,
                        duration: duration
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "controls",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Watch_PlayPause_PlayPause, {
                            videoRef: videoRef,
                            isPlaying: isPlaying,
                            setIsPlaying: setIsPlaying,
                            setDuration: setDuration
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Watch_Skip_Skip, {
                            videoRef: videoRef
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Watch_Volume_Volume, {
                            videoRef: videoRef,
                            volume: volume,
                            setVolume: setVolume,
                            isMuted: isMuted,
                            setIsMuted: setIsMuted
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Watch_FullScreen_FullScreen, {
                            videoRef: videoRef,
                            isFullScreen: isFullScreen
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Watch_Player_Player = (Player_Player);

// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(25207);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(85019);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(36804);
;// CONCATENATED MODULE: ./src/api/SampleProjectService/index.ts
/**
 * SampleProjectService의 유즈케이스에서 사용할 fetch 함수를 정의합니다.
 * 유즈케이스를 실제로 구현한 hook이 너무 커지는 것을 방지하기 위해 분리해두었습니다.
 */ /**
 *
 */ const getSampleProjectById = (id)=>()=>fetch(`/api/mock/project/${id}`).then((res)=>res.ok ? res.json() : Promise.reject(res));
const postSampleProjectById = (id)=>()=>fetch(`/api/mock/project/${id}/finish`, {
            method: "POST"
        }).then(async (res)=>res.ok ? res.json() : Promise.reject(res));

;// CONCATENATED MODULE: ./src/hooks/SampleProjectService/index.ts



/**
 * SampleUserService 유즈케이스를 위한 구현체입니다.
 * 각 코드에 대한 설명을 자세히 달아놓았으니 참고하시기 바랍니다.
 */ const useSampleProjectService = (id)=>{
    // query를 관리하는 객체
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    // useQuery를 이용한 비디오 가져오기
    const { data, error, status } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "project",
            id
        ],
        queryFn: getSampleProjectById(id),
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 60,
        retry: 0
    });
    // useMutation을 이용한 POST 시도
    const { mutate } = (0,useMutation/* useMutation */.D)({
        mutationFn: postSampleProjectById(id),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "project",
                    id
                ]
            }); // POST 성공 시 ["project", id] 쿼리를 새로고침해줍니다
        }
    });
    // useQuery의 결과값으로부터 status & me & error 값을 파싱합니다.
    // useMemo를 써 parsedFetchResult의 값에 영향을 주지 않는 리렌더링 시에는 캐싱된 값을 사용합니다.
    const parsedFetchResult = (0,react_.useMemo)(()=>{
        switch(status){
            case "pending":
                return {
                    status: "fetching",
                    project: data ?? null,
                    error: error ?? null
                }; // 이렇게 하면 타입스크립트에게 status가 string union 타입임을 알려줄 수 있습니다.
            case "error":
                return {
                    status: "fail",
                    project: null,
                    error
                };
            case "success":
                return {
                    status: "success",
                    project: data,
                    error: null
                };
        }
    }, [
        status,
        data,
        error
    ]);
    return {
        ...parsedFetchResult,
        finishWatchingProject: mutate
    }; // 유즈케이스의 타입과 동일한 객체를 반환합니다.
};

;// CONCATENATED MODULE: ./src/app/watch/[id]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Watch(props) {
    const id = props.params.id;
    const { status, project, finishWatchingProject } = useSampleProjectService(id);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>finishWatchingProject(),
                children: "test button"
            }),
            status === "fetching" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "로딩 중"
            }),
            status === "fail" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "실패"
            }),
            status === "success" && /*#__PURE__*/ jsx_runtime_.jsx(Watch_Player_Player, {
                src: project.src,
                finishWatchingProject: finishWatchingProject
            })
        ]
    });
}


/***/ }),

/***/ 80447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31888);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/jun-young/Desktop/dev/xction/xction.co.kr/client/src/app/watch/[id]/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 58479:
/***/ (() => {



/***/ }),

/***/ 10284:
/***/ (() => {



/***/ }),

/***/ 14908:
/***/ (() => {



/***/ }),

/***/ 74854:
/***/ (() => {



/***/ }),

/***/ 90745:
/***/ (() => {



/***/ }),

/***/ 61185:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [750,358,629,130,19,903,967,234], () => (__webpack_exec__(55355)));
module.exports = __webpack_exports__;

})();