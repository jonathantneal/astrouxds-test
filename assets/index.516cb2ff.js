let x=(t,e=new WeakMap)=>(n,...s)=>(e.has(n)?e:e.set(n,t(n,...s))).get(n),S=(t,e)=>e.trim().split(/\s+/).map(n=>`[${t}~="${n}"]`).join(",");new Range;let a=(t,...e)=>t.append(...e)||t,c=(t,e,...n)=>{let{is:s,namespace:l="http://www.w3.org/1999/xhtml",...o}=Object(e);return a(y(document.createElementNS(l,t,o),o),...n)},p=(t,e,n)=>t[n==null?"removeAttribute":"setAttribute"](e,n),y=(t,e)=>{for(let n in e)p(t,n,e[n]);return t},h=(t,e)=>{for(let n in e)n==="focusable"?t.setAttribute("tabindex",e[n]?"0":"-1"):p(t,(n==="role"?"":"aria-")+n,e[n]);return t},r,w=0,E=()=>{for(w=requestAnimationFrame(E);i.size||u.size;){for(r of i)r();i.clear();for(r of u)r();u.clear()}for(r of g)r();for(r of A)r()},i=new Set,u=new Set,g=new Set,A=new Set,f=()=>{cancelAnimationFrame(w),document.visibilityState==="visible"&&E()},d=()=>{document.removeEventListener("readystatechange",d),document.readyState[7]?(document.addEventListener("visibilitychange",f),f()):document.addEventListener("readystatechange",d)};d();let m=x((t,e)=>t.attachShadow(e));class b extends HTMLElement{}class v extends HTMLElement{constructor(){const e=super(),n=m(e,{mode:"open"}),s=e.constructor,l=L([]),o=c("style",{part:"style"});a(o,s.cssText),a(n,l,o)}static cssText=""}let L=t=>a(h(y(c("span"),{part:"content"}),{role:"radiogroup",label:""}),...t.map(()=>T())),T=()=>a(h(c("span"),{role:"radio",checked:!1,focusable:!0}),c("slot"));class k extends b{constructor(){const e=super(),n=m(e,{mode:"open"}),s=e.constructor,l=c("span",{part:"content"}),o=c("style",{part:"style"});a(o,s.cssText),a(n,l,o),e.update()}queryPart(e){return m(this).querySelector(S("part",e))}update(){a(this.queryPart("content"),c("slot"))}static cssText=""}customElements.define("rux-any",b);customElements.define("rux-shadow",k);customElements.define("rux-group",v);i.add(()=>{console.log("onLayout")});
