import{r}from"./react-CG4nFigO.js";import{c as Vt,a as mn,u as te}from"./@rc-component-Y3WVOzwK.js";import{o as rt,n as at,G as pn,i as Ie,h as Dn,x as Dt,c as jt,q as jn,O as Qe,P as Un,Q as Yn,k as Ut,d as Gn,E as Yt,A as qn}from"./rc-util-DVFD5dlp.js";import{g as D,f as Le,b as O,h,j as re,k as He,i as me}from"./@babel-BqpdSp3b.js";import{c as Z}from"./classnames-BK5ccKcQ.js";import{R as xn}from"./rc-resize-observer-DD0qS7na.js";import{L as Gt}from"./rc-virtual-list-D-jFHIFP.js";var Te={},Ze="rc-table-internal-hook",Cn=Vt(),ot=Cn.makeImmutable,Be=Cn.responseImmutable,qt=Cn.useImmutableMark,oe=mn(),lt=r.createContext({renderWithProps:!1}),Qt="RC_TABLE_KEY";function Jt(e){return e==null?[]:Array.isArray(e)?e:[e]}function en(e){var n=[],a={};return e.forEach(function(t){for(var o=t||{},l=o.key,c=o.dataIndex,s=l||Jt(c).join("-")||Qt;a[s];)s="".concat(s,"_next");a[s]=!0,n.push(s)}),n}function fn(e){return e!=null}function Zt(e){return e&&Le(e)==="object"&&!Array.isArray(e)&&!r.isValidElement(e)}function er(e,n,a,t,o,l){var c=r.useContext(lt),s=qt(),i=rt(function(){if(fn(t))return[t];var d=n==null||n===""?[]:Array.isArray(n)?n:[n],m=pn(e,d),v=m,f=void 0;if(o){var u=o(m,e,a);Zt(u)?(v=u.children,f=u.props,c.renderWithProps=!0):v=u}return[v,f]},[s,e,t,n,o,a],function(d,m){if(l){var v=D(d,2),f=v[1],u=D(m,2),p=u[1];return l(p,f)}return c.renderWithProps?!0:!at(d,m,!0)});return i}function nr(e,n,a,t){var o=e+n-1;return e<=t&&o>=a}function tr(e,n){return te(oe,function(a){var t=nr(e,n||1,a.hoverStartRow,a.hoverEndRow);return[t,a.onHover]})}var rr=function(n){var a=n.ellipsis,t=n.rowType,o=n.children,l,c=a===!0?{showTitle:!0}:a;return c&&(c.showTitle||t==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():r.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function ar(e){var n,a,t,o,l,c,s,i,d=e.component,m=e.children,v=e.ellipsis,f=e.scope,u=e.prefixCls,p=e.className,w=e.align,g=e.record,k=e.render,N=e.dataIndex,L=e.renderIndex,T=e.shouldCellUpdate,S=e.index,M=e.rowType,H=e.colSpan,B=e.rowSpan,P=e.fixLeft,$=e.fixRight,X=e.firstFixLeft,E=e.lastFixLeft,I=e.firstFixRight,b=e.lastFixRight,F=e.appendNode,R=e.additionalProps,x=R===void 0?{}:R,y=e.isSticky,C="".concat(u,"-cell"),W=te(oe,["supportSticky","allColumnsFixedLeft","rowHoverable"]),A=W.supportSticky,ee=W.allColumnsFixedLeft,Y=W.rowHoverable,he=er(g,N,L,m,k,T),se=D(he,2),ie=se[0],j=se[1],ne={},V=typeof P=="number"&&A,pe=typeof $=="number"&&A;V&&(ne.position="sticky",ne.left=P),pe&&(ne.position="sticky",ne.right=$);var xe=(n=(a=(t=j==null?void 0:j.colSpan)!==null&&t!==void 0?t:x.colSpan)!==null&&a!==void 0?a:H)!==null&&n!==void 0?n:1,le=(o=(l=(c=j==null?void 0:j.rowSpan)!==null&&c!==void 0?c:x.rowSpan)!==null&&l!==void 0?l:B)!==null&&o!==void 0?o:1,Me=tr(S,le),U=D(Me,2),G=U[0],ae=U[1],ge=Ie(function(Re){var ye;g&&ae(S,S+le-1),x==null||(ye=x.onMouseEnter)===null||ye===void 0||ye.call(x,Re)}),we=Ie(function(Re){var ye;g&&ae(-1,-1),x==null||(ye=x.onMouseLeave)===null||ye===void 0||ye.call(x,Re)});if(xe===0||le===0)return null;var Xe=(s=x.title)!==null&&s!==void 0?s:rr({rowType:M,ellipsis:v,children:ie}),ze=Z(C,p,(i={},O(i,"".concat(C,"-fix-left"),V&&A),O(i,"".concat(C,"-fix-left-first"),X&&A),O(i,"".concat(C,"-fix-left-last"),E&&A),O(i,"".concat(C,"-fix-left-all"),E&&ee&&A),O(i,"".concat(C,"-fix-right"),pe&&A),O(i,"".concat(C,"-fix-right-first"),I&&A),O(i,"".concat(C,"-fix-right-last"),b&&A),O(i,"".concat(C,"-ellipsis"),v),O(i,"".concat(C,"-with-append"),F),O(i,"".concat(C,"-fix-sticky"),(V||pe)&&y&&A),O(i,"".concat(C,"-row-hover"),!j&&G),i),x.className,j==null?void 0:j.className),fe={};w&&(fe.textAlign=w);var Ce=h(h(h(h({},ne),x.style),fe),j==null?void 0:j.style),K=ie;return Le(K)==="object"&&!Array.isArray(K)&&!r.isValidElement(K)&&(K=null),v&&(E||I)&&(K=r.createElement("span",{className:"".concat(C,"-content")},K)),r.createElement(d,re({},j,x,{className:ze,style:Ce,title:Xe,scope:f,onMouseEnter:Y?ge:void 0,onMouseLeave:Y?we:void 0,colSpan:xe!==1?xe:null,rowSpan:le!==1?le:null}),F,K)}const _e=r.memo(ar);function yn(e,n,a,t,o){var l=a[e]||{},c=a[n]||{},s,i;l.fixed==="left"?s=t.left[o==="rtl"?n:e]:c.fixed==="right"&&(i=t.right[o==="rtl"?e:n]);var d=!1,m=!1,v=!1,f=!1,u=a[n+1],p=a[e-1],w=u&&!u.fixed||p&&!p.fixed||a.every(function(T){return T.fixed==="left"});if(o==="rtl"){if(s!==void 0){var g=p&&p.fixed==="left";f=!g&&w}else if(i!==void 0){var k=u&&u.fixed==="right";v=!k&&w}}else if(s!==void 0){var N=u&&u.fixed==="left";d=!N&&w}else if(i!==void 0){var L=p&&p.fixed==="right";m=!L&&w}return{fixLeft:s,fixRight:i,lastFixLeft:d,firstFixRight:m,lastFixRight:v,firstFixLeft:f,isSticky:t.isSticky}}var it=r.createContext({});function or(e){var n=e.className,a=e.index,t=e.children,o=e.colSpan,l=o===void 0?1:o,c=e.rowSpan,s=e.align,i=te(oe,["prefixCls","direction"]),d=i.prefixCls,m=i.direction,v=r.useContext(it),f=v.scrollColumnIndex,u=v.stickyOffsets,p=v.flattenColumns,w=a+l-1,g=w+1===f?l+1:l,k=yn(a,a+g-1,p,u,m);return r.createElement(_e,re({className:n,index:a,component:"td",prefixCls:d,record:null,dataIndex:null,align:s,colSpan:g,rowSpan:c,render:function(){return t}},k))}var lr=["children"];function ir(e){var n=e.children,a=He(e,lr);return r.createElement("tr",a,n)}function nn(e){var n=e.children;return n}nn.Row=ir;nn.Cell=or;function cr(e){var n=e.children,a=e.stickyOffsets,t=e.flattenColumns,o=te(oe,"prefixCls"),l=t.length-1,c=t[l],s=r.useMemo(function(){return{stickyOffsets:a,flattenColumns:t,scrollColumnIndex:c!=null&&c.scrollbar?l:null}},[c,t,l,a]);return r.createElement(it.Provider,{value:s},r.createElement("tfoot",{className:"".concat(o,"-summary")},n))}const Je=Be(cr);var sr=nn;function ur(e){return null}function dr(e){return null}function ct(e,n,a,t,o,l,c){e.push({record:n,indent:a,index:c});var s=l(n),i=o==null?void 0:o.has(s);if(n&&Array.isArray(n[t])&&i)for(var d=0;d<n[t].length;d+=1)ct(e,n[t][d],a+1,t,o,l,d)}function st(e,n,a,t){var o=r.useMemo(function(){if(a!=null&&a.size){for(var l=[],c=0;c<(e==null?void 0:e.length);c+=1){var s=e[c];ct(l,s,0,n,a,t,c)}return l}return e==null?void 0:e.map(function(i,d){return{record:i,indent:0,index:d}})},[e,n,a,t]);return o}function ut(e,n,a,t){var o=te(oe,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,c=o.expandableType,s=o.expandedKeys,i=o.childrenColumnName,d=o.onTriggerExpand,m=o.rowExpandable,v=o.onRow,f=o.expandRowByClick,u=o.rowClassName,p=c==="nest",w=c==="row"&&(!m||m(e)),g=w||p,k=s&&s.has(n),N=i&&e&&e[i],L=Ie(d),T=v==null?void 0:v(e,a),S=T==null?void 0:T.onClick,M=function($){f&&g&&d(e,$);for(var X=arguments.length,E=new Array(X>1?X-1:0),I=1;I<X;I++)E[I-1]=arguments[I];S==null||S.apply(void 0,[$].concat(E))},H;typeof u=="string"?H=u:typeof u=="function"&&(H=u(e,a,t));var B=en(l);return h(h({},o),{},{columnsKey:B,nestExpandable:p,expanded:k,hasNestChildren:N,record:e,onTriggerExpand:L,rowSupportExpand:w,expandable:g,rowProps:h(h({},T),{},{className:Z(H,T==null?void 0:T.className),onClick:M})})}function dt(e){var n=e.prefixCls,a=e.children,t=e.component,o=e.cellComponent,l=e.className,c=e.expanded,s=e.colSpan,i=e.isEmpty,d=te(oe,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),m=d.scrollbarSize,v=d.fixHeader,f=d.fixColumn,u=d.componentWidth,p=d.horizonScroll,w=a;return(i?p&&u:f)&&(w=r.createElement("div",{style:{width:u-(v?m:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(n,"-expanded-row-fixed")},w)),r.createElement(t,{className:l,style:{display:c?null:"none"}},r.createElement(_e,{component:o,prefixCls:n,colSpan:s},w))}function ft(e,n,a,t,o){var l=e.record,c=e.prefixCls,s=e.columnsKey,i=e.fixedInfoList,d=e.expandIconColumnIndex,m=e.nestExpandable,v=e.indentSize,f=e.expandIcon,u=e.expanded,p=e.hasNestChildren,w=e.onTriggerExpand,g=s[a],k=i[a],N;a===(d||0)&&m&&(N=r.createElement(r.Fragment,null,r.createElement("span",{style:{paddingLeft:"".concat(v*t,"px")},className:"".concat(c,"-row-indent indent-level-").concat(t)}),f({prefixCls:c,expanded:u,expandable:p,record:l,onExpand:w})));var L;return n.onCell&&(L=n.onCell(l,o)),{key:g,fixedInfo:k,appendCellNode:N,additionalCellProps:L||{}}}function fr(e){var n=e.className,a=e.style,t=e.record,o=e.index,l=e.renderIndex,c=e.rowKey,s=e.indent,i=s===void 0?0:s,d=e.rowComponent,m=e.cellComponent,v=e.scopeCellComponent,f=ut(t,c,o,i),u=f.prefixCls,p=f.flattenColumns,w=f.expandedRowClassName,g=f.expandedRowRender,k=f.rowProps,N=f.expanded,L=f.rowSupportExpand,T=r.useRef(!1);T.current||(T.current=N);var S=w&&w(t,o,i),M=r.createElement(d,re({},k,{"data-row-key":c,className:Z(n,"".concat(u,"-row"),"".concat(u,"-row-level-").concat(i),k==null?void 0:k.className,i>=1?S:""),style:h(h({},a),k==null?void 0:k.style)}),p.map(function(P,$){var X=P.render,E=P.dataIndex,I=P.className,b=ft(f,P,$,i,o),F=b.key,R=b.fixedInfo,x=b.appendCellNode,y=b.additionalCellProps;return r.createElement(_e,re({className:I,ellipsis:P.ellipsis,align:P.align,scope:P.rowScope,component:P.rowScope?v:m,prefixCls:u,key:F,record:t,index:o,renderIndex:l,dataIndex:E,render:X,shouldCellUpdate:P.shouldCellUpdate},R,{appendNode:x,additionalProps:y}))})),H;if(L&&(T.current||N)){var B=g(t,o,i+1,N);H=r.createElement(dt,{expanded:N,className:Z("".concat(u,"-expanded-row"),"".concat(u,"-expanded-row-level-").concat(i+1),S),prefixCls:u,component:d,cellComponent:m,colSpan:p.length,isEmpty:!1},B)}return r.createElement(r.Fragment,null,M,H)}const vr=Be(fr);function mr(e){var n=e.columnKey,a=e.onColumnResize,t=r.useRef();return r.useEffect(function(){t.current&&a(n,t.current.offsetWidth)},[]),r.createElement(xn,{data:n},r.createElement("td",{ref:t,style:{padding:0,border:0,height:0}},r.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function pr(e){var n=e.prefixCls,a=e.columnsKey,t=e.onColumnResize;return r.createElement("tr",{"aria-hidden":"true",className:"".concat(n,"-measure-row"),style:{height:0,fontSize:0}},r.createElement(xn.Collection,{onBatchResize:function(l){l.forEach(function(c){var s=c.data,i=c.size;t(s,i.offsetWidth)})}},a.map(function(o){return r.createElement(mr,{key:o,columnKey:o,onColumnResize:t})})))}function xr(e){var n=e.data,a=e.measureColumnWidth,t=te(oe,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=t.prefixCls,l=t.getComponent,c=t.onColumnResize,s=t.flattenColumns,i=t.getRowKey,d=t.expandedKeys,m=t.childrenColumnName,v=t.emptyNode,f=st(n,m,d,i),u=r.useRef({renderWithProps:!1}),p=l(["body","wrapper"],"tbody"),w=l(["body","row"],"tr"),g=l(["body","cell"],"td"),k=l(["body","cell"],"th"),N;n.length?N=f.map(function(T,S){var M=T.record,H=T.indent,B=T.index,P=i(M,S);return r.createElement(vr,{key:P,rowKey:P,record:M,index:S,renderIndex:B,rowComponent:w,cellComponent:g,scopeCellComponent:k,getRowKey:i,indent:H})}):N=r.createElement(dt,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:w,cellComponent:g,colSpan:s.length,isEmpty:!0},v);var L=en(s);return r.createElement(lt.Provider,{value:u.current},r.createElement(p,{className:"".concat(o,"-tbody")},a&&r.createElement(pr,{prefixCls:o,columnsKey:L,onColumnResize:c}),N))}const Cr=Be(xr);var yr=["expandable"],vt="RC_TABLE_INTERNAL_COL_DEFINE";function hr(e){var n=e.expandable,a=He(e,yr),t;return"expandable"in e?t=h(h({},a),n):t=a,t.showExpandColumn===!1&&(t.expandIconColumnIndex=-1),t}var gr=["columnType"];function mt(e){for(var n=e.colWidths,a=e.columns,t=e.columCount,o=[],l=t||a.length,c=!1,s=l-1;s>=0;s-=1){var i=n[s],d=a&&a[s],m=d&&d[vt];if(i||m||c){var v=m||{};v.columnType;var f=He(v,gr);o.unshift(r.createElement("col",re({key:s,style:{width:i}},f))),c=!0}}return r.createElement("colgroup",null,o)}var wr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function Sr(e,n){return r.useMemo(function(){for(var a=[],t=0;t<n;t+=1){var o=e[t];if(o!==void 0)a[t]=o;else return null}return a},[e.join("_"),n])}var Rr=r.forwardRef(function(e,n){var a=e.className,t=e.noData,o=e.columns,l=e.flattenColumns,c=e.colWidths,s=e.columCount,i=e.stickyOffsets,d=e.direction,m=e.fixHeader,v=e.stickyTopOffset,f=e.stickyBottomOffset,u=e.stickyClassName,p=e.onScroll,w=e.maxContentScroll,g=e.children,k=He(e,wr),N=te(oe,["prefixCls","scrollbarSize","isSticky","getComponent"]),L=N.prefixCls,T=N.scrollbarSize,S=N.isSticky,M=N.getComponent,H=M(["header","table"],"table"),B=S&&!m?0:T,P=r.useRef(null),$=r.useCallback(function(y){Dn(n,y),Dn(P,y)},[]);r.useEffect(function(){var y;function C(W){var A=W,ee=A.currentTarget,Y=A.deltaX;Y&&(p({currentTarget:ee,scrollLeft:ee.scrollLeft+Y}),W.preventDefault())}return(y=P.current)===null||y===void 0||y.addEventListener("wheel",C,{passive:!1}),function(){var W;(W=P.current)===null||W===void 0||W.removeEventListener("wheel",C)}},[]);var X=r.useMemo(function(){return l.every(function(y){return y.width})},[l]),E=l[l.length-1],I={fixed:E?E.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(L,"-cell-scrollbar")}}},b=r.useMemo(function(){return B?[].concat(me(o),[I]):o},[B,o]),F=r.useMemo(function(){return B?[].concat(me(l),[I]):l},[B,l]),R=r.useMemo(function(){var y=i.right,C=i.left;return h(h({},i),{},{left:d==="rtl"?[].concat(me(C.map(function(W){return W+B})),[0]):C,right:d==="rtl"?y:[].concat(me(y.map(function(W){return W+B})),[0]),isSticky:S})},[B,i,S]),x=Sr(c,s);return r.createElement("div",{style:h({overflow:"hidden"},S?{top:v,bottom:f}:{}),ref:$,className:Z(a,O({},u,!!u))},r.createElement(H,{style:{tableLayout:"fixed",visibility:t||x?null:"hidden"}},(!t||!w||X)&&r.createElement(mt,{colWidths:x?[].concat(me(x),[B]):[],columCount:s+1,columns:F}),g(h(h({},k),{},{stickyOffsets:R,columns:b,flattenColumns:F}))))});const Qn=r.memo(Rr);var Er=function(n){var a=n.cells,t=n.stickyOffsets,o=n.flattenColumns,l=n.rowComponent,c=n.cellComponent,s=n.onHeaderRow,i=n.index,d=te(oe,["prefixCls","direction"]),m=d.prefixCls,v=d.direction,f;s&&(f=s(a.map(function(p){return p.column}),i));var u=en(a.map(function(p){return p.column}));return r.createElement(l,f,a.map(function(p,w){var g=p.column,k=yn(p.colStart,p.colEnd,o,t,v),N;return g&&g.onHeaderCell&&(N=p.column.onHeaderCell(g)),r.createElement(_e,re({},p,{scope:g.title?p.colSpan>1?"colgroup":"col":null,ellipsis:g.ellipsis,align:g.align,component:c,prefixCls:m,key:u[w]},k,{additionalProps:N,rowType:"header"}))}))};function br(e){var n=[];function a(c,s){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;n[i]=n[i]||[];var d=s,m=c.filter(Boolean).map(function(v){var f={key:v.key,className:v.className||"",children:v.title,column:v,colStart:d},u=1,p=v.children;return p&&p.length>0&&(u=a(p,d,i+1).reduce(function(w,g){return w+g},0),f.hasSubColumns=!0),"colSpan"in v&&(u=v.colSpan),"rowSpan"in v&&(f.rowSpan=v.rowSpan),f.colSpan=u,f.colEnd=f.colStart+u-1,n[i].push(f),d+=u,u});return m}a(e,0);for(var t=n.length,o=function(s){n[s].forEach(function(i){!("rowSpan"in i)&&!i.hasSubColumns&&(i.rowSpan=t-s)})},l=0;l<t;l+=1)o(l);return n}var Nr=function(n){var a=n.stickyOffsets,t=n.columns,o=n.flattenColumns,l=n.onHeaderRow,c=te(oe,["prefixCls","getComponent"]),s=c.prefixCls,i=c.getComponent,d=r.useMemo(function(){return br(t)},[t]),m=i(["header","wrapper"],"thead"),v=i(["header","row"],"tr"),f=i(["header","cell"],"th");return r.createElement(m,{className:"".concat(s,"-thead")},d.map(function(u,p){var w=r.createElement(Er,{key:p,flattenColumns:o,cells:u,stickyOffsets:a,rowComponent:v,cellComponent:f,onHeaderRow:l,index:p});return w}))};const Jn=Be(Nr);function Zn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof n=="number"?n:n.endsWith("%")?e*parseFloat(n)/100:null}function kr(e,n,a){return r.useMemo(function(){if(n&&n>0){var t=0,o=0;e.forEach(function(f){var u=Zn(n,f.width);u?t+=u:o+=1});var l=Math.max(n,a),c=Math.max(l-t,o),s=o,i=c/o,d=0,m=e.map(function(f){var u=h({},f),p=Zn(n,u.width);if(p)u.width=p;else{var w=Math.floor(i);u.width=s===1?c:w,c-=w,s-=1}return d+=u.width,u});if(d<l){var v=l/d;c=l,m.forEach(function(f,u){var p=Math.floor(f.width*v);f.width=u===m.length-1?c:p,c-=p})}return[m,Math.max(d,l)]}return[e,n]},[e,n,a])}var Tr=["children"],Ir=["fixed"];function pt(e){return Dt(e).filter(function(n){return r.isValidElement(n)}).map(function(n){var a=n.key,t=n.props,o=t.children,l=He(t,Tr),c=h({key:a},l);return o&&(c.children=pt(o)),c})}function xt(e){return e.filter(function(n){return n&&Le(n)==="object"&&!n.hidden}).map(function(n){var a=n.children;return a&&a.length>0?h(h({},n),{},{children:xt(a)}):n})}function vn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(a){return a&&Le(a)==="object"}).reduce(function(a,t,o){var l=t.fixed,c=l===!0?"left":l,s="".concat(n,"-").concat(o),i=t.children;return i&&i.length>0?[].concat(me(a),me(vn(i,s).map(function(d){return h({fixed:c},d)}))):[].concat(me(a),[h(h({key:s},t),{},{fixed:c})])},[])}function Lr(e){return e.map(function(n){var a=n.fixed,t=He(n,Ir),o=a;return a==="left"?o="right":a==="right"&&(o="left"),h({fixed:o},t)})}function Hr(e,n){var a=e.prefixCls,t=e.columns,o=e.children,l=e.expandable,c=e.expandedKeys,s=e.columnTitle,i=e.getRowKey,d=e.onTriggerExpand,m=e.expandIcon,v=e.rowExpandable,f=e.expandIconColumnIndex,u=e.direction,p=e.expandRowByClick,w=e.columnWidth,g=e.fixed,k=e.scrollWidth,N=e.clientWidth,L=r.useMemo(function(){var E=t||pt(o)||[];return xt(E.slice())},[t,o]),T=r.useMemo(function(){if(l){var E,I=L.slice();if(!I.includes(Te)){var b=f||0;b>=0&&I.splice(b,0,Te)}var F=I.indexOf(Te);I=I.filter(function(C,W){return C!==Te||W===F});var R=L[F],x;(g==="left"||g)&&!f?x="left":(g==="right"||g)&&f===L.length?x="right":x=R?R.fixed:null;var y=(E={},O(E,vt,{className:"".concat(a,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),O(E,"title",s),O(E,"fixed",x),O(E,"className","".concat(a,"-row-expand-icon-cell")),O(E,"width",w),O(E,"render",function(W,A,ee){var Y=i(A,ee),he=c.has(Y),se=v?v(A):!0,ie=m({prefixCls:a,expanded:he,expandable:se,record:A,onExpand:d});return p?r.createElement("span",{onClick:function(ne){return ne.stopPropagation()}},ie):ie}),E);return I.map(function(C){return C===Te?y:C})}return L.filter(function(C){return C!==Te})},[l,L,i,c,m,u]),S=r.useMemo(function(){var E=T;return n&&(E=n(E)),E.length||(E=[{render:function(){return null}}]),E},[n,T,u]),M=r.useMemo(function(){return u==="rtl"?Lr(vn(S)):vn(S)},[S,u,k]),H=r.useMemo(function(){for(var E=-1,I=M.length-1;I>=0;I-=1){var b=M[I].fixed;if(b==="left"||b===!0){E=I;break}}if(E>=0)for(var F=0;F<=E;F+=1){var R=M[F].fixed;if(R!=="left"&&R!==!0)return!0}var x=M.findIndex(function(W){var A=W.fixed;return A==="right"});if(x>=0)for(var y=x;y<M.length;y+=1){var C=M[y].fixed;if(C!=="right")return!0}return!1},[M]),B=kr(M,k,N),P=D(B,2),$=P[0],X=P[1];return[S,$,X,H]}function _r(e){var n,a=e.prefixCls,t=e.record,o=e.onExpand,l=e.expanded,c=e.expandable,s="".concat(a,"-row-expand-icon");if(!c)return r.createElement("span",{className:Z(s,"".concat(a,"-row-spaced"))});var i=function(m){o(t,m),m.stopPropagation()};return r.createElement("span",{className:Z(s,(n={},O(n,"".concat(a,"-row-expanded"),l),O(n,"".concat(a,"-row-collapsed"),!l),n)),onClick:i})}function Mr(e,n,a){var t=[];function o(l){(l||[]).forEach(function(c,s){t.push(n(c,s)),o(c[a])})}return o(e),t}function Pr(e,n,a){var t=hr(e),o=t.expandIcon,l=t.expandedRowKeys,c=t.defaultExpandedRowKeys,s=t.defaultExpandAllRows,i=t.expandedRowRender,d=t.onExpand,m=t.onExpandedRowsChange,v=t.childrenColumnName,f=o||_r,u=v||"children",p=r.useMemo(function(){return i?"row":e.expandable&&e.internalHooks===Ze&&e.expandable.__PARENT_RENDER_ICON__||n.some(function(S){return S&&Le(S)==="object"&&S[u]})?"nest":!1},[!!i,n]),w=r.useState(function(){return c||(s?Mr(n,a,u):[])}),g=D(w,2),k=g[0],N=g[1],L=r.useMemo(function(){return new Set(l||k||[])},[l,k]),T=r.useCallback(function(S){var M=a(S,n.indexOf(S)),H,B=L.has(M);B?(L.delete(M),H=me(L)):H=[].concat(me(L),[M]),N(H),d&&d(!B,S),m&&m(H)},[a,L,n,d,m]);return[t,p,L,f,u,T]}function Kr(e,n,a){var t=e.map(function(o,l){return yn(l,l,e,n,a)});return rt(function(){return t},[t],function(o,l){return!at(o,l)})}function Ct(e){var n=r.useRef(e),a=r.useState({}),t=D(a,2),o=t[1],l=r.useRef(null),c=r.useRef([]);function s(i){c.current.push(i);var d=Promise.resolve();l.current=d,d.then(function(){if(l.current===d){var m=c.current,v=n.current;c.current=[],m.forEach(function(f){n.current=f(n.current)}),l.current=null,v!==n.current&&o({})}})}return r.useEffect(function(){return function(){l.current=null}},[]),[n.current,s]}function Fr(e){var n=r.useRef(null),a=r.useRef();function t(){window.clearTimeout(a.current)}function o(c){n.current=c,t(),a.current=window.setTimeout(function(){n.current=null,a.current=void 0},100)}function l(){return n.current}return r.useEffect(function(){return t},[]),[o,l]}function Or(){var e=r.useState(-1),n=D(e,2),a=n[0],t=n[1],o=r.useState(-1),l=D(o,2),c=l[0],s=l[1],i=r.useCallback(function(d,m){t(d),s(m)},[]);return[a,c,i]}var et=jt()?window:null;function Br(e,n){var a=Le(e)==="object"?e:{},t=a.offsetHeader,o=t===void 0?0:t,l=a.offsetSummary,c=l===void 0?0:l,s=a.offsetScroll,i=s===void 0?0:s,d=a.getContainer,m=d===void 0?function(){return et}:d,v=m()||et;return r.useMemo(function(){var f=!!e;return{isSticky:f,stickyClassName:f?"".concat(n,"-sticky-holder"):"",offsetHeader:o,offsetSummary:c,offsetScroll:i,container:v}},[i,o,c,n,v])}function $r(e,n,a){var t=r.useMemo(function(){var o=n.length,l=function(d,m,v){for(var f=[],u=0,p=d;p!==m;p+=v)f.push(u),n[p].fixed&&(u+=e[p]||0);return f},c=l(0,o,1),s=l(o-1,-1,-1).reverse();return a==="rtl"?{left:s,right:c}:{left:c,right:s}},[e,n,a]);return t}function nt(e){var n=e.className,a=e.children;return r.createElement("div",{className:n},a)}var zr=function(n,a){var t,o,l=n.scrollBodyRef,c=n.onScroll,s=n.offsetScroll,i=n.container,d=te(oe,"prefixCls"),m=((t=l.current)===null||t===void 0?void 0:t.scrollWidth)||0,v=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,f=m&&v*(v/m),u=r.useRef(),p=Ct({scrollLeft:0,isHiddenScrollBar:!1}),w=D(p,2),g=w[0],k=w[1],N=r.useRef({delta:0,x:0}),L=r.useState(!1),T=D(L,2),S=T[0],M=T[1],H=r.useRef(null);r.useEffect(function(){return function(){jn.cancel(H.current)}},[]);var B=function(){M(!1)},P=function(b){b.persist(),N.current.delta=b.pageX-g.scrollLeft,N.current.x=0,M(!0),b.preventDefault()},$=function(b){var F,R=b||((F=window)===null||F===void 0?void 0:F.event),x=R.buttons;if(!S||x===0){S&&M(!1);return}var y=N.current.x+b.pageX-N.current.x-N.current.delta;y<=0&&(y=0),y+f>=v&&(y=v-f),c({scrollLeft:y/v*(m+2)}),N.current.x=b.pageX},X=function(){H.current=jn(function(){if(l.current){var b=Yn(l.current).top,F=b+l.current.offsetHeight,R=i===window?document.documentElement.scrollTop+window.innerHeight:Yn(i).top+i.clientHeight;F-Un()<=R||b>=R-s?k(function(x){return h(h({},x),{},{isHiddenScrollBar:!0})}):k(function(x){return h(h({},x),{},{isHiddenScrollBar:!1})})}})},E=function(b){k(function(F){return h(h({},F),{},{scrollLeft:b/m*v||0})})};return r.useImperativeHandle(a,function(){return{setScrollLeft:E,checkScrollBarVisible:X}}),r.useEffect(function(){var I=Qe(document.body,"mouseup",B,!1),b=Qe(document.body,"mousemove",$,!1);return X(),function(){I.remove(),b.remove()}},[f,S]),r.useEffect(function(){var I=Qe(i,"scroll",X,!1),b=Qe(window,"resize",X,!1);return function(){I.remove(),b.remove()}},[i]),r.useEffect(function(){g.isHiddenScrollBar||k(function(I){var b=l.current;return b?h(h({},I),{},{scrollLeft:b.scrollLeft/b.scrollWidth*b.clientWidth}):I})},[g.isHiddenScrollBar]),m<=v||!f||g.isHiddenScrollBar?null:r.createElement("div",{style:{height:Un(),width:v,bottom:s},className:"".concat(d,"-sticky-scroll")},r.createElement("div",{onMouseDown:P,ref:u,className:Z("".concat(d,"-sticky-scroll-bar"),O({},"".concat(d,"-sticky-scroll-bar-active"),S)),style:{width:"".concat(f,"px"),transform:"translate3d(".concat(g.scrollLeft,"px, 0, 0)")}}))};const Wr=r.forwardRef(zr);var yt="rc-table",Ar=[],Xr={};function Vr(){return"No Data"}function Dr(e,n){var a,t=h({rowKey:"key",prefixCls:yt,emptyText:Vr},e),o=t.prefixCls,l=t.className,c=t.rowClassName,s=t.style,i=t.data,d=t.rowKey,m=t.scroll,v=t.tableLayout,f=t.direction,u=t.title,p=t.footer,w=t.summary,g=t.caption,k=t.id,N=t.showHeader,L=t.components,T=t.emptyText,S=t.onRow,M=t.onHeaderRow,H=t.onScroll,B=t.internalHooks,P=t.transformColumns,$=t.internalRefs,X=t.tailor,E=t.getContainerWidth,I=t.sticky,b=t.rowHoverable,F=b===void 0?!0:b,R=i||Ar,x=!!R.length,y=B===Ze,C=r.useCallback(function(_,z){return pn(L,_)||z},[L]),W=r.useMemo(function(){return typeof d=="function"?d:function(_){var z=_&&_[d];return z}},[d]),A=C(["body"]),ee=Or(),Y=D(ee,3),he=Y[0],se=Y[1],ie=Y[2],j=Pr(t,R,W),ne=D(j,6),V=ne[0],pe=ne[1],xe=ne[2],le=ne[3],Me=ne[4],U=ne[5],G=m==null?void 0:m.x,ae=r.useState(0),ge=D(ae,2),we=ge[0],Xe=ge[1],ze=Hr(h(h(h({},t),V),{},{expandable:!!V.expandedRowRender,columnTitle:V.columnTitle,expandedKeys:xe,getRowKey:W,onTriggerExpand:U,expandIcon:le,expandIconColumnIndex:V.expandIconColumnIndex,direction:f,scrollWidth:y&&X&&typeof G=="number"?G:null,clientWidth:we}),y?P:null),fe=D(ze,4),Ce=fe[0],K=fe[1],Re=fe[2],ye=fe[3],Ee=Re??G,gn=r.useMemo(function(){return{columns:Ce,flattenColumns:K}},[Ce,K]),be=r.useRef(),tn=r.useRef(),q=r.useRef(),wn=r.useRef();r.useImperativeHandle(n,function(){return{nativeElement:be.current,scrollTo:function(z){var Q;if(q.current instanceof HTMLElement){var ce=z.index,J=z.top,Oe=z.key;if(J){var Ne;(Ne=q.current)===null||Ne===void 0||Ne.scrollTo({top:J})}else{var ke,Ae=Oe??W(R[ce]);(ke=q.current.querySelector('[data-row-key="'.concat(Ae,'"]')))===null||ke===void 0||ke.scrollIntoView()}}else(Q=q.current)!==null&&Q!==void 0&&Q.scrollTo&&q.current.scrollTo(z)}}});var Sn=r.useRef(),gt=r.useState(!1),Rn=D(gt,2),wt=Rn[0],Ve=Rn[1],St=r.useState(!1),En=D(St,2),Rt=En[0],De=En[1],Et=Ct(new Map),bn=D(Et,2),bt=bn[0],Nt=bn[1],kt=en(K),Nn=kt.map(function(_){return bt.get(_)}),kn=r.useMemo(function(){return Nn},[Nn.join("_")]),je=$r(kn,K,f),ue=m&&fn(m.y),ve=m&&fn(Ee)||!!V.fixed,Pe=ve&&K.some(function(_){var z=_.fixed;return z}),rn=r.useRef(),Ke=Br(I,o),Se=Ke.isSticky,Tt=Ke.offsetHeader,It=Ke.offsetSummary,Lt=Ke.offsetScroll,Ht=Ke.stickyClassName,_t=Ke.container,de=r.useMemo(function(){return w==null?void 0:w(R)},[w,R]),We=(ue||Se)&&r.isValidElement(de)&&de.type===nn&&de.props.fixed,an,Ue,on;ue&&(Ue={overflowY:"scroll",maxHeight:m.y}),ve&&(an={overflowX:"auto"},ue||(Ue={overflowY:"hidden"}),on={width:Ee===!0?"auto":Ee,minWidth:"100%"});var Tn=r.useCallback(function(_,z){Ut(be.current)&&Nt(function(Q){if(Q.get(_)!==z){var ce=new Map(Q);return ce.set(_,z),ce}return Q})},[]),Mt=Fr(),In=D(Mt,2),Pt=In[0],Ln=In[1];function Ye(_,z){z&&(typeof z=="function"?z(_):z.scrollLeft!==_&&(z.scrollLeft=_,z.scrollLeft!==_&&setTimeout(function(){z.scrollLeft=_},0)))}var Fe=Ie(function(_){var z=_.currentTarget,Q=_.scrollLeft,ce=f==="rtl",J=typeof Q=="number"?Q:z.scrollLeft,Oe=z||Xr;if(!Ln()||Ln()===Oe){var Ne;Pt(Oe),Ye(J,tn.current),Ye(J,q.current),Ye(J,Sn.current),Ye(J,(Ne=rn.current)===null||Ne===void 0?void 0:Ne.setScrollLeft)}var ke=z||tn.current;if(ke){var Ae=ke.scrollWidth,dn=ke.clientWidth;if(Ae===dn){Ve(!1),De(!1);return}ce?(Ve(-J<Ae-dn),De(-J>0)):(Ve(J>0),De(J<Ae-dn))}}),Kt=Ie(function(_){Fe(_),H==null||H(_)}),Hn=function(){ve&&q.current?Fe({currentTarget:q.current}):(Ve(!1),De(!1))},Ft=function(z){var Q,ce=z.width;(Q=rn.current)===null||Q===void 0||Q.checkScrollBarVisible();var J=be.current?be.current.offsetWidth:ce;y&&E&&be.current&&(J=E(be.current,J)||J),J!==we&&(Hn(),Xe(J))},_n=r.useRef(!1);r.useEffect(function(){_n.current&&Hn()},[ve,i,Ce.length]),r.useEffect(function(){_n.current=!0},[]);var Ot=r.useState(0),Mn=D(Ot,2),Ge=Mn[0],Pn=Mn[1],Bt=r.useState(!0),Kn=D(Bt,2),Fn=Kn[0],$t=Kn[1];r.useEffect(function(){(!X||!y)&&(q.current instanceof Element?Pn(Gn(q.current).width):Pn(Gn(wn.current).width)),$t(Yt("position","sticky"))},[]),r.useEffect(function(){y&&$&&($.body.current=q.current)});var zt=r.useCallback(function(_){return r.createElement(r.Fragment,null,r.createElement(Jn,_),We==="top"&&r.createElement(Je,_,de))},[We,de]),Wt=r.useCallback(function(_){return r.createElement(Je,_,de)},[de]),On=C(["table"],"table"),qe=r.useMemo(function(){return v||(Pe?Ee==="max-content"?"auto":"fixed":ue||Se||K.some(function(_){var z=_.ellipsis;return z})?"fixed":"auto")},[ue,Pe,K,v,Se]),ln,cn={colWidths:kn,columCount:K.length,stickyOffsets:je,onHeaderRow:M,fixHeader:ue,scroll:m},Bn=r.useMemo(function(){return x?null:typeof T=="function"?T():T},[x,T]),$n=r.createElement(Cr,{data:R,measureColumnWidth:ue||ve||Se}),zn=r.createElement(mt,{colWidths:K.map(function(_){var z=_.width;return z}),columns:K}),Wn=g!=null?r.createElement("caption",{className:"".concat(o,"-caption")},g):void 0,At=qn(t,{data:!0}),An=qn(t,{aria:!0});if(ue||Se){var sn;typeof A=="function"?(sn=A(R,{scrollbarSize:Ge,ref:q,onScroll:Fe}),cn.colWidths=K.map(function(_,z){var Q=_.width,ce=z===K.length-1?Q-Ge:Q;return typeof ce=="number"&&!Number.isNaN(ce)?ce:0})):sn=r.createElement("div",{style:h(h({},an),Ue),onScroll:Kt,ref:q,className:Z("".concat(o,"-body"))},r.createElement(On,re({style:h(h({},on),{},{tableLayout:qe})},An),Wn,zn,$n,!We&&de&&r.createElement(Je,{stickyOffsets:je,flattenColumns:K},de)));var Xn=h(h(h({noData:!R.length,maxContentScroll:ve&&Ee==="max-content"},cn),gn),{},{direction:f,stickyClassName:Ht,onScroll:Fe});ln=r.createElement(r.Fragment,null,N!==!1&&r.createElement(Qn,re({},Xn,{stickyTopOffset:Tt,className:"".concat(o,"-header"),ref:tn}),zt),sn,We&&We!=="top"&&r.createElement(Qn,re({},Xn,{stickyBottomOffset:It,className:"".concat(o,"-summary"),ref:Sn}),Wt),Se&&q.current&&q.current instanceof Element&&r.createElement(Wr,{ref:rn,offsetScroll:Lt,scrollBodyRef:q,onScroll:Fe,container:_t}))}else ln=r.createElement("div",{style:h(h({},an),Ue),className:Z("".concat(o,"-content")),onScroll:Fe,ref:q},r.createElement(On,re({style:h(h({},on),{},{tableLayout:qe})},An),Wn,zn,N!==!1&&r.createElement(Jn,re({},cn,gn)),$n,de&&r.createElement(Je,{stickyOffsets:je,flattenColumns:K},de)));var un=r.createElement("div",re({className:Z(o,l,(a={},O(a,"".concat(o,"-rtl"),f==="rtl"),O(a,"".concat(o,"-ping-left"),wt),O(a,"".concat(o,"-ping-right"),Rt),O(a,"".concat(o,"-layout-fixed"),v==="fixed"),O(a,"".concat(o,"-fixed-header"),ue),O(a,"".concat(o,"-fixed-column"),Pe),O(a,"".concat(o,"-fixed-column-gapped"),Pe&&ye),O(a,"".concat(o,"-scroll-horizontal"),ve),O(a,"".concat(o,"-has-fix-left"),K[0]&&K[0].fixed),O(a,"".concat(o,"-has-fix-right"),K[K.length-1]&&K[K.length-1].fixed==="right"),a)),style:s,id:k,ref:be},At),u&&r.createElement(nt,{className:"".concat(o,"-title")},u(R)),r.createElement("div",{ref:wn,className:"".concat(o,"-container")},ln),p&&r.createElement(nt,{className:"".concat(o,"-footer")},p(R)));ve&&(un=r.createElement(xn,{onResize:Ft},un));var Vn=Kr(K,je,f),Xt=r.useMemo(function(){return{scrollX:Ee,prefixCls:o,getComponent:C,scrollbarSize:Ge,direction:f,fixedInfoList:Vn,isSticky:Se,supportSticky:Fn,componentWidth:we,fixHeader:ue,fixColumn:Pe,horizonScroll:ve,tableLayout:qe,rowClassName:c,expandedRowClassName:V.expandedRowClassName,expandIcon:le,expandableType:pe,expandRowByClick:V.expandRowByClick,expandedRowRender:V.expandedRowRender,onTriggerExpand:U,expandIconColumnIndex:V.expandIconColumnIndex,indentSize:V.indentSize,allColumnsFixedLeft:K.every(function(_){return _.fixed==="left"}),emptyNode:Bn,columns:Ce,flattenColumns:K,onColumnResize:Tn,hoverStartRow:he,hoverEndRow:se,onHover:ie,rowExpandable:V.rowExpandable,onRow:S,getRowKey:W,expandedKeys:xe,childrenColumnName:Me,rowHoverable:F}},[Ee,o,C,Ge,f,Vn,Se,Fn,we,ue,Pe,ve,qe,c,V.expandedRowClassName,le,pe,V.expandRowByClick,V.expandedRowRender,U,V.expandIconColumnIndex,V.indentSize,Bn,Ce,K,Tn,he,se,ie,V.rowExpandable,S,W,xe,Me,F]);return r.createElement(oe.Provider,{value:Xt},un)}var jr=r.forwardRef(Dr);function Ur(e){return ot(jr,e)}var $e=Ur();$e.EXPAND_COLUMN=Te;$e.INTERNAL_HOOKS=Ze;$e.Column=ur;$e.ColumnGroup=dr;$e.Summary=sr;var hn=mn(null),ht=mn(null);function Yr(e,n,a){var t=n||1;return a[e+t]-(a[e]||0)}function Gr(e){var n=e.rowInfo,a=e.column,t=e.colIndex,o=e.indent,l=e.index,c=e.component,s=e.renderIndex,i=e.record,d=e.style,m=e.className,v=e.inverse,f=e.getHeight,u=a.render,p=a.dataIndex,w=a.className,g=a.width,k=te(ht,["columnsOffset"]),N=k.columnsOffset,L=ft(n,a,t,o,l),T=L.key,S=L.fixedInfo,M=L.appendCellNode,H=L.additionalCellProps,B=H.style,P=H.colSpan,$=P===void 0?1:P,X=H.rowSpan,E=X===void 0?1:X,I=t-1,b=Yr(I,$,N),F=$>1?g-b:0,R=h(h(h({},B),d),{},{flex:"0 0 ".concat(b,"px"),width:"".concat(b,"px"),marginRight:F,pointerEvents:"auto"}),x=r.useMemo(function(){return v?E<=1:$===0||E===0||E>1},[E,$,v]);x?R.visibility="hidden":v&&(R.height=f==null?void 0:f(E));var y=x?function(){return null}:u,C={};return(E===0||$===0)&&(C.rowSpan=1,C.colSpan=1),r.createElement(_e,re({className:Z(w,m),ellipsis:a.ellipsis,align:a.align,scope:a.rowScope,component:c,prefixCls:n.prefixCls,key:T,record:i,index:l,renderIndex:s,dataIndex:p,render:y,shouldCellUpdate:a.shouldCellUpdate},S,{appendNode:M,additionalProps:h(h({},H),{},{style:R},C)}))}var qr=["data","index","className","rowKey","style","extra","getHeight"],Qr=r.forwardRef(function(e,n){var a=e.data,t=e.index,o=e.className,l=e.rowKey,c=e.style,s=e.extra,i=e.getHeight,d=He(e,qr),m=a.record,v=a.indent,f=a.index,u=te(oe,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),p=u.scrollX,w=u.flattenColumns,g=u.prefixCls,k=u.fixColumn,N=u.componentWidth,L=te(hn,["getComponent"]),T=L.getComponent,S=ut(m,l,t,v),M=T(["body","row"],"div"),H=T(["body","cell"],"div"),B=S.rowSupportExpand,P=S.expanded,$=S.rowProps,X=S.expandedRowRender,E=S.expandedRowClassName,I;if(B&&P){var b=X(m,t,v+1,P),F=E==null?void 0:E(m,t,v),R={};k&&(R={style:O({},"--virtual-width","".concat(N,"px"))});var x="".concat(g,"-expanded-row-cell");I=r.createElement(M,{className:Z("".concat(g,"-expanded-row"),"".concat(g,"-expanded-row-level-").concat(v+1),F)},r.createElement(_e,{component:H,prefixCls:g,className:Z(x,O({},"".concat(x,"-fixed"),k)),additionalProps:R},b))}var y=h(h({},c),{},{width:p});s&&(y.position="absolute",y.pointerEvents="none");var C=r.createElement(M,re({},$,d,{"data-row-key":l,ref:B?null:n,className:Z(o,"".concat(g,"-row"),$==null?void 0:$.className,O({},"".concat(g,"-row-extra"),s)),style:h(h({},y),$==null?void 0:$.style)}),w.map(function(W,A){return r.createElement(Gr,{key:A,component:H,rowInfo:S,column:W,colIndex:A,indent:v,index:t,renderIndex:f,record:m,inverse:s,getHeight:i})}));return B?r.createElement("div",{ref:n},C,I):C}),tt=Be(Qr),Jr=r.forwardRef(function(e,n){var a=e.data,t=e.onScroll,o=te(oe,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,c=o.onColumnResize,s=o.getRowKey,i=o.expandedKeys,d=o.prefixCls,m=o.childrenColumnName,v=o.emptyNode,f=o.scrollX,u=te(hn),p=u.sticky,w=u.scrollY,g=u.listItemHeight,k=u.getComponent,N=u.onScroll,L=r.useRef(),T=st(a,m,i,s),S=r.useMemo(function(){var R=0;return l.map(function(x){var y=x.width,C=x.key;return R+=y,[C,y,R]})},[l]),M=r.useMemo(function(){return S.map(function(R){return R[2]})},[S]);r.useEffect(function(){S.forEach(function(R){var x=D(R,2),y=x[0],C=x[1];c(y,C)})},[S]),r.useImperativeHandle(n,function(){var R={scrollTo:function(y){var C;(C=L.current)===null||C===void 0||C.scrollTo(y)}};return Object.defineProperty(R,"scrollLeft",{get:function(){var y;return((y=L.current)===null||y===void 0?void 0:y.getScrollInfo().x)||0},set:function(y){var C;(C=L.current)===null||C===void 0||C.scrollTo({left:y})}}),R});var H=function(x,y){var C,W=(C=T[y])===null||C===void 0?void 0:C.record,A=x.onCell;if(A){var ee,Y=A(W,y);return(ee=Y==null?void 0:Y.rowSpan)!==null&&ee!==void 0?ee:1}return 1},B=function(x){var y=x.start,C=x.end,W=x.getSize,A=x.offsetY;if(C<0)return null;for(var ee=l.filter(function(U){return H(U,y)===0}),Y=y,he=function(G){if(ee=ee.filter(function(ae){return H(ae,G)===0}),!ee.length)return Y=G,1},se=y;se>=0&&!he(se);se-=1);for(var ie=l.filter(function(U){return H(U,C)!==1}),j=C,ne=function(G){if(ie=ie.filter(function(ae){return H(ae,G)!==1}),!ie.length)return j=Math.max(G-1,C),1},V=C;V<T.length&&!ne(V);V+=1);for(var pe=[],xe=function(G){var ae=T[G];if(!ae)return 1;l.some(function(ge){return H(ge,G)>1})&&pe.push(G)},le=Y;le<=j;le+=1)xe(le);var Me=pe.map(function(U){var G=T[U],ae=s(G.record,U),ge=function(ze){var fe=U+ze-1,Ce=s(T[fe].record,fe),K=W(ae,Ce);return K.bottom-K.top},we=W(ae);return r.createElement(tt,{key:U,data:G,rowKey:ae,index:U,style:{top:-A+we.top},extra:!0,getHeight:ge})});return Me},P=r.useMemo(function(){return{columnsOffset:M}},[M]),$="".concat(d,"-tbody"),X=k(["body","wrapper"]),E=k(["body","row"],"div"),I=k(["body","cell"],"div"),b;if(T.length){var F={};p&&(F.position="sticky",F.bottom=0,Le(p)==="object"&&p.offsetScroll&&(F.bottom=p.offsetScroll)),b=r.createElement(Gt,{fullHeight:!1,ref:L,prefixCls:"".concat($,"-virtual"),styles:{horizontalScrollBar:F},className:$,height:w,itemHeight:g||24,data:T,itemKey:function(x){return s(x.record)},component:X,scrollWidth:f,onVirtualScroll:function(x){var y=x.x;t({scrollLeft:y})},onScroll:N,extraRender:B},function(R,x,y){var C=s(R.record,x);return r.createElement(tt,{data:R,rowKey:C,index:x,style:y.style})})}else b=r.createElement(E,{className:Z("".concat(d,"-placeholder"))},r.createElement(_e,{component:I,prefixCls:d},v));return r.createElement(ht.Provider,{value:P},b)}),Zr=Be(Jr),ea=function(n,a){var t=a.ref,o=a.onScroll;return r.createElement(Zr,{ref:t,data:n,onScroll:o})};function na(e,n){var a=e.columns,t=e.scroll,o=e.sticky,l=e.prefixCls,c=l===void 0?yt:l,s=e.className,i=e.listItemHeight,d=e.components,m=e.onScroll,v=t||{},f=v.x,u=v.y;typeof f!="number"&&(f=1),typeof u!="number"&&(u=500);var p=Ie(function(k,N){return pn(d,k)||N}),w=Ie(m),g=r.useMemo(function(){return{sticky:o,scrollY:u,listItemHeight:i,getComponent:p,onScroll:w}},[o,u,i,p,w]);return r.createElement(hn.Provider,{value:g},r.createElement($e,re({},e,{className:Z(s,"".concat(c,"-virtual")),scroll:h(h({},t),{},{x:f}),components:h(h({},d),{},{body:ea}),columns:a,internalHooks:Ze,tailor:!0,ref:n})))}var ta=r.forwardRef(na);function ra(e){return ot(ta,e)}ra();export{Te as E,sr as F,vt as I,ra as a,Ze as b,pt as c,Ur as g};
