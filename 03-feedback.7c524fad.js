!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function v(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function O(e){return l=e,f=setTimeout(j,t),s?S(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function j(){var e=p();if(T(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?S(e):(r=i=void 0,u)}function w(){var e=p(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(d)return f=setTimeout(j,t),S(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const S="feedback-form-state",O={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),inputEl:document.querySelector(".feedback-form input")};!function(){const e=JSON.parse(localStorage.getItem(S));if(e){const{message:t,email:n}=e;O.textarea.value=t,O.inputEl.value=n,console.log(JSON.parse(localStorage.getItem(S)))}}(),O.form.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem(S));console.log(t),e.currentTarget.reset(),localStorage.removeItem(S)})),O.form.addEventListener("input",e(t)((function(e){const{elements:{email:t,message:n}}=e.currentTarget,o={email:t.value,message:n.value};localStorage.setItem(S,JSON.stringify(o))}),500))}();
//# sourceMappingURL=03-feedback.7c524fad.js.map
