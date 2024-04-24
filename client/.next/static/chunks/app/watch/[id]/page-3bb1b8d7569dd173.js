(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{2845:function(e,n,t){Promise.resolve().then(t.bind(t,2681))},2681:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(7821);t(204);var s=t(3771),u=t(1853),c=function(e){let{videoRef:n,isFullScreen:t}=e;return(0,r.jsx)("button",{className:"fullscreen-button",onClick:()=>{if(n.current){if(t){let e=window.document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitExitFullscreen?e.webkitExitFullscreen():e.msExitFullscreen&&e.msExitFullscreen()}else n.current.requestFullscreen?n.current.requestFullscreen():n.current.mozRequestFullScreen?n.current.mozRequestFullScreen():n.current.webkitRequestFullscreen?n.current.webkitRequestFullscreen():n.current.msRequestFullscreen&&n.current.msRequestFullscreen()}},children:t?(0,r.jsx)(u.Z,{}):(0,r.jsx)(s.Z,{})})};t(3692);var l=t(9627),i=t(2848),o=function(e){let{videoRef:n,isPlaying:t,setIsPlaying:s,setDuration:u}=e;return(0,r.jsx)("button",{className:"play-pause-button",onClick:()=>{n.current&&n.current.paused?(n.current.play(),s(!0),u(n.current.duration)):n.current&&(n.current.pause(),s(!1))},children:t?(0,r.jsx)(i.Z,{}):(0,r.jsx)(l.Z,{})})};t(4031);var a=t(8902),d=t(4275),m=function(e){let{videoRef:n}=e;return(0,r.jsxs)("div",{className:"skip-container",children:[(0,r.jsx)("button",{className:"skip-button",onClick:()=>{n.current&&(n.current.currentTime-=10)},children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("button",{className:"skip-button",onClick:()=>{n.current&&(n.current.currentTime+=10)},children:(0,r.jsx)(a.Z,{})})]})};t(8714);var v=t(5760),f=t(5589),j=t(7075),h=function(e){let{videoRef:n,volume:t,setVolume:s,isMuted:u,setIsMuted:c}=e;return(0,r.jsxs)("div",{className:"volume-control",children:[(0,r.jsx)("button",{className:"volume-button",onClick:()=>{n.current&&(n.current.muted=!n.current.muted,c(n.current.muted),s(n.current.muted?0:1))},children:u?(0,r.jsx)(j.Z,{}):(0,r.jsx)(f.Z,{})}),(0,r.jsx)(v.ZP,{className:"volume-slider","aria-label":"Volume",min:0,max:1,step:.01,value:t,onChange:(e,t)=>{let r="number"==typeof t?t:t[0];s(r),n.current&&(n.current.volume=r)},style:{width:50},size:"small",defaultValue:0})]})};t(9906);var x=function(e){let{videoRef:n,currentTime:t,duration:s}=e;return(0,r.jsx)(v.ZP,{value:t&&s?t/s*100:0,onChange:(e,t)=>{n.current&&(n.current.currentTime=s*t/100)},"aria-label":"Time Bar"})};t(6080);var p=t(8078),b=function(e){let{src:n,finishWatchingProject:t}=e,s=(0,p.useRef)(null),[u,l]=(0,p.useState)(!1),[i,a]=(0,p.useState)(0),[d,v]=(0,p.useState)(0),[f,j]=(0,p.useState)(1),[b,E]=(0,p.useState)(!1),[k,F]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let e=s.current;if(e&&n){e.addEventListener("canplay",()=>{(null==e?void 0:e.duration)&&n&&v(e.duration)}),e.addEventListener("timeupdate",()=>{(null==e?void 0:e.duration)&&n&&a(e.currentTime)}),e.addEventListener("ended",t);let r=()=>{let e=window.document;F(!!(e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement))};return document.addEventListener("fullscreenchange",r),document.addEventListener("mozfullscreenchange",r),document.addEventListener("webkitfullscreenchange",r),document.addEventListener("msfullscreenchange",r),()=>{e&&(e.removeEventListener("canplay",()=>{}),e.removeEventListener("timeupdate",()=>{}),e.removeEventListener("ended",()=>{})),document.removeEventListener("fullscreenchange",r),document.removeEventListener("mozfullscreenchange",r),document.removeEventListener("webkitfullscreenchange",r),document.removeEventListener("msfullscreenchange",r)}}},[s,n]),(0,r.jsx)("div",{className:"video-player-container",children:(0,r.jsxs)("div",{className:"video-player",children:[(0,r.jsxs)("video",{ref:s,children:[n&&(0,r.jsx)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,r.jsx)("div",{className:"timebar-contianer",children:(0,r.jsx)(x,{videoRef:s,currentTime:i,duration:d})}),(0,r.jsxs)("div",{className:"controls",children:[(0,r.jsx)(o,{videoRef:s,isPlaying:u,setIsPlaying:l,setDuration:v}),(0,r.jsx)(m,{videoRef:s}),(0,r.jsx)(h,{videoRef:s,volume:f,setVolume:j,isMuted:b,setIsMuted:E}),(0,r.jsx)(c,{videoRef:s,isFullScreen:k})]})]})})},E=t(9188),k=t(9396),F=t(9622);let g=e=>()=>fetch("/api/mock/project/".concat(e)).then(e=>e.ok?e.json():Promise.reject(e)),y=e=>()=>fetch("/api/mock/project/".concat(e,"/finish"),{method:"POST"}).then(async e=>e.ok?e.json():Promise.reject(e)),w=e=>{let n=(0,E.NL)(),{data:t,error:r,status:s}=(0,k.a)({queryKey:["project",e],queryFn:g(e),staleTime:6e4,gcTime:36e5,retry:0}),{mutate:u}=(0,F.D)({mutationFn:y(e),onSuccess:()=>{n.invalidateQueries({queryKey:["project",e]})}}),c=(0,p.useMemo)(()=>{switch(s){case"pending":return{status:"fetching",project:null!=t?t:null,error:null!=r?r:null};case"error":return{status:"fail",project:null,error:r};case"success":return{status:"success",project:t,error:null}}},[s,t,r]);return{...c,finishWatchingProject:u}};function N(e){let n=e.params.id,{status:t,project:s,finishWatchingProject:u}=w(n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>u(),children:"test button"}),"fetching"===t&&(0,r.jsx)("div",{children:"로딩 중"}),"fail"===t&&(0,r.jsx)("div",{children:"실패"}),"success"===t&&(0,r.jsx)(b,{src:s.src,finishWatchingProject:u})]})}},204:function(){},3692:function(){},6080:function(){},4031:function(){},9906:function(){},8714:function(){}},function(e){e.O(0,[873,826,218,698,396,172,115,443,744],function(){return e(e.s=2845)}),_N_E=e.O()}]);