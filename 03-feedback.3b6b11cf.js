var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return u.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),m?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-c>=i}function O(){var e=d();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return b?s(n,i-(e-c)):n}(e))}function T(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function h(){var e=d(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(b)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b={},g={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),inputEl:document.querySelector(".feedback-form input")};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(g.textarea.value=e.message,g.inputEl.value=e.email,console.log(JSON.parse(localStorage.getItem("feedback-form-state"))))}(),g.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),g.form.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)})),g.form.addEventListener("input",(e=>{b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}));
//# sourceMappingURL=03-feedback.3b6b11cf.js.map