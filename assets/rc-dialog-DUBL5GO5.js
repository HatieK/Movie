import{h as d,f as ee,j as P,g as Z}from"./@babel-BqpdSp3b.js";import{P as Ce}from"./@rc-component-Y3WVOzwK.js";import{r as n,a as f}from"./react-CG4nFigO.js";import{c as E}from"./classnames-BK5ccKcQ.js";import{e as ye,A as re,m as be,F as te,K as ae}from"./rc-util-DVFD5dlp.js";import{C as ie}from"./rc-motion-CCmj61Nm.js";var se=n.createContext({});function ne(t,e,a){var o=e;return!o&&a&&(o="".concat(t,"-").concat(a)),o}function oe(t,e){var a=t["page".concat(e?"Y":"X","Offset")],o="scroll".concat(e?"Top":"Left");if(typeof a!="number"){var r=t.document;a=r.documentElement[o],typeof a!="number"&&(a=r.body[o])}return a}function Ne(t){var e=t.getBoundingClientRect(),a={left:e.left,top:e.top},o=t.ownerDocument,r=o.defaultView||o.parentWindow;return a.left+=oe(r),a.top+=oe(r,!0),a}const ge=n.memo(function(t){var e=t.children;return e},function(t,e){var a=e.shouldUpdate;return!a});var le={width:0,height:0,overflow:"hidden",outline:"none"},Re={outline:"none"},he=f.forwardRef(function(t,e){var a=t.prefixCls,o=t.className,r=t.style,m=t.title,c=t.ariaId,v=t.footer,l=t.closable,C=t.closeIcon,N=t.onClose,b=t.children,y=t.bodyStyle,k=t.bodyProps,h=t.modalRender,S=t.onMouseDown,x=t.onMouseUp,T=t.holderRef,M=t.visible,_=t.forceRender,g=t.width,D=t.height,i=t.classNames,u=t.styles,H=f.useContext(se),j=H.panel,X=ye(T,j),V=n.useRef(),U=n.useRef(),K=n.useRef();f.useImperativeHandle(e,function(){return{focus:function(){var I;(I=K.current)===null||I===void 0||I.focus({preventScroll:!0})},changeActive:function(I){var q=document,z=q.activeElement;I&&z===U.current?V.current.focus({preventScroll:!0}):!I&&z===V.current&&U.current.focus({preventScroll:!0})}}});var R={};g!==void 0&&(R.width=g),D!==void 0&&(R.height=D);var w=v?f.createElement("div",{className:E("".concat(a,"-footer"),i==null?void 0:i.footer),style:d({},u==null?void 0:u.footer)},v):null,O=m?f.createElement("div",{className:E("".concat(a,"-header"),i==null?void 0:i.header),style:d({},u==null?void 0:u.header)},f.createElement("div",{className:"".concat(a,"-title"),id:c},m)):null,A=n.useMemo(function(){return ee(l)==="object"&&l!==null?l:l?{closeIcon:C??f.createElement("span",{className:"".concat(a,"-close-x")})}:{}},[l,C,a]),W=re(A,!0),Y=ee(l)==="object"&&l.disabled,L=l?f.createElement("button",P({type:"button",onClick:N,"aria-label":"Close"},W,{className:"".concat(a,"-close"),disabled:Y}),A.closeIcon):null,$=f.createElement("div",{className:E("".concat(a,"-content"),i==null?void 0:i.content),style:u==null?void 0:u.content},L,O,f.createElement("div",P({className:E("".concat(a,"-body"),i==null?void 0:i.body),style:d(d({},y),u==null?void 0:u.body)},k),b),w);return f.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":m?c:null,"aria-modal":"true",ref:X,style:d(d({},r),R),className:E(a,o),onMouseDown:S,onMouseUp:x},f.createElement("div",{tabIndex:0,ref:V,style:le,"aria-hidden":"true"}),f.createElement("div",{ref:K,tabIndex:-1,style:Re},f.createElement(ge,{shouldUpdate:M||_},h?h($):$)),f.createElement("div",{tabIndex:0,ref:U,style:le,"aria-hidden":"true"}))}),ce=n.forwardRef(function(t,e){var a=t.prefixCls,o=t.title,r=t.style,m=t.className,c=t.visible,v=t.forceRender,l=t.destroyOnClose,C=t.motionName,N=t.ariaId,b=t.onVisibleChanged,y=t.mousePosition,k=n.useRef(),h=n.useState(),S=Z(h,2),x=S[0],T=S[1],M={};x&&(M.transformOrigin=x);function _(){var g=Ne(k.current);T(y&&(y.x||y.y)?"".concat(y.x-g.left,"px ").concat(y.y-g.top,"px"):"")}return n.createElement(ie,{visible:c,onVisibleChanged:b,onAppearPrepare:_,onEnterPrepare:_,forceRender:v,motionName:C,removeOnLeave:l,ref:k},function(g,D){var i=g.className,u=g.style;return n.createElement(he,P({},t,{ref:e,title:o,ariaId:N,prefixCls:a,holderRef:D,style:d(d(d({},u),r),M),className:E(m,i)}))})});ce.displayName="Content";var Ee=function(e){var a=e.prefixCls,o=e.style,r=e.visible,m=e.maskProps,c=e.motionName,v=e.className;return n.createElement(ie,{key:"mask",visible:r,motionName:c,leavedClassName:"".concat(a,"-mask-hidden")},function(l,C){var N=l.className,b=l.style;return n.createElement("div",P({ref:C,style:d(d({},b),o),className:E("".concat(a,"-mask"),N,v)},m))})},ke=function(e){var a=e.prefixCls,o=a===void 0?"rc-dialog":a,r=e.zIndex,m=e.visible,c=m===void 0?!1:m,v=e.keyboard,l=v===void 0?!0:v,C=e.focusTriggerAfterClose,N=C===void 0?!0:C,b=e.wrapStyle,y=e.wrapClassName,k=e.wrapProps,h=e.onClose,S=e.afterOpenChange,x=e.afterClose,T=e.transitionName,M=e.animation,_=e.closable,g=_===void 0?!0:_,D=e.mask,i=D===void 0?!0:D,u=e.maskTransitionName,H=e.maskAnimation,j=e.maskClosable,X=j===void 0?!0:j,V=e.maskStyle,U=e.maskProps,K=e.rootClassName,R=e.classNames,w=e.styles,O=n.useRef(),A=n.useRef(),W=n.useRef(),Y=n.useState(c),L=Z(Y,2),$=L[0],B=L[1],I=be();function q(){te(A.current,document.activeElement)||(O.current=document.activeElement)}function z(){if(!te(A.current,document.activeElement)){var s;(s=W.current)===null||s===void 0||s.focus()}}function ue(s){if(s)z();else{if(B(!1),i&&O.current&&N){try{O.current.focus({preventScroll:!0})}catch{}O.current=null}$&&(x==null||x())}S==null||S(s)}function G(s){h==null||h(s)}var F=n.useRef(!1),J=n.useRef(),de=function(){clearTimeout(J.current),F.current=!0},fe=function(){J.current=setTimeout(function(){F.current=!1})},p=null;X&&(p=function(Q){F.current?F.current=!1:A.current===Q.target&&G(Q)});function me(s){if(l&&s.keyCode===ae.ESC){s.stopPropagation(),G(s);return}c&&s.keyCode===ae.TAB&&W.current.changeActive(!s.shiftKey)}n.useEffect(function(){c&&(B(!0),q())},[c]),n.useEffect(function(){return function(){clearTimeout(J.current)}},[]);var ve=d(d(d({zIndex:r},b),w==null?void 0:w.wrapper),{},{display:$?null:"none"});return n.createElement("div",P({className:E("".concat(o,"-root"),K)},re(e,{data:!0})),n.createElement(Ee,{prefixCls:o,visible:i&&c,motionName:ne(o,u,H),style:d(d({zIndex:r},V),w==null?void 0:w.mask),maskProps:U,className:R==null?void 0:R.mask}),n.createElement("div",P({tabIndex:-1,onKeyDown:me,className:E("".concat(o,"-wrap"),y,R==null?void 0:R.wrapper),ref:A,onClick:p,style:ve},k),n.createElement(ce,P({},e,{onMouseDown:de,onMouseUp:fe,ref:W,closable:g,ariaId:I,prefixCls:o,visible:c&&$,onClose:G,onVisibleChanged:ue,motionName:ne(o,T,M)}))))},Se=function(e){var a=e.visible,o=e.getContainer,r=e.forceRender,m=e.destroyOnClose,c=m===void 0?!1:m,v=e.afterClose,l=e.panelRef,C=n.useState(a),N=Z(C,2),b=N[0],y=N[1],k=n.useMemo(function(){return{panel:l}},[l]);return n.useEffect(function(){a&&y(!0)},[a]),!r&&c&&!b?null:n.createElement(se.Provider,{value:k},n.createElement(Ce,{open:a||r||b,autoDestroy:!1,getContainer:o,autoLock:a||b},n.createElement(ke,P({},e,{destroyOnClose:c,afterClose:function(){v==null||v(),y(!1)}}))))};Se.displayName="Dialog";export{Se as D,he as P};
