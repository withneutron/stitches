var e="colors",t="sizes",r="space",n={gap:r,gridGap:r,columnGap:r,gridColumnGap:r,rowGap:r,gridRowGap:r,inset:r,insetBlock:r,insetBlockEnd:r,insetBlockStart:r,insetInline:r,insetInlineEnd:r,insetInlineStart:r,margin:r,marginTop:r,marginRight:r,marginBottom:r,marginLeft:r,marginBlock:r,marginBlockEnd:r,marginBlockStart:r,marginInline:r,marginInlineEnd:r,marginInlineStart:r,padding:r,paddingTop:r,paddingRight:r,paddingBottom:r,paddingLeft:r,paddingBlock:r,paddingBlockEnd:r,paddingBlockStart:r,paddingInline:r,paddingInlineEnd:r,paddingInlineStart:r,top:r,right:r,bottom:r,left:r,scrollMargin:r,scrollMarginTop:r,scrollMarginRight:r,scrollMarginBottom:r,scrollMarginLeft:r,scrollMarginX:r,scrollMarginY:r,scrollMarginBlock:r,scrollMarginBlockEnd:r,scrollMarginBlockStart:r,scrollMarginInline:r,scrollMarginInlineEnd:r,scrollMarginInlineStart:r,scrollPadding:r,scrollPaddingTop:r,scrollPaddingRight:r,scrollPaddingBottom:r,scrollPaddingLeft:r,scrollPaddingX:r,scrollPaddingY:r,scrollPaddingBlock:r,scrollPaddingBlockEnd:r,scrollPaddingBlockStart:r,scrollPaddingInline:r,scrollPaddingInlineEnd:r,scrollPaddingInlineStart:r,fontSize:"fontSizes",background:e,backgroundColor:e,backgroundImage:e,borderImage:e,border:e,borderBlock:e,borderBlockEnd:e,borderBlockStart:e,borderBottom:e,borderBottomColor:e,borderColor:e,borderInline:e,borderInlineEnd:e,borderInlineStart:e,borderLeft:e,borderLeftColor:e,borderRight:e,borderRightColor:e,borderTop:e,borderTopColor:e,caretColor:e,color:e,columnRuleColor:e,fill:e,outline:e,outlineColor:e,stroke:e,textDecorationColor:e,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:t,minBlockSize:t,maxBlockSize:t,inlineSize:t,minInlineSize:t,maxInlineSize:t,width:t,minWidth:t,maxWidth:t,height:t,minHeight:t,maxHeight:t,flexBasis:t,gridTemplateColumns:t,gridTemplateRows:t,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,o=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(e=>JSON.stringify(e,i))(t);return o in e?e[o]:e[o]=r(t,...n)}},l=Symbol.for("sxs.internal"),s=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),a=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:c}=Object.prototype,d=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),g=/\s+(?![^()]*\))/,p=e=>t=>e(..."string"==typeof t?String(t).split(g):[t]),u={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:p(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:p(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:p(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:p(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:p(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:p(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},f=/([\d.]+)([^]*)/,h=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,m=(e,t)=>e in b&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,i)=>r+("stretch"===n?`-moz-available${i};${d(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${d(e)}:${r}fit-content`)+i)):String(t),b={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},S=e=>e?e+"-":"",y=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,i,o,l)=>"$"==o==!!i?e:(n||"--"==o?"calc(":"")+"var(--"+("$"===o?S(t)+(l.includes("$")?"":S(r))+l.replace(/\$/g,"-"):l)+")"+(n||"--"==o?"*"+(n||"")+(i||"1")+")":"")));function $(e){if(!e||0===e.length)return e;const t={};for(const r in e){const n=r.toLocaleLowerCase(),i=e[r],o=typeof i,l=n.includes("left"),s=n.includes("right"),a=Object.keys(z).includes(n),c=W[r],d=l||s||a||c;if(["number","string"].includes(o)&&d){let e="";if(t["[dir='ltr'] &"]=t["[dir='ltr'] &"]??{},t["[dir='rtl'] &"]=t["[dir='rtl'] &"]??{},c){const e=w(r,i);e===i?t[r]=i:(t["[dir='ltr'] &"][r]=i,t["[dir='rtl'] &"][r]=e)}else l?e=r.replaceAll("left","right").replaceAll("Left","Right"):s?e=r.replaceAll("right","left").replaceAll("Right","Left"):a&&(e=z[r]??r),t["[dir='ltr'] &"][r]=i,t["[dir='rtl'] &"][e]=i}else"object"!==o||Array.isArray(i)?t[r]=i:t[r]=$(i)}return t}var k={padding:!0,p:!0,margin:!0,m:!0,borderStyle:!0,borderWidth:!0,borderColor:!0},B={borderRadius:!0},x={float:!0,justifyContent:!0,justifyItems:!0,justifySelf:!0},R={offset:!0},I={background:!0,bg:!0},j={backgroundPosition:!0,offsetAnchor:!0,offsetPosition:!0},W={...k,...B,...x,...R,...I,...j},z={ml:"mr",mr:"ml",pl:"pr",pr:"pl",radiusLeft:"radiusRight",radiusRight:"radiusLeft",marginRight:"marginLeft",marginLeft:"marginRight",paddingRight:"paddingLeft",paddingLeft:"paddingRight"},v={left:"right",right:"left",center:"center",top:"top",bottom:"bottom",auto:"auto",none:"none"},E={ray:!0,url:!0,circle:!0,ellipse:!0,inset:!0,polygon:!0,path:!0};function w(e,t){return j[e]?C(t):R[e]?function(e){const t=String(e).trim().split("/"),r=t[0].trim(),n=t[1].trim(),i=t[2].trim(),o=t[3].trim(),l=t[4].trim();if(1===t.length)return C(r);const s=[C(r),n];n&&n.includes("(")&&E[n.substring(0,n.indexOf("("))]?(i&&s.push(i),o&&s.push(C(o)),l&&s.push(l)):(i&&s.push(C(i)),o&&s.push(o));return s.join(" / ")}(t):k[e]?function(e){const t=String(e).split(" ");if(t.length<4)return e;const r=t[0],n=t[1],i=t[2],o=t[3];return`${r} ${o} ${i} ${n}`}(t):B[e]?function(e){return String(e).split("/").reduce(((t,r,n)=>{const i=n?" / ":"",o=String(r.trim()).split(" ");if(o.length<4)return`${i}${e}`;const l=o[0],s=o[1],a=o[2];return t+=`${i}${s} ${l} ${o[3]} ${a}`}),"")}(t):x[e]?T(t):I[e]?function(e){return e.split(",").reduce(((e,t)=>{const r=t.indexOf("("),n=t.indexOf(")"),i=r>-1?t.substring(r,n):"",o=t.replace(i,"‡‡‡"),l=o.includes("left"),s=o.includes("right"),a=(o.match(/(\d*\.?\d+)\s?(px|em|rem|ex|ch|%|in|cn|mm|pt|pc|vw|vh|vmax|vmin+)/)||[])[0];let c=o;if(l)c=c.replace("left","right");else if(s)c=c.replace("right","left");else if(void 0!==a){const e=c.indexOf(a),t=c.substring(e);c=c.replace(t,`right ${t}`)}return e.push(c.replace("‡‡‡",i)),e}),[]).join(", ")}(t):t}function T(e){return v[e.toLowerCase()]||e}function C(e){if(["left","right"].includes(e))return T(e);const t=String(e).trim().split(" ");if(1===t.length&&!isNaN(parseInt(e)))return`right ${e} center`;if(2===t.length){return!isNaN(parseInt(t[0]))?`right ${t[0]} ${t[1]}`:`${v[t[0]]} ${t[1]}`}if(3===t.length){return!isNaN(parseInt(t[1]))?`${v[t[0]]} ${t[1]} ${v[t[2]]}`:`${v[t[0]]} ${v[t[1]]} ${t[2]}`}return 4===t.length?`${v[t[0]]} ${t[1]} ${v[t[2]]} ${t[3]}`:e}var M,P=/\s*,\s*(?![^()]*\))/,L=Object.prototype.toString,O=(e,t,r,n,i)=>{let o,l,s;const a=(e,t,r)=>{let c,g;const p=e=>{for(c in e){const k=64===c.charCodeAt(0),B=k&&Array.isArray(e[c])?e[c]:[e[c]];for(g of B){const e=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,(e=>e[1].toUpperCase())),B="object"==typeof g&&g&&g.toString===L&&(!n.utils[e]||!t.length);if(e in n.utils&&!B){const t=n.utils[e];if(t!==l){l=t,p(t(g)),l=null;continue}}else if(e in u){const t=u[e];if(t!==s){s=t,p(t(g)),s=null;continue}}if(k&&(b=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,i,o)=>{const l=f.test(t),s=.0625*(l?-1:1),[a,c]=l?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===l?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(f,((e,t,n)=>Number(t)+s*(">"===r?1:-1)+n)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+a+":"+(1===i.length?o.replace(f,((e,t,r)=>Number(t)+s*(">"===i?-1:1)+r)):o):"")+")"}))),B){const e=k?r.concat(c):[...r],n=k?[...t]:h(t,c.split(P));void 0!==o&&i(A(...o)),o=void 0,a(g,n,e)}else void 0===o&&(o=[[],t,r]),c=k||36!==c.charCodeAt(0)?c:`--${S(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=B?g:"number"==typeof g?g&&e in N?String(g)+"px":String(g):y(m(e,null==g?"":g),n.prefix,n.themeMap[e]),o[0].push(`${k?`${c} `:`${d(c)}:`}${g}`)}}var b,$};p(e),void 0!==o&&i(A(...o)),o=void 0};a($(e),t,r)},A=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,N={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},D=e=>String.fromCharCode(e+(e>25?39:97)),H=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=D(t%52)+r;return D(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),V=["themed","global","styled","onevar","resonevar","allvar","inline"],G=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return e.cssRules,!0}catch(e){return!1}},F=e=>{let t;const r=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(const t in e)delete e[t]}const n=Object(e).styleSheets||[];for(const e of n)if(G(e)){for(let n=0,i=e.cssRules;i[n];++n){const o=Object(i[n]);if(1!==o.type)continue;const l=Object(i[n+1]);if(4!==l.type)continue;++n;const{cssText:s}=o;if(!s.startsWith("--sxs"))continue;const a=s.slice(14,-3).trim().split(/\s+/),c=V[a[0]];c&&(t||(t={sheet:e,reset:r,rules:{}}),t.rules[c]={group:l,index:n,cache:new Set(a)})}if(t)break}if(!t){const n=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,n(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:n("","text/css"),rules:{},reset:r,toString(){const{cssRules:e}=t.sheet;return[].map.call(e,((r,n)=>{const{cssText:i}=r;let o="";if(i.startsWith("--sxs"))return"";if(e[n-1]&&(o=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===r)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return r.cssRules.length?`${o}${i}`:""}return i})).join("")}}}const{sheet:i,rules:o}=t;for(let e=V.length-1;e>=0;--e){const t=V[e];if(!o[t]){const r=V[e+1],n=o[r]?o[r].index:i.cssRules.length;i.insertRule("@media{}",n),i.insertRule(`--sxs{--sxs:${e}}`,n),o[t]={group:i.cssRules[n+1],index:n,cache:new Set([e])}}J(o[t])}};return r(),t},J=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(e){}}},U=Symbol(),Z=o(),q=(e,t)=>Z(e,(()=>(...r)=>{const n=r.length-1,i=n>0&&r[n]&&"string"==typeof r[n]?r[n].replace(/\./g,"_").replace(/\W/g,""):null;let o={type:null,composers:new Set};for(const t of r)if(null!=t)if(t[l]){null==o.type&&(o.type=t[l].type);for(const e of t[l].composers)o.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==o.type&&(o.type=t):"string"!=typeof t&&o.composers.add(X({componentName:i,...t},e));return null==o.type&&(o.type="span"),o.composers.size||o.composers.add(["PJLV",{},[],[],{},[]]),Y(e,o,t)})),X=(e,t)=>{let{variants:r,compoundVariants:n,defaultVariants:i,componentName:o,...l}=e;const s=o&&o.length>0?`${o}-${H(l)}`:H(l),d=`${S(t.prefix)}c-${s}`,g=[],p=[],u=Object.create(null),f=[];for(const e in i)u[e]=String(i[e]);if("object"==typeof r&&r)for(const e in r){h=u,m=e,c.call(h,m)||(u[e]="undefined");const t=r[e];for(const r in t){const n={[e]:String(r)};"undefined"===String(r)&&f.push(e);const i=t[r],o=[n,i,!a(i)];g.push(o)}}var h,m;if("object"==typeof n&&n)for(const e of n){let{css:t,...r}=e;t="object"==typeof t&&t||{};for(const e in r)r[e]=String(r[e]);const n=[r,t,!a(t)];p.push(n)}return[d,l,g,p,u,f]},Y=(e,t,r)=>{const[n,i,o,a]=_(t.composers),c="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[U].length;r++){const[n,i]=t[U][r];e.rules[n].apply(i)}return t[U]=[],null}return t[U]=[],t.rules={},V.forEach((e=>t.rules[e]={apply:r=>t[U].push([e,r])})),t})(r):null,d=(c||r).rules,g=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=l=>{l="object"==typeof l&&l||Q;const{css:s,...p}=l,u={};for(const e in o)if(delete p[e],e in l){let t=l[e];"object"==typeof t&&t?u[e]={"@initial":o[e],...t}:(t=String(t),u[e]="undefined"!==t||a.has(e)?t:o[e])}else u[e]=o[e];const f=new Set([...i]);for(const[n,i,o,l]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),O(i,[`.${n}`],[],e,(e=>{d.styled.apply(e)})));const t=K(o,u,e.media),s=K(l,u,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,l]of i){const i=`${n}-${H(o)}-${t}`;f.add(i);const s=(l?r.rules.resonevar:r.rules.onevar).cache,a=l?d.resonevar:d.onevar;s.has(i)||(s.add(i),O(o,[`.${i}`],[],e,(e=>{a.apply(e)})))}for(const t of s)if(void 0!==t)for(const[i,o]of t){const t=`${n}-${H(o)}-${i}`;f.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),O(o,[`.${t}`],[],e,(e=>{d.allvar.apply(e)})))}}if("object"==typeof s&&s){const t=`${n}-i${H(s)}-css`;f.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),O(s,[`.${t}`],[],e,(e=>{d.inline.apply(e)})))}for(const e of String(l.className||"").trim().split(/\s+/))e&&f.add(e);const h=p.className=[...f].join(" ");return{type:t.type,className:h,selector:g,props:p,toString:()=>h,deferredInjector:c}};return s(p,{className:n,selector:g,[l]:t,toString:()=>(r.rules.styled.cache.has(n)||p(),n)})},_=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,l,s]of e){""===t&&(t=o),r.push(o),i.push(...s);for(const e in l){const t=l[e];(void 0===n[e]||"undefined"!==t||s.includes(t))&&(n[e]=t)}}return[t,r,n,new Set(i)]},K=(e,t,r,n)=>{const i=[];e:for(let[o,l,s]of e){if(s)continue;let e,a=0,c=!1;for(e in o){const n=o[e];let i=t[e];if(i!==n){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const l in i){if(n===String(i[l])){if("@initial"!==l){const e=l.slice(1);(t=t||[]).push(e in r?r[e]:l.replace(/^@media ?/,"")),c=!0}a+=o,e=!0}++o}if(t&&t.length&&(l={["@media "+t.join(", ")]:l}),!e)continue e}}}(i[a]=i[a]||[]).push([n?"cv":`${e}-${o[e]}`,l,c])}return i},Q={},ee=o(),te=(e,t)=>ee(e,(()=>(...r)=>{const n=()=>{for(let n of r){n="object"==typeof n&&n||{};let r=H(n);if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of[].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"]}O(n,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return s(n,{toString:n})})),re=o(),ne=(e,t)=>re(e,(()=>r=>{const n=`${S(e.prefix)}k-${H(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];O(r,[],[],e,(e=>i.push(e)));const o=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(o)}return n};return s(i,{get name(){return i()},toString:i})})),ie=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+S(this.prefix)+S(this.scale)+this.token}toString(){return this.computedValue}},oe=o(),le=(e,t)=>oe(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const i=`.${r=(r="string"==typeof r?r:"")||`${S(e.prefix)}t-${H(n)}`}`,o={},l=[];for(const t in n){o[t]={};for(const r in n[t]){const i=`--${S(e.prefix)}${t}-${r}`,s=y(String(n[t][r]),e.prefix,t);o[t][r]=new ie(r,s,t,e.prefix),l.push(`${i}:${s}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return s()},selector:i,toString:s}})),se=o(),ae=require("react"),ce=o(),de=e=>{const t=(e=>{let t=!1;const r=se(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",i="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,l="object"==typeof e.theme&&e.theme||{},s={prefix:r,media:i,theme:l,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...n},utils:"object"==typeof e.utils&&e.utils||{}},a=F(o),c={css:q(s,a),globalCss:te(s,a),keyframes:ne(s,a),createTheme:le(s,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:s,prefix:r,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(l)),c}));return t||r.reset(),r})(e);return t.styled=(e=>{let{config:t,sheet:r}=e;return ce(t,(()=>{const e=q(t,r);return(...t)=>{const r=e(...t),n=r[l].type,i=t.length-1,o=i>0&&t[i]&&"string"==typeof t[i]?t[i].replace(/\./g,"_").replace(/\W/g,""):n.displayName||n.name||n,s=ae.forwardRef(((e,t)=>{const i=e&&e.as||n,{props:o,deferredInjector:l}=r(e);return delete o.as,o.ref=t,l?ae.createElement(ae.Fragment,null,ae.createElement(i,o),ae.createElement(l,null)):ae.createElement(i,o)}));return s.className=r.className,s.displayName=`Styled.${o}`,s.selector=r.selector,s.toString=()=>r.selector,s[l]=r[l],s}}))})(t),t},ge=()=>M||(M=de());module.exports={createStitches:de,createTheme:(...e)=>ge().createTheme(...e),css:(...e)=>ge().css(...e),defaultThemeMap:n,globalCss:(...e)=>ge().globalCss(...e),keyframes:(...e)=>ge().keyframes(...e),styled:(...e)=>ge().styled(...e)};
//# sourceMappingUrl=index.map