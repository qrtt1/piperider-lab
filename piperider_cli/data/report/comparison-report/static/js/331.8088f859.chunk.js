"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[331],{77592:function(e,i,n){n.r(i),n.d(i,{CRPage:function(){return H},default:function(){return K}});var t=n(82904),l=n(68794),r=n(78282),s=n(11288),o=n(53182),a=n(1831),d=n(5322),x=n(61431),c=n(7615),u=n(86830),h=n(31756),v=n(12158),j=n(83129),m=n(26564),p=n(82122),f=n(87437),g=n(86629),b=n(50874),C=n(15887);function y(){var e,i,n,t;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"assertion-list-page"}});var l=(0,h.useState)(""),r=(0,x.Z)(l,2),s=r[0],o=r[1],d=g.n.getState(),y=d.assertionsOnly,w=d.isCloudReport,z=(y||{}).metadata,S=w?b.ee:b.p0;return(0,C.jsxs)(c.xu,{children:[(0,C.jsxs)(u.bZ,{status:"warning",mb:5,children:[(0,C.jsx)(u.zM,{}),(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(u.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,C.jsxs)(u.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,C.jsx)(c.rU,{href:S,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"})}),(0,C.jsx)(c.kC,{maxW:f.eb-50,w:"100%",mt:5,children:(0,C.jsx)(v.f,{onChange:o,filterString:s})}),(0,C.jsx)(c.kC,{justify:"start",maxW:f.eb-50,w:"100%",my:5,children:(0,C.jsx)(j.z4,{baseAssertionFailed:null===z||void 0===z||null===(e=z.base)||void 0===e?void 0:e.failed,baseAssertionTotal:null===z||void 0===z||null===(i=z.base)||void 0===i?void 0:i.total,targetAssertionFailed:null===z||void 0===z||null===(n=z.target)||void 0===n?void 0:n.failed,targetAssertionTotal:null===z||void 0===z||null===(t=z.target)||void 0===t?void 0:t.total})}),(0,C.jsx)(m.O,{w:f.eb,comparableAssertions:y,filterString:s,setFilterString:o})]})}var w=n(11060),z=n(4911),S=n.n(z),_=n(44163);function T(){var e,i,n,r;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"metrics-page"}});var s=a.nq.getState(),o=s.tableColumnsOnly,u=s.rawData,h=(0,t.yj)(d.TQ),v=(0,x.Z)(h,2),j=v[0],m=v[1],f=null!==(e=null===u||void 0===u||null===(i=u.base)||void 0===i?void 0:i.metrics)&&void 0!==e?e:[],g=null!==(n=null===u||void 0===u||null===(r=u.input)||void 0===r?void 0:r.metrics)&&void 0!==n?n:[];if(j){var b=null===m||void 0===m?void 0:m.uniqueId,y=S().find(o,(function(e){return(0,x.Z)(e,1)[0]===b}));if(y){var z=(0,x.Z)(y,2)[1],T=z.base,A=z.target;f=(null===T||void 0===T?void 0:T.__queries)||[],g=(null===A||void 0===A?void 0:A.__queries)||[]}}var W=S().uniq([].concat((0,w.Z)(g.map((function(e){return e.name}))),(0,w.Z)(f.map((function(e){return e.name})))));return(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"})}),(0,C.jsxs)(c.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[W.map((function(e){var i=f.find((function(i){return i.name===e})),n=g.find((function(i){return i.name===e}));return(0,C.jsx)(c.P4,{children:(0,C.jsx)(_.l,{data:{base:i,target:n}})},e)})),0===W.length&&(0,C.jsx)(l.Jd,{text:"No metrics data available"})]})]})}var A=n(12471),W=n(67708),N=n(20962),k=n(84641),Z=n(83512),D=n(7267),P=n(50421);function F(){var e,i,n=(0,d.vs)(),t=null===n||void 0===n?void 0:n.uniqueId,l=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||""),r=decodeURIComponent((null===n||void 0===n?void 0:n.columnName)||"");(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"column-details-page"}});var s=g.n.getState().tableColumnsOnly,o=void 0===s?[]:s,u=t||"table.".concat(l);if(void 0===u)return(0,C.jsx)(Z.J,{text:"No data found for '".concat(u,".").concat(r,"'")});var h=o.find((function(e){return(0,x.Z)(e,1)[0]===u}));if(!h)return(0,C.jsx)(Z.J,{text:"No data found for '".concat(u,".").concat(r,"'")});var v=null===(e=h[1].base)||void 0===e?void 0:e.__table,j=null===v||void 0===v?void 0:v.columns,m=j?j[r]:void 0,b=null===(i=h[1].target)||void 0===i?void 0:i.__table,y=null===b||void 0===b?void 0:b.columns,w=y?y[r]:void 0,z=w||m,S=(m||{}).type,_=(w||{}).type;if(!m&&!w)return(0,C.jsx)(Z.J,{text:"No profile data found for '".concat(l,".").concat(r,"'")});function T(e){var i=e.title,n=e.Comp;return void 0===m?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(n,{columnDatum:w})]}):void 0===w?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(n,{columnDatum:m})]}):(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]}),(0,C.jsx)(c.iz,{}),(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:8,minWidth:0,children:[(0,C.jsx)(n,{columnDatum:m}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{columnDatum:w})]})]})}function F(e){var i=e.children;function n(){return(0,C.jsx)(c.xu,{bg:"gray.100",width:"100%",height:"100%",borderWidth:"2px",borderColor:"lightgray"})}return void 0===m?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{}),(0,C.jsx)(c.iz,{orientation:"vertical"}),i]}):void 0===w?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[i,(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{})]}):(0,C.jsx)(C.Fragment,{children:i})}var q=(0,D.MM)(null===z||void 0===z?void 0:z.type),E=q.backgroundColor,B=q.icon;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(P.Q,{title:r,subtitle:null===z||void 0===z?void 0:z.schema_type,infoTip:(null===w||void 0===w?void 0:w.description)||(null===m||void 0===m?void 0:m.description),mb:5,borderBottom:f.dx,icon:B,iconColor:E}),(0,C.jsx)(I,{}),(0,C.jsx)(F,{children:(0,C.jsxs)(c.gC,{spacing:10,children:[(0,C.jsx)(T,{title:"Data Composition",Comp:A.t}),((0,D.jl)(S)||(0,D.jl)(_))&&(0,C.jsx)(T,{title:z?"".concat((0,a.B1)(null===z||void 0===z?void 0:z.type)," Statistics"):"Type Statistics",Comp:N.E}),((0,D.hG)(S)||(0,D.hG)(_))&&(0,C.jsx)(T,{title:"Quantile Data",Comp:k.M}),(0,C.jsx)(T,{title:"Visualizations",Comp:W.r})]})})]})}function I(){return(0,C.jsx)(c.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(e,i){return(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:e})},i)}))})}var q=n(97348),E=n(24777),B=n(96741),R=n(90346);function O(){var e,i,n=(0,d.e$)(),t=n.tableName,l=n.uniqueId;t=decodeURIComponent(t||""),(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"table-details-page"}});var r=g.n.getState().tableColumnsOnly,s=void 0===r?[]:r,o=l||"table.".concat(t),u=s.find((function(e){return(0,x.Z)(e,1)[0]===o}));if(!u)return(0,C.jsx)(Z.J,{text:"No data found for table '".concat(o,"'")});var h=(0,x.Z)(u,2)[1],v=h.base,j=h.target,m=null===v||void 0===v?void 0:v.__table,f=null===j||void 0===j?void 0:j.__table;function b(e){var i=e.title,n=e.Comp;return void 0===m?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsx)(n,{tableDatum:f})]}):void 0===f?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsx)(n,{tableDatum:m})]}):(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{tableDatum:m}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{tableDatum:f})]})]})}function y(e){var i=e.title,n=e.children;function t(){return void 0===m||void 0===f?(0,C.jsx)(c.xv,{fontSize:"xl",children:i}):(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]})}return(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(t,{}),(0,C.jsx)(c.iz,{my:1}),n]})}function w(e){var i=e.children;function n(){return(0,C.jsx)(c.xu,{bg:"gray.100",width:"100%",height:"100%",borderWidth:"2px",borderColor:"lightgray"})}return void 0===m?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{}),(0,C.jsx)(c.iz,{orientation:"vertical"}),i]}):void 0===f?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[i,(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{})]}):(0,C.jsx)(C.Fragment,{children:i})}return(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(P.Q,{title:null===(e=f||m)||void 0===e?void 0:e.name,subtitle:"Table",mb:5,infoTip:null===(i=f||m)||void 0===i?void 0:i.description}),(0,C.jsx)(G,{}),(0,C.jsx)(w,{children:(0,C.jsxs)(c.gC,{spacing:10,children:[(0,C.jsx)(b,{title:"Table Statistics",Comp:B.S}),(0,C.jsx)(y,{title:"Schema",children:(0,C.jsx)(J,{tableEntry:u})}),(0,C.jsx)(b,{title:"Duplicate Rows",Comp:R.e})]})})]})}function G(){return(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,mb:10,children:[(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:"Base"})}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:"Target"})})]})}function J(e){var i=e.tableEntry,n=(0,x.Z)(i,2)[1],t=n.base,l=n.target,r=l||t,s=function(){return(0,C.jsx)(c.kC,{direction:"column",width:"100%",children:(0,C.jsx)(q.xJ,{width:"100%",children:(0,C.jsxs)(q.iA,{variant:"simple",children:[(0,C.jsx)(q.hr,{children:(0,C.jsxs)(q.Tr,{children:[(0,C.jsx)(q.Th,{width:"25%",children:"Base Column"}),(0,C.jsx)(q.Th,{width:"25%",borderRight:"1px",borderRightColor:"gray.200",children:"Base Type"}),(0,C.jsx)(q.Th,{width:"25%",children:"Traget Column"}),(0,C.jsx)(q.Th,{width:"25%",children:"Target Type"})]})}),(0,C.jsx)(q.p3,{children:null===r||void 0===r?void 0:r.__columns.map((function(e){var i,n,t,l,r,s,o=(0,x.Z)(e,3),a=o[0],d=o[1],u=d.base,h=d.target,v=o[2];return(0,C.jsxs)(q.Tr,{_hover:{bg:"blackAlpha.50",cursor:"inherit"},"data-cy":"table-list-schema-item",children:[(0,C.jsx)(q.Td,{color:null!==v&&void 0!==v&&v.mismatched?"red.500":"inherit",maxW:"350px",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",noOfLines:1,whiteSpace:"normal",title:null!==(i=null===u||void 0===u?void 0:u.name)&&void 0!==i?i:E.Nj,children:null!==(n=null===u||void 0===u?void 0:u.name)&&void 0!==n?n:E.Nj})}),(0,C.jsx)(q.Td,{color:null!==v&&void 0!==v&&v.mismatched?"red.500":"inherit",borderRight:"1px",borderRightColor:"gray.200",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(t=null===u||void 0===u?void 0:u.schema_type)&&void 0!==t?t:E.Nj})}),(0,C.jsx)(q.Td,{color:null!==v&&void 0!==v&&v.mismatched?"red.500":"inherit",whiteSpace:"normal",children:(0,C.jsx)(c.xv,{fontSize:"xs",as:"span",noOfLines:1,whiteSpace:"normal",title:null!==(l=null===h||void 0===h?void 0:h.name)&&void 0!==l?l:E.Nj,children:null!==(r=null===h||void 0===h?void 0:h.name)&&void 0!==r?r:E.Nj})}),(0,C.jsx)(q.Td,{color:null!==v&&void 0!==v&&v.mismatched?"red.500":"inherit",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(s=null===h||void 0===h?void 0:h.schema_type)&&void 0!==s?s:E.Nj})})]},a)}))})]})})})},o=function(){return(0,C.jsx)(c.kC,{direction:"column",width:"100%",children:(0,C.jsx)(q.xJ,{width:"100%",children:(0,C.jsxs)(q.iA,{variant:"simple",children:[(0,C.jsx)(q.hr,{children:(0,C.jsxs)(q.Tr,{children:[(0,C.jsx)(q.Th,{width:"50%",children:"Column"}),(0,C.jsx)(q.Th,{width:"50%",children:"Type"})]})}),(0,C.jsx)(q.p3,{children:null===r||void 0===r?void 0:r.__columns.map((function(e){var i,n,t,l=(0,x.Z)(e,3),r=l[0],s=l[1],o=s.base,a=s.target,d=(l[2],o||a);return(0,C.jsxs)(q.Tr,{_hover:{bg:"blackAlpha.50",cursor:"inherit"},"data-cy":"table-list-schema-item",children:[(0,C.jsx)(q.Td,{maxW:"350px",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",noOfLines:1,whiteSpace:"normal",title:null!==(i=null===d||void 0===d?void 0:d.name)&&void 0!==i?i:E.Nj,children:null!==(n=null===d||void 0===d?void 0:d.name)&&void 0!==n?n:E.Nj})}),(0,C.jsx)(q.Td,{children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(t=null===d||void 0===d?void 0:d.schema_type)&&void 0!==t?t:E.Nj})})]},r)}))})]})})})};return void 0===(null===t||void 0===t?void 0:t.name)||void 0===(null===l||void 0===l?void 0:l.name)?(0,C.jsx)(o,{}):(0,C.jsx)(s,{})}var M=n(82175),V=n(85939),Q=n(33660),L=n(24236),U=n(95282),X=n(93354);function $(){var e,i,n,t,l;(0,p.mq)({eventName:U.FP.PAGE_VIEW,eventProperties:{type:U.bB,page:"table-list-page"}});var r,s=(0,Q.qY)(),o=(0,h.useState)(-1),a=(0,x.Z)(o,2),d=a[0],u=a[1],v=g.n.getState(),j=v.tableColumnsOnly,m=void 0===j?[]:j,b=v.assertionsOnly,y=v.isLegacy,w=S().sortBy(m,(function(e){var i,n=(0,x.Z)(e,2)[1],t=n.base,l=n.target,r=null!==l&&void 0!==l?l:t;return null===r||void 0===r||null===(i=r.__table)||void 0===i?void 0:i.name}));if(-1!==d){var z=(0,x.Z)(w[d],2)[1],_=z.base,T=z.target;r=null!==T&&void 0!==T?T:_}return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(c.kC,{direction:"column",w:"100%",minHeight:"650px",children:[(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"})}),(0,C.jsxs)(c.rj,{templateColumns:f.Dp,maxW:f.xD,px:4,my:6,children:[(0,C.jsx)(c.xv,{children:"Name"}),(0,C.jsx)(c.xv,{children:"Summary"}),(0,C.jsx)(c.xv,{children:"Assertions"})]}),w.map((function(e,i){var n=(0,x.Z)(e,2)[1],t=n.base,l=n.target,r=null!==t&&void 0!==t?t:l;return null!==r&&void 0!==r&&r.__table&&(y||"table"!==(null===r||void 0===r?void 0:r.resource_type))?(0,C.jsx)(c.kC,{children:(0,C.jsx)(V.h,{combinedAssertions:b,combinedTableEntry:e,onInfoClick:function(){u(i),s.onOpen()}})},i):(0,C.jsx)(C.Fragment,{})}))]}),(0,C.jsxs)(X.W,(0,M.Z)((0,M.Z)({},s),{},{size:"2xl",title:null===(e=r)||void 0===e||null===(i=e.__table)||void 0===i?void 0:i.name,onClose:function(){u(-1),s.onClose()},children:[(0,C.jsxs)(c.xv,{fontSize:"lg",mb:4,children:["Description:"," ",(null===(n=r)||void 0===n||null===(t=n.__table)||void 0===t?void 0:t.description)||(0,C.jsx)(c.xv,{as:"i",children:"No description provided."})]}),-1!==d&&(0,C.jsx)(L.r,{columns:null===(l=r)||void 0===l?void 0:l.__columns})]}))]})}function H(e){var i=e.data,n=e.cloud,x=e.sideNavTop,c=void 0===x?"0px":x;return(0,a.nq)((function(e){return e.setReportRawData}))(i),(0,C.jsx)(t.F0,{hook:o.w,children:(0,C.jsx)(t.rs,{children:(0,C.jsx)(r.$,{cloud:n,sideNavTop:c,children:(0,C.jsxs)(t.rs,{children:[(0,C.jsx)(t.AW,{path:d.bw,children:(0,C.jsx)($,{})}),(0,C.jsx)(t.AW,{path:d.KX,children:(0,C.jsx)($,{})}),(0,C.jsx)(t.AW,{path:d.KX,children:(0,C.jsx)($,{})}),(0,C.jsx)(t.AW,{path:d.WF,children:(0,C.jsx)(O,{})}),(0,C.jsx)(t.AW,{path:d.t3,children:(0,C.jsx)(F,{})}),(0,C.jsx)(t.AW,{path:d.mo,children:(0,C.jsx)(O,{})}),(0,C.jsx)(t.AW,{path:d.n3,children:(0,C.jsx)(F,{})}),(0,C.jsx)(t.AW,{path:d.d2,children:(0,C.jsx)(O,{})}),(0,C.jsx)(t.AW,{path:d.Sx,children:(0,C.jsx)(F,{})}),(0,C.jsx)(t.AW,{path:d.iB,children:(0,C.jsx)(O,{})}),(0,C.jsx)(t.AW,{path:d.dF,children:(0,C.jsx)(F,{})}),(0,C.jsx)(t.AW,{path:d.$n,children:(0,C.jsx)(y,{})}),(0,C.jsx)(t.AW,{path:d.xH,children:(0,C.jsx)(T,{})}),(0,C.jsx)(t.AW,{path:d.TQ,children:(0,C.jsx)(T,{})}),(0,C.jsx)(t.AW,{path:d.Mu,children:(0,C.jsx)(l.gb,{})}),(0,C.jsx)(t.AW,{children:(0,C.jsx)(s.T,{})})]})})})})}var K=H}}]);
//# sourceMappingURL=331.8088f859.chunk.js.map