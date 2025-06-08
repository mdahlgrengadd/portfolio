import{r as e,g as t}from"./index-DSgK4ghx.js";var n={exports:{}},r={},u={exports:{}},o={},i=e;var a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useState,c=i.useEffect,f=i.useLayoutEffect,l=i.useDebugValue;function v(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(r){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),u=r[0].inst,o=r[1];return f((function(){u.value=n,u.getSnapshot=t,v(u)&&o({inst:u})}),[e,n,t]),c((function(){return v(u)&&o({inst:u}),e((function(){v(u)&&o({inst:u})}))}),[e]),l(n),n};o.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:d,u.exports=o;var S=e,p=u.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},y=p.useSyncExternalStore,E=S.useRef,h=S.useEffect,b=S.useMemo,g=S.useDebugValue;r.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var o=E(null);if(null===o.current){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=b((function(){function e(e){if(!s){if(s=!0,o=e,e=r(e),void 0!==u&&i.hasValue){var t=i.value;if(u(t,e))return a=t}return a=e}if(t=a,x(o,e))return t;var n=r(e);return void 0!==u&&u(t,n)?(o=e,t):(o=e,a=n)}var o,a,s=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,u]);var a=y(e,o[0],o[1]);return h((function(){i.hasValue=!0,i.value=a}),[a]),g(a),a},n.exports=r;const m=t(n.exports);export{m as u};
