import{k as J,h as K,i as Ie,b as w,g as $,j as L,c as Ln,d as An,a as Tn,_ as Fn,f as Vn}from"./@babel-BqpdSp3b.js";import{c as he}from"./classnames-BK5ccKcQ.js";import{F as Ne}from"./rc-overflow-De_9ECWx.js";import{o as Un,n as Ht,I as zn,q as ke,K as ae,B as Ge,b as jt,e as Hn,y as Bt,x as jn}from"./rc-util-DVFD5dlp.js";import{r as t}from"./react-CG4nFigO.js";import{r as Bn}from"./react-dom-DfW9SiQH.js";import{T as Gn}from"./@rc-component-Y3WVOzwK.js";import{C as Wn}from"./rc-motion-CCmj61Nm.js";var Gt=t.createContext(null);function Wt(e,r){return e===void 0?null:"".concat(e,"-").concat(r)}function qt(e){var r=t.useContext(Gt);return Wt(r,e)}var qn=["children","locked"],Z=t.createContext(null);function Yn(e,r){var a=K({},e);return Object.keys(r).forEach(function(o){var n=r[o];n!==void 0&&(a[o]=n)}),a}function $e(e){var r=e.children,a=e.locked,o=J(e,qn),n=t.useContext(Z),l=Un(function(){return Yn(n,o)},[n,o],function(i,u){return!a&&(i[0]!==u[0]||!Ht(i[1],u[1],!0))});return t.createElement(Z.Provider,{value:l},r)}var Xn=[],Yt=t.createContext(null);function Xe(){return t.useContext(Yt)}var Xt=t.createContext(Xn);function De(e){var r=t.useContext(Xt);return t.useMemo(function(){return e!==void 0?[].concat(Ie(r),[e]):r},[r,e])}var Jt=t.createContext(null),gt=t.createContext({}),st=ae.LEFT,vt=ae.RIGHT,dt=ae.UP,We=ae.DOWN,qe=ae.ENTER,Zt=ae.ESC,we=ae.HOME,_e=ae.END,Tt=[dt,We,st,vt];function Jn(e,r,a,o){var n,l,i,u,s="prev",c="next",m="children",v="parent";if(e==="inline"&&o===qe)return{inlineTrigger:!0};var d=(n={},w(n,dt,s),w(n,We,c),n),h=(l={},w(l,st,a?c:s),w(l,vt,a?s:c),w(l,We,m),w(l,qe,m),l),f=(i={},w(i,dt,s),w(i,We,c),w(i,qe,m),w(i,Zt,v),w(i,st,a?m:v),w(i,vt,a?v:m),i),_={inline:d,horizontal:h,vertical:f,inlineSub:d,horizontalSub:f,verticalSub:f},S=(u=_["".concat(e).concat(r?"":"Sub")])===null||u===void 0?void 0:u[o];switch(S){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case v:return{offset:-1,sibling:!1};case m:return{offset:1,sibling:!1};default:return null}}function Zn(e){for(var r=e;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Qn(e,r){for(var a=e||document.activeElement;a;){if(r.has(a))return a;a=a.parentElement}return null}function Ct(e,r){var a=zn(e,!0);return a.filter(function(o){return r.has(o)})}function Ft(e,r,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var n=Ct(e,r),l=n.length,i=n.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,n[i]}var ft=function(r,a){var o=new Set,n=new Map,l=new Map;return r.forEach(function(i){var u=document.querySelector("[data-menu-id='".concat(Wt(a,i),"']"));u&&(o.add(u),l.set(u,i),n.set(i,u))}),{elements:o,key2element:n,element2key:l}};function er(e,r,a,o,n,l,i,u,s,c){var m=t.useRef(),v=t.useRef();v.current=r;var d=function(){ke.cancel(m.current)};return t.useEffect(function(){return function(){d()}},[]),function(h){var f=h.which;if([].concat(Tt,[qe,Zt,we,_e]).includes(f)){var _=l(),S=ft(_,o),y=S,x=y.elements,g=y.key2element,p=y.element2key,I=g.get(r),C=Qn(I,x),M=p.get(C),A=Jn(e,i(M,!0).length===1,a,f);if(!A&&f!==we&&f!==_e)return;(Tt.includes(f)||[we,_e].includes(f))&&h.preventDefault();var P=function(T){if(T){var q=T,Y=T.querySelector("a");Y!=null&&Y.getAttribute("href")&&(q=Y);var te=p.get(T);u(te),d(),m.current=ke(function(){v.current===te&&q.focus()})}};if([we,_e].includes(f)||A.sibling||!C){var V;!C||e==="inline"?V=n.current:V=Zn(C);var O,N=Ct(V,x);f===we?O=N[0]:f===_e?O=N[N.length-1]:O=Ft(V,x,C,A.offset),P(O)}else if(A.inlineTrigger)s(M);else if(A.offset>0)s(M,!0),d(),m.current=ke(function(){S=ft(_,o);var ee=C.getAttribute("aria-controls"),T=document.getElementById(ee),q=Ft(T,S.elements);P(q)},5);else if(A.offset<0){var G=i(M,!0),U=G[G.length-2],Q=g.get(U);s(U,!1),P(Q)}}c==null||c(h)}}function tr(e){Promise.resolve().then(e)}var ht="__RC_UTIL_PATH_SPLIT__",Vt=function(r){return r.join(ht)},nr=function(r){return r.split(ht)},mt="rc-menu-more";function rr(){var e=t.useState({}),r=$(e,2),a=r[1],o=t.useRef(new Map),n=t.useRef(new Map),l=t.useState([]),i=$(l,2),u=i[0],s=i[1],c=t.useRef(0),m=t.useRef(!1),v=function(){m.current||a({})},d=t.useCallback(function(g,p){var I=Vt(p);n.current.set(I,g),o.current.set(g,I),c.current+=1;var C=c.current;tr(function(){C===c.current&&v()})},[]),h=t.useCallback(function(g,p){var I=Vt(p);n.current.delete(I),o.current.delete(g)},[]),f=t.useCallback(function(g){s(g)},[]),_=t.useCallback(function(g,p){var I=o.current.get(g)||"",C=nr(I);return p&&u.includes(C[0])&&C.unshift(mt),C},[u]),S=t.useCallback(function(g,p){return g.filter(function(I){return I!==void 0}).some(function(I){var C=_(I,!0);return C.includes(p)})},[_]),y=function(){var p=Ie(o.current.keys());return u.length&&p.push(mt),p},x=t.useCallback(function(g){var p="".concat(o.current.get(g)).concat(ht),I=new Set;return Ie(n.current.keys()).forEach(function(C){C.startsWith(p)&&I.add(n.current.get(C))}),I},[]);return t.useEffect(function(){return function(){m.current=!0}},[]),{registerPath:d,unregisterPath:h,refreshOverflowKeys:f,isSubPathKey:S,getKeyPath:_,getKeys:y,getSubPathKeys:x}}function Ke(e){var r=t.useRef(e);r.current=e;var a=t.useCallback(function(){for(var o,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(o=r.current)===null||o===void 0?void 0:o.call.apply(o,[r].concat(l))},[]);return e?a:void 0}var ar=Math.random().toFixed(5).toString().slice(2),Ut=0;function ir(e){var r=Ge(e,{value:e}),a=$(r,2),o=a[0],n=a[1];return t.useEffect(function(){Ut+=1;var l="".concat(ar,"-").concat(Ut);n("rc-menu-uuid-".concat(l))},[]),o}function Qt(e,r,a,o){var n=t.useContext(Z),l=n.activeKey,i=n.onActive,u=n.onInactive,s={active:l===e};return r||(s.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),i(e)},s.onMouseLeave=function(c){o==null||o({key:e,domEvent:c}),u(e)}),s}function en(e){var r=t.useContext(Z),a=r.mode,o=r.rtl,n=r.inlineIndent;if(a!=="inline")return null;var l=e;return o?{paddingRight:l*n}:{paddingLeft:l*n}}function tn(e){var r=e.icon,a=e.props,o=e.children,n;return r===null||r===!1?null:(typeof r=="function"?n=t.createElement(r,K({},a)):typeof r!="boolean"&&(n=r),n||o||null)}var or=["item"];function Ye(e){var r=e.item,a=J(e,or);return Object.defineProperty(a,"item",{get:function(){return jt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),a}var lr=["title","attribute","elementRef"],ur=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],cr=["active"],sr=function(e){Ln(a,e);var r=An(a);function a(){return Tn(this,a),r.apply(this,arguments)}return Fn(a,[{key:"render",value:function(){var n=this.props,l=n.title,i=n.attribute,u=n.elementRef,s=J(n,lr),c=Bt(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return jt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(Ne.Item,L({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(t.Component),vr=t.forwardRef(function(e,r){var a,o=e.style,n=e.className,l=e.eventKey;e.warnKey;var i=e.disabled,u=e.itemIcon,s=e.children,c=e.role,m=e.onMouseEnter,v=e.onMouseLeave,d=e.onClick,h=e.onKeyDown,f=e.onFocus,_=J(e,ur),S=qt(l),y=t.useContext(Z),x=y.prefixCls,g=y.onItemClick,p=y.disabled,I=y.overflowDisabled,C=y.itemIcon,M=y.selectedKeys,A=y.onActive,P=t.useContext(gt),V=P._internalRenderMenuItem,O="".concat(x,"-item"),N=t.useRef(),G=t.useRef(),U=p||i,Q=Hn(r,G),ee=De(l),T=function(F){return{key:l,keyPath:Ie(ee).reverse(),item:N.current,domEvent:F}},q=u||C,Y=Qt(l,U,m,v),te=Y.active,ie=J(Y,cr),re=M.includes(l),ce=en(ee.length),se=function(F){if(!U){var X=T(F);d==null||d(Ye(X)),g(X)}},z=function(F){if(h==null||h(F),F.which===ae.ENTER){var X=T(F);d==null||d(Ye(X)),g(X)}},H=function(F){A(l),f==null||f(F)},be={};e.role==="option"&&(be["aria-selected"]=re);var ve=t.createElement(sr,L({ref:N,elementRef:Q,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":I&&S?null:S},_,ie,be,{component:"li","aria-disabled":i,style:K(K({},ce),o),className:he(O,(a={},w(a,"".concat(O,"-active"),te),w(a,"".concat(O,"-selected"),re),w(a,"".concat(O,"-disabled"),U),a),n),onClick:se,onKeyDown:z,onFocus:H}),s,t.createElement(tn,{props:K(K({},e),{},{isSelected:re}),icon:q}));return V&&(ve=V(ve,e,{selected:re})),ve});function dr(e,r){var a=e.eventKey,o=Xe(),n=De(a);return t.useEffect(function(){if(o)return o.registerPath(a,n),function(){o.unregisterPath(a,n)}},[n]),o?null:t.createElement(vr,L({},e,{ref:r}))}const bt=t.forwardRef(dr);var fr=["className","children"],mr=function(r,a){var o=r.className,n=r.children,l=J(r,fr),i=t.useContext(Z),u=i.prefixCls,s=i.mode,c=i.rtl;return t.createElement("ul",L({className:he(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),n)},yt=t.forwardRef(mr);yt.displayName="SubMenuList";function It(e,r){return jn(e).map(function(a,o){if(t.isValidElement(a)){var n,l,i=a.key,u=(n=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:i,s=u==null;s&&(u="tmp_key-".concat([].concat(Ie(r),[o]).join("-")));var c={key:u,eventKey:u};return t.cloneElement(a,c)}return a})}var D={adjustX:1,adjustY:1},pr={topLeft:{points:["bl","tl"],overflow:D},topRight:{points:["br","tr"],overflow:D},bottomLeft:{points:["tl","bl"],overflow:D},bottomRight:{points:["tr","br"],overflow:D},leftTop:{points:["tr","tl"],overflow:D},leftBottom:{points:["br","bl"],overflow:D},rightTop:{points:["tl","tr"],overflow:D},rightBottom:{points:["bl","br"],overflow:D}},gr={topLeft:{points:["bl","tl"],overflow:D},topRight:{points:["br","tr"],overflow:D},bottomLeft:{points:["tl","bl"],overflow:D},bottomRight:{points:["tr","br"],overflow:D},rightTop:{points:["tr","tl"],overflow:D},rightBottom:{points:["br","bl"],overflow:D},leftTop:{points:["tl","tr"],overflow:D},leftBottom:{points:["bl","br"],overflow:D}};function nn(e,r,a){if(r)return r;if(a)return a[e]||a.other}var Cr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function hr(e){var r=e.prefixCls,a=e.visible,o=e.children,n=e.popup,l=e.popupStyle,i=e.popupClassName,u=e.popupOffset,s=e.disabled,c=e.mode,m=e.onVisibleChange,v=t.useContext(Z),d=v.getPopupContainer,h=v.rtl,f=v.subMenuOpenDelay,_=v.subMenuCloseDelay,S=v.builtinPlacements,y=v.triggerSubMenuAction,x=v.forceSubMenuRender,g=v.rootClassName,p=v.motion,I=v.defaultMotions,C=t.useState(!1),M=$(C,2),A=M[0],P=M[1],V=h?K(K({},gr),S):K(K({},pr),S),O=Cr[c],N=nn(c,p,I),G=t.useRef(N);c!=="inline"&&(G.current=N);var U=K(K({},G.current),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Q=t.useRef();return t.useEffect(function(){return Q.current=ke(function(){P(a)}),function(){ke.cancel(Q.current)}},[a]),t.createElement(Gn,{prefixCls:r,popupClassName:he("".concat(r,"-popup"),w({},"".concat(r,"-rtl"),h),i,g),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:d,builtinPlacements:V,popupPlacement:O,popupVisible:A,popup:n,popupStyle:l,popupAlign:u&&{offset:u},action:s?[]:[y],mouseEnterDelay:f,mouseLeaveDelay:_,onPopupVisibleChange:m,forceRender:x,popupMotion:U,fresh:!0},o)}function br(e){var r=e.id,a=e.open,o=e.keyPath,n=e.children,l="inline",i=t.useContext(Z),u=i.prefixCls,s=i.forceSubMenuRender,c=i.motion,m=i.defaultMotions,v=i.mode,d=t.useRef(!1);d.current=v===l;var h=t.useState(!d.current),f=$(h,2),_=f[0],S=f[1],y=d.current?a:!1;t.useEffect(function(){d.current&&S(!1)},[v]);var x=K({},nn(l,c,m));o.length>1&&(x.motionAppear=!1);var g=x.onVisibleChanged;return x.onVisibleChanged=function(p){return!d.current&&!p&&S(!0),g==null?void 0:g(p)},_?null:t.createElement($e,{mode:l,locked:!d.current},t.createElement(Wn,L({visible:y},x,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(p){var I=p.className,C=p.style;return t.createElement(yt,{id:r,className:I,style:C},n)}))}var yr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Ir=["active"],Mr=t.forwardRef(function(e,r){var a,o=e.style,n=e.className,l=e.title,i=e.eventKey;e.warnKey;var u=e.disabled,s=e.internalPopupClose,c=e.children,m=e.itemIcon,v=e.expandIcon,d=e.popupClassName,h=e.popupOffset,f=e.popupStyle,_=e.onClick,S=e.onMouseEnter,y=e.onMouseLeave,x=e.onTitleClick,g=e.onTitleMouseEnter,p=e.onTitleMouseLeave,I=J(e,yr),C=qt(i),M=t.useContext(Z),A=M.prefixCls,P=M.mode,V=M.openKeys,O=M.disabled,N=M.overflowDisabled,G=M.activeKey,U=M.selectedKeys,Q=M.itemIcon,ee=M.expandIcon,T=M.onItemClick,q=M.onOpenChange,Y=M.onActive,te=t.useContext(gt),ie=te._internalRenderSubMenuItem,re=t.useContext(Jt),ce=re.isSubPathKey,se=De(),z="".concat(A,"-submenu"),H=O||u,be=t.useRef(),ve=t.useRef(),de=m??Q,F=v??ee,X=V.includes(i),oe=!N&&X,Oe=ce(U,i),Le=Qt(i,H,g,p),fe=Le.active,Me=J(Le,Ir),Ze=t.useState(!1),Re=$(Ze,2),Se=Re[0],Ae=Re[1],Te=function(W){H||Ae(W)},Qe=function(W){Te(!0),S==null||S({key:i,domEvent:W})},Fe=function(W){Te(!1),y==null||y({key:i,domEvent:W})},ne=t.useMemo(function(){return fe||(P!=="inline"?Se||ce([G],i):!1)},[P,fe,G,Se,i,ce]),et=en(se.length),tt=function(W){H||(x==null||x({key:i,domEvent:W}),P==="inline"&&q(i,!X))},Ve=Ke(function(k){_==null||_(Ye(k)),T(k)}),Ue=function(W){P!=="inline"&&q(i,W)},nt=function(){Y(i)},le=C&&"".concat(C,"-popup"),me=t.createElement("div",L({role:"menuitem",style:et,className:"".concat(z,"-title"),tabIndex:H?null:-1,ref:be,title:typeof l=="string"?l:null,"data-menu-id":N&&C?null:C,"aria-expanded":oe,"aria-haspopup":!0,"aria-controls":le,"aria-disabled":H,onClick:tt,onFocus:nt},Me),l,t.createElement(tn,{icon:P!=="horizontal"?F:void 0,props:K(K({},e),{},{isOpen:oe,isSubMenu:!0})},t.createElement("i",{className:"".concat(z,"-arrow")}))),pe=t.useRef(P);if(P!=="inline"&&se.length>1?pe.current="vertical":pe.current=P,!N){var xe=pe.current;me=t.createElement(hr,{mode:xe,prefixCls:z,visible:!s&&oe&&P!=="inline",popupClassName:d,popupOffset:h,popupStyle:f,popup:t.createElement($e,{mode:xe==="horizontal"?"vertical":xe},t.createElement(yt,{id:le,ref:ve},c)),disabled:H,onVisibleChange:Ue},me)}var ye=t.createElement(Ne.Item,L({ref:r,role:"none"},I,{component:"li",style:o,className:he(z,"".concat(z,"-").concat(P),n,(a={},w(a,"".concat(z,"-open"),oe),w(a,"".concat(z,"-active"),ne),w(a,"".concat(z,"-selected"),Oe),w(a,"".concat(z,"-disabled"),H),a)),onMouseEnter:Qe,onMouseLeave:Fe}),me,!N&&t.createElement(br,{id:le,open:oe,keyPath:se},c));return ie&&(ye=ie(ye,e,{selected:Oe,active:ne,open:oe,disabled:H})),t.createElement($e,{onItemClick:Ve,mode:P==="horizontal"?"vertical":P,itemIcon:de,expandIcon:F},ye)}),Mt=t.forwardRef(function(e,r){var a=e.eventKey,o=e.children,n=De(a),l=It(o,n),i=Xe();t.useEffect(function(){if(i)return i.registerPath(a,n),function(){i.unregisterPath(a,n)}},[n]);var u;return i?u=l:u=t.createElement(Mr,L({ref:r},e),l),t.createElement(Xt.Provider,{value:n},u)});function rn(e){var r=e.className,a=e.style,o=t.useContext(Z),n=o.prefixCls,l=Xe();return l?null:t.createElement("li",{role:"separator",className:he("".concat(n,"-item-divider"),r),style:a})}var Rr=["className","title","eventKey","children"],Sr=t.forwardRef(function(e,r){var a=e.className,o=e.title;e.eventKey;var n=e.children,l=J(e,Rr),i=t.useContext(Z),u=i.prefixCls,s="".concat(u,"-item-group");return t.createElement("li",L({ref:r,role:"presentation"},l,{onClick:function(m){return m.stopPropagation()},className:he(s,a)}),t.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),t.createElement("ul",{role:"group",className:"".concat(s,"-list")},n))}),an=t.forwardRef(function(e,r){var a=e.eventKey,o=e.children,n=De(a),l=It(o,n),i=Xe();return i?l:t.createElement(Sr,L({ref:r},Bt(e,["warnKey"])),l)}),xr=["label","children","key","type"];function pt(e,r){var a=r.item,o=r.group,n=r.submenu,l=r.divider;return(e||[]).map(function(i,u){if(i&&Vn(i)==="object"){var s=i,c=s.label,m=s.children,v=s.key,d=s.type,h=J(s,xr),f=v??"tmp-".concat(u);return m||d==="group"?d==="group"?t.createElement(o,L({key:f},h,{title:c}),pt(m,r)):t.createElement(n,L({key:f},h,{title:c}),pt(m,r)):d==="divider"?t.createElement(l,L({key:f},h)):t.createElement(a,L({key:f},h),c)}return null}).filter(function(i){return i})}function zt(e,r,a,o){var n=e,l=K({divider:rn,item:bt,group:an,submenu:Mt},o);return r&&(n=pt(r,l)),It(n,a)}var Pr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],Ce=[],Er=t.forwardRef(function(e,r){var a,o,n=e,l=n.prefixCls,i=l===void 0?"rc-menu":l,u=n.rootClassName,s=n.style,c=n.className,m=n.tabIndex,v=m===void 0?0:m,d=n.items,h=n.children,f=n.direction,_=n.id,S=n.mode,y=S===void 0?"vertical":S,x=n.inlineCollapsed,g=n.disabled,p=n.disabledOverflow,I=n.subMenuOpenDelay,C=I===void 0?.1:I,M=n.subMenuCloseDelay,A=M===void 0?.1:M,P=n.forceSubMenuRender,V=n.defaultOpenKeys,O=n.openKeys,N=n.activeKey,G=n.defaultActiveFirst,U=n.selectable,Q=U===void 0?!0:U,ee=n.multiple,T=ee===void 0?!1:ee,q=n.defaultSelectedKeys,Y=n.selectedKeys,te=n.onSelect,ie=n.onDeselect,re=n.inlineIndent,ce=re===void 0?24:re,se=n.motion,z=n.defaultMotions,H=n.triggerSubMenuAction,be=H===void 0?"hover":H,ve=n.builtinPlacements,de=n.itemIcon,F=n.expandIcon,X=n.overflowedIndicator,oe=X===void 0?"...":X,Oe=n.overflowedIndicatorPopupClassName,Le=n.getPopupContainer,fe=n.onClick,Me=n.onOpenChange,Ze=n.onKeyDown;n.openAnimation,n.openTransitionName;var Re=n._internalRenderMenuItem,Se=n._internalRenderSubMenuItem,Ae=n._internalComponents,Te=J(n,Pr),Qe=t.useMemo(function(){return[zt(h,d,Ce,Ae),zt(h,d,Ce,{})]},[h,d,Ae]),Fe=$(Qe,2),ne=Fe[0],et=Fe[1],tt=t.useState(!1),Ve=$(tt,2),Ue=Ve[0],nt=Ve[1],le=t.useRef(),me=ir(_),pe=f==="rtl",xe=Ge(V,{value:O,postState:function(b){return b||Ce}}),ye=$(xe,2),k=ye[0],W=ye[1],rt=function(b){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function j(){W(b),Me==null||Me(b)}R?Bn.flushSync(j):j()},on=t.useState(k),Rt=$(on,2),ln=Rt[0],un=Rt[1],at=t.useRef(!1),cn=t.useMemo(function(){return(y==="inline"||y==="vertical")&&x?["vertical",x]:[y,!1]},[y,x]),St=$(cn,2),ze=St[0],it=St[1],xt=ze==="inline",sn=t.useState(ze),Pt=$(sn,2),ue=Pt[0],vn=Pt[1],dn=t.useState(it),Et=$(dn,2),fn=Et[0],mn=Et[1];t.useEffect(function(){vn(ze),mn(it),at.current&&(xt?W(ln):rt(Ce))},[ze,it]);var pn=t.useState(0),wt=$(pn,2),He=wt[0],gn=wt[1],ot=He>=ne.length-1||ue!=="horizontal"||p;t.useEffect(function(){xt&&un(k)},[k]),t.useEffect(function(){return at.current=!0,function(){at.current=!1}},[]);var ge=rr(),_t=ge.registerPath,Kt=ge.unregisterPath,Cn=ge.refreshOverflowKeys,Nt=ge.isSubPathKey,hn=ge.getKeyPath,kt=ge.getKeys,bn=ge.getSubPathKeys,yn=t.useMemo(function(){return{registerPath:_t,unregisterPath:Kt}},[_t,Kt]),In=t.useMemo(function(){return{isSubPathKey:Nt}},[Nt]);t.useEffect(function(){Cn(ot?Ce:ne.slice(He+1).map(function(E){return E.key}))},[He,ot]);var Mn=Ge(N||G&&((a=ne[0])===null||a===void 0?void 0:a.key),{value:N}),$t=$(Mn,2),Pe=$t[0],lt=$t[1],Rn=Ke(function(E){lt(E)}),Sn=Ke(function(){lt(void 0)});t.useImperativeHandle(r,function(){return{list:le.current,focus:function(b){var R,j=kt(),B=ft(j,me),Be=B.elements,ut=B.key2element,Dn=B.element2key,Lt=Ct(le.current,Be),At=Pe??(Lt[0]?Dn.get(Lt[0]):(R=ne.find(function(On){return!On.props.disabled}))===null||R===void 0?void 0:R.key),Ee=ut.get(At);if(At&&Ee){var ct;Ee==null||(ct=Ee.focus)===null||ct===void 0||ct.call(Ee,b)}}}});var xn=Ge(q||[],{value:Y,postState:function(b){return Array.isArray(b)?b:b==null?Ce:[b]}}),Dt=$(xn,2),je=Dt[0],Pn=Dt[1],En=function(b){if(Q){var R=b.key,j=je.includes(R),B;T?j?B=je.filter(function(ut){return ut!==R}):B=[].concat(Ie(je),[R]):B=[R],Pn(B);var Be=K(K({},b),{},{selectedKeys:B});j?ie==null||ie(Be):te==null||te(Be)}!T&&k.length&&ue!=="inline"&&rt(Ce)},wn=Ke(function(E){fe==null||fe(Ye(E)),En(E)}),Ot=Ke(function(E,b){var R=k.filter(function(B){return B!==E});if(b)R.push(E);else if(ue!=="inline"){var j=bn(E);R=R.filter(function(B){return!j.has(B)})}Ht(k,R,!0)||rt(R,!0)}),_n=function(b,R){var j=R??!k.includes(b);Ot(b,j)},Kn=er(ue,Pe,pe,me,le,kt,hn,lt,_n,Ze);t.useEffect(function(){nt(!0)},[]);var Nn=t.useMemo(function(){return{_internalRenderMenuItem:Re,_internalRenderSubMenuItem:Se}},[Re,Se]),kn=ue!=="horizontal"||p?ne:ne.map(function(E,b){return t.createElement($e,{key:E.key,overflowDisabled:b>He},E)}),$n=t.createElement(Ne,L({id:_,ref:le,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:bt,className:he(i,"".concat(i,"-root"),"".concat(i,"-").concat(ue),c,(o={},w(o,"".concat(i,"-inline-collapsed"),fn),w(o,"".concat(i,"-rtl"),pe),o),u),dir:f,style:s,role:"menu",tabIndex:v,data:kn,renderRawItem:function(b){return b},renderRawRest:function(b){var R=b.length,j=R?ne.slice(-R):null;return t.createElement(Mt,{eventKey:mt,title:oe,disabled:ot,internalPopupClose:R===0,popupClassName:Oe},j)},maxCount:ue!=="horizontal"||p?Ne.INVALIDATE:Ne.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(b){gn(b)},onKeyDown:Kn},Te));return t.createElement(gt.Provider,{value:Nn},t.createElement(Gt.Provider,{value:me},t.createElement($e,{prefixCls:i,rootClassName:u,mode:ue,openKeys:k,rtl:pe,disabled:g,motion:Ue?se:null,defaultMotions:Ue?z:null,activeKey:Pe,onActive:Rn,onInactive:Sn,selectedKeys:je,inlineIndent:ce,subMenuOpenDelay:C,subMenuCloseDelay:A,forceSubMenuRender:P,builtinPlacements:ve,triggerSubMenuAction:be,getPopupContainer:Le,itemIcon:de,expandIcon:F,onItemClick:wn,onOpenChange:Ot},t.createElement(Jt.Provider,{value:In},$n),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(Yt.Provider,{value:yn},et)))))}),Je=Er;Je.Item=bt;Je.SubMenu=Mt;Je.ItemGroup=an;Je.Divider=rn;export{rn as D,Je as E,bt as M,Mt as S,an as a,De as u};
