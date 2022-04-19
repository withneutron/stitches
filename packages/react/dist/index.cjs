var e,t="colors",r="sizes",n="space",i={gap:n,gridGap:n,columnGap:n,gridColumnGap:n,rowGap:n,gridRowGap:n,inset:n,insetBlock:n,insetBlockEnd:n,insetBlockStart:n,insetInline:n,insetInlineEnd:n,insetInlineStart:n,margin:n,marginTop:n,marginRight:n,marginBottom:n,marginLeft:n,marginBlock:n,marginBlockEnd:n,marginBlockStart:n,marginInline:n,marginInlineEnd:n,marginInlineStart:n,padding:n,paddingTop:n,paddingRight:n,paddingBottom:n,paddingLeft:n,paddingBlock:n,paddingBlockEnd:n,paddingBlockStart:n,paddingInline:n,paddingInlineEnd:n,paddingInlineStart:n,top:n,right:n,bottom:n,left:n,scrollMargin:n,scrollMarginTop:n,scrollMarginRight:n,scrollMarginBottom:n,scrollMarginLeft:n,scrollMarginX:n,scrollMarginY:n,scrollMarginBlock:n,scrollMarginBlockEnd:n,scrollMarginBlockStart:n,scrollMarginInline:n,scrollMarginInlineEnd:n,scrollMarginInlineStart:n,scrollPadding:n,scrollPaddingTop:n,scrollPaddingRight:n,scrollPaddingBottom:n,scrollPaddingLeft:n,scrollPaddingX:n,scrollPaddingY:n,scrollPaddingBlock:n,scrollPaddingBlockEnd:n,scrollPaddingBlockStart:n,scrollPaddingInline:n,scrollPaddingInlineEnd:n,scrollPaddingInlineStart:n,fontSize:"fontSizes",background:t,backgroundColor:t,backgroundImage:t,borderImage:t,border:t,borderBlock:t,borderBlockEnd:t,borderBlockStart:t,borderBottom:t,borderBottomColor:t,borderColor:t,borderInline:t,borderInlineEnd:t,borderInlineStart:t,borderLeft:t,borderLeftColor:t,borderRight:t,borderRightColor:t,borderTop:t,borderTopColor:t,caretColor:t,color:t,columnRuleColor:t,fill:t,outline:t,outlineColor:t,stroke:t,textDecorationColor:t,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:r,minBlockSize:r,maxBlockSize:r,inlineSize:r,minInlineSize:r,maxInlineSize:r,width:r,minWidth:r,maxWidth:r,height:r,minHeight:r,maxHeight:r,flexBasis:r,gridTemplateColumns:r,gridTemplateRows:r,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},o=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,l=()=>{const e=Object.create(null);return(t,r,...n)=>{const i=(e=>JSON.stringify(e,o))(t);return i in e?e[i]:e[i]=r(t,...n)}},s=Symbol.for("sxs.internal"),a=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),c=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:d}=Object.prototype,g=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),p=/\s+(?![^()]*\))/,u=e=>t=>e(..."string"==typeof t?String(t).split(p):[t]),h={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:u(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:u(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:u(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:u(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:u(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:u(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},m=/([\d.]+)([^]*)/,f=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,b=(e,t)=>e in S&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${g(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${g(e)}:${r}fit-content`)+i)):String(t),S={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},y=e=>e?e+"-":"",k=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?y(t)+(l.includes("$")?"":y(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":""))),$=/\s*,\s*(?![^()]*\))/,B=Object.prototype.toString,x=(e,t,r,n,i)=>{let o,l,s;const a=(e,t,r)=>{let c,d;const p=e=>{for(c in e){const x=64===c.charCodeAt(0),z=x&&Array.isArray(e[c])?e[c]:[e[c]];for(d of z){const e=/[A-Z]/.test(S=c)?S:S.replace(/-[^]/g,(e=>e[1].toUpperCase())),z="object"==typeof d&&d&&d.toString===B&&(!n.utils[e]||!t.length);if(e in n.utils&&!z){const t=n.utils[e];if(t!==l){l=t,p(t(d)),l=null;continue}}else if(e in h){const t=h[e];if(t!==s){s=t,p(t(d)),s=null;continue}}if(x&&(u=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=u.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,i,o)=>{const l=m.test(t),s=.0625*(l?-1:1),[a,c]=l?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(m,((e,t,n)=>Number(t)+s*(">"===r?1:-1)+n)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(m,((e,t,r)=>Number(t)+s*(">"===i?-1:1)+r)):o):"")+")"}))),z){const e=x?r.concat(c):[...r],n=x?[...t]:f(t,c.split($));void 0!==o&&i(I(...o)),o=void 0,a(d,n,e)}else void 0===o&&(o=[[],t,r]),c=x||36!==c.charCodeAt(0)?c:`--${y(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=z?d:"number"==typeof d?d&&e in R?String(d)+"px":String(d):k(b(e,null==d?"":d),n.prefix,n.themeMap[e]),o[0].push(`${x?`${c} `:`${g(c)}:`}${d}`)}}var u,S};p(e),void 0!==o&&i(I(...o)),o=void 0};a(n.cssPreProcessor(e),t,r)},I=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,R={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},z=e=>String.fromCharCode(e+(e>25?39:97)),W=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=z(t%52)+r;return z(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),j=["themed","global","styled","onevar","resonevar","allvar","inline"],E=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},P=e=>{let t;const r=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((r,n)=>{const{cssText:i}=r;let o="";if(i.startsWith("--sxs"))return"";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===r)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i})).join("")},n=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(const t in e)delete e[t]}const i=Object(e).styleSheets||[];for(const e of i)if(E(e)){for(let i=0,o=e.cssRules;o[i];++i){const l=Object(o[i]);if(1!==l.type)continue;const s=Object(o[i+1]);if(4!==s.type)continue;++i;const{cssText:a}=l;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=j[c[0]];d&&(t||(t={sheet:e,reset:n,rules:{},toString:r}),t.rules[d]={group:s,index:i,cache:new Set(c)})}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:n,toString:r}}const{sheet:o,rules:l}=t;for(let e=j.length-1;e>=0;--e){const t=j[e];if(!l[t]){const r=j[e+1],n=l[r]?l[r].index:o.cssRules.length;o.insertRule("@media{}",n),o.insertRule(`--sxs{--sxs:${e}}`,n),l[t]={group:o.cssRules[n+1],index:n,cache:new Set([e])}}w(l[t])}};return n(),t},w=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(e){}}},T=Symbol(),M=l(),v=null,C=(e,t)=>{const r=M(e,(()=>(...r)=>{const n=v;v=null;let i={type:null,composers:new Set};for(const t of r)if(null!=t)if(t[s]){null==i.type&&(i.type=t[s].type);for(const e of t[s].composers)i.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==i.type&&(i.type=t):i.composers.add(L({componentName:n,...t},e));if(null==i.type&&(i.type="span"),!i.composers.size){const e=n?`c-${n}-`:"";i.composers.add([`${e}PJLV`,{},[],[],{},[]])}return O(e,i,t)}));return r.withName=e=>(...t)=>(v=e,r(...t)),r},L=(e,t)=>{let{variants:r,compoundVariants:n,defaultVariants:i,componentName:o,...l}=e;const s=o&&o.length>0?`${o}-${W(l)}`:W(l),a=`${y(t.prefix)}c-${s}`,g=[],p=[],u=Object.create(null),h=[];for(const e in i)u[e]=String(i[e]);if("object"==typeof r&&r)for(const e in r){m=u,f=e,d.call(m,f)||(u[e]="undefined");const t=r[e];for(const r in t){const n={[e]:String(r)};"undefined"===String(r)&&h.push(e);const i=t[r],o=[n,i,!c(i)];g.push(o)}}var m,f;if("object"==typeof n&&n)for(const e of n){let{css:t,...r}=e;t="object"==typeof t&&t||{};for(const e in r)r[e]=String(r[e]);const n=[r,t,!c(t)];p.push(n)}return[a,l,g,p,u,h]},O=(e,t,r)=>{const[n,i,o,l]=N(t.composers),c="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[T].length;r++){const[n,i]=t[T][r];e.rules[n].apply(i)}return t[T]=[],null}return t[T]=[],t.rules={},j.forEach((e=>t.rules[e]={apply:r=>t[T].push([e,r])})),t})(r):null,d=(c||r).rules,g=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=s=>{s="object"==typeof s&&s||D;const{css:a,...p}=s,u={};for(const e in o)if(delete p[e],e in s){let t=s[e];"object"==typeof t&&t?u[e]={"@initial":o[e],...t}:(t=String(t),u[e]="undefined"!==t||l.has(e)?t:o[e])}else u[e]=o[e];const h=new Set([...i]);for(const[n,i,o,l]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),x(i,[`.${n}`],[],e,(e=>{d.styled.apply(e)})));const t=A(o,u,e.media),s=A(l,u,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,l]of i){const i=`${n}-${W(o)}-${t}`;h.add(i);const s=(l?r.rules.resonevar:r.rules.onevar).cache,a=l?d.resonevar:d.onevar;s.has(i)||(s.add(i),x(o,[`.${i}`],[],e,(e=>{a.apply(e)})))}for(const t of s)if(void 0!==t)for(const[i,o]of t){const t=`${n}-${W(o)}-${i}`;h.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),x(o,[`.${t}`],[],e,(e=>{d.allvar.apply(e)})))}}if("object"==typeof a&&a){const t=`${n}-i${W(a)}-css`;h.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),x(a,[`.${t}`],[],e,(e=>{d.inline.apply(e)})))}for(const e of String(s.className||"").trim().split(/\s+/))e&&h.add(e);const m=p.className=[...h].join(" ");return{type:t.type,className:m,selector:g,props:p,toString:()=>m,deferredInjector:c}};return a(p,{className:n,selector:g,[s]:t,toString:()=>(r.rules.styled.cache.has(n)||p(),n)})},N=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),r.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t)}}return[t,r,n,new Set(i)]},A=(e,t,r,n)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in o){const n=o[e];let i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const l in i){if(n===String(i[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in r?r[e]:l.replace(/^@media ?/,"")),c=!0}a+=o,e=!0}++o}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l,c])}return i},D={},H=l(),V=(e,t)=>H(e,(()=>(...r)=>{const n=()=>{for(let n of r){n="object"==typeof n&&n||{};let r=W(n);if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of[].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"]}x(n,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return a(n,{toString:n})})),G=l(),F=(e,t)=>G(e,(()=>r=>{const n=`${y(e.prefix)}k-${W(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];x(r,[],[],e,(e=>i.push(e)));const o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o)}return n};return a(i,{get name(){return i()},toString:i})})),J=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+y(this.prefix)+y(this.scale)+this.token}toString(){return this.computedValue}},U=l(),Z=(e,t)=>U(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const i=`.${r=(r="string"==typeof r?r:"")||`${y(e.prefix)}t-${W(n)}`}`,o={},l=[];for(const t in n){o[t]={};for(const r in n[t]){const i=`--${y(e.prefix)}${t}-${r}`,s=k(String(n[t][r]),e.prefix,t);o[t][r]=new J(r,s,t,e.prefix),l.push(`${i}:${s}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return s()},selector:i,toString:s}})),q=l(),X=require("react"),Y=l(),K=null,Q=e=>{const t=(e=>{let t=!1;const r=q(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",n="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:n,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...i},utils:"object"==typeof e.utils&&e.utils||{},cssPreProcessor:"function"==typeof e.cssPreProcessor&&e.cssPreProcessor||(e=>e)},a=P(o),c={css:C(s,a),globalCss:V(s,a),keyframes:F(s,a),createTheme:Z(s,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:s,prefix:r,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(l)),c}));return t||r.reset(),r})(e);return t.styled=(e=>{let{config:t,sheet:r}=e;return Y(t,(()=>{const e=C(t,r),n=(...t)=>{const r=K;K=null;const n=e.withName(r)(...t),i=n[s].type,o=X.forwardRef(((e,t)=>{const r=e&&e.as||i,{props:o,deferredInjector:l}=n(e);return delete o.as,o.ref=t,l?X.createElement(X.Fragment,null,X.createElement(r,o),X.createElement(l,null)):X.createElement(r,o)}));return o.className=n.className,o.displayName=r||`Styled.${i.displayName||i.name||i}`,o.selector=n.selector,o.toString=()=>n.selector,o[s]=n[s],o};return n.withName=e=>(...t)=>(K=e,n(...t)),n}))})(t),t},_=()=>e||(e=Q());module.exports={createStitches:Q,createTheme:(...e)=>_().createTheme(...e),css:(...e)=>_().css(...e),defaultThemeMap:i,globalCss:(...e)=>_().globalCss(...e),keyframes:(...e)=>_().keyframes(...e),styled:(...e)=>_().styled(...e)};
//# sourceMappingUrl=index.map