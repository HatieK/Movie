import{r as t,a as Cn}from"./react-CG4nFigO.js";import{K as E,w as lt,f as ct,A as dn,b as st,l as ft,e as dt,u as vt,B as In,o as mt,y as gt,c as pt,x as ht}from"./rc-util-DVFD5dlp.js";import{c as Ye}from"./classnames-BK5ccKcQ.js";import{F as bt}from"./rc-overflow-De_9ECWx.js";import"./react-dom-DfW9SiQH.js";import"./rc-resize-observer-DD0qS7na.js";import"./rc-motion-CCmj61Nm.js";import{f as vn,g as ue,h as q,b as ie,j as Ke,k as nn,r as St,i as Ie}from"./@babel-BqpdSp3b.js";import{T as wt}from"./@rc-component-Y3WVOzwK.js";import{L as Ct}from"./rc-virtual-list-D-jFHIFP.js";var mn=function(e){var a=e.className,o=e.customizeIcon,r=e.customizeIconProps,i=e.children,u=e.onMouseDown,c=e.onClick,v=typeof o=="function"?o(r):o;return t.createElement("span",{className:a,onMouseDown:function(s){s.preventDefault(),u==null||u(s)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},v!==void 0?v:t.createElement("span",{className:Ye(a.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},i))},yt=function(e,a,o,r,i){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,c=arguments.length>6?arguments[6]:void 0,v=arguments.length>7?arguments[7]:void 0,g=Cn.useMemo(function(){if(vn(r)==="object")return r.clearIcon;if(i)return i},[r,i]),s=Cn.useMemo(function(){return!!(!u&&r&&(o.length||c)&&!(v==="combobox"&&c===""))},[r,u,o.length,c,v]);return{allowClear:s,clearIcon:Cn.createElement(mn,{className:"".concat(e,"-clear"),onMouseDown:a,customizeIcon:g},"×")}},$n=t.createContext(null);function It(){return t.useContext($n)}function Et(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=ue(e,2),o=a[0],r=a[1],i=t.useRef(null),u=function(){window.clearTimeout(i.current)};t.useEffect(function(){return u},[]);var c=function(g,s){u(),i.current=window.setTimeout(function(){r(g),s&&s()},n)};return[o,c,u]}function Bn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(r){(r||e.current===null)&&(e.current=r),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Rt(n,e,a,o){var r=t.useRef(null);r.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function i(u){var c;if(!((c=r.current)!==null&&c!==void 0&&c.customizedTrigger)){var v=u.target;v.shadowRoot&&u.composed&&(v=u.composedPath()[0]||v),r.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(v)&&g!==v})&&r.current.triggerOpen(!1)}}return window.addEventListener("mousedown",i),function(){return window.removeEventListener("mousedown",i)}},[])}function Dt(n){return![E.ESC,E.SHIFT,E.BACKSPACE,E.TAB,E.WIN_KEY,E.ALT,E.META,E.WIN_KEY_RIGHT,E.CTRL,E.SEMICOLON,E.EQUALS,E.CAPS_LOCK,E.CONTEXT_MENU,E.F1,E.F2,E.F3,E.F4,E.F5,E.F6,E.F7,E.F8,E.F9,E.F10,E.F11,E.F12].includes(n)}var xt=function(e,a){var o,r=e.prefixCls,i=e.id,u=e.inputElement,c=e.disabled,v=e.tabIndex,g=e.autoFocus,s=e.autoComplete,m=e.editable,O=e.activeDescendantId,l=e.value,R=e.maxLength,w=e.onKeyDown,y=e.onMouseDown,_=e.onChange,Z=e.onPaste,U=e.onCompositionStart,T=e.onCompositionEnd,X=e.open,ee=e.attrs,A=u||t.createElement("input",null),oe=A,ae=oe.ref,j=oe.props,z=j.onKeyDown,$=j.onChange,H=j.onMouseDown,K=j.onCompositionStart,G=j.onCompositionEnd,Y=j.style;return lt(!("maxLength"in A.props)),A=t.cloneElement(A,q(q(q({type:"search"},j),{},{id:i,ref:ct(a,ae),disabled:c,tabIndex:v,autoComplete:s||"off",autoFocus:g,className:Ye("".concat(r,"-selection-search-input"),(o=A)===null||o===void 0||(o=o.props)===null||o===void 0?void 0:o.className),role:"combobox","aria-expanded":X||!1,"aria-haspopup":"listbox","aria-owns":"".concat(i,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(i,"_list"),"aria-activedescendant":X?O:void 0},ee),{},{value:m?l:"",maxLength:R,readOnly:!m,unselectable:m?null:"on",style:q(q({},Y),{},{opacity:m?null:0}),onKeyDown:function(b){w(b),z&&z(b)},onMouseDown:function(b){y(b),H&&H(b)},onChange:function(b){_(b),$&&$(b)},onCompositionStart:function(b){U(b),K&&K(b)},onCompositionEnd:function(b){T(b),G&&G(b)},onPaste:Z})),A},zn=t.forwardRef(xt);function Wn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var Mt=typeof window<"u"&&window.document&&window.document.documentElement,Ot=Mt;function Pt(n){return n!=null}function Nt(n){return!n&&n!==0}function _n(n){return["string","number"].includes(vn(n))}function Un(n){var e=void 0;return n&&(_n(n.title)?e=n.title.toString():_n(n.label)&&(e=n.label.toString())),e}function Vt(n,e){Ot?t.useLayoutEffect(n,e):t.useEffect(n,e)}function Tt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var An=function(e){e.preventDefault(),e.stopPropagation()},_t=function(e){var a=e.id,o=e.prefixCls,r=e.values,i=e.open,u=e.searchValue,c=e.autoClearSearchValue,v=e.inputRef,g=e.placeholder,s=e.disabled,m=e.mode,O=e.showSearch,l=e.autoFocus,R=e.autoComplete,w=e.activeDescendantId,y=e.tabIndex,_=e.removeIcon,Z=e.maxTagCount,U=e.maxTagTextLength,T=e.maxTagPlaceholder,X=T===void 0?function(P){return"+ ".concat(P.length," ...")}:T,ee=e.tagRender,A=e.onToggleOpen,oe=e.onRemove,ae=e.onInputChange,j=e.onInputPaste,z=e.onInputKeyDown,$=e.onInputMouseDown,H=e.onInputCompositionStart,K=e.onInputCompositionEnd,G=t.useRef(null),Y=t.useState(0),M=ue(Y,2),b=M[0],L=M[1],J=t.useState(!1),De=ue(J,2),Ce=De[0],xe=De[1],ne="".concat(o,"-selection"),ve=i||m==="multiple"&&c===!1||m==="tags"?u:"",$e=m==="tags"||m==="multiple"&&c===!1||O&&(i||Ce);Vt(function(){L(G.current.scrollWidth)},[ve]);var te=function(h,N,F,Q,B){return t.createElement("span",{title:Un(h),className:Ye("".concat(ne,"-item"),ie({},"".concat(ne,"-item-disabled"),F))},t.createElement("span",{className:"".concat(ne,"-item-content")},N),Q&&t.createElement(mn,{className:"".concat(ne,"-item-remove"),onMouseDown:An,onClick:B,customizeIcon:_},"×"))},Me=function(h,N,F,Q,B,ce){var ye=function(Ae){An(Ae),A(!i)};return t.createElement("span",{onMouseDown:ye},ee({label:N,value:h,disabled:F,closable:Q,onClose:B,isMaxTag:!!ce}))},_e=function(h){var N=h.disabled,F=h.label,Q=h.value,B=!s&&!N,ce=F;if(typeof U=="number"&&(typeof F=="string"||typeof F=="number")){var ye=String(ce);ye.length>U&&(ce="".concat(ye.slice(0,U),"..."))}var Oe=function(Le){Le&&Le.stopPropagation(),oe(h)};return typeof ee=="function"?Me(Q,ce,N,B,Oe):te(h,ce,N,B,Oe)},C=function(h){var N=typeof X=="function"?X(h):X;return typeof ee=="function"?Me(void 0,N,!1,!1,void 0,!0):te({title:N},N,!1)},d=t.createElement("div",{className:"".concat(ne,"-search"),style:{width:b},onFocus:function(){xe(!0)},onBlur:function(){xe(!1)}},t.createElement(zn,{ref:v,open:i,prefixCls:o,id:a,inputElement:null,disabled:s,autoFocus:l,autoComplete:R,editable:$e,activeDescendantId:w,value:ve,onKeyDown:z,onMouseDown:$,onChange:ae,onPaste:j,onCompositionStart:H,onCompositionEnd:K,tabIndex:y,attrs:dn(e,!0)}),t.createElement("span",{ref:G,className:"".concat(ne,"-search-mirror"),"aria-hidden":!0},ve," ")),x=t.createElement(bt,{prefixCls:"".concat(ne,"-overflow"),data:r,renderItem:_e,renderRest:C,suffix:d,itemKey:Tt,maxCount:Z});return t.createElement(t.Fragment,null,x,!r.length&&!ve&&t.createElement("span",{className:"".concat(ne,"-placeholder")},g))},At=function(e){var a=e.inputElement,o=e.prefixCls,r=e.id,i=e.inputRef,u=e.disabled,c=e.autoFocus,v=e.autoComplete,g=e.activeDescendantId,s=e.mode,m=e.open,O=e.values,l=e.placeholder,R=e.tabIndex,w=e.showSearch,y=e.searchValue,_=e.activeValue,Z=e.maxLength,U=e.onInputKeyDown,T=e.onInputMouseDown,X=e.onInputChange,ee=e.onInputPaste,A=e.onInputCompositionStart,oe=e.onInputCompositionEnd,ae=e.title,j=t.useState(!1),z=ue(j,2),$=z[0],H=z[1],K=s==="combobox",G=K||w,Y=O[0],M=y||"";K&&_&&!$&&(M=_),t.useEffect(function(){K&&H(!1)},[K,_]);var b=s!=="combobox"&&!m&&!w?!1:!!M,L=ae===void 0?Un(Y):ae,J=t.useMemo(function(){return Y?null:t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:b?{visibility:"hidden"}:void 0},l)},[Y,b,l,o]);return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(zn,{ref:i,prefixCls:o,id:r,open:m,inputElement:a,disabled:u,autoFocus:c,autoComplete:v,editable:G,activeDescendantId:g,value:M,onKeyDown:U,onMouseDown:T,onChange:function(Ce){H(!0),X(Ce)},onPaste:ee,onCompositionStart:A,onCompositionEnd:oe,tabIndex:R,attrs:dn(e,!0),maxLength:K?Z:void 0})),!K&&Y?t.createElement("span",{className:"".concat(o,"-selection-item"),title:L,style:b?{visibility:"hidden"}:void 0},Y.label):null,J)},Lt=function(e,a){var o=t.useRef(null),r=t.useRef(!1),i=e.prefixCls,u=e.open,c=e.mode,v=e.showSearch,g=e.tokenWithEnter,s=e.disabled,m=e.autoClearSearchValue,O=e.onSearch,l=e.onSearchSubmit,R=e.onToggleOpen,w=e.onInputKeyDown,y=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(b){o.current.focus(b)},blur:function(){o.current.blur()}}});var _=Bn(0),Z=ue(_,2),U=Z[0],T=Z[1],X=function(b){var L=b.which;(L===E.UP||L===E.DOWN)&&b.preventDefault(),w&&w(b),L===E.ENTER&&c==="tags"&&!r.current&&!u&&(l==null||l(b.target.value)),Dt(L)&&R(!0)},ee=function(){T(!0)},A=t.useRef(null),oe=function(b){O(b,!0,r.current)!==!1&&R(!0)},ae=function(){r.current=!0},j=function(b){r.current=!1,c!=="combobox"&&oe(b.target.value)},z=function(b){var L=b.target.value;if(g&&A.current&&/[\r\n]/.test(A.current)){var J=A.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");L=L.replace(J,A.current)}A.current=null,oe(L)},$=function(b){var L=b.clipboardData,J=L==null?void 0:L.getData("text");A.current=J||""},H=function(b){var L=b.target;if(L!==o.current){var J=document.body.style.msTouchAction!==void 0;J?setTimeout(function(){o.current.focus()}):o.current.focus()}},K=function(b){var L=U();b.target!==o.current&&!L&&!(c==="combobox"&&s)&&b.preventDefault(),(c!=="combobox"&&(!v||!L)||!u)&&(u&&m!==!1&&O("",!0,!1),R())},G={inputRef:o,onInputKeyDown:X,onInputMouseDown:ee,onInputChange:z,onInputPaste:$,onInputCompositionStart:ae,onInputCompositionEnd:j},Y=c==="multiple"||c==="tags"?t.createElement(_t,Ke({},e,G)):t.createElement(At,Ke({},e,G));return t.createElement("div",{ref:y,className:"".concat(i,"-selector"),onClick:H,onMouseDown:K},Y)},Ft=t.forwardRef(Lt),kt=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Kt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},$t=function(e,a){var o=e.prefixCls;e.disabled;var r=e.visible,i=e.children,u=e.popupElement,c=e.animation,v=e.transitionName,g=e.dropdownStyle,s=e.dropdownClassName,m=e.direction,O=m===void 0?"ltr":m,l=e.placement,R=e.builtinPlacements,w=e.dropdownMatchSelectWidth,y=e.dropdownRender,_=e.dropdownAlign,Z=e.getPopupContainer,U=e.empty,T=e.getTriggerDOMNode,X=e.onPopupVisibleChange,ee=e.onPopupMouseEnter,A=nn(e,kt),oe="".concat(o,"-dropdown"),ae=u;y&&(ae=y(u));var j=t.useMemo(function(){return R||Kt(w)},[R,w]),z=c?"".concat(oe,"-").concat(c):v,$=typeof w=="number",H=t.useMemo(function(){return $?null:w===!1?"minWidth":"width"},[w,$]),K=g;$&&(K=q(q({},K),{},{width:w}));var G=t.useRef(null);return t.useImperativeHandle(a,function(){return{getPopupElement:function(){var M;return(M=G.current)===null||M===void 0?void 0:M.popupElement}}}),t.createElement(wt,Ke({},A,{showAction:X?["click"]:[],hideAction:X?["click"]:[],popupPlacement:l||(O==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:j,prefixCls:oe,popupTransitionName:z,popup:t.createElement("div",{onMouseEnter:ee},ae),ref:G,stretch:H,popupAlign:_,popupVisible:r,getPopupContainer:Z,popupClassName:Ye(s,ie({},"".concat(oe,"-empty"),U)),popupStyle:K,getTriggerDOMNode:T,onPopupVisibleChange:X}),i)},Bt=t.forwardRef($t);function Ln(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function En(n){return typeof n<"u"&&!Number.isNaN(n)}function Hn(n,e){var a=n||{},o=a.label,r=a.value,i=a.options,u=a.groupLabel,c=o||(e?"children":"label");return{label:c,value:r||"value",options:i||"options",groupLabel:u||c}}function zt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,r=[],i=Hn(a,!1),u=i.label,c=i.value,v=i.options,g=i.groupLabel;function s(m,O){Array.isArray(m)&&m.forEach(function(l){if(O||!(v in l)){var R=l[c];r.push({key:Ln(l,r.length),groupOption:O,data:l,label:l[u],value:R})}else{var w=l[g];w===void 0&&o&&(w=l.label),r.push({key:Ln(l,r.length),group:!0,data:l,label:w}),s(l[v],!0)}})}return s(n,!1),r}function Rn(n){var e=q({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return st(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}var Wt=function(e,a,o){if(!a||!a.length)return null;var r=!1,i=function c(v,g){var s=St(g),m=s[0],O=s.slice(1);if(!m)return[v];var l=v.split(m);return r=r||l.length>1,l.reduce(function(R,w){return[].concat(Ie(R),Ie(c(w,O)))},[]).filter(Boolean)},u=i(e,a);return r?typeof o<"u"?u.slice(0,o):u:null},xn=t.createContext(null);function Ut(n){var e=n.visible,a=n.values;if(!e)return null;var o=50;return t.createElement("span",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"".concat(a.slice(0,o).map(function(r){var i=r.label,u=r.value;return["number","string"].includes(vn(i))?i:u}).join(", ")),a.length>o?", ...":null)}var Ht=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],jt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"],Dn=function(e){return e==="tags"||e==="multiple"},Gt=t.forwardRef(function(n,e){var a,o=n.id,r=n.prefixCls,i=n.className,u=n.showSearch,c=n.tagRender,v=n.direction,g=n.omitDomProps,s=n.displayValues,m=n.onDisplayValuesChange,O=n.emptyOptions,l=n.notFoundContent,R=l===void 0?"Not Found":l,w=n.onClear,y=n.mode,_=n.disabled,Z=n.loading,U=n.getInputElement,T=n.getRawInputElement,X=n.open,ee=n.defaultOpen,A=n.onDropdownVisibleChange,oe=n.activeValue,ae=n.onActiveValueChange,j=n.activeDescendantId,z=n.searchValue,$=n.autoClearSearchValue,H=n.onSearch,K=n.onSearchSplit,G=n.tokenSeparators,Y=n.allowClear,M=n.suffixIcon,b=n.clearIcon,L=n.OptionList,J=n.animation,De=n.transitionName,Ce=n.dropdownStyle,xe=n.dropdownClassName,ne=n.dropdownMatchSelectWidth,ve=n.dropdownRender,$e=n.dropdownAlign,te=n.placement,Me=n.builtinPlacements,_e=n.getPopupContainer,C=n.showAction,d=C===void 0?[]:C,x=n.onFocus,P=n.onBlur,h=n.onKeyUp,N=n.onKeyDown,F=n.onMouseDown,Q=nn(n,Ht),B=Dn(y),ce=(u!==void 0?u:B)||y==="combobox",ye=q({},Q);jt.forEach(function(V){delete ye[V]}),g==null||g.forEach(function(V){delete ye[V]});var Oe=t.useState(!1),Ae=ue(Oe,2),Le=Ae[0],se=Ae[1];t.useEffect(function(){se(ft())},[]);var Be=t.useRef(null),ge=t.useRef(null),pe=t.useRef(null),fe=t.useRef(null),ze=t.useRef(null),he=t.useRef(!1),Xe=Et(),Pe=ue(Xe,3),Ne=Pe[0],Ee=Pe[1],gn=Pe[2];t.useImperativeHandle(e,function(){var V,I;return{focus:(V=fe.current)===null||V===void 0?void 0:V.focus,blur:(I=fe.current)===null||I===void 0?void 0:I.blur,scrollTo:function(Se){var re;return(re=ze.current)===null||re===void 0?void 0:re.scrollTo(Se)},nativeElement:Be.current||ge.current}});var Re=t.useMemo(function(){var V;if(y!=="combobox")return z;var I=(V=s[0])===null||V===void 0?void 0:V.value;return typeof I=="string"||typeof I=="number"?String(I):""},[z,y,s]),an=y==="combobox"&&typeof U=="function"&&U()||null,we=typeof T=="function"&&T(),pn=dt(ge,we==null||(a=we.props)===null||a===void 0?void 0:a.ref),rn=t.useState(!1),un=ue(rn,2),hn=un[0],ln=un[1];vt(function(){ln(!0)},[]);var cn=In(!1,{defaultValue:ee,value:X}),Je=ue(cn,2),tn=Je[0],on=Je[1],le=hn?tn:!1,sn=!R&&O;(_||sn&&le&&y==="combobox")&&(le=!1);var qe=sn?!1:le,f=t.useCallback(function(V){var I=V!==void 0?V:!le;_||(on(I),le!==I&&(A==null||A(I)))},[_,le,on,A]),S=t.useMemo(function(){return(G||[]).some(function(V){return[`
`,`\r
`].includes(V)})},[G]),p=t.useContext(xn)||{},D=p.maxCount,k=p.rawValues,W=function(I,be,Se){if(!(B&&En(D)&&(k==null?void 0:k.size)>=D)){var re=!0,me=I;ae==null||ae(null);var Te=Wt(I,G,En(D)?D-k.size:void 0),He=Se?null:Te;return y!=="combobox"&&He&&(me="",K==null||K(He),f(!1),re=!1),H&&Re!==me&&H(me,{source:be?"typing":"effect"}),re}},Fe=function(I){!I||!I.trim()||H(I,{source:"submit"})};t.useEffect(function(){!le&&!B&&y!=="combobox"&&W("",!1,!1)},[le]),t.useEffect(function(){tn&&_&&on(!1),_&&!he.current&&Ee(!1)},[_]);var Ve=Bn(),We=ue(Ve,2),de=We[0],Ue=We[1],bn=function(I){var be=de(),Se=I.which;if(Se===E.ENTER&&(y!=="combobox"&&I.preventDefault(),le||f(!0)),Ue(!!Re),Se===E.BACKSPACE&&!be&&B&&!Re&&s.length){for(var re=Ie(s),me=null,Te=re.length-1;Te>=0;Te-=1){var He=re[Te];if(!He.disabled){re.splice(Te,1),me=He;break}}me&&m(re,{type:"remove",values:[me]})}for(var je=arguments.length,en=new Array(je>1?je-1:0),Ge=1;Ge<je;Ge++)en[Ge-1]=arguments[Ge];if(le){var fn;(fn=ze.current)===null||fn===void 0||fn.onKeyDown.apply(fn,[I].concat(en))}N==null||N.apply(void 0,[I].concat(en))},Sn=function(I){for(var be=arguments.length,Se=new Array(be>1?be-1:0),re=1;re<be;re++)Se[re-1]=arguments[re];if(le){var me;(me=ze.current)===null||me===void 0||me.onKeyUp.apply(me,[I].concat(Se))}h==null||h.apply(void 0,[I].concat(Se))},Mn=function(I){var be=s.filter(function(Se){return Se!==I});m(be,{type:"remove",values:[I]})},Qe=t.useRef(!1),ke=function(){Ee(!0),_||(x&&!Qe.current&&x.apply(void 0,arguments),d.includes("focus")&&f(!0)),Qe.current=!0},Jn=function(){he.current=!0,Ee(!1,function(){Qe.current=!1,he.current=!1,f(!1)}),!_&&(Re&&(y==="tags"?H(Re,{source:"submit"}):y==="multiple"&&H("",{source:"blur"})),P&&P.apply(void 0,arguments))},Ze=[];t.useEffect(function(){return function(){Ze.forEach(function(V){return clearTimeout(V)}),Ze.splice(0,Ze.length)}},[]);var Qn=function(I){var be,Se=I.target,re=(be=pe.current)===null||be===void 0?void 0:be.getPopupElement();if(re&&re.contains(Se)){var me=setTimeout(function(){var en=Ze.indexOf(me);if(en!==-1&&Ze.splice(en,1),gn(),!Le&&!re.contains(document.activeElement)){var Ge;(Ge=fe.current)===null||Ge===void 0||Ge.focus()}});Ze.push(me)}for(var Te=arguments.length,He=new Array(Te>1?Te-1:0),je=1;je<Te;je++)He[je-1]=arguments[je];F==null||F.apply(void 0,[I].concat(He))},qn=t.useState({}),Zn=ue(qn,2),et=Zn[1];function nt(){et({})}var On;we&&(On=function(I){f(I)}),Rt(function(){var V;return[Be.current,(V=pe.current)===null||V===void 0?void 0:V.getPopupElement()]},qe,f,!!we);var tt=t.useMemo(function(){return q(q({},n),{},{notFoundContent:R,open:le,triggerOpen:qe,id:o,showSearch:ce,multiple:B,toggleOpen:f})},[n,R,qe,le,o,ce,B,f]),Pn=!!M||Z,Nn;Pn&&(Nn=t.createElement(mn,{className:Ye("".concat(r,"-arrow"),ie({},"".concat(r,"-arrow-loading"),Z)),customizeIcon:M,customizeIconProps:{loading:Z,searchValue:Re,open:le,focused:Ne,showSearch:ce}}));var ot=function(){var I;w==null||w(),(I=fe.current)===null||I===void 0||I.focus(),m([],{type:"clear",values:s}),W("",!1,!1)},Vn=yt(r,ot,s,Y,b,_,Re,y),at=Vn.allowClear,rt=Vn.clearIcon,it=t.createElement(L,{ref:ze}),ut=Ye(r,i,ie(ie(ie(ie(ie(ie(ie(ie(ie(ie({},"".concat(r,"-focused"),Ne),"".concat(r,"-multiple"),B),"".concat(r,"-single"),!B),"".concat(r,"-allow-clear"),Y),"".concat(r,"-show-arrow"),Pn),"".concat(r,"-disabled"),_),"".concat(r,"-loading"),Z),"".concat(r,"-open"),le),"".concat(r,"-customize-input"),an),"".concat(r,"-show-search"),ce)),Tn=t.createElement(Bt,{ref:pe,disabled:_,prefixCls:r,visible:qe,popupElement:it,animation:J,transitionName:De,dropdownStyle:Ce,dropdownClassName:xe,direction:v,dropdownMatchSelectWidth:ne,dropdownRender:ve,dropdownAlign:$e,placement:te,builtinPlacements:Me,getPopupContainer:_e,empty:O,getTriggerDOMNode:function(I){return ge.current||I},onPopupVisibleChange:On,onPopupMouseEnter:nt},we?t.cloneElement(we,{ref:pn}):t.createElement(Ft,Ke({},n,{domRef:ge,prefixCls:r,inputElement:an,ref:fe,id:o,showSearch:ce,autoClearSearchValue:$,mode:y,activeDescendantId:j,tagRender:c,values:s,open:le,onToggleOpen:f,activeValue:oe,searchValue:Re,onSearch:W,onSearchSubmit:Fe,onRemove:Mn,tokenWithEnter:S}))),wn;return we?wn=Tn:wn=t.createElement("div",Ke({className:ut},ye,{ref:Be,onMouseDown:Qn,onKeyDown:bn,onKeyUp:Sn,onFocus:ke,onBlur:Jn}),t.createElement(Ut,{visible:Ne&&!le,values:s}),Tn,Nn,at&&rt),t.createElement($n.Provider,{value:tt},wn)}),jn=function(){return null};jn.isSelectOptGroup=!0;var Gn=function(){return null};Gn.isSelectOption=!0;function Yt(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Xt=["disabled","title","children","style","className"];function Fn(n){return typeof n=="string"||typeof n=="number"}var Jt=function(e,a){var o=It(),r=o.prefixCls,i=o.id,u=o.open,c=o.multiple,v=o.mode,g=o.searchValue,s=o.toggleOpen,m=o.notFoundContent,O=o.onPopupScroll,l=t.useContext(xn),R=l.maxCount,w=l.flattenOptions,y=l.onActiveValue,_=l.defaultActiveFirstOption,Z=l.onSelect,U=l.menuItemSelectedIcon,T=l.rawValues,X=l.fieldNames,ee=l.virtual,A=l.direction,oe=l.listHeight,ae=l.listItemHeight,j=l.optionRender,z="".concat(r,"-item"),$=mt(function(){return w},[u,w],function(C,d){return d[0]&&C[1]!==d[1]}),H=t.useRef(null),K=t.useMemo(function(){return c&&En(R)&&(T==null?void 0:T.size)>=R},[c,R,T==null?void 0:T.size]),G=function(d){d.preventDefault()},Y=function(d){var x;(x=H.current)===null||x===void 0||x.scrollTo(typeof d=="number"?{index:d}:d)},M=function(d){for(var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,P=$.length,h=0;h<P;h+=1){var N=(d+h*x+P)%P,F=$[N]||{},Q=F.group,B=F.data;if(!Q&&!(B!=null&&B.disabled)&&!K)return N}return-1},b=t.useState(function(){return M(0)}),L=ue(b,2),J=L[0],De=L[1],Ce=function(d){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;De(d);var P={source:x?"keyboard":"mouse"},h=$[d];if(!h){y(null,-1,P);return}y(h.value,d,P)};t.useEffect(function(){Ce(_!==!1?M(0):-1)},[$.length,g]);var xe=t.useCallback(function(C){return T.has(C)&&v!=="combobox"},[v,Ie(T).toString(),T.size]);t.useEffect(function(){var C=setTimeout(function(){if(!c&&u&&T.size===1){var x=Array.from(T)[0],P=$.findIndex(function(h){var N=h.data;return N.value===x});P!==-1&&(Ce(P),Y(P))}});if(u){var d;(d=H.current)===null||d===void 0||d.scrollTo(void 0)}return function(){return clearTimeout(C)}},[u,g]);var ne=function(d){d!==void 0&&Z(d,{selected:!T.has(d)}),c||s(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(d){var x=d.which,P=d.ctrlKey;switch(x){case E.N:case E.P:case E.UP:case E.DOWN:{var h=0;if(x===E.UP?h=-1:x===E.DOWN?h=1:Yt()&&P&&(x===E.N?h=1:x===E.P&&(h=-1)),h!==0){var N=M(J+h,h);Y(N),Ce(N,!0)}break}case E.ENTER:{var F,Q=$[J];Q&&!(Q!=null&&(F=Q.data)!==null&&F!==void 0&&F.disabled)&&!K?ne(Q.value):ne(void 0),u&&d.preventDefault();break}case E.ESC:s(!1),u&&d.stopPropagation()}},onKeyUp:function(){},scrollTo:function(d){Y(d)}}}),$.length===0)return t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(z,"-empty"),onMouseDown:G},m);var ve=Object.keys(X).map(function(C){return X[C]}),$e=function(d){return d.label};function te(C,d){var x=C.group;return{role:x?"presentation":"option",id:"".concat(i,"_list_").concat(d)}}var Me=function(d){var x=$[d];if(!x)return null;var P=x.data||{},h=P.value,N=x.group,F=dn(P,!0),Q=$e(x);return x?t.createElement("div",Ke({"aria-label":typeof Q=="string"&&!N?Q:null},F,{key:d},te(x,d),{"aria-selected":xe(h)}),h):null},_e={role:"listbox",id:"".concat(i,"_list")};return t.createElement(t.Fragment,null,ee&&t.createElement("div",Ke({},_e,{style:{height:0,width:0,overflow:"hidden"}}),Me(J-1),Me(J),Me(J+1)),t.createElement(Ct,{itemKey:"key",ref:H,data:$,height:oe,itemHeight:ae,fullHeight:!1,onMouseDown:G,onScroll:O,virtual:ee,direction:A,innerProps:ee?null:_e},function(C,d){var x=C.group,P=C.groupOption,h=C.data,N=C.label,F=C.value,Q=h.key;if(x){var B,ce=(B=h.title)!==null&&B!==void 0?B:Fn(N)?N.toString():void 0;return t.createElement("div",{className:Ye(z,"".concat(z,"-group"),h.className),title:ce},N!==void 0?N:Q)}var ye=h.disabled,Oe=h.title;h.children;var Ae=h.style,Le=h.className,se=nn(h,Xt),Be=gt(se,ve),ge=xe(F),pe=ye||!ge&&K,fe="".concat(z,"-option"),ze=Ye(z,fe,Le,ie(ie(ie(ie({},"".concat(fe,"-grouped"),P),"".concat(fe,"-active"),J===d&&!pe),"".concat(fe,"-disabled"),pe),"".concat(fe,"-selected"),ge)),he=$e(C),Xe=!U||typeof U=="function"||ge,Pe=typeof he=="number"?he:he||F,Ne=Fn(Pe)?Pe.toString():void 0;return Oe!==void 0&&(Ne=Oe),t.createElement("div",Ke({},dn(Be),ee?{}:te(C,d),{"aria-selected":ge,className:ze,title:Ne,onMouseMove:function(){J===d||pe||Ce(d)},onClick:function(){pe||ne(F)},style:Ae}),t.createElement("div",{className:"".concat(fe,"-content")},typeof j=="function"?j(C,{index:d}):Pe),t.isValidElement(U)||ge,Xe&&t.createElement(mn,{className:"".concat(z,"-option-state"),customizeIcon:U,customizeIconProps:{value:F,disabled:pe,isSelected:ge}},ge?"✓":null))}))},Qt=t.forwardRef(Jt);const qt=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var i=a.current,u=i.values,c=i.options,v=n.map(function(m){if(m.label===void 0){var O;return q(q({},m),{},{label:(O=u.get(m.value))===null||O===void 0?void 0:O.label})}return m}),g=new Map,s=new Map;return v.forEach(function(m){g.set(m.value,m),s.set(m.value,e.get(m.value)||c.get(m.value))}),a.current.values=g,a.current.options=s,v},[n,e]),r=t.useCallback(function(i){return e.get(i)||a.current.options.get(i)},[e]);return[o,r]};function yn(n,e){return Wn(n).join("").toUpperCase().includes(e)}const Zt=function(n,e,a,o,r){return t.useMemo(function(){if(!a||o===!1)return n;var i=e.options,u=e.label,c=e.value,v=[],g=typeof o=="function",s=a.toUpperCase(),m=g?o:function(l,R){return r?yn(R[r],s):R[i]?yn(R[u!=="children"?u:"label"],s):yn(R[c],s)},O=g?function(l){return Rn(l)}:function(l){return l};return n.forEach(function(l){if(l[i]){var R=m(a,O(l));if(R)v.push(l);else{var w=l[i].filter(function(y){return m(a,O(y))});w.length&&v.push(q(q({},l),{},ie({},i,w)))}return}m(a,O(l))&&v.push(l)}),v},[n,o,r,a,e])};var kn=0,eo=pt();function no(){var n;return eo?(n=kn,kn+=1):n="TEST_OR_SSR",n}function to(n){var e=t.useState(),a=ue(e,2),o=a[0],r=a[1];return t.useEffect(function(){r("rc_select_".concat(no()))},[]),n||o}var oo=["children","value"],ao=["children"];function ro(n){var e=n,a=e.key,o=e.props,r=o.children,i=o.value,u=nn(o,oo);return q({key:a,value:i!==void 0?i:a,children:r},u)}function Yn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ht(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var r=a,i=r.type.isSelectOptGroup,u=r.key,c=r.props,v=c.children,g=nn(c,ao);return e||!i?ro(a):q(q({key:"__RC_SELECT_GRP__".concat(u===null?o:u,"__"),label:u},g),{},{options:Yn(v)})}).filter(function(a){return a})}var io=function(e,a,o,r,i){return t.useMemo(function(){var u=e,c=!e;c&&(u=Yn(a));var v=new Map,g=new Map,s=function(l,R,w){w&&typeof w=="string"&&l.set(R[w],R)},m=function O(l){for(var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=0;w<l.length;w+=1){var y=l[w];!y[o.options]||R?(v.set(y[o.value],y),s(g,y,o.label),s(g,y,r),s(g,y,i)):O(y[o.options],!0)}};return m(u),{options:u,valueOptions:v,labelOptions:g}},[e,a,o,r,i])};function Kn(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var uo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","labelRender","value","defaultValue","labelInValue","onChange","maxCount"],lo=["inputValue"];function co(n){return!n||vn(n)!=="object"}var so=t.forwardRef(function(n,e){var a=n.id,o=n.mode,r=n.prefixCls,i=r===void 0?"rc-select":r,u=n.backfill,c=n.fieldNames,v=n.inputValue,g=n.searchValue,s=n.onSearch,m=n.autoClearSearchValue,O=m===void 0?!0:m,l=n.onSelect,R=n.onDeselect,w=n.dropdownMatchSelectWidth,y=w===void 0?!0:w,_=n.filterOption,Z=n.filterSort,U=n.optionFilterProp,T=n.optionLabelProp,X=n.options,ee=n.optionRender,A=n.children,oe=n.defaultActiveFirstOption,ae=n.menuItemSelectedIcon,j=n.virtual,z=n.direction,$=n.listHeight,H=$===void 0?200:$,K=n.listItemHeight,G=K===void 0?20:K,Y=n.labelRender,M=n.value,b=n.defaultValue,L=n.labelInValue,J=n.onChange,De=n.maxCount,Ce=nn(n,uo),xe=to(a),ne=Dn(o),ve=!!(!X&&A),$e=t.useMemo(function(){return _===void 0&&o==="combobox"?!1:_},[_,o]),te=t.useMemo(function(){return Hn(c,ve)},[JSON.stringify(c),ve]),Me=In("",{value:g!==void 0?g:v,postState:function(S){return S||""}}),_e=ue(Me,2),C=_e[0],d=_e[1],x=io(X,A,te,U,T),P=x.valueOptions,h=x.labelOptions,N=x.options,F=t.useCallback(function(f){var S=Wn(f);return S.map(function(p){var D,k,W,Fe,Ve;if(co(p))D=p;else{var We;W=p.key,k=p.label,D=(We=p.value)!==null&&We!==void 0?We:W}var de=P.get(D);if(de){var Ue;k===void 0&&(k=de==null?void 0:de[T||te.label]),W===void 0&&(W=(Ue=de==null?void 0:de.key)!==null&&Ue!==void 0?Ue:D),Fe=de==null?void 0:de.disabled,Ve=de==null?void 0:de.title}return{label:k,value:D,key:W,disabled:Fe,title:Ve}})},[te,T,P]),Q=In(b,{value:M}),B=ue(Q,2),ce=B[0],ye=B[1],Oe=t.useMemo(function(){var f,S=ne&&ce===null?[]:ce,p=F(S);return o==="combobox"&&Nt((f=p[0])===null||f===void 0?void 0:f.value)?[]:p},[ce,F,o,ne]),Ae=qt(Oe,P),Le=ue(Ae,2),se=Le[0],Be=Le[1],ge=t.useMemo(function(){if(!o&&se.length===1){var f=se[0];if(f.value===null&&(f.label===null||f.label===void 0))return[]}return se.map(function(S){var p;return q(q({},S),{},{label:(p=typeof Y=="function"?Y(S):S.label)!==null&&p!==void 0?p:S.value})})},[o,se,Y]),pe=t.useMemo(function(){return new Set(se.map(function(f){return f.value}))},[se]);t.useEffect(function(){if(o==="combobox"){var f,S=(f=se[0])===null||f===void 0?void 0:f.value;d(Pt(S)?String(S):"")}},[se]);var fe=Kn(function(f,S){var p=S??f;return ie(ie({},te.value,f),te.label,p)}),ze=t.useMemo(function(){if(o!=="tags")return N;var f=Ie(N),S=function(D){return P.has(D)};return Ie(se).sort(function(p,D){return p.value<D.value?-1:1}).forEach(function(p){var D=p.value;S(D)||f.push(fe(D,p.label))}),f},[fe,N,P,se,o]),he=Zt(ze,te,C,$e,U),Xe=t.useMemo(function(){return o!=="tags"||!C||he.some(function(f){return f[U||"value"]===C})||he.some(function(f){return f[te.value]===C})?he:[fe(C)].concat(Ie(he))},[fe,U,o,he,C,te]),Pe=t.useMemo(function(){return Z?Ie(Xe).sort(function(f,S){return Z(f,S,{searchValue:C})}):Xe},[Xe,Z,C]),Ne=t.useMemo(function(){return zt(Pe,{fieldNames:te,childrenAsData:ve})},[Pe,te,ve]),Ee=function(S){var p=F(S);if(ye(p),J&&(p.length!==se.length||p.some(function(W,Fe){var Ve;return((Ve=se[Fe])===null||Ve===void 0?void 0:Ve.value)!==(W==null?void 0:W.value)}))){var D=L?p:p.map(function(W){return W.value}),k=p.map(function(W){return Rn(Be(W.value))});J(ne?D:D[0],ne?k:k[0])}},gn=t.useState(null),Re=ue(gn,2),an=Re[0],we=Re[1],pn=t.useState(0),rn=ue(pn,2),un=rn[0],hn=rn[1],ln=oe!==void 0?oe:o!=="combobox",cn=t.useCallback(function(f,S){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},D=p.source,k=D===void 0?"keyboard":D;hn(S),u&&o==="combobox"&&f!==null&&k==="keyboard"&&we(String(f))},[u,o]),Je=function(S,p,D){var k=function(){var Qe,ke=Be(S);return[L?{label:ke==null?void 0:ke[te.label],value:S,key:(Qe=ke==null?void 0:ke.key)!==null&&Qe!==void 0?Qe:S}:S,Rn(ke)]};if(p&&l){var W=k(),Fe=ue(W,2),Ve=Fe[0],We=Fe[1];l(Ve,We)}else if(!p&&R&&D!=="clear"){var de=k(),Ue=ue(de,2),bn=Ue[0],Sn=Ue[1];R(bn,Sn)}},tn=Kn(function(f,S){var p,D=ne?S.selected:!0;D?p=ne?[].concat(Ie(se),[f]):[f]:p=se.filter(function(k){return k.value!==f}),Ee(p),Je(f,D),o==="combobox"?we(""):(!Dn||O)&&(d(""),we(""))}),on=function(S,p){Ee(S);var D=p.type,k=p.values;(D==="remove"||D==="clear")&&k.forEach(function(W){Je(W.value,!1,D)})},le=function(S,p){if(d(S),we(null),p.source==="submit"){var D=(S||"").trim();if(D){var k=Array.from(new Set([].concat(Ie(pe),[D])));Ee(k),Je(D,!0),d("")}return}p.source!=="blur"&&(o==="combobox"&&Ee(S),s==null||s(S))},sn=function(S){var p=S;o!=="tags"&&(p=S.map(function(k){var W=h.get(k);return W==null?void 0:W.value}).filter(function(k){return k!==void 0}));var D=Array.from(new Set([].concat(Ie(pe),Ie(p))));Ee(D),D.forEach(function(k){Je(k,!0)})},qe=t.useMemo(function(){var f=j!==!1&&y!==!1;return q(q({},x),{},{flattenOptions:Ne,onActiveValue:cn,defaultActiveFirstOption:ln,onSelect:tn,menuItemSelectedIcon:ae,rawValues:pe,fieldNames:te,virtual:f,direction:z,listHeight:H,listItemHeight:G,childrenAsData:ve,maxCount:De,optionRender:ee})},[De,x,Ne,cn,ln,tn,ae,pe,te,j,y,z,H,G,ve,ee]);return t.createElement(xn.Provider,{value:qe},t.createElement(Gt,Ke({},Ce,{id:xe,prefixCls:i,ref:e,omitDomProps:lo,mode:o,displayValues:ge,onDisplayValuesChange:on,direction:z,searchValue:C,onSearch:le,autoClearSearchValue:O,onSearchSplit:sn,dropdownMatchSelectWidth:y,OptionList:Qt,emptyOptions:!Ne.length,activeValue:an,activeDescendantId:"".concat(xe,"_list_").concat(un)})))}),Xn=so;Xn.Option=Gn;Xn.OptGroup=jn;export{Gn as O,Xn as T,jn as a};
