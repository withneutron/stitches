stitches=(()=>{var e,t="borderStyles",n="borderWidths",r="colors",o="radii",i="shadows",s="sizes",l="space",a={gap:l,gridGap:l,columnGap:l,gridColumnGap:l,rowGap:l,gridRowGap:l,inset:l,insetBlock:l,insetBlockEnd:l,insetBlockStart:l,insetInline:l,insetInlineEnd:l,insetInlineStart:l,margin:l,marginTop:l,marginRight:l,marginBottom:l,marginLeft:l,marginBlock:l,marginBlockEnd:l,marginBlockStart:l,marginInline:l,marginInlineEnd:l,marginInlineStart:l,padding:l,paddingTop:l,paddingRight:l,paddingBottom:l,paddingLeft:l,paddingBlock:l,paddingBlockEnd:l,paddingBlockStart:l,paddingInline:l,paddingInlineEnd:l,paddingInlineStart:l,top:l,right:l,bottom:l,left:l,scrollMargin:l,scrollMarginTop:l,scrollMarginRight:l,scrollMarginBottom:l,scrollMarginLeft:l,scrollMarginX:l,scrollMarginY:l,scrollMarginBlock:l,scrollMarginBlockEnd:l,scrollMarginBlockStart:l,scrollMarginInline:l,scrollMarginInlineEnd:l,scrollMarginInlineStart:l,scrollPadding:l,scrollPaddingTop:l,scrollPaddingRight:l,scrollPaddingBottom:l,scrollPaddingLeft:l,scrollPaddingX:l,scrollPaddingY:l,scrollPaddingBlock:l,scrollPaddingBlockEnd:l,scrollPaddingBlockStart:l,scrollPaddingInline:l,scrollPaddingInlineEnd:l,scrollPaddingInlineStart:l,fontSize:"fontSizes",background:r,backgroundColor:r,backgroundImage:r,borderImage:r,border:r,borderBlock:r,borderBlockEnd:r,borderBlockStart:r,borderBottom:r,borderBottomColor:r,borderColor:r,borderInline:r,borderInlineEnd:r,borderInlineStart:r,borderLeft:r,borderLeftColor:r,borderRight:r,borderRightColor:r,borderTop:r,borderTopColor:r,caretColor:r,color:r,columnRuleColor:r,fill:r,outline:r,outlineColor:r,stroke:r,textDecorationColor:r,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:s,minBlockSize:s,maxBlockSize:s,inlineSize:s,minInlineSize:s,maxInlineSize:s,width:s,minWidth:s,maxWidth:s,height:s,minHeight:s,maxHeight:s,flexBasis:s,gridTemplateColumns:s,gridTemplateRows:s,borderWidth:n,borderTopWidth:n,borderRightWidth:n,borderBottomWidth:n,borderLeftWidth:n,borderStyle:t,borderTopStyle:t,borderRightStyle:t,borderBottomStyle:t,borderLeftStyle:t,borderRadius:o,borderTopLeftRadius:o,borderTopRightRadius:o,borderBottomRightRadius:o,borderBottomLeftRadius:o,boxShadow:i,textShadow:i,transition:"transitions",zIndex:"zIndices"},c=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,d=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(e=>JSON.stringify(e,c))(t);return o in e?e[o]:e[o]=n(t,...r)}},g=Symbol.for("sxs.internal"),p=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),u=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:h}=Object.prototype,f=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),m=/\s+(?![^()]*\))/,b=e=>t=>e(..."string"==typeof t?String(t).split(m):[t]),S={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:b(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:b(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:b(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:b(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:b(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:b(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},k=/([\d.]+)([^]*)/,y=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,B=(e,t)=>e in $&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,o)=>n+("stretch"===r?`-moz-available${o};${f(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${f(e)}:${n}fit-content`)+o)):String(t),$={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},x=e=>e?e+"-":"",I=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,o,i,s)=>"$"==i==!!o?e:(r||"--"==i?"calc(":"")+"var(--"+("$"===i?x(t)+(s.includes("$")?"":x(n))+s.replace(/\$/g,"-"):s)+")"+(r||"--"==i?"*"+(r||"")+(o||"1")+")":""))),R=/\s*,\s*(?![^()]*\))/,P=Object.prototype.toString,z=(e,t,n,r,o)=>{const i=e=>o(j(...e));let s,l,a;const c=(t,n,d)=>{let g,p;const u=t=>{for(g in t){const b=64===g.charCodeAt(0),$=b&&Array.isArray(t[g])?t[g]:[t[g]];for(p of $){const t=/[A-Z]/.test(m=g)?m:m.replace(/-[^]/g,(e=>e[1].toUpperCase())),$="object"==typeof p&&p&&p.toString===P&&(!r.utils[t]||!n.length);if(t in r.utils&&!$){const e=r.utils[t];if(e!==l){l=e,u(e(p)),l=null;continue}}else if(t in S){const e=S[t];if(e!==a){a=e,u(e(p)),a=null;continue}}if(b&&(h=g.slice(1)in r.media?"@media "+r.media[g.slice(1)]:g,g=h.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,o,i)=>{const s=k.test(t),l=.0625*(s?-1:1),[a,c]=s?[r,t]:[t,r];return"("+("="===n[0]?"":">"===n[0]===s?"max-":"min-")+a+":"+("="!==n[0]&&1===n.length?c.replace(k,((e,t,r)=>Number(t)+l*(">"===n?1:-1)+r)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+a+":"+(1===o.length?i.replace(k,((e,t,n)=>Number(t)+l*(">"===o?-1:1)+n)):i):"")+")"}))),$){const t=b?d.concat(g):[...d],l=b?[...n]:y(n,g.split(R));s=r.cssPostProcessor(s,e,i),void 0!==s&&o(j(...s)),s=void 0,c(p,l,t)}else void 0===s&&(s=[[],n,d]),g=b||36!==g.charCodeAt(0)?g:`--${x(r.prefix)}${g.slice(1).replace(/\$/g,"-")}`,p=$?p:"number"==typeof p?p&&t in W?String(p)+"px":String(p):I(B(t,null==p?"":p),r.prefix,r.themeMap[t]),s[0].push(`${b?`${g} `:`${f(g)}:`}${p}`)}}var h,m};u(t),s=r.cssPostProcessor(s,e,i),void 0!==s&&o(j(...s)),s=void 0};c(r.cssPreProcessor(e),t,n)},j=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,W={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},E=e=>String.fromCharCode(e+(e>25?39:97)),T=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=E(t%52)+n;return E(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),M=["themed","global","styled","onevar","resonevar","allvar","inline"],v=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},w=e=>{let t;const n=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((n,r)=>{const{cssText:o}=n;let i="";if(o.startsWith("--sxs"))return"";if(e[r-1]&&(i=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${o}`;return n.cssRules.length?`${i}${o}`:""}return o})).join("")},r=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const t in e)delete e[t]}const o=Object(e).styleSheets||[];for(const e of o)if(v(e)){for(let o=0,i=e.cssRules;i[o];++o){const s=Object(i[o]);if(1!==s.type)continue;const l=Object(i[o+1]);if(4!==l.type)continue;++o;const{cssText:a}=s;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=M[c[0]];d&&(t||(t={sheet:e,reset:r,rules:{},toString:n}),t.rules[d]={group:l,index:o,cache:new Set(c)})}if(t)break}if(!t){const o=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,o(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:o("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:s}=t;for(let e=M.length-1;e>=0;--e){const t=M[e];if(!s[t]){const n=M[e+1],r=s[n]?s[n].index:i.cssRules.length;i.insertRule("@media{}",r),i.insertRule(`--sxs{--sxs:${e}}`,r),s[t]={group:i.cssRules[r+1],index:r,cache:new Set([e])}}C(s[t])}};return r(),t},C=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n}catch(e){}}},L=Symbol(),O=d(),A=(e,t)=>O(e,(()=>(...n)=>{const r=n.length-1,o=r>0&&n[r]&&"string"==typeof n[r]?n[r].replace(/\./g,"_").replace(/\W/g,""):null;let i={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[g]){null==i.type&&(i.type=t[g].type);for(const e of t[g].composers)i.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==i.type&&(i.type=t):"string"!=typeof t&&i.composers.add(D({componentName:o,...t},e));return null==i.type&&(i.type="span"),i.composers.size||i.composers.add(["PJLV",{},[],[],{},[]]),N(e,i,t)})),D=({variants:e,compoundVariants:t,defaultVariants:n,componentName:r,...o},i)=>{const s=r&&r.length>0?`${r}-${T(o)}`:T(o),l=`${x(i.prefix)}c-${s}`,a=[],c=[],d=Object.create(null),g=[];for(const e in n)d[e]=String(n[e]);if("object"==typeof e&&e)for(const t in e){p=d,f=t,h.call(p,f)||(d[t]="undefined");const n=e[t];for(const e in n){const r={[t]:String(e)};"undefined"===String(e)&&g.push(t);const o=n[e],i=[r,o,!u(o)];a.push(i)}}var p,f;if("object"==typeof t&&t)for(const e of t){let{css:t,...n}=e;t="object"==typeof t&&t||{};for(const e in n)n[e]=String(n[e]);const r=[n,t,!u(t)];c.push(r)}return[l,o,a,c,d,g]},N=(e,t,n)=>{const[r,o,i,s]=H(t.composers),l="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[L].length;n++){const[r,o]=t[L][n];e.rules[r].apply(o)}return t[L]=[],null}return t[L]=[],t.rules={},M.forEach((e=>t.rules[e]={apply:n=>t[L].push([e,n])})),t})(n):null,a=(l||n).rules,c=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,d=d=>{d="object"==typeof d&&d||G;const{css:g,...p}=d,u={};for(const e in i)if(delete p[e],e in d){let t=d[e];"object"==typeof t&&t?u[e]={"@initial":i[e],...t}:(t=String(t),u[e]="undefined"!==t||s.has(e)?t:i[e])}else u[e]=i[e];const h=new Set([...o]);for(const[r,o,i,s]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),z(o,[`.${r}`],[],e,(e=>{a.styled.apply(e)})));const t=V(i,u,e.media),l=V(s,u,e.media,!0);for(const o of t)if(void 0!==o)for(const[t,i,s]of o){const o=`${r}-${T(i)}-${t}`;h.add(o);const l=(s?n.rules.resonevar:n.rules.onevar).cache,c=s?a.resonevar:a.onevar;l.has(o)||(l.add(o),z(i,[`.${o}`],[],e,(e=>{c.apply(e)})))}for(const t of l)if(void 0!==t)for(const[o,i]of t){const t=`${r}-${T(i)}-${o}`;h.add(t),n.rules.allvar.cache.has(t)||(n.rules.allvar.cache.add(t),z(i,[`.${t}`],[],e,(e=>{a.allvar.apply(e)})))}}if("object"==typeof g&&g){const t=`${r}-i${T(g)}-css`;h.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),z(g,[`.${t}`],[],e,(e=>{a.inline.apply(e)})))}for(const e of String(d.className||"").trim().split(/\s+/))e&&h.add(e);const f=p.className=[...h].join(" ");return{type:t.type,className:f,selector:c,props:p,toString:()=>f,deferredInjector:l}};return p(d,{className:r,selector:c,[g]:t,toString:()=>(n.rules.styled.cache.has(r)||d(),r)})},H=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,s,l]of e){""===t&&(t=i),n.push(i),o.push(...l);for(const e in s){const t=s[e];(void 0===r[e]||"undefined"!==t||l.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(o)]},V=(e,t,n,r)=>{const o=[];e:for(let[i,s,l]of e){if(l)continue;let e,a=0,c=!1;for(e in i){const r=i[e];let o=t[e];if(o!==r){if("object"!=typeof o||!o)continue e;{let e,t,i=0;for(const s in o){if(r===String(o[s])){if("@initial"!==s){const e=s.slice(1);(t=t||[]).push(e in n?n[e]:s.replace(/^@media ?/,"")),c=!0}a+=i,e=!0}++i}if(t&&t.length&&(s={["@media "+t.join(", ")]:s}),!e)continue e}}}(o[a]=o[a]||[]).push([r?"cv":`${e}-${i[e]}`,s,c])}return o},G={},F=d(),J=(e,t)=>F(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=T(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}z(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return p(r,{toString:r})})),U=d(),Z=(e,t)=>U(e,(()=>n=>{const r=`${x(e.prefix)}k-${T(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];z(n,[],[],e,(e=>o.push(e)));const i=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(i)}return r};return p(o,{get name(){return o()},toString:o})})),X=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+x(this.prefix)+x(this.scale)+this.token}toString(){return this.computedValue}},Y=d(),q=(e,t)=>Y(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const o=`.${n=(n="string"==typeof n?n:"")||`${x(e.prefix)}t-${T(r)}`}`,i={},s=[];for(const t in r){i[t]={};for(const n in r[t]){const o=`--${x(e.prefix)}${t}-${n}`,l=I(String(r[t][n]),e.prefix,t);i[t][n]=new X(n,l,t,e.prefix),s.push(`${o}:${l}`)}}const l=()=>{if(s.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const o=`${r===e.theme?":root,":""}.${n}{${s.join(";")}}`;t.rules.themed.apply(o)}return n};return{...i,get className(){return l()},selector:o,toString:l}})),_=d(),K=e=>{let t=!1;const n=_(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,i="object"==typeof e.theme&&e.theme||{},s={prefix:n,media:r,theme:i,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...a},utils:"object"==typeof e.utils&&e.utils||{},cssPreProcessor:"function"==typeof e.cssPreProcessor&&e.cssPreProcessor||(e=>e),cssPostProcessor:"function"==typeof e.cssPostProcessor&&e.cssPostProcessor||(e=>e)},l=w(o),c={css:A(s,l),globalCss:J(s,l),keyframes:Z(s,l),createTheme:q(s,l),reset(){l.reset(),c.theme.toString()},theme:{},sheet:l,config:s,prefix:n,getCssText:l.toString,toString:l.toString};return String(c.theme=c.createTheme(i)),c}));return t||n.reset(),n},Q=()=>e||(e=K());return{createStitches:K,createTheme:(...e)=>Q().createTheme(...e),css:(...e)=>Q().css(...e),defaultThemeMap:a,globalCss:(...e)=>Q().globalCss(...e),keyframes:(...e)=>Q().keyframes(...e)}})();
//# sourceMappingUrl=index.map